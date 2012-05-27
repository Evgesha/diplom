var href = location.href;
if (href.indexOf('#') > 0) {
     var id = href.substring(4 + href.indexOf('#'), 255);
     document.write('<scr' + 'ipt charset="windows-1251" src="http://nnn-i.novoteka.ru/auto_content/' + id + '.js"></scr'+'ipt>');
} else {
     document.getElementById('auto_content').style.display = 'none';
}
