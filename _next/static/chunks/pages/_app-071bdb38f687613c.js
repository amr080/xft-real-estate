(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2888],{72671:function(t,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return i(35251)}])},38:function(t,e,i){"use strict";i.d(e,{yv:function(){return n}});let n=!0},35251:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return E}});var n=i(52676),s=i(12660),r=i.n(s),a=i(52897),u=i(20822),o=i(27380),l=i(88806),c=i(82069),h=i(94916);class d extends h.F{constructor(t){super(),this.abortSignalConsumed=!1,this.defaultOptions=t.defaultOptions,this.setOptions(t.options),this.observers=[],this.cache=t.cache,this.logger=t.logger||o._,this.queryKey=t.queryKey,this.queryHash=t.queryHash,this.initialState=t.state||function(t){let e="function"==typeof t.initialData?t.initialData():t.initialData,i=void 0!==e,n=i?"function"==typeof t.initialDataUpdatedAt?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:i?null!=n?n:Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:i?"success":"loading",fetchStatus:"idle"}}(this.options),this.state=this.initialState,this.scheduleGc()}get meta(){return this.options.meta}setOptions(t){this.options={...this.defaultOptions,...t},this.updateCacheTime(this.options.cacheTime)}optionalRemove(){this.observers.length||"idle"!==this.state.fetchStatus||this.cache.remove(this)}setData(t,e){let i=(0,u.oE)(this.state.data,t,this.options);return this.dispatch({data:i,type:"success",dataUpdatedAt:null==e?void 0:e.updatedAt,manual:null==e?void 0:e.manual}),i}setState(t,e){this.dispatch({type:"setState",state:t,setStateOptions:e})}cancel(t){var e;let i=this.promise;return null==(e=this.retryer)||e.cancel(t),i?i.then(u.ZT).catch(u.ZT):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.initialState)}isActive(){return this.observers.some(t=>!1!==t.options.enabled)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some(t=>t.getCurrentResult().isStale)}isStaleByTime(t=0){return this.state.isInvalidated||!this.state.dataUpdatedAt||!(0,u.Kp)(this.state.dataUpdatedAt,t)}onFocus(){var t;let e=this.observers.find(t=>t.shouldFetchOnWindowFocus());e&&e.refetch({cancelRefetch:!1}),null==(t=this.retryer)||t.continue()}onOnline(){var t;let e=this.observers.find(t=>t.shouldFetchOnReconnect());e&&e.refetch({cancelRefetch:!1}),null==(t=this.retryer)||t.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter(e=>e!==t),this.observers.length||(this.retryer&&(this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.scheduleGc()),this.cache.notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.dispatch({type:"invalidate"})}fetch(t,e){var i,n,s,r;if("idle"!==this.state.fetchStatus){if(this.state.dataUpdatedAt&&null!=e&&e.cancelRefetch)this.cancel({silent:!0});else if(this.promise)return null==(s=this.retryer)||s.continueRetry(),this.promise}if(t&&this.setOptions(t),!this.options.queryFn){let t=this.observers.find(t=>t.options.queryFn);t&&this.setOptions(t.options)}let a=(0,u.G9)(),o={queryKey:this.queryKey,pageParam:void 0,meta:this.meta},l=t=>{Object.defineProperty(t,"signal",{enumerable:!0,get:()=>{if(a)return this.abortSignalConsumed=!0,a.signal}})};l(o);let h={fetchOptions:e,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:()=>this.options.queryFn?(this.abortSignalConsumed=!1,this.options.queryFn(o)):Promise.reject("Missing queryFn for queryKey '"+this.options.queryHash+"'")};l(h),null==(i=this.options.behavior)||i.onFetch(h),this.revertState=this.state,("idle"===this.state.fetchStatus||this.state.fetchMeta!==(null==(n=h.fetchOptions)?void 0:n.meta))&&this.dispatch({type:"fetch",meta:null==(r=h.fetchOptions)?void 0:r.meta});let d=t=>{if((0,c.DV)(t)&&t.silent||this.dispatch({type:"error",error:t}),!(0,c.DV)(t)){var e,i,n,s;null==(e=(i=this.cache.config).onError)||e.call(i,t,this),null==(n=(s=this.cache.config).onSettled)||n.call(s,this.state.data,t,this)}this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return this.retryer=(0,c.Mz)({fn:h.fetchFn,abort:null==a?void 0:a.abort.bind(a),onSuccess:t=>{var e,i,n,s;if(void 0===t){d(Error(this.queryHash+" data is undefined"));return}this.setData(t),null==(e=(i=this.cache.config).onSuccess)||e.call(i,t,this),null==(n=(s=this.cache.config).onSettled)||n.call(s,t,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:d,onFail:(t,e)=>{this.dispatch({type:"failed",failureCount:t,error:e})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:h.options.retry,retryDelay:h.options.retryDelay,networkMode:h.options.networkMode}),this.promise=this.retryer.promise,this.promise}dispatch(t){this.state=(e=>{var i,n;switch(t.type){case"failed":return{...e,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...e,fetchStatus:"paused"};case"continue":return{...e,fetchStatus:"fetching"};case"fetch":return{...e,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null!=(i=t.meta)?i:null,fetchStatus:(0,c.Kw)(this.options.networkMode)?"fetching":"paused",...!e.dataUpdatedAt&&{error:null,status:"loading"}};case"success":return{...e,data:t.data,dataUpdateCount:e.dataUpdateCount+1,dataUpdatedAt:null!=(n=t.dataUpdatedAt)?n:Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":let s=t.error;if((0,c.DV)(s)&&s.revert&&this.revertState)return{...this.revertState,fetchStatus:"idle"};return{...e,error:s,errorUpdateCount:e.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:e.fetchFailureCount+1,fetchFailureReason:s,fetchStatus:"idle",status:"error"};case"invalidate":return{...e,isInvalidated:!0};case"setState":return{...e,...t.state}}})(this.state),l.V.batch(()=>{this.observers.forEach(e=>{e.onQueryUpdate(t)}),this.cache.notify({query:this,type:"updated",action:t})})}}var f=i(81002);class p extends f.l{constructor(t){super(),this.config=t||{},this.queries=[],this.queriesMap={}}build(t,e,i){var n;let s=e.queryKey,r=null!=(n=e.queryHash)?n:(0,u.Rm)(s,e),a=this.get(r);return a||(a=new d({cache:this,logger:t.getLogger(),queryKey:s,queryHash:r,options:t.defaultQueryOptions(e),state:i,defaultOptions:t.getQueryDefaults(s)}),this.add(a)),a}add(t){this.queriesMap[t.queryHash]||(this.queriesMap[t.queryHash]=t,this.queries.push(t),this.notify({type:"added",query:t}))}remove(t){let e=this.queriesMap[t.queryHash];e&&(t.destroy(),this.queries=this.queries.filter(e=>e!==t),e===t&&delete this.queriesMap[t.queryHash],this.notify({type:"removed",query:t}))}clear(){l.V.batch(()=>{this.queries.forEach(t=>{this.remove(t)})})}get(t){return this.queriesMap[t]}getAll(){return this.queries}find(t,e){let[i]=(0,u.I6)(t,e);return void 0===i.exact&&(i.exact=!0),this.queries.find(t=>(0,u._x)(i,t))}findAll(t,e){let[i]=(0,u.I6)(t,e);return Object.keys(i).length>0?this.queries.filter(t=>(0,u._x)(i,t)):this.queries}notify(t){l.V.batch(()=>{this.listeners.forEach(({listener:e})=>{e(t)})})}onFocus(){l.V.batch(()=>{this.queries.forEach(t=>{t.onFocus()})})}onOnline(){l.V.batch(()=>{this.queries.forEach(t=>{t.onOnline()})})}}var y=i(78276);class v extends f.l{constructor(t){super(),this.config=t||{},this.mutations=[],this.mutationId=0}build(t,e,i){let n=new y.m({mutationCache:this,logger:t.getLogger(),mutationId:++this.mutationId,options:t.defaultMutationOptions(e),state:i,defaultOptions:e.mutationKey?t.getMutationDefaults(e.mutationKey):void 0});return this.add(n),n}add(t){this.mutations.push(t),this.notify({type:"added",mutation:t})}remove(t){this.mutations=this.mutations.filter(e=>e!==t),this.notify({type:"removed",mutation:t})}clear(){l.V.batch(()=>{this.mutations.forEach(t=>{this.remove(t)})})}getAll(){return this.mutations}find(t){return void 0===t.exact&&(t.exact=!0),this.mutations.find(e=>(0,u.X7)(t,e))}findAll(t){return this.mutations.filter(e=>(0,u.X7)(t,e))}notify(t){l.V.batch(()=>{this.listeners.forEach(({listener:e})=>{e(t)})})}resumePausedMutations(){var t;return this.resuming=(null!=(t=this.resuming)?t:Promise.resolve()).then(()=>{let t=this.mutations.filter(t=>t.state.isPaused);return l.V.batch(()=>t.reduce((t,e)=>t.then(()=>e.continue().catch(u.ZT)),Promise.resolve()))}).then(()=>{this.resuming=void 0}),this.resuming}}var m=i(73621),b=i(47080);function g(t,e){return null==t.getNextPageParam?void 0:t.getNextPageParam(e[e.length-1],e)}class C{constructor(t={}){this.queryCache=t.queryCache||new p,this.mutationCache=t.mutationCache||new v,this.logger=t.logger||o._,this.defaultOptions=t.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[],this.mountCount=0}mount(){this.mountCount++,1===this.mountCount&&(this.unsubscribeFocus=m.j.subscribe(()=>{m.j.isFocused()&&(this.resumePausedMutations(),this.queryCache.onFocus())}),this.unsubscribeOnline=b.N.subscribe(()=>{b.N.isOnline()&&(this.resumePausedMutations(),this.queryCache.onOnline())}))}unmount(){var t,e;this.mountCount--,0===this.mountCount&&(null==(t=this.unsubscribeFocus)||t.call(this),this.unsubscribeFocus=void 0,null==(e=this.unsubscribeOnline)||e.call(this),this.unsubscribeOnline=void 0)}isFetching(t,e){let[i]=(0,u.I6)(t,e);return i.fetchStatus="fetching",this.queryCache.findAll(i).length}isMutating(t){return this.mutationCache.findAll({...t,fetching:!0}).length}getQueryData(t,e){var i;return null==(i=this.queryCache.find(t,e))?void 0:i.state.data}ensureQueryData(t,e,i){let n=(0,u._v)(t,e,i),s=this.getQueryData(n.queryKey);return s?Promise.resolve(s):this.fetchQuery(n)}getQueriesData(t){return this.getQueryCache().findAll(t).map(({queryKey:t,state:e})=>[t,e.data])}setQueryData(t,e,i){let n=this.queryCache.find(t),s=null==n?void 0:n.state.data,r=(0,u.SE)(e,s);if(void 0===r)return;let a=(0,u._v)(t),o=this.defaultQueryOptions(a);return this.queryCache.build(this,o).setData(r,{...i,manual:!0})}setQueriesData(t,e,i){return l.V.batch(()=>this.getQueryCache().findAll(t).map(({queryKey:t})=>[t,this.setQueryData(t,e,i)]))}getQueryState(t,e){var i;return null==(i=this.queryCache.find(t,e))?void 0:i.state}removeQueries(t,e){let[i]=(0,u.I6)(t,e),n=this.queryCache;l.V.batch(()=>{n.findAll(i).forEach(t=>{n.remove(t)})})}resetQueries(t,e,i){let[n,s]=(0,u.I6)(t,e,i),r=this.queryCache,a={type:"active",...n};return l.V.batch(()=>(r.findAll(n).forEach(t=>{t.reset()}),this.refetchQueries(a,s)))}cancelQueries(t,e,i){let[n,s={}]=(0,u.I6)(t,e,i);return void 0===s.revert&&(s.revert=!0),Promise.all(l.V.batch(()=>this.queryCache.findAll(n).map(t=>t.cancel(s)))).then(u.ZT).catch(u.ZT)}invalidateQueries(t,e,i){let[n,s]=(0,u.I6)(t,e,i);return l.V.batch(()=>{var t,e;if(this.queryCache.findAll(n).forEach(t=>{t.invalidate()}),"none"===n.refetchType)return Promise.resolve();let i={...n,type:null!=(t=null!=(e=n.refetchType)?e:n.type)?t:"active"};return this.refetchQueries(i,s)})}refetchQueries(t,e,i){let[n,s]=(0,u.I6)(t,e,i),r=Promise.all(l.V.batch(()=>this.queryCache.findAll(n).filter(t=>!t.isDisabled()).map(t=>{var e;return t.fetch(void 0,{...s,cancelRefetch:null==(e=null==s?void 0:s.cancelRefetch)||e,meta:{refetchPage:n.refetchPage}})}))).then(u.ZT);return null!=s&&s.throwOnError||(r=r.catch(u.ZT)),r}fetchQuery(t,e,i){let n=(0,u._v)(t,e,i),s=this.defaultQueryOptions(n);void 0===s.retry&&(s.retry=!1);let r=this.queryCache.build(this,s);return r.isStaleByTime(s.staleTime)?r.fetch(s):Promise.resolve(r.state.data)}prefetchQuery(t,e,i){return this.fetchQuery(t,e,i).then(u.ZT).catch(u.ZT)}fetchInfiniteQuery(t,e,i){let n=(0,u._v)(t,e,i);return n.behavior={onFetch:t=>{t.fetchFn=()=>{var e,i,n,s,r,a,u;let o;let l=null==(e=t.fetchOptions)?void 0:null==(i=e.meta)?void 0:i.refetchPage,c=null==(n=t.fetchOptions)?void 0:null==(s=n.meta)?void 0:s.fetchMore,h=null==c?void 0:c.pageParam,d=(null==c?void 0:c.direction)==="forward",f=(null==c?void 0:c.direction)==="backward",p=(null==(r=t.state.data)?void 0:r.pages)||[],y=(null==(a=t.state.data)?void 0:a.pageParams)||[],v=y,m=!1,b=e=>{Object.defineProperty(e,"signal",{enumerable:!0,get:()=>{var e,i;return null!=(e=t.signal)&&e.aborted?m=!0:null==(i=t.signal)||i.addEventListener("abort",()=>{m=!0}),t.signal}})},C=t.options.queryFn||(()=>Promise.reject("Missing queryFn for queryKey '"+t.options.queryHash+"'")),w=(t,e,i,n)=>(v=n?[e,...v]:[...v,e],n?[i,...t]:[...t,i]),O=(e,i,n,s)=>{if(m)return Promise.reject("Cancelled");if(void 0===n&&!i&&e.length)return Promise.resolve(e);let r={queryKey:t.queryKey,pageParam:n,meta:t.options.meta};return b(r),Promise.resolve(C(r)).then(t=>w(e,n,t,s))};if(p.length){if(d){let e=void 0!==h,i=e?h:g(t.options,p);o=O(p,e,i)}else if(f){let e=void 0!==h,i=e?h:null==(u=t.options).getPreviousPageParam?void 0:u.getPreviousPageParam(p[0],p);o=O(p,e,i,!0)}else{v=[];let e=void 0===t.options.getNextPageParam;o=!l||!p[0]||l(p[0],0,p)?O([],e,y[0]):Promise.resolve(w([],y[0],p[0]));for(let i=1;i<p.length;i++)o=o.then(n=>{if(!l||!p[i]||l(p[i],i,p)){let s=e?y[i]:g(t.options,n);return O(n,e,s)}return Promise.resolve(w(n,y[i],p[i]))})}}else o=O([]);return o.then(t=>({pages:t,pageParams:v}))}}},this.fetchQuery(n)}prefetchInfiniteQuery(t,e,i){return this.fetchInfiniteQuery(t,e,i).then(u.ZT).catch(u.ZT)}resumePausedMutations(){return this.mutationCache.resumePausedMutations()}getQueryCache(){return this.queryCache}getMutationCache(){return this.mutationCache}getLogger(){return this.logger}getDefaultOptions(){return this.defaultOptions}setDefaultOptions(t){this.defaultOptions=t}setQueryDefaults(t,e){let i=this.queryDefaults.find(e=>(0,u.yF)(t)===(0,u.yF)(e.queryKey));i?i.defaultOptions=e:this.queryDefaults.push({queryKey:t,defaultOptions:e})}getQueryDefaults(t){if(!t)return;let e=this.queryDefaults.find(e=>(0,u.to)(t,e.queryKey));return null==e?void 0:e.defaultOptions}setMutationDefaults(t,e){let i=this.mutationDefaults.find(e=>(0,u.yF)(t)===(0,u.yF)(e.mutationKey));i?i.defaultOptions=e:this.mutationDefaults.push({mutationKey:t,defaultOptions:e})}getMutationDefaults(t){if(!t)return;let e=this.mutationDefaults.find(e=>(0,u.to)(t,e.mutationKey));return null==e?void 0:e.defaultOptions}defaultQueryOptions(t){if(null!=t&&t._defaulted)return t;let e={...this.defaultOptions.queries,...this.getQueryDefaults(null==t?void 0:t.queryKey),...t,_defaulted:!0};return!e.queryHash&&e.queryKey&&(e.queryHash=(0,u.Rm)(e.queryKey,e)),void 0===e.refetchOnReconnect&&(e.refetchOnReconnect="always"!==e.networkMode),void 0===e.useErrorBoundary&&(e.useErrorBoundary=!!e.suspense),e}defaultMutationOptions(t){return null!=t&&t._defaulted?t:{...this.defaultOptions.mutations,...this.getMutationDefaults(null==t?void 0:t.mutationKey),...t,_defaulted:!0}}clear(){this.queryCache.clear(),this.mutationCache.clear()}}var w=i(84263),O=i(75271);let q=({children:t,options:e,state:i})=>(!function(t,e={}){let i=(0,w.NL)({context:e.context}),n=O.useRef(e);n.current=e,O.useMemo(()=>{t&&function(t,e,i){if("object"!=typeof e||null===e)return;let n=t.getMutationCache(),s=t.getQueryCache(),r=e.mutations||[],a=e.queries||[];r.forEach(e=>{var s;n.build(t,{...null==i?void 0:null==(s=i.defaultOptions)?void 0:s.mutations,mutationKey:e.mutationKey},e.state)}),a.forEach(({queryKey:e,state:n,queryHash:r})=>{var a;let u=s.get(r);if(u){if(u.state.dataUpdatedAt<n.dataUpdatedAt){let{fetchStatus:t,...e}=n;u.setState(e)}return}s.build(t,{...null==i?void 0:null==(a=i.defaultOptions)?void 0:a.queries,queryKey:e,queryHash:r},{...n,fetchStatus:"idle"})})}(i,t,n.current)},[i,t])}(i,e),t);var S=i(36623),P=i.n(S);i(50711);var F=i(14224);function E(t){var e;let{Component:i,pageProps:s,router:u}=t,[o]=(0,O.useState)(()=>new C({queryCache:new p({})})),l=null!==(e=i.getLayout)&&void 0!==e?e:t=>t;return(0,O.useEffect)(()=>{(0,a.g8)({url:u.route})},[]),(0,O.useEffect)(()=>{let t=t=>{(0,a.Z0)({name:"page_loads",event:{url:t}})};return u.events.on("routeChangeComplete",t),()=>{u.events.off("routeChangeComplete",t)}},[u.events]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(P(),{children:[(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,n.jsx)("meta",{name:"theme-color",content:"#16181D"})]}),(0,n.jsx)(w.aH,{client:o,children:(0,n.jsx)(q,{state:null==s?void 0:s.dehydratedState,children:(0,n.jsx)("main",{className:"".concat(r().className),children:l((0,n.jsx)(i,{...s}))})})})]})}i(5982),i(89836),i(20907),i(39993),i(61379),F.env.STORYBOOK},52897:function(t,e,i){"use strict";i.d(e,{Kz:function(){return l},WN:function(){return a},Z0:function(){return c},g8:function(){return u},yV:function(){return o}});var n=i(38),s=i(14224);let r=!1,a=n.yv;async function u(t){let{url:e}=t;if(a&&"true"!==s.env.CI){let t=s.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID||"G-MLGBK4SDRD";i.e(4285).then(i.bind(i,94285)).then(e=>{e.default.initialize(t)}),i.e(8434).then(i.t.bind(i,29011,23)).then(t=>{t.default.init("6fa080298fe5b2a5f6437744e5fca298",{debug:!n.yv,ignore_dnt:!0,api_host:"".concat("https://app.parcl.co","/mp")})});let r=(await i.e(4836).then(i.t.bind(i,74836,23))).default,a=(await i.e(672).then(i.t.bind(i,672,23))).default;r.init("parcl/website",{rootHostname:n.yv?"parcl.co":""}),a(r),c({name:"page_loads",event:{url:e}})}r=!0}function o(t){i.e(4836).then(i.t.bind(i,74836,23)).then(e=>{e.default.identify(t)}),i.e(8434).then(i.t.bind(i,29011,23)).then(e=>{e.default.identify(t)})}function l(t){let{name:e,event:n}=t;r&&(a?(i.e(4836).then(i.t.bind(i,74836,23)).then(t=>{t.default.track(e,{...n})}),i.e(8434).then(i.t.bind(i,29011,23)).then(t=>{t.default.track(e,{...n})}),i.e(4285).then(i.bind(i,94285)).then(t=>{t.default.event(e,{...n})})):"true"===s.env.NEXT_PUBLIC_SHOW_ANALYTICS_LOGS&&console.log(e,n))}function c(t){let{name:e,event:n}=t;a?i.e(8434).then(i.t.bind(i,29011,23)).then(t=>{t.default.track(e,{...n})}):"true"===s.env.NEXT_PUBLIC_SHOW_ANALYTICS_LOGS&&console.log(e,n)}},50711:function(){},39993:function(){},61379:function(){},20907:function(){},89836:function(){},5982:function(){},12660:function(t){t.exports={style:{fontFamily:"'__Inter_aaf875', '__Inter_Fallback_aaf875'",fontStyle:"normal"},className:"__className_aaf875"}},36623:function(t,e,i){t.exports=i(81826)},14224:function(t){var e,i,n,s=t.exports={};function r(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}function u(t){if(e===setTimeout)return setTimeout(t,0);if((e===r||!e)&&setTimeout)return e=setTimeout,setTimeout(t,0);try{return e(t,0)}catch(i){try{return e.call(null,t,0)}catch(i){return e.call(this,t,0)}}}!function(){try{e="function"==typeof setTimeout?setTimeout:r}catch(t){e=r}try{i="function"==typeof clearTimeout?clearTimeout:a}catch(t){i=a}}();var o=[],l=!1,c=-1;function h(){l&&n&&(l=!1,n.length?o=n.concat(o):c=-1,o.length&&d())}function d(){if(!l){var t=u(h);l=!0;for(var e=o.length;e;){for(n=o,o=[];++c<e;)n&&n[c].run();c=-1,e=o.length}n=null,l=!1,function(t){if(i===clearTimeout)return clearTimeout(t);if((i===a||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(t);try{i(t)}catch(e){try{return i.call(null,t)}catch(e){return i.call(this,t)}}}(t)}}function f(t,e){this.fun=t,this.array=e}function p(){}s.nextTick=function(t){var e=Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)e[i-1]=arguments[i];o.push(new f(t,e)),1!==o.length||l||u(d)},f.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=p,s.addListener=p,s.once=p,s.off=p,s.removeListener=p,s.removeAllListeners=p,s.emit=p,s.prependListener=p,s.prependOnceListener=p,s.listeners=function(t){return[]},s.binding=function(t){throw Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(t){throw Error("process.chdir is not supported")},s.umask=function(){return 0}},73621:function(t,e,i){"use strict";i.d(e,{j:function(){return a}});var n=i(81002),s=i(20822);class r extends n.l{constructor(){super(),this.setup=t=>{if(!s.sk&&window.addEventListener){let e=()=>t();return window.addEventListener("visibilitychange",e,!1),window.addEventListener("focus",e,!1),()=>{window.removeEventListener("visibilitychange",e),window.removeEventListener("focus",e)}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var t;null==(t=this.cleanup)||t.call(this),this.cleanup=void 0}}setEventListener(t){var e;this.setup=t,null==(e=this.cleanup)||e.call(this),this.cleanup=t(t=>{"boolean"==typeof t?this.setFocused(t):this.onFocus()})}setFocused(t){this.focused!==t&&(this.focused=t,this.onFocus())}onFocus(){this.listeners.forEach(({listener:t})=>{t()})}isFocused(){return"boolean"==typeof this.focused?this.focused:"undefined"==typeof document||[void 0,"visible","prerender"].includes(document.visibilityState)}}let a=new r},27380:function(t,e,i){"use strict";i.d(e,{_:function(){return n}});let n=console},78276:function(t,e,i){"use strict";i.d(e,{R:function(){return o},m:function(){return u}});var n=i(27380),s=i(88806),r=i(94916),a=i(82069);class u extends r.F{constructor(t){super(),this.defaultOptions=t.defaultOptions,this.mutationId=t.mutationId,this.mutationCache=t.mutationCache,this.logger=t.logger||n._,this.observers=[],this.state=t.state||o(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options={...this.defaultOptions,...t},this.updateCacheTime(this.options.cacheTime)}get meta(){return this.options.meta}setState(t){this.dispatch({type:"setState",state:t})}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),this.mutationCache.notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){this.observers=this.observers.filter(e=>e!==t),this.scheduleGc(),this.mutationCache.notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){this.observers.length||("loading"===this.state.status?this.scheduleGc():this.mutationCache.remove(this))}continue(){var t,e;return null!=(t=null==(e=this.retryer)?void 0:e.continue())?t:this.execute()}async execute(){var t,e,i,n,s,r,u,o,l,c,h,d,f,p,y,v,m,b,g,C;let w="loading"===this.state.status;try{if(!w){this.dispatch({type:"loading",variables:this.options.variables}),await (null==(l=(c=this.mutationCache.config).onMutate)?void 0:l.call(c,this.state.variables,this));let t=await (null==(h=(d=this.options).onMutate)?void 0:h.call(d,this.state.variables));t!==this.state.context&&this.dispatch({type:"loading",context:t,variables:this.state.variables})}let f=await (()=>{var t;return this.retryer=(0,a.Mz)({fn:()=>this.options.mutationFn?this.options.mutationFn(this.state.variables):Promise.reject("No mutationFn found"),onFail:(t,e)=>{this.dispatch({type:"failed",failureCount:t,error:e})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:null!=(t=this.options.retry)?t:0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode}),this.retryer.promise})();return await (null==(t=(e=this.mutationCache.config).onSuccess)?void 0:t.call(e,f,this.state.variables,this.state.context,this)),await (null==(i=(n=this.options).onSuccess)?void 0:i.call(n,f,this.state.variables,this.state.context)),await (null==(s=(r=this.mutationCache.config).onSettled)?void 0:s.call(r,f,null,this.state.variables,this.state.context,this)),await (null==(u=(o=this.options).onSettled)?void 0:u.call(o,f,null,this.state.variables,this.state.context)),this.dispatch({type:"success",data:f}),f}catch(t){try{throw await (null==(f=(p=this.mutationCache.config).onError)?void 0:f.call(p,t,this.state.variables,this.state.context,this)),await (null==(y=(v=this.options).onError)?void 0:y.call(v,t,this.state.variables,this.state.context)),await (null==(m=(b=this.mutationCache.config).onSettled)?void 0:m.call(b,void 0,t,this.state.variables,this.state.context,this)),await (null==(g=(C=this.options).onSettled)?void 0:g.call(C,void 0,t,this.state.variables,this.state.context)),t}finally{this.dispatch({type:"error",error:t})}}}dispatch(t){this.state=(e=>{switch(t.type){case"failed":return{...e,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...e,isPaused:!0};case"continue":return{...e,isPaused:!1};case"loading":return{...e,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!(0,a.Kw)(this.options.networkMode),status:"loading",variables:t.variables};case"success":return{...e,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...e,data:void 0,error:t.error,failureCount:e.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"};case"setState":return{...e,...t.state}}})(this.state),s.V.batch(()=>{this.observers.forEach(e=>{e.onMutationUpdate(t)}),this.mutationCache.notify({mutation:this,type:"updated",action:t})})}}function o(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0}}},88806:function(t,e,i){"use strict";i.d(e,{V:function(){return s}});var n=i(20822);let s=function(){let t=[],e=0,i=t=>{t()},s=t=>{t()},r=s=>{e?t.push(s):(0,n.A4)(()=>{i(s)})},a=()=>{let e=t;t=[],e.length&&(0,n.A4)(()=>{s(()=>{e.forEach(t=>{i(t)})})})};return{batch:t=>{let i;e++;try{i=t()}finally{--e||a()}return i},batchCalls:t=>(...e)=>{r(()=>{t(...e)})},schedule:r,setNotifyFunction:t=>{i=t},setBatchNotifyFunction:t=>{s=t}}}()},47080:function(t,e,i){"use strict";i.d(e,{N:function(){return u}});var n=i(81002),s=i(20822);let r=["online","offline"];class a extends n.l{constructor(){super(),this.setup=t=>{if(!s.sk&&window.addEventListener){let e=()=>t();return r.forEach(t=>{window.addEventListener(t,e,!1)}),()=>{r.forEach(t=>{window.removeEventListener(t,e)})}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var t;null==(t=this.cleanup)||t.call(this),this.cleanup=void 0}}setEventListener(t){var e;this.setup=t,null==(e=this.cleanup)||e.call(this),this.cleanup=t(t=>{"boolean"==typeof t?this.setOnline(t):this.onOnline()})}setOnline(t){this.online!==t&&(this.online=t,this.onOnline())}onOnline(){this.listeners.forEach(({listener:t})=>{t()})}isOnline(){return"boolean"==typeof this.online?this.online:"undefined"==typeof navigator||void 0===navigator.onLine||navigator.onLine}}let u=new a},94916:function(t,e,i){"use strict";i.d(e,{F:function(){return s}});var n=i(20822);class s{destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),(0,n.PN)(this.cacheTime)&&(this.gcTimeout=setTimeout(()=>{this.optionalRemove()},this.cacheTime))}updateCacheTime(t){this.cacheTime=Math.max(this.cacheTime||0,null!=t?t:n.sk?1/0:3e5)}clearGcTimeout(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)}}},82069:function(t,e,i){"use strict";i.d(e,{DV:function(){return l},Kw:function(){return u},Mz:function(){return c}});var n=i(73621),s=i(47080),r=i(20822);function a(t){return Math.min(1e3*2**t,3e4)}function u(t){return(null!=t?t:"online")!=="online"||s.N.isOnline()}class o{constructor(t){this.revert=null==t?void 0:t.revert,this.silent=null==t?void 0:t.silent}}function l(t){return t instanceof o}function c(t){let e,i,l,c=!1,h=0,d=!1,f=new Promise((t,e)=>{i=t,l=e}),p=()=>!n.j.isFocused()||"always"!==t.networkMode&&!s.N.isOnline(),y=n=>{d||(d=!0,null==t.onSuccess||t.onSuccess(n),null==e||e(),i(n))},v=i=>{d||(d=!0,null==t.onError||t.onError(i),null==e||e(),l(i))},m=()=>new Promise(i=>{e=t=>{let e=d||!p();return e&&i(t),e},null==t.onPause||t.onPause()}).then(()=>{e=void 0,d||null==t.onContinue||t.onContinue()}),b=()=>{let e;if(!d){try{e=t.fn()}catch(t){e=Promise.reject(t)}Promise.resolve(e).then(y).catch(e=>{var i,n;if(d)return;let s=null!=(i=t.retry)?i:3,u=null!=(n=t.retryDelay)?n:a,o="function"==typeof u?u(h,e):u,l=!0===s||"number"==typeof s&&h<s||"function"==typeof s&&s(h,e);if(c||!l){v(e);return}h++,null==t.onFail||t.onFail(h,e),(0,r.Gh)(o).then(()=>{if(p())return m()}).then(()=>{c?v(e):b()})})}};return u(t.networkMode)?b():m().then(b),{promise:f,cancel:e=>{d||(v(new o(e)),null==t.abort||t.abort())},continue:()=>(null==e?void 0:e())?f:Promise.resolve(),cancelRetry:()=>{c=!0},continueRetry:()=>{c=!1}}}},81002:function(t,e,i){"use strict";i.d(e,{l:function(){return n}});class n{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){let e={listener:t};return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}}},20822:function(t,e,i){"use strict";i.d(e,{A4:function(){return q},G9:function(){return S},Gh:function(){return O},I6:function(){return c},Kp:function(){return u},PN:function(){return a},Rm:function(){return f},SE:function(){return r},VS:function(){return m},X7:function(){return d},ZT:function(){return s},_v:function(){return o},_x:function(){return h},lV:function(){return l},oE:function(){return P},sk:function(){return n},to:function(){return y},yF:function(){return p}});let n="undefined"==typeof window||"Deno"in window;function s(){}function r(t,e){return"function"==typeof t?t(e):t}function a(t){return"number"==typeof t&&t>=0&&t!==1/0}function u(t,e){return Math.max(t+(e||0)-Date.now(),0)}function o(t,e,i){return w(t)?"function"==typeof e?{...i,queryKey:t,queryFn:e}:{...e,queryKey:t}:t}function l(t,e,i){return w(t)?"function"==typeof e?{...i,mutationKey:t,mutationFn:e}:{...e,mutationKey:t}:"function"==typeof t?{...e,mutationFn:t}:{...t}}function c(t,e,i){return w(t)?[{...e,queryKey:t},i]:[t||{},e]}function h(t,e){let{type:i="all",exact:n,fetchStatus:s,predicate:r,queryKey:a,stale:u}=t;if(w(a)){if(n){if(e.queryHash!==f(a,e.options))return!1}else{if(!v(e.queryKey,a))return!1}}if("all"!==i){let t=e.isActive();if("active"===i&&!t||"inactive"===i&&t)return!1}return("boolean"!=typeof u||e.isStale()===u)&&(void 0===s||s===e.state.fetchStatus)&&(!r||!!r(e))}function d(t,e){let{exact:i,fetching:n,predicate:s,mutationKey:r}=t;if(w(r)){if(!e.options.mutationKey)return!1;if(i){if(p(e.options.mutationKey)!==p(r))return!1}else{if(!v(e.options.mutationKey,r))return!1}}return("boolean"!=typeof n||"loading"===e.state.status===n)&&(!s||!!s(e))}function f(t,e){return((null==e?void 0:e.queryKeyHashFn)||p)(t)}function p(t){return JSON.stringify(t,(t,e)=>g(e)?Object.keys(e).sort().reduce((t,i)=>(t[i]=e[i],t),{}):e)}function y(t,e){return v(t,e)}function v(t,e){return t===e||typeof t==typeof e&&!!t&&!!e&&"object"==typeof t&&"object"==typeof e&&!Object.keys(e).some(i=>!v(t[i],e[i]))}function m(t,e){if(t&&!e||e&&!t)return!1;for(let i in t)if(t[i]!==e[i])return!1;return!0}function b(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function g(t){if(!C(t))return!1;let e=t.constructor;if(void 0===e)return!0;let i=e.prototype;return!!(C(i)&&i.hasOwnProperty("isPrototypeOf"))}function C(t){return"[object Object]"===Object.prototype.toString.call(t)}function w(t){return Array.isArray(t)}function O(t){return new Promise(e=>{setTimeout(e,t)})}function q(t){O(0).then(t)}function S(){if("function"==typeof AbortController)return new AbortController}function P(t,e,i){return null!=i.isDataEqual&&i.isDataEqual(t,e)?t:"function"==typeof i.structuralSharing?i.structuralSharing(t,e):!1!==i.structuralSharing?function t(e,i){if(e===i)return e;let n=b(e)&&b(i);if(n||g(e)&&g(i)){let s=n?e.length:Object.keys(e).length,r=n?i:Object.keys(i),a=r.length,u=n?[]:{},o=0;for(let s=0;s<a;s++){let a=n?s:r[s];u[a]=t(e[a],i[a]),u[a]===e[a]&&o++}return s===a&&o===s?e:u}return i}(t,e):e}},84263:function(t,e,i){"use strict";i.d(e,{NL:function(){return u},aH:function(){return o}});var n=i(75271);let s=n.createContext(void 0),r=n.createContext(!1);function a(t,e){return t||(e&&"undefined"!=typeof window?(window.ReactQueryClientContext||(window.ReactQueryClientContext=s),window.ReactQueryClientContext):s)}let u=({context:t}={})=>{let e=n.useContext(a(t,n.useContext(r)));if(!e)throw Error("No QueryClient set, use QueryClientProvider to set one");return e},o=({client:t,children:e,context:i,contextSharing:s=!1})=>{n.useEffect(()=>(t.mount(),()=>{t.unmount()}),[t]);let u=a(i,s);return n.createElement(r.Provider,{value:!i&&s},n.createElement(u.Provider,{value:t},e))}}},function(t){var e=function(e){return t(t.s=e)};t.O(0,[9774,179],function(){return e(72671),e(1269)}),_N_E=t.O()}]);