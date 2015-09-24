if(!Object.prototype.toJSONString){Array.prototype.toJSONString=function(){var a=[],i,l=this.length,v;for(i=0;i<l;i+=1){v=this[i];switch(typeof v){case'object':if(v){if(typeof v.toJSONString==='function'){a.push(v.toJSONString());}}else{a.push('null');}
break;case'string':case'number':case'boolean':a.push(v.toJSONString());}}
return'['+a.join(',')+']';};Boolean.prototype.toJSONString=function(){return String(this);};Date.prototype.toJSONString=function(){function f(n){return n<10?'0'+n:n;}
return'"'+this.getFullYear()+'-'+
f(this.getMonth()+1)+'-'+
f(this.getDate())+'T'+
f(this.getHours())+':'+
f(this.getMinutes())+':'+
f(this.getSeconds())+'"';};Number.prototype.toJSONString=function(){return isFinite(this)?String(this):'null';};Object.prototype.toJSONString=function(){var a=[],k,v;for(k in this){if(this.hasOwnProperty(k)){v=this[k];switch(typeof v){case'object':if(v){if(typeof v.toJSONString==='function'){a.push(k.toJSONString()+':'+v.toJSONString());}}else{a.push(k.toJSONString()+':null');}
break;case'string':case'number':case'boolean':a.push(k.toJSONString()+':'+v.toJSONString());}}}
return'{'+a.join(',')+'}';};(function(s){var m={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'};s.parseJSON=function(filter){var j;function walk(k,v){var i;if(v&&typeof v==='object'){for(i in v){if(v.hasOwnProperty(i)){v[i]=walk(i,v[i]);}}}
return filter(k,v);}
if(/^("(\\.|[^"\\\n\r])*?"|[,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t])+?$/.
test(this)){try{j=eval('('+this+')');}catch(e){throw new SyntaxError('parseJSON');}}else{throw new SyntaxError('parseJSON');}
if(typeof filter==='function'){j=walk('',j);}
return j;};s.toJSONString=function(){if(/["\\\x00-\x1f]/.test(this)){return'"'+this.replace(/([\x00-\x1f\\"])/g,function(a,b){var c=m[b];if(c){return c;}
c=b.charCodeAt();return'\\u00'+
Math.floor(c/16).toString(16)+
(c%16).toString(16);})+'"';}
return'"'+this+'"';};})(String.prototype);}