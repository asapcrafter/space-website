(this["webpackJsonpspace-website"]=this["webpackJsonpspace-website"]||[]).push([[0],{45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(7),i=n.n(a),s=n(30),r=n.n(s),o=n(11),c=n(4),l=n(31),d=n.p+"static/media/nebula-de.fc94fe75.png",p=n(5),h=function(){var e=Object(a.useRef)(null),t=Object(o.d)(c.TextureLoader,d),n=function(e,t){return Math.random()*(t-e)+e},i=[n(-225,-255),260*Math.random()-150,700*Math.random()-380],s=[n(1.14,4.16),Math.PI/180*90,2*Math.random()*Math.PI];return Object(o.c)((function(){e.current.rotation.z-=.0016})),Object(p.jsxs)("mesh",{ref:e,position:i,rotation:s,children:[Object(p.jsx)("planeBufferGeometry",{attach:"geometry",args:[200,200,75]}),Object(p.jsx)("meshLambertMaterial",{attach:"material",map:t,transparent:!0,polygonOffset:!0,polygonOffsetFactor:-4,depthWrite:!1,depthTest:!1,opacity:.5,castShadow:!1})]})},j=n.p+"static/media/nebula2.7c256a05.png",m=function(){var e,t,n=Object(a.useRef)(null),i=Object(o.d)(c.TextureLoader,j),s=[(e=-235,t=-250,Math.random()*(t-e)+e),260*Math.random()-150,700*Math.random()-380],r=[1.16,Math.PI/180*90,2*Math.random()*Math.PI];return Object(o.c)((function(){n.current.rotation.z-=.001})),Object(p.jsxs)("mesh",{ref:n,position:s,rotation:r,children:[Object(p.jsx)("planeBufferGeometry",{attach:"geometry",args:[200,200,75]}),Object(p.jsx)("meshLambertMaterial",{attach:"material",map:i,transparent:!0,polygonOffset:!0,polygonOffsetFactor:-4,depthWrite:!1,depthTest:!1,opacity:.5,castShadow:!1})]})},b=n.p+"static/media/nebula3.a9bd08f9.png",u=function(){var e,t,n=Object(a.useRef)(null),i=Object(o.d)(c.TextureLoader,b),s=[(e=-235,t=-250,Math.random()*(t-e)+e),260*Math.random()-150,700*Math.random()-380],r=[1.16,Math.PI/180*90,2*Math.random()*Math.PI];return Object(o.c)((function(){n.current.rotation.z-=.0016})),Object(p.jsxs)("mesh",{ref:n,position:s,rotation:r,children:[Object(p.jsx)("planeBufferGeometry",{attach:"geometry",args:[200,200,60]}),Object(p.jsx)("meshLambertMaterial",{attach:"material",map:i,transparent:!0,polygonOffset:!0,polygonOffsetFactor:-4,depthWrite:!1,depthTest:!1,opacity:.5,castShadow:!1})]})},f=n.p+"static/media/milkyway.57f1f515.png",g=function(){var e,t,n=Object(a.useRef)(null),i=Object(o.d)(c.TextureLoader,f),s=[(e=-235,t=-250,Math.random()*(t-e)+e),260*Math.random()-150,700*Math.random()-380],r=[1.16,Math.PI/180*90,2*Math.random()*Math.PI];return Object(o.c)((function(){n.current.rotation.z-=.0016})),Object(p.jsxs)("mesh",{ref:n,position:s,rotation:r,children:[Object(p.jsx)("planeBufferGeometry",{attach:"geometry",args:[120,120,35]}),Object(p.jsx)("meshLambertMaterial",{attach:"material",map:i,transparent:!0,polygonOffset:!0,polygonOffsetFactor:-4,depthWrite:!1,depthTest:!1,opacity:.45,castShadow:!1})]})};Object(o.b)({OrbitControls:l.a});var O=function(e,t){return Math.random()*(t-e)+e},w=function(){var e=Object(o.d)(c.TextureLoader,"data:image/png;base64,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"),t=Object(a.useMemo)((function(){for(var e=[],t=0;t<600;t++){var n=O(-260,55),a=O(-160,170),i=O(-420,420);e.push(n,a,i)}return new Float32Array(e)}),[600]);return Object(p.jsxs)("points",{children:[Object(p.jsx)("bufferGeometry",{attach:"geometry",children:Object(p.jsx)("bufferAttribute",{attachObject:["attributes","position"],array:t,count:t.length/3,itemSize:3})}),Object(p.jsx)("pointsMaterial",{attach:"material",map:e,color:16777215,size:.65,transparent:!1,alphaTest:.5,opacity:1})]})},x=function(){var e,t=Object(o.e)().camera,n=0,a=0,i=0;window.addEventListener("scroll",(function(t){var a=document.body.getBoundingClientRect().top;n+=5e-4*((e=a)-i),i!==e&&(i=a)}));return function e(){a+=n,n*=.954321,t.position.y=a,window.requestAnimationFrame(e)}(),null},v=function(){var e=Object(o.e)().camera,t=0,n=0,a=0,i=0,s=0,r=0,c=0,l=0;document.addEventListener("mousemove",(function(e){a=e.clientX,i+=45e-5*(a-n),n!==a&&(n=e.clientX),c=e.clientY,l+=6e-4*(c-r),r!==c&&(r=e.clientY)}));return function n(){t+=i,i*=.954321,e.position.z=t,s+=l,l*=.954321,e.position.x=s+90,window.requestAnimationFrame(n)}(),null},y=function(){var e=Object(o.e)().scene;e.background=new c.Color("#0c0f18");var t=new c.PointLight(2307241,5,100,1.7);t.position.set(-210,20,250),e.add(t);var n=new c.PointLight(3552106,10,120,1.7);n.position.set(-210,30,-180),e.add(n);var a=new c.PointLight(1715817,5,120,1.7);a.position.set(-210,-20,50),e.add(a);var i=new c.PointLight(3486311,5,70,1.7);i.position.set(-210,80,350),e.add(i);var s=new c.PointLight(3486311,5,70,1.7);return s.position.set(-210,100,-120),e.add(s),null},E=function(){return Object(p.jsxs)(o.a,{colorManagement:!0,camera:{position:[100,5,7],fov:80},children:[Object(p.jsx)(y,{}),Array.from({length:40},(function(e,t){return Object(p.jsx)(h,{},t)})),Array.from({length:15},(function(e,t){return Object(p.jsx)(m,{},t)})),Array.from({length:6},(function(e,t){return Object(p.jsx)(u,{},t)})),Array.from({length:3},(function(e,t){return Object(p.jsx)(g,{},t)})),Object(p.jsx)(w,{}),Object(p.jsx)(x,{}),Object(p.jsx)(v,{})]})},M=n(34),A=function(){var e=new M.a;return e.showPanel(0),document.body.appendChild(e.dom),e.dom.style.visibility="hidden",document.addEventListener("keydown",(function(t){"\\"===t.key&&(e.dom.style.visibility="visible")})),requestAnimationFrame((function t(){e.begin(),e.end(),requestAnimationFrame(t)})),null},k=function(){return Object(p.jsx)("div",{id:"canvas-container",children:Object(p.jsxs)(a.Suspense,{fallback:Object(p.jsx)("div",{children:"Loading..."}),children:[Object(p.jsx)(E,{}),Object(p.jsx)(A,{})]})})},L=(n(45),n(46),n(35),n(36),n.p,n(47),function(e){var t=e.title,n=e.gitLink,a=e.liveLink,i=e.description;return Object(p.jsxs)("div",{className:"card-container",children:[Object(p.jsx)("div",{className:"card-title",children:t}),Object(p.jsxs)("div",{className:"card-hidden",children:[Object(p.jsx)("div",{className:"card-description",children:i}),Object(p.jsxs)("div",{className:"card-link",children:[Object(p.jsx)("a",{href:n,target:"_blank",rel:"noopener noreferrer",children:"Source Code"}),Object(p.jsx)("a",{href:a,target:"_blank",rel:"noopener noreferrer",children:"Live Demo"})]})]})]})}),G=n(37),z=function(){window.onbeforeunload=setTimeout(window.scrollTo(0,0),5e3),Object(a.useEffect)((function(){window.history.scrollRestoration="manual",window.scrollTo(0,0)}),[]);var e={37:1,38:1,39:1,40:1};function t(e){e.preventDefault()}function n(n){if(e[n.keyCode])return t(n),!1}var i=!1;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){i=!0}}))}catch(c){}var s=!!i&&{passive:!1},r="onwheel"in document.createElement("div")?"wheel":"mousewheel",o=function(){window.removeEventListener("DOMMouseScroll",t,!1),window.removeEventListener(r,t,s),window.removeEventListener("touchmove",t,s),window.removeEventListener("keydown",n,!1)};return Object(a.useEffect)((function(){window.addEventListener("DOMMouseScroll",t,!1),window.addEventListener(r,t,s),window.addEventListener("touchmove",t,s),window.addEventListener("keydown",n,!1),window.scrollTo(0,0)})),Object(p.jsxs)("div",{id:"body",children:[Object(p.jsx)("div",{id:"intro-wrapper",children:Object(p.jsxs)("div",{id:"intro-container",children:[Object(p.jsx)("div",{id:"intro-h1",children:"STEPHEN TRIEU"}),Object(p.jsx)("div",{id:"intro-p",children:" WEB DEVELOPER | DESIGNER"}),Object(p.jsxs)("div",{id:"intro-button-container",children:[Object(p.jsx)("div",{id:"intro-button-about",href:"#about-title",onClick:function(){document.getElementById("about-wrapper").scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"}),o()},children:"ABOUT"}),Object(p.jsx)("div",{id:"intro-button-work",onClick:function(){document.getElementById("card-wrapper").scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"}),o()},children:"WORK"})]})]})}),Object(p.jsx)("div",{id:"about-wrapper",children:Object(p.jsxs)("div",{id:"about-container",children:[Object(p.jsx)("div",{id:"about-title"}),Object(p.jsxs)("div",{id:"about-p",children:[Object(p.jsx)(G.a,{steps:["Welcome to my portfolio.",5e3," Welcome to my portfolio.",5e3],loop:1/0}),Object(p.jsx)("p",{children:"I am a web developer with a passion for designing polished and beautiful applications. My focus is on creating unique experiences and products using React, Canvas, and Javascript. On top of the basic technologies, I also love to  experiment in new areas such as 3D graphics using WebGL and ThreeJS."}),Object(p.jsx)("p",{children:"Based in California, I am currently an undergrad at UC Santa Barbara. In my free time, I am always learning new technologies and finding new projects. You can check out some of these ideas down below!"})]}),Object(p.jsxs)("div",{id:"socials",children:[Object(p.jsx)("a",{href:"https://facebook.com",target:"_blank",rel:"noopener noreferrer",children:Object(p.jsx)("img",{className:"social-logo",src:"/assets/facebook-white.png",alt:"fb",width:"50",height:"50"})}),Object(p.jsx)("a",{href:"https://github.com/asapcrafter",target:"_blank",rel:"noopener noreferrer",children:Object(p.jsx)("img",{className:"social-logo",src:"/assets/gh.png",alt:"gh",width:"50",height:"50"})}),Object(p.jsx)("a",{href:"https://www.linkedin.com/in/stephen-trieu-2170011b8/",target:"_blank",rel:"noopener noreferrer",children:Object(p.jsx)("img",{className:"social-logo",src:"/assets/linkedin.png",alt:"linkedin",width:"50",height:"50"})}),Object(p.jsx)("a",{href:"https://stackoverflow.com/users/17720458/stevet",target:"_blank",rel:"noopener noreferrer",children:Object(p.jsx)("img",{className:"social-logo",src:"/assets/stackoverflow.png",alt:"stackoverflow",width:"48",height:"45"})}),Object(p.jsx)("a",{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",children:Object(p.jsx)("img",{className:"social-logo",src:"/assets/twitter.png",alt:"twitter",width:"50",height:"50"})})]}),Object(p.jsxs)("div",{id:"card-wrapper",children:[Object(p.jsx)("div",{id:"card-title",children:"PROJECTS"}),Object(p.jsx)(L,{title:"Shopping landing page",description:"Skincare landing page using react routers",gitLink:"https://github.com/asapcrafter/shopping-cart",liveLink:"https://asapcrafter.github.io/shopping-cart/"}),Object(p.jsx)(L,{title:"React memory game",description:"A minecraft themed memory game using react",gitLink:"https://github.com/asapcrafter/memory-game",liveLink:"https://asapcrafter.github.io/memory-game/"}),Object(p.jsx)(L,{title:"Map API Site",description:"A rendered virtual map of UCSB's campus using MapBoxJS API",gitLink:"https://github.com/asapcrafter/ucsb-campus-map",liveLink:"https://asapcrafter.github.io/ucsb-campus-map/"}),Object(p.jsx)(L,{title:"Weather API",description:"A simple weather checker that uses a given location input",gitLink:"https://github.com/asapcrafter/weather-app",liveLink:"https://asapcrafter.github.io/weather-app/"}),Object(p.jsx)(L,{title:"Tic-Tac-To Game",description:"Exactly what you expect it do be",gitLink:"https://github.com/asapcrafter/tic-tac-toe",liveLink:"https://asapcrafter.github.io/tic-tac-toe/"})]}),Object(p.jsx)("div",{id:"about-tools-title",children:"TECHNOLOGIES"}),Object(p.jsxs)("div",{id:"about-tools-container",children:[Object(p.jsx)("img",{className:"tools-img",src:"/assets/icons/html5.png",title:"",alt:""}),Object(p.jsx)("img",{className:"tools-img",src:"/assets/icons/react2.png",title:"",alt:""}),Object(p.jsx)("img",{className:"tools-img",src:"/assets/icons/sass2.png",title:"",alt:""}),Object(p.jsx)("img",{className:"tools-img",src:"/assets/icons/node2.png",title:"",alt:""}),Object(p.jsx)("img",{className:"tools-img",src:"/assets/icons/firebase2.png",title:"",alt:""}),Object(p.jsx)("img",{className:"tools-img",src:"/assets/icons/github2.png",title:"",alt:""}),Object(p.jsx)("img",{className:"tools-img",src:"/assets/icons/git2.png",title:"",alt:""}),Object(p.jsx)("img",{className:"tools-img",src:"/assets/icons/bash.png",title:"Bash",alt:""}),Object(p.jsx)("img",{className:"tools-img",src:"/assets/icons/mapbox.png",title:"",alt:""}),Object(p.jsx)("img",{className:"tools-img",src:"/assets/icons/threejs.png",title:"",alt:""}),Object(p.jsx)("img",{className:"tools-img",src:"/assets/icons/vscode.png",title:"",alt:""}),Object(p.jsx)("img",{className:"tools-img",src:"/assets/icons/webgl.png",title:"",alt:""})]})]})}),Object(p.jsx)("div",{id:"footer-wrapper",children:Object(p.jsx)("div",{id:"footer-container",children:Object(p.jsxs)("small",{children:["\xa9 ",(new Date).getFullYear()," Stephen Trieu. All Rights Reserved."]})})})]})};r.a.render(Object(p.jsxs)(i.a.StrictMode,{children:[Object(p.jsx)(z,{}),Object(p.jsx)(k,{})]}),document.getElementById("root"))}},[[48,1,2]]]);