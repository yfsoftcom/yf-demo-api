# yf-demo-api

yf-api-server 的演示项目

欢迎拿去娱乐~

## 修改一下config文件

将key_default.js文件复制一份，改名为key.js
`
$ cp key_default.js key.js
`

将里面的mysql配置都该成你自己的就行

## 运行起来

`
$ npm install
`

`
$ node app.js
`

第一步先访问一个地址来创建2张表和一些默认值
[http://yourdomain:8080/init](http://localhost:8080/init)

之后就可以正式使用了

## 我自己部署了一个

地址：[http://120.132.6.80:9000/api](http://120.132.6.80:9000/api)

调用的使用请使用这个 appkey  ： a81bc1bb1122323b

![测试的](http://upload-images.jianshu.io/upload_images/1449977-b787b6f88cfcc4ae.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
