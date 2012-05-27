var METABAR_SITEBAR = new function () {
    this.settings = {"toolbar_id": 220929, "host": "metabar.ru", "html": "<!-- IE --> <div id=\"metabar_headcrab\" class=\"sitebar sitebar2 sitebar__ie\"> <div class=\"sitebar__logo\"></div> <div class=\"sitebar__grd\"></div> <a href=\"#\" onclick=\"window.parent.METABAR_SITEBAR.removeSitebar(true); return false;\" class=\"sitebar__close\" title=\"\u0417\u0430\u043a\u0440\u044b\u0442\u044c\">\u0417\u0430\u043a\u0440\u044b\u0442\u044c</a> <div class=\"sitebar__cnt\"> <div class=\"sitebar-button\"><a href=\"http://fedpress.metabar.ru/?source=sitebar\" class=\"sitebar-button__l\" target=\"_top\"><span class=\"sitebar-button__r\">\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c</span></a></div> <div class=\"sitebar-label\"><span class=\"sitebar-label__t\">\u041d\u043e\u0432\u043e\u0441\u0442\u0438 \u0420\u0418\u0410 \"\u0424\u0435\u0434\u0435\u0440\u0430\u043b\u041f\u0440\u0435\u0441\u0441\" \u0432\u0441\u0435\u0433\u0434\u0430 \u0443 \u0432\u0430\u0441 \u043f\u043e\u0434 \u0440\u0443\u043a\u043e\u0439</span></div> </div> </div> <!-- END_IE --> <!-- FF --> <div id=\"metabar_headcrab\" class=\"sitebar sitebar__ff\"> <div class=\"sitebar__logo\"></div> <div class=\"sitebar__grd\"></div> <a href=\"#\" onclick=\"window.parent.METABAR_SITEBAR.removeSitebar(true); return false;\" class=\"sitebar__close\" title=\"\u0417\u0430\u043a\u0440\u044b\u0442\u044c\">\u0417\u0430\u043a\u0440\u044b\u0442\u044c</a> <div class=\"sitebar__cnt\"> <div class=\"sitebar-button\"><a href=\"http://fedpress.metabar.ru/?source=sitebar\" class=\"sitebar-button__l\" target=\"_top\"><span class=\"sitebar-button__r\">\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c</span></a></div> <div class=\"sitebar-label\"><span class=\"sitebar-label__t\">\u041d\u043e\u0432\u043e\u0441\u0442\u0438 \u0420\u0418\u0410 \"\u0424\u0435\u0434\u0435\u0440\u0430\u043b\u041f\u0440\u0435\u0441\u0441\" \u0432\u0441\u0435\u0433\u0434\u0430 \u0443 \u0432\u0430\u0441 \u043f\u043e\u0434 \u0440\u0443\u043a\u043e\u0439</span></div> </div> </div> <!-- END_FF --> <!-- OPERA --> <div id=\"metabar_headcrab\" class=\"sitebar sitebar__opera\"> <div class=\"sitebar__logo\"></div> <div class=\"sitebar__grd\"></div> <a href=\"#\" onclick=\"window.parent.METABAR_SITEBAR.removeSitebar(true); return false;\" class=\"sitebar__close\" title=\"\u0417\u0430\u043a\u0440\u044b\u0442\u044c\">\u0417\u0430\u043a\u0440\u044b\u0442\u044c</a> <div class=\"sitebar__cnt\"> <div class=\"sitebar-button\"><a href=\"http://fedpress.metabar.ru/?source=sitebar\" class=\"sitebar-button__l\" target=\"_top\"><span class=\"sitebar-button__r\">\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c</span></a></div> <div class=\"sitebar-label\"><span class=\"sitebar-label__t\">\u041d\u043e\u0432\u043e\u0441\u0442\u0438 \u0420\u0418\u0410 \"\u0424\u0435\u0434\u0435\u0440\u0430\u043b\u041f\u0440\u0435\u0441\u0441\" \u0432\u0441\u0435\u0433\u0434\u0430 \u0443 \u0432\u0430\u0441 \u043f\u043e\u0434 \u0440\u0443\u043a\u043e\u0439</span></div> </div> </div> <!-- END_OPERA --> <!-- CHROME --> <div id=\"metabar_headcrab\" class=\"sitebar sitebar__chrome\"> <div class=\"sitebar__logo\"></div> <div class=\"sitebar__grd\"></div> <a href=\"#\" onclick=\"window.parent.METABAR_SITEBAR.removeSitebar(true); return false;\" class=\"sitebar__close\" title=\"\u0417\u0430\u043a\u0440\u044b\u0442\u044c\">\u0417\u0430\u043a\u0440\u044b\u0442\u044c</a> <div class=\"sitebar__cnt\"> <div class=\"sitebar-button\"><a href=\"http://fedpress.metabar.ru/?source=sitebar\" class=\"sitebar-button__l\" target=\"_top\"><span class=\"sitebar-button__r\">\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c</span></a></div> <div class=\"sitebar-label\"><span class=\"sitebar-label__t\">\u041d\u043e\u0432\u043e\u0441\u0442\u0438 \u0420\u0418\u0410 \"\u0424\u0435\u0434\u0435\u0440\u0430\u043b\u041f\u0440\u0435\u0441\u0441\" \u0432\u0441\u0435\u0433\u0434\u0430 \u0443 \u0432\u0430\u0441 \u043f\u043e\u0434 \u0440\u0443\u043a\u043e\u0439</span></div> </div> </div> <!-- END_CHROME -->", "opera_allowed": true, "fixed_position": true, "chrome_allowed": true, "css": "* {margin:0; padding:0; border:0;} /* Sitebar common */ .sitebar {height:30px; font:12px/29px 'Trebuchet MS', sans-serif !important; min-width:800px; overflow:hidden; position:relative; width:100%;} .sitebar__logo, .sitebar__grd {bottom:0; height:30px; position:absolute; top:0;} .sitebar__logo {background: 0 0 no-repeat; right:0; width:510px; z-index:98;} .sitebar__grd {background:url(http://design.metabar.ru/sitebar/sitebar5-sprite.png) 0 -60px repeat-x; left:0; width:100%; z-index:99;} .sitebar__close, .sitebar-button__l, .sitebar-button__r {background:url(http://design.metabar.ru/sitebar/sitebar5-sprite.png) 0 -30px no-repeat; display:block; overflow:hidden;} .sitebar__close {height:30px; position:absolute; right:0; text-indent:-9999px; top:0; width:27px; z-index:100;} .sitebar__cnt {margin:0 27px 0 20px; position:relative; white-space:nowrap; z-index:100;} .sitebar-label, .sitebar-button {display:-moz-inline-stack; display:inline-block;} .sitebar-label__t, .sitebar-button, .sitebar-button__r {font:normal 0.99em/250% 'Trebuchet MS', sans-serif !important;} .sitebar-label__t {color:#fff;} .sitebar-button {margin:0 7px 0 0; *margin:0 10px 0 0;} .sitebar-button__l {background-position:-400px -30px; padding:0 0 0 3px; text-decoration:none; color:#000 !important;} .sitebar-button__r {background-position:100% 0; padding:0 12px 0 9px;} .sitebar-button, .sitebar-button__l, .sitebar-button__r {*cursor:pointer;} .sitebar-label, .sitebar-button, .sitebar-button__l, .sitebar-button__r {height:30px; vertical-align:top; *display:inline; *zoom:1;} .sitebar__cnt {*zoom:1;} /* Sitebar for IE */ .sitebar__ie {background:#39c;} .sitebar__ie .sitebar__logo {background-image:url(http://design.metabar.ru/sitebar/sitebar5-ie.png);} /* Sitebar for FF */ .sitebar__ff {background:#c30;} .sitebar__ff .sitebar__logo {background-image:url(http://design.metabar.ru/sitebar/sitebar5-ff.png);} /* Sitebar for Opera */ .sitebar__opera {background: #cc001c;} .sitebar__opera .sitebar__logo {background-image:url(http://design.metabar.ru/sitebar/sitebar5-opera.png); width:218px; right:65px;} .sitebar__opera .sitebar__close {background-position:-17px -30px;} /* Sitebar for CHROME */ .sitebar__chrome {background:#4cb749;} .sitebar__chrome .sitebar__logo {background-image:url(http://design.metabar.ru/sitebar/sitebar5-chrome.png);}", "height": 30};

    this.iframe = null;
    this.iframeDocument = null;

    this.setCookie = function (name, value, expires, path, domain, secure) {
        document.cookie = name + "=" + escape(value) +
            ((expires) ? "; expires=" + expires : "") +
            ((path) ? "; path=" + path : "") +
            ((domain) ? "; domain=" + domain : "") +
            ((secure) ? "; secure" : "");
    }

    this.getCookie = function (name) {
        var cookie = " " + document.cookie;
        var search = " " + name + "=";
        var setStr = null;
        var offset = 0;
        var end = 0;
        if (cookie.length > 0) {
            offset = cookie.indexOf(search);
            if (offset != -1) {
                offset += search.length;
                end = cookie.indexOf(";", offset);
                if (end == -1) {
                    end = cookie.length;
                }
                setStr = unescape(cookie.substring(offset, end));
            }
        }
        return (setStr);
    }

    this.removeSitebar = function (track) {
        if (!this.iframe) return;
        if (track && this.iframeDocument) {
            this.iframeDocument.write("<img style='display:block; position:absolute;' src='" + 'http://' + this.settings.host + "/stats/add_sitebar_close_stat/?toolbar_id=" + this.settings.toolbar_id + "' />");
        }
        var expires = new Date();
        expires.setDate(expires.getDate() + 90);
        this.setCookie('hide_metabar_sitebar', 'true', expires.toGMTString(), '/', null, null);
        this.iframe.parentNode.removeChild(this.iframe);

        this.unfixTopMargin();
    }

    this.getIframeDocument = function (iframeNode) {
        if (iframeNode.contentDocument) return iframeNode.contentDocument
        if (iframeNode.contentWindow) return iframeNode.contentWindow.document
        return iframeNode.document
    }

    this.getTopMargin = function (node) {
        if (window.getComputedStyle) {
            return Number(window.getComputedStyle(node, null).marginTop.replace("px", ""));
        }
        else if (node.currentStyle) {   //IE
            if (node.currentStyle["marginTop"]) {
                return Number(node.currentStyle["marginTop"].replace("px", ""));
            }
        }
        return 0;
    }

    this.isPinnedSitesMode = function () {
        try {
            if (window.external.msIsSiteMode()) {
                return true;
            }
        } catch (ex) {
            //
        }
        return false;
    }

    this.isQuirksMode = function () {
        return "BackCompat" == document.compatMode;
    }

    this.fixTopMargin = function () {
        var topMargin = this.settings.height;

        if (this.isQuirksMode()) {
            topMargin += this.getTopMargin(document.body);
            document.body.style.marginTop = "" + topMargin + "px";
        } else {
            var html = document.body.parentNode;
            topMargin += this.getTopMargin(html);
            html.style.marginTop = "" + topMargin + "px";
        }
    }

    this.unfixTopMargin = function () {
        var topMargin;

        if (this.isQuirksMode()) {
            topMargin = Math.max(0, this.getTopMargin(document.body) - this.settings.height);
            document.body.style.marginTop = "" + topMargin + "px";
        } else {
            var html = document.body.parentNode;
            topMargin = Math.max(0, this.getTopMargin(html) - this.settings.height);
            html.style.marginTop = "" + topMargin + "px";
        }
    }

    this.inject = function () {
        try {
            if (null == document.body) {
                document.write("<b id='metabar-loader'>M</b>");
                var loader = document.getElementById("metabar-loader");
                loader.parentNode.removeChild(loader);
            }

            var IS_IE = /msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent);
            var IS_FF = /Firefox[\/\s](\d+\.\d+)/i.test(navigator.userAgent);
            var IS_OPERA = /opera/i.test(navigator.userAgent);
            var IS_CHROME = /Chrome/i.test(navigator.userAgent);
            var popupRE = /^Metabar_/;

            if ((IS_IE || IS_FF || (IS_OPERA && this.settings.opera_allowed) || (IS_CHROME && this.settings.chrome_allowed)) && !this.getCookie('hide_metabar_sitebar')
                && !popupRE.test(window.name) && (window.parent == window)) {
                this.iframe = document.createElement("iframe");

                var position = (this.settings.fixed_position && !(IS_IE && this.isQuirksMode())) ? "fixed" : "absolute";
                this.iframe.style.position = position;
                this.iframe.style.top = "0px";
                this.iframe.style.left = "0px";
                this.iframe.style.overflow = "hidden";
                this.iframe.style.zIndex = "10000";
                this.iframe.style.border = "0px";

                this.iframe.setAttribute("frameborder", "0");
                this.iframe.setAttribute("marginwidth", "0");
                this.iframe.setAttribute("marginheight", "0");
                this.iframe.setAttribute("hspace", "0");
                this.iframe.setAttribute("vspace", "0");
                this.iframe.setAttribute("width", "100%");
                this.iframe.setAttribute("height", this.settings.height + "px");
                this.iframe.setAttribute("scrolling", "no");

                this.iframe.id = "METABAR_IFRAME";

                document.body.appendChild(this.iframe);

                this.iframeDocument = this.getIframeDocument(this.iframe);

                //var body_class = IS_IE ? "ie" : (IS_FF ? "ff" : "");
                if (IS_IE){
                    body_class = 'ie';
                }
                else if (IS_FF){
                    body_class = 'ff';
                }
                else if (IS_OPERA){
                    body_class = 'opera';
                }
                else if (IS_CHROME){
                    body_class = 'chrome';
                }
                else { 
                    body_class = '';
                }
                var stats_img = "<img style='position:absolute;top:-10000px;' alt='' src='http://stats." + this.settings.host + "/blank.gif?toolbar_id=" + this.settings.toolbar_id + "' />";

                var headcrabHTML = "";
                if (IS_IE && /<!-- IE -->(.*)<!-- END_IE -->/.test(this.settings.html)) {
                    headcrabHTML = /<!-- IE -->(.*)<!-- END_IE -->/.exec(this.settings.html)[1];
                }
                else if (IS_FF && /<!-- FF -->(.*)<!-- END_FF -->/.test(this.settings.html)) {
                    headcrabHTML = /<!-- FF -->(.*)<!-- END_FF -->/.exec(this.settings.html)[1];
                }
                else if (IS_OPERA && /<!-- OPERA -->(.*)<!-- END_OPERA -->/.test(this.settings.html)) {
                    headcrabHTML = /<!-- OPERA -->(.*)<!-- END_OPERA -->/.exec(this.settings.html)[1];
                }
                else if (IS_CHROME && /<!-- CHROME -->(.*)<!-- END_CHROME -->/.test(this.settings.html)) {
                    headcrabHTML = /<!-- CHROME -->(.*)<!-- END_CHROME -->/.exec(this.settings.html)[1];
                }
                else {
                    headcrabHTML = this.settings.html;
                }

                this.iframeDocument.write(headcrabHTML + stats_img + "<style>" + this.settings.css + "</style>");
                this.iframeDocument.body.className += " " + body_class;
                this.iframeDocument.close();

                this.fixTopMargin();
            }
        } catch (e) {
            console.log(e)
        }
    }

    this.inject();

    this.set_metabar_installed = function (toolbar_id, version, source_id) {
        if (toolbar_id == this.settings.toolbar_id || source_id == this.settings.toolbar_id) {
            this.removeSitebar(false);
        }
    }

    var self = this;
    window.set_metabar_installed = function () {
        self.set_metabar_installed.apply(self, arguments);
    }
}