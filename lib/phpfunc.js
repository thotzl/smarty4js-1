var __nre=/[\.\(\)\[\]\{\}\+\-\*\?\|\^\$]/g;module.exports={escape:function(r,n){var t="";function e(r,n,t,e){r=r.toString(t||10);e=e||"0";while(r.length<n){r=e+r}return r.toUpperCase()}if(!r){return""}if(typeof r==="string"){if(!n){return this.escape(r,"html")}if(n==="html"||n==="htmlall"){var u={"<":"&#60;",">":"&#62;","'":"&#039;",'"':"&#034;","&":"&#038;"};return r.replace(/['"<>&']/g,function(r){return u[r]})}if(n==="url"){return encodeURI(r)}if(n==="urlpathinfo"){return encodeURIComponent(r).replace(/%2F/g,"/")}if(n==="quotes"){return r.replace(/\'/g,"\\'").replace(/\"/g,'\\"')}if(n==="mail"){return r.replace(/@/g," [AT] ").replace(/\./g," [DOT] ")}if(n==="hex"){for(var o=0,i=r.length;o<i;o++){t+="%"+e(r.charCodeAt(o),2,16)}return t}if(n==="hexentity"){for(o=0,i=r.length;o<i;o++){t+="&#x"+e(r.charCodeAt(o),4,16)}return t}if(n==="decentity"){for(o=0,i=r.length;o<i;o++){t+="&#"+r.charCodeAt(o)+";"}return t}if(n==="javascript"){var a={"\\":"\\\\","'":"\\'",'"':'\\"',"\r":"\\r","\n":"\\n","</":"<\\/"};return r.replace(/[\\'"\r\n]|<\//g,function(r){return a[r]})}}return r},strip:function(r,n){return r.replace(/[\s\n\r\t]+/g,n&&"string"===typeof n?n:" ")},isset:function(r){return r===undefined?false:true},empty:function(r){var n=0;for(var t in r){if(r.hasOwnProperty(t)){n++}}return n>0?false:true},count:function(r){var n=0;for(var t in r){if(r.hasOwnProperty(t)){n++}}return n},sizeof:function(r){var n=0;for(var t in r){if(r.hasOwnProperty(t)){n++}}return n},time:function(){var r=new Date;return""+[r.getFullYear(),r.getMonth()+1,r.getDate()].join("-")+" "+[r.getHours(),r.getMinutes(),r.getSeconds()].join(":")},capitalize:function(r,n){return r.replace(/\w+\s*/g,function(r){return/\d/g.test(r)?n===true?r.charAt(0).toUpperCase()+r.slice(1):r:r.charAt(0).toUpperCase()+r.slice(1)})},cat:function(r,n){return""+r+n},count_characters:function(r,n){return n?r.length:r.split(/\s*/).join("").length},count_paragraphs:function(r,n){return r.split(new RegExp("[\r\n]"+n?"":"+")).length},count_sentences:function(r){return r.split(".").length},count_words:function(r){return r.split(/\w+\s*/).length-1},"default":function(r,n){return r!==undefined?r:n},indent:function(r,n,t){function e(r){var n="";for(var e=0;e<r;e++){n+=t?""+t:" "}return n}return"number"===typeof n&&n>0?e(n)+r:e(4)+r},lower:function(r){return(""+r).toLowerCase()},nl2br:function(r){return(""+r).replace(/\n/g,"<br/>")},regex_replace:function(r,n,t){return(""+r).replace(new Function("return "+n)(),t)},replace:function(r,n,t){return(""+r).split(n).join(t)},spacify:function(r,n){return n!==undefined?r.split("").join(n):r.split("").join(" ")},string_format:function(r,n){r=parseFloat(""+(r||0),10);return n!==undefined?n==="%d"?parseInt(""+r,10):/%\.(\d)f/.test(n)?r.toFixed(parseInt(RegExp.$1,10)):r:r},strip_tags:function(r){return(""+r).replace(/<.*?>/g,"")},truncate:function(r,n,t){r=""+r;return n>=r.length?r:r.substr(0,n>=0?n:80)+(t?""+t:"...")},upper:function(r){return(""+r).toUpperCase()},wordwrap:function(r,n,t){r=(""+r).split("");n=n>=0?n:80;for(var e=0,u=r.length;e<u;e++){if(e%n===0&&e!==0){r[e]=r[e]+(t?""+t:"\n")}}return r.join("")},is_array:function(r){return{}.toString.call(r)==="[object Object]"||{}.toString.call(r)==="[object Array]"},ceil:function(r){return Math.ceil(parseFloat(r||0,10))},range:function(r,n,t){var e=[];t=t||1;if(typeof r==="number"&&typeof n==="number"&&r<n){for(var u=r;u<=n;u+=t){e[(u-r)/t]=u}}if(typeof r==="string"&&typeof n==="string"){r=(""+r).charCodeAt(0);n=(""+n).charCodeAt(0);if(r<n){for(u=r;u<=n;u+=t){e[(u-r)/t]=String.fromCharCode(""+u)}}}return e},in_array:function(r,n){return n[r]?true:false},explode:function(r,n){var t={};var e=n.split(r);for(var u=0,o=e.length;u<o;u++){t["__a"+u]=e[u]}return t},implode:function(r,n){var t=[];for(var e in n){if(n.hasOwnProperty(e)){t.push(n[e])}}return t.join(r)},join:function(r,n){var t=[];for(var e in n){if(n.hasOwnProperty(e)){t.push(n[e])}}return t.join(r)},array:function(){return[]},array_unique:function(r){var n={};var t={};for(var e in r){if(r.hasOwnProperty(e)&&!n[r[e]]){n[r[e]]=true;t[e]=r[e]}}return t},array_sum:function(r){var n=0;for(var t in r){if(r.hasOwnProperty(t)&&typeof r[t]==="number"){n+=r[t]}}return n},array_product:function(r){var n=1;for(var t in r){if(r.hasOwnProperty(t)&&typeof r[t]==="number"){n*=r[t]}}return n},array_merge:function(){var r=Array.prototype.slice.call(arguments);var n={};var t=0;for(var e=0,u=r.length;e<u;e++){var o=r[e];for(var i in o){if(o.hasOwnProperty(i)){n[i.indexOf("__a")>-1?"__a"+t++:i]=o[i]}}}return n},array_merge_recursive:function(){var r=Array.prototype.slice.call(arguments);var n={};var t=0;for(var e=0,u=r.length;e<u;e++){var o=r[e];for(var i in o){if(o.hasOwnProperty(i)){n[i.indexOf("__a")>-1?"__a"+t++:i]=o[i]}}}return n},array_keys:function(r){var n=[];for(var t in r){if(r.hasOwnProperty(t)){n.push(t.replace("__a",""))}}return n},array_key_exists:function(r,n){return!n[r]===undefined?true:false},addcslashes:function(r,n){return(""+r).split(n).join("\\"+n)},stripcslashes:function(r){return(""+r).replace(/\\/,"")},addslashes:function(r){return(""+r).replace(/[\'\"\\]/g,function(r){return"\\"+r})},stripslashes:function(r){return(""+r).replace(/(\\\')|(\\\")|(\\\\)/g,function(r){return r.replace("\\","")})},chop:function(r,n){var t=n!==undefined?"["+(""+n).replace(__nre,function(r){return"\\"+r})+"]+$":"[\\0\\t\\n\\r\\s]+$";return(""+r).replace(new RegExp(t),"")},chr:function(r){return String.fromCharCode(""+r)},chunk_split:function(r,n,t){r=""+r;n=n||0;t=t||"";return n===0?r:r.replace(new RegExp(".{"+n+"}","g"),function(r){return r+t})},ltrim:function(r,n){var t=n!==undefined?"^["+(""+n).replace(__nre,function(r){return"\\"+r})+"]+":"^[\\0\\t\\n\\r\\s]+";return(""+r).replace(new RegExp(t),"")},rtrim:function(r,n){var t=n!==undefined?"["+(""+n).replace(__nre,function(r){return"\\"+r})+"]+$":"[\\0\\t\\n\\r\\s]+$";return(""+r).replace(new RegExp(t),"")},trim:function(r,n){var t=n!==undefined?(""+n).replace(__nre,function(r){return"\\"+r}):"\\0\\t\\n\\r\\s";return(""+r).replace(new RegExp("(^["+t+"]+)|(["+t+"]+$)","g"),"")},ord:function(r){return(""+r).charCodeAt(0)},parse_str:function(r){var n={};var t=(""+r).split("&");for(var e=0,u=t.length;e<u;e++){var o=t[e];o=o.indexOf("%")>-1?decodeURI(o):o;var i=o.split("=");n[i[0]]=i[1]||""}return n},print:function(){var r=Array.prototype.slice.call(arguments);var n="";for(var t=0,e=r.length;t<e;t++){var u=r[t];n+=u?u:""}return n},quotemeta:function(r){return(""+r).replace(__nre,function(r){return"\\"+r})},str_pad:function(r,n,t,e){var u={STR_PAD_RIGHT:0,STR_PAD_LEFT:1,STR_PAD_BOTH:2};var o="";var i=0;r=""+r;var a=r;n=n||0;t=t||"";e=e||"STR_PAD_RIGHT";if(n>r.length){if(u[e]!==2){i=(n-r.length)/t.length;while(i-->0){o+=t}a=u[e]===0?r+o:o+r}else{i=(n-r.length)/t.length/2;while(i-->0){o+=t}a=o+r+o}}return a},str_repeat:function(r,n){var t="";while(n--){t+=r}return t},str_split:function(r,n){var t=[];r=""+r;n=n||0;if(n!==0){var e=r.match(new RegExp(".{"+n+"}","g"));for(var u=0,o=e.length;u<o;u++){t.push(e[u])}var i=r.slice(o*n);if(i){t.push(i)}}else{t=[r]}return t},strcmp:function(r,n){r=""+r,n=""+n;return r===n?0:r>n?1:-1},strcasecmp:function(r,n){r=(""+r).toLowerCase(),n=""+n.toLowerCase();return r===n?0:r>n?1:-1},strchr:function(r,n){r=""+r;return r.slice(r.indexOf(typeof n==="number"?String.fromCharCode(n):""+n))},strstr:function(r,n){r=""+r;return r.slice(r.indexOf(typeof n==="number"?String.fromCharCode(n):""+n))},stristr:function(r,n){r=""+r;return r.slice(r.toLowerCase().indexOf(typeof n==="number"?String.fromCharCode(n).toLowerCase():(""+n).toLowerCase()))},stripos:function(r,n,t){r=""+r,t=t||0;return r.toLowerCase().indexOf((""+n).toLowerCase(),t)},strpos:function(r,n,t){r=""+r,t=t||0;return r.indexOf(""+n,t)},strlen:function(r){return(""+r).length},strrchr:function(r,n){r=""+r;return r.slice(r.lastIndexOf(typeof n==="number"?String.fromCharCode(n):""+n))},strrev:function(r){return(""+r).split("").reverse().join("")},strripos:function(r,n,t){r=""+r,t=t||0;return r.toLowerCase().lastIndexOf((""+n).toLowerCase(),t)},strrpos:function(r,n,t){r=""+r,t=t||0;return r.lastIndexOf(""+n,t)},strtolower:function(r){return(""+r).toLowerCase()},strtoupper:function(r){return(""+r).toUpperCase()},substr:function(r,n,t){r=""+r;n=n||0;t=t===undefined||typeof t!=="number"?-1:t;return r.substring(n,t===-1?r.length:n+t)},substr_count:function(r,n,t,e){r=""+r;t=t||0;e=e===undefined||typeof e!=="number"?-1:e;return r.substring(t,e===-1?r.length:t+e).split(n).length-1},ucfirst:function(r){r=""+r;return r.charAt(0).toUpperCase()+r.slice(1)},ucwords:function(r){return(""+r).replace(/\w+\s*/g,function(r){return/\d/g.test(r)?r:r.charAt(0).toUpperCase()+r.slice(1)})},rawurldecode:function(r){return decodeURIComponent(""+r)},rawurlencode:function(r){return encodeURIComponent(""+r)},urldecode:function(r){return decodeURI(""+r)},urlencode:function(r){return encodeURI(""+r)},is_bool:function(r){return r===true||r===false?true:false},floatval:function(r){return parseFloat(""+r,10)},intval:function(r){return parseInt(""+r,10)},is_float:function(r){return typeof r==="number"&&parseInt(r,10)!==r?true:false},is_real:function(r){return typeof r==="number"&&parseInt(r,10)!==r?true:false},is_int:function(r){return typeof r==="number"&&parseInt(r,10)===r?true:false},is_integer:function(r){return typeof r==="number"?true:false},is_object:function(r){return{}.toString.call(r)==="[object Object]"},is_callable:function(r){return typeof r==="function"?true:false},is_string:function(r){return typeof r==="string"?true:false},is_numeric:function(r){return typeof r==="number"?true:false},strval:function(r){return r!==undefined&&r.toString?r.toString():""},var_dump:function(r){function n(r){return{}.toString.call(r)==="[object Array]"}function t(r){return{}.toString.call(r)==="[object Object]"}function e(r){return n(r)||t(r)?true:false}function u(r){for(var n in r){if(r.hasOwnProperty(n)&&n.indexOf("__a")!==0){return false}}return true}function o(r){var i=n(r)||u(r)&&t(r)?0:t(r)&&!u(r)?1:2;var a;if(i===0||i===1){a=i===0?"[":"{";for(var f in r){if(r.hasOwnProperty(f)){var c=r[f];a+=(i===0?"":'"'+f+'":')+(e(c)?o(c):typeof c==="string"?'"'+c+'"':c)+","}}a=a.slice(0,a.length-1)+(i===0?"]":"}")}else{a=r}return a}return n(r)||t(r)?o(r).replace(/__a/g,""):r||""},echo:function(){var r=Array.prototype.slice.call(arguments);var n="";for(var t=0,e=r.length;t<e;t++){var u=r[t];n+=u?u:""}return n},abs:function(r){return Math.abs(r)},acos:function(r){return Math.acos(r)},acosh:function(r){return Math.acosh(r)},asin:function(r){return Math.asin(r)},asinh:function(r){return Math.asinh(r)},atan2:function(r,n){return Math.atan2(r,n)},atan:function(r){return Math.atan(r)},atanh:function(r){return Math.atanh(r)},cos:function(r){return Math.cos(r)},sin:function(r){return Math.sin(r)},tan:function(r){return Math.tan(r)},cosh:function(r){return Math.cosh(r)},sinh:function(r){return Math.sinh(r)},tanh:function(r){return Math.tanh(r)},dexbin:function(r){return r.toString(2)},dechex:function(r){return r.toString(16)},decoct:function(r){return r.toString(8)},deg2rad:function(r){return r*Math.PI/180},rad2deg:function(r){return r*180/Math.PI},exp:function(r){return Math.exp(r)},expm1:function(r){return Math.expm1(r)},floor:function(r){return Math.floor(r)},fmod:function(r,n){return typeof r==="number"&&typeof n==="number"&&r%n},hexdec:function(r){return parseInt(""+r,16)},octdec:function(r){return parseInt(""+r,8)},hypot:function(r,n){return typeof r==="number"&&typeof n==="number"&&Math.sqrt(r*r+n*n)},is_infinite:function(r){return""+r==="Infinity"?true:false},is_nan:function(r){return""+r==="NaN"?true:false},lcg_value:function(){return Math.random()},log10:function(r){return Math.log10(r)},log1p:function(r){return Math.log1p(r)},log:function(r){return Math.log(r)},max:function(){var r=Array.prototype.slice.call(arguments);var n=typeof r[0]==="object"?r[0]:r;var t=n[0];for(var e in n){if(n.hasOwnProperty(e)&&n[e]>t){t=n[e]}}return t},min:function(){var r=Array.prototype.slice.call(arguments);var n=typeof r[0]==="object"?r[0]:r;var t=n[0];for(var e in n){if(n.hasOwnProperty(e)&&n[e]<t){t=n[e]}}return t},pi:function(){return Math.PI},pow:function(r,n){return typeof r==="number"&&typeof n==="number"?Math.pow(r,n):false},round:function(r){return Math.round(r)},sqrt:function(r){return Math.sqrt(r)},uniqid:function(r){return(r||"")+(new Date).getTime()},highlight:function(r,n){return r},json_encode:function(r){function n(r){return{}.toString.call(r)==="[object Array]"}function t(r){return{}.toString.call(r)==="[object Object]"}function e(r){return n(r)||t(r)?true:false}function u(r){for(var n in r){if(r.hasOwnProperty(n)&&n.indexOf("__a")!==0){return false}}return true}function o(r){var i=n(r)||u(r)&&t(r)?0:t(r)&&!u(r)?1:2;var a=i===0?"[":"{";for(var f in r){if(r.hasOwnProperty(f)){var c=r[f];a+=(i===0?"":'"'+f+'":')+(e(c)?o(c):typeof c==="string"?'"'+c+'"':c)+","}}a=a.slice(0,a.length-1)+(i===0?"]":"}");return a}return o(r).replace(/__a/g,"")},json_decode:function(r){}};