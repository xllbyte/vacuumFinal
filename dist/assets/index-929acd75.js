import{K as T}from"./KeyBoardComponent-0af7e28b.js";import{k as pe,s as w}from"./home-960dcfb4.js";import{g as re,c as de,a as ce}from"./websocket-62e52812.js";import{_ as fe}from"./InputGroupLabel-9cc89ce0.js";import{d as _e,b as u,e as ve,f as me,a as ge,j as N,z as F,q as a,l,ay as i,F as he,B as ye,k as ke,A as Ce}from"./runtime-core.esm-bundler-f0bd303b.js";import{_ as Se}from"./Button-8f59a08b.js";import{_ as He}from"./Input-2105da9e.js";import{_ as Me}from"./InputGroup-8a0a46ca.js";import{_ as Te}from"./Card-b56fe7ef.js";import{_ as we}from"./Divider-7d229043.js";import{N as Ve}from"./Space-3c4da91a.js";import{_ as Ae,a as Ie}from"./Grid-48573d10.js";import{_ as xe}from"./Modal-3dc644ff.js";import{_ as Pe}from"./_plugin-vue_export-helper-c27b6911.js";import"./chinese-d9d33167.js";import"./_commonjsHelpers-87174ba5.js";import"./index-be8161ee.js";import"./index-e131893c.js";import"./SvgIcon.vue_vue_type_script_setup_true_lang-016ce05e.js";import"./light-ddbeb814.js";import"./light-8cf84014.js";import"./light-78ef7eb2.js";import"./light-f7c48211.js";import"./light-8ede492f.js";import"./light-f2c5e266.js";import"./light-9a73bf95.js";import"./light-0472106f.js";import"./light-b52b7e18.js";import"./_common-991711fd.js";import"./_common-89f2509f.js";import"./_common-6222e43f.js";import"./light-bcfa0aa4.js";import"./browser-ddb21091.js";import"./is-browser-fc34c9a6.js";import"./Loading-7bc32f77.js";import"./runtime-dom.esm-bundler-4c308a5c.js";import"./color-to-class-b0332f36.js";import"./use-locale-30d180b9.js";import"./Scrollbar-2e2dcb58.js";import"./VResizeObserver-aa804d72.js";import"./use-merged-state-c45842e4.js";import"./isSymbol-944790fb.js";import"./Suffix-2c1b9fad.js";import"./flatten-997edf61.js";import"./get-slot-1efb97e5.js";import"./utils-58b198de.js";import"./next-frame-once-7035a838.js";import"./render-694098f6.js";import"./Warning-3d79f7ff.js";import"./index-ed11102f.js";import"./index-cad90cf4.js";import"./fade-in-scale-up.cssr-9e1e30d5.js";import"./index-cbfaa337.js";const be={class:"light-green"},K="profileTrack",We=_e({__name:"index",setup(Ue){const h=u(!1),y=u(!1),k=u(!1),C=u(!1),S=u(!1),A=u(0),_=u(""),I=u(0),v=u(""),x=u(0),m=u(""),P=u(0),H=u(""),M=u(999),b=u("0"),g=u("0"),W=u(0),U=u(0),D=u(0),O=u("");function z(t){}function J(t){g.value=t}function j(t){_.value=t}function q(t){v.value=t}function G(t){m.value=t}function $(t){H.value=t}const Q=ve([{id:1}]);function X(){h.value===!0?h.value=!1:h.value=!0}me(async()=>{O.value=re(K),de(O.value),window.addEventListener("onmessageWS",Y),pe(K,{"Application.HMI_TrackConfig.h_rMiddleSupportHightSV[0]":"float","Application.HMI_TrackConfig.h_rMiddleSupportHightPV[0]":"float","Application.HMI_TrackConfig.h_rMiddleSupportWidthSV[0]":"float","Application.HMI_TrackConfig.h_rMiddleSupportWidthPV[0]":"float","Application.HMI_TrackConfig.h_rTrackWidthSV[0]":"float","Application.HMI_TrackConfig.h_rTrackWidthPV[0]":"float","Application.HMI_HomePage.h_rChainSpeedPV":"float","Application.HMI_HomePage.h_rChainSpeedSV":"float","Application.HMI_TrackConfig.h_rCodeReadDelay":"floats","Application.HMI_TrackConfig.h_rPCB_SeparationDistance":"float","Application.HMI_TrackConfig.h_rInSensorRisingEdgeDelay":"float","Application.HMI_TrackConfig.h_rInSensorFallingEdgeDelay":"float"})}),ge(()=>{ce()});function Y(t){const e=JSON.parse(t.detail.data.data);if(e){const{"Application.HMI_TrackConfig.h_rMiddleSupportHightSV[0]":o,"Application.HMI_TrackConfig.h_rMiddleSupportHightPV[0]":s,"Application.HMI_TrackConfig.h_rMiddleSupportWidthSV[0]":r,"Application.HMI_TrackConfig.h_rMiddleSupportWidthPV[0]":d,"Application.HMI_TrackConfig.h_rTrackWidthSV[0]":V,"Application.HMI_TrackConfig.h_rTrackWidthPV[0]":R,"Application.HMI_HomePage.h_rChainSpeedPV":B,"Application.HMI_HomePage.h_rChainSpeedSV":E,"Application.HMI_TrackConfig.h_rCodeReadDelay":L,"Application.HMI_TrackConfig.h_rPCB_SeparationDistance":c,"Application.HMI_TrackConfig.h_rInSensorRisingEdgeDelay":n,"Application.HMI_TrackConfig.h_rInSensorFallingEdgeDelay":f}=e.result;A.value=se(E),I.value=o,x.value=r,P.value=V,b.value=L,W.value=c,U.value=n,D.value=f}}function Z(t){y.value===!0?y.value=!1:y.value=!0}function ee(t){k.value===!0?k.value=!1:k.value=!0}function ae(t){C.value===!0?C.value=!1:C.value=!0}function te(t){S.value===!0?S.value=!1:S.value=!0}async function le(){const t={result:_.value,dataType:"float",name:"Application.HMI_HomePage.h_rChainSpeedSV"},e=[];e.push(t);const o=await w(e);console.log(o)}async function ne(){const t={result:g.value,dataType:"float",name:"Application.HMI_TrackConfig.h_rCodeReadDelay[0]"},e=[];e.push(t);const o=await w(e);console.log(o)}async function oe(){const t={result:v.value,dataType:"float",name:"Application.HMI_TrackConfig.h_rMiddleSupportHightSV[0]"},e=[];e.push(t);const o=await w(e);console.log(o)}async function ue(){const t={result:m.value,dataType:"float",name:"Application.HMI_TrackConfig.h_rMiddleSupportWidthSV[0]"},e=[];e.push(t);const o=await w(e);console.log(o)}async function ie(){const t={result:H.value,dataType:"float",name:"Application.HMI_TrackConfig.h_rTrackWidthSV[0]"},e=[];e.push(t);const o=await w(e);console.log(o)}function se(t){return(Number(t)/1e3*60).toFixed(2)}return(t,e)=>{const o=Se,s=He,r=fe,d=Me,V=Te,R=we,B=Ve,E=Ae,L=Ie,c=xe;return N(),F("div",null,[a(B,{vertical:!0,size:16},{default:l(()=>[a(V,{bordered:!1,class:"rounded-16px shadow-sm",title:"设置"},{default:l(()=>[a(d,null,{default:l(()=>[a(o,{type:"info",strong:"",secondary:"",class:"input-group-head"},{default:l(()=>[i("条码重读延时")]),_:1}),a(s,{value:b.value,"onUpdate:value":e[0]||(e[0]=n=>b.value=n),style:{width:"20%"},"input-props":{onclick:X}},null,8,["value","input-props"]),a(r,null,{default:l(()=>[i("sec")]),_:1})]),_:1})]),_:1}),a(L,{"x-gap":"12",cols:2},{default:l(()=>[(N(!0),F(he,null,ye(Q,(n,f)=>(N(),ke(E,{key:n.id},{default:l(()=>[Ce("div",be,[a(V,{class:"shadow-sm rounded-16px",title:"轨道"+(f+1)},{default:l(()=>[a(B,{vertical:""},{default:l(()=>[a(d,null,{default:l(()=>[a(o,{type:"info",strong:"",secondary:"",class:"input-group-head"},{default:l(()=>[i("链速")]),_:1}),a(s,{value:A.value,"onUpdate:value":e[1]||(e[1]=p=>A.value=p),style:{width:"33%"},"input-props":{onClick:()=>Z(f)}},null,8,["value","input-props"]),a(r,null,{default:l(()=>[i("m/min")]),_:1})]),_:2},1024),a(d,null,{default:l(()=>[a(o,{type:"info",strong:"",secondary:"",class:"input-group-head"},{default:l(()=>[i("中间支撑高度")]),_:1}),a(s,{value:I.value,"onUpdate:value":e[2]||(e[2]=p=>I.value=p),style:{width:"33%"},"input-props":{onClick:()=>ee(f)}},null,8,["value","input-props"]),a(r,null,{default:l(()=>[i("m/min")]),_:1})]),_:2},1024),a(d,null,{default:l(()=>[a(o,{type:"info",strong:"",secondary:"",class:"input-group-head"},{default:l(()=>[i("中间支撑宽度")]),_:1}),a(s,{value:x.value,"onUpdate:value":e[3]||(e[3]=p=>x.value=p),style:{width:"33%"},"input-props":{onClick:()=>ae(f)}},null,8,["value","input-props"]),a(r,null,{default:l(()=>[i("m/min")]),_:1})]),_:2},1024),a(d,null,{default:l(()=>[a(o,{type:"info",strong:"",secondary:"",class:"input-group-head"},{default:l(()=>[i("动轨轨道宽度")]),_:1}),a(s,{value:P.value,"onUpdate:value":e[4]||(e[4]=p=>P.value=p),style:{width:"33%"},"input-props":{onClick:()=>te(f)}},null,8,["value","input-props"]),a(r,null,{default:l(()=>[i("m/min")]),_:1})]),_:2},1024),a(R),a(d,null,{default:l(()=>[a(o,{type:"info",strong:"",secondary:"",class:"input-group-head"},{default:l(()=>[i("PCB距离")]),_:1}),a(s,{style:{width:"33%"},value:W.value,"onUpdate:value":e[5]||(e[5]=p=>W.value=p)},null,8,["value"]),a(r,null,{default:l(()=>[i("cm")]),_:1})]),_:1}),a(d,null,{default:l(()=>[a(o,{type:"info",strong:"",secondary:"",class:"input-group-head"},{default:l(()=>[i("传感器上升边")]),_:1}),a(s,{style:{width:"33%"},value:U.value,"onUpdate:value":e[6]||(e[6]=p=>U.value=p)},null,8,["value"]),a(r,null,{default:l(()=>[i("sec")]),_:1})]),_:1}),a(d,null,{default:l(()=>[a(o,{type:"info",strong:"",secondary:"",class:"input-group-head"},{default:l(()=>[i("传感器下降边")]),_:1}),a(s,{style:{width:"33%"},value:D.value,"onUpdate:value":e[7]||(e[7]=p=>D.value=p)},null,8,["value"]),a(r,null,{default:l(()=>[i("sec")]),_:1})]),_:1})]),_:2},1024)]),_:2},1032,["title"])])]),_:2},1024))),128))]),_:1})]),_:1}),a(c,{show:h.value,"onUpdate:show":e[9]||(e[9]=n=>h.value=n),class:"rounded-10px",preset:"card",title:"请输入",style:{width:"600px"},onAfterLeave:ne},{default:l(()=>[a(s,{value:g.value,"onUpdate:value":e[8]||(e[8]=n=>g.value=n),type:"textarea",placeholder:"请输入"},null,8,["value"]),a(T,{ref:g.value,"keyboard-class":t.keyboardClass,input:g.value,"max-length":M.value,onOnChange:J,onOnKeyPress:z},null,8,["keyboard-class","input","max-length"])]),_:1},8,["show"]),a(c,{show:y.value,"onUpdate:show":e[11]||(e[11]=n=>y.value=n),class:"rounded-10px",preset:"card",title:"请输入",style:{width:"600px"},onAfterLeave:le},{default:l(()=>[a(s,{value:_.value,"onUpdate:value":e[10]||(e[10]=n=>_.value=n),type:"textarea",placeholder:"请输入"},null,8,["value"]),a(T,{ref:_.value,"keyboard-class":t.keyboardClass,input:_.value,"max-length":M.value,onOnChange:j},null,8,["keyboard-class","input","max-length"])]),_:1},8,["show"]),a(c,{show:k.value,"onUpdate:show":e[13]||(e[13]=n=>k.value=n),class:"rounded-10px",preset:"card",title:"请输入",style:{width:"600px"},onAfterLeave:oe},{default:l(()=>[a(s,{value:v.value,"onUpdate:value":e[12]||(e[12]=n=>v.value=n),type:"textarea",placeholder:"请输入"},null,8,["value"]),a(T,{ref:v.value,"keyboard-class":t.keyboardClass,input:v.value,"max-length":M.value,onOnChange:q},null,8,["keyboard-class","input","max-length"])]),_:1},8,["show"]),a(c,{show:C.value,"onUpdate:show":e[15]||(e[15]=n=>C.value=n),class:"rounded-10px",preset:"card",title:"请输入",style:{width:"600px"},onAfterLeave:ue},{default:l(()=>[a(s,{value:m.value,"onUpdate:value":e[14]||(e[14]=n=>m.value=n),type:"textarea",placeholder:"请输入"},null,8,["value"]),a(T,{ref:m.value,"keyboard-class":t.keyboardClass,input:m.value,"max-length":M.value,onOnChange:G},null,8,["keyboard-class","input","max-length"])]),_:1},8,["show"]),a(c,{show:S.value,"onUpdate:show":e[17]||(e[17]=n=>S.value=n),class:"rounded-10px",preset:"card",title:"请输入",style:{width:"600px"},onAfterLeave:ie},{default:l(()=>[a(s,{value:H.value,"onUpdate:value":e[16]||(e[16]=n=>H.value=n),type:"textarea",placeholder:"请输入"},null,8,["value"]),a(T,{ref:H.value,"keyboard-class":t.keyboardClass,input:t.trackfinalTrackWidthWidth,"max-length":M.value,onOnChange:$},null,8,["keyboard-class","input","max-length"])]),_:1},8,["show"])])}}});const Ua=Pe(We,[["__scopeId","data-v-b743cb4c"]]);export{Ua as default};