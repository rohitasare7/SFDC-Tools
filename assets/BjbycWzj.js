import{u as F,_ as M,a as B,c as U,b as $}from"./5oB0ezfO.js";import{_ as G}from"./D9RQV-Mm.js";import{j as q,o as I,E as T,R as z,T as L,C as H}from"./4QnZ7kGn.js";import{j as W}from"./c05FYinc.js";import{s as Y,r as p,c as w,d as e,w as R,b as o,l as K,u as A,F as Q,o as C,e as D}from"./ByIuboQg.js";import"./BRypmV3A.js";import"./Ebq-h8aY.js";const f="Data Mapper",J="Integration Procedure",X=[{actionType:"vlocity_cmt.IntegrationProcedureService",actionLabel:J,elementLabel:"IP"},{actionType:"vlocity_cmt.DefaultDROmniScriptIntegration",actionLabel:f,elementLabel:f},{actionType:"vlocity_cmt.DefaultOmniscriptApexRestService",actionLabel:"HTTP Action",elementLabel:"API"},{actionType:"vlocity_cmt.DefaultOmniScriptMatrix",actionLabel:"Matrix Action",elementLabel:"Matrix Name"},{actionType:"ApexRemoteClass",actionLabel:"Remote Action",elementLabel:"Apex Class"},{actionType:"omnistudiocore.IPService",actionLabel:J,elementLabel:"IP"},{actionType:"omnistudiocore.DefaultDROmniScriptIntegration",actionLabel:f,elementLabel:f},{actionType:"omnistudiocore.DefaultOmniscriptApexRestService",actionLabel:"HTTP Action",elementLabel:"API"}],Z=y=>{const r=X.find(v=>v.actionType===y);return r||"Action type not found"},ee={key:0,class:"flex gap-4 mt-6"},te={class:"flex flex-col"},ae={class:"flex flex-col"},oe={class:"flex gap-4 mt-4"},ne={class:"w-1/2"},se={class:"flex justify-between items-center mb-4"},le={class:"dark:border-gray-700 dark:shadow-xl dark:border rounded-lg overflow-hidden"},ie={class:"w-1/2"},re={class:"flex justify-between items-center mb-4"},ce={class:"dark:border-gray-700 dark:shadow-xl dark:border rounded-lg overflow-hidden"},ye={__name:"omniscript-input-helper",setup(y){F({title:"OmniScript Input JSON Formatter",ogTitle:"OmniScript Input JSON Formatter",description:"OmniScript Input JSON Formatter formats JSON for OmniScript, ensuring seamless Salesforce configuration and testing.",ogDescription:"OmniScript Input JSON Formatter formats JSON for OmniScript, ensuring seamless Salesforce configuration and testing."});const r=[q(),I,T.lineWrapping];W(),I,T.lineWrapping;const v=Y(),S=c=>{v.value=c.view},s=p(""),l=p(""),_=p(""),b=p(""),O=p(""),P=()=>{s.value=JSON.stringify(JSON.parse(s.value),null,4)},k=()=>{var c,t,d,n,u,m,i,x,g;if(s.value!="")try{P();const a=JSON.parse(s.value),j=((d=(t=(c=a==null?void 0:a.actions[0])==null?void 0:c.params)==null?void 0:t.params)==null?void 0:d.input).replace(/\\"/g,'"').replace(/\\/g,"");l.value=JSON.stringify(JSON.parse(j),null,4);const N=(m=(u=(n=a==null?void 0:a.actions[0])==null?void 0:n.params)==null?void 0:u.params)==null?void 0:m.sClassName;if(b.value=(g=(x=(i=a==null?void 0:a.actions[0])==null?void 0:i.params)==null?void 0:x.params)==null?void 0:g.sMethodName,N){const h=Z(N);_.value=h.actionLabel,O.value=h.elementLabel}}catch(a){console.error("error -->"+a),l.value="Invalid JSON or incorrect structure. Please check the input."}},V=()=>{s.value="",l.value=""},E=()=>{U(l.value)};return(c,t)=>{const d=M,n=B,u=G,m=$;return C(),w(Q,null,[e(d,{class:"text-2xl font-bold"},{default:R(()=>t[2]||(t[2]=[D("OmniScript Input JSON Formatter")])),_:1}),e(n,{class:"text-normal font-thin"},{default:R(()=>t[3]||(t[3]=[D("Get your OmniScript Action/Event details")])),_:1}),_.value||b.value?(C(),w("div",ee,[o("div",te,[e(n,{value:"You are calling : ",class:"mb-2"}),e(u,{value:_.value,readonly:!0,displayCopyBtn:!1},null,8,["value"])]),o("div",ae,[e(n,{value:O.value+" Name : ",class:"mb-2"},null,8,["value"]),e(u,{value:b.value,readonly:!0},null,8,["value"])])])):K("",!0),o("div",oe,[o("div",ne,[o("div",se,[e(n,{value:"Input JSON",class:"mt-2"}),e(m,{onClick:V,icon:z,isSquare:!1,color:"red",title:"Reset Data",class:"mr-2"})]),o("div",le,[e(A(L),{modelValue:s.value,"onUpdate:modelValue":t[0]||(t[0]=i=>s.value=i),placeholder:"Enter your data line by line",onUpdate:k,style:{height:"600px",borderRadius:"5px",overflow:"hidden"},autofocus:!0,"indent-with-tab":!0,"tab-size":2,extensions:r,onReady:S},null,8,["modelValue"])])]),o("div",ie,[o("div",re,[e(n,{value:"Output JSON",class:"mt-2"}),e(m,{onClick:E,icon:H,isSquare:!1,color:"blue",title:"Copy Output JSON",class:"mr-2"})]),o("div",ce,[e(A(L),{modelValue:l.value,"onUpdate:modelValue":t[1]||(t[1]=i=>l.value=i),placeholder:"Enter your data line by line",style:{height:"600px",borderRadius:"5px",overflow:"hidden"},autofocus:!0,"indent-with-tab":!0,"tab-size":2,extensions:r,onReady:S},null,8,["modelValue"])])])])],64)}}};export{ye as default};