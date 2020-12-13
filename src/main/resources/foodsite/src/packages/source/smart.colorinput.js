
/* Smart UI v7.0.0 (2020-Mar)
Copyright (c) 2011-2020 jQWidgets. 
License: https://htmlelements.com/license/ */

Smart("smart-color-input",class extends Smart.Input{static get properties(){return{dataSource:{type:"any",value:null},displayMode:{value:"default",allowedValues:["default","grid"],type:"string"},dropDownHeight:{type:"any",value:"auto"},messages:{value:{en:{standardColors:"Standard colors",themeShadeColors:"",themeColors:"Theme colors"}},type:"object",extend:!0},placeholder:{value:"Please Select Color",type:"string"},valueDisplayMode:{value:"default",allowedValues:["default","colorBox","colorCode"],type:"string"},valueFormat:{value:"hex",allowedValues:["rgb","rgba","hex"],type:"string"}}}static get listeners(){return{"input.focus":"_focusHandler","input.blur":"_blurHandler","input.keydown":"_keyDownHandler","input.keyup":"_keyUpHandler","input.keypress":"_keyPressHandler","dropDownButton.down":"_dropDownButtonDownHandler","inputContainer.down":"_downHandler","document.up":"_documentUpHandler"}}template(){return`<div id="inputContainer" role="presentation">
                    <div class="smart-content">
                        <div class="smart-buttons-container" role="presentation" id="buttonsContainer">
                            <div class="smart-action-button" id="actionButton">
                                <div id="colorSampleContainer" class="smart-color-box color-picker-sample-container" role="presentation">
                                    <div id="colorSample" class="color-picker-sample"></div>
                                </div>
                                <input class="smart-input smart-color-input" id=\'input\' readonly=\'[[readonly]]\' placeholder=\'[[placeholder]]\' type=\'[[type]]\' name=\'[[name]]\' value=\'{{value::keyup}}\' disabled=\'[[disabled]]\' aria-label="[[placeholder]]" />
                            </div>
                            <div id="dropDownButton" tabindex=-1 class="smart-drop-down-button" role="button" aria-label="Toggle popup">
                                <div id="arrow" class="smart-drop-down-button-icon" aria-hidden="true"></div>
                            </div>
                        </div>
                    </div>
                </div>`}open(){const a=this;let b;a.dropDownDataSource?(a.query="",b="function"==typeof a.dataSource?a.dataSource(a.query):a.dataSource):b="function"==typeof a.dropDownDataSource?a.dropDownDataSource(a.query):a.dropDownDataSource,a._process(b);const c=a.$.menu.querySelector(".color-sample.selected");if(c){const b=a.$.input.dataValue,d=a.$.menu.querySelectorAll(".color-sample");for(let e=0;e<d.length;e++){const f=d[e],g=f.getAttribute("data-label"),h=f.getAttribute("value");if(b!==void 0&&h===b||b===void 0&&g===a.$.input.value){c.removeAttribute("aria-current"),c.classList.remove("selected"),f.classList.add("selected"),f.setAttribute("aria-current",!0),a._setActiveDescendant(f),a.$.input.dataValue=h;break}}}a.ensureVisible(),a.$.input.focus(),setTimeout(function(){a.$.input.focus()},25)}_blurHandler(){const a=this;a.opened||(a.removeAttribute("focus"),a.$.actionButton.removeAttribute("focus"),a.$.dropDownButton.removeAttribute("focus")),delete a._preventLookup,a._isValidColor(a.value)||(a.$.input.dataValue=a.value="")}_focusHandler(){const a=this;return a.setAttribute("focus",""),a.$.actionButton.setAttribute("focus",""),a.$.dropDownButton.setAttribute("focus",""),a.readonly||0!==a.minLength||0!==a.$.input.value.length||a._preventLookup?void delete a._preventLookup:void a._lookup()}_lookup(a){const b=this;let c=[];return b.query=b.$.input.value,b.$.input.readonly&&(!b._incrementalSearchQuery&&(b._incrementalSearchQuery=""),b._incrementalSearchQuery+=a.key,b._incrementalSearchTimer&&clearTimeout(b._incrementalSearchTimer),b.query=b._incrementalSearchQuery,b._incrementalSearchTimer=setTimeout(function(){b._incrementalSearchQuery=""},700)),b.query.length<b.minLength?void b.close():void(c="function"==typeof b.dataSource?b.dataSource(b.query):b.dataSource,clearTimeout(b._autoCompleteTimeout),b._autoCompleteTimeout=setTimeout(function(){const a=b.context;b.context=b,b._process(c),b.context=a},b.autoCompleteDelay))}_getDefaultColors(){const a=this;let b=a._generateColors();if("grid"===a.displayMode)return b;let c=[];for(let a=0;a<b.length;a++)c=c.concat(Object.values(b[a])[0]);return c}_generateColors(){const a=this;return"default"===a.displayMode?a._defaultModeColors?a._defaultModeColors:a._defaultModeColors=[{themeColors:["#FFFFFF","#000000","#E6E6E6","#495469","#5671C2","#D48439","#A5A5A5","#EEC328","#7399D3","#85AA4C"]},{themeShadeColors:["#F2F2F2","#808080","#D0CECE","#D6DCE4","#DDEBF7","#FCE4D6","#EBEBEB","#FFF2CC","#DDE5F7","#E2EFDA","#D8D8D8","#595959","#AEAAAA","#ACB9CA","#BDD7EE","#F6CAAD","#DBDBDB","#FFE699","#B4C6E7","#C6E0B4","#BFBFBF","#404040","#757171","#8497B0","#9BC2E6","#F4B084","#C0C0C0","#FFD966","#8EA9DB","#A9D08E","#A6A6A6","#262626","#312F2F","#333F4F","#2F75B5","#C65911","#7B7B7B","#BF8F00","#305496","#548235","#808080","#0D0D0D","#161616","#222B35","#1F4E78","#833C0C","#525252","#806000","#203764","#375623"]},{standardColors:["#A52A0D","#DB3A15","#EEC328","#FEFE33","#A6CD57","#62AC54","#65ADEE","#3F6FBE","#10205F","#64379E"]}]:a._gridColors?a._gridColors:a._gridColors=["rgba(255, 255, 255, 0)","rgb(0, 0, 0)","rgb(153, 51, 0)","rgb(51, 51, 0)","rgb(0, 51, 0)","rgb(0, 51, 102)","rgb(0, 0, 128)","rgb(51, 51, 153)","rgb(51, 51, 51)","rgb(128, 0, 0)","rgb(255, 102, 0)","rgb(128, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 128)","rgb(0, 0, 255)","rgb(102, 102, 153)","rgb(128, 128, 128)","rgb(255, 0, 0)","rgb(255, 153, 0)","rgb(153, 204, 0)","rgb(51, 153, 102)","rgb(51, 204, 204)","rgb(51, 102, 255)","rgb(128, 0, 128)","rgb(153, 153, 153)","rgb(255, 0, 255)","rgb(255, 204, 0)","rgb(255, 255, 0)","rgb(0, 255, 0)","rgb(0, 255, 255)","rgb(0, 204, 255)","rgb(153, 51, 102)","rgb(192, 192, 192)","rgb(255, 153, 204)","rgb(255, 204, 153)","rgb(255, 255, 153)","rgb(204, 255, 204)","rgb(204, 255, 255)","rgb(153, 204, 255)","rgb(204, 153, 255)","rgb(255, 255, 255)"]}_downHandler(a){const b=this;(b.readonly||a.originalEvent.target.closest(".smart-color-box"))&&b._dropDownButtonDownHandler(a)}_documentUpHandler(a){const b=this,c=b.shadowRoot||b.isInShadowDOM?a.originalEvent.composedPath()[0]:a.originalEvent.target;return c===b||c.closest&&c.closest(".smart-buttons-container")===b.$.buttonsContainer?void 0:b.$.scrollView.contains(c.shadowParent||c)?void(b._isPointerDown&&(b._isPointerDown=!1,b.opened&&(b._preventLookup=!0),b.$.input.focus())):void(b.opened&&(b._preventLookup=!0),b._isPointerDown=!1,b.close())}_formatValue(a){const b=this,c=b._getRGBA(a);switch(b.valueFormat){case"hex":a=b._rgbArrayToHEX([c.r,c.g,c.b,c.a]);break;case"rgb":a="rgb("+c.r+", "+c.g+", "+c.b+")";break;case"rgba":a=null!==c.r&&null!==c.g&&null!==c.b?"rgba("+c.r+", "+c.g+", "+c.b+", "+c.a+")":null;}return a||null}_getRGBA(a){const b=this,c=a||b.value;let d=1;c&&(b._isRGBA(c)&&/rgba\((\d*.\d+|\d+),(\d*.\d+|\d+),(\d*.\d+|\d+)\,(\d*.\d+|\d+)\)/gi.test(c.replace(/\s/g,""))?d=/rgba\((\d*.\d+|\d+),(\d*.\d+|\d+),(\d*.\d+|\d+)\,(\d*.\d+|\d+)\)/gi.exec(c.replace(/\s/g,""))[4]:b._isHEX(a)&&/(^#[0-9A-F]{8}$)/gi.test(a.replace(/\s/g,""))&&(d=parseInt(/(^#[0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2}$)/gi.exec(a.replace(/\s/g,""))[4],16)/255),d=Math.min(1,Math.max(0,parseFloat(d))),isNaN(d)&&(d=1)),a=b._HSVtoRGBA(b._colorToHSV(c),d);const e=/rgba\((\d*.\d+|\d+),(\d*.\d+|\d+),(\d*.\d+|\d+)\,(\d*.\d+|\d+)\)/gi.exec(a.replace(/\s/g,""));return{r:parseInt(e[1]),g:parseInt(e[2]),b:parseInt(e[3]),a:parseFloat(e[4])}}_colorToHSV(a){var c=Math.min,d=Math.max;const e=this;if(!e._isValidColor(a))return;a=e._toRGBA(a).replace(/\s/g,"");const f=/rgba\((\d*.\d+|\d+),(\d*.\d+|\d+),(\d*.\d+|\d+)\,(\d*.\d+|\d+)\)/gi.exec(a),h=c(255,d(0,parseFloat(f[1])))/255,i=c(255,d(0,parseFloat(f[2])))/255,g=c(255,d(0,parseFloat(f[3])))/255;let b={h:0,s:0,v:0},j=0,k=0;if(h>=i&&h>=g?(k=h,j=i>g?g:i):i>=g&&i>=h?(k=i,j=h>g?g:h):(k=g,j=i>h?h:i),b.v=k,b.s=k?(k-j)/k:0,!b.s)b.h=0;else{const a=k-j;b.h=h==k?(i-g)/a:i==k?2+(g-h)/a:4+(h-i)/a,b.h*=60,0>b.h&&(b.h+=360)}return b.s=parseFloat(b.s),b.v=parseFloat(b.v),b}_rgbArrayToHEX(a){let b="#";if(Array.isArray(a)&&null===a[0])return null;for(let c,d=0;3>d;d++)c=parseInt(a[d]).toString(16).toUpperCase(),c=1===c.length?0+c:c,b+=c;let c=parseFloat(a[3]);return isNaN(c)||(c=parseInt(255*c).toString(16).toUpperCase(),"FF"!==c&&(b=b.slice(0,7)+(1===c.length?0+c:c))),b}_HSVtoRGBA(c,d){var a=Math.round;c=c||{h:0,s:0,v:0};const e=this,f=c.h,h=c.s,i=c.v;let j,k,l,n=i*h,o=f/60,p=n*(1-Math.abs(o%2-1));0<=o&&1>=o?[j,k,l]=[n,p,0]:1<=o&&2>=o?[j,k,l]=[p,n,0]:2<=o&&3>=o?[j,k,l]=[0,n,p]:3<=o&&4>=o?[j,k,l]=[0,p,n]:4<=o&&5>=o?[j,k,l]=[p,0,n]:5<=o&&6>=o&&([j,k,l]=[n,0,p]);const q=i-n,m=a(255*(j+q)),r=a(255*(k+q)),g=a(255*(l+q));return"rgba("+m+", "+r+", "+g+", "+(d===void 0?e._getRGBA().a||0:d)+")"}_toRGBA(a,c){function b(d){const e=/^#(.)(.)(.)$/gi.exec(d),f=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(d),h=e?parseInt(e[1]+e[1],16):parseInt(f[1],16),i=e?parseInt(e[2]+e[2],16):parseInt(f[2],16),g=e?parseInt(e[3]+e[3],16):parseInt(f[3],16),b=e?parseInt(e[4]+e[4],16):parseInt(f[4],16);return c?"rgba("+h+", "+i+", "+g+", 1)":"rgba("+h+", "+i+", "+g+", "+(isNaN(b)?"1":b/255)+")"}const d=this;let e=d.value;if(d._isRGBA(a)){if(c){let b=a.match(/(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})/gi);return"rgba("+b+", 1)"}return a}if(d._isValidColorName(a))e=b(d._cssColorNamesHEX[a.trim().toLowerCase()]);else if(d._isHEX(a))e=b(a);else if(d._isRGB(a))e=a.toLowerCase(),e=e.replace("rgb","rgba"),e=e.replace(")",", 1)");else return!1;return e}_isHEX(a){return /(^#[0-9A-F]{3}$)|(^#[0-9A-F]{6}$)|(^#[0-9A-F]{8}$)/i.test(a)}_isRGB(a){return /rgb\((\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\)/i.test(a)}_isValidColorName(a){return!!(a&&"undefined"!=typeof this._cssColorNamesHEX[a.trim().toLowerCase()])}_isRGBA(a){return /rgba\((\d*.\d+|\d+)\s*,\s*(\d*.\d+|\d+)\s*,\s*(\d*.\d+|\d+)\s*,\s*(\d*.\d+|\d+)\)/i.test(a)}_isValidColor(a){return this._isHEX(a)||this._isRGB(a)||this._isRGBA(a)||this._isValidColorName(a)}_performSelect(){const a=this,b=a.$.menu.querySelector(".selected")||a.$.menu.querySelector(".color-sample"),c=b.getAttribute("data-label"),d=b.getAttribute("value"),e=a.value,f=a.$.input.dataValue;a.value=a.$.colorSample.style.backgroundColor=a._formatValue(c),a.$.input.dataValue=d,a.value?(a.$colorSampleContainer.removeClass("no-color"),a.$.colorSample.setAttribute("aria-label",a.value)):(a.$colorSampleContainer.addClass("no-color"),a.$.colorSample.setAttribute("aria-label","No color")),b.classList.add("selected"),b.setAttribute("aria-current",!0),(c!==e||d!==f)&&a.$.fireEvent("change",{value:d,label:c,oldValue:f,oldLabel:e}),a.close()}_process(a){const b=this;if(a||(a=[]),a=a.slice(0),"string"==typeof a&&(a=b.$.deserialize(a,"array")),b.matcher)a=a.filter(a=>-1<b.matcher(a));else if(b.query){let c=[];for(let a in b._cssColorNamesHEX)-1<b._matcher(a,!0)&&c.push(b._cssColorNamesHEX[a]);if(c.length)a=c;else if(!a.length&&(null===b.dataSource||void 0===b.dataSource)){let c=b._generateColors();"default"===b.displayMode&&(c=[].concat.apply([],c.map(a=>Object.values(a)[0]))),a=c.filter(a=>-1<b._matcher(a))}else a=a.filter(a=>-1<b._matcher(a))}a=b._sorter(a),!a.length&&b.opened&&b.close(),(!(0<b.query.length)||a.length)&&(a.length||null===b.dataSource||void 0===b.dataSource)&&(0<b.query.length?b._render(a.slice(0,b.items)):b._render(a),b._open(),b._refreshMenu(),b.ensureVisible())}_matcher(a,b){const c=this,d=c.query;if(a=b?a.label||a:c._formatValue(a.label||a),!d)return-1;switch(c.queryMode){case"startsWith":return a.startsWith(d);case"startsWithIgnoreCase":return a.toLowerCase().startsWith(d.toLowerCase());case"doesNotContain":return 0>a.indexOf(d);case"doesNotContainIgnoreCase":return 0>a.toLowerCase().indexOf(d.toLowerCase());case"contains":return-1<a.indexOf(d);default:case"containsIgnoreCase":return a.toLowerCase().indexOf(d.toLowerCase());case"equals":return 0===a.localeCompare(d);case"equalsIgnoreCase":return 0===a.toLowerCase().localeCompare(d.toLowerCase());case"endsWith":return a.endsWith(d);case"endsWithIgnoreCase":return a.toLowerCase().endsWith(d.toLowerCase());}}_render(a){const b=this;if(b.$.menu.innerHTML="",a.length)b.$.menu.appendChild(b._createColorGroup(b._createColorSamples(a)));else if((null===b.dataSource||void 0===b.dataSource)&&!b.query.length)if(a=b._generateColors(),"default"===b.displayMode){const a=b._generateColors();for(let c=0;c<a.length;c++){const d=Object.keys(a[c])[0],e=Object.values(a[c])[0],f=document.createElement("div");f.classList.add("standard-colors-label"),f.innerHTML=b.localize(d),f.id=b.id+d+"Label",b.$.menu.appendChild(f),b.$.menu.appendChild(b._createColorGroup(b._createColorSamples(e),d+"Label"))}}else b.$.menu.appendChild(b._createColorGroup(b._createColorSamples(a)))}_createColorGroup(a,b){function c(){const a=d.$.menu.getElementsByClassName("selected");a[0]&&(a[0].removeAttribute("aria-current"),a[0].classList.remove("selected")),this.classList.add("selected"),this.setAttribute("aria-current",!0),d._setActiveDescendant(this)}const d=this,e=document.createElement("div");e.classList.add("grid-samples-container"),e.setAttribute("role","menu"),b&&e.setAttribute("aria-labelledby",d.id+b);for(let f=0;f<a.length;f++){const b=a[f];e.appendChild(b),b.onmouseenter=c,b.onclick=c,b.onmouseleave=function(){this.removeAttribute("aria-current"),this.classList.remove("selected"),d._setActiveDescendant(null)}}return e}_createColorSamples(a){const b=this;let c=[];for(let d=0;d<a.length;d++){const e=a[d];let f=e,g=e;"object"==typeof e&&(f=e.label,g=e.value||f);const h=document.createElement("div");h.id=b.id+"Item"+Math.floor(65536*(1+Math.random())).toString(16).substring(1),h.setAttribute("data-label",f),h.setAttribute("value",g),h.setAttribute("role","menuitem"),h.setAttribute("aria-label",f),h.classList.add("color-sample"),h.style.backgroundColor=f,"rgba(255, 255, 255, 0)"===f||"#FFFFFF00"===f||"transparent"===f?h.setAttribute("transparent",""):h.removeAttribute("transparent"),c.push(h)}return 0<c.length&&!b.$.menu.querySelector(".selected")&&(c[0].classList.add("selected"),c[0].setAttribute("aria-current",!0),b._setActiveDescendant(c[0])),c}ensureVisible(){const a=this,b=a.$.menu.querySelector(".color-sample.selected")}_next(){const a=this,b=a.$.menu.querySelector(".color-sample.selected");if(!b){const b=a.$.menu.querySelector(".color-sample");return b.classList.add("selected"),b.setAttribute("aria-current",!0),void a._setActiveDescendant(b)}b.removeAttribute("aria-current"),b.classList.remove("selected");let c=b.nextElementSibling;if(!c){for(let a=b.parentElement.nextElementSibling;a;)if(a.classList.contains("grid-samples-container")){c=a.children[0];break}else a=a.nextElementSibling;c||(c=a.$.menu.querySelector(".color-sample"))}c.classList.add("selected"),c.setAttribute("aria-current",!0),a._setActiveDescendant(c),a.ensureVisible()}_prev(){const a=this,b=a.$.menu.querySelector(".color-sample.selected");if(!b){const b=a.$.menu.querySelector(".color-sample");return b.classList.add("selected"),b.setAttribute("aria-current",!0),void a._setActiveDescendant(b)}b.removeAttribute("aria-current"),b.classList.remove("selected");let c=b.previousElementSibling;if(!c){for(let a=b.parentElement.previousElementSibling;a;)if(a.classList.contains("grid-samples-container")){c=a.children[a.children.length-1];break}else a=a.previousElementSibling;c||(c=a.$.menu.querySelector(".grid-samples-container:last-of-type .color-sample:last-of-type"))}c.classList.add("selected"),c.setAttribute("aria-current",!0),a._setActiveDescendant(c),a.ensureVisible()}_move(a){const b=this;if(b.opened){switch(a.keyCode){case 9:case 13:case 27:a.preventDefault();break;case 37:case 38:a.preventDefault(),b[b.rightToLeft?"_next":"_prev"]();break;case 39:case 40:a.preventDefault(),b[b.rightToLeft?"_prev":"_next"]();}a.stopPropagation()}}_keyDownHandler(a){const b=this;return b._suppressKeyPressRepeat=![37,38,39,40,9,13,27,16,17,18].includes(a.keyCode),a.shiftKey||a.ctrlKey?void 0:a.altKey?void("ArrowUp"===a.key?b.close():"ArrowDown"===a.key&&b.open()):void b._move(a)}_keyUpHandler(a){const b=this;if(!(a.shiftKey||a.altKey||a.ctrlKey))switch(a.keyCode){case 40:case 39:case 38:case 37:case 16:case 17:case 18:40===a.keyCode&&a.altKey&&b.open(),38===a.keyCode&&a.altKey&&b.close();break;case 9:case 13:if(!b.opened)return;b._performSelect(),a.stopPropagation(),a.preventDefault();break;case 27:if(!b.opened)return;b.close(),a.stopPropagation(),a.preventDefault();break;default:b._lookup(a),!b.opened||a.ctrlKey||a.shiftKey||(a.stopPropagation(),a.preventDefault()),b.$.input.dataValue=b.$.input.value,b._isValidColor(b.value)||(b.$colorSampleContainer.addClass("no-color"),b.$.colorSample.setAttribute("aria-label","No color"),b.$.colorSample.style.backgroundColor="");}}propertyChangedHandler(a,b,c){super.propertyChangedHandler(a,b,c);const d=this;if("dropDownHeight"===a)d.$.scrollView.style.setProperty("--smart-input-drop-down-menu-height",d.dropDownHeight+"px");else if("opened"===a)d.opened=b,c?d.open():d.close();else if(!("placeholder"===a))"readonly"===a?d._setAriaRelations():"theme"===a?d.$.scrollView.setAttribute(a,c):"rightToLeft"===a?c?d.$.scrollView.setAttribute("right-to-left",""):d.$.scrollView.removeAttribute("right-to-left"):"valueFormat"===a?(d.value=d._formatValue(d.value),d.$.input.dataValue=d.value):"displayMode"===a?d.open():"value"===a&&d.set("value",d.$.input.dataValue=d.$.colorSample.style.backgroundColor=d._formatValue(c));else if(d.readonly){const a=d.getAttribute("aria-label");if(a&&a!==b)return;c?d.setAttribute("aria-label",c):d.removeAttribute("aria-label")}}_createElement(){const a=this,b=document.createElement("div"),c=document.createElement("div");c.classList.add("smart-color-input-drop-down-menu","smart-color-panel"),a.$.scrollView=c,a.rightToLeft?a.$.scrollView.setAttribute("right-to-left",""):a.$.scrollView.removeAttribute("right-to-left"),a.$.menu=b,a.$.menu.classList.add("default-samples-container","grid-mode-container","smart-container"),a.$.scrollView.onclick=function(b){b.stopPropagation(),b.preventDefault(),a._performSelect(),a.$.input.focus()},a.classList.add("smart-drop-down-box","smart-color-picker"),a.value?(a.$colorSampleContainer.removeClass("no-color"),a.$.colorSample.setAttribute("aria-label",a.value)):(a.$colorSampleContainer.addClass("no-color"),a.$.colorSample.setAttribute("aria-label","No color")),a._cssColorNamesHEX={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",hotpink:"#ff69b4","indianred ":"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgrey:"#d3d3d3",lightgreen:"#90ee90",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370d8",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#d87093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"}}_setAriaRelations(){const a=this,b=a.getAttribute("aria-label");a.readonly?(a.setAttribute("role","button"),!b&&a.placeholder&&a.setAttribute("aria-label",a.placeholder),a.$.input.setAttribute("aria-hidden",!0),a.$.input.removeAttribute("aria-activedescendant"),a.$.input.removeAttribute("aria-controls"),a.$.dropDownButton.setAttribute("aria-hidden",!0)):(a.setAttribute("role","combobox"),b&&b===a.placeholder&&a.removeAttribute("aria-label"),a.$.input.setAttribute("role","searchbox"),a.$.input.removeAttribute("aria-hidden",!0),a.$.dropDownButton.removeAttribute("aria-hidden")),a.setAttribute("aria-expanded",a.opened),a.setAttribute("aria-haspopup","listbox"),a.$.scrollView.setAttribute("role","listbox")}});