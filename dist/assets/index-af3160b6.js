function y(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function a(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?a=function(n){return typeof n}:a=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},a(t)}function w(t){y(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||a(t)==="object"&&e==="[object Date]"?new Date(t.getTime()):typeof t=="number"||e==="[object Number]"?new Date(t):((typeof t=="string"||e==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function g(t){if(t===null||t===!0||t===!1)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}var S={};function O(){return S}function m(t,e){var n,l,s,i,f,u,c,d;y(1,arguments);var p=O(),r=g((n=(l=(s=(i=e==null?void 0:e.weekStartsOn)!==null&&i!==void 0?i:e==null||(f=e.locale)===null||f===void 0||(u=f.options)===null||u===void 0?void 0:u.weekStartsOn)!==null&&s!==void 0?s:p.weekStartsOn)!==null&&l!==void 0?l:(c=p.locale)===null||c===void 0||(d=c.options)===null||d===void 0?void 0:d.weekStartsOn)!==null&&n!==void 0?n:0);if(!(r>=0&&r<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var o=w(t),v=o.getUTCDay(),b=(v<r?7:0)+v-r;return o.setUTCDate(o.getUTCDate()-b),o.setUTCHours(0,0,0,0),o}export{g as a,O as g,y as r,m as s,w as t};