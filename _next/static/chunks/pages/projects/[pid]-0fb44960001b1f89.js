(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[22],{2226:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/[pid]",function(){return i(3600)}])},9816:function(e,t,i){"use strict";i.d(t,{Z:function(){return d}});var n=i(5893),s=i(5675),r=i.n(s),a={src:".//_next/static/media/medium.199a9557.svg",height:24,width:24},l={src:".//_next/static/media/github.6968ecbc.svg",height:24,width:24},c={src:".//_next/static/media/linkedin.95851985.svg",height:24,width:24},o=i(8716),d=function(e){var t=e.expandFromTopLeft,i=void 0===t||t;return(0,n.jsxs)(o.E.div,{id:"icon-links",className:"grid grid-cols-3 mx-2 justify-around w-52 h-14 gap-5 scale-75 sm:scale-90 child:relative child:transition-all child:ease-in-out-expo child:brightness-100 "+(i?"origin-top-left":"origin-center"),children:[(0,n.jsx)("a",{href:"https://richardso21.medium.com",className:"hover:brightness-125",target:"_blank",rel:"noreferrer",children:(0,n.jsx)(r(),{src:a,layout:"fill",alt:"medium"})}),(0,n.jsx)("a",{href:"https://www.github.com/richardso21",className:"hover:brightness-125",target:"_blank",rel:"noreferrer",children:(0,n.jsx)(r(),{src:l,layout:"fill",alt:"github"})}),(0,n.jsx)("a",{href:"https://www.linkedin.com/in/richardso21",className:"hover:brightness-125",target:"_blank",rel:"noreferrer",children:(0,n.jsx)(r(),{src:c,layout:"fill",alt:"linkedin"})})]})}},8941:function(e,t,i){"use strict";i.d(t,{Z:function(){return p}});var n=i(5893),s=i(7294),r=i(8716),a=i(1163),l=function(){var e=(0,a.useRouter)();return(0,n.jsx)(n.Fragment,{children:"/"!==e.pathname&&(0,n.jsx)(r.E.button,{onClick:function(){var t=e.asPath.split("/");console.log(t),t.pop(),e.push(1===t.length?"/":t.join("/"))},initial:{display:"none",opacity:0},animate:{display:"initial",opacity:1},transition:{delay:.75},className:"fixed mx-24 md:mx-36 my-5 md:my-7 z-50 scale-150 -top-px",children:(0,n.jsx)("p",{className:"text-blue-300 font-thin text-5xl leading-none [text-shadow:0_0_5px_black]",children:"\u2039"})})})},c=function(e){var t=e.isOpen,i=e.setIsOpen,l=(0,a.useRouter)();return(0,s.useEffect)((function(){l.events.on("routeChangeStart",(function(){return i(!1)}))})),(0,n.jsx)(r.E.button,{initial:{display:"none",opacity:0},animate:{display:"initial",opacity:1},transition:{delay:.5},className:"ham hamburger hamburger--shelf fixed mx-4 md:mx-12 my-6 md:my-8 z-50 "+(t?"active ":""),type:"button",onClick:function(){return i(!t)},children:(0,n.jsxs)("div",{className:"inner",children:[(0,n.jsx)("span",{className:"bar"}),(0,n.jsx)("span",{className:"bar"}),(0,n.jsx)("span",{className:"bar"})]})})},o=i(9816),d=i(1664),h=i.n(d),u=function(){var e="cursor-pointer hover:skew-x-12 hover:scale-125 transition ease-out active:text-blue-400 active:scale-110 italic";return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(h(),{href:"/",children:(0,n.jsx)(r.E.p,{className:e,children:"Home"})}),(0,n.jsx)(h(),{href:"/experience",children:(0,n.jsx)(r.E.p,{className:e,children:"Experience"})}),(0,n.jsx)(h(),{href:"/projects",children:(0,n.jsx)(r.E.p,{className:e,children:"Projects"})}),(0,n.jsx)(h(),{href:"/resume",children:(0,n.jsx)(r.E.p,{className:e,children:"Resume"})}),(0,n.jsx)(h(),{href:"/about",children:(0,n.jsx)(r.E.p,{className:e,children:"About Me"})})]})},x="transition-all ease-in-out-expo duration-300 h-full",m=function(e){var t=e.isOpen;return(0,n.jsx)("div",{className:x+" fixed bg-gray-400 z-30 "+(t?"w-full sm:w-96":"w-0"),children:(0,n.jsx)("div",{className:x+" absolute bg-gray-900 z-40 overflow-hidden "+(t?"w-full sm:w-96 delay-200":"w-0 delay-0"),children:(0,n.jsxs)("div",{className:"mt-5 relative flex justify-evenly flex-col child:self-center text-4xl text-white w-screen sm:w-96 h-full",children:[(0,n.jsx)(u,{}),(0,n.jsx)(o.Z,{expandFromTopLeft:!1})]})})})},f=function(e){var t=e.children,i=(0,s.useState)(!1),r=i[0],a=i[1];return(0,n.jsxs)("div",{className:"overflow-hidden",children:[(0,n.jsx)(c,{isOpen:r,setIsOpen:a}),(0,n.jsx)(l,{}),(0,n.jsx)(m,{isOpen:r}),(0,n.jsx)("div",{className:"relative transition-all ease-in-out-expo duration-500 "+(r?"left-full sm:left-96 brightness-75 blur pointer-events-none":"left-0"),children:t})]})};function p(e){var t=e.children;return(0,n.jsx)("div",{className:"dark bg-gray-800",children:(0,n.jsx)(f,{children:(0,n.jsx)("div",{className:"md:px-12 px-6 min-h-screen",children:t})})})}},3600:function(e,t,i){"use strict";i.r(t),i.d(t,{__N_SSG:function(){return h},default:function(){return u}});var n=i(5893),s=i(9008),r=i.n(s),a=i(8941),l=i(8267),c=i(8716),o=function(e){var t=e.data,i=e.uid;return(0,n.jsxs)("div",{className:"relative pt-24",children:[(0,n.jsx)(c.E.h1,{className:"text-white text-5xl md:text-6xl font-bold inline-block mb-10 z-10",layoutId:i,children:t.name}),(0,n.jsx)(c.E.div,{className:"relative z-0 h-[50vh]",initial:{opacity:0,x:-100},animate:{opacity:1,x:0,transition:{delay:.35}},children:(0,n.jsx)("picture",{children:(0,n.jsx)("img",{src:t.frontImage.url,alt:t.frontImage.alt,className:"absolute h-full object-cover md:object-contain rounded-md"})})}),(0,n.jsx)(c.E.div,{initial:{opacity:0,y:100},animate:{opacity:1,y:0,transition:{delay:.5}},className:"py-5 text-white text-2xl sm:text-3xl w-full lg:w-9/12 child:pb-10",children:(0,n.jsx)(l.v,{field:t.details,components:{paragraph:function(e){var t=e.children;return(0,n.jsx)("div",{className:"text-gray-300",children:t})}}})})]})},d=function(e){var t=e.project,i=e.uid;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r(),{children:(0,n.jsx)("title",{children:t.name+" | Richard So"})}),(0,n.jsx)(o,{data:t,uid:i})]})};d.getLayout=function(e){return(0,n.jsx)(a.Z,{children:e})};var h=!0,u=d},9008:function(e,t,i){e.exports=i(5443)}},function(e){e.O(0,[716,774,888,179],(function(){return t=2226,e(e.s=t);var t}));var t=e.O();_N_E=t}]);