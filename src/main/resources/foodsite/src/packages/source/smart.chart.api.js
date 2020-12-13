
/* Smart UI v7.0.0 (2020-Mar)
Copyright (c) 2011-2020 jQWidgets. 
License: https://htmlelements.com/license/ */

(function(){"use strict";Smart.Chart&&(Smart.Chart.prototype._moduleApi=!0,Smart.Chart.prototype.getItemsCount=function(a,b){const c=this.seriesGroups[a];if(!this._isSerieVisible(a,b))return 0;const d=this._renderData;if(!c||!d||d.length<=a)return 0;const e=c.series[b];return e?d[a].offsets[b].length:0},Smart.Chart.prototype.getXAxisRect=function(a){const b=this._renderData;return!b||b.length<=a?void 0:b[a].xAxis?b[a].xAxis.rect:void 0},Smart.Chart.prototype.getXAxisLabels=function(a){const b=[];let c=this._renderData;if(!c||c.length<=a)return b;if(c=c[a].xAxis,!c)return b;const d=this.seriesGroups[a];if(d.polar||d.spider){for(let a=0;a<c.polarLabels.length;a++){const d=c.polarLabels[a];b.push({offset:{x:d.x,y:d.y},value:d.value})}return b}const e=this._getXAxis(a),f=this.getXAxisRect(a),g="top"===e.position||"right"===e.position,h="horizontal"===d.orientation;for(let d=0;d<c.data.length;d++)h?b.push({offset:{x:f.x+(g?0:f.width),y:f.y+c.data.data[d]},value:c.data.xvalues[d]}):b.push({offset:{x:f.x+c.data.data[d],y:f.y+(g?f.height:0)},value:c.data.xvalues[d]});return b},Smart.Chart.prototype.getValueAxisRect=function(a){const b=this._renderData;return!b||b.length<=a?void 0:b[a].valueAxis?b[a].valueAxis.rect:void 0},Smart.Chart.prototype.getValueAxisLabels=function(a){const b=[];let c=this._renderData;if(!c||c.length<=a)return b;if(c=c[a].valueAxis,!c)return b;const d=this._getValueAxis(a),e="top"===d.position||"right"===d.position,f=this.seriesGroups[a],g="horizontal"===f.orientation;if(f.polar||f.spider){for(let a=0;a<c.polarLabels.length;a++){const d=c.polarLabels[a];b.push({offset:{x:d.x,y:d.y},value:d.value})}return b}for(let d=0;d<c.items.length;d++)g?b.push({offset:{x:c.itemOffsets[c.items[d]].x+c.itemWidth/2,y:c.rect.y+(e?c.rect.height:0)},value:c.items[d]}):b.push({offset:{x:c.rect.x+c.rect.width,y:c.itemOffsets[c.items[d]].y+c.itemWidth/2},value:c.items[d]});return b},Smart.Chart.prototype.getPlotAreaRect=function(){return this._plotRect},Smart.Chart.prototype.getRect=function(){return this._rect},Smart.Chart.prototype.showToolTip=function(a,b,c,d,e){const f=this.getItemCoord(a,b,c);isNaN(f.x)||isNaN(f.y)||this._startTooltipTimer(a,b,c,f.x,f.y,d,e)},Smart.Chart.prototype.hideToolTip=function(a){isNaN(a)&&(a=0);const b=this;b._cancelTooltipTimer(),setTimeout(function(){b._hideToolTip(0)},a)})})();