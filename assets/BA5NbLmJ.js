import{u as A,c as k,_ as R,a as E,b as W}from"./5oB0ezfO.js";import{_ as M}from"./BXc8icZ7.js";import{C as T,j as U,o as V,E as j,R as B,T as w}from"./4QnZ7kGn.js";import{j as D}from"./c05FYinc.js";import{s as z,r as C,k as q,c as F,d as a,w as m,b as t,u as N,F as H,o as L,e as c}from"./ByIuboQg.js";import"./BRypmV3A.js";import"./Ebq-h8aY.js";const P={class:"flex gap-4 mt-6 mb-4"},G={class:"mr-4"},Y={class:"flex w-full gap-4"},K={class:"w-1/2"},Q={class:"flex justify-between items-center mb-2"},X={class:"dark:border-gray-700 dark:shadow-xl dark:border rounded-lg overflow-hidden"},Z={class:"w-1/2"},ee={class:"flex justify-between items-center mb-2"},se={class:"dark:border-gray-700 dark:shadow-xl dark:border rounded-lg overflow-hidden"},ae={class:"flex justify-between items-center mb-2 mt-4"},te={class:"dark:border-gray-700 dark:shadow-xl dark:border rounded-lg overflow-hidden"},me={__name:"json-to-apex",setup(oe){A({title:"JSON To Apex",ogTitle:"JSON To Apex",description:"JSON to Apex converts JSON into Salesforce wrapper classes, simplifying integration and data handling..",ogDescription:"JSON to Apex converts JSON into Salesforce wrapper classes, simplifying integration and data handling.."});const O=[U(),V,j.lineWrapping],_=[D(),V,j.lineWrapping],I=z(),y=n=>{I.value=n.view},i=C("MainClass"),u=C(`${i.value}Test`),v=C(""),l=C(""),f=C(""),J=()=>{i.value="",u.value="",v.value="",l.value="",f.value=""};q(i,n=>{u.value=`${n}Test`});const g=()=>{if(v.value==""){console.log("null value");return}i.value.trim()||(i.value="MainWrapperClass"),u.value.trim()||(u.value=`${i.value}Test`);try{const n=JSON.parse(v.value),e=i.value;l.value=`/*
Class Info Here
*/

public class ${e} {
`;const p={},r=(o,s)=>{s?(p[s]=p[s]||[],p[s].push(o)):l.value+=`    ${o}
`},b=(o,s)=>{for(const d in o){const x=o[d];switch(typeof x){case"object":const S=Array.isArray(x),h=`cls_${d}`;r(`public ${S?`List<${h}>`:h} ${d};`,s),b(S?x[0]:x,d);break;case"string":r(`public String ${d};`,s);break;case"number":r(`public ${Number.isInteger(x)?"Integer":"Double"} ${d};`,s);break;case"boolean":r(`public Boolean ${d};`,s);break}}};b(n,"");for(const o in p)l.value+=`    public class cls_${o} {
`,p[o].forEach(s=>{l.value+=`        ${s}
`}),l.value+=`    }
`;l.value+=`
    public static ${e} parse(String json) {
        return (${e}) System.JSON.deserialize(json, ${e}.class);
    }
}`,f.value=`/*
Test Class for ${e}
Additional Info Here
*/

@isTest
public class ${u.value} {

    @isTest
    public static void wrapperTestMethod() {
        String json = ${JSON.stringify(v.value)};
        ${e} obj = ${e}.parse(json);
        System.assert(obj != null);
    }
}`}catch(n){console.error("error --> "+n),l.value="Invalid Input JSON",f.value="Invalid Input JSON"}},$=async n=>{n=="MainClass"?k(l.value):n=="TestClass"&&k(f.value)};return(n,e)=>{const p=R,r=E,b=M,o=W;return L(),F(H,null,[a(p,{class:"text-2xl font-bold"},{default:m(()=>e[7]||(e[7]=[c("JSON To Apex")])),_:1}),a(r,{class:"text-normal font-thin"},{default:m(()=>e[8]||(e[8]=[c("Convert your JSON into Apex Wrapper Class")])),_:1}),t("div",P,[t("div",G,[a(r,{for:"inpClassName",class:"text-md font-medium"},{default:m(()=>e[9]||(e[9]=[c("Enter Wrapper Class Name")])),_:1}),a(b,{modelValue:i.value,"onUpdate:modelValue":e[0]||(e[0]=s=>i.value=s),type:"text",id:"inpClassName",placeholder:"Enter Wrapper Class Name",class:"mt-2 p-2 border rounded w-46",onChange:g},null,8,["modelValue"])]),t("div",null,[a(r,{for:"testClassName",class:"text-md font-medium"},{default:m(()=>e[10]||(e[10]=[c("Change Test Class Name")])),_:1}),a(b,{modelValue:u.value,"onUpdate:modelValue":e[1]||(e[1]=s=>u.value=s),type:"text",id:"testClassName",placeholder:"Enter Test Class Name",class:"mt-2 p-2 border rounded w-46",onChange:g},null,8,["modelValue"])])]),t("div",Y,[t("div",K,[t("div",Q,[a(r,{class:"text-md font-medium"},{default:m(()=>e[11]||(e[11]=[c("Paste Your JSON Here")])),_:1}),a(o,{onClick:J,icon:B,isSquare:!1,color:"red",title:"Reset Data",class:"mr-4"})]),t("div",X,[a(N(w),{modelValue:v.value,"onUpdate:modelValue":e[2]||(e[2]=s=>v.value=s),placeholder:"Enter your data line by line",onUpdate:g,style:{height:"600px",borderRadius:"5px",overflow:"hidden"},autofocus:!0,"indent-with-tab":!0,"tab-size":2,extensions:O,onReady:y},null,8,["modelValue"])])]),t("div",Z,[t("div",ee,[a(r,{class:"text-md font-medium"},{default:m(()=>e[12]||(e[12]=[c("Wrapper Apex Class")])),_:1}),a(o,{onClick:e[3]||(e[3]=s=>$("MainClass")),icon:T,isSquare:!1,color:"green",title:"Copy Main Wrapper Class"})]),t("div",se,[a(N(w),{modelValue:l.value,"onUpdate:modelValue":e[4]||(e[4]=s=>l.value=s),placeholder:"Enter your data line by line",style:{height:"300px",borderRadius:"5px",overflow:"hidden"},autofocus:!0,"indent-with-tab":!0,"tab-size":2,extensions:_,onReady:y},null,8,["modelValue"])]),t("div",null,[t("div",ae,[a(r,{class:"text-md font-medium"},{default:m(()=>e[13]||(e[13]=[c("Test Class")])),_:1}),a(o,{onClick:e[5]||(e[5]=s=>$("TestClass")),icon:T,isSquare:!1,color:"green",title:"Copy Test Class"})]),t("div",te,[a(N(w),{modelValue:f.value,"onUpdate:modelValue":e[6]||(e[6]=s=>f.value=s),placeholder:"Enter your data line by line",style:{height:"235px",borderRadius:"5px",overflow:"hidden"},autofocus:!0,"indent-with-tab":!0,"tab-size":2,extensions:_,onReady:y},null,8,["modelValue"])])])])])],64)}}};export{me as default};
