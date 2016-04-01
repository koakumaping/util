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
        },

        /**
        * 判断是否是数字
        *
        * 用于判断当前输入是否是数字
        *
        * @returns true  是数字
        * @returns false 不是数字
        *
        * @date 2016-04-01
        * @author Ping YF (koakumaping@163.com)
        */
       
       isNumber: function (val) {
            return !isNaN(val);
       },

       /**
        * rem转换成px
        *
        * 单位转换
        *
        * @returns px
        *
        * @date 2016-04-01
        * @author Ping YF (koakumaping@163.com)
        */
        remToPx: function (rem) {
            var fontSize = Number(getComputedStyle(window.document.documentElement)['font-size'].replace(/px/g, '').replace(/!important/g, ''));
            return rem * fontSize;
        },

        /**
        * px转换成rem
        *
        * 单位转换
        *
        * @returns rem
        *
        * @date 2016-04-01
        * @author Ping YF (koakumaping@163.com)
        */
        pxToRem: function (px) {
            var fontSize = Number(getComputedStyle(window.document.documentElement)['font-size'].replace(/px/g, '').replace(/!important/g, ''));
            return px / fontSize;
        }
    }

    return util;
});