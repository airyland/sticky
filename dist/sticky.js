define("arale/sticky/1.2.0/sticky",["$"],function(i,o,t){function e(i){this.options=i,this._stickyId=y++}function n(i){this.options=i,this._stickyId=y++}function r(i,o,t){var s=r.isPositionStickySupported?n:e;return new s({element:i,marginTop:o,callback:t}).render()}function s(){return!_}function l(){if(u)return!1;var i=d[0].body;if(d[0].createElement&&i&&i.appendChild&&i.removeChild){var o,t=d[0].createElement("div"),e=function(i){return window.getComputedStyle?window.getComputedStyle(t).getPropertyValue(i):t.currentStyle.getAttribute(i)};i.appendChild(t);for(var n=0;c.length>n&&(t.style.cssText="position:"+c[n]+"sticky;visibility:hidden;",!(o=-1!==e("position").indexOf("sticky")));n++);return t.parentNode.removeChild(t),o}return!1}function a(i,o){if(null==i)return-1;var t=Array.prototype.indexOf;if(t&&i.indexOf===t)return i.indexOf(o);for(var e=0;i.length>e;e++)if(i[e]===o)return e;return-1}var p=i("$"),d=p(document),c=["-webkit-","-ms-","-o-","-moz-",""],f=(window.navigator.userAgent||"").toLowerCase(),u=-1!==f.indexOf("msie"),_=-1!==f.indexOf("msie 6"),y=0,g=l(),m=s();e.prototype.render=function(){var i=this,o=i.elem=p(i.options.element);if(o.length&&!o.data("bind-fixed")){i._originTop=o.offset().top,i._originLeft=o.offset().left,i.marginTop=p.isNumeric(i.options.marginTop)?Math.min(i.options.marginTop,i._originTop):i._originTop,i._originStyles={position:null,top:null,left:null};for(var t in i._originStyles)i._originStyles.hasOwnProperty(t)&&(i._originStyles[t]=o.css(t));var e=r.isPositionFixedSupported?p.proxy(i._supportFixed,i):p.proxy(i._supportAbsolute,i);return e(),p(window).on("scroll."+i._stickyId,function(){o.is(":visible")&&e()}),o.data("bind-fixed",!0),i}},e.prototype._supportFixed=function(){var i=this,o=i.elem,t=i._originTop,e=i.marginTop,n=t-d.scrollTop();!o.data("_fixed")&&e>=n?(i._addPlaceholder(),o.css({position:"fixed",top:e,left:i._originLeft}),o.data("_fixed",!0),p.isFunction(i.options.callback)&&i.options.callback.call(i,!0)):o.data("_fixed")&&n>e&&i._restore()},e.prototype._supportAbsolute=function(){var i=this,o=i.elem,t=i._originTop,e=i.marginTop,n=t-d.scrollTop();e>=n?(i._addPlaceholder(),o.css({position:"absolute",top:e+d.scrollTop()}),o.data("_fixed",!0),p.isFunction(i.options.callback)&&i.options.callback.call(i,!0)):o.data("_fixed")&&n>e&&i._restore(),o[0].className=o[0].className},e.prototype._restore=function(i){var o=this,t=o.elem;o._removePlaceholder(),t.css(o._originStyles),t.data("_fixed",!1),!i&&p.isFunction(o.options.callback)&&o.options.callback.call(o,!1)},e.prototype._addPlaceholder=function(){var i=this,o=i.elem,t=!1,e=o.css("float"),n=o.css("position"),r=o.css("display");-1!==a(["static","relative"],n)&&(t=!0),"block"!==r&&(t=!1),t&&(i._placeholder=p('<div style="visibility: hidden;margin:0;padding:0;"></div>'),i._placeholder.width(o.outerWidth(!0)).height(o.outerHeight(!0)).css("float",e).insertAfter(o))},e.prototype._removePlaceholder=function(){var i=this;i._placeholder&&i._placeholder.remove()},e.prototype.destory=function(){var i=this;i._restore(1),i.elem.data("bind-fixed",!1),p(window).off("scroll."+i._stickyId)},n.prototype.render=function(){var i=this,o=i.elem=p(i.options.element),t="";if(o.length&&!o.data("bind-fixed")){i._originTop=o.offset().top,i.marginTop=p.isNumeric(i.options.marginTop)?Math.min(i.options.marginTop,i._originTop):i._originTop,i._originStyles={position:null,top:null};for(var e in i._originStyles)i._originStyles.hasOwnProperty(e)&&(i._originStyles[e]=o.css(e));for(var n=0;c.length>n;n++)t+="position:"+c[n]+"sticky;";return o[0].style.cssText+=t+"top: "+i.marginTop+"px;",i._supportSticky(),p(window).on("scroll."+i._stickyId,function(){o.is(":visible")&&i._supportSticky()}),o.data("bind-fixed",!0),i}},n.prototype._supportSticky=function(){var i=this,o=i.elem,t=i._originTop,e=i.marginTop,n=t-d.scrollTop();!o.data("_fixed")&&e>=n?(o.data("_fixed",!0),p.isFunction(i.options.callback)&&i.options.callback.call(i,!0)):o.data("_fixed")&&n>e&&i._restore()},n.prototype._restore=function(i){var o=this,t=o.elem;t.css(o._originStyles),t.data("_fixed",!1),!i&&p.isFunction(o.options.callback)&&o.options.callback.call(o,!1)},n.prototype.destory=function(){var i=this;i._restore(1),i.elem.data("bind-fixed",!1),p(window).off("scroll."+i._stickyId)},r.stick=r,r.fix=function(i){return new e({element:i}).render()},r.isPositionFixedSupported=m,r.isPositionStickySupported=g,t.exports=r});
