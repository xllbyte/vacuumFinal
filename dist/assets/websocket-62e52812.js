import{M as I}from"./index-be8161ee.js";let s;const _=new Uint8Array(16);function g(){if(!s&&(s=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!s))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return s(_)}const o=[];for(let n=0;n<256;++n)o.push((n+256).toString(16).slice(1));function p(n,e=0){return(o[n[e+0]]+o[n[e+1]]+o[n[e+2]]+o[n[e+3]]+"-"+o[n[e+4]]+o[n[e+5]]+"-"+o[n[e+6]]+o[n[e+7]]+"-"+o[n[e+8]]+o[n[e+9]]+"-"+o[n[e+10]]+o[n[e+11]]+o[n[e+12]]+o[n[e+13]]+o[n[e+14]]+o[n[e+15]]).toLowerCase()}const S=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),a={randomUUID:S};function T(n,e,r){if(a.randomUUID&&!e&&!n)return a.randomUUID();n=n||{};const c=n.random||(n.rng||g)();if(c[6]=c[6]&15|64,c[8]=c[8]&63|128,e){r=r||0;for(let l=0;l<16;++l)e[r+l]=c[l];return e}return p(c)}const{url:V}=I({VITE_BASE_URL:"/",VITE_APP_NAME:"真空回流炉",VITE_APP_TITLE:"真空回流炉管理系统",VITE_APP_DESC:"一个中后台管理系统模版",VITE_AUTH_ROUTE_MODE:"static",VITE_ROUTE_HOME_PATH:"/dashboard/analysis",VITE_ICON_PREFFIX:"icon",VITE_ICON_LOCAL_PREFFIX:"icon-local",VITE_VISUALIZER:"N",VITE_COMPRESS:"N",VITE_COMPRESS_TYPE:"gzip",VITE_PWA:"N",VITE_SERVICE_ENV:"dev",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0});let t=null,u=null,E="",i=!1;function d(n){if(console.log("createSocket"),t)console.log("websocket已连接");else{console.log("建立websocket连接");const e=V.replace("http://","");console.log("socket地址",e),t=new WebSocket(`ws://${e}/websocket/${n}`),E=n,t.onopen=U,t.onmessage=P,t.onerror=m,t.onclose=y}}function U(){R()}function m(){clearInterval(u),t.close(),d(E)}function P(n){window.dispatchEvent(new CustomEvent("onmessageWS",{detail:{data:n}}))}function y(){clearInterval(u),console.log(`websocket已断开${i}`),i||(t.close(),t=null,d(E)),i=!1}function R(){t.send("ping"),u=setInterval(()=>{t.send("ping")},5e3)}function v(){t.close(),t=null,i=!0}function A(n){return`${n}-${T().substr(0,8)}`}export{v as a,d as c,A as g};