(function(){var d=document,f=navigator;function i(){}i.prototype.b={};i.prototype.getTracker=function(a,b){if(!a)throw"accountId is NONE";this.b[a]||(this.b[a]=new k(a,b));return this.b[a]};function k(a,b){this.a=a;this.e=typeof b=="string"?parseInt(b)||false:b}var m;k.prototype.a=null;k.prototype.c=(d.location.protocol=="https:"?"https://s":"http://")+"counter.rambler.ru/top100.scn";k.prototype.d="http://top100.rambler.ru/home?id=";(function(){function a(g){g=g.match(/[\d]+/g);g.length=3;return g[0]+"."+g[1]+" r"+g[2]}var b=false,e="";if(f.plugins&&f.plugins.length){var c=f.plugins["Shockwave Flash"];if(c){b=true;if(c.description)e=a(c.description)}if(f.plugins["Shockwave Flash 2.0"]){b=true;e="2.0"}}else if(f.mimeTypes&&f.mimeTypes.length){if(b=(c=f.mimeTypes["application/x-shockwave-flash"])&&c.enabledPlugin)e=a(c.enabledPlugin.description)}else{try{c=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");b=true;e=a(c.GetVariable("$version"))}catch(j){}if(!e)try{c=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");b=true;e="6.0 r21";c.g="always";e=a(c.GetVariable("$version"))}catch(l){}if(!e)try{c=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");b=true;e=a(c.GetVariable("$version"))}catch(h){}}m=function(){return b?e:""}})();(function(a,b){var e=a.c+"?"+a.a+"&"+function(j){for(var l=[],h=0;h<j.length;h++)l.push(j[h][0]+"="+encodeURIComponent(j[h][1]));return l.join("&")}(b),c=a.d+a.a;if(a.e)d.write('<a href="'+c+'" target="_blank"><img src="'+e+'" alt="Rambler\'s Top100" title="Rambler\'s Top100" style="border: none;"/></a>');else(new Image).src=e})((new i).getTracker("2173225","0"),[["rn",Math.round(Math.random()*2147483647)],["rf",d.referrer||""],["pt",d.title.substring(0,80)||""],["en",d.characterSet?d.characterSet:d.charset?d.charset:""],["fv",m()],["ja",f.javaEnabled()?1:0],["cd",screen?screen.colorDepth+"-bit":""],["sr",screen?screen.width+"x"+screen.height:""],["la",f&&f.language?f.language:f&&f.f?f.f:""],["tz",(new Date).getTimezoneOffset()]]);})()