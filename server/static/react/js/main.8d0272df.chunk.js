(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{47:function(e,t,a){e.exports=a(92)},52:function(e,t,a){},85:function(e,t,a){e.exports=a.p+"media/trump.7507b0c7.gif"},89:function(e,t,a){},90:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(17),s=a.n(l),o=(a(52),a(10)),i=a(11),c=a(13),m=a(12),d=a(93),u=a(94),g=a(95),h=a(96),p=a(97),b=a(98),E=a(9),f=a(8),v=a(23),y=a.n(v),N=a(19),C=(a(17),function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={word:"",meaning:"",className:"",content:"",streak:.5},e.componentDidMount=function(){var t,a;N.get("/get-words").then((function(n){n.data.Success?(console.log(n),t=n.data.word,a=n.data.meaning,e.setState({word:t,meaning:a}),e.getStreak()):alert("Cant get word dude :(")}))},e.rememberWord=function(){var t,a;N.post("/learnt-word",e.state).then((function(n){n.data.Success?(t=n.data.word,a=n.data.meaning,e.setState({word:t,meaning:a}),e.postStreak("increase")):alert("Cant get word dude :(")})),document.getElementsByClassName("meaning-card")[0].style.visibility="hidden"},e.dontRememberWord=function(){var t,a;N.post("/forgot-word",e.state).then((function(n){n.data.Success?(t=n.data.word,a=n.data.meaning,e.setState({word:t,meaning:a}),e.postStreak("decrease")):alert("Cant get word dude :(")})),document.getElementsByClassName("meaning-card")[0].style.visibility="hidden"},e.getStreak=function(){N.get("/get-streak").then((function(t){t.data.Success?(e.setState({streak:(t.data.streak+50)/100}),console.log("Strreak is now",e.state.streak)):console.log("here we are")}))},e.postStreak=function(t){N.post("/post-streak",{streakChange:t}).then((function(t){t.data.Success?e.getStreak():console.log("here we are")}))},e.revealMeaning=function(){document.getElementsByClassName("meaning-card")[0].style.visibility="visible"},e.openFlaggedWords=function(){e.props.history.push("/flagged")},e.openLearntWords=function(){e.props.history.push("/learnt")},e.flagWord=function(){N.post("/add-flag",e.state).then((function(e){e.data.Success?(document.getElementsByClassName("alerts")[0].style.visibility="visible",setTimeout((function(){document.getElementsByClassName("alerts")[0].style.visibility="hidden"}),2e3)):alert("Cant get word dude :(")}))},e.Logout=function(){e.props.history.push("/")},e.hideAlert=function(){document.getElementsByClassName("alerts")[0].style.visibility="hidden"},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"alerts",style:{visibility:"hidden"},onClick:this.hideAlert.bind(this)},r.a.createElement(d.a,{color:"info"},"Word has been flagged")),r.a.createElement("div",{className:"flagged-words"},r.a.createElement(u.a,{className:"btn-simple btn-round",color:"info",onClick:this.openFlaggedWords.bind(this)},"Flagged Words")),r.a.createElement("div",{className:"learnt-words"},r.a.createElement(u.a,{className:"btn-simple btn-round",color:"info",onClick:this.openLearntWords.bind(this)},"Words Learnt")),r.a.createElement("div",{className:"logout"},r.a.createElement(u.a,{className:"btn-simple btn-round",color:"info",onClick:this.Logout.bind(this)},r.a.createElement(f.a,{icon:E.f}))),r.a.createElement("div",{className:"learn-words"},r.a.createElement(g.a,{className:"learn-card text-center",onMouseOver:this.revealMeaning.bind(this)},r.a.createElement(h.a,null,r.a.createElement(p.a,null,this.state.word))),r.a.createElement(g.a,{className:"learn-card text-center meaning-card",style:{visibility:"hidden"}},r.a.createElement(h.a,null,r.a.createElement(b.a,{className:"meaning"},this.state.meaning))),r.a.createElement(g.a,{className:"learn-card text-center operations"},r.a.createElement(h.a,null,r.a.createElement(u.a,{onClick:this.rememberWord.bind(this),color:"twitter",className:"btn-round btn-icon choice-button"},r.a.createElement(f.a,{icon:E.a,size:"2x"})),r.a.createElement(u.a,{onClick:this.dontRememberWord.bind(this),color:"warning",className:"btn-round btn-icon choice-button"},r.a.createElement(f.a,{icon:E.g,size:"2x"})),r.a.createElement("br",null),r.a.createElement(u.a,{onClick:this.flagWord.bind(this),color:"danger",className:"btn-round btn-icon choice-button"},r.a.createElement(f.a,{icon:E.d,size:"2x"}))))),r.a.createElement("div",{className:"learn-streak"},r.a.createElement(g.a,null,r.a.createElement(h.a,null,r.a.createElement(p.a,null,"Streak Count")),r.a.createElement(y.a,{id:"gauge-chart",nrOfLevels:50,colors:["#00ff00","#00ffff","#0000ff"],percent:this.state.streak,arcWidth:.3,arcPadding:.02,formatTextValue:function(e){return e-50}}))))}}]),a}(r.a.Component)),w=a(25),k=a(1),S=a(19),L=(a(17),function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={word:"",meaning:""},e.componentDidMount=function(){var t,a;S.get("/get-flagged-word").then((function(n){n.data.Success?(t=n.data.word,a=n.data.meaning,console.log(n.data),e.setState({word:t,meaning:a})):alert("Cant get word dude :(")}))},e.nextWord=function(){var t,a;S.get("/get-flagged-word",e.state).then((function(n){n.data.Success?(t=n.data.word,a=n.data.meaning,e.setState({word:t,meaning:a})):alert("Cant get word dude :(")})),document.getElementsByClassName("meaning-card")[0].style.visibility="hidden"},e.unFlagWord=function(){var t,a;S.post("/unflag-word",e.state).then((function(n){n.data.Success?(t=n.data.word,a=n.data.meaning,e.setState({word:t,meaning:a})):alert("Cant get word dude :(")})),document.getElementsByClassName("meaning-card")[0].style.visibility="hidden"},e.revealMeaning=function(){document.getElementsByClassName("meaning-card")[0].style.visibility="visible"},e.openLearnWords=function(){e.props.history.push("/learn")},e.hideAlert=function(){document.getElementsByClassName("alerts")[0].style.visibility="hidden"},e.Logout=function(){e.props.history.push("/")},e}return Object(i.a)(a,[{key:"render",value:function(){return k.createElement("div",null,k.createElement("div",{className:"alerts",style:{visibility:"hidden"},onClick:this.hideAlert.bind(this)},k.createElement(d.a,{color:"success"},"Word has been flagged")),k.createElement("div",{className:"flagged-words"},k.createElement(u.a,{className:"btn-simple btn-round",color:"info",onClick:this.openLearnWords.bind(this)},"Learn Words")),k.createElement("div",{className:"logout"},k.createElement(u.a,{className:"btn-simple btn-round",color:"info",onClick:this.Logout.bind(this)},k.createElement(f.a,{icon:E.f}))),k.createElement("div",{className:"learn-words"},k.createElement(g.a,{className:"learn-card text-center",onMouseOver:this.revealMeaning.bind(this)},k.createElement(h.a,null,k.createElement(p.a,null,this.state.word))),k.createElement(g.a,{className:"learn-card text-center meaning-card",style:{visibility:"hidden"}},k.createElement(h.a,null,k.createElement(b.a,{className:"meaning"},this.state.meaning))),k.createElement(g.a,{className:"learn-card text-center operations"},k.createElement(h.a,null,k.createElement(u.a,{className:"btn-round btn-icon choice-button",onClick:this.unFlagWord.bind(this),color:"info"},k.createElement(f.a,{icon:w.a,size:"2x"})),k.createElement(u.a,{className:"btn-round btn-icon choice-button",onClick:this.nextWord.bind(this),color:"primary"},k.createElement(f.a,{icon:E.b,size:"2x"}))))))}}]),a}(k.Component)),O=a(22),x=a(99),B=a(100),P=a(101),j=a(102),W=a(103),M=a(104),U=a(105),A=a(106),F=a(107),z=a(110),T=a(108),I=a(109),R=a(19),D=function(e){Object(c.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).componentDidMount=function(){a.getLeaderboard(),a.getStreak(),a.getProgress()},a.getLeaderboard=function(){R.get("/get-leaderboard").then((function(e){e.data.Success?(a.setState({leaderboard:e.data.leader_board}),console.log("leaderboard is now",a.state.leaderboard)):a.setState({leaderboard:{}})}))},a.getStreak=function(){R.get("/get-streak").then((function(e){e.data.Success?(a.setState({streak:(e.data.streak+50)/100}),console.log("Strreak is now",a.state.streak)):a.setState({streak:.5})}))},a.getProgress=function(){R.get("/progress-bar",a.state).then((function(e){e.data.Success?a.setState({progressBar:e.data.learnt,progressBarPercent:100*e.data.learnt/800}):console.log("here we are")}))},a.onChangeConfirmPassword=function(e){a.setState({confirmPassword:e.target.value})},a.onChangePassword=function(e){a.setState({password:e.target.value})},a.onChangeEmail=function(e){a.setState({emailAddress:e.target.value})},a.onChangeFirstName=function(e){a.setState({firstName:e.target.value})},a.onChangeLastName=function(e){a.setState({lastName:e.target.value})},a.SignUp=function(){a.state.password!==a.state.confirmPassword?alert("Passwords do not match"):R.post("/signup",a.state).then((function(e){e.data.Success?(a.props.history.push("/"),a.toggleModalSignUp(),a.setState({message:"SignUp Successful, click on Learn Words to start learning"}),document.getElementsByClassName("alerts-main-page")[0].style.visibility="visible",setTimeout((function(){document.getElementsByClassName("alerts-main-page")[0].style.visibility="hidden"}),2e3),a.getStreak(),a.getProgress()):(a.setState({message:"Username already taken"}),document.getElementsByClassName("alerts-main-page")[0].style.visibility="visible",setTimeout((function(){document.getElementsByClassName("alerts-main-page")[0].style.visibility="hidden"}),2e3))}))},a.Login=function(){R.post("/login",a.state).then((function(e){e.data.Success?(a.props.history.push("/"),a.toggleModalLogin(),a.setState({message:"Login Successful, click on Learn Words to start learning"}),document.getElementsByClassName("alerts-main-page")[0].style.visibility="visible",setTimeout((function(){document.getElementsByClassName("alerts-main-page")[0].style.visibility="hidden"}),2e3),a.getStreak(),a.getProgress()):(console.log("here we are"),a.setState({message:"Incorrect Username or Password"}),document.getElementsByClassName("alerts-main-page")[0].style.visibility="visible",setTimeout((function(){document.getElementsByClassName("alerts-main-page")[0].style.visibility="hidden"}),2e3))}))},a.LearnWords=function(){a.props.history.push("/learn/")},a.hideAlert=function(){document.getElementsByClassName("alerts")[0].style.visibility="hidden"},a.toggle=a.toggle.bind(Object(O.a)(a)),a.state={isOpen:!1,modalLogin:!1,modelSignUp:!1,firstName:"",lastName:"",emailAddress:"",password:"",confirmPassword:"",message:"",progressBar:0,progressBarPercent:0,streak:.5,leaderboard:{}},a}return Object(i.a)(n,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"toggleModalLogin",value:function(){this.setState({modalLogin:!this.state.modalLogin,isOpen:!1})}},{key:"toggleModalSignUp",value:function(){this.setState({modalSignUp:!this.state.modalSignUp,isOpen:!1})}},{key:"render",value:function(){var e=[],t=this.state.leaderboard;for(var n in console.log(t,"list of elements, typs is",typeof t),t)e.push(r.a.createElement(g.a,null,r.a.createElement(h.a,null,r.a.createElement(p.a,null,n," is the key"),r.a.createElement(b.a,{className:"meaning"},t[n]))));return r.a.createElement("div",null,r.a.createElement(x.a,{expand:"lg",color:"info"},r.a.createElement(B.a,null,r.a.createElement(P.a,{onClick:function(e){return e.preventDefault()}},"Learn Words GRE"),r.a.createElement(j.a,{onClick:this.toggle},r.a.createElement("span",{className:"navbar-toggler-bar navbar-kebab"}),r.a.createElement("span",{className:"navbar-toggler-bar navbar-kebab"}),r.a.createElement("span",{className:"navbar-toggler-bar navbar-kebab"})),r.a.createElement(W.a,{isOpen:this.state.isOpen,navbar:!0},r.a.createElement(M.a,{navbar:!0},r.a.createElement(U.a,null,r.a.createElement(A.a,{onClick:this.toggleModalLogin.bind(this),className:"mouseChange"},"Login")),r.a.createElement(U.a,null,r.a.createElement(A.a,{onClick:this.toggleModalSignUp.bind(this),className:"mouseChange"},"SignUp")),r.a.createElement(U.a,null,r.a.createElement(A.a,{onClick:this.LearnWords.bind(this),className:"mouseChange"},"Learn Words")))))),r.a.createElement("br",null),r.a.createElement("div",{className:"alerts-main-page",style:{visibility:"hidden"},onClick:this.hideAlert.bind(this)},r.a.createElement(d.a,{color:"warning",className:"text-center"},this.state.message)),r.a.createElement("div",{className:"main-body"},r.a.createElement("div",{className:"content text-center"},r.a.createElement("h1",null,"Learn GRE words taken from the Essential 800 words of Barron's List"),r.a.createElement("h2",null,"SignUp to Get Started"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h2",null,"Features:"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("h3",null,"One stop to ace the GRE verbal")),r.a.createElement("li",null,r.a.createElement("h3",null,"Flag words that you have a difficulty remembering")),r.a.createElement("li",null,r.a.createElement("h3",null,"AI based word iteration to help you learn fastest")),r.a.createElement("li",null,r.a.createElement("h3",null,"Keep track of your performance with a streak count")))),r.a.createElement("div",{className:"giphy text-center"},r.a.createElement("img",{src:a(85),alt:"loading..."})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"progressBar"},r.a.createElement(g.a,null,r.a.createElement("div",{className:"progress-container progress-info"},r.a.createElement(h.a,null,r.a.createElement(p.a,null,"Progress")),r.a.createElement(F.a,{max:"800",value:this.state.progressBar,barClassName:"progress-bar-info",className:"progressBarValue"},r.a.createElement("span",null,this.state.progressBarPercent,"%")),r.a.createElement("br",null)))),r.a.createElement("div",{className:"streak"},r.a.createElement(g.a,null,r.a.createElement(h.a,null,r.a.createElement(p.a,null,"Streak Count")),r.a.createElement(y.a,{id:"gauge-chart",nrOfLevels:50,colors:["#00ff00","#00ffff","#0000ff"],percent:this.state.streak,arcWidth:.3,arcPadding:.02,formatTextValue:function(e){return e-50}}))),r.a.createElement("div",{className:"leaderboard"},r.a.createElement(g.a,null,r.a.createElement(h.a,null,r.a.createElement(p.a,null,"Leaderboard"))))),r.a.createElement(z.a,{className:"modal-login homepage-modal",modalClassName:" modal-info",isOpen:this.state.modalLogin,toggle:this.toggleModalLogin.bind(this)},r.a.createElement(g.a,{className:"card-login card-plain",color:"info"},r.a.createElement("div",{className:"modal-header justify-content-center"},r.a.createElement("button",{"aria-hidden":!0,className:"close","data-dismiss":"modal",type:"button",onClick:this.toggleModalLogin}),r.a.createElement("div",{className:"header header-primary text-center"},r.a.createElement(f.a,{icon:E.h,size:"4x"}))),r.a.createElement("div",{className:"modal-body"},r.a.createElement(T.a,{action:"",className:"form",method:""},r.a.createElement("div",{className:"card-content"},r.a.createElement("div",null,r.a.createElement(f.a,{icon:E.c,size:"2x"}),r.a.createElement(I.a,{placeholder:"Email Address",className:"modalInput",type:"text",onChange:this.onChangeEmail.bind(this)})),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(f.a,{icon:E.e,size:"2x"}),r.a.createElement(I.a,{placeholder:"Password",type:"password",className:"modalInput",onChange:this.onChangePassword.bind(this)}))))),r.a.createElement("div",{className:"modal-footer text-center pt-4"},r.a.createElement(u.a,{block:!0,className:"btn-neutral btn-round get-started",onClick:this.Login.bind(this),size:"lg"},"Login")))),r.a.createElement(z.a,{className:"modal-login homepage-modal",modalClassName:" modal-info",isOpen:this.state.modalSignUp,toggle:this.toggleModalSignUp.bind(this)},r.a.createElement(g.a,{className:"card-login card-plain",color:"info"},r.a.createElement("div",{className:"modal-header justify-content-center"},r.a.createElement("button",{"aria-hidden":!0,className:"close","data-dismiss":"modal",type:"button",onClick:this.toggleModalSignUp}),r.a.createElement("div",{className:"header header-primary text-center"},r.a.createElement(f.a,{icon:E.h,size:"4x"}))),r.a.createElement("div",{className:"modal-body"},r.a.createElement(T.a,{action:"",className:"form",method:""},r.a.createElement("div",{className:"card-content"},r.a.createElement("div",null,r.a.createElement(f.a,{icon:E.c,size:"2x"}),r.a.createElement(I.a,{placeholder:"Email Address",className:"modalInput",type:"text",onChange:this.onChangeEmail.bind(this)})),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(f.a,{icon:E.i,size:"2x"}),r.a.createElement(I.a,{placeholder:"First Name",className:"modalInput",type:"text",onChange:this.onChangeFirstName.bind(this)})),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(f.a,{icon:E.i,size:"2x"}),r.a.createElement(I.a,{placeholder:"Last Name",className:"modalInput",type:"text",onChange:this.onChangeLastName.bind(this)})),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(f.a,{icon:E.e,size:"2x"}),r.a.createElement(I.a,{placeholder:"Password",type:"password",className:"modalInput",onChange:this.onChangePassword.bind(this)})),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(f.a,{icon:E.e,size:"2x"}),r.a.createElement(I.a,{placeholder:"Confirm Password",type:"password",className:"modalInput",onChange:this.onChangeConfirmPassword.bind(this)}))))),r.a.createElement("div",{className:"modal-footer text-center pt-4"},r.a.createElement(u.a,{block:!0,className:"btn-neutral btn-round get-started",onClick:this.SignUp.bind(this),size:"lg"},"Get Started")))))}}]),n}(r.a.Component),_=a(1),G=a(19),V=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={mobileNumber:"",password:""},e.onMobileChange=function(t){e.setState({mobileNumber:t.target.value})},e.onPasswordChange=function(t){e.setState({password:t.target.value})},e.openSignUp=function(){e.props.history.push("/auth/signup")},e.submitLoginForm=function(){G.post("/login",e.state).then((function(t){t.data.Success?e.props.history.push("/dashboard/"):(e.props.history.push("/auth/login"),alert("Unable to Login"))}))},e}return Object(i.a)(a,[{key:"render",value:function(){return _.createElement("div",{className:"login-form"},_.createElement("form",null,_.createElement("label",{for:"mobileNumber"},"Mobile Number:"),_.createElement("br",null),_.createElement("input",{type:"text",id:"mobileNumber",name:"mobileNumber",onChange:this.onMobileChange.bind(this)}),_.createElement("br",null),_.createElement("label",{for:"pword"},"Password:"),_.createElement("br",null),_.createElement("input",{type:"password",id:"pword",name:"pword",onChange:this.onPasswordChange.bind(this)}),_.createElement("br",null),_.createElement("button",{type:"button",class:"primary button",onClick:this.submitLoginForm.bind(this)},"Submit")),_.createElement("label",{for:"signup"}),"Don't have an account? Click here to",_.createElement("a",{onClick:this.openSignUp.bind(this)}," Sign Up"))}}]),a}(_.Component),J=a(1),H=a(19),K=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={firstName:"",lastName:"",mobileNumber:"",password:"",confirmPassword:"",userType:"client"},e.onFirstNameChange=function(t){e.setState({firstName:t.target.value})},e.onLastNameChange=function(t){e.setState({lastName:t.target.value})},e.onMobileChange=function(t){e.setState({mobileNumber:t.target.value})},e.onPasswordChange=function(t){e.setState({password:t.target.value})},e.onConfirmPasswordChange=function(t){e.setState({confirmPassword:t.target.value})},e.openLogin=function(){e.props.history.push("/auth/login")},e.submitSignUpForm=function(){e.state.password!==e.state.confirmPassword?alert("Passwords do not match"):H.post("/signup",e.state).then((function(t){console.log("sent data"),t.data.Success?e.props.history.push("/learn/"):(e.props.history.push("/"),alert("Unable to SignUp"))}))},e}return Object(i.a)(a,[{key:"render",value:function(){return J.createElement("div",{className:"login-form"},J.createElement("form",null,J.createElement("label",{for:"firstName"},"First Name:"),J.createElement("br",null),J.createElement("input",{type:"text",id:"firstName",name:"firstName",onChange:this.onFirstNameChange.bind(this)}),J.createElement("br",null),J.createElement("label",{for:"lastName"},"Last Name:"),J.createElement("br",null),J.createElement("input",{type:"text",id:"lastName",name:"lastName",onChange:this.onLastNameChange.bind(this)}),J.createElement("br",null),J.createElement("label",{for:"mobileNumber"},"Mobile Number:"),J.createElement("br",null),J.createElement("input",{type:"text",id:"mobileNumber",name:"mobileNumber",onChange:this.onMobileChange.bind(this)}),J.createElement("br",null),J.createElement("label",{for:"pword"},"Password:"),J.createElement("br",null),J.createElement("input",{type:"password",id:"pword",name:"pword",onChange:this.onPasswordChange.bind(this)}),J.createElement("br",null),J.createElement("label",{for:"pword"},"Confirm Password:"),J.createElement("br",null),J.createElement("input",{type:"password",id:"cpword",name:"cpword",onChange:this.onConfirmPasswordChange.bind(this)}),J.createElement("br",null),J.createElement("button",{type:"button",class:"primary button",onClick:this.submitSignUpForm.bind(this)},"Submit")),J.createElement("label",{for:"signup"}),"Already signed up?",J.createElement("a",{onClick:this.openLogin.bind(this)}," Login"))}}]),a}(J.Component),$=a(1),q=a(44),Q=q.Route,X=q.Switch,Y=function(e){var t=e.match.path;return console.log(t," is the path"),$.createElement(X,null,$.createElement(Q,{path:t+"/login",component:V}),$.createElement(Q,{path:t+"/signup",component:K}))},Z=a(1),ee=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).redirectToChat=function(){e.props.history.push("/chat")},e}return Object(i.a)(a,[{key:"render",value:function(){return Z.createElement("div",{className:"navbar"},Z.createElement("button",{type:"button",class:"chatButton",onClick:this.redirectToChat.bind(this)},"Chat"))}}]),a}(Z.Component),te=a(19),ae=a(1),ne=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).componentDidMount=function(){console.log("logging on console"),te.get("/check_creds").then((function(t){console.log("here we are"),t.data.Success?e.props.history.push("/dashboard/"):(e.props.history.push("/auth/login"),alert("Unable to Login"))}))},e}return Object(i.a)(a,[{key:"render",value:function(){return ae.createElement("div",{className:"navbar"},ae.createElement("p",null,"This is the chat section dude"))}}]),a}(ae.Component),re=a(1),le=a(19),se=(a(17),function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={word:"",meaning:"",learnt_words:void 0},e.componentDidMount=function(){le.get("/get-learnt-words").then((function(t){t.data.Success?e.setState({learnt_words:t.data.learnt_words}):alert("Cant get word dude :(")}))},e.NotLearnt=function(e){le.post("/not-learnt-word",{word:e}).then((function(e){e.data.Success?(document.getElementsByClassName("alerts")[0].style.visibility="visible",setTimeout((function(){document.getElementsByClassName("alerts")[0].style.visibility="hidden"}),2e3)):alert("Cant get word dude :(")}))},e.revealMeaning=function(){document.getElementsByClassName("meaning-card")[0].style.visibility="visible"},e.openLearnWords=function(){e.props.history.push("/learn")},e.hideAlert=function(){document.getElementsByClassName("alerts")[0].style.visibility="hidden"},e.Logout=function(){e.props.history.push("/")},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=[],a=this.state.learnt_words;console.log(a,"list of elements, typs is",typeof a);var n=function(n){t.push(re.createElement(g.a,null,re.createElement(h.a,null,re.createElement(p.a,null,n,re.createElement(u.a,{className:"btn-simple btn-icon btn-round xButton",color:"danger",onClick:function(){return e.NotLearnt(n)}},re.createElement(f.a,{icon:E.g}))),re.createElement(b.a,{className:"meaning"},a[n]))))};for(var r in a)n(r);return re.createElement("div",null,re.createElement("div",{className:"alerts",style:{visibility:"hidden"},onClick:this.hideAlert.bind(this)},re.createElement(d.a,{color:"success"},"The word has been marked as Not Learnt")),re.createElement("div",{className:"flagged-words"},re.createElement(u.a,{className:"btn-simple btn-round",color:"info",onClick:this.openLearnWords.bind(this)},"Learn Words")),re.createElement("div",{className:"logout"},re.createElement(u.a,{className:"btn-simple btn-round",color:"info",onClick:this.Logout.bind(this)},re.createElement(f.a,{icon:E.f}))),re.createElement("div",{className:"learn-words"},re.createElement("div",null,t)))}}]),a}(re.Component)),oe=a(1),ie=a(44),ce=ie.Route,me=ie.HashRouter,de=function(e){return oe.createElement(me,null,oe.createElement(ce,{path:"/",exact:!0,component:D}),oe.createElement(ce,{path:"/auth",component:Y}),oe.createElement(ce,{path:"/dashboard",component:ee}),oe.createElement(ce,{path:"/chat",component:ne}),oe.createElement(ce,{path:"/learn",component:C}),oe.createElement(ce,{path:"/flagged",component:L}),oe.createElement(ce,{path:"/learnt",component:se}))};a(88),a(89),a(90),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(de,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[47,1,2]]]);
//# sourceMappingURL=main.8d0272df.chunk.js.map