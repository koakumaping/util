/**
 * util
 * @authors Ping YF (koakumaping@163.com)
 * @date    2016-04-01 14:25:48
 * @version $Id$
 */

;(function(factory) {
    
    "use strict";
    
    if(typeof exports === "object" && typeof module === "object")
    {
        module.exports = factory();
    } 
    else if(typeof define === "function" && (define.amd || define.cmd))
    {
        define(factory);
    }
    else
    {
        window.util = factory();
    }
    
})(function(){
    'use strict';

    var util;

    util = {

    	/**
		* 判断是否是PC端
		*
		* 用于判断当前浏览器是否是PC端
		*
		* @returns true  是PC端
		* @returns false 不是PC端
		*
		* @date 2016-04-01
		* @author Ping YF (koakumaping@163.com)
		*/
    	isPC: function () {
    		var userAgentInfo = navigator.userAgent;
	        var Agents = ["Android", "iPhone",
	                    "SymbianOS", "Windows Phone",
	                    "iPad", "iPod"];
	        var flag = true;
	        for (var v = 0; v < Agents.length; ++v) {
	            if (userAgentInfo.indexOf(Agents[v]) > 0) {
	                flag = false;
	                break;
	            }
	        }
	        return flag;
    	}
    }

    return util;
});