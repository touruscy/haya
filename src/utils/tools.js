function getDiff(s1,s2) {
		var days = s2.getTime() - s1.getTime();
		var time = parseInt(days / (1000 * 60 * 60 * 24));
		return time;
	}

	function writeCurrentDate() {
	        var now = new Date();
	        var year = now.getFullYear(); //得到年份
	        var month = now.getMonth();//得到月份
	        var date = now.getDate();//得到日期
	        var day = now.getDay();//得到周几
	        var hour = now.getHours();//得到小时
	        var minu = now.getMinutes();//得到分钟
	        var sec = now.getSeconds();//得到秒
	　　     var MS = now.getMilliseconds();//获取毫秒
	        var week;
	        month = month + 1;
	        if (month < 10){ month = "0" + month};
	        if (date < 10){date = "0" + date};
	        if (hour < 10){ hour = "0" + hour};
	        if (minu < 10){ minu = "0" + minu};
	        if (sec < 10){ sec = "0" + sec};
	        if (MS < 100){MS = "0" + MS};
	        var arr_week = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
	        week = arr_week[day];
	        var time = "";

	        return [hour,minu,sec]
	        // return time = year + "年" + month + "月" + date + "日" + " " + hour + ":" + minu + ":" + sec + " " + week;


	      }

  module.exports = {
  	'getDiff' : getDiff,
    'writeCurrentDate':writeCurrentDate,
    }