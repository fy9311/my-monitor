# my-monitor
前端监控试水

# 使用方法
window.Monitor = new Monitor({
  env: true,                    // 整体开关，为ture才会启动
  url: 'http://test',           // 上报地址
  appId: 'test',                // 项目标示
  vueErr: true,                 // 是否开启vue错误监控，注意需要搭配instance使用
  ajax: true,                   // 是否监控ajax错误
  js: true,                     // 是否监控js错误
  promise: true,                // 是否监控promise错误
  blank: true,                  // 首页白屏监控
  instance: Vue,                // vue实例，配合vueErr方可使用
  performance: true,            // 首页加载性能
  custom: true                  // 是否开启自定义上报
})

window.Monitor.sendCustom(data) // data为想要上报的数据


# done
1.基础错误监控
2.测试用例
3.支持api式上报
4.npm包
5.上报参数包装
6.页面地址上报
7.排除监测地址报错 ajax
8.支持api式上报

# feature
上报队列
上报率
支持pv采集
支持图片上报
支持source-map解析
操作回溯