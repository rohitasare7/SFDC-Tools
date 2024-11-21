import{_ as A}from"./D7mtGAGI.js";import{_ as B}from"./CKP9D31c.js";import{f as E,z as M,r as c,i as U,o as h,c as x,b as o,d as l,w as i,e as n,u as d,S as $,x as D,C as w,T as _,q as H,F as j}from"./Ho11KFCP.js";import{_ as z,a as F}from"./CuTdjjvY.js";import{T as N,o as O,E as W}from"./BQImT8Uo.js";import{P as k}from"./B-rX7ioZ.js";import{a as f}from"./COAcYwch.js";import"./BhtQlZEJ.js";const q={class:"flex justify-between"},J={class:"flex flex-col"},K={class:"flex items-center justify-center"},Q={class:"mt-2 mb-8 rounded w-full"},X={class:"dark:border-gray-700 dark:shadow-xl dark:border rounded-lg overflow-hidden"},Y={class:"flex items-center space-x-4 mt-4"},Z={class:"w-52"},ee={class:"w-full flex mt-6 items-center"},oe={key:0,class:"flex items-center justify-center rounded-md"},te={key:0,class:"mb-4"},re=["src"],se=["innerHTML"],pe=E({__name:"googleGemini",setup(ae){const C=[O,W.lineWrapping],P=M(),I=t=>{P.value=t.view},u=c("you are a highly skilled senior salesforce developer, write a code in salesforce LWC, both HTML, JavaScript and Apex Class for the image shared in the prompt with you, make sure there are no errors so cross check every code logic, make sure you share all 3 codes - html, js and apex, also write code explanation.");let m=c(!1);const p=c(!1),v=c(""),y=c(""),g=c(""),b=c(null),R=async t=>new Promise((e,r)=>{const s=new FileReader;s.readAsDataURL(t),s.onload=()=>{var a;return e((a=s==null?void 0:s.result)==null?void 0:a.split(",")[1])},s.onerror=a=>r(a)}),G=async t=>{const e=t.target;if(e.files&&e.files[0]){const r=e.files[0];r&&(v.value=URL.createObjectURL(r),y.value=await R(r),p.value=!0)}},S=async()=>{if(!u.value){f("Please enter your prompt first.","Error");return}try{m.value=!0;const t={type:"fetchModelList"},e=await $fetch("/api/googleGemini",{method:"POST",body:{params:t}});console.log("model list --> "+g.value),f("Google Gemini AI response received.","Success")}catch(t){console.log("error --> "+t),f("Something failed, please check developer console.","Error")}p.value=!1,m.value=!1},V=async()=>{var t,e,r;if(!u.value){f("Please enter your prompt first.","Error");return}try{m.value=!0;const s={prompt:u.value,isImagePrompt:p.value,imgPromptUrl:y.value,type:"normalCallout"},a=await $fetch("/api/googleGemini",{method:"POST",body:{params:s}});g.value=L((r=(e=(t=a==null?void 0:a.candidates[0])==null?void 0:t.content)==null?void 0:e.parts[0])==null?void 0:r.text),f("Google Gemini AI response received.","Success"),b.value.scrollIntoView({behavior:"smooth",block:"center"})}catch(s){console.log("error --> "+s),f("Something failed, please check developer console.","Error")}p.value=!1,m.value=!1},L=t=>{const e=/```([\s\S]+?)```/g;return t.replace(e,(r,s)=>`<pre class="border rounded-lg py-0 px-6 my-2 bg-gray-50"><code class="language-apex">
            ${k.highlight(s,k.languages.apex,"apex")}</code></pre>`)},T=()=>{u.value="",m.value=!1,p.value=!1,v.value="",g.value=""};return U(async()=>{await S()}),(t,e)=>{const r=A,s=B;return h(),x(j,null,[o("div",q,[o("div",J,[l(z,{class:"mb-2",subText:"Google Gemini"},{default:i(()=>e[1]||(e[1]=[n("AI Companion ")])),_:1}),l(F,null,{default:i(()=>e[2]||(e[2]=[n("Use Google's Gemini AI to generate salesforce apex, lwc code from text or image prompt, you can also use this for debug log explanation.")])),_:1})])]),o("div",K,[o("div",Q,[l(r,{class:"font-semibold mt-2 mb-2"},{default:i(()=>e[3]||(e[3]=[n("Prompt")])),_:1}),o("div",X,[l(d(N),{modelValue:d(u),"onUpdate:modelValue":e[0]||(e[0]=a=>$(u)?u.value=a:null),id:"prompt",placeholder:"Paste your prompt here or refresh page for default prompt.",style:{height:"auto",minHeight:"80px",maxHeight:"300px",borderRadius:"5px",overflow:"hidden",width:"100%"},autofocus:!0,"indent-with-tab":!0,"tab-size":2,extensions:C,onReady:I},null,8,["modelValue"])]),o("div",Y,[o("div",Z,[l(r,{class:"font-semibold mb-2"},{default:i(()=>e[4]||(e[4]=[n("Image (Optional)")])),_:1}),o("input",{id:"imageInput",type:"file",ref:"imageInput",onChange:G,class:"relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded-md border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-xs font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"},null,544)]),o("div",ee,[o("div",null,[d(m)?(h(),x("div",oe,[e[6]||(e[6]=o("svg",{class:"animate-spin -ml-1 mr-3 h-8 w-8 text-gray-700 dark:text-gray-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[o("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),o("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1)),l(r,null,{default:i(()=>e[5]||(e[5]=[n("Processing Data Please Wait..")])),_:1})])):(h(),D(s,{key:1,onClick:V},{default:i(()=>e[7]||(e[7]=[n("Submit")])),_:1}))]),o("div",null,[w(l(s,{onClick:T,class:"ml-4",isRed:!0},{default:i(()=>e[8]||(e[8]=[n("Reset Data ")])),_:1},512),[[_,!d(m)]])])])]),d(v)?(h(),x("div",te,[l(r,{class:"font-semibold mt-6 mb-2"},{default:i(()=>e[9]||(e[9]=[n("Image Preview :")])),_:1}),o("img",{src:d(v),alt:"Selected Image",class:"max-w-screen-sm h-auto rounded-md border dark:border-gray-700 shadow-md"},null,8,re)])):H("",!0),w(l(r,{class:"font-semibold mt-6 mb-2"},{default:i(()=>e[10]||(e[10]=[n("AI Response :")])),_:1},512),[[_,d(g)]]),o("div",{innerHTML:d(g),ref_key:"apiResp",ref:b,id:"apiResp",class:"whitespace-pre-line mt-2 my-2 text-gray-700 dark:text-gray-500 leading-relaxed"},null,8,se)])])],64)}}});export{pe as default};