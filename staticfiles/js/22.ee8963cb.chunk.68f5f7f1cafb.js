(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[22],{1223:function(e,a,t){"use strict";t.r(a);var l=t(11),n=t(12),s=t(14),c=t(13),r=t(0),m=t.n(r),i=t(1210),o=t(1211),u=t(1212),d=t(1213),E=t(1214),f=t(1215),p=t(536),h=t(301),v=t(205),N=t(53),b=t(32),g=t(167),k=t.n(g),w=(t(738),t(33)),x=t.n(w),y=t(23),j=function(e){Object(s.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=a.call.apply(a,[this].concat(s))).state={email:"",first_name:"",last_name:"",username:"",password:""},e.fetchUser=function(){x.a.get("https://openstreet.io/api/user/?token=".concat(e.props.token)).then((function(a){e.setState(a.data),console.log(e.state)}))},e}return Object(n.a)(t,[{key:"componentDidMount",value:function(){this.fetchUser()}},{key:"componentWillReceiveProps",value:function(e){e.token&&this.fetchUser()}},{key:"render",value:function(){return this.props.token?m.a.createElement(m.a.Fragment,null,m.a.createElement(i.a,null,m.a.createElement(o.a,{sm:"12"},m.a.createElement(u.a,null,m.a.createElement(d.a,null,m.a.createElement(E.a,null,"Account")),m.a.createElement(f.a,null,m.a.createElement(i.a,{className:"mx-0",col:"12"},m.a.createElement(o.a,{className:"pl-0",sm:"12"},m.a.createElement(p.a,{className:"d-sm-flex d-block"},m.a.createElement(p.a,{className:"mt-md-1 mt-0",left:!0},m.a.createElement(p.a,{className:"rounded mr-2",object:!0,src:k.a,alt:"Generic placeholder image",height:"112",width:"112"})),m.a.createElement(p.a,{body:!0},m.a.createElement(i.a,null,m.a.createElement(o.a,{sm:"9",md:"6",lg:"5"},m.a.createElement("div",{className:"users-page-view-table"},m.a.createElement("div",{className:"d-flex user-info"},m.a.createElement("div",{className:"user-info-title font-weight-bold"},"Username"),m.a.createElement("div",null,this.state.username))))),m.a.createElement(i.a,null,m.a.createElement(o.a,{sm:"9",md:"6",lg:"5"},m.a.createElement("div",{className:"users-page-view-table"},m.a.createElement("div",{className:"d-flex user-info"},m.a.createElement("div",{className:"user-info-title font-weight-bold"},"First Name"),m.a.createElement("div",null,this.state.first_name)),m.a.createElement("div",{className:"d-flex user-info"},m.a.createElement("div",{className:"user-info-title font-weight-bold"},"Email"),m.a.createElement("div",{className:"text-truncate"},m.a.createElement("span",null,this.state.email))))),m.a.createElement(o.a,{md:"12",lg:"5"},m.a.createElement("div",{className:"users-page-view-table"},m.a.createElement("div",{className:"d-flex user-info"},m.a.createElement("div",{className:"user-info-title font-weight-bold"},"Last Name"),m.a.createElement("div",null,this.state.last_name)),m.a.createElement("div",{className:"d-flex user-info"},m.a.createElement("div",{className:"user-info-title font-weight-bold"},"Token"),m.a.createElement("div",null,m.a.createElement("span",null,this.props.token))))))))),m.a.createElement(o.a,{className:"mt-1 pl-0",sm:"12"},m.a.createElement(h.a.Ripple,{className:"mr-1",color:"primary",outline:!0},m.a.createElement(b.a,{to:"/user/edit"},m.a.createElement(v.a,{size:15}),m.a.createElement("span",{className:"align-middle ml-50"},"Edit")))))))))):m.a.createElement(N.a,{to:"/login"})}}]),t}(m.a.Component);a.default=Object(y.b)((function(e){return{token:e.auth.token}}))(j)},738:function(e,a,t){}}]);
//# sourceMappingURL=22.ee8963cb.chunk.js.map