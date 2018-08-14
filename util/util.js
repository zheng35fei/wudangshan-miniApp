export default{
    // 谷歌地图计算两个坐标点的距离 
    // @param lng1  经度1 
    // @param lat1  纬度1 
    // @param lng2  经度2 
    // @param lat2  纬度2 
    // @return 距离（千米） 
    getDistance(lng1, lat1, lng2, lat2) {
        let EARTH_RADIUS = 6378.137; //地球半径 
        //将用角度表示的角转换为近似相等的用弧度表示的角 java Math.toRadians   
        function rad(d) {  
            return d * Math.PI / 180.0;  
        }
        var radLat1 = rad(lat1);  
        var radLat2 = rad(lat2);  
        var a = radLat1 - radLat2;  
        var b = rad(lng1) - rad(lng2);  
        var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2)  
                + Math.cos(radLat1) * Math.cos(radLat2)  
                * Math.pow(Math.sin(b / 2), 2)));  
        s = s * EARTH_RADIUS;  
        s = Math.round(s * 10000) / 10000;  
        return s;  
    },  

    dateFormat(inputTime) {
       var date = new Date(inputTime);  
        var y = date.getFullYear();    
        var m = date.getMonth() + 1;    
        m = m < 10 ? ('0' + m) : m;    
        var d = date.getDate();    
        d = d < 10 ? ('0' + d) : d;    
        var h = date.getHours();  
        h = h < 10 ? ('0' + h) : h;  
        var minute = date.getMinutes();  
        var second = date.getSeconds();  
        minute = minute < 10 ? ('0' + minute) : minute;    
        second = second < 10 ? ('0' + second) : second;   
        return y + '-' + m + '-' + d+' '+h+':'+minute+':'+second;    
    },

    //除法函数，用来得到精确的除法结果
    //说明：javascript的除法结果会有误差，在两个浮点数相除的时候会比较明显。这个函数返回较为精确的除法结果。
    //调用：accDiv(arg1,arg2)
    //返回值：arg1除以arg2的精确结果
    accDiv(a,b){
        var c, d, e = 0,
        f = 0;
        try {
        e = a.toString().split(".")[1].length;
        } catch (g) {}
        try {
        f = b.toString().split(".")[1].length;
        } catch (g) {}
        return c = Number(a.toString().replace(".", "")), d = Number(b.toString().replace(".", "")), this.accMul(c / d, Math.pow(10, f - e));
    },
    //乘法函数，用来得到精确的乘法结果
    //说明：javascript的乘法结果会有误差，在两个浮点数相乘的时候会比较明显。这个函数返回较为精确的乘法结果。
    //调用：accMul(arg1,arg2)
    //返回值：arg1乘以arg2的精确结果
    accMul(a,b)
    {
        var c = 0,
        d = a.toString(),
        e = b.toString();
        try {
            c += d.split(".")[1].length;
        } catch (f) {}
        try {
            c += e.split(".")[1].length;
        } catch (f) {}
        return Number(d.replace(".", "")) * Number(e.replace(".", "")) / Math.pow(10, c);
    },
    //加法函数，用来得到精确的加法结果
    //说明：javascript的加法结果会有误差，在两个浮点数相加的时候会比较明显。这个函数返回较为精确的加法结果。
    //调用：accAdd(arg1,arg2)
    //返回值：arg1加上arg2的精确结果
    accAdd(a,b){
        var c, d, e;
        try {
            c = a.toString().split(".")[1].length;
        } catch (f) {
            c = 0;
        }
        try {
            d = b.toString().split(".")[1].length;
        } catch (f) {
            d = 0;
        }
        return e = Math.pow(10, Math.max(c, d)), (this.accMul(a, e) + this.accMul(b, e)) / e;
    },
    //减法函数
    accSub(a,b){
        var c, d, e;
        try {
        c = a.toString().split(".")[1].length;
        } catch (f) {
        c = 0;
        }
        try {
        d = b.toString().split(".")[1].length;
        } catch (f) {
        d = 0;
        }
        return e = Math.pow(10, Math.max(c, d)), (this.accMul(a, e) - this.accMul(b, e)) / e;
    },
    isLogin(){
        let loginInfo = my.getStorageSync({key:'loginInfo'}).data;
        return !!loginInfo && loginInfo.auth_token && new Date().getTime() - loginInfo.loginTime < 1000 * 60 * 40
    },
    parseQueryString(url) {
        let reg_url = /^[^\?]+\?([\w\W]+)$/;
        let reg_para = /([^&=]+)=([\w\W]*?)(&|$|#)/g;
        let arr_url = reg_url.exec(url);
        let ret = {};
        if (arr_url && arr_url[1]) {
            let str_para = arr_url[1], result;
            while ((result = reg_para.exec(str_para)) != null) {
                ret[result[1]] = result[2];
            }
        }
        return ret;
    }
}