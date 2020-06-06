import tracker from '../utils/tracker';
export function injectXhr() {
    // 缓存当前全局方法
    let XMLHttpRequest = window.XMLHttpRequest;

    // 重写全局open
    let oldOpen = XMLHttpRequest.prototype.open;

    XMLHttpRequest.prototype.open = function (method, url ,async) {
        if(!url.match(/logstores/)){
            this.logData = {method, url, async};
        }
        return oldOpen.apply(this, arguments);
    }

    // 重写全局send
    let oldSend = XMLHttpRequest.prototype.send;

    XMLHttpRequest.prototype.send = function (body) {
        if(this.logData) {
            let startTime = Date.now(); // 记录开始时间
            let handler = (type) => (event) => {
                console.log(event)
                let duration = Date.now() - startTime; // 计算持续时间
                let status = this.status;
                let statusText = this.statusText;
                tracker.send({
                    kind: 'stability', // 类别-稳定性
                    type: 'xhr', // 问题类型-请求问题
                    errorType: statusText, // 错误类型,
                    pathname: this.logData.url, // 请求路径
                    duration: duration, // 持续时间
                    status: `${status}-${statusText}`, // 状态码
                    response: this.response ? JSON.stringify(this.response) : '', // 响应体
                    params: body || '' // 参数
                })

            };
            this.addEventListener('error', handler('error'), false);
            this.addEventListener('load', handler('error'), false);
            this.addEventListener('abort', handler('abort'), false);
        //    12
        }
        
        return oldSend.apply(this, arguments);
    }

    
}