(function(){"use strict";var e={9895:function(e,t,s){var n=s(9242),r=s(3396);const o={id:"app"};function l(e,t){const s=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("div",o,[(0,r.Wm)(s)])}var a=s(89);const i={},u=(0,a.Z)(i,[["render",l]]);var c=u,d=s(2483),p=s(7139);const g=e=>((0,r.dD)("data-v-c5d5287c"),e=e(),(0,r.Cn)(),e),m={class:"image"},f=g((()=>(0,r._)("h2",{class:"mb-5"},"BlogLancer.com",-1))),h={class:"w-100 d-flex justify-content-center align-items-center"},v={class:"card w-25 cardItem"},w={class:"p-5"},_=g((()=>(0,r._)("h4",null,"Login",-1))),y={class:"mb-3 input-group"},b=g((()=>(0,r._)("div",{class:"input-group-prepend"},[(0,r._)("span",{class:"input-group-text d-flex align-items-center"},[(0,r._)("i",{class:"fa fa-user fa-lg",style:{"line-height":"1.5 !important"}})])],-1))),x={class:"mb-3 input-group"},k=g((()=>(0,r._)("div",{class:"input-group-prepend"},[(0,r._)("span",{class:"input-group-text d-flex align-items-center"},[(0,r._)("i",{class:"fa fa-lock fa-lg",style:{"line-height":"1.5 !important"}})])],-1))),M=["type"],C={class:"input-group-append"},P={class:"input-group-text d-flex align-items-center"},I={class:"d-flex justify-content-start",style:{"font-size":"13px"}},U=g((()=>(0,r._)("br",null,null,-1))),j={class:"d-flex justify-content-start"},B={key:0,style:{color:"red","font-size":"13px"}};function D(e,t,s,o,l,a){return(0,r.wg)(),(0,r.iD)("div",m,[f,(0,r._)("div",h,[(0,r._)("div",v,[(0,r._)("div",w,[_,(0,r._)("div",null,[(0,r._)("div",y,[b,(0,r.wy)((0,r._)("input",{type:"text",class:"form-control",id:"username","onUpdate:modelValue":t[0]||(t[0]=e=>l.username=e),onInput:t[1]||(t[1]=(...e)=>a.removeErrMsg&&a.removeErrMsg(...e)),placeholder:"Username",required:""},null,544),[[n.nr,l.username]])]),(0,r._)("div",x,[k,(0,r.wy)((0,r._)("input",{class:"form-control",id:"password",type:l.showPassword?"text":"password","onUpdate:modelValue":t[2]||(t[2]=e=>l.password=e),placeholder:"Password",required:"",onInput:t[3]||(t[3]=(...e)=>a.removeErrMsg&&a.removeErrMsg(...e))},null,40,M),[[n.YZ,l.password]]),(0,r._)("div",C,[(0,r._)("span",P,[(0,r._)("i",{style:{"line-height":"1.5 !important"},class:(0,p.C_)(["fa",l.showPassword?"fa-eye-slash fa-lg":"fa-eye fa-lg"]),onClick:t[4]||(t[4]=(...e)=>a.togglePasswordVisibility&&a.togglePasswordVisibility(...e))},null,2)])])]),(0,r._)("div",I,[(0,r._)("a",{onClick:t[5]||(t[5]=(...e)=>a.signUp&&a.signUp(...e))},"New user? Sign up!"),U]),(0,r._)("div",j,[l.errMsg?((0,r.wg)(),(0,r.iD)("span",B,(0,p.zw)(l.errMsg),1)):(0,r.kq)("",!0)]),(0,r._)("button",{type:"submit",class:"btn btn-primary mt-2",onClick:t[6]||(t[6]=(0,n.iM)(((...e)=>a.login&&a.login(...e)),["prevent"]))}," Login ")])])])])])}s(560);var E=s(4161),S={data(){return{username:"",password:"",showPassword:!1,errMsg:""}},methods:{async login(){if(this.username&&this.password)try{sessionStorage.removeItem("token");let e={username:this.username,password:this.password},t=await E.Z.post("/users/login",e);sessionStorage.setItem("token",t?.data?.token),sessionStorage.setItem("user",this.username),this.$router.push("/home")}catch(e){console.log(e),this.errMsg=e?.response?.data}else this.errMsg="All fields are required"},togglePasswordVisibility(){this.showPassword=!this.showPassword},signUp(){this.$router.push("/register")},removeErrMsg(){this.errMsg=""}}};const z=(0,a.Z)(S,[["render",D],["__scopeId","data-v-c5d5287c"]]);var q=z;const A=e=>((0,r.dD)("data-v-7387cfbe"),e=e(),(0,r.Cn)(),e),V={class:"top-bar d-flex justify-content-between"},O={class:"tabs"},T={key:0,class:"blog-list"},Z=A((()=>(0,r._)("span",null,"Author :",-1))),$=A((()=>(0,r._)("span",null,"Posted At :",-1))),L=A((()=>(0,r._)("span",null,"Content :",-1))),Y={key:1,class:"blog-list"},H=A((()=>(0,r._)("span",null,"Author :",-1))),N=A((()=>(0,r._)("span",null,"Posted At :",-1))),W=A((()=>(0,r._)("span",null,"Content :",-1))),F={key:2,class:"card d-flex justify-content-start w-50 p-3 mt-4 blogCard"};function K(e,t,s,n,o,l){return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("div",V,[(0,r._)("h4",null,"Welcome back , "+(0,p.zw)(o.user),1),(0,r._)("div",null,[(0,r._)("button",{class:"btn btn-success me-3",onClick:t[0]||(t[0]=(...e)=>l.createBlog&&l.createBlog(...e))},"Post a Blog"),(0,r._)("button",{class:"btn btn-secondary",onClick:t[1]||(t[1]=(...e)=>l.logout&&l.logout(...e))},"Logout")])]),(0,r._)("div",O,[(0,r._)("ul",null,[(0,r._)("li",{class:(0,p.C_)({active:"all"===o.activeTab})},[(0,r._)("button",{onClick:t[2]||(t[2]=e=>o.activeTab="all")},"All Blogs")],2),(0,r._)("li",{class:(0,p.C_)({active:"my"===o.activeTab})},[(0,r._)("button",{onClick:t[3]||(t[3]=e=>o.activeTab="my")},"My Blogs")],2)])]),"all"===o.activeTab?((0,r.wg)(),(0,r.iD)("div",T,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.allBlogs,(e=>((0,r.wg)(),(0,r.iD)("div",{key:e.id,class:"card d-flex justify-content-start w-50 p-3 mt-4 blogCard"},[(0,r._)("div",null,[Z,(0,r.Uk)((0,p.zw)(e?.author),1)]),(0,r._)("div",null,[$,(0,r.Uk)((0,p.zw)(e?.createdAt),1)]),(0,r._)("div",null,[L,(0,r.Uk)((0,p.zw)(e?.content),1)])])))),128))])):(0,r.kq)("",!0),"my"===o.activeTab?((0,r.wg)(),(0,r.iD)("div",Y,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.myBlogs,(e=>((0,r.wg)(),(0,r.iD)("div",{key:e.id,class:"card d-flex justify-content-start w-50 p-3 mt-4 blogCard"},[(0,r._)("div",null,[H,(0,r.Uk)((0,p.zw)(e?.author),1)]),(0,r._)("div",null,[N,(0,r.Uk)((0,p.zw)(e?.createdAt),1)]),(0,r._)("div",null,[W,(0,r.Uk)((0,p.zw)(e?.content),1)])])))),128))])):(0,r.kq)("",!0),o.myBlogs.length<=0&&"my"===o.activeTab?((0,r.wg)(),(0,r.iD)("div",F," You haven't posted any blogs yet ")):(0,r.kq)("",!0)])}var R={data(){return{activeTab:"all",allBlogs:[],myBlogs:[],user:sessionStorage.getItem("user")}},mounted(){sessionStorage.getItem("token")||sessionStorage.getItem("user")?this.fetchAllBlogs():(sessionStorage.clear(),this.$router.push("/"))},methods:{async fetchAllBlogs(){try{let e=await E.Z.get("/blog/");this.myBlogs=e?.data?.filter((e=>e.author==this.user)),setTimeout((()=>{this.allBlogs=e?.data}),1e3)}catch(e){console.log(e),alert("Something went wrong")}},createBlog(){this.$router.push("/newblog")},logout(){sessionStorage.clear(),this.$router.push("/")}}};const G=(0,a.Z)(R,[["render",K],["__scopeId","data-v-7387cfbe"]]);var J=G;const Q=e=>((0,r.dD)("data-v-6471d077"),e=e(),(0,r.Cn)(),e),X={class:"image"},ee=Q((()=>(0,r._)("h2",{class:"mb-5"},"BlogLancer.com",-1))),te={class:"w-100 d-flex justify-content-center align-items-center"},se={class:"card w-25 cardItem"},ne={class:"p-5"},re=Q((()=>(0,r._)("h4",null,"Register",-1))),oe={class:"mb-3 input-group"},le=Q((()=>(0,r._)("div",{class:"input-group-prepend"},[(0,r._)("span",{class:"input-group-text d-flex align-items-center"},[(0,r._)("i",{class:"fa fa-user fa-lg",style:{"line-height":"1.5 !important"}})])],-1))),ae={class:"mb-3 input-group"},ie=Q((()=>(0,r._)("div",{class:"input-group-prepend"},[(0,r._)("span",{class:"input-group-text d-flex align-items-center"},[(0,r._)("i",{class:"fa fa-envelope fa-large",style:{"line-height":"2 !important"}})])],-1))),ue={class:"mb-3 input-group"},ce=Q((()=>(0,r._)("div",{class:"input-group-prepend"},[(0,r._)("span",{class:"input-group-text d-flex align-items-center"},[(0,r._)("i",{class:"fa fa-user fa-lg",style:{"line-height":"1.5 !important"}})])],-1))),de={class:"mb-3 input-group"},pe=Q((()=>(0,r._)("div",{class:"input-group-prepend"},[(0,r._)("span",{class:"input-group-text d-flex align-items-center"},[(0,r._)("i",{class:"fa fa-lock fa-lg",style:{"line-height":"1.5 !important"}})])],-1))),ge=["type"],me={class:"input-group-append"},fe={class:"input-group-text d-flex align-items-center"},he=Q((()=>(0,r._)("div",{class:"d-flex justify-content-start",style:{"font-size":"13px"}},[(0,r._)("a",{href:"/"},"Existing user? Login!"),(0,r._)("br")],-1))),ve={class:"d-flex justify-content-start"},we={key:0,style:{color:"red","font-size":"13px"}};function _e(e,t,s,o,l,a){return(0,r.wg)(),(0,r.iD)("div",X,[ee,(0,r._)("div",te,[(0,r._)("div",se,[(0,r._)("div",ne,[re,(0,r._)("div",null,[(0,r._)("div",oe,[le,(0,r.wy)((0,r._)("input",{type:"text",class:"form-control",id:"fullname","onUpdate:modelValue":t[0]||(t[0]=e=>l.fullname=e),placeholder:"Fullname",onInput:t[1]||(t[1]=(...e)=>a.removeErrMsg&&a.removeErrMsg(...e)),required:""},null,544),[[n.nr,l.fullname]])]),(0,r._)("div",ae,[ie,(0,r.wy)((0,r._)("input",{type:"email",class:"form-control",id:"email","onUpdate:modelValue":t[2]||(t[2]=e=>l.email=e),placeholder:"Email",onInput:t[3]||(t[3]=(...e)=>a.removeErrMsg&&a.removeErrMsg(...e)),required:""},null,544),[[n.nr,l.email]])]),(0,r._)("div",ue,[ce,(0,r.wy)((0,r._)("input",{type:"text",class:"form-control",id:"username","onUpdate:modelValue":t[4]||(t[4]=e=>l.username=e),placeholder:"Username",onInput:t[5]||(t[5]=(...e)=>a.removeErrMsg&&a.removeErrMsg(...e)),required:""},null,544),[[n.nr,l.username]])]),(0,r._)("div",de,[pe,(0,r.wy)((0,r._)("input",{class:"form-control",id:"password",type:l.showPassword?"text":"password",onInput:t[6]||(t[6]=(...e)=>a.removeErrMsg&&a.removeErrMsg(...e)),"onUpdate:modelValue":t[7]||(t[7]=e=>l.password=e),placeholder:"Password",required:""},null,40,ge),[[n.YZ,l.password]]),(0,r._)("div",me,[(0,r._)("span",fe,[(0,r._)("i",{style:{"line-height":"1.5 !important"},class:(0,p.C_)(["fa",l.showPassword?"fa-eye-slash fa-lg":"fa-eye fa-lg"]),onClick:t[8]||(t[8]=(...e)=>a.togglePasswordVisibility&&a.togglePasswordVisibility(...e))},null,2)])])]),he,(0,r._)("div",ve,[l.errMsg?((0,r.wg)(),(0,r.iD)("span",we,(0,p.zw)(l.errMsg),1)):(0,r.kq)("",!0)]),(0,r._)("button",{type:"submit",class:"btn btn-primary mt-2",onClick:t[9]||(t[9]=(0,n.iM)(((...e)=>a.register&&a.register(...e)),["prevent"]))}," Register ")])])])])])}var ye={data(){return{fullname:"",email:"",username:"",password:"",showPassword:!1,errMsg:""}},methods:{async register(){try{if(this.username&&this.password){let e={fullName:this.fullname,email:this.email,username:this.username,password:this.password},t=await E.Z.post("/users/newUser",e);"User registered successfully"==t?.data&&(alert("New user created , Please login using the credentials"),this.$router.push("/"))}else this.errMsg="All fields are required"}catch(e){console.log(e?.response?.data),this.errMsg=e?.response?.data}},togglePasswordVisibility(){this.showPassword=!this.showPassword},removeErrMsg(){this.errMsg=""}}};const be=(0,a.Z)(ye,[["render",_e],["__scopeId","data-v-6471d077"]]);var xe=be;const ke=e=>((0,r.dD)("data-v-6c21c78f"),e=e(),(0,r.Cn)(),e),Me={class:"top-bar d-flex justify-content-between"},Ce={class:"cardItem p-4 w-50"},Pe=ke((()=>(0,r._)("label",null,"Author",-1))),Ie=ke((()=>(0,r._)("br",null,null,-1))),Ue=ke((()=>(0,r._)("label",null,"Content",-1))),je=ke((()=>(0,r._)("br",null,null,-1))),Be={class:"d-flex justify-content-start"},De={key:0,style:{color:"red","font-size":"13px"}},Ee={class:"d-flex justify-content-center"};function Se(e,t,s,o,l,a){return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("div",Me,[(0,r._)("h4",null,"Welcome back ,"+(0,p.zw)(l.user),1),(0,r._)("div",null,[(0,r._)("button",{class:"btn btn-success me-3",onClick:t[0]||(t[0]=(...e)=>a.homePage&&a.homePage(...e))},"Go back"),(0,r._)("button",{class:"btn btn-secondary",onClick:t[1]||(t[1]=(...e)=>a.logout&&a.logout(...e))},"Logout")])]),(0,r._)("div",Ce,[(0,r._)("div",null,[Pe,Ie,(0,r.wy)((0,r._)("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=e=>l.user=e),disabled:"",class:"w-100"},null,512),[[n.nr,l.user]])]),(0,r._)("div",null,[Ue,je,(0,r.wy)((0,r._)("textarea",{rows:"4",placeholder:"Enter text","onUpdate:modelValue":t[3]||(t[3]=e=>l.content=e),class:"w-100"},null,512),[[n.nr,l.content]])]),(0,r._)("div",Be,[l.errMsg?((0,r.wg)(),(0,r.iD)("span",De,(0,p.zw)(l.errMsg),1)):(0,r.kq)("",!0)]),(0,r._)("div",Ee,[(0,r._)("button",{class:"btn btn-success",onClick:t[4]||(t[4]=(...e)=>a.postAblog&&a.postAblog(...e))},"Post")])])])}var ze={data(){return{content:"",user:sessionStorage.getItem("user"),errMsg:""}},mounted(){sessionStorage.getItem("token")||sessionStorage.getItem("user")||(sessionStorage.clear(),this.$router.push("/"))},methods:{async postAblog(){if(this.content&&this.user)try{let e={author:this.user,content:this.content},t=await E.Z.post("/blog/New",e);console.log(t.data),"Blog post created successfully"==t.data?(alert("Blog posted successfully"),this.$router.push("/Home")):alert("Something went wrong")}catch(e){console.log(e),alert("Something went wrong")}else this.errMsg="Content is required"},homePage(){this.$router.push("/Home")},logout(){sessionStorage.clear(),this.$router.push("/")}}};const qe=(0,a.Z)(ze,[["render",Se],["__scopeId","data-v-6c21c78f"]]);var Ae=qe;const Ve=[{path:"/",component:q},{path:"/home",component:J},{path:"/register",component:xe},{path:"/newblog",component:Ae}],Oe=(0,d.p7)({history:(0,d.PO)("/"),routes:Ve});var Te=Oe;(0,n.ri)(c).use(Te).mount("#app")}},t={};function s(n){var r=t[n];if(void 0!==r)return r.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,s),o.exports}s.m=e,function(){var e=[];s.O=function(t,n,r,o){if(!n){var l=1/0;for(c=0;c<e.length;c++){n=e[c][0],r=e[c][1],o=e[c][2];for(var a=!0,i=0;i<n.length;i++)(!1&o||l>=o)&&Object.keys(s.O).every((function(e){return s.O[e](n[i])}))?n.splice(i--,1):(a=!1,o<l&&(l=o));if(a){e.splice(c--,1);var u=r();void 0!==u&&(t=u)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[n,r,o]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,o,l=n[0],a=n[1],i=n[2],u=0;if(l.some((function(t){return 0!==e[t]}))){for(r in a)s.o(a,r)&&(s.m[r]=a[r]);if(i)var c=i(s)}for(t&&t(n);u<l.length;u++)o=l[u],s.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return s.O(c)},n=self["webpackChunkfrost_sullivan_application"]=self["webpackChunkfrost_sullivan_application"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=s.O(void 0,[998],(function(){return s(9895)}));n=s.O(n)})();
//# sourceMappingURL=app.fa79470c.js.map