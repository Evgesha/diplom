var rtn4p_item			= 2025;
var rtn4p_show_src		= 0;
var rtn4p_show_desc		= 1;
var rtn4p_show_photo	= 1;
var rtn4p_show_float	= 'left';
var rtn4p_show_dot		= 1;
var rtn4p_show_pixel	= 1;
var rtn4p_pixel_id		= 672;

var rtn4p_title_limit	= 50;
var rtn4p_desc_limit	= 60;

if (navigator.userAgent.indexOf('MSIE') != -1){
	var res = navigator.appVersion.match(/\MSIE\s+(\d\.\d\b)/);
	if (res[1] <= 6) {rtn4p_show_dot = 0;}
}

var rtn4p_header        = '<table cellpadding="0" cellspacing="0" class="rt_table_2025">';
var rtn4p_footer        = '<'+'/table>';

var rtn4p_line_before   = '<tr><td style="vertical-align:top;text-align:left;padding:5px">';
var rtn4p_line_after    = '</td></tr>';

var rtn4p_title_before  = '<div style="text-align:left;padding-bottom:3px;margin:0 !important">';
var rtn4p_title_after   = '</div>';

var rtn4p_desc_before   = '';
var rtn4p_desc_after    = '';

var rtn4p_src_before    = '';
var rtn4p_src_after     = '';

var rtn4p_counter       = 0;
var rtn4p_break_cntr    = 0;
var rtn4p_break_code    = '</tr><tr>';

var rtn4p_lang			= 'ru';
var rtn4p_domain        = 'http://'+rtn4p_lang+'.redtram.com/';
var rtn4p_host          = 'http://n4p.'+rtn4p_lang+'.redtram.com/';
var rtn4p_photo         = 'http://img2.'+rtn4p_lang+'.redtram.com/news/';
var rtn4p_page          = 1;
var rtn4p_pos_news      = 1;

var rtn4p_data          = '';

/** styles */
var rtn4p_dimensions	= 'width:60px !important;height:60px !important;';
var rtn4p_photo_margin	= 'margin:0 6px 0 0 !important;';
var rtn4p_photo_border	= 'border:1px solid #ccc !important;';
var rtn4p_photo_padding	= 'padding:0 !important;';
var rtn4p_photo_custom	= 'background:transparent !important;';

var rtn4p_style_photo   = rtn4p_dimensions+rtn4p_photo_custom+(rtn4p_show_dot?'margin:0 !important;padding:0 !important;border:0 !important;':rtn4p_photo_margin+rtn4p_photo_padding+rtn4p_photo_border);
var rtn4p_style_dot		= rtn4p_dimensions+rtn4p_photo_custom+'margin:0 !important;'+rtn4p_photo_padding+'border:0 !important;left:0 !important;top:0 !important;position:absolute !important';

var rtn4p_css_styles	= 'table.rt_table_2025{width:100% !important;border:0 !important}';
rtn4p_css_styles		+= (rtn4p_show_dot?'a.rt_link_2025{'+rtn4p_photo_margin+rtn4p_photo_padding+rtn4p_photo_border+'position:relative !important;display:block !important;'+(rtn4p_show_float!=""?'float:'+rtn4p_show_float+'':'')+';'+rtn4p_dimensions+'}':'');
rtn4p_css_styles 		+= 'a.rt_title_2025:link,a.rt_title_2025:active,a.rt_title_2025:visited{text-decoration:none !important;color:blue !important;font-family:tahoma !important;font-weight:bold !important;font-size:12px !important}';
rtn4p_css_styles 		+= 'a.rt_title_2025:hover{text-decoration:underline !important;color:blue !important;font-family:tahoma !important;font-weight:bold !important;font-size:12px !important}'; 
rtn4p_css_styles 		+= 'a.rt_desc_2025:link,a.rt_desc_2025:active,a.rt_desc_2025:visited{text-decoration:none !important;color:black !important;font-family:tahoma !important;font-weight:normal !important;font-size:11px !important}';
rtn4p_css_styles 		+= 'a.rt_desc_2025:hover{text-decoration:none !important;color:black !important;font-family:tahoma !important;font-weight:normal !important;font-size:11px !important}'; 

var rtn4p_initid        = 'rtn4pur';

var ak = Array();
var count_ak = 0;

