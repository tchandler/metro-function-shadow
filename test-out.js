var __BUNDLE_START_TIME__=this.nativePerformanceNow?nativePerformanceNow():Date.now(),__DEV__=false,process=this.process||{};process.env=process.env||{};process.env.NODE_ENV=process.env.NODE_ENV||"production";
!(function(t){"use strict";t.__r=i,t.__d=function(t,n,o){if(null!=e[n])return;const i={dependencyMap:o,factory:t,hasError:!1,importedAll:r,importedDefault:r,isInitialized:!1,publicModule:{exports:{}}};e[n]=i},t.__c=o,t.__registerSegment=function(t,e){p[t]=e};var e=o();const r={},n={}.hasOwnProperty;function o(){return e=Object.create(null)}function i(t){const r=t,n=e[r];return n&&n.isInitialized?n.publicModule.exports:d(r,n)}function l(t){const n=t;if(e[n]&&e[n].importedDefault!==r)return e[n].importedDefault;const o=i(n),l=o&&o.__esModule?o.default:o;return e[n].importedDefault=l}function u(t){const o=t;if(e[o]&&e[o].importedAll!==r)return e[o].importedAll;const l=i(o);let u;if(l&&l.__esModule)u=l;else{if(u={},l)for(const t in l)n.call(l,t)&&(u[t]=l[t]);u.default=l}return e[o].importedAll=u}i.importDefault=l,i.importAll=u;let c=!1;function d(e,r){if(!c&&t.ErrorUtils){let n;c=!0;try{n=m(e,r)}catch(e){t.ErrorUtils.reportFatalError(e)}return c=!1,n}return m(e,r)}const s=16,a=65535;function f(t){return{segmentId:t>>>s,localId:t&a}}i.unpackModuleId=f,i.packModuleId=function(t){return(t.segmentId<<s)+t.localId};const p=[];function m(r,n){if(!n&&p.length>0){const t=f(r),o=t.segmentId,i=t.localId,l=p[o];null!=l&&(l(i),n=e[r])}const o=t.nativeRequire;if(!n&&o){const t=f(r),i=t.segmentId;o(t.localId,i),n=e[r]}if(!n)throw h(r);if(n.hasError)throw I(r,n.error);n.isInitialized=!0;const c=n,d=c.factory,s=c.dependencyMap;try{const e=n.publicModule;return e.id=r,d(t,i,l,u,e,e.exports,s),n.factory=void 0,n.dependencyMap=void 0,e.exports}catch(t){throw n.hasError=!0,n.error=t,n.isInitialized=!1,n.publicModule.exports=void 0,t}}function h(t){return Error('Requiring unknown module "'+t+'".')}function I(t,e){return Error('Requiring module "'+t+'", which threw an exception: '+e)}})('undefined'!=typeof global?global:'undefined'!=typeof window?window:this);
__d(function(g,r,i,a,m,e,d){"use strict";bar.foo=function(t){return t},m.export={bar:bar}},0,[]);
__r(0);