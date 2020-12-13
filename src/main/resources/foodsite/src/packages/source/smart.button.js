
/* Smart UI v7.0.0 (2020-Mar)
Copyright (c) 2011-2020 jQWidgets. 
License: https://htmlelements.com/license/ */

Smart("smart-button",class extends Smart.ContentElement{static get properties(){return{value:{type:"string"},name:{type:"string"},type:{value:"button",type:"string"},clickMode:{allowedValues:["hover","press","release","pressAndRelease"],type:"string",value:"release"}}}static get styleUrls(){return["smart.button.css"]}template(){return"<button class=\"smart-button\" inner-h-t-m-l='[[innerHTML]]' id='button' type='[[type]]' name='[[name]]' value='[[value]]' disabled='[[disabled]]' role=\"presentation\"></button>"}static get listeners(){return{"button.down":"_downHandler","button.mouseenter":"_mouseEnterHandler","button.mouseleave":"_mouseLeaveHandler","button.touchend":"_touchEndHandler","button.click":"_clickHandler","button.up":"_upHandler",up:"_upHandler","button.focus":"_focusHandler","button.blur":"_blurHandler"}}focus(){const a=this;return a.$.button?void a.$.button.focus():void HTMLElement.prototype.focus.call(a)}blur(){const a=this;return a.$.button?void a.$.button.blur():void HTMLElement.prototype.blur.call(a)}_upHandler(a){const b=this;a.stopPropagation(),b.$.setAttributeValue("active",!1)}_focusHandler(){const a=this;a.$.setAttributeValue("focus",!0)}_blurHandler(){const a=this;a.$.setAttributeValue("focus",!1)}_clickHandler(a){const b=this;("release"!==b.clickMode&&"pressAndRelease"!==b.clickMode||b.readonly)&&(a.preventDefault(),a.stopPropagation())}_downHandler(a){const b=this;if(!b.disabled&&(b.hasRippleAnimation&&Smart.Utilities.Animation.Ripple.animate(b,a.pageX,a.pageY),b.$.setAttributeValue("active",!0),("press"===b.clickMode||"pressAndRelease"===b.clickMode)&&!b.readonly)){const c="buttons"in a?a.buttons:a.which;b.$.fireEvent("click",{buttons:c,clientX:a.clientX,clientY:a.clientY,pageX:a.pageX,pageY:a.pageY,screenX:a.screenX,screenY:a.screenY})}}_mouseEnterHandler(a){const b=this;if(!b.readonly&&(b.$button.setAttributeValue("hover",!0),b.$.setAttributeValue("hover",!0),"hover"===b.clickMode)){const c="buttons"in a?a.buttons:a.which;b.$.fireEvent("click",{buttons:c,clientX:a.clientX,clientY:a.clientY,pageX:a.pageX,pageY:a.pageY,screenX:a.screenX,screenY:a.screenY})}}_touchEndHandler(){const a=this;setTimeout(function(){a.$button.setAttributeValue("hover",!1),a.$.setAttributeValue("hover",!1)},300)}_mouseLeaveHandler(){const a=this;a.$button.setAttributeValue("hover",!1),a.$.setAttributeValue("hover",!1)}propertyChangedHandler(a,b,c){super.propertyChangedHandler(a,b,c);const d=this;"disabled"===a?(d._setFocusable(),d.$button&&d.$button.setAttributeValue("hover",!1),d.$.setAttributeValue("hover",!1),d instanceof Smart.RepeatButton&&d._stopRepeat()):"unfocusable"==a&&d._setFocusable()}_setFocusable(){const a=this,b=a.$.button?a.$.button:a;return a.disabled||a.unfocusable?(b.removeAttribute("tabindex"),void(b.tabIndex=-1)):void(b.tabIndex=0<a.tabIndex?a.tabIndex:0)}ready(){const a=this;super.ready(),a.setAttribute("role","button"),a._setFocusable(),a.enableShadowDOM&&a.$.hiddenInput&&a.appendChild(a.$.hiddenInput)}}),Smart("smart-repeat-button",class extends Smart.Button{static get properties(){return{delay:{value:50,type:"number"},initialDelay:{value:150,type:"number"}}}static get listeners(){return{"button.mousedown":"_startRepeat","button.mouseenter":"_updateInBoundsFlag","button.mouseleave":"_updateInBoundsFlag","document.mouseup":"_stopRepeat"}}_clickHandler(a){const b=this;("release"!==b.clickMode||b.preventDefaultClick||b.readonly||b.disabled)&&(a.preventDefault(),a.stopPropagation(),b.preventDefaultClick=!1)}_updateInBoundsFlag(a){const b=this;b._isPointerInBounds=!0,"mouseleave"===a.type?(b._isPointerInBounds=!1,b.$button.setAttributeValue("hover",!1),b.$.setAttributeValue("hover",!1)):(b.$button.setAttributeValue("hover",!0),b.$.setAttributeValue("hover",!0));const c="buttons"in a?a.buttons:a.which;1!==c&&b._stopRepeat(a)}_startRepeat(a){const b=this;b._initialTimer||b.readonly||(b._initialTimer=setTimeout(function(){b._repeatTimer=setInterval(()=>{if(b._isPointerInBounds){const c="buttons"in a?a.buttons:a.which;b.$.fireEvent("click",{buttons:c,clientX:a.clientX,clientY:a.clientY,pageX:a.pageX,pageY:a.pageY,screenX:a.screenX,screenY:a.screenY}),b.preventDefaultClick=!0}},b.delay)},b.initialDelay))}_stopRepeat(){const a=this;a.readonly||(a.$.setAttributeValue("active",!1),a._repeatTimer&&(clearInterval(a._repeatTimer),a._repeatTimer=null),a._initialTimer&&(clearTimeout(a._initialTimer),a._initialTimer=null))}}),Smart("smart-toggle-button",class extends Smart.Button{static get properties(){return{checked:{value:!1,type:"boolean?"},falseContent:{value:"",reflectToAttribute:!1,type:"string"},indeterminateContent:{value:"",reflectToAttribute:!1,type:"string"},indeterminate:{value:!1,type:"boolean"},trueContent:{value:"",reflectToAttribute:!1,type:"string"},indeterminateTemplate:{value:null,type:"any"},trueTemplate:{value:null,type:"any"},falseTemplate:{value:null,type:"any"},type:{value:"toggle",type:"string",defaultReflectToAttribute:!0,readonly:!0}}}static get listeners(){return{keydown:"_keyHandler",keyup:"_keyHandler",dragstart:"_dragStartHandler","button.click":"_buttonClickHandler","button.mouseenter":"_buttonMouseEnterHandler","button.mouseleave":"_buttonMouseLeaveHandler","document.up":"_documentUpHandler"}}ready(){super.ready(),this._setAriaState()}_setAriaState(){const a=this,b=a.checked;return null===b?void a.setAttribute("aria-pressed","mixed"):void a.setAttribute("aria-pressed",b)}_buttonClickHandler(){}_buttonMouseLeaveHandler(){const a=this;a.removeAttribute("hover")}_buttonMouseEnterHandler(){const a=this;a.setAttribute("hover","");a.disabled||a.readonly||"hover"!==a.clickMode||(a._changeCheckState("pointer"),a.focus(),a._updateHidenInputNameAndValue())}_documentUpHandler(){const a=this;a._pressed&&(a._pressed=!1,a.disabled||a.readonly||"press"===a.clickMode||(a._changeCheckState("pointer"),a.focus(),a._updateHidenInputNameAndValue()))}_downHandler(a){const b=this;b.disabled||b.readonly||(b.hasRippleAnimation&&Smart.Utilities.Animation.Ripple.animate(b,a.pageX,a.pageY),b._pressed=!0,("press"===b.clickMode||"pressAndRelease"===b.clickMode)&&(b._changeCheckState("pointer"),b.$.fireEvent("click"),b._updateHidenInputNameAndValue()),"press"===b.clickMode&&(a.preventDefault(),a.stopPropagation()))}_dragStartHandler(a){a.preventDefault()}_keyHandler(a){const b=this;if(!0!==b.disabled&&!b.readonly&&32===a.keyCode){if("keydown"===a.type)return void a.preventDefault();if("none"===b.switchMode)return;b._changeCheckState("keyboard"),b._updateHidenInputNameAndValue()}}_changeCheckState(a){const b=this;let c=null;null===b.checked?b.checked=!0:(c=b.checked,b.checked=!b.checked),b._handleTextSelection(),b.$.fireEvent("change",{value:b.checked,oldValue:c,changeType:a}),b._setAriaState()}_handleTextSelection(){const a=this;a.$.addClass("smart-unselectable"),a.timer&&clearTimeout(a.timer),a.timer=setTimeout(()=>a.$.removeClass("smart-unselectable"),500)}propertyChangedHandler(a,b,c){super.propertyChangedHandler(a,b,c);const d=this;if("checked"===a)return d.$.fireEvent("change",{value:c,oldValue:b,changeType:"api"}),void d._setAriaState();"trueTemplate"===a?d._handleTemplate(!0):"falseTemplate"===a?d._handleTemplate(!1):"indeterminateTemplate"===a?d._handleTemplate():void 0}_htmlBindOnInitialization(){const a=this;a._bindContentProperty("trueContent","smart-true-content"),a._bindContentProperty("falseContent","smart-false-content"),a._bindContentProperty("indeterminateContent","smart-indeterminate-content")}_bindContentProperty(a,b){const c=this;if(!c.$[a+"Container"])return;let d=document.createElement("div");d.innerHTML=c.innerHTML;let e,f=d.getElementsByClassName(b);if(0<f.length)for(let a=0;a<f.length;a++)e=f[a];""===c[a]&&(c[a]=e===void 0?"":e.outerHTML),c.$[a+"Container"].innerHTML=c[a]}_updateContentProperties(){function a(a){b.$[a+"Container"]&&(b[a]=b.$[a+"Container"].innerHTML)}const b=this;a("trueContent"),a("falseContent"),a("indeterminateContent")}_updateHidenInputValue(){const a=this;if(!a.$.hiddenInput)return;let b;b=null===a.checked?"null":!1===a.checked?"off":a.value||"on",a.$.hiddenInput.setAttribute("value",b)}_updateHidenInputName(){const a=this;if(a.$.hiddenInput){let b=!1===a.checked?"":a.name||"";a.$.hiddenInput.setAttribute("name",b)}}_updateHidenInputNameAndValue(){const a=this;a._updateHidenInputName(),a._updateHidenInputValue()}_handleTemplate(a,b){const c=this;let d,e,f;if(!0===a?(d=c.trueTemplate,e=c.$.trueContentContainer,f=c.trueContent):!1===a?(d=c.falseTemplate,e=c.$.falseContentContainer,f=c.falseContent):(d=c.indeterminateTemplate,e=c.$.indeterminateContentContainer,f=c.indeterminateContent),b&&(e.innerHTML=f?f:""),null===d||!d)return;if("function"==typeof d)return void d(e,{value:f});if(!("content"in document.createElement("template")))return void c.error(c.localize("htmlTemplateNotSuported",{elementType:c.nodeName.toLowerCase()}));if(d=document.getElementById(d),null===d||!("content"in d))return void c.error(c.localize("invalidTemplate",{elementType:c.nodeName.toLowerCase(),property:"template"}));const g=d.content,h=g.childNodes.length,j=/{{\w+}}/g;let k,l=[];for(let c=0;c<h;c++)for(k=j.exec(g.childNodes[c].innerHTML);k;)l.push({childNodeIndex:c,bindingString:k[0]}),k=j.exec(g.childNodes[c].innerHTML);const i=l.length;let m,n,o=document.importNode(d.content,!0);for(let c=0;c<i;c++){m=o.childNodes[l[c].childNodeIndex],n=l.length;for(let a=0;a<n;a++)m.innerHTML=m.innerHTML.replace(l[c].bindingString,f)}e.innerHTML="";for(let c=0;c<o.childNodes.length;c++)o.childNodes[c].outerHTML&&(e.innerHTML+=o.childNodes[c].outerHTML)}});