(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{34:function(e,t,n){var a=n(1),r=n(33),o=r.Route,l=r.Switch,i=n(73),s=n(74);e.exports=function(e){var t=e.match.path;return console.log(t," is the path"),a.createElement(l,null,a.createElement(o,{path:t+"/login",component:i}),a.createElement(o,{path:t+"/signup",component:s}))}},38:function(e,t,n){e.exports=n(78)},43:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var a=n(8),r=n(9),o=n(11),l=n(10),i=n(1),s=n(13),c=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={mobileNumber:"",password:""},e.onMobileChange=function(t){e.setState({mobileNumber:t.target.value})},e.onPasswordChange=function(t){e.setState({password:t.target.value})},e.openSignUp=function(){e.props.history.push("/auth/signup")},e.submitLoginForm=function(){s.post("/login",e.state).then((function(t){t.data.Success?e.props.history.push("/dashboard/"):(e.props.history.push("/auth/login"),alert("Unable to Login"))}))},e}return Object(r.a)(n,[{key:"render",value:function(){return i.createElement("div",{className:"login-form"},i.createElement("form",null,i.createElement("label",{for:"mobileNumber"},"Mobile Number:"),i.createElement("br",null),i.createElement("input",{type:"text",id:"mobileNumber",name:"mobileNumber",onChange:this.onMobileChange.bind(this)}),i.createElement("br",null),i.createElement("label",{for:"pword"},"Password:"),i.createElement("br",null),i.createElement("input",{type:"password",id:"pword",name:"pword",onChange:this.onPasswordChange.bind(this)}),i.createElement("br",null),i.createElement("button",{type:"button",class:"primary button",onClick:this.submitLoginForm.bind(this)},"Submit")),i.createElement("label",{for:"signup"}),"Don't have an account? Click here to",i.createElement("a",{onClick:this.openSignUp.bind(this)}," Sign Up"))}}]),n}(i.Component);t.default=c},74:function(e,t,n){"use strict";n.r(t);var a=n(8),r=n(9),o=n(11),l=n(10),i=n(1),s=n(13),c=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={firstName:"",lastName:"",mobileNumber:"",password:"",confirmPassword:"",userType:"client"},e.onFirstNameChange=function(t){e.setState({firstName:t.target.value})},e.onLastNameChange=function(t){e.setState({lastName:t.target.value})},e.onMobileChange=function(t){e.setState({mobileNumber:t.target.value})},e.onPasswordChange=function(t){e.setState({password:t.target.value})},e.onConfirmPasswordChange=function(t){e.setState({confirmPassword:t.target.value})},e.openLogin=function(){e.props.history.push("/auth/login")},e.submitSignUpForm=function(){e.state.password!==e.state.confirmPassword?alert("Passwords do not match"):s.post("/signup",e.state).then((function(t){console.log("sent data"),t.data.Success?e.props.history.push("/dashboard/"):(e.props.history.push("/auth/signup"),alert("Unable to SignUp"))}))},e}return Object(r.a)(n,[{key:"render",value:function(){return i.createElement("div",{className:"login-form"},i.createElement("form",null,i.createElement("label",{for:"firstName"},"First Name:"),i.createElement("br",null),i.createElement("input",{type:"text",id:"firstName",name:"firstName",onChange:this.onFirstNameChange.bind(this)}),i.createElement("br",null),i.createElement("label",{for:"lastName"},"Last Name:"),i.createElement("br",null),i.createElement("input",{type:"text",id:"lastName",name:"lastName",onChange:this.onLastNameChange.bind(this)}),i.createElement("br",null),i.createElement("label",{for:"mobileNumber"},"Mobile Number:"),i.createElement("br",null),i.createElement("input",{type:"text",id:"mobileNumber",name:"mobileNumber",onChange:this.onMobileChange.bind(this)}),i.createElement("br",null),i.createElement("label",{for:"pword"},"Password:"),i.createElement("br",null),i.createElement("input",{type:"password",id:"pword",name:"pword",onChange:this.onPasswordChange.bind(this)}),i.createElement("br",null),i.createElement("label",{for:"pword"},"Confirm Password:"),i.createElement("br",null),i.createElement("input",{type:"password",id:"cpword",name:"cpword",onChange:this.onConfirmPasswordChange.bind(this)}),i.createElement("br",null),i.createElement("button",{type:"button",class:"primary button",onClick:this.submitSignUpForm.bind(this)},"Submit")),i.createElement("label",{for:"signup"}),"Already signed up?",i.createElement("a",{onClick:this.openLogin.bind(this)}," Login"))}}]),n}(i.Component);t.default=c},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(12),l=n.n(o),i=(n(43),n(14)),s=n(8),c=n(9),m=n(11),u=n(10),d=n(85),h=n(86),g=n(79),b=n(80),p=n(81),f=n(82),E=n(83),v=n(84),w=n(1),y=n(13),C=(n(12),function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={word:"",meaning:"",revealMeaning:""},e.componentDidMount=function(){var t,n;y.get("/get-words").then((function(a){a.data.Success?(console.log(a),t=a.data.word,n=a.data.meaning,e.setState({word:t,meaning:n,revealMeaning:""})):alert("Cant get word dude :(")}))},e.rememberWord=function(){var t,n;y.post("/learnt-word",e.state).then((function(a){a.data.Success?(t=a.data.word,n=a.data.meaning,e.setState({word:t,meaning:n,revealMeaning:""})):alert("Cant get word dude :(")}))},e.dontRememberWord=function(){var t,n;y.post("/forgot-word",e.state).then((function(a){a.data.Success?(t=a.data.word,n=a.data.meaning,e.setState({word:t,meaning:n,revealMeaning:""})):alert("Cant get word dude :(")}))},e.revealMeaning=function(){e.setState({revealMeaning:e.state.meaning})},e.openFlaggedWords=function(){e.props.history.push("/flagged")},e.flagWord=function(){y.post("/add-flag",e.state).then((function(e){e.data.Success?(document.getElementsByClassName("alerts")[0].style.visibility="visible",setTimeout((function(){document.getElementsByClassName("alerts")[0].style.visibility="hidden"}),2e3)):alert("Cant get word dude :(")}))},e.hideAlert=function(){document.getElementsByClassName("alerts")[0].style.visibility="hidden"},e}return Object(c.a)(n,[{key:"render",value:function(){return w.createElement("div",null,w.createElement("div",{className:"alerts",style:{visibility:"hidden"},onClick:this.hideAlert.bind(this)},w.createElement(d.a,{color:"success"},"Word has been flagged")),w.createElement("div",{className:"flagged-words"},w.createElement(h.a,{className:"btn-simple btn-round",color:"info",onClick:this.openFlaggedWords.bind(this)},"Flagged Words")),w.createElement("div",{className:"learn-words"},w.createElement(g.a,{className:"learn-card"},w.createElement(b.a,{className:"text-center"},w.createElement(p.a,null,this.state.word)),w.createElement(f.a,Object(i.a)({className:"card-body"},"className","text-center"),w.createElement(E.a,null,this.state.revealMeaning),w.createElement("br",null),w.createElement(h.a,{color:"info",onClick:this.revealMeaning.bind(this)},"Reveal")),w.createElement(v.a,{className:"text-center"},w.createElement(h.a,{onClick:this.rememberWord.bind(this),color:"primary",className:"button-size"},"I remember this"),w.createElement(h.a,{onClick:this.dontRememberWord.bind(this),color:"warning",className:"button-size"},"Dont Remember yet"),w.createElement("br",null),w.createElement("br",null),w.createElement(h.a,{onClick:this.flagWord.bind(this),color:"danger"},"Flag Word")))))}}]),n}(w.Component)),N=n(1),S=n(13),k=(n(12),function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={word:"",meaning:"",revealMeaning:""},e.componentDidMount=function(){var t,n;S.get("/get-flagged-word").then((function(a){a.data.Success?(t=a.data.word,n=a.data.meaning,console.log(a.data),e.setState({word:t,meaning:n,revealMeaning:""})):alert("Cant get word dude :(")}))},e.nextWord=function(){var t,n;S.get("/get-flagged-word",e.state).then((function(a){a.data.Success?(t=a.data.word,n=a.data.meaning,e.setState({word:t,meaning:n,revealMeaning:""})):alert("Cant get word dude :(")}))},e.revealMeaning=function(){e.setState({revealMeaning:e.state.meaning})},e.openLearnWords=function(){e.props.history.push("/learn")},e.hideAlert=function(){document.getElementsByClassName("alerts")[0].style.visibility="hidden"},e}return Object(c.a)(n,[{key:"render",value:function(){return N.createElement("div",null,N.createElement("div",{className:"alerts",style:{visibility:"hidden"},onClick:this.hideAlert.bind(this)},N.createElement(d.a,{color:"success"},"Word has been flagged")),N.createElement("div",{className:"flagged-words"},N.createElement(h.a,{className:"btn-simple btn-round",color:"info",onClick:this.openLearnWords.bind(this)},"Learn Words")),N.createElement("div",{className:"learn-words"},N.createElement(g.a,{className:"learn-card"},N.createElement(b.a,{className:"text-center"},N.createElement(p.a,null,this.state.word)),N.createElement(f.a,Object(i.a)({className:"card-body"},"className","text-center"),N.createElement(E.a,null,this.state.revealMeaning),N.createElement("br",null),N.createElement(h.a,{color:"info",onClick:this.revealMeaning.bind(this)},"Reveal")),N.createElement(v.a,{className:"text-center"},N.createElement(h.a,{onClick:this.nextWord.bind(this),color:"primary"},"Next Word")))))}}]),n}(N.Component)),M=n(1),j=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).redirectToLogin=function(){e.props.history.push("/auth/login")},e.redirectToSignUp=function(){e.props.history.push("/auth/signup")},e}return Object(c.a)(n,[{key:"render",value:function(){return M.createElement("div",{className:"navbar"},M.createElement("button",{type:"button",class:"primary button large login-button",onClick:this.redirectToLogin.bind(this)},"Login"),M.createElement("button",{type:"button",class:"primary button large login-button",onClick:this.redirectToSignUp.bind(this)},"SignUp"))}}]),n}(M.Component),O=n(34),W=n.n(O),x=n(1),L=n(33),P=L.Route,F=L.HashRouter,U=function(e){return x.createElement(F,null,x.createElement(P,{path:"/",exact:!0,component:j}),x.createElement(P,{path:"/auth",component:W.a}),x.createElement(P,{path:"/learn",component:C}),x.createElement(P,{path:"/flagged",component:k}))};n(75),n(76),n(77),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[38,1,2]]]);
//# sourceMappingURL=main.73bec26b.chunk.js.map