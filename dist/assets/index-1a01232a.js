import{K as b}from"./KeyBoardComponent-0af7e28b.js";import{k as re,s as r}from"./home-960dcfb4.js";import{g as ce,c as me,a as de}from"./websocket-62e52812.js";import{d as ve,b as l,f as fe,a as _e,v as ge,j as he,z as ye,q as a,l as t,ay as _}from"./runtime-core.esm-bundler-f0bd303b.js";import{_ as Ve}from"./Tag-23d0dbb9.js";import{_ as we}from"./Divider-7d229043.js";import{_ as xe}from"./Switch-d00e049a.js";import{_ as Ce}from"./Card-b56fe7ef.js";import{_ as ke,a as Me}from"./Grid-48573d10.js";import{_ as be}from"./Button-8f59a08b.js";import{_ as Pe}from"./Input-2105da9e.js";import{_ as He}from"./InputGroup-8a0a46ca.js";import{_ as Ie}from"./Select-8a4c11b6.js";import{N as Ae}from"./Space-3c4da91a.js";import{_ as Te}from"./Modal-3dc644ff.js";import{_ as Se}from"./_plugin-vue_export-helper-c27b6911.js";import"./chinese-d9d33167.js";import"./_commonjsHelpers-87174ba5.js";import"./index-be8161ee.js";import"./index-e131893c.js";import"./SvgIcon.vue_vue_type_script_setup_true_lang-016ce05e.js";import"./light-ddbeb814.js";import"./light-8cf84014.js";import"./light-78ef7eb2.js";import"./light-f7c48211.js";import"./light-8ede492f.js";import"./light-f2c5e266.js";import"./light-9a73bf95.js";import"./light-0472106f.js";import"./light-b52b7e18.js";import"./_common-991711fd.js";import"./_common-89f2509f.js";import"./_common-6222e43f.js";import"./light-bcfa0aa4.js";import"./color-to-class-b0332f36.js";import"./Loading-7bc32f77.js";import"./runtime-dom.esm-bundler-4c308a5c.js";import"./use-merged-state-c45842e4.js";import"./isSymbol-944790fb.js";import"./utils-58b198de.js";import"./is-browser-fc34c9a6.js";import"./VResizeObserver-aa804d72.js";import"./next-frame-once-7035a838.js";import"./flatten-997edf61.js";import"./get-slot-1efb97e5.js";import"./browser-ddb21091.js";import"./use-locale-30d180b9.js";import"./Scrollbar-2e2dcb58.js";import"./Suffix-2c1b9fad.js";import"./fade-in-scale-up.cssr-9e1e30d5.js";import"./use-compitable-7fe5a3c6.js";import"./render-694098f6.js";import"./cssr-0446b946.js";import"./Popover-94c1dc57.js";import"./index-ed11102f.js";import"./index-cad90cf4.js";import"./get-20f1eeba.js";import"./format-length-c9d165c6.js";import"./index-cbfaa337.js";import"./Warning-3d79f7ff.js";const N="profileVacuum",Ue=ve({__name:"index",setup(Oe){const P=l(!0),g=l(!1),h=l(!1),y=l(!1),V=l(!1),w=l(!1),I=l("23"),c=l(""),A=l("23"),m=l(""),T=l("23"),d=l(""),S=l("23"),v=l(""),U=l("0"),f=l(""),x=l(999),H=l("song0"),L=l("");function Z(){g.value===!0?g.value=!1:g.value=!0}function D(){h.value===!0?h.value=!1:h.value=!0}function R(){y.value===!0?y.value=!1:y.value=!0}function $(){V.value===!0?V.value=!1:V.value=!0}function z(){w.value===!0?w.value=!1:w.value=!0}function E(n){}function J(n){c.value=n}function W(n){}function j(n){m.value=n}function q(n){}function G(n){d.value=n}function F(n){}function Q(n){v.value=n}function X(n){}function Y(n){f.value=n}const ee=[{label:"请选择抽真空的模式",value:"song0",disabled:!0},{label:"重复抽真空模式",value:0},{label:"一步真空模式",value:1},{label:"二步真空模式",value:2}];fe(async()=>{L.value=ce(N),me(L.value),window.addEventListener("onmessageWS",ae),re(N,{"Application.HMI_VacuumConfig.h_xVacuumMainSwitch":"boolean","Application.HMI_VacuumConfig.h_rBoardInVacuumZoneTime":"float","Application.HMI_VacuumConfig.h_rVacuumDuringTime":"float","Application.HMI_VacuumConfig.h_rVacuumRebackTime":"float","Application.HMI_VacuumConfig.h_rVacuumPV":"float","Application.HMI_VacuumConfig.h_rProductLengthSetting":"float","Application.HMI_VacuumConfig.h_iVacuumMode":"short"})}),_e(()=>{de()});function ae(n){const e=JSON.parse(n.detail.data.data);if(e){const{"Application.HMI_VacuumConfig.h_xVacuumMainSwitch":u,"Application.HMI_VacuumConfig.h_rBoardInVacuumZoneTime":O,"Application.HMI_VacuumConfig.h_rVacuumDuringTime":K,"Application.HMI_VacuumConfig.h_rVacuumRebackTime":C,"Application.HMI_VacuumConfig.h_rVacuumPV":s,"Application.HMI_VacuumConfig.h_rProductLengthSetting":p,"Application.HMI_VacuumConfig.h_iVacuumMode":i}=e.result;P.value=u,I.value=O,A.value=K,T.value=C,S.value=s,U.value=p,H.value=i}}async function ne(){const n={result:P.value,dataType:"boolean",name:"Application.HMI_VacuumConfig.h_xVacuumMainSwitch"},e=[];e.push(n);const u=await r(e);console.log(u)}async function oe(){const n={result:c.value,dataType:"float",name:"Application.HMI_VacuumConfig.h_rBoardInVacuumZoneTime"},e=[];e.push(n);const u=await r(e);console.log(u)}async function te(){const n={result:m.value,dataType:"float",name:"Application.HMI_VacuumConfig.h_rVacuumDuringTime"},e=[];e.push(n);const u=await r(e);console.log(u)}async function le(){const n={result:d.value,dataType:"float",name:"Application.HMI_VacuumConfig.h_rVacuumRebackTime"},e=[];e.push(n);const u=await r(e);console.log(u)}async function ue(){const n={result:v.value,dataType:"float",name:"Application.HMI_VacuumConfig.h_rVacuumPV"},e=[];e.push(n);const u=await r(e);console.log(u)}async function se(){const n={result:f.value,dataType:"float",name:"Application.HMI_VacuumConfig.h_rProductLengthSetting"},e=[];e.push(n);const u=await r(e);console.log(u)}return ge(H,n=>{console.log(n);const e={result:n,dataType:"short",name:"Application.HMI_VacuumConfig.h_iVacuumMode"},u=[];u.push(e),r(u)}),(n,e)=>{const u=Ve,O=we,K=xe,C=Ce,s=ke,p=be,i=Pe,k=He,ie=Ie,pe=Ae,B=Me,M=Te;return he(),ye("div",null,[a(C,{class:"shadow-sm rounded-16px parent-box"},{default:t(()=>[a(B,{"x-gap":"12",cols:4},{default:t(()=>[a(s,null,{default:t(()=>[a(C,{class:"shadow-sm rounded-16px single-card flex-y-center"},{default:t(()=>[a(u,{bordered:!1,type:"info",style:{"margin-top":"40%"}},{default:t(()=>[_("真空启用状态")]),_:1}),a(O),a(K,{value:P.value,"onUpdate:value":e[0]||(e[0]=o=>P.value=o),size:"large",style:{"margin-left":"25%"},onUpdateValue:ne},null,8,["value"])]),_:1})]),_:1}),a(s,{span:"3"},{default:t(()=>[a(C,{class:"single-card"},{default:t(()=>[a(B,{"x-gap":50,"y-gap":50,cols:3,style:{"margin-top":"5%"}},{default:t(()=>[a(s,null,{default:t(()=>[a(k,null,{default:t(()=>[a(p,{type:"primary",class:"input-head"},{default:t(()=>[_(" 抽真空时间 ")]),_:1}),a(i,{value:I.value,"onUpdate:value":e[1]||(e[1]=o=>I.value=o),style:{width:"80%"},"input-props":{onclick:Z}},null,8,["value","input-props"])]),_:1})]),_:1}),a(s,null,{default:t(()=>[a(k,null,{default:t(()=>[a(p,{type:"primary",class:"input-head"},{default:t(()=>[_(" 保持真空时间 ")]),_:1}),a(i,{value:A.value,"onUpdate:value":e[2]||(e[2]=o=>A.value=o),style:{width:"80%"},"input-props":{onclick:D}},null,8,["value","input-props"])]),_:1})]),_:1}),a(s,null,{default:t(()=>[a(k,null,{default:t(()=>[a(p,{type:"primary",class:"input-head"},{default:t(()=>[_(" 充气回压时间 ")]),_:1}),a(i,{value:T.value,"onUpdate:value":e[3]||(e[3]=o=>T.value=o),style:{width:"80%"},"input-props":{onclick:R}},null,8,["value","input-props"])]),_:1})]),_:1}),a(s,null,{default:t(()=>[a(k,null,{default:t(()=>[a(p,{type:"primary",class:"input-head"},{default:t(()=>[_(" 真空压力值 ")]),_:1}),a(i,{value:S.value,"onUpdate:value":e[4]||(e[4]=o=>S.value=o),style:{width:"80%"},"input-props":{onclick:$}},null,8,["value","input-props"])]),_:1})]),_:1}),a(s,null,{default:t(()=>[a(k,null,{default:t(()=>[a(p,{type:"primary",class:"input-head"},{default:t(()=>[_(" 产品长度值 ")]),_:1}),a(i,{value:U.value,"onUpdate:value":e[5]||(e[5]=o=>U.value=o),style:{width:"80%"},"input-props":{onclick:z}},null,8,["value","input-props"])]),_:1})]),_:1}),a(s),a(s),a(s,null,{default:t(()=>[a(pe,{vertical:""},{default:t(()=>[a(ie,{value:H.value,"onUpdate:value":e[6]||(e[6]=o=>H.value=o),options:ee},null,8,["value"])]),_:1})]),_:1}),a(s)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),a(M,{show:g.value,"onUpdate:show":e[8]||(e[8]=o=>g.value=o),class:"rounded-10px",preset:"card",title:"请输入",style:{width:"600px"},onAfterLeave:oe},{default:t(()=>[a(i,{value:c.value,"onUpdate:value":e[7]||(e[7]=o=>c.value=o),type:"textarea",placeholder:"请输入"},null,8,["value"]),a(b,{ref:c.value,"keyboard-class":n.keyboardClass,input:c.value,"max-length":x.value,onOnChange:J,onOnKeyPress:E},null,8,["keyboard-class","input","max-length"])]),_:1},8,["show"]),a(M,{show:h.value,"onUpdate:show":e[10]||(e[10]=o=>h.value=o),class:"rounded-10px",preset:"card",title:"请输入",style:{width:"600px"},onAfterLeave:te},{default:t(()=>[a(i,{value:m.value,"onUpdate:value":e[9]||(e[9]=o=>m.value=o),type:"textarea",placeholder:"请输入"},null,8,["value"]),a(b,{ref:m.value,"keyboard-class":n.keyboardClass,input:m.value,"max-length":x.value,onOnChange:j,onOnKeyPress:W},null,8,["keyboard-class","input","max-length"])]),_:1},8,["show"]),a(M,{show:y.value,"onUpdate:show":e[12]||(e[12]=o=>y.value=o),class:"rounded-10px",preset:"card",title:"请输入",style:{width:"600px"},onAfterLeave:le},{default:t(()=>[a(i,{value:d.value,"onUpdate:value":e[11]||(e[11]=o=>d.value=o),type:"textarea",placeholder:"请输入"},null,8,["value"]),a(b,{ref:d.value,"keyboard-class":n.keyboardClass,input:d.value,"max-length":x.value,onOnChange:G,onOnKeyPress:q},null,8,["keyboard-class","input","max-length"])]),_:1},8,["show"]),a(M,{show:V.value,"onUpdate:show":e[14]||(e[14]=o=>V.value=o),class:"rounded-10px",preset:"card",title:"请输入",style:{width:"600px"},onAfterLeave:ue},{default:t(()=>[a(i,{value:v.value,"onUpdate:value":e[13]||(e[13]=o=>v.value=o),type:"textarea",placeholder:"请输入"},null,8,["value"]),a(b,{ref:v.value,"keyboard-class":n.keyboardClass,input:v.value,"max-length":x.value,onOnChange:Q,onOnKeyPress:F},null,8,["keyboard-class","input","max-length"])]),_:1},8,["show"]),a(M,{show:w.value,"onUpdate:show":e[16]||(e[16]=o=>w.value=o),class:"rounded-10px",preset:"card",title:"请输入",style:{width:"600px"},onAfterLeave:se},{default:t(()=>[a(i,{value:f.value,"onUpdate:value":e[15]||(e[15]=o=>f.value=o),type:"textarea",placeholder:"请输入"},null,8,["value"]),a(b,{ref:f.value,"keyboard-class":n.keyboardClass,input:f.value,"max-length":x.value,onOnChange:Y,onOnKeyPress:X},null,8,["keyboard-class","input","max-length"])]),_:1},8,["show"])])}}});const Ra=Se(Ue,[["__scopeId","data-v-796f2801"]]);export{Ra as default};
