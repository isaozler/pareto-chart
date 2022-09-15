/*! For license information please see module.js.LICENSE.txt */
define(["react","d3","emotion","@grafana/data","@grafana/ui"],(function(e,t,n,a,r){return function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=5)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=a},function(e,t){e.exports=r},function(e,t,n){"use strict";n.r(t);var a=n(3);var r=function(){return(r=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};Object.create;function i(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var a,r,i=n.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(a=i.next()).done;)o.push(a.value)}catch(e){r={error:e}}finally{try{a&&!a.done&&(n=i.return)&&n.call(i)}finally{if(r)throw r.error}}return o}function o(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(i(arguments[t]));return e}function l(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}Object.create;var s,c=n(0),d=n.n(c),u=n(2),p=n(4),f=n(1),h=function(e,t,n,a){return e>=30?t.textLabel.__largeBar+" --large":e<30&&n%a==0?t.textLabel.__smallBar+" --small":t.textLabel.__hidden+" --hidden"},b=function(e,t){var n;return function(){for(var a=[],r=0;r<arguments.length;r++)a[r]=arguments[r];return new Promise((function(r){n&&clearTimeout(n),n=setTimeout((function(){return r(e.apply(void 0,o(a)))}),t)}))}},m=function(e){return 0===e.indexOf("rgb")?e:e.toLowerCase().replace(/-(.)/g,(function(e,t){return t.toUpperCase()}))},x=function(e,t){document.addEventListener(e,(function(e){return t(e.detail)}))},g=function(e,t){document.dispatchEvent(new CustomEvent(e,{detail:t}))},v=function(e,t){document.removeEventListener(e,t)};!function(e){e.E_TOOLTIP_CLICK="E_TOOLTIP_CLICK",e.E_TOOLTIP_MOVE="E_TOOLTIP_MOVE"}(s||(s={}));var y,O,j,w,T,C,L,k,E,B,_,P,V,I,N,z,S,F,A,M,D,R,W,H,Y,X,K,G=function(e){var t=e.data,n=e.styles,a=e.theme,r=e.padding,i=e.x,c=e.xBand,p=e.y,x=e.chartHeight,v=e.chartWidth,j=e.vitalBreakpointVal,w=e.barTextFontSize,T=e.barTextRotation,C=e.isInclusive,L=e.showVitalFew,k=e.showBarValue,E=e.showBarText,B=e.valToFixed,_=e.chartId,P=e.vitalColor,V=e.vitalLineColor,I=e.trivialColor,N=e.barHoverColor,z=e.barLabelColor,S=!!t.p.filter((function(e,t){return e<j})).length,F=.9*c.bandwidth(),A=b((function(e){return g(_+"-"+s.E_TOOLTIP_CLICK,e)}),200),M=b((function(e){return g(_+"-"+s.E_TOOLTIP_MOVE,e)}),200),D=function(e){return e?P?m(P):a.palette.brandDanger:I?m(I):a.palette.brandWarning},R=0,W=Math.max.apply(Math,o(t.y)).toString().length*w+20;return d.a.createElement("g",{clipPath:"url(#"+_+")",className:"bars",transform:"translate("+r+", 0)"},t.y.map((function(e,a){var o,s=i(a)-F/2,c=Math.trunc(v/10/F),b="number"==typeof e&&B>=0?e.toFixed(B>6?2:B):e,g=!k?n.forcedHidden.__barLabel:"";o=!S&&0===a||(t.p[a]<j&&!C||!(!C||!(t.p[a-1]<j||0===a))),R=S||0!==a?t.p[a]<j&&!C||C&&t.p[a-1]<j?a:R:0;var _=h(F,n,a,c);return d.a.createElement(d.a.Fragment,null,d.a.createElement("rect",{className:[n.bar,N?Object(u.css)(y||(y=l(["\n                      &:hover {\n                        fill: "," !important;\n                      }\n                    "],["\n                      &:hover {\n                        fill: "," !important;\n                      }\n                    "])),m(N)):""].join(" "),fill:D(o),"data-label-header":t.x[a],"data-label":t.tooltipLabel[a],"data-label2":t.p[a].toFixed(2)+"%","data-count":e,"data-is-vital":o,"data-fill-color":D(o),onMouseUp:function(e){var t=e.currentTarget;return A({currentTarget:t})},onMouseOver:function(e){var t=e.currentTarget,n=e.type,a=e.pageX,r=e.pageY;return M({currentTarget:t,type:n,pageX:a,pageY:r})},onMouseMove:function(e){var t=e.currentTarget,n=e.type,a=e.pageX,r=e.pageY;return M({currentTarget:t,type:n,pageX:a,pageY:r})},onMouseOut:function(e){var t=e.currentTarget,n=e.type,a=e.pageX,r=e.pageY;return M({currentTarget:t,type:n,pageX:a,pageY:r})},ref:function(t){Object(f.select)(t).attr("x",s).attr("y",p(e)).attr("width",F).attr("height",x-p(e))}}),d.a.createElement((function(t){var a=t.index,i=t.className;return d.a.createElement("text",{"data-index":a,transform:"translate(0, -"+r/2+")",className:[i,n.barValue,g].join(" "),x:s+F/2,y:p(e)},b)}),{index:a,className:["bar-values",_].join(" ")}),E?d.a.createElement((function(r){var i=r.index,o=r.className,l=r.x;return d.a.createElement("g",{id:"barTextGroup-"+i,className:n.barTextGroup,ref:function(e){Object(f.select)(e).style("transform","translate("+(l+F/2+w/2)+"px, "+(x-10)+"px) rotate("+T+"deg)")}},d.a.createElement("text",{"data-index":i,className:[o,n.barText].join(" "),style:{fontSize:w+"px",fill:z,fontWeight:"bold"}},e),d.a.createElement("text",{"data-index":i,className:[o,n.barText].join(" "),style:{fontSize:w+"px",fill:z,transform:"translate("+W+"px, 0)"}},t.x[a]," - ",t.tooltipLabel[a]))}),{index:a,className:["bar-text"].join(" "),x:s}):d.a.createElement(d.a.Fragment,null),d.a.createElement(d.a.Fragment,null,L&&a===t.y.length-1&&d.a.createElement("line",{className:["line--vertical",n.lineCutOff,Object(u.css)(O||(O=l(["\n                      stroke: ",";\n                    "],["\n                      stroke: ",";\n                    "])),V||"rgba(255, 0, 0, 0.75)")].join(" "),transform:"translate(0, 0)",ref:function(e){Object(f.select)(e).attr("x1",i(R)-F/2+F/2).attr("x2",i(R)-F/2+F/2).attr("y1",0).attr("y2",x)}})))})))},q=Object(p.stylesFactory)((function(){var e=Object(p.useTheme)();return{wrapper:Object(u.css)(j||(j=l(["\n      position: relative;\n    "],["\n      position: relative;\n    "]))),svg:Object(u.css)(w||(w=l(["\n      position: absolute;\n      top: 0;\n      left: 0;\n    "],["\n      position: absolute;\n      top: 0;\n      left: 0;\n    "]))),tooltipContainer:Object(u.css)(T||(T=l(["\n      position: fixed;\n      top: 0;\n      right: 0;\n      z-index: 100;\n      min-width: 20vw;\n      display: flex;\n      justify-content: flex-end;\n      transition: all 0.2s ease;\n\n      &:not(.tooltip--visible) {\n        z-index: -10;\n        opacity: 0;\n      }\n\n      .tooltip--visible {\n        z-index: 1;\n        opacity: 1;\n      }\n    "],["\n      position: fixed;\n      top: 0;\n      right: 0;\n      z-index: 100;\n      min-width: 20vw;\n      display: flex;\n      justify-content: flex-end;\n      transition: all 0.2s ease;\n\n      &:not(.tooltip--visible) {\n        z-index: -10;\n        opacity: 0;\n      }\n\n      .tooltip--visible {\n        z-index: 1;\n        opacity: 1;\n      }\n    "]))),tooltip:Object(u.css)(C||(C=l(["\n      display: flex;\n      flex-direction: column;\n      padding: 0;\n      max-width: 100%;\n      color: white;\n\n      strong {\n        padding: 8px 10px;\n        margin-top: 4px;\n        bottom: -1px;\n        min-width: 50px;\n        background: inherit;\n        background: rgba(0, 0, 0, 0.14);\n        font-size: 1.4rem;\n        max-width: 100%;\n        text-overflow: ellipsis;\n        overflow: hidden;\n      }\n\n      label {\n        display: block;\n        background: inherit;\n        padding: 0 10px 4px 10px;\n\n        &:last-of-type {\n          padding-bottom: 0;\n        }\n\n        &.label-header {\n          font-weight: bold;\n          font-size: 1.2rem;\n          max-width: 100%;\n          background: rgba(0, 0, 0, 0.1);\n          padding: 8px 10px;\n          margin-bottom: 4px;\n        }\n      }\n\n      .tooltip-copy-label {\n        position: absolute;\n        top: calc(100% + 4px);\n        left: 0;\n        background: ",";\n        color: ",";\n        font-size: 10px;\n        height: 20px;\n        box-sizing: border-box;\n        padding: 2px 4px;\n\n        &.hidden {\n          opacity: 0;\n          z-index: -1;\n        }\n      }\n    "],["\n      display: flex;\n      flex-direction: column;\n      padding: 0;\n      max-width: 100%;\n      color: white;\n\n      strong {\n        padding: 8px 10px;\n        margin-top: 4px;\n        bottom: -1px;\n        min-width: 50px;\n        background: inherit;\n        background: rgba(0, 0, 0, 0.14);\n        font-size: 1.4rem;\n        max-width: 100%;\n        text-overflow: ellipsis;\n        overflow: hidden;\n      }\n\n      label {\n        display: block;\n        background: inherit;\n        padding: 0 10px 4px 10px;\n\n        &:last-of-type {\n          padding-bottom: 0;\n        }\n\n        &.label-header {\n          font-weight: bold;\n          font-size: 1.2rem;\n          max-width: 100%;\n          background: rgba(0, 0, 0, 0.1);\n          padding: 8px 10px;\n          margin-bottom: 4px;\n        }\n      }\n\n      .tooltip-copy-label {\n        position: absolute;\n        top: calc(100% + 4px);\n        left: 0;\n        background: ",";\n        color: ",";\n        font-size: 10px;\n        height: 20px;\n        box-sizing: border-box;\n        padding: 2px 4px;\n\n        &.hidden {\n          opacity: 0;\n          z-index: -1;\n        }\n      }\n    "])),e.colors.border2,e.colors.text),textBox:Object(u.css)(L||(L=l(["\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      padding: 10px;\n    "],["\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      padding: 10px;\n    "]))),bar:Object(u.css)(k||(k=l(["\n      cursor: pointer;\n\n      &:hover {\n        fill: ",";\n      }\n    "],["\n      cursor: pointer;\n\n      &:hover {\n        fill: ",";\n      }\n    "])),e.colors.text),barValue:Object(u.css)(E||(E=l(["\n      fill: ",";\n      text-anchor: middle;\n      opacity: 1;\n      transition: opacity 0.2s ease-out;\n      user-select: none;\n    "],["\n      fill: ",";\n      text-anchor: middle;\n      opacity: 1;\n      transition: opacity 0.2s ease-out;\n      user-select: none;\n    "])),e.colors.text),barTextGroup:Object(u.css)(B||(B=l([""],[""]))),barText:Object(u.css)(_||(_=l(["\n      fill: ",";\n      opacity: 1;\n      transition: opacity 0.2s ease-out;\n      user-select: none;\n      font-size: 12px;\n    "],["\n      fill: ",";\n      opacity: 1;\n      transition: opacity 0.2s ease-out;\n      user-select: none;\n      font-size: 12px;\n    "])),e.colors.text),line:Object(u.css)(P||(P=l(["\n      fill: none;\n      stroke-width: 2px;\n      shape-rendering: geometricPrecision;\n    "],["\n      fill: none;\n      stroke-width: 2px;\n      shape-rendering: geometricPrecision;\n    "]))),lineCutOff:Object(u.css)(V||(V=l(["\n      fill: none;\n      stroke-width: 2px;\n      stroke-dasharray: 5px;\n    "],["\n      fill: none;\n      stroke-width: 2px;\n      stroke-dasharray: 5px;\n    "]))),lineBottomAxis:Object(u.css)(I||(I=l(["\n      stroke: ",";\n      shape-rendering: crispEdges;\n    "],["\n      stroke: ",";\n      shape-rendering: crispEdges;\n    "])),e.colors.text),paths:Object(u.css)(N||(N=l(["\n      position: relative;\n    "],["\n      position: relative;\n    "]))),brushWrapper:Object(u.css)(z||(z=l(["\n      fill: ",";\n      stroke: ",";\n      stroke-width: 0.75px;\n\n      .selection {\n        fill: "," !important;\n        fill-opacity: 0.75;\n        stroke: none;\n\n        &--invalid {\n          fill: "," !important;\n        }\n      }\n\n      .handle {\n        fill: "," !important;\n        fill-opacity: 0.75;\n      }\n    "],["\n      fill: ",";\n      stroke: ",";\n      stroke-width: 0.75px;\n\n      .selection {\n        fill: "," !important;\n        fill-opacity: 0.75;\n        stroke: none;\n\n        &--invalid {\n          fill: "," !important;\n        }\n      }\n\n      .handle {\n        fill: "," !important;\n        fill-opacity: 0.75;\n      }\n    "])),e.colors.bg3,e.colors.border2,e.colors.bgBlue2,e.palette.brandDanger,e.palette.brandWarning),brushOverlay:Object(u.css)(S||(S=l(["\n      cursor: crosshair;\n    "],["\n      cursor: crosshair;\n    "]))),textLabel:{__largeBar:Object(u.css)(F||(F=l([""],[""]))),__smallBar:Object(u.css)(A||(A=l([""],[""]))),__hidden:Object(u.css)(M||(M=l(["\n        fill: none;\n        opacity: 0;\n      "],["\n        fill: none;\n        opacity: 0;\n      "])))},axis:Object(u.css)(D||(D=l(["\n      text {\n        user-select: none;\n      }\n    "],["\n      text {\n        user-select: none;\n      }\n    "]))),chartMaskId:Object(u.css)(R||(R=l(["\n      fill: none;\n      user-select: none;\n    "],["\n      fill: none;\n      user-select: none;\n    "]))),placeholder:{__noData:Object(u.css)(W||(W=l(["\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        font-size: 2rem;\n        font-weight: bold;\n        color: ",";\n        height: 100%;\n        user-select: none;\n      "],["\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        font-size: 2rem;\n        font-weight: bold;\n        color: ",";\n        height: 100%;\n        user-select: none;\n      "])),e.palette.redBase)},forcedHidden:{__barLabel:Object(u.css)(H||(H=l(["\n        opacity: 0 !important;\n        transform: translate(0, -100px);\n      "],["\n        opacity: 0 !important;\n        transform: translate(0, -100px);\n      "])))}}})),U=function(e){var t=q(),n=null,a=null,r=null,o=null,l=function(){o=null};Object(f.scaleBand)().range([0,e.chartWidth-e.padding]).padding(e.barPadding).domain(e.data.xAxisLabels);var s=function(){var t,s=Object(f.select)(e.svgRef.current),c=(f.event||{}).selection;if(s&&c){if(n&&a&&c||(n=e.x.domain(),a=e.xBand.bandwidth()),null===(t=c)||void 0===t?void 0:t.length){e.x.domain(c.map(e.xLinear.invert,e.xLinear));var d=e.data.xAxisLabels.length,h=i(e.xLinear.domain(),1)[0],b=i(e.x.domain(),2),m=b[0],x=b[1]-m,g=Math.floor(100*x/(d-h));if(g<5)return void s.select(".brush").call(u.move,r);r=c;var v=100/g*(e.chartWidth-e.padding);e.xBand.range([0,v]).padding(e.barPadding).domain(e.data.xAxisLabels)}else{if(!o)return o=setTimeout(l,350),void s.select(".brush").call(u.move,r);var y=[0,e.chartWidth-e.padding];r=null,e.x.domain(n),e.xBand.range(y).padding(e.barPadding).domain(e.data.xAxisLabels)}p()}},u=Object(f.brushX)().extent([[0,0],[e.chartWidth-e.padding,10]]).on("brush",(function(){var t=Object(f.select)(e.svgRef.current),n=(f.event||{}).selection;if(n){var a=e.data.xAxisLabels.length,r=Object(f.scaleLinear)().range([0,e.chartWidth]);r.domain(n.map(e.xLinear.invert,e.xLinear));var o=i(e.xLinear.domain(),1)[0],l=i(r.domain(),2),s=l[0],c=l[1]-s,d=Math.floor(100*c/(a-o))>=5;t.select("rect.selection").classed("selection--valid",d).classed("selection--invalid",!d)}})).on("end",s),p=function(){var n,a=Object(f.select)(e.svgRef.current);if(a){var r=null===(n=Object(f.select)(e.svgRef.current))||void 0===n?void 0:n.transition().duration(750);a.select(".axis-left").transition(r).call(Object(f.axisLeft)(e.y)),a.select(".axis-right").transition(r).call(Object(f.axisLeft)(e.p).ticks(4).tickFormat(e.pLabels));var i=0,o=0,l=e.xBand.bandwidth(),s=l/2,c=a.selectAll("rect."+t.bar);if(c.each((function(){if(this.dataset){var t=e.x(i)-s,n=this.dataset.isVital;if(o="true"===n?i:o,Object(f.select)(this).transition(r).attr("x",t).attr("width",l),e.showBarText&&Object(f.select)("#barTextGroup-"+i).transition(r).style("transform","translate("+(t+s)+"px, "+(e.chartHeight-10)+"px) rotate("+e.barTextRotation+"deg)"),e.showVitalFew&&i===c.size()-1){var d=e.x(o)-s+s;a.select(".line--vertical").transition(r).attr("x1",d).attr("x2",d).attr("y1",0).attr("y2",e.chartHeight)}}i++})),e.showBarValue){var d=Math.trunc(e.chartWidth/10/l);a.selectAll("text."+t.barValue).each((function(){var n=this.dataset.index,a=e.x(+n)-s,i=h(l,t,+n,d);Object(f.select)(this).transition(r).attr("class",[t.barValue,i].join(" ")).attr("x",a+s)}))}var u=e.p(e.vitalBreakpointVal/100);a.select(".line--horizontal").transition(r).attr("x1",0).attr("x2",e.chartWidth-e.padding).attr("y1",u).attr("y2",u),a.select(".line--curve").datum(e.pathData).transition(r).attr("transform","translate("+e.padding+", 0)").attr("d",e.line)}},b=Object(c.useCallback)((function(){Object(f.select)(e.svgRef.current).select(".brush").call(u.move,null),s()}),[f.select,s]);return Object(c.useLayoutEffect)((function(){b()}),[]),Object(c.useEffect)((function(){b()}),[e.data,b]),d.a.createElement("g",{transform:"translate("+2*e.padding+", "+(e.padding+e.chartHeight+3)+")",className:["brush",t.brushWrapper].join(" "),ref:function(e){Object(f.select)(e).call(u)}})},Q={initCopyText:"Click on bar to copy data",copyText:"",dataCopied:"Copied data!"},J=function(e,t){return'<span class="tooltip-copy-label '+(e.isCopyLabelVisible?"":"hidden")+'">'+t+"</span>"},Z=function(e){var t=q(),n=Object(c.useRef)(null),a=Object(c.useRef)(null),r=function(t){ee(n,e,t)},i=function(t){$(n,a,e,t)};return Object(c.useEffect)((function(){return x(e.chartId+"-"+s.E_TOOLTIP_CLICK,r),x(e.chartId+"-"+s.E_TOOLTIP_MOVE,i),function(){v(e.chartId+"-"+s.E_TOOLTIP_CLICK,r),v(e.chartId+"-"+s.E_TOOLTIP_MOVE,i)}}),[]),d.a.createElement("div",{ref:n,className:["tooltip__container",t.tooltipContainer,e.chartId].join(" ")},d.a.createElement("div",{ref:a,className:t.tooltip}))},$=function(e,t,n,a){var r,i,o,l=(e||{current:null}).current,s=(t||{current:null}).current,c=(null===(r=a.currentTarget)||void 0===r?void 0:r.dataset)||{},d=c.labelHeader,u=c.label,p=c.label2,h=c.isVital,b=c.count,x=c.fillColor,g=!!["mouseover","mousemove"].includes(a.type),v=(null===(o=null===(i=Object(f.select)(".axis-right").node())||void 0===i?void 0:i.getBoundingClientRect())||void 0===o?void 0:o.width)+20||60;if("mouseout"===a.type&&(Q.copyText=Q.initCopyText),l){Object(f.select)(l).classed("tooltip--visible",g),g&&Object(f.select)(l).style("right",v+"px");var y=x||("true"===h?n.vitalColor?m(n.vitalColor):n.theme.palette.brandDanger:n.trivialColor?m(n.trivialColor):n.theme.palette.brandWarning);n.tooltipBackgroundColor&&(y=n.tooltipBackgroundColor),Object(f.select)(s).style("background",y).html('<div class="labels-wrapper"><label class="label-header">'+d+"\n      "+(Q.copyText?J(n,Q.copyText):J(n,Q.initCopyText))+'</label>\n      <label class="label-value">Bar percentage: '+u+'</label>\n      <label class="label-value">Cumulative percentage: '+p+"</label></div>\n      <strong>"+b+"</strong>\n    ")}},ee=function(e,t,n){var a,r,i,o,l=(null===(a=n.currentTarget)||void 0===a?void 0:a.dataset.labelHeader)+"\n    \r\nBar percentage: "+(null===(r=n.currentTarget)||void 0===r?void 0:r.dataset.label)+"\n    \r\nCumulative percentage: "+(null===(i=n.currentTarget)||void 0===i?void 0:i.dataset.label2)+"\n    \r\nCounts: "+(null===(o=n.currentTarget)||void 0===o?void 0:o.dataset.count)||"No Content",s=document.createElement("textarea");s.innerText=l;var c=e.current?e.current:document.body;c&&c.appendChild(s),s.select(),document.execCommand("copy"),Object(f.select)(c).select(".tooltip-copy-label").text(Q.dataCopied),s.remove()},te=function(e){var t=e.theme,n=e.styles,a=e.padding,r=e.chartId,i=e.chartWidth,o=e.vitalBreakpointVal,s=e.vitalLineColor,c=e.curveLineColor,p=e.p,h=e.xBand,b=e.pathData,m=e.line,x=e.showVitalFew;return d.a.createElement("g",{clipPath:"url(#"+r+")",className:n.paths},d.a.createElement("path",{className:["line--curve",n.line,Object(u.css)(Y||(Y=l(["\n            stroke: ",";\n          "],["\n            stroke: ",";\n          "])),c||t.colors.text)].join(" "),transform:"translate("+a+", 0)",ref:function(e){Object(f.select)(e).datum(b).attr("d",m)}}),x&&d.a.createElement("line",{className:["line--horizontal",n.lineCutOff,Object(u.css)(X||(X=l(["\n              stroke: ",";\n            "],["\n              stroke: ",";\n            "])),s||t.palette.brandDanger)].join(" "),transform:"translate("+(a+h.bandwidth()/2)+", 0)",ref:function(e){Object(f.select)(e).attr("x1",0).attr("x2",i-a).attr("y1",p(o/100)).attr("y2",p(o/100))}}))},ne=function(e){var t=e.data,n=e.styles,a=e.padding,r=e.chartHeight,o=e.chartWidth,l=(e.x,e.xPBand),s=e.y,c=e.p,u=e.pLabels,p=e.vitalBreakpointVal,h=e.isInclusive,b=!!t.p.filter((function(e){return e<p})).length,m=t.p.filter((function(e,n){return t.p[n]<p||!b&&0===n})).sort((function(e,t){return e-t}));return d.a.createElement("g",{className:["axis",n.axis].join(" ")},d.a.createElement("g",{className:"axis-bottom",transform:"translate("+a+", "+(r+15)+")",ref:function(e){var n=i(t.xAxisLabels.filter((function(e,t){return!!m[t]||h&&m[t-1]<p&&!m[t+1]})).reverse(),1)[0],r=Object(f.axisBottom)(l).tickValues([n,"100 %"]);Object(f.select)(e).call(r).selectAll("text").attr("y",a/2).attr("x",0).style("text-anchor","center")}}),d.a.createElement("line",{className:n.lineBottomAxis,transform:"translate("+a+", 1)",ref:function(e){Object(f.select)(e).attr("x1",0).attr("x2",o-a).attr("y1",r).attr("y2",r)}}),d.a.createElement("g",{className:"axis-left",transform:"translate("+a+", 0)",ref:function(e){Object(f.select)(e).call(Object(f.axisLeft)(s).ticks(r/30))}}),d.a.createElement("g",{className:"axis-right",transform:"translate("+(o+a)+", 0)",ref:function(e){Object(f.select)(e).call(Object(f.axisLeft)(c).ticks(4).tickFormat(u))}}))},ae=function(){function e(e){var t,n,a=i(e.request.targets,1)[0],r=a.resultFormat,o=a.refId,l=i(e.series,1)[0],s=l.fields,c=l.meta;this.error=null,(null===(t=c)||void 0===t?void 0:t.executedQueryString)&&"time_series"!==r?(this.dataType="table",this.results=this.setTableData(s)):"time_series"===r?(this.dataType="series",this.results=(null===(n=l)||void 0===n?void 0:n.name)&&"flux"!==o.toLowerCase()?this.setTimeSeriesData(e.series):this.results=this.setTimeSeriesFluxData(s)):(this.dataType="series",this.results=this.setSeriesData(s))}return e.prototype.getResults=function(){return{results:this.results,error:this.error}},e.prototype.setTableData=function(e){var t=e.find((function(e){return e.type===a.FieldType.string})),n=e.find((function(e){return e.type===a.FieldType.number})),r=t.values.toArray().map((function(e){return""+e})),i=n.values.toArray();return this.setResults(r,i,this.sumYVals(i))},e.prototype.setSeriesData=function(e){var t=i(e,2),n=t[0],a=t[1],r=n.values.toArray().map((function(e){return e})),o=a.values.toArray();return this.setResults(r,o,this.sumYVals(o))},e.prototype.setTimeSeriesData=function(e){var t=this,n=e.map((function(e,n){return t.stripName(e,n)})),a=e.map((function(e){var t=i(e.fields,2);return i(t[1].values.toArray(),1)[0]}));return this.setResults(n,a,this.sumYVals(a))},e.prototype.setTimeSeriesFluxData=function(e){var t,n,r,i,o,l=(null===(n=null===(t=e.find((function(e){return e.type===a.FieldType.number})))||void 0===t?void 0:t.values)||void 0===n?void 0:n.toArray())||[],s=e.find((function(e){return e.type===a.FieldType.string}));s||(s=e.find((function(e){return e.type===a.FieldType.time})));var c=(null===(i=null===(r=s)||void 0===r?void 0:r.values)||void 0===i?void 0:i.toArray().map((function(e){return""+e})))||Array.from({length:(null===(o=l)||void 0===o?void 0:o.length)||0}).map((function(e,t){return"T"+(t+1)}));return this.setResults(c,l,this.sumYVals(l))},e.prototype.sumYVals=function(e){var t;return null===(t=e)||void 0===t?void 0:t.reduce((function(e,t){return e+t}),0)},e.prototype.stripName=function(e,t){var n,a=(e||{}).name,r=(null===(n=a)||void 0===n?void 0:n.match(/\{.*:+(.*)\}/))||null;if(!r)return t+1;var o=i(r,2),l=o[0],s=o[1];return s?s.trim():l?l.trim():a},e.prototype.setResults=function(e,t,n){var a;return t.filter((function(e){return e<0})).length?(this.results=null,this.error={message:'Column "counts" contains negative values'},this.results):(null===(a=t)||void 0===a?void 0:a.length)?(this.results=t.map((function(t,n){return{i:n,x:e[n],y:t}})).sort((function(e,t){return t.y-e.y})).reduce((function(e,a,i){var l,s=100*a.y/n;s=s>100?100:s;var c=((null===(l=e)||void 0===l?void 0:l.p[i-1])?e.p[i-1]:0)+s;c=c>100?100:c;var d=i===t.length-1?Math.trunc(Math.ceil(c))+" %":c.toFixed(2)+" %",u=s.toFixed(2)+" %";return r(r({},e),{x:o(e.x,[a.x]),y:o(e.y,[a.y]),p:o(e.p,[c]),xP:o(e.xP,[s]),xAxisLabels:o(e.xAxisLabels,[d]),tooltipLabel:o(e.tooltipLabel,[u])})}),{x:[],y:[],p:[],xP:[],xAxisLabels:[],tooltipLabel:[]}),this.results):(this.results=null,this.error={message:"Please check your query. There is no data available!"},this.results)},e}();n.d(t,"plugin",(function(){return re}));var re=new a.PanelPlugin((function(e){var t,n=e.options,a=e.data,i=e.width,o=e.height,s=e.id,h=Object(c.useRef)(null),b=Object(p.useTheme)(),m=q();if(!a||!a.series.length)return d.a.createElement("div",{className:["placeholder--no-data",m.placeholder.__noData].join(" ")},"No Data");var x="chartMask_"+s,g=new ae(a).getResults(),v=g.results,y=g.error;if(y||!v)return d.a.createElement("div",{className:["placeholder--no-data",m.placeholder.__noData].join(" ")},(null===(t=y)||void 0===t?void 0:t.message)||"Invalid data");var O=function(e,t){var n=t.options,a=t.width,r=t.height,i=n.vitalBreakpointVal,o=Object(f.max)(e.y)||0,l=Object(f.min)(e.y)||0,s=r-60,c=a-40,d=n.barPadding<1?n.barPadding:n.barPadding/10,u=Object(f.scaleBand)().range([0,c-20]).padding(d),p=Object(f.scaleBand)().range([0,c-20]).padding(d).paddingOuter(.6),h=Object(f.scaleLinear)().range([0,c-20]),b=Object(f.scaleLinear)().range([0,c-20]),m=Object(f.scaleLinear)().range([s,0]),x=Object(f.scaleLinear)().range([s,0]),g=Object(f.line)().curve(f.curveBasis).x((function(e,t){return b(t)||0})).y((function(e){return e?x(e.p/100):e})),v=e.p.map((function(t,n){return{x:e.xAxisLabels[n]||"",p:t||0}}))||null,y=e.p.map((function(t,n){return{x:e.xAxisLabels[n]||"",p:i}}))||null,O=e.p.map((function(e,t){return{x:t,p:0}})),j=e.p[0]/e.p.length,w=l-j>0?l-j:0;return u.domain(e.xAxisLabels),p.domain(e.xAxisLabels),h.domain([-1,e.x.length]),b.domain([-1,e.x.length]),x.domain([0,1]),m.domain([w,o+j]),{padding:20,x:b,xBand:u,xPBand:p,xLinear:h,y:m,p:x,chartHeight:s,chartWidth:c,line:g,pathData:v,cutOffXPathData:y,bottomLineData:O,pLabels:function(e,t){return 0!==t&&e&&e?100*e+" %":""},Component:G}}(v,{options:n,width:i,height:o}),j=r(r(r({data:v,theme:b,styles:m,chartId:x},n),O),{svgRef:h}),w=O.Component;return d.a.createElement("div",{className:Object(u.cx)(m.wrapper,Object(u.css)(K||(K=l(["\n          width: ","px;\n          height: ","px;\n        "],["\n          width: ","px;\n          height: ","px;\n        "])),i,o))},d.a.createElement(Z,r({},j)),d.a.createElement("svg",{ref:h,className:["svg--pareto-chart",m.svg].join(" "),width:i,height:o,xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 "+i+" "+o},d.a.createElement("g",{transform:"translate("+O.padding+", "+O.padding+")",className:"wrapper"},d.a.createElement(w,r({},j)),d.a.createElement(te,r({},j)),d.a.createElement(ne,r({},j))),d.a.createElement(U,r({},j)),d.a.createElement("defs",null,d.a.createElement("clipPath",{id:x},d.a.createElement("rect",{transform:"translate(0, -"+j.padding+")",ref:function(e){Object(f.select)(e).attr("width",j.chartWidth-j.padding).attr("height",j.chartHeight+j.padding)}})))))})).setPanelOptions((function(e){return e.addBooleanSwitch({path:"showVitalFew",name:"Show vital few line",description:"Indicates that many defects come from relatively few causes.",defaultValue:!0}).addNumberInput({path:"vitalBreakpointVal",name:"Vital few value (%)",description:"Default is 80 based on the 80/20 rule. But, you are able to customize this.",defaultValue:20}).addBooleanSwitch({path:"isInclusive",name:"Inclusive vital few",description:"Include bar with overlapping breakpoint value",defaultValue:!1}).addBooleanSwitch({path:"showBarValue",name:"Show bar values",description:"Show the bar values on top of the bars?",defaultValue:!1}).addBooleanSwitch({path:"showBarText",name:"Show bar labels",description:"Show the bar label?",defaultValue:!1}).addNumberInput({path:"barTextFontSize",name:"Bar label font size",description:"Font size for the bar label.",defaultValue:12}).addNumberInput({path:"barTextRotation",name:"Bar label rotation",description:"Rotation degree of the label",defaultValue:270}).addNumberInput({path:"valToFixed",name:"Number of decimals (max. 6)",description:"Set number of decimals in bar values.",settings:{min:0,max:6},defaultValue:2,showIf:function(e){return e.showBarValue}}).addNumberInput({path:"barPadding",name:"Bar padding",description:"Space between bars. Should be a value between 1 and 9.",defaultValue:2,settings:{min:1,max:9}}).addColorPicker({category:["Colors"],path:"curveLineColor",name:"Percentage line",description:"The curved line visualizing the optimal trade off"}).addColorPicker({category:["Colors"],path:"vitalLineColor",name:"Breakpoint lines",description:"Horizontal and vertical lines indicating the vital few breakpoint",showIf:function(e){return e.showVitalFew}}).addColorPicker({category:["Colors"],path:"vitalColor",name:"Vital few bars",description:"The bars within the determined vital few percentage"}).addColorPicker({category:["Colors"],path:"barLabelColor",name:"Bar label color",description:"Color or the bar label"}).addColorPicker({category:["Colors"],path:"trivialColor",name:"Trivial many bars",description:"The bars outside the vital few percentage"}).addColorPicker({category:["Colors"],path:"barHoverColor",name:"Bar hover state",description:"Bar fill color on hover"}).addColorPicker({category:["Colors"],path:"tooltipBackgroundColor",name:"Custom tooltip background color",description:"To specify a background color instead of hovered bar color. Refresh to apply color changes."})}))}])}));
//# sourceMappingURL=module.js.map