define(["mui"],function(mui){
	mui.init();
	var obj = {};
	location.search.slice(1).split("&").forEach(function(item){
		obj[item.spit("=")[0]] = item.spit("=")[1]
	});
// 	mui.ajax("/api/findlist",{
// 		type:"post",
// 		data:obj,
// 		success:function(rs){
// 			console.log(rs)
// 		}
// 	})
})