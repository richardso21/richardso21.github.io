(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return c(8381)}])},9816:function(d,b,a){"use strict";a.d(b,{Z:function(){return k}});var e=a(5893),c=a(5675),f=a.n(c),g={src:".//_next/static/media/medium.199a9557.svg",height:24,width:24},h={src:".//_next/static/media/github.6968ecbc.svg",height:24,width:24},i={src:".//_next/static/media/linkedin.95851985.svg",height:24,width:24},j=a(8716),k=function(b){var a=b.expandFromTopLeft;return(0,e.jsxs)(j.E.div,{id:"icon-links",className:"grid grid-cols-3 mx-2 justify-around w-52 h-14 gap-5 scale-75 sm:scale-90 child:relative child:transition-all child:ease-in-out-expo child:brightness-100 "+(void 0===a||a?"origin-top-left":"origin-center"),children:[(0,e.jsx)("a",{href:"https://richardso21.medium.com",className:"hover:brightness-125",target:"_blank",rel:"noreferrer",children:(0,e.jsx)(f(),{src:g,layout:"fill",alt:"medium"})}),(0,e.jsx)("a",{href:"https://www.github.com/richardso21",className:"hover:brightness-125",target:"_blank",rel:"noreferrer",children:(0,e.jsx)(f(),{src:h,layout:"fill",alt:"github"})}),(0,e.jsx)("a",{href:"https://www.linkedin.com/in/richardso21",className:"hover:brightness-125",target:"_blank",rel:"noreferrer",children:(0,e.jsx)(f(),{src:i,layout:"fill",alt:"linkedin"})})]})}},8941:function(d,b,a){"use strict";a.d(b,{Z:function(){return q}});var e=a(5893),f=a(7294),g=a(8716),h=a(1163),i=function(){var a=(0,h.useRouter)();return(0,e.jsx)(e.Fragment,{children:"/"!==a.pathname&&(0,e.jsx)(g.E.button,{onClick:function(){var b=a.asPath.split("/");console.log(b),b.pop(),a.push(1===b.length?"/":b.join("/"))},initial:{display:"none",opacity:0},animate:{display:"initial",opacity:1},transition:{delay:.75},className:"fixed mx-24 md:mx-36 my-5 md:my-7 z-50 scale-150 -top-px",children:(0,e.jsx)("p",{className:"text-blue-300 font-thin text-5xl leading-none [text-shadow:0_0_5px_black]",children:"\u2039"})})})},j=function(a){var b=a.isOpen,c=a.setIsOpen,d=(0,h.useRouter)();return(0,f.useEffect)(function(){d.events.on("routeChangeStart",function(){return c(!1)})}),(0,e.jsx)(g.E.button,{initial:{display:"none",opacity:0},animate:{display:"initial",opacity:1},transition:{delay:.5},className:"ham hamburger hamburger--shelf fixed mx-4 md:mx-12 my-6 md:my-8 z-50 "+(b?"active ":""),type:"button",onClick:function(){return c(!b)},children:(0,e.jsxs)("div",{className:"inner",children:[(0,e.jsx)("span",{className:"bar"}),(0,e.jsx)("span",{className:"bar"}),(0,e.jsx)("span",{className:"bar"})]})})},k=a(9816),c=a(1664),l=a.n(c),m=function(){var a="cursor-pointer hover:skew-x-12 hover:scale-125 transition ease-out active:text-blue-400 active:scale-110 italic";return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(l(),{href:"/",children:(0,e.jsx)(g.E.p,{className:a,children:"Home"})}),(0,e.jsx)(l(),{href:"/experience",children:(0,e.jsx)(g.E.p,{className:a,children:"Experience"})}),(0,e.jsx)(l(),{href:"/projects",children:(0,e.jsx)(g.E.p,{className:a,children:"Projects"})}),(0,e.jsx)(l(),{href:"/resume",children:(0,e.jsx)(g.E.p,{className:a,children:"Resume"})}),(0,e.jsx)(l(),{href:"/about",children:(0,e.jsx)(g.E.p,{className:a,children:"About Me"})})]})},n="transition-all ease-in-out-expo duration-300 h-full",o=function(b){var a=b.isOpen;return(0,e.jsx)("div",{className:n+" fixed bg-gray-400 z-30 "+(a?"w-full sm:w-96":"w-0"),children:(0,e.jsx)("div",{className:n+" absolute bg-gray-900 z-40 overflow-hidden "+(a?"w-full sm:w-96 delay-200":"w-0 delay-0"),children:(0,e.jsxs)("div",{className:"mt-5 relative flex justify-evenly flex-col child:self-center text-4xl text-white w-screen sm:w-96 h-full",children:[(0,e.jsx)(m,{}),(0,e.jsx)(k.Z,{expandFromTopLeft:!1})]})})})},p=function(c){var d=c.children,b=(0,f.useState)(!1),a=b[0],g=b[1];return(0,e.jsxs)("div",{className:"overflow-hidden",children:[(0,e.jsx)(j,{isOpen:a,setIsOpen:g}),(0,e.jsx)(i,{}),(0,e.jsx)(o,{isOpen:a}),(0,e.jsx)("div",{className:"relative transition-all ease-in-out-expo duration-500 "+(a?"left-full sm:left-96 brightness-75 blur pointer-events-none":"left-0"),children:d})]})};function q(a){var b=a.children;return(0,e.jsx)("div",{className:"dark bg-gray-800",children:(0,e.jsx)(p,{children:(0,e.jsx)("div",{className:"md:px-12 px-6 min-h-screen",children:b})})})}},8381:function(f,b,a){"use strict";a.r(b),a.d(b,{default:function(){return K}});var g=a(5893),d=a(9008),h=a.n(d),i=a(9816),j=a(8941),k=a(8716),e=a(1664),l=a.n(e),m={hidden:{opacity:0},show:{opacity:1,transition:{delayChildren:.35,staggerChildren:.1}}},n={hidden:{opacity:0,x:-500},show:{opacity:1,x:0}},o="transition ease-out hover:scale-125 hover:skew-x-12 active:text-blue-400 active:scale-110",p=function(){return(0,g.jsxs)(k.E.div,{variants:m,initial:"hidden",animate:"show",className:"mb-5 sm:text-3xl text-2xl px-2 underline underline-offset-2 flex flex-col italic decoration-gray-500 child:pb-5 child:self-start",children:[(0,g.jsx)(k.E.div,{variants:n,children:(0,g.jsx)(l(),{href:"/experience",children:(0,g.jsx)(k.E.p,{className:o+" cursor-pointer",layoutId:"experience",children:"Experience"})})}),(0,g.jsx)(k.E.div,{variants:n,children:(0,g.jsx)(l(),{href:"/projects",children:(0,g.jsx)(k.E.p,{className:o+" cursor-pointer",layoutId:"projects",children:"Projects"})})}),(0,g.jsx)(k.E.div,{variants:n,children:(0,g.jsx)(l(),{href:"/resume",children:(0,g.jsx)(k.E.p,{className:o+" cursor-pointer",layoutId:"resume",children:"Resume"})})}),(0,g.jsx)(k.E.div,{variants:n,children:(0,g.jsx)(l(),{href:"/about",children:(0,g.jsx)(k.E.p,{className:o+" cursor-pointer",layoutId:"aboutMe",children:"About Me"})})})]})},q=a(655),r=a(7294),s=a(9304),t=a(4735),u=a(8868);function v(){var a=(0,r.useRef)(!1);return(0,u.L)(function(){return a.current=!0,function(){a.current=!1}},[]),a}var w=a(240),x=a(6681),y=a(6401),z=function(a){var c=a.children,f=a.initial,b=a.isPresent,g=a.onExitComplete,h=a.custom,d=a.presenceAffectsLayout,i=(0,x.h)(A),j=(0,y.M)(),e=(0,r.useMemo)(function(){return{id:j,initial:f,isPresent:b,custom:h,onExitComplete:function(e){var c,d;i.set(e,!0);try{for(var b=(0,q.XA)(i.values()),a=b.next();!a.done;a=b.next())if(!a.value)return}catch(f){c={error:f}}finally{try{a&&!a.done&&(d=b.return)&&d.call(b)}finally{if(c)throw c.error}}null==g||g()},register:function(a){return i.set(a,!1),function(){return i.delete(a)}}}},d?void 0:[b]);return(0,r.useMemo)(function(){i.forEach(function(b,a){return i.set(a,!1)})},[b]),r.useEffect(function(){b||i.size||null==g||g()},[b]),r.createElement(w.O.Provider,{value:e},c)};function A(){return new Map}var B=a(5364),C=a(5411),D=function(a){return a.key||""},E=function(b){var w,f,d,x,g,y=b.children,J=b.custom,h=b.initial,K=void 0===h||h,L=b.onExitComplete,i=b.exitBeforeEnter,j=b.presenceAffectsLayout,M=void 0===j||j,A=(0,q.CR)((w=v(),d=(f=(0,q.CR)((0,r.useState)(0),2))[0],x=f[1],g=(0,r.useCallback)(function(){w.current&&x(d+1)},[d]),[(0,r.useCallback)(function(){return t.ZP.postRender(g)},[g]),d]),1),E=A[0],k=(0,r.useContext)(B.p).forceRender;k&&(E=k);var l,m,N=v(),n=(l=y,m=[],r.Children.forEach(l,function(a){(0,r.isValidElement)(a)&&m.push(a)}),m),a=n,c=new Set,F=(0,r.useRef)(a),O=(0,r.useRef)(new Map).current,G=(0,r.useRef)(!0);if((0,u.L)(function(){G.current=!1,function(a,b){a.forEach(function(a){var c=D(a);b.set(c,a)})}(n,O),F.current=a}),(0,C.z)(function(){G.current=!0,O.clear(),c.clear()}),G.current)return r.createElement(r.Fragment,null,a.map(function(a){return r.createElement(z,{key:D(a),isPresent:!0,initial:!!K&&void 0,presenceAffectsLayout:M},a)}));a=(0,q.ev)([],(0,q.CR)(a),!1);for(var o=F.current.map(D),H=n.map(D),I=o.length,e=0;e<I;e++){var p=o[e];-1===H.indexOf(p)&&c.add(p)}return i&&c.size&&(a=[]),c.forEach(function(b){if(-1===H.indexOf(b)){var d=O.get(b);if(d){var e=o.indexOf(b),f=function(){O.delete(b),c.delete(b);var a=F.current.findIndex(function(a){return a.key===b});if(F.current.splice(a,1),!c.size){if(F.current=n,!1===N.current)return;E(),L&&L()}};a.splice(e,0,r.createElement(z,{key:D(d),isPresent:!1,onExitComplete:f,custom:J,presenceAffectsLayout:M},d))}}}),a=a.map(function(a){var b=a.key;return c.has(b)?a:r.createElement(z,{key:D(a),isPresent:!0,presenceAffectsLayout:M},a)}),"production"!==s.O&&i&&a.length>1&&console.warn("You're attempting to animate multiple children within AnimatePresence, but its exitBeforeEnter prop is set to true. This will lead to odd visual behaviour."),r.createElement(r.Fragment,null,c.size?a:a.map(function(a){return(0,r.cloneElement)(a)}))},F=["code.","tinker.","learn.","create.","nerd out."],G=function(){var a=(0,r.useState)(1),c=a[0],e=a[1],b=(0,r.useState)(F[0]),d=b[0],f=b[1];return(0,r.useEffect)(function(){var a=setInterval(function(){e(function(a){return(a+1)%F.length}),f(F[c])},4e3);return function(){clearInterval(a)}}),(0,g.jsxs)(k.E.p,{className:"sm:text-5xl text-3xl",initial:{opacity:0,y:-100},animate:{opacity:1,y:0,transition:{delay:.5}},children:["I love to\xa0",(0,g.jsx)(E,{children:(0,g.jsx)(k.E.span,{className:"absolute text-blue-300",initial:{opacity:0,y:-40},animate:{opacity:1,y:0},exit:{opacity:0,y:40},children:d},c)})]})},H=function(){return(0,g.jsxs)("div",{id:"hero",children:[(0,g.jsx)(k.E.h1,{className:"font-bold sm:text-9xl text-6xl leading-none pt-5 self-start inline-block",layoutId:"name",children:"Richard So"}),(0,g.jsxs)(k.E.h3,{className:"pb-5 sm:pb-8 leading-none text-xl sm:text-2xl text-gray-400 italic",initial:{opacity:0,y:-50},animate:{opacity:1,y:0,transition:{delay:.3}},children:["CS @ GT ","'","24 ",(0,g.jsx)("span",{className:"not-italic",children:"|"})," Full Stack Developer & Data Scientist"]}),(0,g.jsx)(G,{})]})},I={hidden:{opacity:0},show:{opacity:1,transition:{staggerChildren:.1}}},J={hidden:{x:-500},show:{x:0}},c=function(){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(h(),{children:(0,g.jsx)("title",{children:"Richard So"})}),(0,g.jsxs)(k.E.main,{className:"text-white flex w-full h-screen flex-col justify-center",variants:I,initial:"hidden",animate:"show",children:[(0,g.jsx)(k.E.div,{variants:J,children:(0,g.jsx)(H,{})}),(0,g.jsx)(k.E.div,{variants:J,children:(0,g.jsx)("hr",{className:"sm:w-96 w-60 my-10"})}),(0,g.jsx)(k.E.div,{variants:J,children:(0,g.jsx)(p,{})}),(0,g.jsx)(k.E.div,{variants:J,children:(0,g.jsx)(i.Z,{})})]})]})};c.getLayout=function(a){return(0,g.jsx)(j.Z,{children:a})};var K=c}},function(a){a.O(0,[716,774,888,179],function(){var b;return a(a.s=8312)}),_N_E=a.O()}])