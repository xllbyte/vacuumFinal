import{k as ce,s as _}from"./home-960dcfb4.js";import{K}from"./KeyBoardComponent-0af7e28b.js";import{g as _e,c as me,a as ve}from"./websocket-62e52812.js";import{d as de,b as l,f as fe,a as ge,v as he,j as ye,z as xe,q as a,l as o,A as i,ay as A,C as j,a_ as we,aY as Ne}from"./runtime-core.esm-bundler-f0bd303b.js";import{_ as Ae}from"./Tag-23d0dbb9.js";import{_ as Ce}from"./Divider-7d229043.js";import{_ as be}from"./Switch-d00e049a.js";import{_ as Me}from"./Card-b56fe7ef.js";import{_ as Se,a as Ve}from"./Grid-48573d10.js";import{N as Ie}from"./Space-3c4da91a.js";import{_ as He}from"./Button-8f59a08b.js";import{_ as ke}from"./Select-8a4c11b6.js";import{_ as Ue}from"./Input-2105da9e.js";import{_ as Pe}from"./InputGroup-8a0a46ca.js";import{_ as Le}from"./Modal-3dc644ff.js";import{_ as Oe}from"./_plugin-vue_export-helper-c27b6911.js";import"./index-be8161ee.js";import"./_commonjsHelpers-87174ba5.js";import"./index-e131893c.js";import"./SvgIcon.vue_vue_type_script_setup_true_lang-016ce05e.js";import"./light-ddbeb814.js";import"./light-8cf84014.js";import"./light-78ef7eb2.js";import"./light-f7c48211.js";import"./light-8ede492f.js";import"./light-f2c5e266.js";import"./light-9a73bf95.js";import"./light-0472106f.js";import"./light-b52b7e18.js";import"./_common-991711fd.js";import"./_common-89f2509f.js";import"./_common-6222e43f.js";import"./light-bcfa0aa4.js";import"./chinese-d9d33167.js";import"./color-to-class-b0332f36.js";import"./Loading-7bc32f77.js";import"./runtime-dom.esm-bundler-4c308a5c.js";import"./use-merged-state-c45842e4.js";import"./isSymbol-944790fb.js";import"./utils-58b198de.js";import"./is-browser-fc34c9a6.js";import"./VResizeObserver-aa804d72.js";import"./next-frame-once-7035a838.js";import"./flatten-997edf61.js";import"./get-slot-1efb97e5.js";import"./browser-ddb21091.js";import"./fade-in-scale-up.cssr-9e1e30d5.js";import"./use-locale-30d180b9.js";import"./Scrollbar-2e2dcb58.js";import"./use-compitable-7fe5a3c6.js";import"./render-694098f6.js";import"./Suffix-2c1b9fad.js";import"./cssr-0446b946.js";import"./Popover-94c1dc57.js";import"./index-ed11102f.js";import"./index-cad90cf4.js";import"./get-20f1eeba.js";import"./format-length-c9d165c6.js";import"./index-cbfaa337.js";import"./Warning-3d79f7ff.js";const g=C=>(we("data-v-9293478b"),C=C(),Ne(),C),Ee=g(()=>i("span",null,"智能阀控制",-1)),Ke=g(()=>i("div",{class:"flex-col-center"},[i("span",null,"设定值")],-1)),Te={style:{"margin-top":"5%"}},ze=g(()=>i("span",{style:{"margin-left":"5px"}},"ppm",-1)),$e=g(()=>i("div",{style:{"margin-top":"5%"},class:"flex-col-center"},[i("p",null,"氮气")],-1)),Be={class:"flex-col-center"},Je={class:"flex-y-center"},We=g(()=>i("span",null,"氮气进气阀",-1)),je=g(()=>i("span",null,"报警功能启用状态",-1)),q="nitrogenNavigation",qe=de({__name:"index",setup(C){l(!0);const b=l(!0),M=l(!0),S=l(!0),V=l(!0),U=l("0"),m=l(""),P=l("0"),h=l(!1),y=l(!1),x=l(!1),I=l("0"),v=l(""),H=l("0"),d=l(""),T=l([]),z=l([]),$=l([]),B=l([]),u=l(1),L=l(999),J=l(""),D=[{label:"预热区",value:1},{label:"高温区第一区",value:2},{label:"高温区第四区",value:3},{label:"冷却区",value:4}];function G(){h.value===!0?h.value=!1:h.value=!0}function Y(t){}function F(t){m.value=t}function Q(t){}function R(t){v.value=t}function X(t){}function Z(t){d.value=t}function ee(){y.value===!0?y.value=!1:y.value=!0}function ae(){x.value===!0?x.value=!1:x.value=!0}fe(async()=>{J.value=_e(q),me(J.value),window.addEventListener("onmessageWS",te),ce(q,{"Application.HMI_N2Config.h_xN2EnableSwitch[0]":"boolean","Application.HMI_N2Config.h_xN2valveSwitch[0]":"boolean","Application.HMI_N2Config.h_rN2_SV":"floats","Application.HMI_N2Config.h_rN2_PV":"floats","Application.HMI_N2Config.h_rN2_MaxLimit":"floats","Application.HMI_N2Config.h_rN2_MinLimit":"floats","Application.HMI_N2Config.h_xAutoValveControlSwitch":"boolean","Application.HMI_N2Config.h_xN2_AlarmEnableSwitch":"boolean"})}),ge(()=>{ve()});function te(t){const e=JSON.parse(t.detail.data.data);if(e){const{"Application.HMI_N2Config.h_xN2EnableSwitch[0]":s,"Application.HMI_N2Config.h_xN2valveSwitch[0]":O,"Application.HMI_N2Config.h_rN2_SV":c,"Application.HMI_N2Config.h_rN2_PV":r,"Application.HMI_N2Config.h_rN2_MaxLimit":p,"Application.HMI_N2Config.h_rN2_MinLimit":w,"Application.HMI_N2Config.h_xAutoValveControlSwitch":k,"Application.HMI_N2Config.h_xN2_AlarmEnableSwitch":f}=e.result;T.value=c,z.value=r,$.value=p,B.value=w,U.value=c[u.value-1],P.value=r[u.value-1],I.value=p[u.value-1],H.value=w[u.value-1],b.value=s,M.value=O,S.value=k,V.value=f}}async function ne(){const t={result:b.value,dataType:"boolean",name:"Application.HMI_N2Config.h_xN2EnableSwitch[0]"},e=[];e.push(t);const s=await _(e);console.log(s)}async function oe(){const t={result:M.value,dataType:"boolean",name:"Application.HMI_N2Config.h_xN2valveSwitch[0]"},e=[];e.push(t);const s=await _(e);console.log(s)}async function le(){const t={result:V.value,dataType:"boolean",name:"Application.HMI_N2Config.h_xN2_AlarmEnableSwitch"},e=[];e.push(t);const s=await _(e);console.log(s)}async function ie(){const t={result:S.value,dataType:"boolean",name:"Application.HMI_N2Config.h_xAutoValveControlSwitch"},e=[];e.push(t);const s=await _(e);console.log(s)}async function se(){console.log("关闭事件");const t={result:m.value,dataType:"float",name:`Application.HMI_N2Config.h_rN2_SV[${u.value-1}]`},e=[];e.push(t),await _(e)}async function ue(){const t={result:v.value,dataType:"float",name:`Application.HMI_N2Config.h_rN2_MaxLimit[${u.value-1}]`},e=[];e.push(t),await _(e)}async function pe(){const t={result:d.value,dataType:"float",name:`Application.HMI_N2Config.h_rN2_MinLimit[${u.value-1}]`},e=[];e.push(t),await _(e)}return he(u,t=>{U.value=T.value[t-1],P.value=z.value[t-1],I.value=$.value[t-1],H.value=B.value[t-1]}),(t,e)=>{const s=Ae,O=Ce,c=be,r=Me,p=Se,w=Ie,k=Ve,f=He,re=ke,N=Ue,W=Pe,E=Le;return ye(),xe("div",null,[a(r,{title:"N2",class:"shadow-sm rounded-16px parent-box"},{default:o(()=>[i("div",null,[a(k,{"x-gap":12,"y-gap":8,cols:3},{default:o(()=>[a(p,null,{default:o(()=>[a(r,{class:"shadow-sm rounded-16px single-card flex-y-center"},{default:o(()=>[a(s,{bordered:!1,type:"info",style:{"margin-top":"40%"}},{default:o(()=>[A("氮气启用状态")]),_:1}),a(O),a(c,{value:b.value,"onUpdate:value":e[0]||(e[0]=n=>b.value=n),size:"large",style:{"margin-left":"25%"},onUpdateValue:ne},null,8,["value"])]),_:1})]),_:1}),a(p,null,{default:o(()=>[a(r,{class:"shadow-sm rounded-16px single-card"})]),_:1}),a(p,null,{default:o(()=>[a(r,{class:"shadow-sm rounded-16px single-card"},{default:o(()=>[a(w,{vertical:"",style:{"margin-top":"10%"}},{default:o(()=>[Ee,a(c,{value:S.value,"onUpdate:value":e[1]||(e[1]=n=>S.value=n),size:"large",onUpdateValue:ie},null,8,["value"])]),_:1})]),_:1})]),_:1})]),_:1})]),i("div",null,[a(r,{class:"shadow-sm rounded-16px",style:{"margin-top":"10px"}},{default:o(()=>[i("div",null,[a(k,{"x-gap":12,"y-gap":8,cols:3},{default:o(()=>[a(p,null,{default:o(()=>[Ke,i("div",Te,[a(f,{type:"primary",strong:"",secondary:"",style:{width:"40%","margin-left":"30%"},onClick:G},{default:o(()=>[A(j(U.value),1)]),_:1}),ze]),$e,i("div",Be,[a(f,{type:"tertiary",style:{width:"40%"},strong:"",secondary:""},{default:o(()=>[A(j(P.value),1)]),_:1})])]),_:1}),a(p,null,{default:o(()=>[a(re,{value:u.value,"onUpdate:value":e[2]||(e[2]=n=>u.value=n),size:"medium",options:D,style:{width:"80%"}},null,8,["value"]),i("div",null,[a(W,{style:{"margin-top":"10%"}},{default:o(()=>[a(f,{type:"primary",class:"input-head"},{default:o(()=>[A(" 警报上线 ")]),_:1}),a(N,{value:I.value,"onUpdate:value":e[3]||(e[3]=n=>I.value=n),style:{width:"40%"},"input-props":{onclick:ee}},null,8,["value","input-props"])]),_:1})]),i("div",null,[a(W,{style:{"margin-top":"10%"}},{default:o(()=>[a(f,{type:"primary",class:"input-head"},{default:o(()=>[A(" 警报下线 ")]),_:1}),a(N,{value:H.value,"onUpdate:value":e[4]||(e[4]=n=>H.value=n),style:{width:"40%"},"input-props":{onclick:ae}},null,8,["value","input-props"])]),_:1})])]),_:1}),a(p,null,{default:o(()=>[i("div",Je,[a(w,{vertical:""},{default:o(()=>[We,a(c,{value:M.value,"onUpdate:value":e[5]||(e[5]=n=>M.value=n),size:"large",onUpdateValue:oe},null,8,["value"]),je,a(c,{value:V.value,"onUpdate:value":e[6]||(e[6]=n=>V.value=n),size:"large",onUpdateValue:le},null,8,["value"])]),_:1})])]),_:1})]),_:1})])]),_:1})])]),_:1}),a(E,{show:h.value,"onUpdate:show":e[8]||(e[8]=n=>h.value=n),class:"rounded-10px",preset:"card",title:"请输入",style:{width:"600px"},onAfterLeave:se},{default:o(()=>[a(N,{value:m.value,"onUpdate:value":e[7]||(e[7]=n=>m.value=n),type:"textarea",placeholder:"请输入"},null,8,["value"]),a(K,{ref:m.value,"keyboard-class":t.keyboardClass,input:m.value,"max-length":L.value,onOnChange:F,onOnKeyPress:Y},null,8,["keyboard-class","input","max-length"])]),_:1},8,["show"]),a(E,{show:y.value,"onUpdate:show":e[10]||(e[10]=n=>y.value=n),class:"rounded-10px",preset:"card",title:"请输入",style:{width:"600px"},onAfterLeave:ue},{default:o(()=>[a(N,{value:v.value,"onUpdate:value":e[9]||(e[9]=n=>v.value=n),type:"textarea",placeholder:"请输入"},null,8,["value"]),a(K,{ref:v.value,"keyboard-class":t.keyboardClass,input:v.value,"max-length":L.value,onOnChange:R,onOnKeyPress:Q},null,8,["keyboard-class","input","max-length"])]),_:1},8,["show"]),a(E,{show:x.value,"onUpdate:show":e[12]||(e[12]=n=>x.value=n),class:"rounded-10px",preset:"card",title:"请输入",style:{width:"600px"},onAfterLeave:pe},{default:o(()=>[a(N,{value:d.value,"onUpdate:value":e[11]||(e[11]=n=>d.value=n),type:"textarea",placeholder:"请输入"},null,8,["value"]),a(K,{ref:d.value,"keyboard-class":t.keyboardClass,input:d.value,"max-length":L.value,onOnChange:Z,onOnKeyPress:X},null,8,["keyboard-class","input","max-length"])]),_:1},8,["show"])])}}});const Xa=Oe(qe,[["__scopeId","data-v-9293478b"]]);export{Xa as default};