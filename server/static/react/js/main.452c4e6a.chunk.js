(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{46:function(e,t,a){e.exports=a(85)},51:function(e,t,a){},79:function(e,t,a){e.exports=a.p+"media/trump.7507b0c7.gif"},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(17),o=a.n(l),s=(a(51),a(21)),i=a(8),c=a(9),m=a(11),d=a(10),u=a(86),h=a(87),g=a(88),p=a(89),b=a(90),E=a(91),f=a(92),v=a(93),N=a(1),w=a(19),y=(a(17),function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={word:"",meaning:"",revealMeaning:""},e.componentDidMount=function(){var t,a;w.get("/get-words").then((function(n){n.data.Success?(console.log(n),t=n.data.word,a=n.data.meaning,e.setState({word:t,meaning:a,revealMeaning:""})):alert("Cant get word dude :(")}))},e.rememberWord=function(){var t,a;w.post("/learnt-word",e.state).then((function(n){n.data.Success?(t=n.data.word,a=n.data.meaning,e.setState({word:t,meaning:a,revealMeaning:""})):alert("Cant get word dude :(")}))},e.dontRememberWord=function(){var t,a;w.post("/forgot-word",e.state).then((function(n){n.data.Success?(t=n.data.word,a=n.data.meaning,e.setState({word:t,meaning:a,revealMeaning:""})):alert("Cant get word dude :(")}))},e.revealMeaning=function(){e.setState({revealMeaning:e.state.meaning})},e.openFlaggedWords=function(){e.props.history.push("/flagged")},e.flagWord=function(){w.post("/add-flag",e.state).then((function(e){e.data.Success?(document.getElementsByClassName("alerts")[0].style.visibility="visible",setTimeout((function(){document.getElementsByClassName("alerts")[0].style.visibility="hidden"}),2e3)):alert("Cant get word dude :(")}))},e.hideAlert=function(){document.getElementsByClassName("alerts")[0].style.visibility="hidden"},e}return Object(c.a)(a,[{key:"render",value:function(){return N.createElement("div",null,N.createElement("div",{className:"alerts",style:{visibility:"hidden"},onClick:this.hideAlert.bind(this)},N.createElement(u.a,{color:"success"},"Word has been flagged")),N.createElement("div",{className:"flagged-words"},N.createElement(h.a,{className:"btn-simple btn-round",color:"info",onClick:this.openFlaggedWords.bind(this)},"Flagged Words")),N.createElement("div",{className:"learn-words"},N.createElement(g.a,{className:"learn-card"},N.createElement(p.a,{className:"text-center"},N.createElement(b.a,null,this.state.word)),N.createElement(E.a,Object(s.a)({className:"card-body"},"className","text-center"),N.createElement(f.a,null,this.state.revealMeaning),N.createElement("br",null),N.createElement(h.a,{color:"info",onClick:this.revealMeaning.bind(this)},"Reveal")),N.createElement(v.a,{className:"text-center"},N.createElement(h.a,{onClick:this.rememberWord.bind(this),color:"primary",className:"button-size"},"I remember this"),N.createElement(h.a,{onClick:this.dontRememberWord.bind(this),color:"warning",className:"button-size"},"Dont Remember yet"),N.createElement("br",null),N.createElement("br",null),N.createElement(h.a,{onClick:this.flagWord.bind(this),color:"danger"},"Flag Word")))))}}]),a}(N.Component)),C=a(1),S=a(19),k=(a(17),function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={word:"",meaning:"",revealMeaning:""},e.componentDidMount=function(){var t,a;S.get("/get-flagged-word").then((function(n){n.data.Success?(t=n.data.word,a=n.data.meaning,console.log(n.data),e.setState({word:t,meaning:a,revealMeaning:""})):alert("Cant get word dude :(")}))},e.nextWord=function(){var t,a;S.get("/get-flagged-word",e.state).then((function(n){n.data.Success?(t=n.data.word,a=n.data.meaning,e.setState({word:t,meaning:a,revealMeaning:""})):alert("Cant get word dude :(")}))},e.revealMeaning=function(){e.setState({revealMeaning:e.state.meaning})},e.openLearnWords=function(){e.props.history.push("/learn")},e.hideAlert=function(){document.getElementsByClassName("alerts")[0].style.visibility="hidden"},e}return Object(c.a)(a,[{key:"render",value:function(){return C.createElement("div",null,C.createElement("div",{className:"alerts",style:{visibility:"hidden"},onClick:this.hideAlert.bind(this)},C.createElement(u.a,{color:"success"},"Word has been flagged")),C.createElement("div",{className:"flagged-words"},C.createElement(h.a,{className:"btn-simple btn-round",color:"info",onClick:this.openLearnWords.bind(this)},"Learn Words")),C.createElement("div",{className:"learn-words"},C.createElement(g.a,{className:"learn-card"},C.createElement(p.a,{className:"text-center"},C.createElement(b.a,null,this.state.word)),C.createElement(E.a,Object(s.a)({className:"card-body"},"className","text-center"),C.createElement(f.a,null,this.state.revealMeaning),C.createElement("br",null),C.createElement(h.a,{color:"info",onClick:this.revealMeaning.bind(this)},"Reveal")),C.createElement(v.a,{className:"text-center"},C.createElement(h.a,{onClick:this.nextWord.bind(this),color:"primary"},"Next Word")))))}}]),a}(C.Component)),O=a(22),x=a(94),j=a(95),L=a(96),M=a(97),P=a(98),U=a(99),W=a(100),A=a(101),F=a(104),z=a(102),I=a(103),R=a(16),B=a(15),D=a(19),T=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).onChangeConfirmPassword=function(e){a.setState({confirmPassword:e.target.value})},a.onChangePassword=function(e){a.setState({password:e.target.value})},a.onChangeEmail=function(e){a.setState({emailAddress:e.target.value})},a.onChangeFirstName=function(e){a.setState({firstName:e.target.value})},a.onChangeLastName=function(e){a.setState({lastName:e.target.value})},a.SignUp=function(){a.state.password!==a.state.confirmPassword?alert("Passwords do not match"):D({method:"post",url:"/signup",timeout:24e4,data:a.state}).then((function(e){console.log("sent data"),e.data.Success?a.props.history.push("/learn/"):(a.props.history.push("/auth/signup"),alert("Unable to SignUp"))}))},a.Login=function(){D.post("/login",a.state).then((function(e){e.data.Success?a.props.history.push("/learn/"):(a.props.history.push("/auth/login"),alert("Unable to Login"))}))},a.toggle=a.toggle.bind(Object(O.a)(a)),a.state={isOpen:!1,modalLogin:!1,modelSignUp:!1,firstName:"",lastName:"",emailAddress:"",password:"",confirmPassword:""},a}return Object(c.a)(n,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"toggleModalLogin",value:function(){this.setState({modalLogin:!this.state.modalLogin})}},{key:"toggleModalSignUp",value:function(){this.setState({modalSignUp:!this.state.modalSignUp})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(x.a,{expand:"lg",color:"info"},r.a.createElement(j.a,null,r.a.createElement(L.a,{onClick:function(e){return e.preventDefault()}},"Lets Learn Words"),r.a.createElement(M.a,{onClick:this.toggle},r.a.createElement("span",{className:"navbar-toggler-bar navbar-kebab"}),r.a.createElement("span",{className:"navbar-toggler-bar navbar-kebab"}),r.a.createElement("span",{className:"navbar-toggler-bar navbar-kebab"})),r.a.createElement(P.a,{isOpen:this.state.isOpen,navbar:!0},r.a.createElement(U.a,{navbar:!0},r.a.createElement(W.a,null,r.a.createElement(A.a,{onClick:this.toggleModalLogin.bind(this)},"Login")),r.a.createElement(W.a,null,r.a.createElement(A.a,{onClick:this.toggleModalSignUp.bind(this)},"SignUp")))))),r.a.createElement("div",{className:"main-body"},r.a.createElement("div",{className:"content text-center"},r.a.createElement("h1",null,"Learn GRE words taken from the Essential 800 words of Barron's List"),r.a.createElement("h2",null,"SignUp to Get Started"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h2",null,"Features:"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("h3",null,"One stop to ace the GRE verbal")),r.a.createElement("li",null,r.a.createElement("h3",null,"Flag words that you have a difficulty remembering")),r.a.createElement("li",null,r.a.createElement("h3",null,"AI based word iteration to help you learn fastest")),r.a.createElement("li",null,r.a.createElement("h3",null,"Keep track of your performance with a streak count")))),r.a.createElement("div",{className:"giphy text-center"},r.a.createElement("img",{src:a(79),alt:"loading..."}))),r.a.createElement(F.a,{className:"modal-login homepage-modal",modalClassName:" modal-info",isOpen:this.state.modalLogin,toggle:this.toggleModalLogin.bind(this)},r.a.createElement(g.a,{className:"card-login card-plain",color:"info"},r.a.createElement("div",{className:"modal-header justify-content-center"},r.a.createElement("button",{"aria-hidden":!0,className:"close","data-dismiss":"modal",type:"button",onClick:this.toggleModalLogin}),r.a.createElement("div",{className:"header header-primary text-center"},r.a.createElement(B.a,{icon:R.c,size:"4x"}))),r.a.createElement("div",{className:"modal-body"},r.a.createElement(z.a,{action:"",className:"form",method:""},r.a.createElement("div",{className:"card-content"},r.a.createElement("div",null,r.a.createElement(B.a,{icon:R.a,size:"2x"}),r.a.createElement(I.a,{placeholder:"Email Address",className:"modalInput",type:"text",onChange:this.onChangeEmail.bind(this)})),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(B.a,{icon:R.b,size:"2x"}),r.a.createElement(I.a,{placeholder:"Password",type:"password",className:"modalInput",onChange:this.onChangePassword.bind(this)}))))),r.a.createElement("div",{className:"modal-footer text-center pt-4"},r.a.createElement(h.a,{block:!0,className:"btn-neutral btn-round get-started",onClick:this.Login.bind(this),size:"lg"},"Login")))),r.a.createElement(F.a,{className:"modal-login homepage-modal",modalClassName:" modal-info",isOpen:this.state.modalSignUp,toggle:this.toggleModalSignUp.bind(this)},r.a.createElement(g.a,{className:"card-login card-plain",color:"info"},r.a.createElement("div",{className:"modal-header justify-content-center"},r.a.createElement("button",{"aria-hidden":!0,className:"close","data-dismiss":"modal",type:"button",onClick:this.toggleModalSignUp}),r.a.createElement("div",{className:"header header-primary text-center"},r.a.createElement(B.a,{icon:R.c,size:"4x"}))),r.a.createElement("div",{className:"modal-body"},r.a.createElement(z.a,{action:"",className:"form",method:""},r.a.createElement("div",{className:"card-content"},r.a.createElement("div",null,r.a.createElement(B.a,{icon:R.a,size:"2x"}),r.a.createElement(I.a,{placeholder:"Email Address",className:"modalInput",type:"text",onChange:this.onChangeEmail.bind(this)})),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(B.a,{icon:R.d,size:"2x"}),r.a.createElement(I.a,{placeholder:"First Name",className:"modalInput",type:"text",onChange:this.onChangeFirstName.bind(this)})),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(B.a,{icon:R.d,size:"2x"}),r.a.createElement(I.a,{placeholder:"Last Name",className:"modalInput",type:"text",onChange:this.onChangeLastName.bind(this)})),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(B.a,{icon:R.b,size:"2x"}),r.a.createElement(I.a,{placeholder:"Password",type:"password",className:"modalInput",onChange:this.onChangePassword.bind(this)})),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(B.a,{icon:R.b,size:"2x"}),r.a.createElement(I.a,{placeholder:"Confirm Password",type:"password",className:"modalInput",onChange:this.onChangeConfirmPassword.bind(this)}))))),r.a.createElement("div",{className:"modal-footer text-center pt-4"},r.a.createElement(h.a,{block:!0,className:"btn-neutral btn-round get-started",onClick:this.SignUp.bind(this),size:"lg"},"Get Started")))))}}]),n}(r.a.Component),G=a(1),J=a(19),H=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={mobileNumber:"",password:""},e.onMobileChange=function(t){e.setState({mobileNumber:t.target.value})},e.onPasswordChange=function(t){e.setState({password:t.target.value})},e.openSignUp=function(){e.props.history.push("/auth/signup")},e.submitLoginForm=function(){J.post("/login",e.state).then((function(t){t.data.Success?e.props.history.push("/dashboard/"):(e.props.history.push("/auth/login"),alert("Unable to Login"))}))},e}return Object(c.a)(a,[{key:"render",value:function(){return G.createElement("div",{className:"login-form"},G.createElement("form",null,G.createElement("label",{for:"mobileNumber"},"Mobile Number:"),G.createElement("br",null),G.createElement("input",{type:"text",id:"mobileNumber",name:"mobileNumber",onChange:this.onMobileChange.bind(this)}),G.createElement("br",null),G.createElement("label",{for:"pword"},"Password:"),G.createElement("br",null),G.createElement("input",{type:"password",id:"pword",name:"pword",onChange:this.onPasswordChange.bind(this)}),G.createElement("br",null),G.createElement("button",{type:"button",class:"primary button",onClick:this.submitLoginForm.bind(this)},"Submit")),G.createElement("label",{for:"signup"}),"Don't have an account? Click here to",G.createElement("a",{onClick:this.openSignUp.bind(this)}," Sign Up"))}}]),a}(G.Component),K=a(1),$=a(19),_=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={firstName:"",lastName:"",mobileNumber:"",password:"",confirmPassword:"",userType:"client"},e.onFirstNameChange=function(t){e.setState({firstName:t.target.value})},e.onLastNameChange=function(t){e.setState({lastName:t.target.value})},e.onMobileChange=function(t){e.setState({mobileNumber:t.target.value})},e.onPasswordChange=function(t){e.setState({password:t.target.value})},e.onConfirmPasswordChange=function(t){e.setState({confirmPassword:t.target.value})},e.openLogin=function(){e.props.history.push("/auth/login")},e.submitSignUpForm=function(){e.state.password!==e.state.confirmPassword?alert("Passwords do not match"):$.post("/signup",e.state).then((function(t){console.log("sent data"),t.data.Success?e.props.history.push("/learn/"):(e.props.history.push("/"),alert("Unable to SignUp"))}))},e}return Object(c.a)(a,[{key:"render",value:function(){return K.createElement("div",{className:"login-form"},K.createElement("form",null,K.createElement("label",{for:"firstName"},"First Name:"),K.createElement("br",null),K.createElement("input",{type:"text",id:"firstName",name:"firstName",onChange:this.onFirstNameChange.bind(this)}),K.createElement("br",null),K.createElement("label",{for:"lastName"},"Last Name:"),K.createElement("br",null),K.createElement("input",{type:"text",id:"lastName",name:"lastName",onChange:this.onLastNameChange.bind(this)}),K.createElement("br",null),K.createElement("label",{for:"mobileNumber"},"Mobile Number:"),K.createElement("br",null),K.createElement("input",{type:"text",id:"mobileNumber",name:"mobileNumber",onChange:this.onMobileChange.bind(this)}),K.createElement("br",null),K.createElement("label",{for:"pword"},"Password:"),K.createElement("br",null),K.createElement("input",{type:"password",id:"pword",name:"pword",onChange:this.onPasswordChange.bind(this)}),K.createElement("br",null),K.createElement("label",{for:"pword"},"Confirm Password:"),K.createElement("br",null),K.createElement("input",{type:"password",id:"cpword",name:"cpword",onChange:this.onConfirmPasswordChange.bind(this)}),K.createElement("br",null),K.createElement("button",{type:"button",class:"primary button",onClick:this.submitSignUpForm.bind(this)},"Submit")),K.createElement("label",{for:"signup"}),"Already signed up?",K.createElement("a",{onClick:this.openLogin.bind(this)}," Login"))}}]),a}(K.Component),q=a(1),Q=a(43),V=Q.Route,X=Q.Switch,Y=function(e){var t=e.match.path;return console.log(t," is the path"),q.createElement(X,null,q.createElement(V,{path:t+"/login",component:H}),q.createElement(V,{path:t+"/signup",component:_}))},Z=a(1),ee=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).redirectToChat=function(){e.props.history.push("/chat")},e}return Object(c.a)(a,[{key:"render",value:function(){return Z.createElement("div",{className:"navbar"},Z.createElement("button",{type:"button",class:"chatButton",onClick:this.redirectToChat.bind(this)},"Chat"))}}]),a}(Z.Component),te=a(19),ae=a(1),ne=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).componentDidMount=function(){console.log("logging on console"),te.get("/check_creds").then((function(t){console.log("here we are"),t.data.Success?e.props.history.push("/dashboard/"):(e.props.history.push("/auth/login"),alert("Unable to Login"))}))},e}return Object(c.a)(a,[{key:"render",value:function(){return ae.createElement("div",{className:"navbar"},ae.createElement("p",null,"This is the chat section dude"))}}]),a}(ae.Component),re=a(1),le=a(43),oe=le.Route,se=le.HashRouter,ie=function(e){return re.createElement(se,null,re.createElement(oe,{path:"/",exact:!0,component:T}),re.createElement(oe,{path:"/auth",component:Y}),re.createElement(oe,{path:"/dashboard",component:ee}),re.createElement(oe,{path:"/chat",component:ne}),re.createElement(oe,{path:"/learn",component:y}),re.createElement(oe,{path:"/flagged",component:k}))};a(82),a(83),a(84),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(ie,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[46,1,2]]]);
//# sourceMappingURL=main.452c4e6a.chunk.js.map