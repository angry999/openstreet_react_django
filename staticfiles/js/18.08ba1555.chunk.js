(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[18],{1195:function(e,a,t){e.exports=t.p+"static/media/register.23d1bae7.jpg"},1231:function(e,a,t){"use strict";t.r(a);var r=t(11),n=t(12),s=t(14),l=t(13),c=t(0),o=t.n(c),i=t(1209),m=t(1210),u=t(1211),p=t(1212),h=t(1213),d=t(1214),g=(t(2),t(73)),E=t.n(g),f=t(124),b=t(1206),v=t(955),w=t(956),y=t(957),k=t(300),x=t(813),N=t(681),C=t(682),j=t(958),O=t(616),S=t(198),q=t(23),A=t(31),R=t(165),_=function(e){Object(s.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(r.a)(this,t);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(e=a.call.apply(a,[this].concat(s))).state={email:"",password1:"",password2:"",username:"",error_msg:"",hasError:!1},e.handleRegister=function(a){a.preventDefault(),e.props.onSignup(e.state.username,e.state.email,e.state.password1,e.state.password2).then((function(a){a&&"AUTH_FAIL"==a.type?e.setState({hasError:!0,error_msg:a.error}):e.setState({hasError:!1,error_msg:""})})).catch((function(e){console.log(e)}))},e.toggleModal=function(){e.setState((function(e){return{hasError:!e.hasError}}))},e}return Object(n.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(b.a,{isOpen:this.state.hasError,toggle:this.toggleModal,className:"modal-dialog-centered"},o.a.createElement(v.a,{toggle:this.toggleModal},"Error"),o.a.createElement(w.a,null,this.state.error_msg),o.a.createElement(y.a,null,o.a.createElement(k.a,{color:"primary",onClick:this.toggleModal},"Dismiss"))),o.a.createElement(x.a,{onSubmit:this.handleRegister},o.a.createElement(N.a,{className:"form-label-group"},o.a.createElement(C.a,{type:"text",name:"username",placeholder:"Username",required:!0,value:this.state.username,onChange:function(a){return e.setState({username:a.target.value})}}),o.a.createElement(j.a,null,"Username")),o.a.createElement(N.a,{className:"form-label-group"},o.a.createElement(C.a,{type:"email",name:"email",placeholder:"Email",required:!0,value:this.state.email,onChange:function(a){return e.setState({email:a.target.value})}}),o.a.createElement(j.a,null,"Email")),o.a.createElement(N.a,{className:"form-label-group"},o.a.createElement(C.a,{type:"password",name:"password",placeholder:"Password",required:!0,value:this.state.password1,minLength:6,onChange:function(a){return e.setState({password1:a.target.value})}}),o.a.createElement(j.a,null,"Password")),o.a.createElement(N.a,{className:"form-label-group"},o.a.createElement(C.a,{type:"password",name:"confirm",placeholder:"Confirm Password",required:!0,value:this.state.password2,minLength:6,onChange:function(a){return e.setState({password2:a.target.value})},valid:this.state.password1&&this.state.password1===this.state.password2,invalid:!(this.state.password1===this.state.password2)}),o.a.createElement(j.a,null,"Confirm Password")),o.a.createElement(N.a,null,o.a.createElement(O.a,{color:"primary",name:"agreement",required:!0,icon:o.a.createElement(S.a,{className:"vx-icon",size:16}),label:" I accept the terms & conditions.",defaultChecked:!0})),o.a.createElement("div",{className:"d-flex justify-content-between"},o.a.createElement(k.a.Ripple,{color:"primary",outline:!0,onClick:function(){A.a.push("/login")}},"Login"),o.a.createElement(k.a.Ripple,{color:"primary",type:"submit"},"Register"))))}}]),t}(o.a.Component),L=Object(q.b)((function(e){return{loading:e.auth.loading,error:e.auth.loading}}),(function(e){return{onSignup:function(){var a=Object(f.a)(E.a.mark((function a(t,r,n,s){return E.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e(R.b(t,r,n,s));case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}}),a)})));return function(e,t,r,n){return a.apply(this,arguments)}}()}}))(_),M=t(1195),P=t.n(M),T=(t(730),function(e){Object(s.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(r.a)(this,t);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(e=a.call.apply(a,[this].concat(s))).state={activeTab:"1"},e.toggle=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(n.a)(t,[{key:"render",value:function(){return o.a.createElement(i.a,{className:"m-0 justify-content-center"},o.a.createElement(m.a,{sm:"8",xl:"7",lg:"10",md:"8",className:"d-flex justify-content-center"},o.a.createElement(u.a,{className:"bg-authentication rounded-0 mb-0 w-100"},o.a.createElement(i.a,{className:"m-0"},o.a.createElement(m.a,{lg:"6",className:"d-lg-block d-none text-center align-self-center px-1 py-0"},o.a.createElement("img",{className:"mr-1",src:P.a,alt:"registerImg"})),o.a.createElement(m.a,{lg:"6",md:"12",className:"p-0"},o.a.createElement(u.a,{className:"rounded-0 mb-0 p-2"},o.a.createElement(p.a,{className:"pb-1 pt-50"},o.a.createElement(h.a,null,o.a.createElement("h4",{className:"mb-0"},"Create Account"))),o.a.createElement("p",{className:"px-2 auth-title mb-0"},"Fill the below form to create a new account."),o.a.createElement(d.a,{className:"pt-1 pb-50"},o.a.createElement(L,null))))))))}}]),t}(o.a.Component));a.default=T},616:function(e,a,t){"use strict";var r=t(11),n=t(12),s=t(14),l=t(13),c=t(0),o=t.n(c),i=function(e){Object(s.a)(t,e);var a=Object(l.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"vx-checkbox-con ".concat(this.props.className?this.props.className:""," vx-checkbox-").concat(this.props.color)},o.a.createElement("input",{type:"checkbox",defaultChecked:this.props.defaultChecked,checked:this.props.checked,value:this.props.value,disabled:this.props.disabled,required:this.props.required,onClick:this.props.onClick?this.props.onClick:null,onChange:this.props.onChange?this.props.onChange:null}),o.a.createElement("span",{className:"vx-checkbox vx-checkbox-".concat(this.props.size?this.props.size:"md")},o.a.createElement("span",{className:"vx-checkbox--check"},this.props.icon)),o.a.createElement("span",null,this.props.label))}}]),t}(o.a.Component);a.a=i},730:function(e,a,t){}}]);
//# sourceMappingURL=18.08ba1555.chunk.js.map