var MOFUN = window.MOFUN || {};

MOFUN.share = function (shareText, apiKeys) {
	shareText = shareText || "";
	apiKeys = apiKeys || {};
	var sinaKey = apiKeys.sina || 3162405350,
		qqKey = apiKeys.qq || 801248333;

	var url = document.location.href.split("#")[0].split("?")[0],
		share = {
			ele: document.createElement("div"),
			title: document.title,
			text: encodeURIComponent(shareText),
			url: encodeURIComponent(url),
			pic: document.getElementById("app-icon").getAttribute("content") || encodeURIComponent(url) + "logo.png"
		};
	share.ele.id = "shareto";

	var sina = document.createElement("iframe");
	sina.id = "share_sina";
	sina.setAttribute("allowTransparency", true);
	sina.setAttribute("frameborder", 0);
	sina.scrolling = "no";
	sina.width = 106;
	sina.height = 24;
	sina.src = "http://service.weibo.com/staticjs/weiboshare.html?url=" + share.url + "&type=5&count=&appkey=" + sinaKey + "&title=" + share.text + "&pic=" + share.pic + "&ralateUid=1616215457&language=zh_cn&rnd=" + new Date().valueOf();
	share.ele.appendChild(sina);

	var qq = document.createElement("a");
	qq.id = "share_qq";
	qq.title = "鍒嗕韩鍒拌吘璁井鍗�";
	qq.target = "_blank";
	qq.innerHTML = "<img src="http://mat1.gtimg.com/app/opent/images/websites/share/b24.png" alt="杞挱鍒拌吘璁井鍗�">";
	qq.href = "http://share.v.t.qq.com/index.php?c=share&a=index&url=" + share.url + "&pic=" + share.pic + "&appkey=" + qqKey + "&title=" + share.text;
	qq.onclick = function () {
		window.open(this.href, "_blank", "height=468,width=612,toolbar=no,menubar=no,scrollbars=yes,resizable=yes,location=yes,status=no");
		return false;
	};
	share.ele.appendChild(qq);
	
	var renren = document.createElement("a");
	renren.id = "share_qzone";
	renren.title = "鍒嗕韩鍒颁汉浜�";
	renren.target = "_blank";
	renren.innerHTML = "<img src="http://xnimg.cn/xnapp/share/img/v/180_24.png" alt="鍒嗕韩鍒颁汉浜�">";
	renren.href = "http://widget.renren.com/dialog/share?resourceUrl=" + share.url + "&srcUrl=" + share.url + "&pic=" + share.pic + "&title=" + share.title + "&description=" + share.text;
	renren.onclick = function () {
		window.open(this.href, "_blank", "width=700,height=650,left=0,top=0,resizable=yes,scrollbars=1");
		return false;
	};
	share.ele.appendChild(renren);
	
	var qzone = document.createElement("a");
	qzone.id = "share_qzone";
	qzone.title = "鍒嗕韩鍒癚Q绌洪棿";
	qzone.target = "_blank";
	qzone.innerHTML = "<img src="http://bcs.duapp.com/picstore/FojDGBZexT.png" alt="鍒嗕韩鍒癚Q绌洪棿">";
	qzone.href = "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=" + share.url + "&pics=" + share.pic + "&title=" + share.title + "&summary=" + share.text + "&site=" + encodeURIComponent("榄旀柟MoFun");
	qzone.onclick = function () {
		window.open(this.href, "_blank", "width=600,height=622,toolbar=no,menubar=no,resizable=yes,scrollbars=1,status=no");
		return false;
	};
	share.ele.appendChild(qzone);

	return share.ele;
};

MOFUN.upgradeBrowser = function (list, ulCss, liCss) {
	list = list || ["ie", "cr", "fx"];
	ulCss = ulCss || "";
	liCss = liCss || "";
	var browsers = {
		"ie": {
			name: "Internet Exlporer",
			link: "http://windows.microsoft.com/zh-CN/internet-explorer/download-ie"
		},
		"cr": {
			name: "Chrome 娴忚鍣�",
			link: "https://www.google.com/intl/zh-CN/chrome/"
		},
		"fx": {
			name: "鐏嫄娴忚鍣�",
			link: "http://firefox.com.cn/"
		}
	};
	var div = document.createElement("ul");
	div.id = "upgradebrowser";
	div.style.cssText = ulCss;
	var temp = "";
	for (var i = 0, l = list.length; i < l; i++) {
		if (list[i] in browsers) {
			var browser = browsers[list[i]];
			temp += "<li style="" + liCss + ""><a href="" + browser.link + ""><img src="../_global/browser_logo/" + list[i] + ".png" alt="" + browser.name + ""> <span>" + browser.name + "</span></a></li>";
		};
	};
	div.innerHTML = temp;
	return div;
};

MOFUN.random = function (max, min) {
	max = max || 100;
	min = min || 0;
	return Math.ceil(Math.random() * (max - min) + min);
};

MOFUN.remove = function (ele) {
	ele && ele.parentNode.removeChild(ele);
};

if("ontouchstart" in window) {
document.documentElement.className += "touch";
document.addEventListener("DOMContentLoaded", function(event) {
	document.querySelector(".app-all").onclick = function (){return false};
	document.querySelector(".app-all").ontouchend = function (){
		document.querySelector(".navbar-app").classList.toggle("over");
	};
});
}