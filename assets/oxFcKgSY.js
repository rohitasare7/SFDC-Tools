import{_ as T}from"./D7mtGAGI.js";import{_ as A}from"./CKP9D31c.js";import{_ as B}from"./PYXEAhwZ.js";import{f as U,z as H,r as d,o as p,c as g,b as o,d as s,w as l,e as a,u as n,S as M,C as w,T as k,q as N,F as $}from"./Ho11KFCP.js";import{_ as D,a as E}from"./CuTdjjvY.js";import{T as j,o as z,E as F}from"./BQImT8Uo.js";import{P as C}from"./B-rX7ioZ.js";import{a as h}from"./COAcYwch.js";import"./BhtQlZEJ.js";const O={class:"flex justify-between"},W={class:"flex flex-col"},J={class:"flex items-center justify-center"},q={class:"mt-2 mb-8 rounded w-full"},K={class:"dark:border-gray-700 dark:shadow-xl dark:border rounded-lg overflow-hidden"},Q={class:"flex items-center space-x-4 mt-4"},X={class:"w-52"},Y={class:"w-full flex mt-6 items-center"},Z={key:0,class:"flex items-center justify-center rounded-md"},ee={key:1},oe={key:0,class:"mb-4"},te=["src"],se=["innerHTML"],pe=U({__name:"googleGemini_backup",setup(re){const P=[z,F.lineWrapping],I=H(),R=i=>{I.value=i.view},m=d("you are a highly skilled senior salesforce developer,write a code in salesforce LWC,make sure there is always HTML,JavaScript code, CSS and Apex Code only if applicable for the image shared in the prompt with you,make sure there are no errors so cross check every code logic,use best practices,also write code explanation.");let c=d(!1);const x=d(!1),v=d(""),b=d(""),f=d(""),y=d(null),S=async i=>{const e=i.target,t=e.files?e.files[0]:null,r=URL.createObjectURL(t);t&&t.type==="image/png"?(b.value=r,console.log("selectedFile --> "+b.value)):console.error("Please upload a PNG file.")},_=async()=>{var i,e,t;if(!m.value){h("Please enter your prompt first.","Error");return}try{c.value=!0;const r={prompt:m.value,isImagePrompt:x.value,imgPromptUrl:b.value,fetchModelList:!1},u=await $fetch("/api/googleGemini",{method:"POST",body:{params:r}});console.log("data --> "+JSON.stringify(u)),f.value=V((t=(e=(i=u==null?void 0:u.candidates[0])==null?void 0:i.content)==null?void 0:e.parts[0])==null?void 0:t.text),h("Google Gemini AI response received.","Success"),y.value.scrollIntoView({behavior:"smooth",block:"center"})}catch(r){console.log("error --> "+r),h("Something failed, please check developer console.","Error")}x.value=!1,c.value=!1},V=i=>{const e=/```([\s\S]+?)```/g;return i.replace(e,(t,r)=>`<pre class="border rounded-lg py-0 px-6 my-2 bg-gray-50"><code class="language-apex">
            ${C.highlight(r,C.languages.apex,"apex")}</code></pre>`)},G=()=>{m.value="",c.value=!1,x.value=!1,v.value="",f.value=""};return(i,e)=>{const t=T,r=A,u=B;return p(),g($,null,[o("div",O,[o("div",W,[s(D,{class:"mb-2",subText:"Google Gemini"},{default:l(()=>e[1]||(e[1]=[a("AI Companion ")])),_:1}),s(E,null,{default:l(()=>e[2]||(e[2]=[a("Use Google's Gemini AI to generate salesforce apex, lwc code from text or image prompt, you can also use this for debug log explanation.")])),_:1})])]),o("div",J,[o("div",q,[s(t,{class:"font-semibold mt-2 mb-2"},{default:l(()=>e[3]||(e[3]=[a("Prompt")])),_:1}),o("div",K,[s(n(j),{modelValue:n(m),"onUpdate:modelValue":e[0]||(e[0]=L=>M(m)?m.value=L:null),id:"prompt",placeholder:"Paste your prompt here or refresh page for default prompt.",style:{height:"auto",minHeight:"80px",maxHeight:"300px",borderRadius:"5px",overflow:"hidden",width:"100%"},autofocus:!0,"indent-with-tab":!0,"tab-size":2,extensions:P,onReady:R},null,8,["modelValue"])]),o("div",Q,[o("div",X,[s(t,{class:"font-semibold mb-2"},{default:l(()=>e[4]||(e[4]=[a("Image (Optional)")])),_:1}),o("input",{id:"imageInput",type:"file",ref:"imageInput",onChange:S,class:"relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded-md border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-xs font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"},null,544)]),o("div",Y,[o("div",null,[n(c)?(p(),g("div",Z,[e[6]||(e[6]=o("svg",{class:"animate-spin -ml-1 mr-3 h-8 w-8 text-gray-700 dark:text-gray-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[o("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),o("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1)),s(t,null,{default:l(()=>e[5]||(e[5]=[a("Processing Data Please Wait..")])),_:1})])):(p(),g("div",ee,[s(r,{onClick:_},{default:l(()=>e[7]||(e[7]=[a("Submit")])),_:1}),s(u,{onClick:_,class:"ml-4"},{default:l(()=>e[8]||(e[8]=[a("Get Model List")])),_:1})]))]),o("div",null,[w(s(r,{onClick:G,class:"ml-4",isRed:!0},{default:l(()=>e[9]||(e[9]=[a("Reset Data ")])),_:1},512),[[k,!n(c)]])])])]),n(v)?(p(),g("div",oe,[s(t,{class:"font-semibold mt-6 mb-2"},{default:l(()=>e[10]||(e[10]=[a("Image Preview :")])),_:1}),o("img",{src:n(v),alt:"Selected Image",class:"max-w-screen-sm h-auto rounded-md border dark:border-gray-700 shadow-md"},null,8,te)])):N("",!0),w(s(t,{class:"font-semibold mt-6 mb-2"},{default:l(()=>e[11]||(e[11]=[a("AI Response :")])),_:1},512),[[k,n(f)]]),o("div",{innerHTML:n(f),ref_key:"apiResp",ref:y,id:"apiResp",class:"whitespace-pre-line mt-2 my-2 text-gray-700 dark:text-gray-500 leading-relaxed"},null,8,se)])])],64)}}});export{pe as default};