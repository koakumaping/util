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

    return util;
});