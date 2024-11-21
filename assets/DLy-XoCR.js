import{f as M,l as S,m as A,r as j,p as T,o as r,c as l,b as t,u as o,q as a,t as V,s as L,k as i,j as _}from"./Ho11KFCP.js";import{u as D}from"./bkTsuWyN.js";import{u as H}from"./Z-iyx2tQ.js";import"./BmYiYK0q.js";const F={class:"main bg-gray-100"},G={class:"nav_main"},q={class:"max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 pt-8"},B={class:"flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse"},N={key:0,type:"button",class:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"},O={key:1,class:"flex rounded-full transition items-center justify-center"},U=["src"],Z={class:"text-sm ml-2 font-semibold text-gray-500"},$={class:"container mx-auto max-w-4xl py-20 text-center px-4"},R={class:"flex items-center justify-center"},W=M({__name:"index",async setup(E){let n,c;const{signIn:y,signOut:w,status:k}=S();D({title:"SFDC Developer Toolkit",ogTitle:"SFDC Developer Toolkit",description:"Unleash your Salesforce development potential with our comprehensive toolkit of powerful tools and resources.",ogDescription:"Unleash your Salesforce development potential with our comprehensive toolkit of powerful tools and resources."});const s=A(()=>k.value=="authenticated"),d=j(!1),C=()=>{d.value=!d.value},u=([n,c]=T(()=>H("/api/userData","$pqtWcjQkdb")),n=await n,c(),n);return(p,e)=>{var m,g,h,f,b,v;return r(),l("div",F,[t("nav",G,[t("div",q,[t("div",B,[o(s)?a("",!0):(r(),l("button",N,"Get started")),o(s)&&((g=(m=o(u).data.value)==null?void 0:m.user)!=null&&g.image)?(r(),l("div",O,[t("img",{class:"h-9 w-9 rounded-full object-cover",src:(f=(h=o(u).data.value)==null?void 0:h.user)==null?void 0:f.image},null,8,U),t("p",Z,V((v=(b=o(u).data.value)==null?void 0:b.user)==null?void 0:v.name),1)])):a("",!0),t("button",{onClick:C,type:"button",class:"inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600","aria-controls":"navbar-cta","aria-expanded":"false"},e[3]||(e[3]=[t("span",{class:"sr-only"},"Open main menu",-1),t("svg",{class:"w-5 h-5","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 17 14"},[t("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M1 1h15M1 7h15M1 13h15"})],-1)]))]),t("div",{class:L([{hidden:!d.value},"items-center justify-between w-full md:flex md:w-auto md:order-1"]),id:"navbar-cta"},e[4]||(e[4]=[i('<ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0"><li><a href="#" class="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700">Tools</a></li><li><a href="#" class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500">FAQ</a></li><li><a href="#" class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500">Contact</a></li><li><a href="#" class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500">Support</a></li></ul>',1)]),2)])]),t("div",$,[e[8]||(e[8]=t("h1",{class:"text-4xl lg:text-6xl text-gray-700 font-semibold mb-4 !leading-tight"},"The Swiss Army Knife for Salesforce Developers ",-1)),e[9]||(e[9]=t("p",{class:"text-lg lg:text-xl text-gray-500"},"Empowering developers with powerful tools for Salesforce development.",-1)),t("div",R,[o(s)?a("",!0):(r(),l("button",{key:0,onClick:e[0]||(e[0]=x=>o(y)("google",{callbackUrl:"/dashboard"})),class:"shadow-md bg-gray-50 mt-8 flex items-center justify-center rounded-md border px-4 py-2 outline-none ring-blue-500 ring-offset-2 transition focus:ring-2 hover:border-transparent hover:bg-white hover:shadow-2xl"},e[5]||(e[5]=[i('<svg xmlns="http://www.w3.org/2000/svg" class="mr-2" width="20" height="20"><path style="stroke:none;fill-rule:evenodd;fill:#fbbc05;fill-opacity:1;" d="M4.305 10c0-.637.105-1.242.293-1.816L1.3 5.668A9.798 9.798 0 0 0 .297 10c0 1.559.363 3.023 1.004 4.328l3.293-2.52A5.77 5.77 0 0 1 4.304 10"></path><path style="stroke:none;fill-rule:evenodd;fill:#eb4335;fill-opacity:1;" d="M10.09 4.223c1.379 0 2.625.488 3.605 1.289l2.848-2.844C14.809 1.156 12.582.223 10.09.223A9.762 9.762 0 0 0 1.3 5.668l3.298 2.516a5.766 5.766 0 0 1 5.492-3.961"></path><path style="stroke:none;fill-rule:evenodd;fill:#34a853;fill-opacity:1;" d="M10.09 15.777a5.766 5.766 0 0 1-5.492-3.96L1.3 14.331a9.762 9.762 0 0 0 8.789 5.445c2.387 0 4.668-.847 6.379-2.437l-3.13-2.418c-.882.558-1.991.855-3.25.855"></path><path style="stroke:none;fill-rule:evenodd;fill:#4285f4;fill-opacity:1;" d="M19.438 10c0-.578-.09-1.2-.223-1.777H10.09V12h5.25c-.262 1.29-.977 2.277-2 2.922l3.129 2.418c1.797-1.668 2.968-4.152 2.968-7.34"></path></svg> Log in with Google',2)]))),o(s)?(r(),l("button",{key:1,onClick:e[1]||(e[1]=x=>("navigateTo"in p?p.navigateTo:o(_))("/dashboard")),class:"mx-4 shadow-md bg-gray-50 mt-8 flex items-center justify-center rounded-md border px-4 py-2 outline-none ring-blue-500 ring-offset-2 transition focus:ring-2 hover:border-transparent hover:bg-white hover:shadow-2xl"},e[6]||(e[6]=[i('<svg fill="#000000" width="24px" height="24px" viewBox="0 0 24 24" id="dashboard" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" class="icon flat-color mr-2"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path id="secondary" d="M22,4V7a2,2,0,0,1-2,2H15a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2h5A2,2,0,0,1,22,4ZM9,15H4a2,2,0,0,0-2,2v3a2,2,0,0,0,2,2H9a2,2,0,0,0,2-2V17A2,2,0,0,0,9,15Z" style="fill:#522cba;"></path><path id="primary" d="M11,4v7a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V4A2,2,0,0,1,4,2H9A2,2,0,0,1,11,4Zm9,7H15a2,2,0,0,0-2,2v7a2,2,0,0,0,2,2h5a2,2,0,0,0,2-2V13A2,2,0,0,0,20,11Z" style="fill:#2b3036;"></path></g></svg> Goto Dashboard',2)]))):a("",!0),o(s)?(r(),l("button",{key:2,onClick:e[2]||(e[2]=x=>o(w)({callbackUrl:"/"})),class:"shadow-md bg-gray-50 mt-8 flex items-center justify-center rounded-md border px-4 py-2 outline-none ring-blue-500 ring-offset-2 transition focus:ring-2 hover:border-transparent hover:bg-white hover:shadow-2xl"},e[7]||(e[7]=[i('<svg xmlns="http://www.w3.org/2000/svg" class="mr-2" width="20" height="20"><path style="stroke:none;fill-rule:evenodd;fill:#fbbc05;fill-opacity:1;" d="M4.305 10c0-.637.105-1.242.293-1.816L1.3 5.668A9.798 9.798 0 0 0 .297 10c0 1.559.363 3.023 1.004 4.328l3.293-2.52A5.77 5.77 0 0 1 4.304 10"></path><path style="stroke:none;fill-rule:evenodd;fill:#eb4335;fill-opacity:1;" d="M10.09 4.223c1.379 0 2.625.488 3.605 1.289l2.848-2.844C14.809 1.156 12.582.223 10.09.223A9.762 9.762 0 0 0 1.3 5.668l3.298 2.516a5.766 5.766 0 0 1 5.492-3.961"></path><path style="stroke:none;fill-rule:evenodd;fill:#34a853;fill-opacity:1;" d="M10.09 15.777a5.766 5.766 0 0 1-5.492-3.96L1.3 14.331a9.762 9.762 0 0 0 8.789 5.445c2.387 0 4.668-.847 6.379-2.437l-3.13-2.418c-.882.558-1.991.855-3.25.855"></path><path style="stroke:none;fill-rule:evenodd;fill:#4285f4;fill-opacity:1;" d="M19.438 10c0-.578-.09-1.2-.223-1.777H10.09V12h5.25c-.262 1.29-.977 2.277-2 2.922l3.129 2.418c1.797-1.668 2.968-4.152 2.968-7.34"></path></svg> Log Out',2)]))):a("",!0)])]),e[10]||(e[10]=i('<section class="py-12"><div class="container mx-auto px-4"><h2 class="text-3xl font-semibold mb-6">Featured Tools</h2><div class="grid grid-cols-1 lg:grid-cols-3 gap-8"><div class="bg-white rounded-lg shadow-md p-6"><h3 class="text-xl font-semibold mb-2">Tool 1</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><a href="#" class="text-blue-600 hover:underline mt-4 inline-block">Learn More</a></div><div class="bg-white rounded-lg shadow-md p-6"><h3 class="text-xl font-semibold mb-2">Tool 2</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><a href="#" class="text-blue-600 hover:underline mt-4 inline-block">Learn More</a></div><div class="bg-white rounded-lg shadow-md p-6"><h3 class="text-xl font-semibold mb-2">Tool 3</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><a href="#" class="text-blue-600 hover:underline mt-4 inline-block">Learn More</a></div></div></div></section><footer class="bg-gray-900 text-white py-8"><div class="container mx-auto text-center"><p>© 2024 Salesforce Toolkit. All rights reserved.</p></div></footer>',2))])}}});export{W as default};