# yf-demo-api

yf-api-server 的演示项目

欢迎拿去娱乐~ 

## 修改一下config文件

将里面的mysql配置都该成你自己的就行

## 创建2张默认的表

送上脚本

```
--
-- 表的结构 `api_app`
--

CREATE TABLE IF NOT EXISTS `api_app` (
  `id` int(12) NOT NULL AUTO_INCREMENT,
  `appid` int(12) NOT NULL,
  `appname` varchar(120) NOT NULL,
  `apptype` varchar(120) NOT NULL,
  `appkey` varchar(120) NOT NULL,
  `secretkey` varchar(120) NOT NULL,
  `appenvironment` varchar(120) NOT NULL,
  `approot` varchar(120) NOT NULL,
  `createAt` int(32) NOT NULL,
  `updateAt` int(32) NOT NULL,
  `delflag` int(12) NOT NULL,
  `status` int(12) NOT NULL DEFAULT '1',
  `about` varchar(250) NOT NULL,
  `appurl` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `appid` (`appid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

--
-- 表的结构 `api_record`
--

CREATE TABLE IF NOT EXISTS `api_record` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `appkey` varchar(100) NOT NULL,
  `createAt` bigint(20) NOT NULL,
  `timestamp` bigint(20) NOT NULL,
  `param` varchar(1000) NOT NULL,
  `sign` varchar(100) NOT NULL,
  `v` varchar(100) NOT NULL,
  `method` varchar(100) NOT NULL,
  `updateAt` bigint(20) NOT NULL,
  `delflag` tinyint(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=9 ;

INSERT INTO `api_app` (`id`, `appid`, `appname`, `apptype`, `appkey`, `secretkey`, `appenvironment`, `approot`, `createAt`, `updateAt`, `delflag`, `status`, `about`, `appurl`) VALUES
(1, 10001, 'YFDemoKey', 'PC', 'a81bc1bb1122323b', '3fc4h39d3ed9b33b67fcbc359131e7ee', 'DEV', '*', 1462610156, 1462773916, 0, 1, 'YF所有，抄袭必究', NULL)

-- 这里的appkey 和 secretkey会在接口调用的时候被使用到
-- appkey : 'a81bc1bb1122323b'
```

## 运行起来

`
$ npm install
`

`
$ node app.js
`
