"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[898],{1579:function(e,t,l){var s=l(7437),a=l(3459);l(2265);var n=l(6164);t.Z=e=>{let{children:t,classTop:l,classBottom:i}=e;return(0,s.jsx)("section",{id:"top",className:(0,n.m6)("".concat(a.Z.x," w-full flex flex-1"),l),children:(0,s.jsx)("div",{className:(0,n.m6)("max-w-[1650px] mx-auto flex w-full",i),children:t})})}},4898:function(e,t,l){l.d(t,{default:function(){return k}});var s=l(7437),a=l(2265),n=l(7138),i=e=>{let{links:t}=e,[l,i]=(0,a.useState)(!1),[o,r]=(0,a.useState)([0,0]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"flex items-center justify-center w-[50px] h-[50px] lg:hidden  p-2 border-2 border-kerf-blue rounded-lg",children:(0,s.jsx)("svg",{onClick:()=>i(!l),width:"48",height:"36",viewBox:"0 0 40 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-full h-auto",children:l?(0,s.jsx)("path",{d:"M1.5 26.5L39.75 1.5M1.5 1.5L39.75 26.5",stroke:"#148FBC",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("path",{d:"M1.25 14H38.75",stroke:"#33CCCC",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"}),(0,s.jsx)("path",{d:"M1.25 1.5H26.25M13.75 26.5H38.75",stroke:"#148FBC",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"})]})})}),(0,s.jsx)("div",{className:'flex flex-col right-6 items-end justify-start gap-3 absolute top-32 bg-kerf-blue-light/50 backdrop-blur-sm  pr-4 pl-10 py-6 rounded-[10px] shadow-md z-50 w-max lg:hidden duration-300 h-[calc("auto")] '.concat(l?"translate-x-[0%]":"translate-x-[200%]"),children:t.map((e,t)=>(0,s.jsxs)(n.default,{suppressHydrationWarning:!0,href:e.link?e.link:"javascript:void(0)",shallow:!0,className:"flex flex-col items-end gap-2",children:[(0,s.jsxs)("p",{onClick:()=>o[0]===t?r([null,null]):r([t,o[1]]),className:"inline-flex items-center justify-center gap-1",children:[(e.dropDown||e.singleDropDown)&&(0,s.jsx)("svg",{className:"h-[10px] w-auto duration-300 rotate-180 ".concat(o[0]===t&&"rotate-90"),viewBox:"0 0 8 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{d:"M7.02001 5.4919L5.05001 3.52188L1.84001 0.31188C1.16 -0.35812 0 0.12188 0 1.08188V7.3119V12.9219C0 13.8819 1.16 14.3619 1.84001 13.6819L7.02001 8.5019C7.85001 7.6819 7.85001 6.3219 7.02001 5.4919Z",fill:"#292D32"})}),e.title," "]}),e.dropDown&&(0,s.jsx)("menu",{className:"pr-4 flex flex-col items-end gap-1 ".concat(o[0]!==t&&"hidden"),children:e.dropDown.map((t,l)=>(0,s.jsxs)("li",{onClick:()=>r([o[0],l]),className:"flex flex-col items-end",children:[(0,s.jsxs)("p",{className:"inline-flex items-center gap-1",children:[e.dropDown&&(0,s.jsx)("svg",{className:"h-[10px] w-auto duration-300 rotate-180 ".concat(o[1]===l&&"rotate-90"),viewBox:"0 0 8 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{d:"M7.02001 5.4919L5.05001 3.52188L1.84001 0.31188C1.16 -0.35812 0 0.12188 0 1.08188V7.3119V12.9219C0 13.8819 1.16 14.3619 1.84001 13.6819L7.02001 8.5019C7.85001 7.6819 7.85001 6.3219 7.02001 5.4919Z",fill:"#292D32"})})," ",t.title]}),(0,s.jsx)("span",{className:" flex-col items-end gap-1 ".concat(o[1]===l?"flex":"hidden"),children:t.links.map((e,t)=>(0,s.jsx)(n.default,{href:e.link,className:"pr-4",children:e.title},t))})]},l))}),e.singleDropDown&&(0,s.jsx)("menu",{className:"pr-4 flex flex-col items-end gap-1 ".concat(o[0]!==t&&"hidden"),children:e.singleDropDown.map((e,t)=>(0,s.jsx)("li",{onClick:()=>r([o[0],t]),className:"flex flex-col items-end",children:(0,s.jsx)(n.default,{href:e.link,className:"",children:e.title})},t))})]},t))})]})},o=l(1579),r=()=>(0,s.jsxs)(o.Z,{classTop:"bg-kerf-teal-light",classBottom:"justify-end py-3 font-medium text-sm text-center",children:[(0,s.jsx)(n.default,{href:"/doctors",shallow:!0,className:"",children:"Our Doctors"})," ","\xa0 |\xa0 Book an Appointment"]}),d=l(3473),c=l(6648),x=l(6463),p=e=>{let{links:t}=e,[l,i]=(0,a.useState)(0),[o,r]=(0,a.useState)(0),p=(0,x.usePathname)();return(0,a.useMemo)(()=>{for(let a=0;a<t.length;a++){var e,l,s;if((null===(e=t[a].link)||void 0===e?void 0:e.includes(p.split("/").length>0?p:p.split("/")[1]))||(null===(l=t[a].dropDown)||void 0===l?void 0:l.some(e=>e.links.some(e=>e.link===decodeURIComponent(p))))||(null===(s=t[a].singleDropDown)||void 0===s?void 0:s.some(e=>e.link===decodeURIComponent(p))))return i(a)}},[t,p]),(0,s.jsxs)("div",{className:"flex  items-center justify-between gap-20 w-full",children:[(0,s.jsx)(n.default,{href:"/",children:(0,s.jsx)(c.default,{src:d.default,alt:"",priority:!0,height:60,width:200,className:"object-contain h-[50px] object-left"})}),(0,s.jsx)("div",{className:"lg:flex hidden items-center justify-center gap-2 font-medium ",children:t.map((e,t)=>(0,s.jsxs)("div",{className:"relative z-0 flex items-center justify-center group",children:[(0,s.jsxs)(n.default,{onClick:()=>i(t),href:e.link?e.link:"javascript:void(0)",shallow:!0,className:"text-sm px-4 py-2  rounded-md duration-300 hover:bg-kerf-blue-light inline-flex items-center justify-center gap-2 ".concat(l===t?"bg-kerf-blue-light":""),children:[e.title," ",(e.dropDown||e.singleDropDown)&&(0,s.jsx)("svg",{className:"h-[10px] w-auto group-hover:rotate-90",viewBox:"0 0 8 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{d:"M7.02001 5.4919L5.05001 3.52188L1.84001 0.31188C1.16 -0.35812 0 0.12188 0 1.08188V7.3119V12.9219C0 13.8819 1.16 14.3619 1.84001 13.6819L7.02001 8.5019C7.85001 7.6819 7.85001 6.3219 7.02001 5.4919Z",fill:"#292D32"})})]}),(e.dropDown||e.singleDropDown)&&(0,s.jsx)("div",{className:"pt-16 absolute  z-50 top-0 group-hover:translate-y-0 -translate-y-[900px] duration-500",children:(0,s.jsxs)("div",{className:"flex flex-col gap-3  bg-white border border-gray-300 px-3 py-5 rounded-b-2xl ",children:[e.dropDown&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"flex items-center justify-center gap-10 px-3",children:e.dropDown.map((e,t)=>(0,s.jsx)("button",{onClick:()=>r(t),className:"capitalize text-base font-medium px-6 py-1 rounded-lg ".concat(o===t?"bg-kerf-blue-light/50":""),children:e.title},t))}),(0,s.jsx)("hr",{})]}),(0,s.jsx)("div",{className:"flex flex-col w-full gap-3 pt-2 ",children:(e.dropDown?e.dropDown[o].links:e.singleDropDown&&e.singleDropDown).map((t,l)=>(0,s.jsx)(n.default,{href:t.link,className:"text-sm font-medium ".concat(e.singleDropDown&&"hover:bg-kerf-blue-light/50 px-6 py-2 rounded-lg"),children:t.title},l))})]})})]},t))})]})},u=l(6580),m=()=>{var e,t,l,a;let{utilities:n}=(0,u.Z)(),d=null==n?void 0:null===(t=n.treatments)||void 0===t?void 0:null===(e=t.treatmentCategorys)||void 0===e?void 0:e.nodes.map(e=>({title:e.name,links:e.treatments.nodes.map(e=>({title:e.title,link:"/treatments/".concat(e.slug)}))})),c=null==n?void 0:null===(a=n.departments)||void 0===a?void 0:null===(l=a.departmentsTaxonomies)||void 0===l?void 0:l.edges.map(e=>({title:e.node.name,link:"/departments/".concat(e.node.slug)})),x=()=>{let e=n.header.utility.acf.headerLinks;return n.header.utility.acf.headerLinks.forEach((t,l)=>{switch(t.title.toLowerCase()){case"treatments":return e[l].dropDown=d;case"departments":return e[l].singleDropDown=c}}),e};return(0,s.jsxs)("nav",{className:"w-full absolute top-0 flex flex-col z-50 overflow-x-clip",children:[(0,s.jsx)(r,{}),(0,s.jsxs)(o.Z,{classBottom:"items-center justify-between gap-20 py-4",children:[(0,s.jsx)(p,{links:x()}),(0,s.jsx)(i,{links:x()})]})]})},f=l(3459),h=e=>{let{data:t}=e;return(0,s.jsxs)("div",{className:"flex items-center justify-between md:gap-20 gap-3 w-full py-8 max-md:flex-col-reverse",children:[(0,s.jsxs)("p",{className:"text-sm max-md:text-center",children:["\xa9 2024 KERF Hospital. All rights reserved. ",(0,s.jsx)("br",{}),"Designed by"," ",(0,s.jsx)("a",{href:"https://codefacetech.com/",target:"_blank",children:"Codeface"})]}),(0,s.jsx)("div",{className:"flex items-center justify-center gap-4",children:t.utility.acf.socialMedia.map((e,t)=>(0,s.jsx)(n.default,{href:e.link?e.link:"javascript:void(0)",shallow:!0,target:"_blank",children:(0,s.jsx)(c.default,{src:e.icon.sourceUrl,alt:"",width:32,height:32,loading:"lazy",className:"object-contain aspect-square w-auto h-8"})},t))})]})},g=l(9422),w=e=>{let{data:t}=e;return(0,s.jsxs)("div",{className:"w-full bg-kerf-teal ".concat(f.Z.x," ").concat(f.Z.y," rounded-t-[50px] text-white flex items-start justify-between lg:gap-20 gap-8 max-lg:flex-wrap"),children:[(0,s.jsxs)("div",{className:"flex flex-col gap-4 w-full max-md:items-center max-md:text-center",children:[(0,s.jsx)(n.default,{"data-aos":"fade-up",href:"/",shallow:!0,children:(0,s.jsx)(c.default,{src:t.utility.acf.logo.sourceUrl,alt:t.utility.acf.logo.altText,loading:"lazy",height:60,width:200,className:"h-[50px] w-auto object-contain"})}),(0,s.jsx)("p",{"data-aos":"fade-up",className:"font-normal text-sm md:max-w-[200px]",children:t.utility.acf.description})]}),(0,s.jsxs)("div",{className:"flex flex-col items-start gap-6",children:[(0,s.jsx)("div",{className:"flex items-start justify-between lg:gap-16 md:gap-12 gap-6 max-md:flex-wrap ",children:t.utility.acf.footerLinks.map((e,t)=>(0,s.jsxs)("div",{"data-aos":"fade-up",className:"flex flex-col gap-4 ".concat("quick links"===e.title.toLowerCase()&&"md:ml-6"),children:[(0,s.jsx)("h3",{className:"font-bold text-base shrink-0 w-max",children:e.title}),(0,s.jsx)("div",{className:"flex flex-col gap-2 w-full",children:e.links.map(e=>(0,s.jsx)(n.default,{href:e.link?e.link:"javascript:void(0)",shallow:!0,className:"text-sm font-normal w-full min-w-[180px]",children:e.text},t+e.text))})]},t))}),(0,s.jsx)(g.BookAppointmentBtn,{type:"hero section",className:"text-kerf-teal [&_span]:bg-kerf-teal"})]})]})},j=()=>{let{utilities:e}=(0,u.Z)();return(0,s.jsxs)(o.Z,{classBottom:"".concat(f.Z.t," flex-col items-center "),children:[(0,s.jsx)(w,{data:e.footer}),(0,s.jsx)(h,{data:e.footer})]})},v=l(7323),b=l.n(v);l(3023);var k=e=>{var t,l,n;let{children:i,pageTitle:o}=e,{utilities:r}=(0,u.Z)();return(0,a.useLayoutEffect)(()=>{"undefined"!=typeof document&&b().init({once:!0,duration:500})},[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("title",{children:"".concat(o?o+" | ":""," ").concat(null==r?void 0:null===(n=r.seo)||void 0===n?void 0:null===(l=n.utility)||void 0===l?void 0:null===(t=l.acf)||void 0===t?void 0:t.title)}),(0,s.jsxs)("main",{className:"flex flex-col w-full flex-1 items-center justify-center text-black  relative z-10",children:[(0,s.jsx)(m,{}),i,(0,s.jsx)(j,{})]})]})}},6580:function(e,t,l){let s=(0,l(9099).Ue)(e=>({utilities:"",setUtilities:t=>e({utilities:t})}));t.Z=s},3459:function(e,t){t.Z={x:"xl:px-28 lg:px-24 sm:px-16 px-6",y:"sm:py-20 py-16",l:"xl:pl-28 lg:pl-24 sm:pl-16 pl-6",r:"xl:pr-28 lg:pr-24 sm:pr-16 pr-6",t:"sm:pt-20 pt-16",b:"sm:pb-20 pb-16"}},9422:function(e,t,l){l.r(t),l.d(t,{BookAppointmentBtn:function(){return c},NormalBtn:function(){return d}});var s=l(7437);l(2265);var a=l(6463),n=l(6164),i=l(7138),o=l(6648),r={src:"/_next/static/media/phone fill.928d501a.svg",height:20,width:20,blurWidth:0,blurHeight:0};let d=e=>{let{children:t,onClick:l,href:o,mode:r="blue",className:d,props:c}=e;return(0,a.useRouter)(),(0,s.jsx)(i.default,{onClick:l,"data-aos":"fade-up",...c,href:o||"javascript:void(0)",className:(0,n.m6)("px-8 py-3  font-bold rounded-lg capitalize ".concat("blue"===r?"bg-secondary border-secondary text-white bg-gradient-to-r from-[#539fbd] to-[#3682a0] duration-300 hover:opacity-75":"bg-white text-black hover:bg-secondary hover:border-secondary hover:text-white duration-300"),d),children:t})},c=e=>{let{type:t,className:l}=e;return"hero section"===t?(0,s.jsxs)(i.default,{href:"",suppressHydrationWarning:!0,"data-aos":"fade-up","data-aos-anchor":"#top",className:(0,n.m6)("flex items-center max-md:w-full justify-start  gap-4 px-6 py-3 bg-white rounded-xl font-bold text-base",l),children:[(0,s.jsx)("span",{className:"h-[45px] w-[45px] shrink-0 bg-[#5eb996] flex items-center justify-center rounded-lg",children:(0,s.jsx)(o.default,{src:r,alt:"",width:18,height:18,className:"object-contain aspect-square"})}),"Book your Appointment"]}):(0,s.jsx)(i.default,{"data-aos":"fade-up",href:"",className:(0,n.m6)("px-10 py-4 rounded-lg bg-gradient-to-r from-[#539fbd] to-[#3682a0] sm:max-w-max text-center mt-6 font-bold text-white uppercase hover:opacity-90 duration-500",l),children:"book appointment"})}},3473:function(e,t,l){l.r(t),t.default={src:"/_next/static/media/logo.4b84ce0f.webp",height:164,width:342,blurDataURL:"data:image/webp;base64,UklGRoIAAABXRUJQVlA4WAoAAAAQAAAABwAAAwAAQUxQSCEAAAAAmXGYs6+hnKzupcSswqqgoX9ol5yJcYMrABIeGhQTDwAAVlA4IDoAAADwAQCdASoIAAQAAkA4JYwCdH8AF8f2P8AA/pTYylyFRJnvkZAAN0/SJRoQsWLccZhsTvwdyTSv4AAA",blurWidth:8,blurHeight:4}}}]);