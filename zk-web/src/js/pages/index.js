define(["mui"],function(mui){
	var list = document.querySelector(".list");
	mui.init();
	mui.ajax("/api/getlist",{
		success:function(rs){
			if(rs.code){
				render(rs.data)
			}
		}
	})
	function render(data){
		list.innerHTML = data.map(function(item){
			return `<li data-id="${item._id}">
				<dl>
					<dd>
						<h3>${item.title}</h3>
						<p>${item.main}</p>
						<p>距结束<b>
									${item.time.split("-")[0]}
								</b>天<b>
									${item.time.split("-")[1]}
								</b>小时<b>
									${item.time.split("-")[2]}
									</b>分
						</p>
					</dd>
					<dt>
						<img src="${item.img}" alt="">
					</dt>
				</dl>
			</li>`
		})
	};
	mui(list).on('tap','li',clickfn);
	function clickfn(){
		var index = this.getAttribute("data-id");
		location.href = "/main.html?_id="+index;
	}
})