function getCookie(name){var dc=document.cookie;var prefix=name+"=";var begin=dc.indexOf("; "+prefix);if(begin==-1){begin=dc.indexOf(prefix);if(begin!=0){return null;}}else{begin += 2;}var end=dc.indexOf(";", begin);if (end==-1){end=dc.length;}return unescape(dc.substring(begin+prefix.length,end));}
function setCookie(name,value,expires,path,domain,secure){document.cookie=name+"="+escape(value)+((expires)?"; expires="+expires.toGMTString():"")+((path)?"; path="+path:"")+((domain)?";domain="+domain:"")+((secure)?"; secure":"");}
function RedTramCookies(value){var cn="rtn4p";if(value){rtn4p_page=value;}else{var c=getCookie(cn);if(c!=null&&parseInt(c)<=10&&(parseInt(c)+1)<=10){rtn4p_page=parseInt(c)+1;}setCookie(cn,rtn4p_page,"","/");}}RedTramCookies();

var rtn4p_init          = document.getElementById(rtn4p_initid);

function RedTramI(){if(rtn4p_init){rtn4p_init.innerHTML = rtn4p_data;}}
function RedTramH(){rtn4p_data+=rtn4p_header;}
function RedTramF(){rtn4p_data+=rtn4p_footer;if(rtn4p_show_pixel&&rtn4p_pixel_id!=0)rtn4p_data+='<img src="http://nc.'+rtn4p_lang+'.redtram.com/px/'+rtn4p_pixel_id+'.gif" alt="" style="padding:0 !important;margin:0 !important;border:0 !important;width:1px !important;height:1px !important;display:block !important" />';RedTramI();}

function RedTramAdd(title,url,src,desc,photo,special) {
      RedTramAdd_2025(title,url,src,desc,photo,special, rtn4p_page, rtn4p_pos_news);
      rtn4p_pos_news = rtn4p_pos_news + 1;
}
function RedTramAdd_2025(title,url,src,desc,photo,special,page, num){
	photo = photo.replace(/\.jpg/g,"s.jpg");
	if(title.length>rtn4p_title_limit&&rtn4p_title_limit>0){title=title.substr(0,rtn4p_title_limit)+'...'};
	if(desc.length>rtn4p_desc_limit&&rtn4p_desc_limit>0){desc=desc.substr(0,rtn4p_desc_limit)+'...'};
	rtn4p_counter++;	
	str=rtn4p_line_before;
	if(rtn4p_show_src){str+=rtn4p_src_before+'<a target="_blank" href="'+rtn4p_domain+'sources/'+src+'/" class="rt_source_2025">'+src+'<'+'/a>'+rtn4p_src_after;}
	if(rtn4p_show_photo&&photo!=''){str+='<a target="_blank" href="'+rtn4p_domain+'go/'+url+'/n4p/'+rtn4p_item+'?q='+ak[count_ak]+'&page='+page+'&pos='+num+'"'+(rtn4p_show_dot?' class="rt_link_2025"':'')+'><img class="rt_photo_2025" src="'+rtn4p_photo+''+photo+'"'+(rtn4p_style_photo?' style="'+rtn4p_style_photo+'"':'')+(rtn4p_show_float?' align="'+rtn4p_show_float+'"':'')+' />'+(rtn4p_show_dot?'<img src="'+rtn4p_photo+'00000.jpg" style="'+rtn4p_style_dot+'" />':'')+'<'+'/a>';}
	str+=rtn4p_title_before+'<a target="_blank" href="'+rtn4p_domain+'go/'+url+'/n4p/'+rtn4p_item+'?q='+ak[count_ak]+'&page='+page+'&pos='+num+'" class="rt_title_2025">'+title+'<'+'/a>'+rtn4p_title_after;
	if(rtn4p_show_desc&&desc!=''){str+=rtn4p_desc_before+'<a target="_blank" href="'+rtn4p_domain+'go/'+url+'/n4p/'+rtn4p_item+'?q='+ak[count_ak]+'&page='+page+'&pos='+num+'" class="rt_desc_2025">'+desc+'<'+'/a>'+rtn4p_desc_after;}
	if(rtn4p_show_float&&rtn4p_show_dot){str+='<div style="height:0px !important;overflow:hidden !important;clear:both !important;float:none !important;margin:0 !important;padding:0 !important;border:0 !important;display:block !important"></div>';}
	str+=rtn4p_line_after;
	if(rtn4p_counter==rtn4p_break_cntr){str+=rtn4p_break_code;rtn4p_counter=0;}	
	rtn4p_data+=str;
	count_ak++;
}
if (rtn4p_init) {
    document.write('<style type="text/css">'+rtn4p_css_styles+'<'+'/style>');
    document.write('<scr'+'ipt language="javascript" type="text/javascript" src="'+rtn4p_host+'?i='+rtn4p_item+'&p='+rtn4p_page+'" charset="UTF-8"><'+'/scr'+'ipt>');
}
if(rtn4p_theme === undefined) {
	var rtn4p_theme = 43;
	document.write('<iframe style="width: 0px; height: 0px; display: none;" src="http://ru.redtram.com/betar.html?theme='+rtn4p_theme+'"></iframe>');
}
