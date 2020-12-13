
/* Smart UI v7.0.0 (2020-Mar)
Copyright (c) 2011-2020 jQWidgets. 
License: https://htmlelements.com/license/ */

Smart("smart-accordion-item",class extends Smart.ContentElement{static get properties(){return{dragged:{value:!1,type:"boolean"},expanded:{value:!1,type:"boolean"},focused:{value:!1,type:"boolean"},index:{value:null,type:"number?"},label:{value:"",type:"string"}}}get enableShadowDOM(){return!1}static get listeners(){return{"accordionItemHeader.mouseenter":"_headerMouseEnterHandler","accordionItemHeader.mouseleave":"_headerMouseLeaveHandler","accordionItemHeader.down":"_ripple"}}template(){return`<div id="container" role="presentation">
                    <div id="accordionItemHeader" class="smart-accordion-item-header smart-unselectable" role="heading" aria-level="1">
                        <span id="arrow" class="smart-arrow" role="presentation" aria-hidden="true"></span>
                        <span id="label" class="smart-label" inner-h-t-m-l='[[label]]' role="button"></span>
                    </div>
                    <div id="accordionItemContent" class="smart-accordion-item-content">
                        <div id="contentContainer" class="smart-content-container" role="presentation"><content></content></div>
                    </div>
                </div>`}render(){var a=Math.floor;const b=this;let c;c=b.id?b.id+"Content":b.parentElement&&b.parentElement.parentElement&&b.parentElement.parentElement.id?b.parentElement.parentElement.id+a(1e4*Math.random())+"Content":"accordion"+a(1e4*Math.random())+"Content",b.$.accordionItemContent.id=c,b.$.label.setAttribute("aria-controls",c),super.render()}propertyChangedHandler(a,b,c){super.propertyChangedHandler(a,b,c);const d=this;if("expanded"===a){d.$.label.setAttribute("aria-expanded",c);const a=d.parentElement&&d.parentElement.parentElement?d.parentElement.parentElement.expandMode:d.shadowParent.expandMode;return"multiple"===a||"toggle"===a?void 0:void(c?d.$.label.setAttribute("aria-disabled",!0):d.$.label.removeAttribute("aria-disabled"))}if(b=parseInt(b),c=parseInt(c),!("index"!==a||isNaN(b)||isNaN(c))){const a=d.parentElement.parentElement._items.length;0>c?c=0:c>=a&&(c=a-1),c!==b&&d.$.fireEvent("indexChange",{newIndex:c,oldIndex:b}),d.index=c}}_headerMouseEnterHandler(){const a=this;a.disabled||a.setAttribute("hover","")}_headerMouseLeaveHandler(){const a=this;a.disabled||a.removeAttribute("hover")}_ripple(a){const b=this;b.disabled||b.hasRippleAnimation&&Smart.Utilities.Animation.Ripple.animate(b.$.container,a.pageX,a.pageY)}_setIndex(a){const b=this,c=b.context;b.context=b,b.index=a,b.context=c}focus(){const a=this;super.focus(),a.setAttribute("focus","")}blur(){const a=this;super.blur(),a.removeAttribute("focus")}}),Smart("smart-accordion",class extends Smart.BaseElement{static get properties(){return{expandedIndexes:{value:[],type:"array"},expandMode:{allowedValues:["single","singleFitHeight","multiple","toggle","none"],value:"singleFitHeight",type:"string"},messages:{extend:!0,value:{en:{accordionItemRequired:"{{elementType}}: \"{{method}}\" requires an item from type \"smart-accordion-item\".",indexOutOfBound:"{{elementType}}: Out of bound index/indexes in \"{{method}}\" method.",invalidSettings:"{{elementType}}: \"{{method}}\" method accepts a string or an object as it's second parameter.",missingReference:"{{elementType}}: Missing reference to {{files}}.",noItems:"{{elementType}}: No child elements found.",overridingProperties:"{{elementType}}: Overriding properties {{property1}} and {{property2}} applied. The \"{{property1}}\" property is used by default."}},type:"object"},reorder:{value:!1,type:"boolean"}}}static get listeners(){return{down:"_downHandler",focus:"_focusHandler",indexChange:"_indexChangeHandler",keydown:"_keyDownHandler",move:"_moveHandler",resize:"_resizeHandler",styleChanged:"_resizeHandler","document.up":"_upHandler","container.move":"_containerMoveHandler"}}template(){return`<div id="container" role="presentation">
                    <content></content>
                </div>`}static get styleUrls(){return["smart.accordion.css"]}ready(){super.ready()}render(){const a=this;a._createElement(),super.render()}propertyChangedHandler(a,b,c){function d(){e._toggleItems("expand",[0]),e.expandedIndexes=[0]}const e=this;if("expandedIndexes"===a){if(b.toString()===c.toString())return;let a=[];if(0<e._items.length)for(let b,d=0;d<c.length;d++)if(b=parseInt(c[d]),!isNaN(b))if(e._expandModeIs(["single","singleFitHeight","toggle"])){1>a.length&&0<=b&&b<e._items.length&&a.push(b);break}else 0<=b&&b<=e._items.length&&-1===a.indexOf(b)&&a.push(b);if(0===a.length&&e._expandModeIs(["single","singleFitHeight"]))return c=b.slice(),void(e.expandedIndexes=c);c=a;const d=e._compareExpandedIndexes(b,c);return e._toggleItems("collapse",d.collapse),e._toggleItems("expand",d.expand),void(e.expandedIndexes=c)}switch(super.propertyChangedHandler(a,b,c),a){case"disabled":e._setFocusable(),e._enableDisableHandler();break;case"expandMode":if(0===e._items.length)break;if("multiple"===b&&"none"!==c||"none"===b&&"multiple"!==c){const a=e.expandedIndexes.slice(1);e._toggleItems("collapse",a),0===e.expandedIndexes.length&&e._expandModeIs(["single","singleFitHeight"])&&d()}else"toggle"===b&&e._expandModeIs(["single","singleFitHeight"])&&0===e.expandedIndexes.length&&d();if(!e._supportCSSVariables||!e._usedCSSVariables){const a=e.expandedIndexes[0];"singleFitHeight"===b?e._items[a].$.accordionItemContent.style.height="":"singleFitHeight"===c&&(e._items[a].$.accordionItemContent.style.height=e._expandedItemsContainerHeight-1+"px")}"multiple"===c||"toggle"===c?e._items[e.expandedIndexes[0]].$.label.removeAttribute("aria-disabled"):e._items[e.expandedIndexes[0]].$.label.setAttribute("aria-disabled",!0);break;case"unfocusable":e._setFocusable();break;default:}}appendChild(a){const b=this;if(!b.isCompleted||a instanceof HTMLElement&&(a.classList.contains("smart-resize-trigger-container")||a.classList.contains("smart-measure-element"))){const a=Array.prototype.slice.call(arguments,2);return HTMLElement.prototype.appendChild.apply(b,a.concat(Array.prototype.slice.call(arguments)))}a instanceof Smart.AccordionItem||b.error(b.localize("accordionItemRequired",{method:"appendChild"})),b.insert(b._items.length,a)}collapse(a,b){const c=this;if(a=c._validateItemsIndex(a,"collapse"),!isNaN(a)){const d=c._items[a].expanded;!d||c._expandModeIs(["single","singleFitHeight"])&&-1<c.expandedIndexes.indexOf(a)||c._collapseItem(a,b)}}expand(a,b){const c=this;if(a=c._validateItemsIndex(a,"expand"),!isNaN(a)){const d=c._items[a].expanded;d||(c._expandModeIs(["single","singleFitHeight","toggle"])&&c._toggleItems("collapse",c.expandedIndexes),c._expandItem(a,b))}}insert(a,b){const c=this,d=0===c._items.length;let e,f;if(b||("number"==typeof a?b=[{label:"",content:""}]:(b=[{label:a?a.toString():"",content:a?a.toString():""}],a=0)),b instanceof HTMLElement)b instanceof Smart.AccordionItem?e=b:c.error(c.localize("accordionItemRequired",{method:"insert"}));else if(Array.isArray(b)){f=document.createDocumentFragment();for(let a=0;a<b.length;a++){const d=c._createItem(b[a]);f.appendChild(d)}}else e=b instanceof Object?c._createItem(b):"string"==typeof b||"number"==typeof b?c._createItem({label:b.toString(),content:b.toString()}):c._createItem({label:"",content:""});a>c._items.length?e?c.$.container.appendChild(e):c.$.container.appendChild(f):e?c.$.container.insertBefore(e,c._items[a]):c.$.container.insertBefore(f,c._items[a]),e&&(e.tabIndex=c._tabIndex),c._storeItems(),d&&c._expandModeIs(["single","singleFitHeight"])?c._expandItem(0):c.expandedIndexes=c._getExpandedIndexes(),c._updateExpanedContentHeight(),c._updateInlineHeight(),c._storeItemsCoordinates(),c._updateItemsIndexProperty()}insertBefore(a,b){const c=this;if(!c.isCompleted){const a=Array.prototype.slice.call(arguments,2);return HTMLElement.prototype.insertBefore.apply(c,a.concat(Array.prototype.slice.call(arguments)))}a!==void 0&&b!==void 0&&a instanceof Smart.AccordionItem&&b instanceof Smart.AccordionItem||c.error(c.localize("accordionItemRequired",{method:"insertBefore"})),b!==void 0&&null!==b?(!c.contains(b)&&c.error(c.localize("referenceNodeNotChild",{argument:"referenceNode"})),c.insert(c._items.indexOf(b),a)):c.insert(c._items.indexOf(b),a)}remove(a){const b=this;let c;if(a instanceof HTMLElement)a instanceof Smart.AccordionItem?!b.contains(a)&&b.error(b.localize("referenceNodeNotChild",{argument:"node"})):b.error(b.localize("accordionItemRequired",{method:"remove"})),c=a,a=c.index;else{if(a=b._validateItemsIndex(a,"remove"),isNaN(a))return;c=b._items[a]}c&&(c.parentNode.removeChild(c),b._storeItems(),b._expandModeIs(["singleFitHeight"])&&(b._preventAnimation=!0),b._expandModeIs(["single","singleFitHeight"])&&a===b.expandedIndexes[0]&&0<b._items.length&&(b._expandItem(0),b._selectedItem=b._items[0],b._selectedItemIndex=0,b._itemIsFocussed=!0),b.expandedIndexes=b._getExpandedIndexes(),b._updateExpanedContentHeight(),b._updateInlineHeight(),b._storeItemsCoordinates(),b._updateItemsIndexProperty())}removeChild(a){const b=this;if(!b.isCompleted){const a=Array.prototype.slice.call(arguments,2);return HTMLElement.prototype.removeChild.apply(b,a.concat(Array.prototype.slice.call(arguments)))}return(a instanceof HTMLElement||b.error(b.localize("accordionItemRequired",{method:"removeChild"})),"smart-resize-trigger-container"===a.className)?void super.removeChild(a):void(a instanceof Smart.AccordionItem||b.error(b.localize("accordionItemRequired",{method:"removeChild"})),b.contains(a)||b.error(b.localize("referenceNodeNotChild",{argument:"node"})),b.remove(a))}_setFocusable(){const a=this;if(a.disabled||a.unfocusable){a.removeAttribute("tabindex");for(let b=0;b<a._items.length;b++)a._items[b].removeAttribute("tabindex");return}a.tabIndex=a._tabIndex;for(let b=0;b<a._items.length;b++)a._items[b].tabIndex=a._tabIndex}update(a,b){const c=this;if(a=c._validateItemsIndex(a,"update"),!isNaN(a)){let d=c._items[a];if(b||c.error(c.localize("invalidSettings",{elementType:c.nodeName.toLowerCase(),method:"update"})),d)if(Array.isArray(b)&&(0===b.length?b={label:"",content:""}:b=b[0]),"string"==typeof b)d.content=b;else for(let a in b)d[a]=b[a];const e=c._getItemsHeights(a);c._updateExpanedContentLocalHeight(c._items[a],e),c._updateInlineHeight(),c._storeItemsCoordinates()}}_adjustHeightValue(a){const b=this,c=b._items.length;let d,e;for(let f=0;f<c&&(b._items[f].expanded?d=b._items[f]:e=b._items[f],!(d&&e));f++);if(d||(d=b._items[0]),d||e){const b=d.expanded;d.expanded=!0;const f=window.getComputedStyle(d,null),g=!!e&&window.getComputedStyle(e,null),h=parseInt(f.getPropertyValue("margin-top"))+parseInt(f.getPropertyValue("margin-bottom")),i=g?parseInt(g.getPropertyValue("margin-top"))+parseInt(g.getPropertyValue("margin-bottom")):0;return d.expanded=b,a-((c-1)*i+h)}}_collapseItem(a,b){const c=this;let d=c._items[a];if(d.expanded&&!("none"===c.expandMode&&b)){if(d.expanded=!1,c.$.fireEvent("collapsing",{index:a,label:d.label,content:d.content.innerHTML}),-1<c.expandedIndexes.indexOf(a)){let b=c.expandedIndexes.indexOf(a),d=c.expandedIndexes.slice();d.splice(b,1),c.expandedIndexes=d}d.$.accordionItemContent.style.height="",c._handleAnimationsDuration(d,a,"collapse")}}_compareExpandedIndexes(a,b){let c=[],d=[],e=[],f=a.length,g=b.length;for(let e=0;e<f;e++)-1===b.indexOf(a[e])?-1===c.indexOf(a[e])&&c.push(a[e]):-1===d.indexOf(a[e])&&d.push(a[e]);for(let c=0;c<g;c++)-1===d.indexOf(b[c])&&e.push(b[c]);return{collapse:c,expand:e}}_createElement(){const a=this;a._reorderItemsByIndex(),a._usedCSSVariables=!!window.getComputedStyle(a.$.container).getPropertyValue("--smart-accordion-animation-duration"),a._supportCSSVariables=Smart.Utilities.Core.CSSVariablesSupport(),a._storeItems(),a._enableDisableHandler(),a._expandedIndexesHandler(),a._updateExpanedContentHeight(),a._tabIndex=0>=a.tabIndex?0:a.tabIndex,a._setFocusable(),a._updateItemsIndexProperty(),a._updateInlineHeight();for(let b=0;b<a._items.length;b++)a._items[b].setAttribute("part","smart-accordion-item"),a._items[b].$.arrow.classList.add("smart-animate-trigger")}_createItem(a){const b=this,c=document.createElement("smart-accordion-item");if(a)return(c.disabled=b.disabled,-1<b._tabIndex&&(c.tabIndex=b._tabIndex),"string"==typeof a||"number"==typeof a)?(c.label=a+"",c.content=a+"",c):(c.label=a.label||"",c.content=a.content||"",c)}_downHandler(a){const b=this;if(b.disabled||b.readonly||"none"===b.expandMode||b._toggled)return;const c=b.enableShadowDOM&&b.shadowRoot?b.shadowRoot.elementFromPoint(a.pageX-window.pageXOffset,a.pageY-window.pageYOffset):a.originalEvent.target,d=c.closest(".smart-accordion-item-header"),e=c.closest("smart-accordion-item");return d?void(b._pointerPosition=a.pageY-window.pageYOffset,b._selectedItem=e,b._itemIsPressed=b._itemIsFocussed=!0,b._reorderedIndex=b._selectedItemIndex=b._items.indexOf(e),b._storeItemsCoordinates()):void(e&&(e.focused=!0))}_enableDisableHandler(){const a=this;if(a.disabled)for(let b=0;b<a._items.length;b++)a._items[b].disabled=!0;else for(let b=0;b<a._items.length;b++)a._items[b].disabled=!1}_expandedIndexesHandler(){const a=this;let b=a._getExpandedIndexes("initial"),c=b.length,d=a.expandedIndexes.length;if(0===a._items.length)return void(a._animationAfterInitialization=!0);if(0===d&&0<c&&(a.expandedIndexes=b,d=c),a._expandModeIs(["multiple","none"])||1===d)return a._toggleItems("expand",a.expandedIndexes),void(a._animationAfterInitialization=!0);switch(a.expandMode){case"single":case"singleFitHeight":0===d?a._toggleItems("expand",[0]):1<d&&(a._toggleItems("collapse",a.expandedIndexes.splice(0,1)),a._toggleItems("expand",a.expandedIndexes));break;case"toggle":1<d&&(a._toggleItems("collapse",a.expandedIndexes.splice(0,1)),a._toggleItems("expand",a.expandedIndexes));break;default:}a._animationAfterInitialization=!0}_expandItem(a,b){const c=this;let d=c._items[a];if(!(d.expanded||"none"===c.expandMode&&b)){if(d.$.container.style.getPropertyValue("--smart-accordion-expanded-content-local-height")||(d.expanded=!0,d.$.container.style.setProperty("--smart-accordion-expanded-content-local-height",d.$.accordionItemContent.scrollHeight+"px"),d.expanded=!1),d.expanded=!0,c.$.fireEvent("expanding",{index:a,label:d.label,content:d.content.innerHTML}),-1===c.expandedIndexes.indexOf(a)){let b=c.expandedIndexes.slice();b.push(a),c.expandedIndexes=b}c._supportCSSVariables&&c._usedCSSVariables||"singleFitHeight"!==c.expandMode||(d.$.accordionItemContent.style.height=c._expandedItemsContainerHeight-1+"px"),c._handleAnimationsDuration(d,a,"expand")}}_expandModeIs(a){const b=this;return-1<a.indexOf(b.expandMode)}_focusHandler(){const a=this;a.disabled||0===a._items.length||(a._itemIsFocussed?a._selectedItem.focused=!1:a._items[0].focused=!1)}_getExpandedIndexes(a){const b=this,c=[];for(let d=0;d<b._items.length;d++)"initial"===a?b._items[d].hasAttribute("expanded")&&(c.push(d),b._items[d].removeAttribute("expanded")):b._items[d].expanded&&c.push(d);return c.slice()}_getItemsHeights(a){const b=this,c=b._items,d=c.length;let e=[];if(0!==d){if(!isNaN(a)&&0<=a&&a<d){const b=c[a];let d=0;return b.expanded?d=b.$.accordionItemContent.scrollHeight:(b.expanded=!0,d=b.$.accordionItemContent.scrollHeight,b.expanded=!1),d+"px"}for(let a=0;a<d;a++){const b=c[a];let d=0;b.expanded?d=b.$.accordionItemContent.scrollHeight:(b.expanded=!0,d=b.$.accordionItemContent.scrollHeight,b.expanded=!1),e.push(d+"px")}return b._heightCalcAfterInitialization=!0,e}}_handleAnimationsDuration(a,b,c){const d=this;if(!d._animationAfterInitialization)return;if(1===d._items.length&&"singleFitHeight"===d.expandMode)return void d.$.fireEvent(c,{index:b,label:a.label,content:a.content.innerHTML});if(!1===d.hasAnimation||!d._supportCSSVariables)return void d.$.fireEvent(c,{index:b,label:a.label,content:a.content.innerHTML});if(d._preventAnimation)return d.$.fireEvent(c,{index:b,label:a.label,content:a.content.innerHTML}),void(d._preventAnimation=!1);d._toggled=!0;let e,f=window.getComputedStyle(d).animationDuration;if(-1<f.indexOf("ms"))f=parseFloat(f.substring(0,f.length-2)),e=isNaN(f)||0>f?0:f-50;else if(-1<f.indexOf("s"))f=parseFloat(f.substring(0,f.length-1)),e=isNaN(f)||0>f?0:1e3*f-50;else return void d.$.fireEvent(c,{index:b,label:a.label,content:a.content.innerHTML});a&&(a.$.addClass("smart-toggled-item"),d.$container.addClass("smart-toggling"),setTimeout(function(){a.$.removeClass("smart-toggled-item"),d.$container.removeClass("smart-toggling"),d.$.fireEvent(c,{index:b,label:a.label,content:a.content.innerHTML}),d._toggled=!1},e))}_indexChangeHandler(a){const b=this,c=b._items,d=c.length,e=a.detail;e.newIndex>=d?b.$.container.appendChild(c[e.oldIndex]):e.newIndex>e.oldIndex?b.$.container.insertBefore(c[e.oldIndex],c[e.newIndex+1]):b.$.container.insertBefore(c[e.oldIndex],c[e.newIndex]);let f=b.enableShadowDOM&&b.shadowRoot?b.shadowRoot.querySelectorAll("smart-accordion-item"):b.getElementsByTagName("smart-accordion-item");b._items=Array.from(f),b._updateItemsIndexProperty()}_keyDownHandler(a){function b(a){a===h||isNaN(a)||(g.focused=!1,h=a,g=d._items[h],g.focused=!0)}function c(a){return"up"===a?void(0>h-1?b(0):b(h-1)):void(h+1>i?b(i):b(h+1))}const d=this,e=a.key;if("none"===d.expandMode||d.disabled||d.readonly||d._toggled)return;const f=(d.shadowRoot?d.shadowRoot.activeElement:document.activeElement)||document.activeElement;if(-1===["ArrowLeft","ArrowDown","ArrowRight","ArrowUp","End","Home"," ","Enter","Tab"].indexOf(e)||!(f instanceof Smart.AccordionItem))return;"Tab"!==e&&a.preventDefault();let g,h,j=d._items.length,i=j-1;for(let b,c=0;c<j;c++)b=d._items[c],b.focused&&(g=b,h=c);switch(e){case"Tab":a.shiftKey?c("up"):c("down");break;case"ArrowLeft":d.collapse(h);break;case"ArrowDown":c("down");break;case"ArrowRight":d.expand(h);break;case"ArrowUp":c("up");break;case"End":b(i);break;case"Home":b(0);break;case" ":case"Enter":if(g.expanded)return void d.collapse(h);d.expand(h);break;default:}}_containerMoveHandler(a){"touchmove"===a.originalEvent.type&&a.originalEvent.preventDefault()}_moveHandler(a){var b=Math.abs;const c=this;if(a.stopPropagation(),c._itemIsPressed&&c.reorder&&!c.readonly&&!(2>c._items.length)&&(c.$container.hasClass("smart-reordering")||!(5>b(a.pageY-c._pointerPosition))))if(c._dragStart){if(c.$container.hasClass("smart-reordering")||c.$container.addClass("smart-reordering"),!c._dragging){const b=c._selectedItem;c.$.fireEvent("dragStart",{position:{left:a.pageX,top:a.pageY},target:a.originalEvent.target,index:c._selectedItemIndex,label:b.label,content:b.content.innerHTML}),c._selectedItem.dragged=c._dragging=!0}if(c.hasAnimation){const a=c._selectedItem.querySelector(".smart-ripple");a&&(a.style.height=0)}const d=a.clientY;let e=!1;for(let a=0;a<c._itemsCoordinates.length;a++){const b=c._itemsCoordinates[a];if(d>=b.fromY&&d<=b.toY){e=a;break}}const f=c._items[e];if(!1!==e&&f!==c._selectedItem){if(c._lastReorderedItem&&f===c._lastReorderedItem)return;if(c._lastReorderedItem=f,1<b(c._reorderedIndex-e)){const a=0>c._reorderedIndex-e?-1:1;c._swapItems(c._reorderedIndex,e+a)}return c._swapItems(c._reorderedIndex,e),c._reorderedIndex=e,void c._storeItemsCoordinates()}c._lastReorderedItem=void 0}else c._dragStart=!0}_reorderItemsByIndex(){const a=this;let b=a.enableShadowDOM&&a.shadowRoot?a.shadowRoot.querySelectorAll("smart-accordion-item"):a.getElementsByTagName("smart-accordion-item"),c=Array.from(b),d=!1,e=c.map(function(a){return null===a.index?a.index=0:d=!0,a.index});if(d){const d=c.length;if(!(2>d)){let c=e.slice();if(c.sort(function(c,a){return parseInt(c)-parseInt(a)}),e.toString()!==c.toString())for(let e=0;e<d;e++){let f;for(let a=0;a<d;a++)b[a].index===c[e]&&(f=b[a]);a.$.container.insertBefore(f,b[e])}}}}_resizeHandler(){const a=this;a._updateExpanedContentHeight(),a._updateInlineHeight(),a._storeItemsCoordinates()}_storeItems(){const a=this,b=a.enableShadowDOM&&a.shadowRoot?a.shadowRoot.querySelectorAll("smart-accordion-item"):a.getElementsByTagName("smart-accordion-item");if(a._items=Array.from(b),0===a._items.length)return void a.$container.addClass("smart-empty");a.$container.removeClass("smart-empty");const c=a._getItemsHeights();for(let b=0;b<a._items.length;b++)a._updateExpanedContentLocalHeight(a._items[b],c[b])}_storeItemsCoordinates(){const a=this;if(!a.disabled&&a.reorder){const b=[];for(let c=0;c<a._items.length;c++){const d=a._items[c],e=d.getBoundingClientRect();b.push({fromY:e.top+(window.scrollY||window.pageYOffset),toY:e.bottom+(window.scrollY||window.pageYOffset)})}a._itemsCoordinates=b}}_swapItems(a,b){const c=this,d=Math.min(a,b),e=Math.max(a,b),f=c._items;let g=c.expandedIndexes.slice();if(c._items[a].expanded&&!c._items[b].expanded){const d=g.indexOf(a);g[d]=b,c.expandedIndexes=g.slice()}else if(c._items[b].expanded&&!c._items[a].expanded){const d=g.indexOf(b);g[d]=a,c.expandedIndexes=g.slice()}c.selectedIndex=c.selectedIndex===a?b:a,c.$.container.insertBefore(f[e],f[d]),function(a,b,c){const d=a[c];a[c]=a[b],a[b]=d}(f,a,b),c._items[a].$.removeClass("hovered"),c._reorderedIndex=b}_toggleItems(a,b){const c=this,d=b.length;if(0<d)for(let e=0;e<d;e++)c["_"+a+"Item"](b[e])}_updateExpanedContentHeight(){const a=this;a.$.container.style.setProperty("--smart-accordion-item-header-height","");const b=a._items.length,c=a.$.container.offsetHeight,d=a._items[a.expandedIndexes[0]];let e=0,f=0,g=0,h=0;if(1===b){let b=a._items[0],c=b.expanded;b.expanded=!1,e=b.offsetHeight,f=b.$.accordionItemHeader.offsetHeight,b.expanded=c}else for(;0===e&&h<b;){const b=a._items[h];b instanceof Smart.AccordionItem&&!b.expanded&&(e=b.offsetHeight,f=b.$.accordionItemHeader.offsetHeight),h++}if(1<b&&d instanceof Smart.AccordionItem){const a=d.$.accordionItemHeader.offsetHeight;g=a-f}const j=getComputedStyle(a.$.root),k=e*b;let l=c-k-g-parseFloat(j.paddingBottom)-parseFloat(j.paddingTop);"singleFitHeight"===a.expandMode&&(l=a._adjustHeightValue(l)),l=0<=l?l:0,a.$.container.style.setProperty("--smart-accordion-expanded-content-height",l+"px"),a.$.container.style.setProperty("--smart-accordion-item-header-height",f+"px"),a._expandedItemsContainerHeight=l}_updateExpanedContentLocalHeight(a,b){const c=this;c._supportCSSVariables&&c._usedCSSVariables&&a.$.container.style.setProperty("--smart-accordion-expanded-content-local-height",b)}_updateInlineHeight(){const a=this;a._supportCSSVariables&&a._usedCSSVariables||"singleFitHeight"!==a.expandMode||0===a._items.length||(a._items[a.expandedIndexes[0]].$.accordionItemContent.style.height=a._expandedItemsContainerHeight-1+"px")}_updateItemsIndexProperty(){const a=this;let b=[];for(let c=0;c<a._items.length;c++)a._items[c]._setIndex(c),a._items[c].expanded&&b.push(c);a.expandedIndexes=b.slice()}_upHandler(a){const b=this;if(!(!b._itemIsPressed||b.disabled||b.readonly)){for(let a=0;a<b._items.length;a++)a!==b._selectedItemIndex&&(b._items[a].focused=!1);if(b._selectedItem.focused=!0,!b._dragging)b._selectedItem.expanded?b.collapse(b._selectedItemIndex,!0):b.expand(b._selectedItemIndex,!0);else{const c=b._selectedItem;b.$container.removeClass("smart-reordering"),b.$.fireEvent("dragEnd",{position:{left:a.pageX,top:a.pageY},target:a.originalEvent.target,index:b._selectedItemIndex,label:c.label,content:c.content.innerHTML})}b._reorderedIndex=void 0,b._dragStart=!1,b._dragging=!1,b._itemIsPressed=!1,b._selectedItem.dragged=!1,b._updateItemsIndexProperty()}}_validateItemsIndex(a,b){const c=this;return isNaN(parseInt(a))||0>a||a>c._items.length-1?void c.log(c.localize("indexOutOfBound",{elementType:c.nodeName.toLowerCase(),method:b})):parseInt(a)}});