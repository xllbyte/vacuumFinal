import{u as B,h as S,l as C,n as G}from"./light-ddbeb814.js";import{i as R}from"./is-browser-fc34c9a6.js";import{c as j}from"./_common-89f2509f.js";import{a as E,d as x}from"./isSymbol-944790fb.js";import{f as I}from"./flatten-997edf61.js";import{g as L}from"./get-slot-1efb97e5.js";import{d as M,c as P,h as v}from"./runtime-core.esm-bundler-f0bd303b.js";const T=()=>j,A={name:"Space",self:T},N=A;let h;const O=()=>{if(!R)return!0;if(h===void 0){const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e);const a=e.scrollHeight===1;return document.body.removeChild(e),h=a}return h},W=Object.assign(Object.assign({},S.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,size:{type:[String,Number,Array],default:"medium"},wrapItem:{type:Boolean,default:!0},itemStyle:[String,Object],wrap:{type:Boolean,default:!0},internalUseGap:{type:Boolean,default:void 0}}),k=M({name:"Space",props:W,setup(e){const{mergedClsPrefixRef:a,mergedRtlRef:u}=B(e),n=S("Space","-space",void 0,N,e,a),f=C("Space",u,a);return{useGap:O(),rtlEnabled:f,mergedClsPrefix:a,margin:P(()=>{const{size:t}=e;if(Array.isArray(t))return{horizontal:t[0],vertical:t[1]};if(typeof t=="number")return{horizontal:t,vertical:t};const{self:{[G("gap",t)]:g}}=n.value,{row:l,col:p}=E(g);return{horizontal:x(p),vertical:x(l)}})}},render(){const{vertical:e,align:a,inline:u,justify:n,itemStyle:f,margin:t,wrap:g,mergedClsPrefix:l,rtlEnabled:p,useGap:i,wrapItem:b,internalUseGap:w}=this,c=I(L(this));if(!c.length)return null;const y=`${t.horizontal}px`,m=`${t.horizontal/2}px`,$=`${t.vertical}px`,o=`${t.vertical/2}px`,s=c.length-1,d=n.startsWith("space-");return v("div",{role:"none",class:[`${l}-space`,p&&`${l}-space--rtl`],style:{display:u?"inline-flex":"flex",flexDirection:e?"column":"row",justifyContent:["start","end"].includes(n)?"flex-"+n:n,flexWrap:!g||e?"nowrap":"wrap",marginTop:i||e?"":`-${o}`,marginBottom:i||e?"":`-${o}`,alignItems:a,gap:i?`${t.vertical}px ${t.horizontal}px`:""}},!b&&(i||w)?c:c.map((z,r)=>v("div",{role:"none",style:[f,{maxWidth:"100%"},i?"":e?{marginBottom:r!==s?$:""}:p?{marginLeft:d?n==="space-between"&&r===s?"":m:r!==s?y:"",marginRight:d?n==="space-between"&&r===0?"":m:"",paddingTop:o,paddingBottom:o}:{marginRight:d?n==="space-between"&&r===s?"":m:r!==s?y:"",marginLeft:d?n==="space-between"&&r===0?"":m:"",paddingTop:o,paddingBottom:o}]},z)))}});export{k as N};