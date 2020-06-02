import getLastEvent from '../utils/getLastEvent.js';
import {getSelector} from '../utils/getSelector.js'

export function injectJsError() {
    // 监听全局未捕获错误
    window.addEventListener('error', function (event) {
        // console.log(event)
        let lastEvent = getLastEvent();
        let errData = {
            kind: 'stability', // 稳定性
            type: 'error', // 问题类型
            errorType: 'jsError', // 错误类型
            url: event, // 报错路径
            message: event.message, // 报错信息
            filename: event.filename, // 报错文件
            position: `${event.lineno}:${event.colno}`, // 报错位置
            stack: event.error.stack, // 错误堆栈信息
            selector: lastEvent ? getSelector(lastEvent.path) : null// 最后一个交互元素
        }
        console.log(errData)
    })
}

