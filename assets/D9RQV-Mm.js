import{d as p}from"./5oB0ezfO.js";import{r as c,h as y,o as n,c as s,b as a,l as v}from"./ByIuboQg.js";const f={class:"relative"},g=["readonly","value"],k={__name:"TextInputCopyBtn",props:{value:String,copyContent:{type:Boolean,default:!0},readonly:{type:Boolean,default:!0},displayCopyBtn:{type:Boolean,default:!0}},emits:["update:modelValue"],setup(l,{expose:d}){const t=l,o=c(null);y(()=>{o.value.hasAttribute("autofocus")&&o.value.focus()}),d({focus:()=>o.value.focus()});const i=(r,e)=>{e&&(navigator.clipboard.writeText(r),p("Value copied to clipboard."))};return(r,e)=>(n(),s("div",f,[a("input",{ref_key:"input",ref:o,readonly:t.readonly,class:"bg-gray-50 dark:bg-gray-700 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-10 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 !outline-none text-ellipsis",value:t.value,onInput:e[0]||(e[0]=u=>r.$emit("update:modelValue",u.target.value))},null,40,g),t.displayCopyBtn?(n(),s("button",{key:0,type:"button",class:"absolute inset-y-0 right-0 flex items-center pr-3",onClick:e[1]||(e[1]=u=>i(t.value,l.copyContent))},e[2]||(e[2]=[a("svg",{xmlns:"http://www.w3.org/2000/svg",class:"text-gray-300 fill-current",width:"24",height:"24",viewBox:"0 -960 960 960"},[a("path",{d:"M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-520q0-17 11.5-28.5T160-720q17 0 28.5 11.5T200-680v520h400q17 0 28.5 11.5T640-120q0 17-11.5 28.5T600-80H200Zm160-240v-480 480Z"})],-1)]))):v("",!0)]))}};export{k as _};
