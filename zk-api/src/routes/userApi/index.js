/*
 * @Author: mikey.gwx 
 * @Date: 2019-03-25 08:53:26 
 * @Last Modified by: mikey.gwx
 * @Last Modified time: 2019-03-25 10:08:12
 * 渲染列表
 */
var Mongo = require("mongodb-curd");
var dName = "list";
var pName = "data";
module.exports = {
    getlist: function(req, res, next) {
        Mongo.find(dName, pName, {}, function(result) {
            if (result) {
                res.send({
                    code: 1,
                    msg: "success",
                    data: result
                })
            } else {
                res.send({
                    code: 0,
                    msg: "error"
                })
            }
        })
    },
    findlist: function(req, res, next) {
        var { _id } = req.body;
        if (!_id) {
            res.send({
                code: 2,
                msg: "缺失参数"
            })
        }
        Mongo.find(dName, pName, {}, function(result) {
            if (result) {
                res.send({
                    code: 1,
                    msg: "success",
                    data: result
                })
            } else {
                res.send({
                    code: 0,
                    msg: "error"
                })
            }
        })
    }
}