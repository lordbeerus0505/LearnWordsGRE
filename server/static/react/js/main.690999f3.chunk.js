(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{45:function(e,t,a){e.exports=a(84)},50:function(e,t,a){},78:function(e,t,a){e.exports=a.p+"media/trump.7507b0c7.gif"},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(17),s=a.n(r),o=(a(50),a(10)),i=a(11),c=a(13),m=a(12),d=a(85),u=a(86),h=a(87),g=a(88),p=a(89),b=a(90),E=a(9),f=a(8),v=a(19),y=(a(17),function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={word:"",meaning:"",className:"",content:""},e.componentDidMount=function(){var t,a;v.get("/get-words").then((function(n){n.data.Success?(console.log(n),t=n.data.word,a=n.data.meaning,e.setState({word:t,meaning:a})):alert("Cant get word dude :(")}))},e.rememberWord=function(){var t,a;v.post("/learnt-word",e.state).then((function(n){n.data.Success?(t=n.data.word,a=n.data.meaning,e.setState({word:t,meaning:a})):alert("Cant get word dude :(")})),document.getElementsByClassName("meaning-card")[0].style.visibility="hidden"},e.dontRememberWord=function(){var t,a;v.post("/forgot-word",e.state).then((function(n){n.data.Success?(t=n.data.word,a=n.data.meaning,e.setState({word:t,meaning:a})):alert("Cant get word dude :(")})),document.getElementsByClassName("meaning-card")[0].style.visibility="hidden"},e.revealMeaning=function(){document.getElementsByClassName("meaning-card")[0].style.visibility="visible"},e.openFlaggedWords=function(){e.props.history.push("/flagged")},e.flagWord=function(){v.post("/add-flag",e.state).then((function(e){e.data.Success?(document.getElementsByClassName("alerts")[0].style.visibility="visible",setTimeout((function(){document.getElementsByClassName("alerts")[0].style.visibility="hidden"}),2e3)):alert("Cant get word dude :(")}))},e.Logout=function(){e.props.history.push("/")},e.hideAlert=function(){document.getElementsByClassName("alerts")[0].style.visibility="hidden"},e}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"alerts",style:{visibility:"hidden"},onClick:this.hideAlert.bind(this)},l.a.createElement(d.a,{color:"info"},"Word has been flagged")),l.a.createElement("div",{className:"flagged-words"},l.a.createElement(u.a,{className:"btn-simple btn-round",color:"info",onClick:this.openFlaggedWords.bind(this)},"Flagged Words")),l.a.createElement("div",{className:"logout"},l.a.createElement(u.a,{className:"btn-simple btn-round",color:"info",onClick:this.Logout.bind(this)},l.a.createElement(f.a,{icon:E.f}))),l.a.createElement("div",{className:"learn-words"},l.a.createElement(h.a,{className:"learn-card text-center",onMouseOver:this.revealMeaning.bind(this)},l.a.createElement(g.a,null,l.a.createElement(p.a,null,this.state.word))),l.a.createElement(h.a,{className:"learn-card text-center meaning-card",style:{visibility:"hidden"}},l.a.createElement(g.a,null,l.a.createElement(b.a,{className:"meaning"},this.state.meaning))),l.a.createElement(h.a,{className:"learn-card text-center operations"},l.a.createElement(g.a,null,l.a.createElement(u.a,{onClick:this.rememberWord.bind(this),color:"success",className:"button-size"},l.a.createElement(f.a,{icon:E.a,size:"2x"})),l.a.createElement(u.a,{onClick:this.dontRememberWord.bind(this),color:"warning",className:"button-size"},l.a.createElement(f.a,{icon:E.g,size:"2x"})),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(u.a,{onClick:this.flagWord.bind(this),color:"danger"},l.a.createElement(f.a,{icon:E.d,size:"2x"}))))))}}]),a}(l.a.Component)),N=a(1),C=a(19),w=(a(17),function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={word:"",meaning:""},e.componentDidMount=function(){var t,a;C.get("/get-flagged-word").then((function(n){n.data.Success?(t=n.data.word,a=n.data.meaning,console.log(n.data),e.setState({word:t,meaning:a})):alert("Cant get word dude :(")}))},e.nextWord=function(){var t,a;C.get("/get-flagged-word",e.state).then((function(n){n.data.Success?(t=n.data.word,a=n.data.meaning,e.setState({word:t,meaning:a})):alert("Cant get word dude :(")})),document.getElementsByClassName("meaning-card")[0].style.visibility="hidden"},e.revealMeaning=function(){document.getElementsByClassName("meaning-card")[0].style.visibility="visible"},e.openLearnWords=function(){e.props.history.push("/learn")},e.hideAlert=function(){document.getElementsByClassName("alerts")[0].style.visibility="hidden"},e.Logout=function(){e.props.history.push("/")},e}return Object(i.a)(a,[{key:"render",value:function(){return N.createElement("div",null,N.createElement("div",{className:"alerts",style:{visibility:"hidden"},onClick:this.hideAlert.bind(this)},N.createElement(d.a,{color:"success"},"Word has been flagged")),N.createElement("div",{className:"flagged-words"},N.createElement(u.a,{className:"btn-simple btn-round",color:"info",onClick:this.openLearnWords.bind(this)},"Learn Words")),N.createElement("div",{className:"logout"},N.createElement(u.a,{className:"btn-simple btn-round",color:"info",onClick:this.Logout.bind(this)},N.createElement(f.a,{icon:E.f}))),N.createElement("div",{className:"learn-words"},N.createElement(h.a,{className:"learn-card text-center",onMouseOver:this.revealMeaning.bind(this)},N.createElement(g.a,null,N.createElement(p.a,null,this.state.word))),N.createElement(h.a,{className:"learn-card text-center meaning-card",style:{visibility:"hidden"}},N.createElement(g.a,null,N.createElement(b.a,{className:"meaning"},this.state.meaning))),N.createElement(h.a,{className:"learn-card text-center operations"},N.createElement(g.a,null,N.createElement(u.a,{onClick:this.nextWord.bind(this),color:"primary"},N.createElement(f.a,{icon:E.b,size:"2x"}))))))}}]),a}(N.Component)),S=a(21),k=a(91),x=a(92),O=a(93),L=a(94),j=a(95),P=a(96),M=a(97),U=a(98),W=a(101),A=a(99),B=a(100),z=a(19),F=function(e){Object(c.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).onChangeConfirmPassword=function(e){a.setState({confirmPassword:e.target.value})},a.onChangePassword=function(e){a.setState({password:e.target.value})},a.onChangeEmail=function(e){a.setState({emailAddress:e.target.value})},a.onChangeFirstName=function(e){a.setState({firstName:e.target.value})},a.onChangeLastName=function(e){a.setState({lastName:e.target.value})},a.SignUp=function(){a.state.password!==a.state.confirmPassword?alert("Passwords do not match"):z.post("/signup",a.state).then((function(e){e.data.Success?a.props.history.push("/learn/"):(a.setState({message:"Username already taken"}),document.getElementsByClassName("alerts-main-page")[0].style.visibility="visible",setTimeout((function(){document.getElementsByClassName("alerts-main-page")[0].style.visibility="hidden"}),2e3))}))},a.Login=function(){z.post("/login",a.state).then((function(e){e.data.Success?a.props.history.push("/learn/"):(console.log("here we are"),a.setState({message:"Incorrect Username or Password"}),document.getElementsByClassName("alerts-main-page")[0].style.visibility="visible",setTimeout((function(){document.getElementsByClassName("alerts-main-page")[0].style.visibility="hidden"}),2e3))}))},a.hideAlert=function(){document.getElementsByClassName("alerts")[0].style.visibility="hidden"},a.toggle=a.toggle.bind(Object(S.a)(a)),a.state={isOpen:!1,modalLogin:!1,modelSignUp:!1,firstName:"",lastName:"",emailAddress:"",password:"",confirmPassword:"",message:""},a}return Object(i.a)(n,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"toggleModalLogin",value:function(){this.setState({modalLogin:!this.state.modalLogin})}},{key:"toggleModalSignUp",value:function(){this.setState({modalSignUp:!this.state.modalSignUp})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(k.a,{expand:"lg",color:"info"},l.a.createElement(x.a,null,l.a.createElement(O.a,{onClick:function(e){return e.preventDefault()}},"Lets Learn Words"),l.a.createElement(L.a,{onClick:this.toggle},l.a.createElement("span",{className:"navbar-toggler-bar navbar-kebab"}),l.a.createElement("span",{className:"navbar-toggler-bar navbar-kebab"}),l.a.createElement("span",{className:"navbar-toggler-bar navbar-kebab"})),l.a.createElement(j.a,{isOpen:this.state.isOpen,navbar:!0},l.a.createElement(P.a,{navbar:!0},l.a.createElement(M.a,null,l.a.createElement(U.a,{onClick:this.toggleModalLogin.bind(this)},"Login")),l.a.createElement(M.a,null,l.a.createElement(U.a,{onClick:this.toggleModalSignUp.bind(this)},"SignUp")))))),l.a.createElement("br",null),l.a.createElement("div",{className:"alerts-main-page",style:{visibility:"hidden"},onClick:this.hideAlert.bind(this)},l.a.createElement(d.a,{color:"warning"},this.state.message)),l.a.createElement("div",{className:"main-body"},l.a.createElement("div",{className:"content text-center"},l.a.createElement("h1",null,"Learn GRE words taken from the Essential 800 words of Barron's List"),l.a.createElement("h2",null,"SignUp to Get Started"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h2",null,"Features:"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("h3",null,"One stop to ace the GRE verbal")),l.a.createElement("li",null,l.a.createElement("h3",null,"Flag words that you have a difficulty remembering")),l.a.createElement("li",null,l.a.createElement("h3",null,"AI based word iteration to help you learn fastest")),l.a.createElement("li",null,l.a.createElement("h3",null,"Keep track of your performance with a streak count")))),l.a.createElement("div",{className:"giphy text-center"},l.a.createElement("img",{src:a(78),alt:"loading..."}))),l.a.createElement(W.a,{className:"modal-login homepage-modal",modalClassName:" modal-info",isOpen:this.state.modalLogin,toggle:this.toggleModalLogin.bind(this)},l.a.createElement(h.a,{className:"card-login card-plain",color:"info"},l.a.createElement("div",{className:"modal-header justify-content-center"},l.a.createElement("button",{"aria-hidden":!0,className:"close","data-dismiss":"modal",type:"button",onClick:this.toggleModalLogin}),l.a.createElement("div",{className:"header header-primary text-center"},l.a.createElement(f.a,{icon:E.h,size:"4x"}))),l.a.createElement("div",{className:"modal-body"},l.a.createElement(A.a,{action:"",className:"form",method:""},l.a.createElement("div",{className:"card-content"},l.a.createElement("div",null,l.a.createElement(f.a,{icon:E.c,size:"2x"}),l.a.createElement(B.a,{placeholder:"Email Address",className:"modalInput",type:"text",onChange:this.onChangeEmail.bind(this)})),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement(f.a,{icon:E.e,size:"2x"}),l.a.createElement(B.a,{placeholder:"Password",type:"password",className:"modalInput",onChange:this.onChangePassword.bind(this)}))))),l.a.createElement("div",{className:"modal-footer text-center pt-4"},l.a.createElement(u.a,{block:!0,className:"btn-neutral btn-round get-started",onClick:this.Login.bind(this),size:"lg"},"Login")))),l.a.createElement(W.a,{className:"modal-login homepage-modal",modalClassName:" modal-info",isOpen:this.state.modalSignUp,toggle:this.toggleModalSignUp.bind(this)},l.a.createElement(h.a,{className:"card-login card-plain",color:"info"},l.a.createElement("div",{className:"modal-header justify-content-center"},l.a.createElement("button",{"aria-hidden":!0,className:"close","data-dismiss":"modal",type:"button",onClick:this.toggleModalSignUp}),l.a.createElement("div",{className:"header header-primary text-center"},l.a.createElement(f.a,{icon:E.h,size:"4x"}))),l.a.createElement("div",{className:"modal-body"},l.a.createElement(A.a,{action:"",className:"form",method:""},l.a.createElement("div",{className:"card-content"},l.a.createElement("div",null,l.a.createElement(f.a,{icon:E.c,size:"2x"}),l.a.createElement(B.a,{placeholder:"Email Address",className:"modalInput",type:"text",onChange:this.onChangeEmail.bind(this)})),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement(f.a,{icon:E.i,size:"2x"}),l.a.createElement(B.a,{placeholder:"First Name",className:"modalInput",type:"text",onChange:this.onChangeFirstName.bind(this)})),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement(f.a,{icon:E.i,size:"2x"}),l.a.createElement(B.a,{placeholder:"Last Name",className:"modalInput",type:"text",onChange:this.onChangeLastName.bind(this)})),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement(f.a,{icon:E.e,size:"2x"}),l.a.createElement(B.a,{placeholder:"Password",type:"password",className:"modalInput",onChange:this.onChangePassword.bind(this)})),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement(f.a,{icon:E.e,size:"2x"}),l.a.createElement(B.a,{placeholder:"Confirm Password",type:"password",className:"modalInput",onChange:this.onChangeConfirmPassword.bind(this)}))))),l.a.createElement("div",{className:"modal-footer text-center pt-4"},l.a.createElement(u.a,{block:!0,className:"btn-neutral btn-round get-started",onClick:this.SignUp.bind(this),size:"lg"},"Get Started")))))}}]),n}(l.a.Component),I=a(1),R=a(19),T=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={mobileNumber:"",password:""},e.onMobileChange=function(t){e.setState({mobileNumber:t.target.value})},e.onPasswordChange=function(t){e.setState({password:t.target.value})},e.openSignUp=function(){e.props.history.push("/auth/signup")},e.submitLoginForm=function(){R.post("/login",e.state).then((function(t){t.data.Success?e.props.history.push("/dashboard/"):(e.props.history.push("/auth/login"),alert("Unable to Login"))}))},e}return Object(i.a)(a,[{key:"render",value:function(){return I.createElement("div",{className:"login-form"},I.createElement("form",null,I.createElement("label",{for:"mobileNumber"},"Mobile Number:"),I.createElement("br",null),I.createElement("input",{type:"text",id:"mobileNumber",name:"mobileNumber",onChange:this.onMobileChange.bind(this)}),I.createElement("br",null),I.createElement("label",{for:"pword"},"Password:"),I.createElement("br",null),I.createElement("input",{type:"password",id:"pword",name:"pword",onChange:this.onPasswordChange.bind(this)}),I.createElement("br",null),I.createElement("button",{type:"button",class:"primary button",onClick:this.submitLoginForm.bind(this)},"Submit")),I.createElement("label",{for:"signup"}),"Don't have an account? Click here to",I.createElement("a",{onClick:this.openSignUp.bind(this)}," Sign Up"))}}]),a}(I.Component),D=a(1),G=a(19),J=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={firstName:"",lastName:"",mobileNumber:"",password:"",confirmPassword:"",userType:"client"},e.onFirstNameChange=function(t){e.setState({firstName:t.target.value})},e.onLastNameChange=function(t){e.setState({lastName:t.target.value})},e.onMobileChange=function(t){e.setState({mobileNumber:t.target.value})},e.onPasswordChange=function(t){e.setState({password:t.target.value})},e.onConfirmPasswordChange=function(t){e.setState({confirmPassword:t.target.value})},e.openLogin=function(){e.props.history.push("/auth/login")},e.submitSignUpForm=function(){e.state.password!==e.state.confirmPassword?alert("Passwords do not match"):G.post("/signup",e.state).then((function(t){console.log("sent data"),t.data.Success?e.props.history.push("/learn/"):(e.props.history.push("/"),alert("Unable to SignUp"))}))},e}return Object(i.a)(a,[{key:"render",value:function(){return D.createElement("div",{className:"login-form"},D.createElement("form",null,D.createElement("label",{for:"firstName"},"First Name:"),D.createElement("br",null),D.createElement("input",{type:"text",id:"firstName",name:"firstName",onChange:this.onFirstNameChange.bind(this)}),D.createElement("br",null),D.createElement("label",{for:"lastName"},"Last Name:"),D.createElement("br",null),D.createElement("input",{type:"text",id:"lastName",name:"lastName",onChange:this.onLastNameChange.bind(this)}),D.createElement("br",null),D.createElement("label",{for:"mobileNumber"},"Mobile Number:"),D.createElement("br",null),D.createElement("input",{type:"text",id:"mobileNumber",name:"mobileNumber",onChange:this.onMobileChange.bind(this)}),D.createElement("br",null),D.createElement("label",{for:"pword"},"Password:"),D.createElement("br",null),D.createElement("input",{type:"password",id:"pword",name:"pword",onChange:this.onPasswordChange.bind(this)}),D.createElement("br",null),D.createElement("label",{for:"pword"},"Confirm Password:"),D.createElement("br",null),D.createElement("input",{type:"password",id:"cpword",name:"cpword",onChange:this.onConfirmPasswordChange.bind(this)}),D.createElement("br",null),D.createElement("button",{type:"button",class:"primary button",onClick:this.submitSignUpForm.bind(this)},"Submit")),D.createElement("label",{for:"signup"}),"Already signed up?",D.createElement("a",{onClick:this.openLogin.bind(this)}," Login"))}}]),a}(D.Component),H=a(1),K=a(42),$=K.Route,_=K.Switch,q=function(e){var t=e.match.path;return console.log(t," is the path"),H.createElement(_,null,H.createElement($,{path:t+"/login",component:T}),H.createElement($,{path:t+"/signup",component:J}))},Q=a(1),V=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).redirectToChat=function(){e.props.history.push("/chat")},e}return Object(i.a)(a,[{key:"render",value:function(){return Q.createElement("div",{className:"navbar"},Q.createElement("button",{type:"button",class:"chatButton",onClick:this.redirectToChat.bind(this)},"Chat"))}}]),a}(Q.Component),X=a(19),Y=a(1),Z=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).componentDidMount=function(){console.log("logging on console"),X.get("/check_creds").then((function(t){console.log("here we are"),t.data.Success?e.props.history.push("/dashboard/"):(e.props.history.push("/auth/login"),alert("Unable to Login"))}))},e}return Object(i.a)(a,[{key:"render",value:function(){return Y.createElement("div",{className:"navbar"},Y.createElement("p",null,"This is the chat section dude"))}}]),a}(Y.Component),ee=a(1),te=a(42),ae=te.Route,ne=te.HashRouter,le=function(e){return ee.createElement(ne,null,ee.createElement(ae,{path:"/",exact:!0,component:F}),ee.createElement(ae,{path:"/auth",component:q}),ee.createElement(ae,{path:"/dashboard",component:V}),ee.createElement(ae,{path:"/chat",component:Z}),ee.createElement(ae,{path:"/learn",component:y}),ee.createElement(ae,{path:"/flagged",component:w}))};a(81),a(82),a(83),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(le,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[45,1,2]]]);
//# sourceMappingURL=main.690999f3.chunk.js.map