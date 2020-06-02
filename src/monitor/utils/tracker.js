// 服务主机名
const host = 'cn-chengdu.log.aliyuncs.com';
// 项目名
const project = 'my-monitor';
// 存储空间名
const logstoreName = 'monitor-store';
// 获取用户浏览器信息
const userAgent = require('user-agent');

// 为data添加额外信息
function getExtraData () {
    return {
        title: document.title,
        // url: location.url,
        timeStamp: Date.now(),
        userAgent: userAgent.parse(navigator.userAgent).name
    }
}

class sendTracker {
    constructor() {
        // 坑点，如果不加http://则会把当前域名加进去
        this.url = `http://${project}.${host}/logstores/${logstoreName}/track`; // 上报路径
        this.xhr = new XMLHttpRequest;
    }

    send(data = {}) {
        let extraData = getExtraData();
        let logs = { ...extraData, ...data };
        for (let key in logs) {
            if (typeof logs[key] === 'number') {
                logs[key] = `${logs[key]}`;
            }
        }
        console.log(logs);
        // console.log(JSON.stringify(logs, null, 2));
        let body = JSON.stringify({
            __logs__: [logs]
        });
        
        this.xhr.open('POST', this.url, true);
        // 版本
        this.xhr.setRequestHeader('x-log-apiversion','0.6.0');
        // 请求体大小
        this.xhr.setRequestHeader('x-log-bodyrawsize', body.length);
        // 压缩算法
        // this.xhr.setRequestHeader('x-log-compresstype', 'lz4');
        // 内容类型
        this.xhr.setRequestHeader('Content-Type', 'application/json');
        // 发送
        this.xhr.send(body);
        // 错误监听
        this.xhr.onerror = () => {
            console.log(this.xhr.response);
        };
        // 完成监听
        this.xhr.onload = () => {
            console.log(this.xhr.response);
        }

        // let data = 
    }
}

export default new sendTracker();