(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21da57"],{d1d8:function(o,t,e){"use strict";e.r(t),e.d(t,"IonImg",function(){return n});var i=e("7018"),n=function(){function o(){var o=this;this.onLoad=function(){o.ionImgDidLoad.emit()},this.onError=function(){o.ionError.emit()}}return o.prototype.srcChanged=function(){this.addIO()},o.prototype.componentDidLoad=function(){this.addIO()},o.prototype.addIO=function(){var o=this;void 0!==this.src&&("IntersectionObserver"in window?(this.removeIO(),this.io=new IntersectionObserver(function(t){t[0].isIntersecting&&(o.load(),o.removeIO())}),this.io.observe(this.el)):setTimeout(function(){return o.load()},200))},o.prototype.load=function(){this.loadError=this.onError,this.loadSrc=this.src,this.ionImgWillLoad.emit()},o.prototype.removeIO=function(){this.io&&(this.io.disconnect(),this.io=void 0)},o.prototype.hostData=function(){var o;return{class:(o={},o[""+this.mode]=!0,o)}},o.prototype.render=function(){return Object(i["b"])("img",{src:this.loadSrc,alt:this.alt,decoding:"async",onLoad:this.onLoad,onError:this.loadError})},Object.defineProperty(o,"is",{get:function(){return"ion-img"},enumerable:!0,configurable:!0}),Object.defineProperty(o,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(o,"properties",{get:function(){return{alt:{type:String,attr:"alt"},el:{elementRef:!0},loadError:{state:!0},loadSrc:{state:!0},src:{type:String,attr:"src",watchCallbacks:["srcChanged"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(o,"events",{get:function(){return[{name:"ionImgWillLoad",method:"ionImgWillLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionImgDidLoad",method:"ionImgDidLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionError",method:"ionError",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(o,"style",{get:function(){return".sc-ion-img-h{-o-object-fit:contain;object-fit:contain}.sc-ion-img-h, img.sc-ion-img{display:block}img.sc-ion-img{width:100%;height:100%;-o-object-fit:inherit;object-fit:inherit;-o-object-position:inherit;object-position:inherit}"},enumerable:!0,configurable:!0}),o}()}}]);
//# sourceMappingURL=chunk-2d21da57.96c65227.js.map