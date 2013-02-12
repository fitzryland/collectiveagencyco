jQuery.webshims.register("form-native-extend",function(e,t,n,r,i,s){"use strict";var o=n.Modernizr,u=o.inputtypes;if(!o.formvalidation||t.bugs.bustedValidity)return;var a=t.inputTypes,f={};t.addInputType=function(e,t){a[e]=t},t.addValidityRule=function(e,t){f[e]=t},t.addValidityRule("typeMismatch",function(e,t,n,r){if(t==="")return!1;var i=r.typeMismatch;return"type"in n||(n.type=(e[0].getAttribute("type")||"").toLowerCase()),a[n.type]&&a[n.type].mismatch&&(i=a[n.type].mismatch(t,e)),i});var l=s.overrideMessages,c=!u.number||!u.time||!u.range||l,h=["customError","typeMismatch","rangeUnderflow","rangeOverflow","stepMismatch","tooLong","patternMismatch","valueMissing","valid"],p=l?["value","checked"]:["value"],d=[],v=function(t,n){if(!t)return;var i=(t.getAttribute&&t.getAttribute("type")||t.type||"").toLowerCase();if(!l&&!a[i])return;l&&!n&&i=="radio"&&t.name?e(r.getElementsByName(t.name)).each(function(){e.prop(this,"validity")}):e.prop(t,"validity")},m={};["input","textarea","select"].forEach(function(n){var r=t.defineNodeNameProperty(n,"setCustomValidity",{prop:{value:function(i){i+="";var s=n=="input"?e(this).getNativeElement()[0]:this;r.prop._supvalue.call(s,i),t.bugs.validationMessage&&t.data(s,"customvalidationMessage",i),c&&(t.data(s,"hasCustomError",!!i),v(s))}}});m[n]=r.prop._supvalue});if(c||l)p.push("min"),p.push("max"),p.push("step"),d.push("input");l&&(p.push("required"),p.push("pattern"),d.push("select"),d.push("textarea"));if(c){var g;d.forEach(function(n){var r=t.defineNodeNameProperty(n,"validity",{prop:{get:function(){if(g)return;var i=n=="input"?e(this).getNativeElement()[0]:this,s=r.prop._supget.call(i);if(!s)return s;var o={};h.forEach(function(e){o[e]=s[e]});if(!e.prop(i,"willValidate"))return o;g=!0;var u=e(i),c={type:(i.getAttribute&&i.getAttribute("type")||"").toLowerCase(),nodeName:(i.nodeName||"").toLowerCase()},p=u.val(),d=!!t.data(i,"hasCustomError"),v;g=!1,o.customError=d;if(o.valid&&o.customError)o.valid=!1;else if(!o.valid){var y=!0;e.each(o,function(e,t){if(t)return y=!1,!1}),y&&(o.valid=!0)}return e.each(f,function(e,r){o[e]=r(u,p,c,o),o[e]&&(o.valid||!v)&&(l||a[c.type]&&a[c.type].mismatch)&&(m[n].call(i,t.createValidationMessage(i,e)),o.valid=!1,v=!0)}),o.valid?(m[n].call(i,""),t.data(i,"hasCustomError",!1)):l&&!v&&!d&&e.each(o,function(e,r){if(e!=="valid"&&r)return m[n].call(i,t.createValidationMessage(i,e)),!1}),o},writeable:!1}})}),p.forEach(function(e){t.onNodeNamesPropertyModify(d,e,function(e){v(this)})});if(r.addEventListener){var y,b=function(t){if(!("form"in t.target))return;var n=t.target.form;clearTimeout(y),v(t.target),n&&l&&e("input",n).each(function(){this.type=="password"&&v(this)})};r.addEventListener("change",b,!0),l&&(r.addEventListener("blur",b,!0),r.addEventListener("keydown",function(e){if(e.keyCode!=13)return;b(e)},!0)),r.addEventListener("input",function(e){clearTimeout(y),y=setTimeout(function(){v(e.target)},290)},!0)}var w=d.join(",");t.addReady(function(t,n){e(w,t).add(n.filter(w)).each(function(){e.prop(this,"validity")})}),l&&t.ready("DOM form-message",function(){t.activeLang({register:"form-core",callback:function(){e("input, select, textarea").getNativeElement().each(function(){if(t.data(this,"hasCustomError"))return;var n=this,r=e.prop(n,"validity")||{valid:!0},i;if(r.valid)return;i=(n.nodeName||"").toLowerCase(),e.each(r,function(e,r){if(e!=="valid"&&r)return m[i].call(n,t.createValidationMessage(n,e)),!1})})}})})}t.defineNodeNameProperty("input","type",{prop:{get:function(){var e=this,n=(e.getAttribute("type")||"").toLowerCase();return t.inputTypes[n]?n:e.type}}})}),jQuery.webshims.register("form-number-date-api",function(e,t,n,r,i){"use strict";t.getStep||(t.getStep=function(t,n){var r=e.attr(t,"step");return r==="any"?r:(n=n||l(t),!u[n]||!u[n].step?r:(r=y.number.asNumber(r),(!isNaN(r)&&r>0?r:u[n].step)*u[n].stepScaleFactor))}),t.addMinMaxNumberToCache||(t.addMinMaxNumberToCache=function(e,t,n){e+"AsNumber"in n||(n[e+"AsNumber"]=u[n.type].asNumber(t.attr(e)),isNaN(n[e+"AsNumber"])&&e+"Default"in u[n.type]&&(n[e+"AsNumber"]=u[n.type][e+"Default"]))});var s=parseInt("NaN",10),o=r,u=t.inputTypes,a=function(e){return typeof e=="number"||e&&e==e*1},f=function(t){return e('<input type="'+t+'" />').prop("type")===t},l=function(e){return(e.getAttribute("type")||"").toLowerCase()},c=function(e){return a(e)||e&&e=="0"+e*1},h=t.addMinMaxNumberToCache,p=function(e,t){e=""+e,t-=e.length;for(var n=0;n<t;n++)e="0"+e;return e},d=1e-7,v=t.bugs.bustedValidity;t.addValidityRule("stepMismatch",function(e,n,r,i){if(n==="")return!1;"type"in r||(r.type=l(e[0]));if(r.type=="date")return!1;var s=(i||{}).stepMismatch,o;if(u[r.type]&&u[r.type].step){"step"in r||(r.step=t.getStep(e[0],r.type));if(r.step=="any")return!1;"valueAsNumber"in r||(r.valueAsNumber=u[r.type].asNumber(n));if(isNaN(r.valueAsNumber))return!1;h("min",e,r),o=r.minAsNumber,isNaN(o)&&(o=u[r.type].stepBase||0),s=Math.abs((r.valueAsNumber-o)%r.step),s=!(s<=d||Math.abs(s-r.step)<=d)}return s}),[{name:"rangeOverflow",attr:"max",factor:1},{name:"rangeUnderflow",attr:"min",factor:-1}].forEach(function(e,n){t.addValidityRule(e.name,function(t,n,r,i){var s=(i||{})[e.name]||!1;if(n==="")return s;"type"in r||(r.type=l(t[0]));if(u[r.type]&&u[r.type].asNumber){"valueAsNumber"in r||(r.valueAsNumber=u[r.type].asNumber(n));if(isNaN(r.valueAsNumber))return!1;h(e.attr,t,r);if(isNaN(r[e.attr+"AsNumber"]))return s;s=r[e.attr+"AsNumber"]*e.factor<r.valueAsNumber*e.factor-d}return s})}),t.reflectProperties(["input"],["max","min","step"]);var m=t.defineNodeNameProperty("input","valueAsNumber",{prop:{get:function(){var t=this,n=l(t),r=u[n]&&u[n].asNumber?u[n].asNumber(e.prop(t,"value")):m.prop._supget&&m.prop._supget.apply(t,arguments);return r==null&&(r=s),r},set:function(n){var r=this,i=l(r);if(u[i]&&u[i].numberToString){if(isNaN(n)){e.prop(r,"value","");return}var s=u[i].numberToString(n);s!==!1?e.prop(r,"value",s):t.warn("INVALID_STATE_ERR: DOM Exception 11")}else m.prop._supset&&m.prop._supset.apply(r,arguments)}}}),g=t.defineNodeNameProperty("input","valueAsDate",{prop:{get:function(){var t=this,n=l(t);return u[n]&&u[n].asDate&&!u[n].noAsDate?u[n].asDate(e.prop(t,"value")):g.prop._supget&&g.prop._supget.call(t)||null},set:function(n){var r=this,i=l(r);if(!(u[i]&&u[i].dateToString&&!u[i].noAsDate))return g.prop._supset&&g.prop._supset.apply(r,arguments)||null;if(n===null)return e.prop(r,"value",""),"";var s=u[i].dateToString(n);if(s!==!1)return e.prop(r,"value",s),s;t.warn("INVALID_STATE_ERR: DOM Exception 11")}}}),y={number:{mismatch:function(e){return!a(e)},step:1,stepScaleFactor:1,asNumber:function(e){return a(e)?e*1:s},numberToString:function(e){return a(e)?e:!1}},range:{minDefault:0,maxDefault:100},date:{mismatch:function(t){if(!t||!t.split||!/\d$/.test(t))return!0;var n=t.split(/\u002D/);if(n.length!==3)return!0;var r=!1;e.each(n,function(e,t){if(!c(t))return r=!0,!1});if(r)return r;if(n[0].length!==4||n[1].length!=2||n[1]>12||n[2].length!=2||n[2]>33)r=!0;return t!==this.dateToString(this.asDate(t,!0))},step:1,stepScaleFactor:864e5,asDate:function(e,t){return!t&&this.mismatch(e)?null:new Date(this.asNumber(e,!0))},asNumber:function(e,t){var n=s;if(t||!this.mismatch(e))e=e.split(/\u002D/),n=Date.UTC(e[0],e[1]-1,e[2]);return n},numberToString:function(e){return a(e)?this.dateToString(new Date(e*1)):!1},dateToString:function(e){return e&&e.getFullYear?e.getUTCFullYear()+"-"+p(e.getUTCMonth()+1,2)+"-"+p(e.getUTCDate(),2):!1}},time:{mismatch:function(t,n){if(!t||!t.split||!/\d$/.test(t))return!0;t=t.split(/\u003A/);if(t.length<2||t.length>3)return!0;var r=!1,i;return t[2]&&(t[2]=t[2].split(/\u002E/),i=parseInt(t[2][1],10),t[2]=t[2][0]),e.each(t,function(e,t){if(!c(t)||t.length!==2)return r=!0,!1}),r?!0:t[0]>23||t[0]<0||t[1]>59||t[1]<0?!0:t[2]&&(t[2]>59||t[2]<0)?!0:i&&isNaN(i)?!0:(i&&(i<100?i*=100:i<10&&(i*=10)),n===!0?[t,i]:!1)},step:60,stepBase:0,stepScaleFactor:1e3,asDate:function(e){return e=new Date(this.asNumber(e)),isNaN(e)?null:e},asNumber:function(e){var t=s;return e=this.mismatch(e,!0),e!==!0&&(t=Date.UTC("1970",0,1,e[0][0],e[0][1],e[0][2]||0),e[1]&&(t+=e[1])),t},dateToString:function(e){if(e&&e.getUTCHours){var t=p(e.getUTCHours(),2)+":"+p(e.getUTCMinutes(),2),n=e.getSeconds();return n!="0"&&(t+=":"+p(n,2)),n=e.getUTCMilliseconds(),n!="0"&&(t+="."+p(n,3)),t}return!1}}};if(v||!f("range")||!f("time"))y.range=e.extend({},y.number,y.range),y.time=e.extend({},y.date,y.time);(v||!f("number"))&&t.addInputType("number",y.number),(v||!f("range"))&&t.addInputType("range",y.range),(v||!f("date"))&&t.addInputType("date",y.date),(v||!f("time"))&&t.addInputType("time",y.time)}),jQuery.webshims.register("form-number-date-ui",function(e,t,n,r,i,s){"use strict";var o=t.triggerInlineForm,u=Modernizr.inputtypes,a=function(){var n={"padding-box":"innerWidth","border-box":"outerWidth","content-box":"width"},r=Modernizr.prefixed&&Modernizr.prefixed("boxSizing");e.browser.msie&&t.browserVersion<8&&(r=!1);var i=function(e){var t="width";return r&&(t=n[e.css(r)]||t),{w:e[t](),add:t=="width"}};return function(e,t){var n=i(e);if(!n.w)return;var s={mL:parseInt(t.css("marginLeft"),10)||0,w:t.outerWidth()};n.mR=parseInt(e.css("marginRight"),10)||0,n.mR&&e.css("marginRight",0),s.mL<=s.w*-1?(t.css("marginRight",Math.floor(Math.abs(s.w+s.mL-.1)+n.mR)),e.css("paddingRight",(parseInt(e.css("paddingRight"),10)||0)+Math.abs(s.mL)),n.add&&e.css("width",Math.floor(n.w+s.mL-(r?.1:.6)))):(t.css("marginRight",n.mR),e.css("width",Math.floor(n.w-s.mL-s.w-(r?.2:.6))))}}(),f={},l=0,c=e([]),h,p=function(n,r){e("input",n).add(r.filter("input")).each(function(){var n=e.prop(this,"type");p[n]&&!t.data(this,"shadowData")&&p[n](e(this))})},d=function(t,n){if(!s.lazyDate){t.datepicker("setDate",n);return}var r=e.data(t[0],"setDateLazyTimer");r&&clearTimeout(r),e.data(t[0],"setDateLazyTimer",setTimeout(function(){t.datepicker("setDate",n),e.removeData(t[0],"setDateLazyTimer"),t=null},0))},v={tabindex:1,tabIndex:1,title:1,"aria-required":1,"aria-invalid":1};s.copyAttrs||(s.copyAttrs={}),t.extendUNDEFProp(s.copyAttrs,v);var m=function(e){return s.calculateWidth?{css:{marginRight:e.css("marginRight"),marginLeft:e.css("marginLeft")},outerWidth:e.outerWidth()}:{}},g=v;p.common=function(n,r,i){Modernizr.formvalidation&&n.on("firstinvalid",function(e){if(!t.fromSubmit&&h)return;n.off("invalid.replacedwidgetbubble").on("invalid.replacedwidgetbubble",function(r){!e.isInvalidUIPrevented()&&!r.isDefaultPrevented()&&(t.validityAlert.showFor(e.target),e.preventDefault(),r.preventDefault()),n.off("invalid.replacedwidgetbubble")})});var o,u,a=e("input, span.ui-slider-handle",r),f=n[0].attributes;for(o in s.copyAttrs)(u=f[o])&&u.specified&&(g[o]&&a[0]?a.attr(o,u.nodeValue):r[0].setAttribute(o,u.nodeValue));var l=n.attr("id"),p=l?e('label[for="'+l+'"]',n[0].form):c;r.addClass(n[0].className),t.addShadowDom(n,r,{data:i||{},shadowFocusElement:e("input.input-datetime-local-date, span.ui-slider-handle",r)[0],shadowChilds:a}),n.after(r),n[0].form&&e(n[0].form).on("reset",function(e){e.originalEvent&&!e.isDefaultPrevented()&&setTimeout(function(){n.prop("value",n.prop("value"))},0)}),p[0]&&(r.getShadowFocusElement().attr("aria-labelledby",t.getID(p)),p.on("click",function(){return n.getShadowFocusElement().focus(),!1}))},Modernizr.formvalidation&&["input","form"].forEach(function(e){var n=t.defineNodeNameProperty(e,"checkValidity",{prop:{value:function(){h=!0;var e=n.prop._supvalue.apply(this,arguments);return h=!1,e}}})});if(!u.date||s.replaceUI){var y={trigger:[.595,.395],normal:[.565,.425]},b=!e.browser.msie||t.browserVersion>6?0:.45,w=function(n,r,i,o){var u,a,l=function(){c.dpDiv.unbind("mousedown.webshimsmousedownhandler"),u=!1,a=!1},c=r.on({focusin:function(){l(),c.dpDiv.unbind("mousedown.webshimsmousedownhandler").bind("mousedown.webshimsmousedownhandler",function(){u=!0})},"focusout blur":function(e){u&&(a=!0,e.stopImmediatePropagation())}}).datepicker(e.extend({onClose:function(){a&&r.not(":focus")?(l(),r.trigger("focusout"),r.triggerHandler("blur")):l()}},f,s.datepicker,n.data("datepicker"))).on("change",i).data("datepicker");return c.dpDiv.addClass("input-date-datepicker-control"),o&&t.triggerDomUpdate(o[0]),["disabled","min","max","value","step","data-placeholder"].forEach(function(e){var t="attr",r=n[t](e);r&&n[t](e,r)}),c};p.date=function(n){if(!e.fn.datepicker)return;var r=e('<input class="input-date" type="text" />'),i=function(t){p.date.blockAttr=!0;var i;if(s.lazyDate){var u=e.data(r[0],"setDateLazyTimer");u&&(clearTimeout(u),e.removeData(r[0],"setDateLazyTimer"))}try{i=e.datepicker.parseDate(r.datepicker("option","dateFormat"),r.prop("value")),i=i?e.datepicker.formatDate("yy-mm-dd",i):r.prop("value")}catch(t){i=r.prop("value")}n.prop("value",i),p.date.blockAttr=!1,t.stopImmediatePropagation(),o(n[0],"input"),o(n[0],"change")},u;this.common(n,r,p.date.attrs),u=w(n,r,i),e(n).on("updateshadowdom",function(){if(u.trigger[0]){n.css({display:""});if(n[0].offsetWidth||n[0].offsetHeight){var e=m(n);e.css&&(r.css(e.css),e.outerWidth&&r.outerWidth(e.outerWidth),a(r,u.trigger))}}n.css({display:"none"})}).triggerHandler("updateshadowdom"),u.trigger[0]&&setTimeout(function(){t.ready("WINDOWLOAD",function(){e(n).triggerHandler("updateshadowdom")})},9)},p.date.attrs={disabled:function(t,n,r){e.prop(n,"disabled",!!r)},min:function(t,n,r){try{r=e.datepicker.parseDate("yy-mm-dd",r)}catch(i){r=!1}r&&e(n).datepicker("option","minDate",r)},max:function(t,n,r){try{r=e.datepicker.parseDate("yy-mm-dd",r)}catch(i){r=!1}r&&e(n).datepicker("option","maxDate",r)},"data-placeholder":function(t,n,r){var i=(r||"").split("-"),s;i.length==3&&(r=e(n).datepicker("option","dateFormat").replace("yy",i[0]).replace("mm",i[1]).replace("dd",i[2])),e.prop(n,"placeholder",r)},value:function(t,n,r){if(!p.date.blockAttr){try{var i=e.datepicker.parseDate("yy-mm-dd",r)}catch(s){var i=!1}i?d(e(n),i):e.prop(n,"value",r)}}}}if(!u.range||s.replaceUI)p.range=function(t){if(!e.fn.slider)return;var n=e('<span class="input-range"><span class="ui-slider-handle" role="slider" tabindex="0" /></span>'),r=function(e,n){e.originalEvent&&(p.range.blockAttr=!0,t.prop("value",n.value),p.range.blockAttr=!1,o(t[0],"input"))};this.common(t,n,p.range.attrs),t.on("updateshadowdom",function(){t.css({display:""});if(t[0].offsetWidth||t[0].offsetHeight){var e=m(t);e.css&&(n.css(e.css),e.outerWidth&&n.outerWidth(e.outerWidth))}t.css({display:"none"})}).triggerHandler("updateshadowdom"),n.slider(e.extend(!0,{},s.slider,t.data("slider"))).on({slide:r,slidechange:function(e){e.originalEvent&&o(t[0],"change")}}),["disabled","min","max","step","value"].forEach(function(n){var r=t.prop(n),i;n=="value"&&!r&&(i=t.getShadowElement(),i&&(r=(e(i).slider("option","max")-e(i).slider("option","min"))/2)),r!=null&&t.prop(n,r)})},p.range.attrs={disabled:function(t,n,r){r=!!r,e(n).slider("option","disabled",r),e("span",n).attr({"aria-disabled":r+"",tabindex:r?"-1":"0"})},min:function(t,n,r){r=r?r*1||0:0,e(n).slider("option","min",r),e("span",n).attr({"aria-valuemin":r})},max:function(t,n,r){r=r||r===0?r*1||100:100,e(n).slider("option","max",r),e("span",n).attr({"aria-valuemax":r})},value:function(t,n,r){r=e(t).prop("valueAsNumber"),isNaN(r)||(p.range.blockAttr||e(n).slider("option","value",r),e("span",n).attr({"aria-valuenow":r,"aria-valuetext":r}))},step:function(t,n,r){r=r&&e.trim(r)?r*1||1:1,e(n).slider("option","step",r)}};if(s.replaceUI||!Modernizr.inputtypes.date||!Modernizr.inputtypes.range){var E=function(n){t.data(this,"hasShadow")&&e.prop(this,"value",e.prop(this,"value"))};t.onNodeNamesPropertyModify("input","valueAsNumber",E),t.onNodeNamesPropertyModify("input","valueAsDate",E)}e.each(["disabled","min","max","value","step","data-placeholder"],function(e,n){t.onNodeNamesPropertyModify("input",n,function(e){var r=t.data(this,"shadowData");r&&r.data&&r.data[n]&&r.nativeElement===this&&r.data[n](this,r.shadowElement,e)})}),s.availabeLangs||(s.availabeLangs="af ar ar-DZ az bg bs ca cs da de el en-AU en-GB en-NZ eo es et eu fa fi fo fr fr-CH gl he hr hu hy id is it ja ko kz lt lv ml ms nl no pl pt-BR rm ro ru sk sl sq sr sr-SR sv ta th tr uk vi zh-CN zh-HK zh-TW".split(" "));var S=function(){if(!e.datepicker)return;t.activeLang({langObj:e.datepicker.regional,module:"form-number-date-ui",callback:function(t){var n=e.extend({},f,t,s.datepicker);n.dateFormat&&s.datepicker.dateFormat!=n.dateFormat&&e("input.hasDatepicker").filter(".input-date, .input-datetime-local-date").datepicker("option","dateFormat",n.dateFormat).getNativeElement().filter("[data-placeholder]").attr("data-placeholder",function(e,t){return t}),e.datepicker.setDefaults(n)}}),e(r).unbind("jquery-uiReady.langchange input-widgetsReady.langchange")};e(r).on("jquery-uiReady.langchange input-widgetsReady.langchange",S),S(),function(){var n=function(){var t={};return function(n){return n in t?t[n]:t[n]=e('<input type="'+n+'" />')[0].type===n}}();if(n("number")&&n("time"))return;var i=r,s=t.cfg["forms-ext"],u=t.inputTypes,f={number:"0123456789.",time:"0123456789:."},l=function(n,r,i){i=i||{},"type"in i||(i.type=e.prop(n,"type")),"step"in i||(i.step=t.getStep(n,i.type)),"valueAsNumber"in i||(i.valueAsNumber=u[i.type].asNumber(e.prop(n,"value")));var s=i.step=="any"?u[i.type].step*u[i.type].stepScaleFactor:i.step,o;return t.addMinMaxNumberToCache("min",e(n),i),t.addMinMaxNumberToCache("max",e(n),i),isNaN(i.valueAsNumber)&&(i.valueAsNumber=u[i.type].stepBase||0),i.step!=="any"&&(o=Math.round((i.valueAsNumber-(i.minAsnumber||0))%i.step*1e7)/1e7,o&&Math.abs(o)!=i.step&&(i.valueAsNumber=i.valueAsNumber-o)),o=i.valueAsNumber+s*r,!isNaN(i.minAsNumber)&&o<i.minAsNumber?o=i.valueAsNumber*r<i.minAsNumber?i.minAsNumber:isNaN(i.maxAsNumber)?i.valueAsNumber:i.maxAsNumber:!isNaN(i.maxAsNumber)&&o>i.maxAsNumber?o=i.valueAsNumber*r>i.maxAsNumber?i.maxAsNumber:isNaN(i.minAsNumber)?i.valueAsNumber:i.minAsNumber:o=Math.round(o*1e7)/1e7,o};t.modules["form-number-date-ui"].getNextStep=l;if(s.stepArrows){var c={set:function(e){var n=t.data(this,"step-controls");n&&n[this.disabled||this.readonly?"addClass":"removeClass"]("disabled-step-control")}};t.onNodeNamesPropertyModify("input","disabled",c),t.onNodeNamesPropertyModify("input","readonly",e.extend({},c))}var h={38:1,40:-1},p=function(t,n){function f(r){if(e.prop(t,"disabled")||t.readOnly||!r)return;s=u[n].numberToString(l(t,r,{type:n})),e.prop(t,"value",s),o(t,"input")}function c(){r=!0,setTimeout(function(){r=!1},i+9),setTimeout(function(){if(!e(t).is(":focus"))try{t.focus()}catch(n){}},1)}function h(){var n=e.prop(t,"value");n==s&&n!=a&&typeof n=="string"&&o(t,"change"),a=n}function p(){a=e(t).on({"change.stepcontrol focus.stepcontrol":function(n){if(!r||n.type!="focus")a=e.prop(t,"value")},"blur.stepcontrol":function(){r||setTimeout(function(){!r&&!e(t).is(":focus")&&h(),s=!1},i)}}).prop("value")}var r=!1,i=9,s,a;return p(),{triggerChange:h,step:f,setFocus:c}};t.addReady(function(r,i){s.stepArrows&&e("input",r).add(i.filter("input")).each(function(){var r=e.prop(this,"type");if(!u[r]||!u[r].asNumber||!s.stepArrows||s.stepArrows!==!0&&!s.stepArrows[r]||n(r)||e(i).hasClass("has-step-controls"))return;var i=this,o=p(i,r),l=e('<span class="step-controls" unselectable="on"><span class="step-up" /><span class="step-down" /></span>').insertAfter(i).on({"selectstart dragstart":function(){return!1},"mousedown mousepress":function(t){return e(t.target).hasClass("step-controls")||o.step(e(t.target).hasClass("step-up")?1:-1),o.setFocus(),!1},"mousepressstart mousepressend":function(t){t.type=="mousepressend"&&o.triggerChange(),e(t.target)[t.type=="mousepressstart"?"addClass":"removeClass"]("mousepress-ui")}}),c=function(e,t){if(t)return o.step(t),!1},d=e(i).addClass("has-step-controls").attr({readonly:i.readOnly,disabled:i.disabled,autocomplete:"off",role:"spinbutton"}).on("keyup",function(e){var t=h[e.keyCode];t&&o.triggerChange(t)}).on(e.browser.msie?"keydown":"keypress",function(e){var t=h[e.keyCode];if(t)return o.step(t),!1});f[r]&&d.on("keypress",function(){var e=f[r];return function(t){var n=String.fromCharCode(t.charCode==null?t.keyCode:t.charCode);return t.ctrlKey||t.metaKey||n<" "||e.indexOf(n)>-1}}()),d.on({focus:function(){d.add(l).off(".mwhellwebshims").on("mousewheel.mwhellwebshims",c)},blur:function(){e(i).add(l).off(".mwhellwebshims")}}),t.data(i,"step-controls",l);if(s.calculateWidth){var v;d.on("updateshadowdom",function(){!v&&(i.offsetWidth||i.offsetHeight)&&(v=!0,a(d,l),l.css("marginTop",(d.outerHeight()-l.outerHeight())/2))}).triggerHandler("updateshadowdom")}})})}(),t.addReady(function(n,i){e(r).on("jquery-uiReady.initinputui input-widgetsReady.initinputui",function(s){if(e.datepicker||e.fn.slider)e.datepicker&&!f.dateFormat&&(f.dateFormat=e.datepicker._defaults.dateFormat),p(n,i);e.datepicker&&e.fn.slider?e(r).unbind(".initinputui"):t.modules["input-widgets"].src||t.warn('jQuery UI Widget factory is already included, but not datepicker or slider. configure src of $.webshims.modules["input-widgets"].src')})})}),jQuery.webshims.register("form-datalist",function(e,t,n,r,i){"use strict";var s=r;t.propTypes.element=function(n){t.createPropDefault(n,"attr");if(n.prop)return;n.prop={get:function(){var t=n.attr.get.call(this);return t&&(t=r.getElementById(t),t&&n.propNodeName&&!e.nodeName(t,n.propNodeName)&&(t=null)),t||null},writeable:!1}},function(){var s=e.webshims.cfg.forms,o=Modernizr.input.list;if(o&&!s.customDatalist)return;var u=function(){o||t.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var n=this,r=e("select",n),i;return r[0]?i=r[0].options:(i=e("option",n).get(),i.length&&t.warn("you should wrap your option-elements for a datalist in a select element to support IE and other old browsers.")),i}}});var n={autocomplete:{attr:{get:function(){var t=this,n=e.data(t,"datalistWidget");return n?n._autocomplete:"autocomplete"in t?t.autocomplete:t.getAttribute("autocomplete")},set:function(t){var n=this,r=e.data(n,"datalistWidget");r?(r._autocomplete=t,t=="off"&&r.hideList()):"autocomplete"in n?n.autocomplete=t:n.setAttribute("autocomplete",t)}}}};o?((e("<datalist><select><option></option></select></datalist>").prop("options")||[]).length||t.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var t=this.options||[];if(!t.length){var n=this,r=e("select",n);r[0]&&r[0].options&&r[0].options.length&&(t=r[0].options)}return t}}}),n.list={attr:{get:function(){var n=t.contentAttr(this,"list");return n!=null?this.removeAttribute("list"):n=e.data(this,"datalistListAttr"),n==null?i:n},set:function(n){var r=this;e.data(r,"datalistListAttr",n),t.objectCreate(v,i,{input:r,id:n,datalist:e.prop(r,"list")})}},initAttr:!0,reflect:!0,propType:"element",propNodeName:"datalist"}):n.list={attr:{get:function(){var e=t.contentAttr(this,"list");return e==null?i:e},set:function(n){var r=this;t.contentAttr(r,"list",n),t.objectCreate(v,i,{input:r,id:n,datalist:e.prop(r,"list")})}},initAttr:!0,reflect:!0,propType:"element",propNodeName:"datalist"},t.defineNodeNameProperties("input",n),e.event.customEvent&&(e.event.customEvent.updateDatalist=!0,e.event.customEvent.updateInput=!0,e.event.customEvent.datalistselect=!0),t.addReady(function(e,t){t.filter("datalist > select, datalist, datalist > option, datalist > select > option").closest("datalist").triggerHandler("updateDatalist")})},a=0,f={submit:1,button:1,reset:1,hidden:1,range:1,date:1},l=e.browser.msie&&parseInt(e.browser.version,10)<7,c={},h=function(e){if(!e)return[];if(c[e])return c[e];var t;try{t=JSON.parse(localStorage.getItem("storedDatalistOptions"+e))}catch(n){}return c[e]=t||[],t||[]},p=function(e,t){if(!e)return;t=t||[];try{localStorage.setItem("storedDatalistOptions"+e,JSON.stringify(t))}catch(n){}},d=function(t){return t.textContent||t.innerText||e.text([t])||""},v={_create:function(t){if(f[e.prop(t.input,"type")])return;var r=t.datalist,i=e.data(t.input,"datalistWidget");if(r&&i&&i.datalist!==r){i.datalist=r,i.id=t.id,i.shadowList.prop("className","datalist-polyfill "+(i.datalist.className||"")+" "+i.datalist.id+"-shadowdom"),s.positionDatalist?i.shadowList.insertAfter(t.input):i.shadowList.appendTo("body"),e(i.datalist).off("updateDatalist.datalistWidget").on("updateDatalist.datalistWidget",e.proxy(i,"_resetListCached")),i._resetListCached();return}if(!r){i&&i.destroy();return}if(i&&i.datalist===r)return;a++;var o=this;this.hideList=e.proxy(o,"hideList"),this.timedHide=function(){clearTimeout(o.hideTimer),o.hideTimer=setTimeout(o.hideList,9)},this.datalist=r,this.id=t.id,this.hasViewableData=!0,this._autocomplete=e.attr(t.input,"autocomplete"),e.data(t.input,"datalistWidget",this),this.shadowList=e('<div class="datalist-polyfill '+(this.datalist.className||"")+" "+this.datalist.id+"-shadowdom"+'" />'),s.positionDatalist||e(t.input).hasClass("position-datalist")?this.shadowList.insertAfter(t.input):this.shadowList.appendTo("body"),this.index=-1,this.input=t.input,this.arrayOptions=[],this.shadowList.delegate("li","mouseenter.datalistWidget mousedown.datalistWidget click.datalistWidget",function(n){var r=e("li:not(.hidden-item)",o.shadowList),i=n.type=="mousedown"||n.type=="click";return o.markItem(r.index(n.currentTarget),i,r),n.type=="click"&&(o.hideList(),s.customDatalist&&e(t.input).trigger("datalistselect")),n.type!="mousedown"}).on("focusout",this.timedHide),t.input.setAttribute("autocomplete","off"),e(t.input).attr({"aria-haspopup":"true"}).on({"input.datalistWidget":function(){o.triggeredByDatalist||(o.changedValue=!1,o.showHideOptions())},"keydown.datalistWidget":function(n){var r=n.keyCode,i,u;if(r==40&&!o.showList())return o.markItem(o.index+1,!0),!1;if(!o.isListVisible)return;if(r==38)return o.markItem(o.index-1,!0),!1;if(!n.shiftKey&&(r==33||r==36))return o.markItem(0,!0),!1;if(!n.shiftKey&&(r==34||r==35))return u=e("li:not(.hidden-item)",o.shadowList),o.markItem(u.length-1,!0,u),!1;if(r==13||r==27)return r==13&&(i=e("li.active-item:not(.hidden-item)",o.shadowList),o.changeValue(e("li.active-item:not(.hidden-item)",o.shadowList))),o.hideList(),s.customDatalist&&i&&i[0]&&e(t.input).trigger("datalistselect"),!1},"focus.datalistWidget":function(){e(this).hasClass("list-focus")&&o.showList()},"mousedown.datalistWidget":function(){e(this).is(":focus")&&o.showList()},"blur.datalistWidget":this.timedHide}),e(this.datalist).off("updateDatalist.datalistWidget").on("updateDatalist.datalistWidget",e.proxy(this,"_resetListCached")),this._resetListCached(),t.input.form&&(t.input.name||t.input.id)&&e(t.input.form).on("submit.datalistWidget"+t.input.id,function(){if(!e(t.input).hasClass("no-datalist-cache")&&o._autocomplete!="off"){var n=e.prop(t.input,"value"),r=(t.input.name||t.input.id)+e.prop(t.input,"type");o.storedOptions||(o.storedOptions=h(r)),n&&o.storedOptions.indexOf(n)==-1&&(o.storedOptions.push(n),p(r,o.storedOptions))}}),e(n).on("unload.datalist"+this.id+" beforeunload.datalist"+this.id,function(){o.destroy()})},destroy:function(){var t=e.attr(this.input,"autocomplete");e(this.input).off(".datalistWidget").removeData("datalistWidget"),this.shadowList.remove(),e(r).off(".datalist"+this.id),e(n).off(".datalist"+this.id),this.input.form&&this.input.id&&e(this.input.form).off("submit.datalistWidget"+this.input.id),this.input.removeAttribute("aria-haspopup"),t===i?this.input.removeAttribute("autocomplete"):e(this.input).attr("autocomplete",t)},_resetListCached:function(e){var i=this,s;this.needsUpdate=!0,this.lastUpdatedValue=!1,this.lastUnfoundValue="",this.updateTimer||(n.QUnit||(s=e&&r.activeElement==i.input)?i.updateListOptions(s):t.ready("WINDOWLOAD",function(){i.updateTimer=setTimeout(function(){i.updateListOptions(),i=null,a=1},200+100*a)}))},maskHTML:function(e){return e.replace(/</g,"&lt;").replace(/>/g,"&gt;")},updateListOptions:function(t){this.needsUpdate=!1,clearTimeout(this.updateTimer),this.updateTimer=!1,this.shadowList.css({fontSize:e.css(this.input,"fontSize"),fontFamily:e.css(this.input,"fontFamily")}),this.searchStart=s.customDatalist&&e(this.input).hasClass("search-start");var n=[],r=[],i=[],o,u,a,f,c,p;for(a=e.prop(this.datalist,"options"),f=0,c=a.length;f<c;f++){o=a[f];if(o.disabled)return;u={value:e(o).val()||"",text:e.trim(e.attr(o,"label")||d(o)),className:o.className||"",style:e.attr(o,"style")||""},u.text?u.text!=u.value&&(u.className+=" different-label-value"):u.text=u.value,r[f]=u.value,i[f]=u}this.storedOptions||(this.storedOptions=e(this.input).hasClass("no-datalist-cache")||this._autocomplete=="off"?[]:h((this.input.name||this.input.id)+e.prop(this.input,"type"))),this.storedOptions.forEach(function(e,t){r.indexOf(e)==-1&&i.push({value:e,text:e,className:"stored-suggest",style:""})});for(f=0,c=i.length;f<c;f++)p=i[f],n[f]='<li class="'+p.className+'" style="'+p.style+'" tabindex="-1" role="listitem"><span class="option-label">'+this.maskHTML(p.text)+'</span> <span class="option-value">'+this.maskHTML(p.value)+"</span></li>";this.arrayOptions=i,this.shadowList.html('<div class="datalist-outer-box"><div class="datalist-box"><ul role="list">'+n.join("\n")+"</ul></div></div>"),e.fn.bgIframe&&l&&this.shadowList.bgIframe(),(t||this.isListVisible)&&this.showHideOptions()},showHideOptions:function(t){var n=e.prop(this.input,"value").toLowerCase();if(n===this.lastUpdatedValue||this.lastUnfoundValue&&n.indexOf(this.lastUnfoundValue)===0)return;this.lastUpdatedValue=n;var r=!1,i=this.searchStart,s=e("li",this.shadowList);n?this.arrayOptions.forEach(function(t,o){var u;"lowerText"in t||(t.text!=t.value?t.lowerText=t.value.toLowerCase()+t.text.toLowerCase():t.lowerText=t.text.toLowerCase()),u=t.lowerText.indexOf(n),u=i?!u:u!==-1,u?(e(s[o]).removeClass("hidden-item"),r=!0):e(s[o]).addClass("hidden-item")}):s.length&&(s.removeClass("hidden-item"),r=!0),this.hasViewableData=r,!t&&r&&this.showList(),r||(this.lastUnfoundValue=n,this.hideList())},setPos:function(){this.shadowList.css({marginTop:0,marginLeft:0,marginRight:0,marginBottom:0});var n=s.positionDatalist?e(this.input).position():t.getRelOffset(this.shadowList,this.input);return n.top+=e(this.input).outerHeight(),n.width=e(this.input).outerWidth()-(parseInt(this.shadowList.css("borderLeftWidth"),10)||0)-(parseInt(this.shadowList.css("borderRightWidth"),10)||0),this.shadowList.css({marginTop:"",marginLeft:"",marginRight:"",marginBottom:""}).css(n),n},showList:function(){if(this.isListVisible)return!1;this.needsUpdate&&this.updateListOptions(),this.showHideOptions(!0);if(!this.hasViewableData)return!1;this.isListVisible=!0;var t=this;return t.setPos(),t.shadowList.addClass("datalist-visible").find("li.active-item").removeClass("active-item"),e(n).unbind(".datalist"+t.id),e(r).off(".datalist"+t.id).on("mousedown.datalist"+t.id+" focusin.datalist"+t.id,function(n){n.target===t.input||t.shadowList[0]===n.target||e.contains(t.shadowList[0],n.target)?(clearTimeout(t.hideTimer),setTimeout(function(){clearTimeout(t.hideTimer)},9)):t.timedHide()}).on("updateshadowdom.datalist"+t.id,function(){t.setPos()}),!0},hideList:function(){if(!this.isListVisible)return!1;var i=this,s=function(t){i.changedValue&&e(i.input).trigger("change"),i.changedValue=!1};return i.shadowList.removeClass("datalist-visible list-item-active"),i.index=-1,i.isListVisible=!1,i.changedValue&&(i.triggeredByDatalist=!0,t.triggerInlineForm&&t.triggerInlineForm(i.input,"input"),e(i.input).is(":focus")?e(i.input).one("blur",s):s(),i.triggeredByDatalist=!1),e(r).unbind(".datalist"+i.id),e(n).off(".datalist"+i.id).one("resize.datalist"+i.id,function(){i.shadowList.css({top:0,left:0})}),!0},scrollIntoView:function(t){var n=e("ul",this.shadowList),r=e("div.datalist-box",this.shadowList),i=t.position(),s;i.top-=(parseInt(n.css("paddingTop"),10)||0)+(parseInt(n.css("marginTop"),10)||0)+(parseInt(n.css("borderTopWidth"),10)||0);if(i.top<0){r.scrollTop(r.scrollTop()+i.top-2);return}i.top+=t.outerHeight(),s=r.height(),i.top>s&&r.scrollTop(r.scrollTop()+(i.top-s)+2)},changeValue:function(t){if(!t[0])return;var n=e("span.option-value",t).text(),r=e.prop(this.input,"value");n!=r&&(e(this.input).prop("value",n).triggerHandler("updateInput"),this.changedValue=!0)},markItem:function(t,n,r){var i,s;r=r||e("li:not(.hidden-item)",this.shadowList);if(!r.length)return;t<0?t=r.length-1:t>=r.length&&(t=0),r.removeClass("active-item"),this.shadowList.addClass("list-item-active"),i=r.filter(":eq("+t+")").addClass("active-item"),n&&(this.changeValue(i),this.scrollIntoView(i)),this.index=t}};u()}()});