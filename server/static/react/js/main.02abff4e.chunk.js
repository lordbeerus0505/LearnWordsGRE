(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{45:function(e,t,a){e.exports=a(84)},50:function(e,t,a){},78:function(e,t,a){e.exports=a.p+"media/trump.7507b0c7.gif"},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(17),s=a.n(r),o=(a(50),a(10)),i=a(11),c=a(13),m=a(12),d=a(85),u=a(86),h=a(87),g=a(88),p=a(89),b=a(90),E=a(9),f=a(8),v=a(1),y=a(19),N=(a(17),function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={word:"",meaning:"",revealMeaning:"",className:"",content:""},e.componentDidMount=function(){var t,a;y.get("/get-words").then((function(n){n.data.Success?(console.log(n),t=n.data.word,a=n.data.meaning,e.setState({word:t,meaning:a,revealMeaning:""})):alert("Cant get word dude :(")}))},e.rememberWord=function(){var t,a;y.post("/learnt-word",e.state).then((function(n){n.data.Success?(t=n.data.word,a=n.data.meaning,e.setState({word:t,meaning:a,revealMeaning:""})):alert("Cant get word dude :(")})),document.getElementsByClassName("meaning-card")[0].style.visibility="hidden"},e.dontRememberWord=function(){var t,a;y.post("/forgot-word",e.state).then((function(n){n.data.Success?(t=n.data.word,a=n.data.meaning,e.setState({word:t,meaning:a,revealMeaning:""})):alert("Cant get word dude :(")})),document.getElementsByClassName("meaning-card")[0].style.visibility="hidden"},e.revealMeaning=function(){e.setState({revealMeaning:e.state.meaning}),document.getElementsByClassName("meaning-card")[0].style.visibility="visible"},e.openFlaggedWords=function(){e.props.history.push("/flagged")},e.flagWord=function(){y.post("/add-flag",e.state).then((function(e){e.data.Success?(document.getElementsByClassName("alerts")[0].style.visibility="visible",setTimeout((function(){document.getElementsByClassName("alerts")[0].style.visibility="hidden"}),2e3)):alert("Cant get word dude :(")}))},e.Logout=function(){e.props.history.push("/")},e.hideAlert=function(){document.getElementsByClassName("alerts")[0].style.visibility="hidden"},e}return Object(i.a)(a,[{key:"render",value:function(){return v.createElement("div",null,v.createElement("div",{className:"alerts",style:{visibility:"hidden"},onClick:this.hideAlert.bind(this)},v.createElement(d.a,{color:"info"},"Word has been flagged")),v.createElement("div",{className:"flagged-words"},v.createElement(u.a,{className:"btn-simple btn-round",color:"info",onClick:this.openFlaggedWords.bind(this)},"Flagged Words")),v.createElement("div",{className:"logout"},v.createElement(u.a,{className:"btn-simple btn-round",color:"info",onClick:this.Logout.bind(this)},v.createElement(f.a,{icon:E.f}))),v.createElement("div",{className:"learn-words"},v.createElement(h.a,{className:"learn-card text-center",onClick:this.revealMeaning.bind(this)},v.createElement(g.a,null,v.createElement(p.a,null,this.state.word))),v.createElement(h.a,{className:"learn-card text-center meaning-card",style:{visibility:"hidden"}},v.createElement(g.a,null,v.createElement(b.a,{className:"meaning"},this.state.revealMeaning))),v.createElement(h.a,{className:"learn-card text-center operations"},v.createElement(g.a,null,v.createElement(u.a,{onClick:this.rememberWord.bind(this),color:"success",className:"button-size"},v.createElement(f.a,{icon:E.a,size:"2x"})),v.createElement(u.a,{onClick:this.dontRememberWord.bind(this),color:"warning",className:"button-size"},v.createElement(f.a,{icon:E.g,size:"2x"})),v.createElement("br",null),v.createElement("br",null),v.createElement(u.a,{onClick:this.flagWord.bind(this),color:"danger"},v.createElement(f.a,{icon:E.d,size:"2x"}))))))}}]),a}(v.Component)),C=a(1),w=a(19),S=(a(17),function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={word:"",meaning:"",revealMeaning:""},e.componentDidMount=function(){var t,a;w.get("/get-flagged-word").then((function(n){n.data.Success?(t=n.data.word,a=n.data.meaning,console.log(n.data),e.setState({word:t,meaning:a,revealMeaning:""})):alert("Cant get word dude :(")}))},e.nextWord=function(){var t,a;w.get("/get-flagged-word",e.state).then((function(n){n.data.Success?(t=n.data.word,a=n.data.meaning,e.setState({word:t,meaning:a,revealMeaning:""})):alert("Cant get word dude :(")})),document.getElementsByClassName("meaning-card")[0].style.visibility="hidden"},e.revealMeaning=function(){e.setState({revealMeaning:e.state.meaning}),document.getElementsByClassName("meaning-card")[0].style.visibility="visible"},e.openLearnWords=function(){e.props.history.push("/learn")},e.hideAlert=function(){document.getElementsByClassName("alerts")[0].style.visibility="hidden"},e.Logout=function(){e.props.history.push("/")},e}return Object(i.a)(a,[{key:"render",value:function(){return C.createElement("div",null,C.createElement("div",{className:"alerts",style:{visibility:"hidden"},onClick:this.hideAlert.bind(this)},C.createElement(d.a,{color:"success"},"Word has been flagged")),C.createElement("div",{className:"flagged-words"},C.createElement(u.a,{className:"btn-simple btn-round",color:"info",onClick:this.openLearnWords.bind(this)},"Learn Words")),C.createElement("div",{className:"logout"},C.createElement(u.a,{className:"btn-simple btn-round",color:"info",onClick:this.Logout.bind(this)},C.createElement(f.a,{icon:E.f}))),C.createElement("div",{className:"learn-words"},C.createElement(h.a,{className:"learn-card text-center",onClick:this.revealMeaning.bind(this)},C.createElement(g.a,null,C.createElement(p.a,null,this.state.word))),C.createElement(h.a,{className:"learn-card text-center meaning-card",style:{visibility:"hidden"}},C.createElement(g.a,null,C.createElement(b.a,{className:"meaning"},this.state.revealMeaning))),C.createElement(h.a,{className:"learn-card text-center operations"},C.createElement(g.a,null,C.createElement(u.a,{onClick:this.nextWord.bind(this),color:"primary"},C.createElement(f.a,{icon:E.b,size:"2x"}))))))}}]),a}(C.Component)),k=a(21),x=a(91),O=a(92),L=a(93),M=a(94),j=a(95),P=a(96),U=a(97),W=a(98),A=a(101),B=a(99),z=a(100),F=a(19),I=function(e){Object(c.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).onChangeConfirmPassword=function(e){a.setState({confirmPassword:e.target.value})},a.onChangePassword=function(e){a.setState({password:e.target.value})},a.onChangeEmail=function(e){a.setState({emailAddress:e.target.value})},a.onChangeFirstName=function(e){a.setState({firstName:e.target.value})},a.onChangeLastName=function(e){a.setState({lastName:e.target.value})},a.SignUp=function(){a.state.password!==a.state.confirmPassword?alert("Passwords do not match"):F.post("/signup",a.state).then((function(e){e.data.Success?a.props.history.push("/learn/"):(a.setState({message:"Username already taken"}),document.getElementsByClassName("alerts-main-page")[0].style.visibility="visible",setTimeout((function(){document.getElementsByClassName("alerts-main-page")[0].style.visibility="hidden"}),2e3))}))},a.Login=function(){F.post("/login",a.state).then((function(e){e.data.Success?a.props.history.push("/learn/"):(console.log("here we are"),a.setState({message:"Incorrect Username or Password"}),document.getElementsByClassName("alerts-main-page")[0].style.visibility="visible",setTimeout((function(){document.getElementsByClassName("alerts-main-page")[0].style.visibility="hidden"}),2e3))}))},a.hideAlert=function(){document.getElementsByClassName("alerts")[0].style.visibility="hidden"},a.toggle=a.toggle.bind(Object(k.a)(a)),a.state={isOpen:!1,modalLogin:!1,modelSignUp:!1,firstName:"",lastName:"",emailAddress:"",password:"",confirmPassword:"",message:""},a}return Object(i.a)(n,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"toggleModalLogin",value:function(){this.setState({modalLogin:!this.state.modalLogin})}},{key:"toggleModalSignUp",value:function(){this.setState({modalSignUp:!this.state.modalSignUp})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(x.a,{expand:"lg",color:"info"},l.a.createElement(O.a,null,l.a.createElement(L.a,{onClick:function(e){return e.preventDefault()}},"Lets Learn Words"),l.a.createElement(M.a,{onClick:this.toggle},l.a.createElement("span",{className:"navbar-toggler-bar navbar-kebab"}),l.a.createElement("span",{className:"navbar-toggler-bar navbar-kebab"}),l.a.createElement("span",{className:"navbar-toggler-bar navbar-kebab"})),l.a.createElement(j.a,{isOpen:this.state.isOpen,navbar:!0},l.a.createElement(P.a,{navbar:!0},l.a.createElement(U.a,null,l.a.createElement(W.a,{onClick:this.toggleModalLogin.bind(this)},"Login")),l.a.createElement(U.a,null,l.a.createElement(W.a,{onClick:this.toggleModalSignUp.bind(this)},"SignUp")))))),l.a.createElement("br",null),l.a.createElement("div",{className:"alerts-main-page",style:{visibility:"hidden"},onClick:this.hideAlert.bind(this)},l.a.createElement(d.a,{color:"warning"},this.state.message)),l.a.createElement("div",{className:"main-body"},l.a.createElement("div",{className:"content text-center"},l.a.createElement("h1",null,"Learn GRE words taken from the Essential 800 words of Barron's List"),l.a.createElement("h2",null,"SignUp to Get Started"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h2",null,"Features:"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("h3",null,"One stop to ace the GRE verbal")),l.a.createElement("li",null,l.a.createElement("h3",null,"Flag words that you have a difficulty remembering")),l.a.createElement("li",null,l.a.createElement("h3",null,"AI based word iteration to help you learn fastest")),l.a.createElement("li",null,l.a.createElement("h3",null,"Keep track of your performance with a streak count")))),l.a.createElement("div",{className:"giphy text-center"},l.a.createElement("img",{src:a(78),alt:"loading..."}))),l.a.createElement(A.a,{className:"modal-login homepage-modal",modalClassName:" modal-info",isOpen:this.state.modalLogin,toggle:this.toggleModalLogin.bind(this)},l.a.createElement(h.a,{className:"card-login card-plain",color:"info"},l.a.createElement("div",{className:"modal-header justify-content-center"},l.a.createElement("button",{"aria-hidden":!0,className:"close","data-dismiss":"modal",type:"button",onClick:this.toggleModalLogin}),l.a.createElement("div",{className:"header header-primary text-center"},l.a.createElement(f.a,{icon:E.h,size:"4x"}))),l.a.createElement("div",{className:"modal-body"},l.a.createElement(B.a,{action:"",className:"form",method:""},l.a.createElement("div",{className:"card-content"},l.a.createElement("div",null,l.a.createElement(f.a,{icon:E.c,size:"2x"}),l.a.createElement(z.a,{placeholder:"Email Address",className:"modalInput",type:"text",onChange:this.onChangeEmail.bind(this)})),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement(f.a,{icon:E.e,size:"2x"}),l.a.createElement(z.a,{placeholder:"Password",type:"password",className:"modalInput",onChange:this.onChangePassword.bind(this)}))))),l.a.createElement("div",{className:"modal-footer text-center pt-4"},l.a.createElement(u.a,{block:!0,className:"btn-neutral btn-round get-started",onClick:this.Login.bind(this),size:"lg"},"Login")))),l.a.createElement(A.a,{className:"modal-login homepage-modal",modalClassName:" modal-info",isOpen:this.state.modalSignUp,toggle:this.toggleModalSignUp.bind(this)},l.a.createElement(h.a,{className:"card-login card-plain",color:"info"},l.a.createElement("div",{className:"modal-header justify-content-center"},l.a.createElement("button",{"aria-hidden":!0,className:"close","data-dismiss":"modal",type:"button",onClick:this.toggleModalSignUp}),l.a.createElement("div",{className:"header header-primary text-center"},l.a.createElement(f.a,{icon:E.h,size:"4x"}))),l.a.createElement("div",{className:"modal-body"},l.a.createElement(B.a,{action:"",className:"form",method:""},l.a.createElement("div",{className:"card-content"},l.a.createElement("div",null,l.a.createElement(f.a,{icon:E.c,size:"2x"}),l.a.createElement(z.a,{placeholder:"Email Address",className:"modalInput",type:"text",onChange:this.onChangeEmail.bind(this)})),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement(f.a,{icon:E.i,size:"2x"}),l.a.createElement(z.a,{placeholder:"First Name",className:"modalInput",type:"text",onChange:this.onChangeFirstName.bind(this)})),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement(f.a,{icon:E.i,size:"2x"}),l.a.createElement(z.a,{placeholder:"Last Name",className:"modalInput",type:"text",onChange:this.onChangeLastName.bind(this)})),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement(f.a,{icon:E.e,size:"2x"}),l.a.createElement(z.a,{placeholder:"Password",type:"password",className:"modalInput",onChange:this.onChangePassword.bind(this)})),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement(f.a,{icon:E.e,size:"2x"}),l.a.createElement(z.a,{placeholder:"Confirm Password",type:"password",className:"modalInput",onChange:this.onChangeConfirmPassword.bind(this)}))))),l.a.createElement("div",{className:"modal-footer text-center pt-4"},l.a.createElement(u.a,{block:!0,className:"btn-neutral btn-round get-started",onClick:this.SignUp.bind(this),size:"lg"},"Get Started")))))}}]),n}(l.a.Component),R=a(1),T=a(19),D=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={mobileNumber:"",password:""},e.onMobileChange=function(t){e.setState({mobileNumber:t.target.value})},e.onPasswordChange=function(t){e.setState({password:t.target.value})},e.openSignUp=function(){e.props.history.push("/auth/signup")},e.submitLoginForm=function(){T.post("/login",e.state).then((function(t){t.data.Success?e.props.history.push("/dashboard/"):(e.props.history.push("/auth/login"),alert("Unable to Login"))}))},e}return Object(i.a)(a,[{key:"render",value:function(){return R.createElement("div",{className:"login-form"},R.createElement("form",null,R.createElement("label",{for:"mobileNumber"},"Mobile Number:"),R.createElement("br",null),R.createElement("input",{type:"text",id:"mobileNumber",name:"mobileNumber",onChange:this.onMobileChange.bind(this)}),R.createElement("br",null),R.createElement("label",{for:"pword"},"Password:"),R.createElement("br",null),R.createElement("input",{type:"password",id:"pword",name:"pword",onChange:this.onPasswordChange.bind(this)}),R.createElement("br",null),R.createElement("button",{type:"button",class:"primary button",onClick:this.submitLoginForm.bind(this)},"Submit")),R.createElement("label",{for:"signup"}),"Don't have an account? Click here to",R.createElement("a",{onClick:this.openSignUp.bind(this)}," Sign Up"))}}]),a}(R.Component),G=a(1),J=a(19),H=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={firstName:"",lastName:"",mobileNumber:"",password:"",confirmPassword:"",userType:"client"},e.onFirstNameChange=function(t){e.setState({firstName:t.target.value})},e.onLastNameChange=function(t){e.setState({lastName:t.target.value})},e.onMobileChange=function(t){e.setState({mobileNumber:t.target.value})},e.onPasswordChange=function(t){e.setState({password:t.target.value})},e.onConfirmPasswordChange=function(t){e.setState({confirmPassword:t.target.value})},e.openLogin=function(){e.props.history.push("/auth/login")},e.submitSignUpForm=function(){e.state.password!==e.state.confirmPassword?alert("Passwords do not match"):J.post("/signup",e.state).then((function(t){console.log("sent data"),t.data.Success?e.props.history.push("/learn/"):(e.props.history.push("/"),alert("Unable to SignUp"))}))},e}return Object(i.a)(a,[{key:"render",value:function(){return G.createElement("div",{className:"login-form"},G.createElement("form",null,G.createElement("label",{for:"firstName"},"First Name:"),G.createElement("br",null),G.createElement("input",{type:"text",id:"firstName",name:"firstName",onChange:this.onFirstNameChange.bind(this)}),G.createElement("br",null),G.createElement("label",{for:"lastName"},"Last Name:"),G.createElement("br",null),G.createElement("input",{type:"text",id:"lastName",name:"lastName",onChange:this.onLastNameChange.bind(this)}),G.createElement("br",null),G.createElement("label",{for:"mobileNumber"},"Mobile Number:"),G.createElement("br",null),G.createElement("input",{type:"text",id:"mobileNumber",name:"mobileNumber",onChange:this.onMobileChange.bind(this)}),G.createElement("br",null),G.createElement("label",{for:"pword"},"Password:"),G.createElement("br",null),G.createElement("input",{type:"password",id:"pword",name:"pword",onChange:this.onPasswordChange.bind(this)}),G.createElement("br",null),G.createElement("label",{for:"pword"},"Confirm Password:"),G.createElement("br",null),G.createElement("input",{type:"password",id:"cpword",name:"cpword",onChange:this.onConfirmPasswordChange.bind(this)}),G.createElement("br",null),G.createElement("button",{type:"button",class:"primary button",onClick:this.submitSignUpForm.bind(this)},"Submit")),G.createElement("label",{for:"signup"}),"Already signed up?",G.createElement("a",{onClick:this.openLogin.bind(this)}," Login"))}}]),a}(G.Component),K=a(1),$=a(42),_=$.Route,q=$.Switch,Q=function(e){var t=e.match.path;return console.log(t," is the path"),K.createElement(q,null,K.createElement(_,{path:t+"/login",component:D}),K.createElement(_,{path:t+"/signup",component:H}))},V=a(1),X=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).redirectToChat=function(){e.props.history.push("/chat")},e}return Object(i.a)(a,[{key:"render",value:function(){return V.createElement("div",{className:"navbar"},V.createElement("button",{type:"button",class:"chatButton",onClick:this.redirectToChat.bind(this)},"Chat"))}}]),a}(V.Component),Y=a(19),Z=a(1),ee=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).componentDidMount=function(){console.log("logging on console"),Y.get("/check_creds").then((function(t){console.log("here we are"),t.data.Success?e.props.history.push("/dashboard/"):(e.props.history.push("/auth/login"),alert("Unable to Login"))}))},e}return Object(i.a)(a,[{key:"render",value:function(){return Z.createElement("div",{className:"navbar"},Z.createElement("p",null,"This is the chat section dude"))}}]),a}(Z.Component),te=a(1),ae=a(42),ne=ae.Route,le=ae.HashRouter,re=function(e){return te.createElement(le,null,te.createElement(ne,{path:"/",exact:!0,component:I}),te.createElement(ne,{path:"/auth",component:Q}),te.createElement(ne,{path:"/dashboard",component:X}),te.createElement(ne,{path:"/chat",component:ee}),te.createElement(ne,{path:"/learn",component:N}),te.createElement(ne,{path:"/flagged",component:S}))};a(81),a(82),a(83),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(re,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[45,1,2]]]);
//# sourceMappingURL=main.02abff4e.chunk.js.map