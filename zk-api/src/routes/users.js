var express = require('express');
var router = express.Router();
var userApi = require("./userApi")

/* GET users listing. */
router.get('/api/getlist', userApi.getlist);
router.post('/api/findlist', userApi.findlist);

module.exports = router;
// 1.代码格式规范  10分
// 2.初始化git仓库，并且关联远程仓库地址10分
// 3.以自己的名字做为本地的开发分支，在开发分支进行开发，开发完成合并到master分支提交到线上的master分支 10分
// 4.使用已经搭建完成的gulp编译项目，启动开发环境服务器10分
// 5.创建数据库，创建（商品表，评论表）10分
// 6.使用ajax查询评论列表，并且展示10分
// 7.点击列表项跳转到对应详情10分
// 8.详情页面查询产品详情展示10分
// 9.详情页面查询评论列表进行展示10分
// 10.详情页面实现评论功能10分