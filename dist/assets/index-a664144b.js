import{d as $,c,j as g,z as _,s as y,aQ as w,u as a,k as P,l as x,ah as W,ai as A,q as b,b as at,v as st,O as dt,aP as lt,aG as ut,F as ft}from"./runtime-core.esm-bundler-f0bd303b.js";import{j as ct,u as pt}from"./index-be8161ee.js";import{_ as mt,a as ht,b as gt,u as yt,c as xt,d as bt,e as _t,f as $t}from"./index.vue_vue_type_script_setup_true_lang-87f1e67f.js";import"./SvgIcon.vue_vue_type_script_setup_true_lang-016ce05e.js";import{_ as F}from"./_plugin-vue_export-helper-c27b6911.js";import"./_commonjsHelpers-87174ba5.js";import"./index-e131893c.js";import"./light-ddbeb814.js";import"./light-8cf84014.js";import"./light-78ef7eb2.js";import"./light-f7c48211.js";import"./light-8ede492f.js";import"./light-f2c5e266.js";import"./light-9a73bf95.js";import"./light-0472106f.js";import"./light-b52b7e18.js";import"./_common-991711fd.js";import"./_common-89f2509f.js";import"./_common-6222e43f.js";import"./light-bcfa0aa4.js";import"./refresh-4d3b5034.js";import"./Button-8f59a08b.js";import"./browser-ddb21091.js";import"./is-browser-fc34c9a6.js";import"./Loading-7bc32f77.js";import"./runtime-dom.esm-bundler-4c308a5c.js";import"./color-to-class-b0332f36.js";import"./DarkModeSwitch.vue_vue_type_script_setup_true_lang-22f2ae9a.js";import"./Divider-7d229043.js";import"./Switch-d00e049a.js";import"./use-merged-state-c45842e4.js";import"./isSymbol-944790fb.js";import"./Space-3c4da91a.js";import"./flatten-997edf61.js";import"./get-slot-1efb97e5.js";import"./Dropdown-1262d536.js";import"./Popover-94c1dc57.js";import"./use-locale-30d180b9.js";import"./Scrollbar-2e2dcb58.js";import"./VResizeObserver-aa804d72.js";import"./Card-b56fe7ef.js";import"./index-ed11102f.js";import"./index-cad90cf4.js";import"./get-20f1eeba.js";import"./format-length-c9d165c6.js";import"./cssr-0446b946.js";import"./utils-58b198de.js";import"./use-compitable-7fe5a3c6.js";import"./next-frame-once-7035a838.js";import"./render-694098f6.js";import"./Select-8a4c11b6.js";import"./fade-in-scale-up.cssr-9e1e30d5.js";import"./Suffix-2c1b9fad.js";import"./Tag-23d0dbb9.js";import"./index-cbfaa337.js";import"./GradientText-ba070cbd.js";import"./Grid-48573d10.js";import"./Tabs-b48f5a1a.js";import"./Add-0a86f6af.js";import"./omit-b0e7e098.js";import"./throttle-dc3115ae.js";import"./Modal-3dc644ff.js";import"./Warning-3d79f7ff.js";import"./Input-2105da9e.js";import"./InputGroup-8a0a46ca.js";import"./InputNumber-a8578f4a.js";import"./SystemLogo.vue_vue_type_script_setup_true_lang-f06c0b75.js";import"./i18n-97b6f010.js";import"./vue.runtime.esm-bundler-8bb97b02.js";import"./KeyBoardComponent-0af7e28b.js";import"./chinese-d9d33167.js";import"./avatar-ec00d03c.js";import"./LoadingEmptyWrapper.vue_vue_type_script_setup_true_lang-42d49830.js";import"./system-310a0b4e.js";import"./useLoading-ddd7acc1.js";var vt=Object.defineProperty,wt=Object.defineProperties,St=Object.getOwnPropertyDescriptors,R=Object.getOwnPropertySymbols,Lt=Object.prototype.hasOwnProperty,Ct=Object.prototype.propertyIsEnumerable,q=(i,e,t)=>e in i?vt(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,L=(i,e)=>{for(var t in e||(e={}))Lt.call(e,t)&&q(i,t,e[t]);if(R)for(var t of R(e))Ct.call(e,t)&&q(i,t,e[t]);return i},C=(i,e)=>wt(i,St(e));function Tt(i){let e=0;for(let t=0;t<i.length;++t)i[t]==="&"&&++e;return e}const N=/\s*,(?![^(]*\))\s*/g,Et=/\s+/g;function Wt(i,e){const t=[];return e.split(N).forEach(n=>{let o=Tt(n);if(o){if(o===1){i.forEach(r=>{t.push(n.replace("&",r))});return}}else{i.forEach(r=>{t.push((r&&r+" ")+n)});return}let s=[n];for(;o--;){const r=[];s.forEach(d=>{i.forEach(u=>{r.push(d.replace("&",u))})}),s=r}s.forEach(r=>t.push(r))}),t}function At(i,e){const t=[];return e.split(N).forEach(n=>{i.forEach(o=>{t.push((o&&o+" ")+n)})}),t}function Bt(i){let e=[""];return i.forEach(t=>{t=t&&t.trim(),t&&(t.includes("&")?e=Wt(e,t):e=At(e,t))}),e.join(", ").replace(Et," ")}function G(i){if(!i)return;const e=i.parentElement;e&&e.removeChild(i)}function M(i){return document.querySelector(`style[cssr-id="${i}"]`)}function Pt(i){const e=document.createElement("style");return e.setAttribute("cssr-id",i),e}function k(i){return i?/^\s*@(s|m)/.test(i):!1}const kt=/[A-Z]/g;function Q(i){return i.replace(kt,e=>"-"+e.toLowerCase())}function zt(i,e="  "){return typeof i=="object"&&i!==null?` {
`+Object.entries(i).map(t=>e+`  ${Q(t[0])}: ${t[1]};`).join(`
`)+`
`+e+"}":`: ${i};`}function Ht(i,e,t){return typeof i=="function"?i({context:e.context,props:t}):i}function Z(i,e,t,n){if(!e)return"";const o=Ht(e,t,n);if(!o)return"";if(typeof o=="string")return`${i} {
${o}
}`;const s=Object.keys(o);if(s.length===0)return t.config.keepEmptyBlock?i+` {
}`:"";const r=i?[i+" {"]:[];return s.forEach(d=>{const u=o[d];if(d==="raw"){r.push(`
`+u+`
`);return}d=Q(d),u!=null&&r.push(`  ${d}${zt(u)}`)}),i&&r.push("}"),r.join(`
`)}function H(i,e,t){i&&i.forEach(n=>{if(Array.isArray(n))H(n,e,t);else if(typeof n=="function"){const o=n(e);Array.isArray(o)?H(o,e,t):o&&t(o)}else n&&t(n)})}function X(i,e,t,n,o,s){const r=i.$;let d="";if(!r||typeof r=="string")k(r)?d=r:e.push(r);else if(typeof r=="function"){const l=r({context:n.context,props:o});k(l)?d=l:e.push(l)}else if(r.before&&r.before(n.context),!r.$||typeof r.$=="string")k(r.$)?d=r.$:e.push(r.$);else if(r.$){const l=r.$({context:n.context,props:o});k(l)?d=l:e.push(l)}const u=Bt(e),f=Z(u,i.props,n,o);d?(t.push(`${d} {`),s&&f&&s.insertRule(`${d} {
${f}
}
`)):(s&&f&&s.insertRule(f),!s&&f.length&&t.push(f)),i.children&&H(i.children,{context:n.context,props:o},l=>{if(typeof l=="string"){const p=Z(u,{raw:l},n,o);s?s.insertRule(p):t.push(p)}else X(l,e,t,n,o,s)}),e.pop(),d&&t.push("}"),r&&r.after&&r.after(n.context)}function J(i,e,t,n=!1){const o=[];return X(i,[],o,e,t,n?i.instance.__styleSheet:void 0),n?"":o.join(`

`)}function Ft(i){for(var e=0,t,n=0,o=i.length;o>=4;++n,o-=4)t=i.charCodeAt(n)&255|(i.charCodeAt(++n)&255)<<8|(i.charCodeAt(++n)&255)<<16|(i.charCodeAt(++n)&255)<<24,t=(t&65535)*1540483477+((t>>>16)*59797<<16),t^=t>>>24,e=(t&65535)*1540483477+((t>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(o){case 3:e^=(i.charCodeAt(n+2)&255)<<16;case 2:e^=(i.charCodeAt(n+1)&255)<<8;case 1:e^=i.charCodeAt(n)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}typeof window<"u"&&(window.__cssrContext={});function Mt(i,e,t){const{els:n}=e;if(t===void 0)n.forEach(G),e.els=[];else{const o=M(t);o&&n.includes(o)&&(G(o),e.els=n.filter(s=>s!==o))}}function U(i,e){i.push(e)}function It(i,e,t,n,o,s,r,d,u){if(s&&!u){if(t===void 0){console.error("[css-render/mount]: `id` is required in `silent` mode.");return}const h=window.__cssrContext;h[t]||(h[t]=!0,J(e,i,n,s));return}let f;if(t===void 0&&(f=e.render(n),t=Ft(f)),u){u.adapter(t,f??e.render(n));return}const l=M(t);if(l!==null&&!r)return l;const p=l??Pt(t);if(f===void 0&&(f=e.render(n)),p.textContent=f,l!==null)return l;if(d){const h=document.head.querySelector(`meta[name="${d}"]`);if(h)return document.head.insertBefore(p,h),U(e.els,p),p}return o?document.head.insertBefore(p,document.head.querySelector("style, link")):document.head.appendChild(p),U(e.els,p),p}function Ot(i){return J(this,this.instance,i)}function Vt(i={}){const{id:e,ssr:t,props:n,head:o=!1,silent:s=!1,force:r=!1,anchorMetaName:d}=i;return It(this.instance,this,e,n,o,s,r,d,t)}function Dt(i={}){const{id:e}=i;Mt(this.instance,this,e)}const z=function(i,e,t,n){return{instance:i,$:e,props:t,children:n,els:[],render:Ot,mount:Vt,unmount:Dt}},jt=function(i,e,t,n){return Array.isArray(e)?z(i,{$:null},null,e):Array.isArray(t)?z(i,e,null,t):Array.isArray(n)?z(i,e,t,n):z(i,e,t,null)};function T(i={}){let e=null;const t={c:(...n)=>jt(t,...n),use:(n,...o)=>n.install(t,...o),find:M,context:{},config:i,get __styleSheet(){if(!e){const n=document.createElement("style");return document.head.appendChild(n),e=document.styleSheets[document.styleSheets.length-1],e}return e}};return t}const Rt={name:"LayoutHeader"},qt=$(C(L({},Rt),{props:{fixed:{type:Boolean,default:!0},zIndex:{default:1001},useMinWidthLayout:{type:Boolean},minWidth:{default:1200},height:{default:56},paddingLeft:{default:0},transitionDuration:{default:300},transitionTimingFunction:{default:"ease-in-out"}},setup(i){const e=i,t=c(()=>{const{fixed:s,zIndex:r,minWidth:d,height:u,paddingLeft:f,transitionDuration:l,transitionTimingFunction:p}=e,h=s?"fixed":"static",v=e.useMinWidthLayout?`min-width:${d}px;`:"";return`position:${h};z-index:${r};${v}height:${u}px;padding-left:${f}px;transition-duration:${l}ms;transition-timing-function:${p};`}),{c:n}=T(),o=n(".admin-layout__header",{left:0,top:0,flexShrink:0,boxSizing:"border-box",width:"100%",transitionProperty:"padding-left"});return o.render(),o.mount(),(s,r)=>(g(),_("header",{class:"admin-layout__header",style:w(a(t))},[y(s.$slots,"default")],4))}})),Gt={name:"LayoutTab"},Zt=$(C(L({},Gt),{props:{fixed:{type:Boolean,default:!0},top:{default:56},zIndex:{default:999},useMinWidthLayout:{type:Boolean},minWidth:{default:1200},height:{default:56},paddingLeft:{default:0},transitionDuration:{default:300},transitionTimingFunction:{default:"ease-in-out"}},setup(i){const e=i,t=c(()=>{const{fixed:s,top:r,zIndex:d,minWidth:u,height:f,paddingLeft:l,transitionDuration:p,transitionTimingFunction:h}=e,v=s?"fixed":"static",E=e.useMinWidthLayout?`min-width: ${u}px;`:"";return`position:${v};top:${r}px;z-index:${d};${E}height:${f}px;padding-left:${l}px;transition-duration:${p}ms;transition-timing-function:${h};`}),{c:n}=T(),o=n(".admin-layout__tab",{left:0,flexShrink:0,boxSizing:"border-box",width:"100%",transitionProperty:"padding-left"});return o.render(),o.mount(),(s,r)=>(g(),_("div",{class:"admin-layout__tab",style:w(a(t))},[y(s.$slots,"default")],4))}})),Ut={name:"LayoutSider"},Nt=$(C(L({},Ut),{props:{zIndex:{default:1002},width:{default:200},paddingTop:{default:0},transitionDuration:{default:300},transitionTimingFunction:{default:"ease-in-out"}},setup(i){const e=i,t=c(()=>{const{zIndex:s,width:r,paddingTop:d,transitionDuration:u,transitionTimingFunction:f}=e;return`z-index:${s};width:${r}px;padding-top:${d}px;transition-duration:${u}ms;transition-timing-function:${f};`}),{c:n}=T(),o=n(".admin-layout__sider",{position:"fixed",left:0,top:0,boxSizing:"border-box",width:"100%",height:"100%",transitionProperty:"all"});return o.render(),o.mount(),(s,r)=>(g(),_("aside",{class:"admin-layout__sider",style:w(a(t))},[y(s.$slots,"default")],4))}})),Qt={name:"LayoutContent"},Xt=$(C(L({},Qt),{props:{paddingTop:{default:0},paddingBottom:{default:0},paddingLeft:{default:0},overflowHidden:{type:Boolean},transitionDuration:{default:300},transitionTimingFunction:{default:"ease-in-out"}},setup(i){const e=i,t=c(()=>{const{paddingTop:s,paddingBottom:r,paddingLeft:d,transitionDuration:u,transitionTimingFunction:f}=e,l=`overflow:${e.overflowHidden?"hidden":"visible"};`;return`padding-top:${s}px;padding-bottom:${r}px;padding-left:${d}px;${l}transition-duration:${u}ms;transition-timing-function:${f};`}),{c:n}=T(),o=n(".admin-layout__content",{flexGrow:1,boxSizing:"border-box",width:"100%",transitionProperty:"padding-left"});return o.render(),o.mount(),(s,r)=>(g(),_("main",{style:w(a(t)),class:"admin-layout__content"},[y(s.$slots,"default")],4))}})),Jt={name:"LayoutFooter"},Kt=$(C(L({},Jt),{props:{fixed:{type:Boolean,default:!0},zIndex:{default:999},useMinWidthLayout:{type:Boolean},minWidth:{default:1200},height:{default:56},paddingLeft:{default:0},transitionDuration:{default:300},transitionTimingFunction:{default:"ease-in-out"}},setup(i){const e=i,t=c(()=>{const{fixed:s,zIndex:r,minWidth:d,height:u,paddingLeft:f,transitionDuration:l,transitionTimingFunction:p}=e,h=s?"fixed":"static",v=e.useMinWidthLayout?`min-width:${d}px;`:"";return`position:${h};z-index:${r};${v}height:${u}px;padding-left:${f}px;transition-duration:${l}ms;transition-timing-function:${p};`}),{c:n}=T(),o=n(".admin-layout__footer",{left:0,bottom:0,flexShrink:0,boxSizing:"border-box",width:"100%",transitionProperty:"padding-left"});return o.render(),o.mount(),(s,r)=>(g(),_("footer",{class:"admin-layout__footer",style:w(a(t))},[y(s.$slots,"default")],4))}}));function Yt(i){const e=at(0),t=c(()=>`transform: translateX(${-e.value}px);`);let n=!1;function o(l){e.value=l}function s(){var l;const p=((l=document.scrollingElement)==null?void 0:l.scrollLeft)||0;o(p)}function r(){s()}function d(){document.addEventListener("scroll",s)}function u(){n&&document.removeEventListener("scroll",s)}function f(){r(),d(),n=!0}return st(i,l=>{l?f():u()},{immediate:!0}),dt(()=>{u()}),t}const te={name:"AdminLayout"},I=$(C(L({},te),{props:{mode:{default:"vertical"},isMobile:{type:Boolean,default:!1},maskBg:{default:"rgba(0,0,0,0.3)"},useMinWidthLayout:{type:Boolean,default:!1},minWidth:{default:1200},headerVisible:{type:Boolean,default:!0},headerHeight:{default:56},tabVisible:{type:Boolean,default:!0},tabHeight:{default:44},fixedHeaderAndTab:{type:Boolean,default:!0},addMainOverflowHidden:{type:Boolean,default:!1},footerVisible:{type:Boolean,default:!0},footerHeight:{default:48},fixedFooter:{type:Boolean,default:!0},siderVisible:{type:Boolean,default:!0},siderWidth:{default:200},siderCollapsedWidth:{default:64},siderCollapse:{type:Boolean,default:!1},transitionDuration:{default:300},transitionTimingFunction:{default:"ease-in-out"}},emits:["update:sider-collapse"],setup(i,{emit:e}){const t=i,n=c(()=>t.useMinWidthLayout?`min-width:${t.minWidth}px;`:""),o=c(()=>t.useMinWidthLayout&&(t.fixedHeaderAndTab||t.fixedFooter)),s=Yt(o),r=c(()=>t.fixedHeaderAndTab?s.value:""),d=c(()=>t.fixedFooter?s.value:""),u=c(()=>{const{transitionDuration:m,transitionTimingFunction:S}=t;return{transitionDuration:m,transitionTimingFunction:S}}),f=c(()=>t.mode==="vertical"),l=1001,p=999,h=c(()=>t.isMobile||f.value?1003:1e3),v=998,E=c({get(){return t.siderCollapse},set(m){e("update:sider-collapse",m)}});function K(){E.value=!0}const Y=c(()=>t.isMobile&&!E.value),tt=c(()=>{const{transitionDuration:m,transitionTimingFunction:S}=t;return`background-color:${t.maskBg};transition-duration:${m}ms;transition-timing-function:${S};`}),O=c(()=>{const{siderWidth:m,siderCollapsedWidth:S}=t,j=t.isMobile?0:S,rt=E.value?j:m;return t.siderVisible?rt:0}),B=c(()=>t.isMobile?0:O.value),et=c(()=>f.value?B.value:0),it=c(()=>!t.isMobile&&!f.value&&t.headerVisible?t.headerHeight:0),nt=c(()=>{let m=0;return t.fixedHeaderAndTab&&(t.headerVisible&&(m+=t.headerHeight),t.tabVisible&&(m+=t.tabHeight)),m}),ot=c(()=>t.fixedFooter&&t.footerVisible?t.footerHeight:0),{c:V}=T(),D=V(".admin-layout",{display:"flex",flexDirection:"column",width:"100%",height:"100%"},[V("&__sider-mask",{position:"fixed",left:0,top:0,zIndex:1002,width:"100%",height:"100%",transitionProperty:"background-color"})]);return D.render(),D.mount(),(m,S)=>(g(),_("div",{class:"admin-layout",style:w(a(n))},[i.headerVisible?(g(),P(a(qt),W({key:0},a(u),{fixed:i.fixedHeaderAndTab,"z-index":l,"min-width":i.minWidth,height:i.headerHeight,"padding-left":a(et),style:a(r)}),{default:x(()=>[y(m.$slots,"header")]),_:3},16,["fixed","min-width","height","padding-left","style"])):A("",!0),i.tabVisible?(g(),P(a(Zt),W({key:1},a(u),{fixed:i.fixedHeaderAndTab,"z-index":p,"min-width":i.minWidth,top:i.headerHeight,height:i.tabHeight,"padding-left":a(B),style:a(r)}),{default:x(()=>[y(m.$slots,"tab")]),_:3},16,["fixed","min-width","top","height","padding-left","style"])):A("",!0),i.siderVisible?(g(),P(a(Nt),W({key:2},a(u),{"z-index":a(h),width:a(O),"padding-top":a(it)}),{default:x(()=>[y(m.$slots,"sider")]),_:3},16,["z-index","width","padding-top"])):A("",!0),a(Y)?(g(),_("div",{key:3,class:"admin-layout__sider-mask",style:w(a(tt)),onClick:K},null,4)):A("",!0),b(a(Xt),W(a(u),{"padding-top":a(nt),"padding-bottom":a(ot),"padding-left":a(B),"overflow-hidden":i.addMainOverflowHidden}),{default:x(()=>[y(m.$slots,"default")]),_:3},16,["padding-top","padding-bottom","padding-left","overflow-hidden"]),i.footerVisible?(g(),P(a(Kt),W({key:4},a(u),{fixed:i.fixedFooter,"z-index":v,"min-width":i.minWidth,height:i.footerHeight,"padding-left":a(B),style:a(d)}),{default:x(()=>[y(m.$slots,"footer")]),_:3},16,["fixed","min-width","height","padding-left","style"])):A("",!0)],4))}}));function ee(i){i.component("AdminLayout",I)}I.install=ee;const ie=F(mt,[["__scopeId","data-v-e4116788"]]),ne=F(ht,[["__scopeId","data-v-0fd2c89d"]]),oe=F(gt,[["__scopeId","data-v-bad24bd9"]]),re=$({name:"BasicLayout"}),Ti=$({...re,setup(i){const e=ct(),t=pt(),{mode:n,isMobile:o,headerProps:s,siderVisible:r,siderWidth:d,siderCollapsedWidth:u}=yt();return(f,l)=>(g(),_(ft,null,[b(a(I),{mode:a(n),"is-mobile":a(o),"fixed-header-and-tab":a(t).fixedHeaderAndTab,"header-height":a(t).header.height,"tab-visible":a(t).tab.visible,"tab-height":a(t).tab.height,"sider-visible":a(r),"sider-width":a(d),"sider-collapsed-width":a(u),"sider-collapse":a(e).siderCollapse,"fixed-footer":a(t).footer.fixed,"footer-visible":a(t).footer.visible,"onUpdate:siderCollapse":a(e).setSiderCollapse},{header:x(()=>[b(a(ie),lt(ut(a(s))),null,16)]),tab:x(()=>[b(a(ne))]),sider:x(()=>[b(a(oe))]),footer:x(()=>[b(a(xt))]),default:x(()=>[b(a(bt))]),_:1},8,["mode","is-mobile","fixed-header-and-tab","header-height","tab-visible","tab-height","sider-visible","sider-width","sider-collapsed-width","sider-collapse","fixed-footer","footer-visible","onUpdate:siderCollapse"]),b(a(_t)),b(a($t))],64))}});export{Ti as default};