import{S as N,i as $,s as w,e as m,t as y,k as D,c as v,a as g,h as M,d as u,m as T,b as c,g as k,L as h,M as S,E as O,O as A,$ as L}from"../chunks/index-3a3d0142.js";import{a as P}from"../chunks/index-fc77318f.js";import"../chunks/preload-helper-b55195a1.js";function B(d){let e,r,o,s,l,a;return{c(){e=m("button"),r=y("Copy"),o=D(),s=m("textarea"),this.h()},l(t){e=v(t,"BUTTON",{class:!0});var n=g(e);r=M(n,"Copy"),n.forEach(u),o=T(t),s=v(t,"TEXTAREA",{"aria-label":!0,rows:!0,class:!0}),g(s).forEach(u),this.h()},h(){c(e,"class","svelte-6bbd8h"),c(s,"aria-label","Debug text"),c(s,"rows","10"),s.readOnly=!0,s.value=d[2],c(s,"class","svelte-6bbd8h")},m(t,n){k(t,e,n),h(e,r),k(t,o,n),k(t,s,n),l||(a=S(e,"click",d[4]),l=!0)},p:O,d(t){t&&u(e),t&&u(o),t&&u(s),l=!1,a()}}}function U(d){let e,r,o,s,l,a,t,n,b,p,x,f=B(d);return{c(){e=m("section"),r=m("h1"),o=y("Wordle Peaks Debug Info"),s=D(),l=m("div"),a=m("input"),t=m("label"),n=y("Debug Mode"),b=D(),f&&f.c(),this.h()},l(_){e=v(_,"SECTION",{class:!0});var i=g(e);r=v(i,"H1",{});var C=g(r);o=M(C,"Wordle Peaks Debug Info"),C.forEach(u),s=T(i),l=v(i,"DIV",{class:!0});var E=g(l);a=v(E,"INPUT",{type:!0,id:!0,class:!0}),t=v(E,"LABEL",{for:!0});var I=g(t);n=M(I,"Debug Mode"),I.forEach(u),E.forEach(u),b=T(i),f&&f.l(i),i.forEach(u),this.h()},h(){c(a,"type","checkbox"),c(a,"id","debugMode"),c(a,"class","svelte-6bbd8h"),c(t,"for","debugMode"),c(l,"class","svelte-6bbd8h"),c(e,"class","svelte-6bbd8h")},m(_,i){k(_,e,i),h(e,r),h(r,o),h(e,s),h(e,l),h(l,a),a.checked=d[0],h(l,t),h(t,n),h(e,b),f&&f.m(e,null),p||(x=S(a,"change",d[3]),p=!0)},p(_,[i]){i&1&&(a.checked=_[0]),f.p(_,i)},i:O,o:O,d(_){_&&u(e),f&&f.d(),p=!1,x()}}}function W(d,e,r){let o;const{debugMode:s}=P;A(d,s,b=>r(0,o=b));const l=Object.entries(P).filter(([b,p])=>typeof p!="function"&&"update"in p&&b!=="boardContent").map(([b,p])=>[b,L(p)]);console.log(l);const a=JSON.stringify(l);function t(){o=this.checked,s.set(o)}return[o,s,a,t,()=>navigator.clipboard.writeText(a)]}class J extends N{constructor(e){super(),$(this,e,W,U,w,{})}}export{J as default};
