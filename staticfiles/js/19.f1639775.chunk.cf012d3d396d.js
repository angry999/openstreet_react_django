(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[19],{1229:function(e,a,t){"use strict";t.r(a);var n=t(11),r=t(12),l=t(14),s=t(13),c=t(0),m=t.n(c),o=t(1209),i=t(1210),u=t(1211),p=t(1214),d=t(1018),h=t(530),f=t(531),E=t(1019),v=t(1020),b=t(2),g=t.n(b),k=t(173),y=t(53),w=t(535),N=t(813),j=t(681),_=t(958),x=t(682),O=t(300),C=t(166),S=t.n(C),U=t(36),T=t.n(U),A=t(23),P=(t(1200),t(165)),q=function(e){Object(l.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),s=0;s<r;s++)l[s]=arguments[s];return(e=a.call.apply(a,[this].concat(l))).state={email:"",first_name:"",last_name:"",username:"",password:""},e.fetchUser=function(){T.a.get("https://openstreet.io/api/user/?token=".concat(e.props.token)).then((function(a){e.setState(a.data),console.log(e.state)}))},e.handleUpdate=function(a){a.preventDefault(),T.a.put("https://openstreet.io/api/user/?token=".concat(e.props.token),{email:e.state.email,first_name:e.state.first_name,last_name:e.state.last_name,username:e.state.username,password:e.state.password}).then((function(a){e.props.logout(),console.log(e.props.token)}))},e}return Object(r.a)(t,[{key:"componentDidMount",value:function(){this.fetchUser()}},{key:"componentWillReceiveProps",value:function(e){e.token&&this.fetchUser()}},{key:"render",value:function(){var e=this;return m.a.createElement(o.a,null,m.a.createElement(i.a,{sm:"12"},m.a.createElement(w.a,{className:"mb-2"},m.a.createElement(w.a,{className:"mr-2 my-25",left:!0,href:"#"},m.a.createElement(w.a,{className:"users-avatar-shadow rounded",object:!0,src:S.a,alt:"user profile image",height:"84",width:"84"})),m.a.createElement(w.a,{className:"mt-2",body:!0},m.a.createElement(w.a,{className:"font-medium-1 text-bold-600",tag:"p",heading:!0},this.state.first_name," ",this.state.last_name)))),m.a.createElement(i.a,{sm:"12"},m.a.createElement(N.a,{onSubmit:this.handleUpdate},m.a.createElement(o.a,null,m.a.createElement(i.a,{md:"6",sm:"12"},m.a.createElement(j.a,null,m.a.createElement(_.a,{for:"token"},"Token"),m.a.createElement(x.a,{type:"text",disabled:!0,value:this.props.token,id:"token"}))),m.a.createElement(i.a,{md:"6",sm:"12"},m.a.createElement(j.a,null,m.a.createElement(_.a,{for:"email"},"Email"),m.a.createElement(x.a,{type:"text",value:this.state.email,id:"email",placeholder:"Username",onChange:function(a){return e.setState({email:a.target.value})}}))),m.a.createElement(i.a,{md:"6",sm:"12"},m.a.createElement(j.a,null,m.a.createElement(_.a,{for:"firstname"},"First Name"),m.a.createElement(x.a,{type:"text",value:this.state.first_name,id:"firstname",placeholder:"First Name",onChange:function(a){return e.setState({first_name:a.target.value})}}))),m.a.createElement(i.a,{md:"6",sm:"12"},m.a.createElement(j.a,null,m.a.createElement(_.a,{for:"lastname"},"Last Name"),m.a.createElement(x.a,{type:"text",value:this.state.last_name,id:"lastname",placeholder:"Last Name",onChange:function(a){return e.setState({last_name:a.target.value})}}))),m.a.createElement(i.a,{md:"6",sm:"12"},m.a.createElement(j.a,null,m.a.createElement(_.a,{for:"username"},"Username"),m.a.createElement(x.a,{type:"text",value:this.state.username,id:"username",required:!0,disabled:!0,placeholder:"Username",onChange:function(a){return e.setState({username:a.target.value})}}))),m.a.createElement(i.a,{md:"6",sm:"12"},m.a.createElement(j.a,null,m.a.createElement(_.a,{for:"password"},"Password"),m.a.createElement(x.a,{type:"text",id:"password",required:!0,placeholder:"Password",onChange:function(a){return e.setState({password:a.target.value})}}))),m.a.createElement(i.a,{className:"d-flex justify-content-end flex-wrap mt-2",sm:"12"},m.a.createElement(O.a.Ripple,{className:"mr-1",color:"primary"},"Save Changes"))))))}}]),t}(m.a.Component),D=Object(A.b)((function(e){return{token:e.auth.token}}),(function(e){return{logout:function(){return e(P.c())}}}))(q),F=(t(729),function(e){Object(l.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),s=0;s<r;s++)l[s]=arguments[s];return(e=a.call.apply(a,[this].concat(l))).state={activeTab:"1"},e.toggle=function(a){e.setState({activeTab:a})},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return this.props.token?m.a.createElement(o.a,null,m.a.createElement(i.a,{sm:"12"},m.a.createElement(u.a,null,m.a.createElement(p.a,{className:"pt-2"},m.a.createElement(d.a,{tabs:!0},m.a.createElement(h.a,null,m.a.createElement(f.a,{className:g()({active:"1"===this.state.activeTab}),onClick:function(){e.toggle("1")}},m.a.createElement(k.a,{size:16}),m.a.createElement("span",{className:"align-middle ml-50"},"Account")))),m.a.createElement(E.a,{activeTab:this.state.activeTab},m.a.createElement(v.a,{tabId:"1"},m.a.createElement(D,null))))))):m.a.createElement(y.a,{to:"/login"})}}]),t}(m.a.Component));a.default=Object(A.b)((function(e){return{token:e.auth.token}}))(F)},729:function(e,a,t){}}]);
//# sourceMappingURL=19.f1639775.chunk.js.map