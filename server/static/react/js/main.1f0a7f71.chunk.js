(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{46:function(e,t,a){e.exports=a(85)},51:function(e,t,a){},79:function(e,t,a){e.exports=a.p+"media/trump.7507b0c7.gif"},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(17),s=a.n(r),o=(a(51),a(10)),i=a(11),c=a(13),m=a(12),d=a(86),u=a(87),h=a(88),g=a(89),p=a(90),b=a(91),E=a(9),f=a(8),v=a(19),y=(a(17),function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={word:"",meaning:"",className:"",content:""},e.componentDidMount=function(){var t,a;v.get("/get-words").then((function(n){n.data.Success?(console.log(n),t=n.data.word,a=n.data.meaning,e.setState({word:t,meaning:a})):alert("Cant get word dude :(")}))},e.rememberWord=function(){var t,a;v.post("/learnt-word",e.state).then((function(n){n.data.Success?(t=n.data.word,a=n.data.meaning,e.setState({word:t,meaning:a})):alert("Cant get word dude :(")})),document.getElementsByClassName("meaning-card")[0].style.visibility="hidden"},e.dontRememberWord=function(){var t,a;v.post("/forgot-word",e.state).then((function(n){n.data.Success?(t=n.data.word,a=n.data.meaning,e.setState({word:t,meaning:a})):alert("Cant get word dude :(")})),document.getElementsByClassName("meaning-card")[0].style.visibility="hidden"},e.revealMeaning=function(){document.getElementsByClassName("meaning-card")[0].style.visibility="visible"},e.openFlaggedWords=function(){e.props.history.push("/flagged")},e.openLearntWords=function(){e.props.history.push("/learnt")},e.flagWord=function(){v.post("/add-flag",e.state).then((function(e){e.data.Success?(document.getElementsByClassName("alerts")[0].style.visibility="visible",setTimeout((function(){document.getElementsByClassName("alerts")[0].style.visibility="hidden"}),2e3)):alert("Cant get word dude :(")}))},e.Logout=function(){e.props.history.push("/")},e.hideAlert=function(){document.getElementsByClassName("alerts")[0].style.visibility="hidden"},e}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"alerts",style:{visibility:"hidden"},onClick:this.hideAlert.bind(this)},l.a.createElement(d.a,{color:"info"},"Word has been flagged")),l.a.createElement("div",{className:"flagged-words"},l.a.createElement(u.a,{className:"btn-simple btn-round",color:"info",onClick:this.openFlaggedWords.bind(this)},"Flagged Words")),l.a.createElement("div",{className:"learnt-words"},l.a.createElement(u.a,{className:"btn-simple btn-round",color:"info",onClick:this.openLearntWords.bind(this)},"Words Learnt")),l.a.createElement("div",{className:"logout"},l.a.createElement(u.a,{className:"btn-simple btn-round",color:"info",onClick:this.Logout.bind(this)},l.a.createElement(f.a,{icon:E.f}))),l.a.createElement("div",{className:"learn-words"},l.a.createElement(h.a,{className:"learn-card text-center",onMouseOver:this.revealMeaning.bind(this)},l.a.createElement(g.a,null,l.a.createElement(p.a,null,this.state.word))),l.a.createElement(h.a,{className:"learn-card text-center meaning-card",style:{visibility:"hidden"}},l.a.createElement(g.a,null,l.a.createElement(b.a,{className:"meaning"},this.state.meaning))),l.a.createElement(h.a,{className:"learn-card text-center operations"},l.a.createElement(g.a,null,l.a.createElement(u.a,{onClick:this.rememberWord.bind(this),color:"twitter",className:"btn-round btn-icon choice-button"},l.a.createElement(f.a,{icon:E.a,size:"2x"})),l.a.createElement(u.a,{onClick:this.dontRememberWord.bind(this),color:"warning",className:"btn-round btn-icon choice-button"},l.a.createElement(f.a,{icon:E.g,size:"2x"})),l.a.createElement("br",null),l.a.createElement(u.a,{onClick:this.flagWord.bind(this),color:"danger",className:"btn-round btn-icon choice-button"},l.a.createElement(f.a,{icon:E.d,size:"2x"}))))))}}]),a}(l.a.Component)),N=a(24),w=a(1),C=a(19),S=(a(17),function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={word:"",meaning:""},e.componentDidMount=function(){var t,a;C.get("/get-flagged-word").then((function(n){n.data.Success?(t=n.data.word,a=n.data.meaning,console.log(n.data),e.setState({word:t,meaning:a})):alert("Cant get word dude :(")}))},e.nextWord=function(){var t,a;C.get("/get-flagged-word",e.state).then((function(n){n.data.Success?(t=n.data.word,a=n.data.meaning,e.setState({word:t,meaning:a})):alert("Cant get word dude :(")})),document.getElementsByClassName("meaning-card")[0].style.visibility="hidden"},e.unFlagWord=function(){var t,a;C.post("/unflag-word",e.state).then((function(n){n.data.Success?(t=n.data.word,a=n.data.meaning,e.setState({word:t,meaning:a})):alert("Cant get word dude :(")})),document.getElementsByClassName("meaning-card")[0].style.visibility="hidden"},e.revealMeaning=function(){document.getElementsByClassName("meaning-card")[0].style.visibility="visible"},e.openLearnWords=function(){e.props.history.push("/learn")},e.hideAlert=function(){document.getElementsByClassName("alerts")[0].style.visibility="hidden"},e.Logout=function(){e.props.history.push("/")},e}return Object(i.a)(a,[{key:"render",value:function(){return w.createElement("div",null,w.createElement("div",{className:"alerts",style:{visibility:"hidden"},onClick:this.hideAlert.bind(this)},w.createElement(d.a,{color:"success"},"Word has been flagged")),w.createElement("div",{className:"flagged-words"},w.createElement(u.a,{className:"btn-simple btn-round",color:"info",onClick:this.openLearnWords.bind(this)},"Learn Words")),w.createElement("div",{className:"logout"},w.createElement(u.a,{className:"btn-simple btn-round",color:"info",onClick:this.Logout.bind(this)},w.createElement(f.a,{icon:E.f}))),w.createElement("div",{className:"learn-words"},w.createElement(h.a,{className:"learn-card text-center",onMouseOver:this.revealMeaning.bind(this)},w.createElement(g.a,null,w.createElement(p.a,null,this.state.word))),w.createElement(h.a,{className:"learn-card text-center meaning-card",style:{visibility:"hidden"}},w.createElement(g.a,null,w.createElement(b.a,{className:"meaning"},this.state.meaning))),w.createElement(h.a,{className:"learn-card text-center operations"},w.createElement(g.a,null,w.createElement(u.a,{className:"btn-round btn-icon choice-button",onClick:this.nextWord.bind(this),color:"info"},w.createElement(f.a,{icon:N.a,size:"2x"})),w.createElement(u.a,{className:"btn-round btn-icon choice-button",onClick:this.nextWord.bind(this),color:"primary"},w.createElement(f.a,{icon:E.b,size:"2x"}))))))}}]),a}(w.Component)),k=a(22),L=a(92),x=a(93),O=a(94),B=a(95),j=a(96),P=a(97),W=a(98),M=a(99),U=a(100),A=a(103),z=a(101),F=a(102),T=a(19),I=function(e){Object(c.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).componentDidMount=function(){T.get("/progress-bar",a.state).then((function(e){e.data.Success?(a.setState({progressBar:e.data.learnt,progressBarPercent:100*e.data.learnt/800}),console.log("Progress value",a.state.progressBar)):console.log("here we are")}))},a.onChangeConfirmPassword=function(e){a.setState({confirmPassword:e.target.value})},a.onChangePassword=function(e){a.setState({password:e.target.value})},a.onChangeEmail=function(e){a.setState({emailAddress:e.target.value})},a.onChangeFirstName=function(e){a.setState({firstName:e.target.value})},a.onChangeLastName=function(e){a.setState({lastName:e.target.value})},a.SignUp=function(){a.state.password!==a.state.confirmPassword?alert("Passwords do not match"):T.post("/signup",a.state).then((function(e){e.data.Success?(a.props.history.push("/"),a.setState({message:"SignUp Successful, click on Learn Words to start learning"}),document.getElementsByClassName("alerts-main-page")[0].style.visibility="visible",setTimeout((function(){document.getElementsByClassName("alerts-main-page")[0].style.visibility="hidden"}),2e3)):(a.setState({message:"Username already taken"}),document.getElementsByClassName("alerts-main-page")[0].style.visibility="visible",setTimeout((function(){document.getElementsByClassName("alerts-main-page")[0].style.visibility="hidden"}),2e3))}))},a.Login=function(){T.post("/login",a.state).then((function(e){e.data.Success?(a.props.history.push("/"),a.setState({message:"Login Successful, click on Learn Words to start learning"}),document.getElementsByClassName("alerts-main-page")[0].style.visibility="visible",setTimeout((function(){document.getElementsByClassName("alerts-main-page")[0].style.visibility="hidden"}),2e3)):(console.log("here we are"),a.setState({message:"Incorrect Username or Password"}),document.getElementsByClassName("alerts-main-page")[0].style.visibility="visible",setTimeout((function(){document.getElementsByClassName("alerts-main-page")[0].style.visibility="hidden"}),2e3))})),T.get("/progress-bar",a.state).then((function(e){e.data.Success?a.setState({progressBar:e.data.learnt}):console.log("here we are")}))},a.LearnWords=function(){a.props.history.push("/learn/")},a.hideAlert=function(){document.getElementsByClassName("alerts")[0].style.visibility="hidden"},a.toggle=a.toggle.bind(Object(k.a)(a)),a.state={isOpen:!1,modalLogin:!1,modelSignUp:!1,firstName:"",lastName:"",emailAddress:"",password:"",confirmPassword:"",message:"",progressBar:0,progressBarPercent:0},a}return Object(i.a)(n,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"toggleModalLogin",value:function(){this.setState({modalLogin:!this.state.modalLogin})}},{key:"toggleModalSignUp",value:function(){this.setState({modalSignUp:!this.state.modalSignUp})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(L.a,{expand:"lg",color:"info"},l.a.createElement(x.a,null,l.a.createElement(O.a,{onClick:function(e){return e.preventDefault()}},"Learn Words GRE"),l.a.createElement(B.a,{onClick:this.toggle},l.a.createElement("span",{className:"navbar-toggler-bar navbar-kebab"}),l.a.createElement("span",{className:"navbar-toggler-bar navbar-kebab"}),l.a.createElement("span",{className:"navbar-toggler-bar navbar-kebab"})),l.a.createElement(j.a,{isOpen:this.state.isOpen,navbar:!0},l.a.createElement(P.a,{navbar:!0},l.a.createElement(W.a,null,l.a.createElement(M.a,{onClick:this.toggleModalLogin.bind(this)},"Login")),l.a.createElement(W.a,null,l.a.createElement(M.a,{onClick:this.toggleModalSignUp.bind(this)},"SignUp")),l.a.createElement(W.a,null,l.a.createElement(M.a,{onClick:this.LearnWords.bind(this)},"Learn Words")))))),l.a.createElement("br",null),l.a.createElement("div",{className:"alerts-main-page",style:{visibility:"hidden"},onClick:this.hideAlert.bind(this)},l.a.createElement(d.a,{color:"warning"},this.state.message)),l.a.createElement("div",{className:"main-body"},l.a.createElement("div",{className:"content text-center"},l.a.createElement("h1",null,"Learn GRE words taken from the Essential 800 words of Barron's List"),l.a.createElement("h2",null,"SignUp to Get Started"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h2",null,"Features:"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("h3",null,"One stop to ace the GRE verbal")),l.a.createElement("li",null,l.a.createElement("h3",null,"Flag words that you have a difficulty remembering")),l.a.createElement("li",null,l.a.createElement("h3",null,"AI based word iteration to help you learn fastest")),l.a.createElement("li",null,l.a.createElement("h3",null,"Keep track of your performance with a streak count")))),l.a.createElement("div",{className:"giphy text-center"},l.a.createElement("img",{src:a(79),alt:"loading..."})),l.a.createElement("div",{className:"progressBar"},l.a.createElement(h.a,null,l.a.createElement("div",{className:"progress-container progress-info"},l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement("h4",{className:"progressBadgePosition"},"Progress")),l.a.createElement("br",null),l.a.createElement(U.a,{max:"800",value:this.state.progressBar,barClassName:"progress-bar-info",className:"progressBarValue"},l.a.createElement("span",null,this.state.progressBarPercent,"%")),l.a.createElement("br",null))))),l.a.createElement(A.a,{className:"modal-login homepage-modal",modalClassName:" modal-info",isOpen:this.state.modalLogin,toggle:this.toggleModalLogin.bind(this)},l.a.createElement(h.a,{className:"card-login card-plain",color:"info"},l.a.createElement("div",{className:"modal-header justify-content-center"},l.a.createElement("button",{"aria-hidden":!0,className:"close","data-dismiss":"modal",type:"button",onClick:this.toggleModalLogin}),l.a.createElement("div",{className:"header header-primary text-center"},l.a.createElement(f.a,{icon:E.h,size:"4x"}))),l.a.createElement("div",{className:"modal-body"},l.a.createElement(z.a,{action:"",className:"form",method:""},l.a.createElement("div",{className:"card-content"},l.a.createElement("div",null,l.a.createElement(f.a,{icon:E.c,size:"2x"}),l.a.createElement(F.a,{placeholder:"Email Address",className:"modalInput",type:"text",onChange:this.onChangeEmail.bind(this)})),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement(f.a,{icon:E.e,size:"2x"}),l.a.createElement(F.a,{placeholder:"Password",type:"password",className:"modalInput",onChange:this.onChangePassword.bind(this)}))))),l.a.createElement("div",{className:"modal-footer text-center pt-4"},l.a.createElement(u.a,{block:!0,className:"btn-neutral btn-round get-started",onClick:this.Login.bind(this),size:"lg"},"Login")))),l.a.createElement(A.a,{className:"modal-login homepage-modal",modalClassName:" modal-info",isOpen:this.state.modalSignUp,toggle:this.toggleModalSignUp.bind(this)},l.a.createElement(h.a,{className:"card-login card-plain",color:"info"},l.a.createElement("div",{className:"modal-header justify-content-center"},l.a.createElement("button",{"aria-hidden":!0,className:"close","data-dismiss":"modal",type:"button",onClick:this.toggleModalSignUp}),l.a.createElement("div",{className:"header header-primary text-center"},l.a.createElement(f.a,{icon:E.h,size:"4x"}))),l.a.createElement("div",{className:"modal-body"},l.a.createElement(z.a,{action:"",className:"form",method:""},l.a.createElement("div",{className:"card-content"},l.a.createElement("div",null,l.a.createElement(f.a,{icon:E.c,size:"2x"}),l.a.createElement(F.a,{placeholder:"Email Address",className:"modalInput",type:"text",onChange:this.onChangeEmail.bind(this)})),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement(f.a,{icon:E.i,size:"2x"}),l.a.createElement(F.a,{placeholder:"First Name",className:"modalInput",type:"text",onChange:this.onChangeFirstName.bind(this)})),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement(f.a,{icon:E.i,size:"2x"}),l.a.createElement(F.a,{placeholder:"Last Name",className:"modalInput",type:"text",onChange:this.onChangeLastName.bind(this)})),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement(f.a,{icon:E.e,size:"2x"}),l.a.createElement(F.a,{placeholder:"Password",type:"password",className:"modalInput",onChange:this.onChangePassword.bind(this)})),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement(f.a,{icon:E.e,size:"2x"}),l.a.createElement(F.a,{placeholder:"Confirm Password",type:"password",className:"modalInput",onChange:this.onChangeConfirmPassword.bind(this)}))))),l.a.createElement("div",{className:"modal-footer text-center pt-4"},l.a.createElement(u.a,{block:!0,className:"btn-neutral btn-round get-started",onClick:this.SignUp.bind(this),size:"lg"},"Get Started")))))}}]),n}(l.a.Component),R=a(1),D=a(19),G=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={mobileNumber:"",password:""},e.onMobileChange=function(t){e.setState({mobileNumber:t.target.value})},e.onPasswordChange=function(t){e.setState({password:t.target.value})},e.openSignUp=function(){e.props.history.push("/auth/signup")},e.submitLoginForm=function(){D.post("/login",e.state).then((function(t){t.data.Success?e.props.history.push("/dashboard/"):(e.props.history.push("/auth/login"),alert("Unable to Login"))}))},e}return Object(i.a)(a,[{key:"render",value:function(){return R.createElement("div",{className:"login-form"},R.createElement("form",null,R.createElement("label",{for:"mobileNumber"},"Mobile Number:"),R.createElement("br",null),R.createElement("input",{type:"text",id:"mobileNumber",name:"mobileNumber",onChange:this.onMobileChange.bind(this)}),R.createElement("br",null),R.createElement("label",{for:"pword"},"Password:"),R.createElement("br",null),R.createElement("input",{type:"password",id:"pword",name:"pword",onChange:this.onPasswordChange.bind(this)}),R.createElement("br",null),R.createElement("button",{type:"button",class:"primary button",onClick:this.submitLoginForm.bind(this)},"Submit")),R.createElement("label",{for:"signup"}),"Don't have an account? Click here to",R.createElement("a",{onClick:this.openSignUp.bind(this)}," Sign Up"))}}]),a}(R.Component),_=a(1),J=a(19),H=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={firstName:"",lastName:"",mobileNumber:"",password:"",confirmPassword:"",userType:"client"},e.onFirstNameChange=function(t){e.setState({firstName:t.target.value})},e.onLastNameChange=function(t){e.setState({lastName:t.target.value})},e.onMobileChange=function(t){e.setState({mobileNumber:t.target.value})},e.onPasswordChange=function(t){e.setState({password:t.target.value})},e.onConfirmPasswordChange=function(t){e.setState({confirmPassword:t.target.value})},e.openLogin=function(){e.props.history.push("/auth/login")},e.submitSignUpForm=function(){e.state.password!==e.state.confirmPassword?alert("Passwords do not match"):J.post("/signup",e.state).then((function(t){console.log("sent data"),t.data.Success?e.props.history.push("/learn/"):(e.props.history.push("/"),alert("Unable to SignUp"))}))},e}return Object(i.a)(a,[{key:"render",value:function(){return _.createElement("div",{className:"login-form"},_.createElement("form",null,_.createElement("label",{for:"firstName"},"First Name:"),_.createElement("br",null),_.createElement("input",{type:"text",id:"firstName",name:"firstName",onChange:this.onFirstNameChange.bind(this)}),_.createElement("br",null),_.createElement("label",{for:"lastName"},"Last Name:"),_.createElement("br",null),_.createElement("input",{type:"text",id:"lastName",name:"lastName",onChange:this.onLastNameChange.bind(this)}),_.createElement("br",null),_.createElement("label",{for:"mobileNumber"},"Mobile Number:"),_.createElement("br",null),_.createElement("input",{type:"text",id:"mobileNumber",name:"mobileNumber",onChange:this.onMobileChange.bind(this)}),_.createElement("br",null),_.createElement("label",{for:"pword"},"Password:"),_.createElement("br",null),_.createElement("input",{type:"password",id:"pword",name:"pword",onChange:this.onPasswordChange.bind(this)}),_.createElement("br",null),_.createElement("label",{for:"pword"},"Confirm Password:"),_.createElement("br",null),_.createElement("input",{type:"password",id:"cpword",name:"cpword",onChange:this.onConfirmPasswordChange.bind(this)}),_.createElement("br",null),_.createElement("button",{type:"button",class:"primary button",onClick:this.submitSignUpForm.bind(this)},"Submit")),_.createElement("label",{for:"signup"}),"Already signed up?",_.createElement("a",{onClick:this.openLogin.bind(this)}," Login"))}}]),a}(_.Component),K=a(1),V=a(43),$=V.Route,q=V.Switch,Q=function(e){var t=e.match.path;return console.log(t," is the path"),K.createElement(q,null,K.createElement($,{path:t+"/login",component:G}),K.createElement($,{path:t+"/signup",component:H}))},X=a(1),Y=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).redirectToChat=function(){e.props.history.push("/chat")},e}return Object(i.a)(a,[{key:"render",value:function(){return X.createElement("div",{className:"navbar"},X.createElement("button",{type:"button",class:"chatButton",onClick:this.redirectToChat.bind(this)},"Chat"))}}]),a}(X.Component),Z=a(19),ee=a(1),te=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).componentDidMount=function(){console.log("logging on console"),Z.get("/check_creds").then((function(t){console.log("here we are"),t.data.Success?e.props.history.push("/dashboard/"):(e.props.history.push("/auth/login"),alert("Unable to Login"))}))},e}return Object(i.a)(a,[{key:"render",value:function(){return ee.createElement("div",{className:"navbar"},ee.createElement("p",null,"This is the chat section dude"))}}]),a}(ee.Component),ae=a(1),ne=a(19),le=(a(17),function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={word:"",meaning:"",learnt_words:void 0},e.componentDidMount=function(){ne.get("/get-learnt-words").then((function(t){t.data.Success?e.setState({learnt_words:t.data.learnt_words}):alert("Cant get word dude :(")}))},e.NotLearnt=function(e){ne.post("/not-learnt-word",{word:e}).then((function(e){e.data.Success?(document.getElementsByClassName("alerts")[0].style.visibility="visible",setTimeout((function(){document.getElementsByClassName("alerts")[0].style.visibility="hidden"}),2e3)):alert("Cant get word dude :(")}))},e.revealMeaning=function(){document.getElementsByClassName("meaning-card")[0].style.visibility="visible"},e.openLearnWords=function(){e.props.history.push("/learn")},e.hideAlert=function(){document.getElementsByClassName("alerts")[0].style.visibility="hidden"},e.Logout=function(){e.props.history.push("/")},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=[],a=this.state.learnt_words;console.log(a,"list of elements, typs is",typeof a);var n=function(n){t.push(ae.createElement(h.a,null,ae.createElement(g.a,null,ae.createElement(p.a,null,n,ae.createElement(u.a,{className:"btn-simple btn-icon btn-round xButton",color:"danger",onClick:function(){return e.NotLearnt(n)}},ae.createElement(f.a,{icon:E.g}))),ae.createElement(b.a,{className:"meaning"},a[n]))))};for(var l in a)n(l);return ae.createElement("div",null,ae.createElement("div",{className:"alerts",style:{visibility:"hidden"},onClick:this.hideAlert.bind(this)},ae.createElement(d.a,{color:"success"},"The word has been marked as Not Learnt")),ae.createElement("div",{className:"flagged-words"},ae.createElement(u.a,{className:"btn-simple btn-round",color:"info",onClick:this.openLearnWords.bind(this)},"Learn Words")),ae.createElement("div",{className:"logout"},ae.createElement(u.a,{className:"btn-simple btn-round",color:"info",onClick:this.Logout.bind(this)},ae.createElement(f.a,{icon:E.f}))),ae.createElement("div",{className:"learn-words"},ae.createElement("div",null,t)))}}]),a}(ae.Component)),re=a(1),se=a(43),oe=se.Route,ie=se.HashRouter,ce=function(e){return re.createElement(ie,null,re.createElement(oe,{path:"/",exact:!0,component:I}),re.createElement(oe,{path:"/auth",component:Q}),re.createElement(oe,{path:"/dashboard",component:Y}),re.createElement(oe,{path:"/chat",component:te}),re.createElement(oe,{path:"/learn",component:y}),re.createElement(oe,{path:"/flagged",component:S}),re.createElement(oe,{path:"/learnt",component:le}))};a(82),a(83),a(84),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(ce,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[46,1,2]]]);
//# sourceMappingURL=main.1f0a7f71.chunk.js.map