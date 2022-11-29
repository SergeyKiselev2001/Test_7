(function(){"use strict";var e={4171:function(e,t,o){var n=o(9242),r=o(3396);const a={class:"pt-2.5 sm:pt-5 px-2.5 sm:px-10 md:px-20 flex flex-col sm:flex-row"},s=["innerHTML"];function l(e,t,o,n,l,i){const c=(0,r.up)("ButtonComp"),m=(0,r.up)("RequestFeedback"),u=(0,r.up)("ModalWindow");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",a,[(0,r.Wm)(c,{class:"w-full sm:w-auto mb-2.5 sm:mb-0 mr-0 sm:mr-4",onClick:t[0]||(t[0]=t=>e.$store.commit("showFormModal","Москва")),text:"Заказать в Москву",color:"blue"}),(0,r.Wm)(c,{class:"w-full sm:w-auto",onClick:t[1]||(t[1]=t=>e.$store.commit("showFormModal","Санкт-Петербург")),text:"Заказать в Санкт-Петербург",color:"green"})]),e.$store.state.showFormModal?((0,r.wg)(),(0,r.j4)(u,{key:0,class:"px-2.5 absolute sm:px-10 md:px-0"},{default:(0,r.w5)((()=>[(0,r.Wm)(m,{class:"w-full relative top-1/2 translate-y-[-50%] md:w-[793px] md:left-1/2 md:translate-x-[-50%]"})])),_:1})):(0,r.kq)("",!0),e.$store.state.showResponseModal?((0,r.wg)(),(0,r.j4)(u,{key:1,class:"px-6"},{default:(0,r.w5)((()=>[(0,r._)("div",{class:"bg-white p-5 rounded-lg relative top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] sm:max-w-[500px]",innerHTML:e.$store.state.htmlResponse},null,8,s)])),_:1})):(0,r.kq)("",!0)],64)}var i=o(7139);const c=e=>((0,r.dD)("data-v-24bed5ee"),e=e(),(0,r.Cn)(),e),m=c((()=>(0,r._)("span",{class:"block text-2xl font-medium mb-9 grid_title sm:mb-0"},"Заказать звонок",-1))),u={class:"block font-medium mb-5 grid_fio md:mb-4"},d=c((()=>(0,r._)("span",{class:"block"},"Имя*",-1))),p=["value"],f={class:"block font-medium mb-5 grid_phone md:mb-4"},h=c((()=>(0,r._)("span",{class:"block"},"Телефон*",-1))),g=["value"],b={class:"block font-medium mb-5 grid_email md:mb-4"},w=c((()=>(0,r._)("span",{class:"block"},"Email*",-1))),_=["value"],v={class:"block font-medium mb-5 grid_city md:mb-4"},y=c((()=>(0,r._)("span",{class:"block"},"Город*",-1))),x=["value"],k={class:"grid_button sm:pt-6 md:pt-0"};function $(e,t,o,a,s,l){const c=(0,r.up)("ButtonComp");return(0,r.wg)(),(0,r.iD)("form",{class:"bg-white p-5 rounded-lg cursor-default form_grid",onClick:t[4]||(t[4]=(0,n.iM)((()=>{}),["stop"]))},[m,(0,r._)("label",u,[d,(0,r._)("input",{type:"text",placeholder:"Иван Иванов",class:"font-normal w-full py-2 px-2.5 border border-gray-300 rounded-md leading-5 tracking-tighter",value:e.$store.state?.form?.name,onInput:t[0]||(t[0]=t=>e.$store.commit("setName",t.target.value))},null,40,p)]),(0,r._)("label",f,[h,(0,r._)("input",{type:"text",placeholder:"+7 (___) ___-__-__",class:"font-normal w-full py-2 px-2.5 border border-gray-300 rounded-md leading-5 tracking-tighter",value:e.$store.getters?.getPhone,onInput:t[1]||(t[1]=t=>e.$store.commit("setPhone",t.target.value))},null,40,g)]),(0,r._)("label",b,[w,(0,r._)("input",{type:"text",placeholder:"you@example.com",class:"font-normal w-full py-2 px-2.5 border border-gray-300 rounded-md leading-5 tracking-tighter",value:e.$store.state?.form?.email,onInput:t[2]||(t[2]=t=>e.$store.commit("setEmail",t.target.value))},null,40,_)]),(0,r._)("label",v,[y,(0,r._)("select",{class:"font-normal w-full py-2 px-2.5 border border-gray-300 rounded-md h-[38px] leading-5 tracking-tighter",value:e.$store.state?.form?.city,onChange:t[3]||(t[3]=(...e)=>l.selectHandle&&l.selectHandle(...e))},[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.cities,(e=>((0,r.wg)(),(0,r.iD)("option",{key:e.id},(0,i.zw)(e.name),1)))),128))],40,x)]),(0,r._)("div",k,[(0,r.Wm)(c,{class:"w-full",text:"Отправить",color:"greenLight",onClick:l.buttonHandle},null,8,["onClick"])])])}const M=[{id:1,name:"Москва"},{id:2,name:"Санкт-Петербург"},{id:3,name:"Казань"}];var C={name:"RequestFeedback",data(){return{cities:M}},methods:{buttonHandle(e){e.preventDefault(),this.$store.dispatch("sendData")},selectHandle({target:{value:e}}){this.$store.commit("setCity",e)}}},F=o(89);const R=(0,F.Z)(C,[["render",$],["__scopeId","data-v-24bed5ee"]]);var O=R,D={name:"App",components:{RequestFeedback:O}};const H=(0,F.Z)(D,[["render",l]]);var j=H;function q(e,t,o,n,a,s){return(0,r.wg)(),(0,r.iD)("button",{class:(0,i.C_)(["py-2 px-4 rounded-md text-white",a.colorClass])},(0,i.zw)(o.text),3)}var W={name:"ButtonComp",data(){const e={blue:"bg-[#3B82F6]",green:"bg-[#0D9488]",greenLight:"bg-[#16A34A]"};return{colorClass:e[this.color]}},props:{text:{type:String,required:!0},color:{type:String,required:!0}}};const B=(0,F.Z)(W,[["render",q]]);var I=B;function P(e,t,o,n,a,s){return(0,r.wg)(),(0,r.iD)("div",{class:"w-screen h-screen absolute top-0 right-0 bg-[#6B7280BF] cursor-pointer",onClick:t[0]||(t[0]=t=>e.$store.commit("closeModals"))},[(0,r.WI)(e.$slots,"default")])}var A={name:"ModalWindow"};const E=(0,F.Z)(A,[["render",P]]);var L=E,S=[I,L],T=o(4311);const Z=T.Z.create({baseURL:"http://hh.autodrive-agency.ru"}),z=async e=>{try{const t=await Z.post("/test-tasks/front/task-7/",e);return t.data}catch(t){return t.response.data}},N=e=>{const t=`+7 (${e[0]||"_"}${e[1]||"_"}${e[2]||"_"})`,o=` ${e[3]||"_"}${e[4]||"_"}${e[5]||"_"}-`,n=`${e[6]||"_"}${e[7]||"_"}-${e[8]||"_"}${e[9]||"_"}`,r=e?`${t}${o}${n}`:"",a=r.match(/[0-9]/g)?.at(-1),s=r.lastIndexOf(a);return`${t}${o}${n}`.substring(0,s+1)},Y=({name:e,phone:t,email:o})=>e?/[0-9]{10}/.test(t)?!!/^\S+@\S+\.\S+$/.test(o)||{error:"Введите правильную почту"}:{error:"Введите корректный номер телефона"}:{error:"Введите имя"};var K=o(65);const U=(0,K.MT)({state:{showFormModal:!1,showResponseModal:!1,htmlResponse:"",form:{name:"",phone:"",email:"",city:""}},getters:{getPhone({form:e}){return N(e.phone)}},mutations:{setName({form:e},t){e.name=t},setEmail({form:e},t){e.email=t},setCity({form:e},t){e.city=M.find((e=>e.name==t)).name},showResponseModal(e){e.showResponseModal=!0},setHtmlResponse(e,t){e.htmlResponse=t},clearForm({form:e}){for(let t in e)e[t]=""},showFormModal(e,t){e.showFormModal=!0,e.form.city=t},setPhone({form:e},t){e.phone&&t.length>18?e.phone=t.replaceAll(/[^\d]/g,"").substring(1,10):e.phone?e.phone=t.replaceAll(/[^\d]/g,"").substring(1):e.phone=t},closeModals(e){e.showResponseModal=!1,e.showFormModal=!1}},actions:{async sendData(e){const{state:{form:{name:t,phone:o,email:n,city:r}}}=e,a=Y({name:t,phone:o,email:n});if(!0===a){const a={name:t,email:n,phone:`+7${o}`,city_id:M.find((e=>e.name==r)).id},s=await z(a);e.commit("setHtmlResponse",s),e.commit("clearForm"),e.commit("closeModals"),e.commit("showResponseModal")}else alert(a.error)}}}),G=(0,n.ri)(j);S.forEach((e=>{G.component(e.name,e)})),G.use(U).mount("#app")}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,o),a.exports}o.m=e,function(){var e=[];o.O=function(t,n,r,a){if(!n){var s=1/0;for(m=0;m<e.length;m++){n=e[m][0],r=e[m][1],a=e[m][2];for(var l=!0,i=0;i<n.length;i++)(!1&a||s>=a)&&Object.keys(o.O).every((function(e){return o.O[e](n[i])}))?n.splice(i--,1):(l=!1,a<s&&(s=a));if(l){e.splice(m--,1);var c=r();void 0!==c&&(t=c)}}return t}a=a||0;for(var m=e.length;m>0&&e[m-1][2]>a;m--)e[m]=e[m-1];e[m]=[n,r,a]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,a,s=n[0],l=n[1],i=n[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(r in l)o.o(l,r)&&(o.m[r]=l[r]);if(i)var m=i(o)}for(t&&t(n);c<s.length;c++)a=s[c],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(m)},n=self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(4171)}));n=o.O(n)})();
//# sourceMappingURL=app.e9c2efbc.js.map