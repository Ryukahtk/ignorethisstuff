var _____WB$wombat$assign$function_____ = function(name) {
    return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name];
};
if (!self.__WB_pmw) {
    self.__WB_pmw = function(obj) {
        this.__WB_source = obj;
        return this;
    }
} {
    let window = _____WB$wombat$assign$function_____("window");
    let self = _____WB$wombat$assign$function_____("self");
    let document = _____WB$wombat$assign$function_____("document");
    let location = _____WB$wombat$assign$function_____("location");
    let top = _____WB$wombat$assign$function_____("top");
    let parent = _____WB$wombat$assign$function_____("parent");
    let frames = _____WB$wombat$assign$function_____("frames");
    let opener = _____WB$wombat$assign$function_____("opener");

    (function(d) {
        function K(a, b) {
            d(a.currentImg.attr("data-text-id")).css("display", "block");
            var g = d(a.currentImg.attr("data-text-id")).children(),
                e = 0;
            currentText_arr = [];
            g.each(function() {
                currentText_arr[e] = d(this);
                var f = currentText_arr[e].attr("data-initial-left"),
                    g = currentText_arr[e].attr("data-initial-top");
                b.responsive && (f = parseInt(f / (b.origWidth / b.width), 10), g = parseInt(g / (b.origWidth / b.width), 10));
                currentText_arr[e].css({
                    left: f + "px",
                    top: g + "px",
                    opacity: parseInt(currentText_arr[e].attr("data-fade-start"), 10) / 100
                });
                var h = currentText_arr[e];
                setTimeout(function() {
                    b.responsive && (newCss = "", -1 != h.css("font-size").lastIndexOf("px") ? (fontSize = h.css("font-size").substr(0, h.css("font-size").lastIndexOf("px")), newCss += "font-size:" + fontSize / (b.origWidth / b.width) + "px;") : -1 != h.css("font-size").lastIndexOf("em") && (fontSize = h.css("font-size").substr(0, h.css("font-size").lastIndexOf("em")), newCss += "font-size:" + fontSize / (b.origWidth / b.width) + "em;"), -1 != h.css("line-height").lastIndexOf("px") ? (lineHeight = h.css("line-height").substr(0, h.css("line-height").lastIndexOf("px")), newCss += "line-height:" + lineHeight / (b.origWidth / b.width) + "px;") : -1 != h.css("line-height").lastIndexOf("em") && (lineHeight = h.css("line-height").substr(0, h.css("line-height").lastIndexOf("em")), newCss += "line-height:" + lineHeight / (b.origWidth / b.width) + "em;"), h.wrapInner('<div class="newFS" style="' + newCss + '" />'));
                    var f = h.attr("data-final-left"),
                        g = h.attr("data-final-top");
                    b.responsive && (f = parseInt(f / (b.origWidth / b.width), 10), g = parseInt(g / (b.origWidth / b.width), 10));
                    var e = 1;
                    !0 == a.isVideoPlaying && (e = 0);
                    h.animate({
                        opacity: e,
                        left: f + "px",
                        top: g + "px"
                    }, 1E3 * h.attr("data-duration"), function() {
                        !0 == a.isVideoPlaying && d(a.currentImg.attr("data-text-id")).children().css("opacity", 0)
                    })
                }, 1E3 * currentText_arr[e].attr("data-delay"));
                e++
            })
        }

        function L(a, b, g, e, f) {
            var l = F(); - 1 == a && (a = 0);
            var h = d(f[a]);
            f = b.horizontalPosition;
            void 0 != h.attr("data-horizontalPosition") && "" != h.attr("data-horizontalPosition") && (f = h.attr("data-horizontalPosition"));
            var j = b.verticalPosition;
            void 0 != h.attr("data-verticalPosition") && "" != h.attr("data-verticalPosition") && (j = h.attr("data-verticalPosition"));
            var n = b.initialZoom;
            void 0 != h.attr("data-initialZoom") && "" != h.attr("data-initialZoom") && (n = Number(h.attr("data-initialZoom")));
            var k = b.finalZoom;
            void 0 != h.attr("data-finalZoom") && "" != h.attr("data-finalZoom") && (k = Number(h.attr("data-finalZoom")));
            e = e[a].split(";");
            b.responsive && (e[0] /= b.origWidth / b.width, e[1] /= b.origWidth / b.width);
            b.width100Proc && b.height100Proc && e[1] * Math.min(k, n) < b.height && (newH = b.height / Math.min(k, n), newW = newH * (e[0] / e[1]), e[0] = newW, e[1] = newH);
            a = d("#contentHolderUnit_" + a, g).find("img:first");
            parseInt(k * e[0], 10);
            parseInt(k * e[1], 10);
            a.css({
                width: parseInt(n * e[0], 10) + "px",
                height: parseInt(n * e[1], 10) + "px"
            });
            g = 0;
            switch (f) {
                case "left":
                    g = 0;
                    break;
                case "center":
                    g = (b.width - parseInt(n * e[0], 10)) / 2;
                    break;
                case "right":
                    g = b.width - parseInt(n * e[0], 10);
                    break;
                default:
                    g = 0
            }
            k = 0;
            switch (j) {
                case "top":
                    k = -2;
                    break;
                case "center":
                    k = (b.height - parseInt(n * e[1], 10)) / 2;
                    break;
                case "bottom":
                    k = b.height - parseInt(n * e[1], 10) + 2;
                    break;
                default:
                    k = 0
            }
            a.css({
                left: parseInt(g, 10) + "px",
                top: parseInt(k, 10) + "px",
                opacity: b.initialOpacity
            });
            (-1 == l || -1 != l && 10 <= l) && a.css({
                "-webkit-transform-origin": f + " " + j,
                "-moz-transform-origin": f + " " + j,
                "-o-transform-origin": f + " " + j,
                "transform-origin": f + " " + j
            })
        }

        function J(a, b, g) {
            var e = F();
            g = d(g[a.current_img_no]);
            var f = b.initialZoom;
            void 0 != g.attr("data-initialZoom") && "" != g.attr("data-initialZoom") && (f = Number(g.attr("data-initialZoom")));
            b = b.finalZoom;
            void 0 != g.attr("data-finalZoom") && "" != g.attr("data-finalZoom") && (b = Number(g.attr("data-finalZoom")));
            f != b && (-1 != e && 10 > e ? (clearInterval(a.msiInterval), a.current_imgInside.css("filter", 'progid:DXImageTransform.Microsoft.Matrix(FilterType="bilinear",M11=1, M12=0, M21=0, M22=1, Dx=0, Dy=0)')) : a.current_imgInside.css({
                "-webkit-transition-duration": "0s",
                "-moz-transition-duration": "0s",
                "-o-transition-duration": "0s",
                "transition-duration": "0s",
                "-webkit-transform": "scale(1)",
                "-moz-transform": "scale(1)",
                "-o-transform": "scale(1)",
                transform: "scale(1)"
            }))
        }

        function M(a, b, g, e, f) {
            f = d(f[a.current_img_no]);
            var l = F(),
                h = b.horizontalPosition;
            void 0 != f.attr("data-horizontalPosition") && "" != f.attr("data-horizontalPosition") && (h = f.attr("data-horizontalPosition"));
            var j = b.verticalPosition;
            void 0 != f.attr("data-verticalPosition") && "" != f.attr("data-verticalPosition") && (j = f.attr("data-verticalPosition"));
            var n = b.duration;
            void 0 != f.attr("data-duration") && "" != f.attr("data-duration") && (n = Number(f.attr("data-duration")));
            var k = b.initialZoom;
            void 0 != f.attr("data-initialZoom") && "" != f.attr("data-initialZoom") && (k = Number(f.attr("data-initialZoom")));
            var m = b.finalZoom;
            void 0 != f.attr("data-finalZoom") && "" != f.attr("data-finalZoom") && (m = Number(f.attr("data-finalZoom")));
            a.current_imgInside = d("#contentHolderUnit_" + a.current_img_no, g).find("img:first");
            var r = e[a.current_img_no].split(";");
            b.responsive && (r[0] /= b.origWidth / b.width, r[1] /= b.origWidth / b.width);
            k != m && (-1 != l && 10 > l ? (b.width100Proc && (n += b.durationIEfix), a.curZoom = 1, zoomStep = 0, a.cur_marginLeft = 0, a.cur_marginTop = 0, a.msiInitialTime = (new Date).getTime(), a.msiInterval = setInterval(function() {
                nowx = (new Date).getTime();
                nowx - a.msiInitialTime > 1E3 * n ? clearInterval(a.msiInterval) : (zoomStep = (nowx - a.msiInitialTime) * Math.abs(k - m) / (1E3 * n), a.curZoom = k <= m ? 1 + zoomStep : 1 - zoomStep, "center" == h ? a.cur_marginLeft = (1 - a.curZoom) * k * r[0] / 2 : "right" == h && (a.cur_marginLeft = (1 - a.curZoom) * k * r[0]), "center" == j ? a.cur_marginTop = (1 - a.curZoom) * k * r[1] / 2 : "bottom" == j && (a.cur_marginTop = (1 - a.curZoom) * k * r[1]), a.current_imgInside.css({
                    filter: 'progid:DXImageTransform.Microsoft.Matrix(FilterType="bilinear",M11=' + a.curZoom + ", M12=0, M21=0, M22=" + a.curZoom + ", Dx=" + a.cur_marginLeft + ",Dy=" + a.cur_marginTop + ")"
                }))
            }, 25)) : (zoomVal = m / k, a.current_imgInside.css({
                "-webkit-transition-duration": n + "s",
                "-moz-transition-duration": n + "s",
                "-o-transition-duration": n + "s",
                "transition-duration": n + "s",
                "-webkit-transition-timing-function": "ease",
                "-moz-transition-timing-function": "ease",
                "-o-transition-timing-function": "ease",
                "transition-timing-function": "ease",
                "-webkit-transform": "scale(" + zoomVal + ") rotate(0.1deg)",
                "-moz-transform": "scale(" + zoomVal + ") rotate(0.1deg)",
                "-o-transform": "scale(" + zoomVal + ")",
                transform: "scale(" + zoomVal + ") rotate(0.1deg)",
                perspective: "0",
                "-webkit-perspective": "0"
            })))
        }

        function T(a, b) {
            nowx = (new Date).getTime();
            !a.mouseOverBanner && b.showCircleTimer && (a.ctx.clearRect(0, 0, a.canvas.width, a.canvas.height), a.ctx.beginPath(), a.ctx.globalAlpha = b.behindCircleAlpha / 100, a.ctx.arc(b.circleRadius + 2 * b.circleLineWidth, b.circleRadius + 2 * b.circleLineWidth, b.circleRadius, 0, 2 * Math.PI, !1), a.ctx.lineWidth = b.circleLineWidth + 2, a.ctx.strokeStyle = b.behindCircleColor, a.ctx.stroke(), a.ctx.beginPath(), a.ctx.globalAlpha = b.circleAlpha / 100, a.ctx.arc(b.circleRadius + 2 * b.circleLineWidth, b.circleRadius + 2 * b.circleLineWidth, b.circleRadius, 0, 2 * ((a.timeElapsed + nowx - a.arcInitialTime) / 1E3) / b.autoPlay * Math.PI, !1), a.ctx.lineWidth = b.circleLineWidth, a.ctx.strokeStyle = b.circleColor, a.ctx.stroke())
        }

        function B(a, b, g, e, f, l, h, j, n, k, m, r, v, C, t, p, s) {
            var x = !0;
            if (!g.loop && b.current_img_no + a >= e || !g.loop && 0 > b.current_img_no + a) x = !1;
            x && !b.slideIsRunning && (b.slideIsRunning = !0, d(".newFS", k).contents().unwrap(), b.arcInitialTime = (new Date).getTime(), b.timeElapsed = 0, g.showCircleTimer && (clearInterval(b.intervalID), b.ctx.clearRect(0, 0, b.canvas.width, b.canvas.height), b.ctx.beginPath(), b.ctx.globalAlpha = g.behindCircleAlpha / 100, b.ctx.arc(g.circleRadius + 2 * g.circleLineWidth, g.circleRadius + 2 * g.circleLineWidth, g.circleRadius, 0, 2 * Math.PI, !1), b.ctx.lineWidth = g.circleLineWidth + 2, b.ctx.strokeStyle = g.behindCircleColor, b.ctx.stroke(), b.ctx.beginPath(), b.ctx.globalAlpha = g.circleAlpha / 100, b.ctx.arc(g.circleRadius + 2 * g.circleLineWidth, g.circleRadius + 2 * g.circleLineWidth, g.circleRadius, 0, 0, !1), b.ctx.lineWidth = g.circleLineWidth, b.ctx.strokeStyle = g.circleColor, b.ctx.stroke(), b.intervalID = setInterval(function() {
                T(b, g)
            }, 125)), b.bottomNavClicked || (b.previous_current_img_no = b.current_img_no), b.bottomNavClicked = !1, d(b.currentImg.attr("data-text-id")).css("display", "none"), "opportune" == g.skin && d(f[b.current_img_no]).removeClass("bottomNavButtonON"), "opportune" != g.skin && d(v[b.current_img_no]).removeClass("thumbsHolder_ThumbON"), m.css("display", "none"), b.current_img_no = b.current_img_no + a >= e ? 0 : 0 > b.current_img_no + a ? e - 1 : b.current_img_no + a, "opportune" == g.skin && d(f[b.current_img_no]).addClass("bottomNavButtonON"), "opportune" != g.skin && (d(v[b.current_img_no]).addClass("thumbsHolder_ThumbON"), currentCarouselLeft = C.css("left").substr(0, C.css("left").lastIndexOf("px")), 0 === b.current_img_no || b.current_img_no === e - 1 ? N(0, C, t, p, g, e, s, b) : N(1001, C, t, p, g, e, s, b)), g.fadeSlides ? (d("#contentHolderUnit_" + b.current_img_no, k).css({
                opacity: 1,
                "z-index": 0,
                display: "block"
            }), d("#contentHolderUnit_" + b.previous_current_img_no, k).css({
                "z-index": 1,
                display: "block"
            }), d("#contentHolderUnit_" + b.previous_current_img_no, k).animate({
                opacity: 0
            }, 800, "easeOutQuad", function() {
                b.slideIsRunning = !1;
                g.fadeSlides && (d("#contentHolderUnit_" + b.current_img_no, k).css({
                    "z-index": 1
                }), d("#contentHolderUnit_" + b.previous_current_img_no, k).css({
                    "z-index": 0,
                    display: "none"
                }));
                J(b, g, l);
                b.currentImg = d(l[b.current_img_no]);
                M(b, g, k, r, l);
                "true" == b.currentImg.attr("data-video") && m.css("display", "block");
                "true" == d(l[b.previous_current_img_no]).attr("data-video") && d("#contentHolderUnit_" + b.previous_current_img_no, k).html(d(l[b.previous_current_img_no]).html());
                L(b.previous_current_img_no, g, k, r, l);
                K(b, g, h, j);
                0 < g.autoPlay && (1 < e && !b.mouseOverBanner) && (clearTimeout(b.timeoutID), b.timeoutID = setTimeout(function() {
                    B(1, b, g, e, f, l, h, j, n, k, m, r, v, C, t, p, s)
                }, 1E3 * g.autoPlay))
            })) : n.animate({
                left: -1 * b.current_img_no * g.width + "px"
            }, 800, "easeOutQuad", function() {
                b.slideIsRunning = !1;
                J(b, g, l);
                b.currentImg = d(l[b.current_img_no]);
                M(b, g, k, r, l);
                "true" == b.currentImg.attr("data-video") && m.css("display", "block");
                "true" == d(l[b.previous_current_img_no]).attr("data-video") && d("#contentHolderUnit_" + b.previous_current_img_no, k).html(d(l[b.previous_current_img_no]).html());
                L(b.previous_current_img_no, g, k, r, l);
                K(b, g, h, j);
                0 < g.autoPlay && (1 < e && !b.mouseOverBanner) && (clearTimeout(b.timeoutID), b.timeoutID = setTimeout(function() {
                    B(1, b, g, e, f, l, h, j, n, k, m, r, v, C, t, p, s)
                }, 1E3 * g.autoPlay))
            }))
        }

        function N(a, b, d, e, f, l, h, j) {
            currentCarouselLeft = b.css("left").substr(0, b.css("left").lastIndexOf("px"));
            1 === a || -1 === a ? (j.isCarouselScrolling = !0, b.css("opacity", "0.5"), b.animate({
                opacity: 1,
                left: "+=" + a * j.carouselStep
            }, 500, "easeOutCubic", function() {
                I(j, b, d, e, f, l, h);
                j.isCarouselScrolling = !1
            })) : currentCarouselLeft != -1 * Math.floor(j.current_img_no / f.numberOfThumbsPerScreen) * j.carouselStep && (j.isCarouselScrolling = !0, b.css("opacity", "0.5"), b.animate({
                opacity: 1,
                left: -1 * Math.floor(j.current_img_no / f.numberOfThumbsPerScreen) * j.carouselStep
            }, 500, "easeOutCubic", function() {
                I(j, b, d, e, f, l, h);
                j.isCarouselScrolling = !1
            }))
        }

        function I(a, b, d, e, f, l, h) {
            currentCarouselLeft = b.css("left").substr(0, b.css("left").lastIndexOf("px"));
            0 > currentCarouselLeft ? d.hasClass("carouselLeftNavDisabled") && d.removeClass("carouselLeftNavDisabled") : d.addClass("carouselLeftNavDisabled");
            Math.abs(currentCarouselLeft - a.carouselStep) < (h.width() + a.thumbMarginLeft) * l ? e.hasClass("carouselRightNavDisabled") && e.removeClass("carouselRightNavDisabled") : e.addClass("carouselRightNavDisabled")
        }

        function U(a, b, g, e, f, l, h, j, n, k, m) {
            "opportune" != b.skin && (m.css({
                top: b.height + "px",
                "margin-top": parseInt(b.thumbsWrapperMarginTop / (b.origWidth / b.width), 10) + "px",
                height: parseInt(b.origthumbsHolderWrapperH / (b.origWidth / b.width), 10) + "px"
            }), bgTopCorrection = 0, h.css("background-position", "0px " + ((m.height() - b.origthumbsHolderWrapperH) / 2 + bgTopCorrection) + "px"), j.css("background-position", "0px " + ((m.height() - b.origthumbsHolderWrapperH) / 2 + bgTopCorrection) + "px"), k.css("width", b.width - h.width() - j.width()), b.origWidthThumbsHolderVisibleWrapper = b.origWidth - h.width() - j.width(), f.css({
                width: parseInt(b.origThumbW / (b.origWidthThumbsHolderVisibleWrapper / k.width()), 10) + "px",
                height: parseInt(b.origThumbH / (b.origWidthThumbsHolderVisibleWrapper / k.width()), 10) + "px"
            }), b.numberOfThumbsPerScreen >= g && k.css("left", parseInt((m.width() - (n.width() + a.thumbMarginLeft) * g) / 2, 10) + "px"), d(".thumbsHolder_ThumbOFF", e).find("img:first").css({
                width: f.width() + "px",
                height: f.height() + "px",
                "margin-top": parseInt((m.height() - f.height()) / 2, 10) + "px"
            }), a.thumbMarginLeft = Math.floor((m.width() - h.width() - j.width() - n.width() * b.numberOfThumbsPerScreen) / (b.numberOfThumbsPerScreen - 1)), thumb_i = -1, l.children().each(function() {
                thumb_i++;
                theThumb = d(this);
                theThumb.css("background-position", "center " + b.thumbsOnMarginTop / (b.origWidth / b.width) + "px");
                0 >= thumb_i ? theThumb.css("margin-left", Math.floor((m.width() - h.width() - j.width() - (a.thumbMarginLeft + theThumb.width()) * (b.numberOfThumbsPerScreen - 1) - theThumb.width()) / 2) + "px") : theThumb.css("margin-left", a.thumbMarginLeft + "px")
            }), a.carouselStep = (n.width() + a.thumbMarginLeft) * b.numberOfThumbsPerScreen)
        }

        function F() {
            var a = -1;
            "Microsoft Internet Explorer" == navigator.appName && null != /MSIE ([0-9]{1,}[.0-9]{0,})/.exec(navigator.userAgent) && (a = parseFloat(RegExp.$1));
            return parseInt(a, 10)
        }
        d.fn.bannerscollection_zoominout = function(a) {
            a = d.extend({}, d.fn.bannerscollection_zoominout.defaults, a);
            return this.each(function() {
                var b = d(this);
                responsiveWidth = b.parent().width();
                responsiveHeight = b.parent().height();
                a.responsiveRelativeToBrowser && (responsiveWidth = d(window).width(), responsiveHeight = d(window).height());
                a.origWidth = a.width;
                a.width100Proc && (a.width = responsiveWidth);
                a.origHeight = a.height;
                a.height100Proc && (a.height = responsiveHeight);
                if (a.responsive && (a.origWidth != responsiveWidth || a.width100Proc)) a.width = a.origWidth > responsiveWidth || a.width100Proc ? responsiveWidth : a.origWidth, a.height100Proc || (a.height = a.width / (a.origWidth / a.origHeight));
                a.enableTouchScreen && (a.responsive && a.fadeSlides) && (a.width -= 1);
                var g = d("<div></div>").addClass("bannerscollection_zoominout").addClass(a.skin),
                    e = d('<div class="bannerControls"> <div class="leftNav"></div> <div class="rightNav"></div> </div> <div class="contentHolderVisibleWrapper"><div class="contentHolder"></div></div> <div class="playOver"></div> <div class="thumbsHolderWrapper"><div class="thumbsHolderVisibleWrapper"><div class="thumbsHolder"></div></div></div> <canvas class="mycanvas"></canvas>');
                b.wrap(g);
                b.after(e);
                var f = b.parent(".bannerscollection_zoominout"),
                    l = d(".bannerControls", f),
                    h = d(".contentHolderVisibleWrapper", f),
                    j = d(".contentHolder", f),
                    g = d('<div class="bottomNav"></div>');
                b.after(g);
                a.showAllControllers || l.css("display", "none");
                var n = d(".leftNav", f),
                    k = d(".rightNav", f);
                n.css("display", "none");
                k.css("display", "none");
                a.showNavArrows && a.showOnInitNavArrows && (n.css("display", "block"), k.css("display", "block"));
                var m = d(".bottomNav", f),
                    r;
                "opportune" == a.skin && (m.css({
                    display: "block",
                    top: a.height + "px"
                }), a.width100Proc && a.height100Proc ? m.css("margin-top", a.thumbsWrapperMarginTop + "px") : m.css("margin-top", a.thumbsWrapperMarginTop / (a.origWidth / a.width) + "px"));
                a.showBottomNav || m.css("display", "none");
                a.showOnInitBottomNav || m.css("left", "-5000px");
                var v = d(".thumbsHolderWrapper", f),
                    C = d(".thumbsHolderVisibleWrapper", f),
                    t = d(".thumbsHolder", f),
                    p, s;
                p = d('<div class="carouselLeftNav"></div>');
                s = d('<div class="carouselRightNav"></div>');
                v.append(p);
                v.append(s);
                s.css("right", "0");
                t.css("width", p.width() + "px");
                (!a.showBottomNav || !a.showOnInitBottomNav) && v.css({
                    opacity: 0,
                    display: "none"
                });
                "opportune" != a.skin && v.css("margin-top", parseInt(a.thumbsWrapperMarginTop / (a.origWidth / a.width), 10) + "px");
                g = F();
                a.enableTouchScreen && (a.fadeSlides && (e = Math.floor(1E5 * Math.random()), f.wrap('<div id="zoominoutParent_' + e + '" style="position:relative;" />'), d("#zoominoutParent_" + e).width(a.width + 1), d("#zoominoutParent_" + e).height(a.height)), -1 != g && 9 == g && a.fadeSlides && "opportune" == a.skin || (j.css("cursor", "url(" + a.absUrl + "skins/hand.cur),url(" + a.absUrl + "skins/hand.cur),move"), f.css("cursor", "url(" + a.absUrl + "skins/hand.cur),url(" + a.absUrl + "skins/hand.cur),move")), j.css("left", "0"), a.fadeSlides ? -1 != g && 9 == g && a.fadeSlides && "opportune" == a.skin || f.draggable({
                    axis: "x",
                    containment: "parent",
                    start: function() {
                        origLeft = d(this).css("left");
                        x.css("display", "none")
                    },
                    stop: function() {
                        c.slideIsRunning || (finalLeft = d(this).css("left"), direction = 1, origLeft < finalLeft && (direction = -1), d(this).css("left", "0px"), B(direction, c, a, q, z, w, b, l, j, f, x, A, y, t, p, s, u))
                    }
                }) : j.draggable({
                    axis: "x",
                    distance: 10,
                    start: function() {
                        origLeft = parseInt(d(this).css("left"), 10);
                        x.css("display", "none")
                    },
                    stop: function() {
                        c.slideIsRunning || (finalLeft = parseInt(d(this).css("left"), 10), direction = 1, origLeft < finalLeft && (direction = -1), B(direction, c, a, q, z, w, b, l, j, f, x, A, y, t, p, s, u))
                    }
                }));
                var x = d(".playOver", f);
                x.css({
                    left: parseInt((a.width - x.width()) / 2, 10) + "px",
                    top: parseInt((a.height - x.height()) / 2, 10) + "px"
                });
                var c = {
                    current_img_no: 0,
                    currentImg: 0,
                    previous_current_img_no: 0,
                    slideIsRunning: !1,
                    mouseOverBanner: !1,
                    isVideoPlaying: !1,
                    bottomNavClicked: !1,
                    current_imgInside: "",
                    windowWidth: 0,
                    carouselStep: 0,
                    thumbMarginLeft: 0,
                    timeoutID: "",
                    intervalID: "",
                    arcInitialTime: (new Date).getTime(),
                    timeElapsed: 0,
                    canvas: "",
                    ctx: "",
                    bannerRatio: a.origWidth / a.origHeight,
                    msiInterval: "",
                    msiInitialTime: (new Date).getTime(),
                    curZoom: 0,
                    cur_marginLeft: 0,
                    cur_marginTop: 0
                };
                c.canvas = d(".mycanvas", f)[0];
                c.canvas.width = 2 * a.circleRadius + 4 * a.circleLineWidth;
                c.canvas.height = 2 * a.circleRadius + 4 * a.circleLineWidth; - 1 != g && 9 > g && (a.showCircleTimer = !1);
                a.showCircleTimer && (c.ctx = c.canvas.getContext("2d"));
                var A = [],
                    P = 0;
                f.width(a.width);
                f.height(a.height);
                h.width(a.width);
                h.height(a.height);
                j.width(a.width);
                j.height(a.height);
                l.css("margin-top", parseInt((a.height - n.height()) / 2, 10) + "px");
                var q = 0,
                    w = b.find("ul:first").children(),
                    G, Q = 0,
                    D, H = 0,
                    I = 0,
                    E, u, R = 0,
                    V = 0;
                w.each(function() {
                    c.currentImg = d(this);
                    c.currentImg.is("li") || (c.currentImg = c.currentImg.find("li:first"));
                    c.currentImg.is("li") && (q++, myzindex = 0, mydisplay = "none", 1 == q && (myzindex = 1, mydisplay = "block"), G = d('<div class="contentHolderUnit" rel="' + (q - 1) + '" id="contentHolderUnit_' + (q - 1) + '">' + c.currentImg.html() + "</div>"), a.fadeSlides ? G.css({
                        position: "absolute",
                        top: 0,
                        left: 0,
                        "z-index": myzindex,
                        display: mydisplay
                    }) : G.css({
                        position: "relative",
                        "float": "left"
                    }), G.width(a.width), G.height(a.height), j.append(G), Q += a.width, c.current_img_no = q - 1, E = d("#contentHolderUnit_" + c.current_img_no, f).find("img:first"), A[q - 1] = E.width() + ";" + E.height(), L(q - 1, a, f, A, w), "opportune" == a.skin && (D = d('<div class="bottomNavButtonOFF" rel="' + (q - 1) + '"></div>'), m.append(D), H += parseInt(D.css("padding-left").substring(0, D.css("padding-left").length - 2), 10) + D.width(), I = parseInt((m.height() - parseInt(D.css("height").substring(0, D.css("height").length - 2))) / 2, 10), D.css("margin-top", I + "px")), "opportune" != a.skin && (image_name = d(w[q - 1]).attr("data-bottom-thumb"), u = d('<div class="thumbsHolder_ThumbOFF" rel="' + (q - 1) + '"><img src="' + image_name + '"></div>'), t.append(u), 0 == a.origThumbW && (0 == a.numberOfThumbsPerScreen && (a.numberOfThumbsPerScreen = Math.floor((a.origWidth - p.width() - s.width()) / u.width())), a.origThumbW = u.width(), a.origThumbH = u.height(), a.origthumbsHolderWrapperH = v.height(), c.thumbMarginLeft = Math.floor((a.origWidth - p.width() - s.width() - u.width() * a.numberOfThumbsPerScreen) / (a.numberOfThumbsPerScreen - 1))), t.css("width", t.width() + c.thumbMarginLeft + u.width() + "px"), R = parseInt((v.height() - parseInt(u.css("height").substring(0, u.css("height").length - 2))) / 2, 10)), V = a.fadeSlides ? 0 : parseInt((q - 1) * a.width, 10), j.append(d(c.currentImg.attr("data-text-id"))), d(c.currentImg.attr("data-text-id")).css({
                        width: b.width() + "px",
                        left: V,
                        top: l.css("top")
                    }))
                });
                j.width(Q);
                m.width(H);
                a.showOnInitBottomNav && m.css("left", parseInt((f.width() - H) / 2, 10) + "px");
                "opportune" != a.skin && (C.css({
                    width: a.origWidth - p.width() - s.width(),
                    left: p.width() + "px"
                }), c.carouselStep = (u.width() + c.thumbMarginLeft) * a.numberOfThumbsPerScreen, p.addClass("carouselLeftNavDisabled"), a.numberOfThumbsPerScreen >= q && (s.addClass("carouselRightNavDisabled"), p.css("display", "none"), s.css("display", "none"), C.css("left", parseInt((v.width() - (u.width() + c.thumbMarginLeft) * q) / 2, 10) + "px")), v.css("top", a.height + "px"), d(".thumbsHolder_ThumbOFF", f).find("img:first").css("margin-top", R + "px"), a.origthumbsHolder_MarginTop = R);
                var y = d(".thumbsHolder_ThumbOFF", f);
                U(c, a, q, f, y, t, p, s, u, C, v);
                d("iframe", f).each(function() {
                    var a = d(this).attr("src"),
                        b = "?wmode=transparent"; - 1 != a.indexOf("?") && (b = "&wmode=transparent");
                    d(this).attr("src", a + b)
                });
                c.current_img_no = 0;
                c.currentImg = d(w[0]);
                g = f.find("img:first");
                g[0].complete ? (d(".myloader", f).css("display", "none"), M(c, a, f, A, w), K(c, a, b, l)) : g.load(function() {
                    d(".myloader", f).css("display", "none");
                    M(c, a, f, A, w);
                    K(c, a, b, l)
                });
                f.mouseenter(function() {
                    a.pauseOnMouseOver && (c.mouseOverBanner = !0, clearTimeout(c.timeoutID), nowx = (new Date).getTime(), c.timeElapsed += nowx - c.arcInitialTime);
                    a.autoHideNavArrows && a.showNavArrows && (n.css("display", "block"), k.css("display", "block"));
                    a.autoHideBottomNav && a.showBottomNav && ("opportune" == a.skin ? m.css({
                        display: "block",
                        left: parseInt((f.width() - H) / 2, 10) + "px"
                    }) : !(0 > a.thumbsWrapperMarginTop && c.isVideoPlaying) && a.showBottomNav && (v.css({
                        display: "block"
                    }), v.stop().animate({
                        opacity: 1
                    }, 500, "swing", function() {})))
                });
                f.mouseleave(function() {
                    a.pauseOnMouseOver && (c.mouseOverBanner = !1, nowx = (new Date).getTime());
                    a.autoHideNavArrows && (a.showNavArrows && !c.isVideoPlaying) && (n.css("display", "none"), k.css("display", "none"));
                    a.autoHideBottomNav && a.showBottomNav && ("opportune" == a.skin ? m.css("display", "none") : v.stop().animate({
                        opacity: 0
                    }, 300, "swing", function() {}));
                    if (0 < a.autoPlay && 1 < q && !c.isVideoPlaying && a.pauseOnMouseOver) {
                        clearTimeout(c.timeoutID);
                        c.arcInitialTime = (new Date).getTime();
                        var d = parseInt(1E3 * a.autoPlay - (c.timeElapsed + nowx - c.arcInitialTime), 10);
                        c.timeoutID = setTimeout(function() {
                            B(1, c, a, q, z, w, b, l, j, f, x, A, y, t, p, s, u)
                        }, d)
                    }
                });
                g = d(".contentHolderUnit", j); - 1 != navigator.userAgent.indexOf("Safari") && -1 == navigator.userAgent.indexOf("Chrome") && -1 == navigator.userAgent.indexOf("Android") ? g.css("z-index", "1") : -1 != navigator.userAgent.indexOf("Chrome") && -1 == navigator.userAgent.indexOf("Android") && g.css("z-index", "1");
                g.click(function() {
                    var b = d(this).attr("rel");
                    "true" == d(w[c.current_img_no]).attr("data-video") && (b != c.current_img_no ? c.isVideoPlaying = !1 : (clearTimeout(c.timeoutID), J(c, a, w), E = d(this).find("img:first"), E.css("display", "none"), x.css("display", "none"), d(c.currentImg.attr("data-text-id")).children().css("opacity", 0), c.isVideoPlaying = !0, 0 > a.thumbsWrapperMarginTop && (v.css("display", "none"), "opportune" == a.skin && m.css("display", "none")), a.showCircleTimer && (clearInterval(c.intervalID), c.ctx.clearRect(0, 0, c.canvas.width, c.canvas.height), c.ctx.beginPath(), c.ctx.globalAlpha = 0, c.ctx.arc(a.circleRadius + 2 * a.circleLineWidth, a.circleRadius + 2 * a.circleLineWidth, a.circleRadius, 0, 0, !1), c.ctx.lineWidth = a.circleLineWidth + 2, c.ctx.strokeStyle = a.behindCircleColor, c.ctx.stroke(), c.ctx.beginPath(), c.ctx.globalAlpha = 0, c.ctx.arc(a.circleRadius + 2 * a.circleLineWidth, a.circleRadius + 2 * a.circleLineWidth, a.circleRadius, 0, 0, !1), c.ctx.lineWidth = a.circleLineWidth, c.ctx.strokeStyle = a.circleColor, c.ctx.stroke())));
                    var f = d(w[c.current_img_no]);
                    void 0 != f.attr("data-link") && (b == c.current_img_no && "" != f.attr("data-link")) && (b = a.target, void 0 != f.attr("data-target") && "" != f.attr("data-target") && (b = f.attr("data-target")), "_blank" == b ? window.open(f.attr("data-link")) : window.location = f.attr("data-link"))
                });
                x.click(function() {
                    x.css("display", "none");
                    clearTimeout(c.timeoutID);
                    J(c, a, w);
                    E = d("#contentHolderUnit_" + c.current_img_no, f).find("img:first");
                    E.css("display", "none");
                    d(c.currentImg.attr("data-text-id")).children().css("opacity", 0);
                    c.isVideoPlaying = !0;
                    0 > a.thumbsWrapperMarginTop && (v.css("display", "none"), "opportune" == a.skin && m.css("display", "none"));
                    a.showCircleTimer && (clearInterval(c.intervalID), c.ctx.clearRect(0, 0, c.canvas.width, c.canvas.height), c.ctx.beginPath(), c.ctx.globalAlpha = 0, c.ctx.arc(a.circleRadius + 2 * a.circleLineWidth, a.circleRadius + 2 * a.circleLineWidth, a.circleRadius, 0, 0, !1), c.ctx.lineWidth = a.circleLineWidth + 2, c.ctx.strokeStyle = a.behindCircleColor, c.ctx.stroke(), c.ctx.beginPath(), c.ctx.globalAlpha = 0, c.ctx.arc(a.circleRadius + 2 * a.circleLineWidth, a.circleRadius + 2 * a.circleLineWidth, a.circleRadius, 0, 0, !1), c.ctx.lineWidth = a.circleLineWidth, c.ctx.strokeStyle = a.circleColor, c.ctx.stroke())
                });
                n.click(function() {
                    c.slideIsRunning || (c.isVideoPlaying = !1, a.showBottomNav && (v.css({
                        opacity: 1,
                        display: "block"
                    }), "opportune" == a.skin && m.css("display", "block")), clearTimeout(c.timeoutID), B(-1, c, a, q, z, w, b, l, j, f, x, A, y, t, p, s, u))
                });
                k.click(function() {
                    c.slideIsRunning || (c.isVideoPlaying = !1, a.showBottomNav && (v.css({
                        opacity: 1,
                        display: "block"
                    }), "opportune" == a.skin && m.css("display", "block")), clearTimeout(c.timeoutID), B(1, c, a, q, z, w, b, l, j, f, x, A, y, t, p, s, u))
                });
                var S = !1;
                d(window).resize(function() {
                    var g = F();
                    doResizeNow = !0; - 1 != navigator.userAgent.indexOf("Android") && (0 == a.windowOrientationScreenSize0 && 0 == window.orientation && (a.windowOrientationScreenSize0 = d(window).width()), 0 == a.windowOrientationScreenSize90 && 90 == window.orientation && (a.windowOrientationScreenSize90 = d(window).height()), 0 == a.windowOrientationScreenSize_90 && -90 == window.orientation && (a.windowOrientationScreenSize_90 = d(window).height()), a.windowOrientationScreenSize0 && (0 == window.orientation && d(window).width() > a.windowOrientationScreenSize0) && (doResizeNow = !1), a.windowOrientationScreenSize90 && (90 == window.orientation && d(window).height() > a.windowOrientationScreenSize90) && (doResizeNow = !1), a.windowOrientationScreenSize_90 && (-90 == window.orientation && d(window).height() > a.windowOrientationScreenSize_90) && (doResizeNow = !1), 0 == c.windowWidth && (doResizeNow = !1, c.windowWidth = d(window).width())); - 1 != g && (9 == g && 0 == c.windowWidth) && (doResizeNow = !1);
                    c.windowWidth == d(window).width() ? (doResizeNow = !1, a.windowCurOrientation != window.orientation && -1 != navigator.userAgent.indexOf("Android") && (a.windowCurOrientation = window.orientation, doResizeNow = !0)) : c.windowWidth = d(window).width();
                    a.responsive && doResizeNow && (!1 !== S && clearTimeout(S), S = setTimeout(function() {
                        var g = c,
                            e = a,
                            k = q,
                            r = w,
                            O = x,
                            D = A,
                            E = y,
                            G = z,
                            F = u,
                            I = d("body").css("overflow"),
                            H = 0;
                        d("body").css("overflow", "hidden");
                        e.enableTouchScreen && e.fadeSlides ? (responsiveWidth = b.parent().parent().parent().width(), responsiveHeight = b.parent().parent().parent().height()) : (responsiveWidth = b.parent().parent().width(), responsiveHeight = b.parent().parent().height());
                        e.responsiveRelativeToBrowser && (responsiveWidth = d(window).width(), responsiveHeight = d(window).height());
                        e.width100Proc && (e.width = responsiveWidth);
                        e.height100Proc && (e.height = responsiveHeight);
                        if (e.origWidth != responsiveWidth || e.width100Proc) {
                            e.origWidth > responsiveWidth || e.width100Proc ? e.width = responsiveWidth : e.width100Proc || (e.width = e.origWidth);
                            e.height100Proc || (e.height = e.width / g.bannerRatio);
                            e.enableTouchScreen && (e.responsive && e.fadeSlides) && (e.width -= 1);
                            f.width(e.width);
                            f.height(e.height);
                            h.width(e.width);
                            h.height(e.height);
                            j.width(e.width);
                            j.height(e.height);
                            l.css("margin-top", parseInt((e.height - n.height()) / 2, 10) + "px");
                            J(g, e, r);
                            contentHolderUnit = d(".contentHolderUnit", f);
                            contentHolderUnit.width(e.width);
                            contentHolderUnit.height(e.height);
                            e.enableTouchScreen && e.fadeSlides && (f.parent().width(e.width + 1), f.parent().height(e.height));
                            holderWidth = e.width * k;
                            for (i = 0; i < k; i++) L(i, e, f, D, r), H = e.fadeSlides ? 0 : parseInt(i * e.width, 10), d(d(r[i]).attr("data-text-id")).css({
                                width: b.width() + "px",
                                left: H,
                                top: l.css("top")
                            });
                            j.width(holderWidth);
                            "opportune" == e.skin ? (m.css({
                                left: parseInt((f.width() - m.width()) / 2, 10) + "px",
                                top: e.height + "px"
                            }), (!e.width100Proc || !e.height100Proc) && m.css("margin-top", parseInt(e.thumbsWrapperMarginTop / (e.origWidth / e.width), 10) + "px")) : U(g, e, k, f, E, t, p, s, F, C, v);
                            O.css({
                                left: parseInt((e.width - O.width()) / 2, 10) + "px",
                                top: parseInt((e.height - O.height()) / 2, 10) + "px"
                            });
                            clearTimeout(g.timeoutID);
                            B(1, g, e, k, G, r, b, l, j, f, O, D, E, t, p, s, F)
                        }
                        d("body").css("overflow", I)
                    }, 300))
                });
                var z = d(".bottomNavButtonOFF", f);
                "opportune" == a.skin && (z.click(function() {
                    if (!c.slideIsRunning) {
                        c.isVideoPlaying = !1;
                        var e = d(this).attr("rel");
                        d(z[c.current_img_no]).removeClass("bottomNavButtonON");
                        c.previous_current_img_no = c.current_img_no;
                        c.bottomNavClicked = !0;
                        c.current_img_no = e - 1;
                        clearTimeout(c.timeoutID);
                        B(1, c, a, q, z, w, b, l, j, f, x, A, y, t, p, s, u)
                    }
                }), z.mouseenter(function() {
                    var b = d(this),
                        c = b.attr("rel");
                    if (a.showPreviewThumbs) {
                        r = d('<div class="bottomOverThumb"></div>');
                        b.append(r);
                        var e = d(w[c]).attr("data-bottom-thumb"),
                            f = d(w[P]).attr("data-bottom-thumb"),
                            g = 80,
                            h = -80;
                        P > c && (g = -80, h = 80);
                        r.html("");
                        r.html('<div class="innerBottomOverThumb"><img src="' + f + '"style="margin:0px;" id="oldThumb"><img src="' + e + '" style="margin-top:-80px; margin-left:' + g + 'px;" id="newThumb"></div>');
                        d("#newThumb").stop().animate({
                            marginLeft: "0px"
                        }, 150, function() {
                            r.html('<div class="innerBottomOverThumb"><img src="' + e + '"></div>')
                        });
                        d("#oldThumb").stop().animate({
                            marginLeft: h + "px"
                        }, 150, function() {});
                        P = c
                    }
                    b.addClass("bottomNavButtonON")
                }), z.mouseleave(function() {
                    var b = d(this),
                        e = b.attr("rel");
                    a.showPreviewThumbs && r.remove();
                    c.current_img_no != e && b.removeClass("bottomNavButtonON")
                }));
                y.mousedown(function() {
                    if (!c.slideIsRunning) {
                        arrowClicked = !0;
                        c.isVideoPlaying = !1;
                        var e = d(this).attr("rel");
                        d(y[c.current_img_no]).removeClass("thumbsHolder_ThumbON");
                        c.previous_current_img_no = c.current_img_no;
                        c.bottomNavClicked = !0;
                        c.current_img_no = e - 1;
                        clearTimeout(c.timeoutID);
                        B(1, c, a, q, z, w, b, l, j, f, x, A, y, t, p, s, u)
                    }
                });
                y.mouseup(function() {
                    arrowClicked = !1
                });
                y.mouseenter(function() {
                    var a = d(this);
                    a.attr("rel");
                    a.addClass("thumbsHolder_ThumbON")
                });
                y.mouseleave(function() {
                    var a = d(this),
                        b = a.attr("rel");
                    c.current_img_no != b && a.removeClass("thumbsHolder_ThumbON")
                });
                p.click(function() {
                    c.isCarouselScrolling || (currentCarouselLeft = t.css("left").substr(0, t.css("left").lastIndexOf("px")), 0 > currentCarouselLeft && N(1, t, p, s, a, q, u, c))
                });
                s.click(function() {
                    c.isCarouselScrolling || (currentCarouselLeft = t.css("left").substr(0, t.css("left").lastIndexOf("px")), Math.abs(currentCarouselLeft - c.carouselStep) < (u.width() + c.thumbMarginLeft) * q && N(-1, t, p, s, a, q, u, c))
                });
                "opportune" == a.skin && d(z[c.current_img_no]).addClass("bottomNavButtonON");
                d(y[c.current_img_no]).addClass("thumbsHolder_ThumbON");
                0 < a.autoPlay && 1 < q && (a.showCircleTimer && (c.intervalID = setInterval(function() {
                    T(c, a)
                }, 125)), c.timeoutID = setTimeout(function() {
                    B(1, c, a, q, z, w, b, l, j, f, x, A, y, t, p, s, u)
                }, 1E3 * a.autoPlay));
                "true" == d(w[c.current_img_no]).attr("data-video") && x.css("display", "block")
            })
        };
        d.fn.bannerscollection_zoominout.defaults = {
            skin: "opportune",
            width: 918,
            height: 382,
            width100Proc: !1,
            height100Proc: !1,
            autoPlay: 16,
            fadeSlides: !0,
            loop: !0,
            horizontalPosition: "center",
            verticalPosition: "center",
            initialZoom: 1,
            finalZoom: 0.8,
            duration: 20,
            durationIEfix: 30,
            initialOpacity: 1,
            target: "_blank",
            pauseOnMouseOver: !0,
            showCircleTimer: !0,
            showCircleTimerIE8IE7: !1,
            circleRadius: 10,
            circleLineWidth: 4,
            circleColor: "#FF0000",
            circleAlpha: 100,
            behindCircleColor: "#000000",
            behindCircleAlpha: 50,
            responsive: !0,
            responsiveRelativeToBrowser: !0,
            numberOfThumbsPerScreen: 0,
            thumbsOnMarginTop: 0,
            thumbsWrapperMarginTop: 0,
            showAllControllers: !0,
            showNavArrows: !0,
            showOnInitNavArrows: !0,
            autoHideNavArrows: !0,
            showBottomNav: !0,
            showOnInitBottomNav: !0,
            autoHideBottomNav: !1,
            showPreviewThumbs: !0,
            enableTouchScreen: !1,
            absUrl: "",
            origWidth: 0,
            origHeight: 0,
            origThumbW: 0,
            origThumbH: 0,
            origthumbsHolderWrapperH: 0,
            origthumbsHolder_MarginTop: 0,
            windowOrientationScreenSize0: 0,
            windowOrientationScreenSize90: 0,
            windowOrientationScreenSize_90: 0,
            windowCurOrientation: 0
        }
    })(jQuery);


}
/*
     FILE ARCHIVED ON 03:25:28 Jul 05, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:41:15 Jul 25, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 1515.052 (3)
  PetaboxLoader3.datanode: 308.329 (4)
  captures_list: 2364.492
  exclusion.robots: 0.195
  RedisCDXSource: 818.931
  esindex: 0.022
  PetaboxLoader3.resolve: 1299.013 (4)
  CDXLines.iter: 22.834 (3)
  exclusion.robots.policy: 0.183
  load_resource: 107.476
*/
