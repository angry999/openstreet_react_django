(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[24],{1234:function(e,a,t){"use strict";t.r(a);var l=t(11),n=t(12),r=t(14),s=t(13),c=t(0),i=t.n(c),o=t(23),u=t(33),m=t.n(u),p=t(15),E=t(1232),d=t(1223),h=t(1214),g=t(1215),v=t(1216),y=t(1217),f=t(1218),b=t(1219),_=t(643),k=t(644),w=t(599),C=t.n(w),O=function(e){Object(r.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=a.call.apply(a,[this].concat(r))).modifydata=function(e,a){var t=[],l=[];for(var n in e)t.push(e[n].filingdate),l.push(Math.round(100*e[n].transactionvalue)/100);return a?l:t},e}return Object(n.a)(t,[{key:"render",value:function(){var e={chart:{id:"areaChart"},xaxis:{type:"date",categories:this.modifydata(this.props.data,0),tickAmount:8},stroke:{curve:"smooth"},dataLabels:{enabled:!1},colors:this.props.themeColors,grid:{row:{colors:["#f3f3f3","transparent"],opacity:.5}},legend:{offsetY:-10},tooltip:{x:{format:"dd/MM/yy"}}},a=[{name:"series1",data:this.modifydata(this.props.data,1)}];return i.a.createElement(v.a,null,i.a.createElement(y.a,null,i.a.createElement(f.a,null,this.props.title)),i.a.createElement(b.a,null,i.a.createElement(C.a,{options:e,series:a,type:"area",height:400})))}}]),t}(i.a.Component),x=function(e){Object(r.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=a.call.apply(a,[this].concat(r))).modifydata=function(e,a){var t=[],l=[];for(var n in e)t.push(e[n].calendardate),l.push(Math.round(100*e[n].value)/100);return a?l:t},e}return Object(n.a)(t,[{key:"render",value:function(){var e={chart:{id:"areaChart"},xaxis:{type:"date",categories:this.modifydata(this.props.data,0),tickAmount:8},stroke:{curve:"smooth"},dataLabels:{enabled:!1},colors:this.props.themeColors,grid:{row:{colors:["#f3f3f3","transparent"],opacity:.5}},legend:{offsetY:-10},tooltip:{x:{format:"dd/MM/yy"}}},a=[{name:"series1",data:this.modifydata(this.props.data,1)}];return i.a.createElement(v.a,null,i.a.createElement(y.a,null,i.a.createElement(f.a,null,this.props.title)),i.a.createElement(b.a,null,i.a.createElement(C.a,{options:e,series:a,type:"area",height:400})))}}]),t}(i.a.Component),S=t(676),F=t.n(S),M=[{name:"Filing Date",selector:"filingdate",render:function(e){return i.a.createElement("a",null,e)},grow:3},{name:"Officer Title",selector:"officertitle",grow:5},{name:"Security Title",selector:"securitytitle",grow:5},{name:"Exercise Price",selector:"priceexercisable"},{name:"Expiration Date",selector:"expirationdate"},{name:"Transaction Price ",selector:"transactionpricepershare",sortable:!0},{name:"Transaction Value ($ Mn)",selector:"transactionvalue",sortable:!0}],j=[{name:"Calendar Date",selector:"calendardate",render:function(e){return i.a.createElement("a",null,e)},grow:3},{name:"Investor Name",selector:"investorname",grow:5},{name:"Security Type",selector:"securitytype",grow:3},{name:"Price ",selector:"price",sortable:!0},{name:"Net Value ($ Mn)",selector:"value",sortable:!0}],A=[{name:"Calendar Date",selector:"calendardate",render:function(e){return i.a.createElement("a",null,e)}},{name:"Security Type",selector:"securitytype",grow:3},{name:"Net Value ($ Mn)",selector:"value",sortable:!0}],R=["#7367F0","#28C76F","#EA5455","#FF9F43","#00cfe8"],T=(i.a.Component,t(53)),I=t(820),Y=t.n(I),D=t(1222),V=[{name:"Filing Date",selector:"filingdate",render:function(e){return i.a.createElement("a",null,e)},grow:3},{name:"Officer Title",selector:"officertitle",grow:5},{name:"Security Title",selector:"securitytitle",grow:5},{name:"Exercise Price",selector:"priceexercisable"},{name:"Expiration Date",selector:"expirationdate"},{name:"Transaction Price ",selector:"transactionpricepershare",sortable:!0},{name:"Transaction Value ($ Mn)",selector:"transactionvalue",sortable:!0}],P=[{name:"Calendar Date",selector:"calendardate",render:function(e){return i.a.createElement("a",null,e)},grow:3},{name:"Investor Name",selector:"investorname",grow:5},{name:"Security Type",selector:"securitytype",grow:3},{name:"Price ",selector:"price",sortable:!0},{name:"Net Value ($ Mn)",selector:"value",sortable:!0}],L=[{name:"Calendar Date",selector:"calendardate",render:function(e){return i.a.createElement("a",null,e)}},{name:"Security Type",selector:"securitytype",grow:3},{name:"Net Value ($ Mn)",selector:"value",sortable:!0}],N=["#7367F0","#28C76F","#EA5455","#FF9F43","#00cfe8"],H=function(e){Object(r.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=a.call.apply(a,[this].concat(r))).state={options:{lineColor:"#7367f0",alignLabels:!0,timeScale:{rightOffset:12,barSpacing:3,fixLeftEdge:!0,lockVisibleTimeRangeOnResize:!0,rightBarStaysOnScroll:!0,borderVisible:!1,borderColor:"#fff000",visible:!0,timeVisible:!0,secondsVisible:!1}},articles:[],docs:[],buy_value:[],sell_value:[],top10_buys:[],top10_sells:[],net_inst_by_date:[],top10_inst:[],net_inst_value:[],wealth_graph:[],isPostLoading:!0,loading:!0},e.getShares=function(e){for(var a=[],t=0;t<e.length;t++)"SHR"===e[t].securitytype&&a.push(e[t]);return a},e.renameKey=function(e,a,t){e[t]=e[a],delete e[a]},e.fetchArticles=function(){var a=e.props.match.params.articleID;m.a.get("https://openstreet.io/api/matrix/".concat(a,"/")).then((function(a){var t=JSON.stringify(a.data.wealth_graph);t=t.split('"date":').join('"time":').split('"performance":').join('"value":');var l=JSON.parse(t);console.log(l),e.setState({articles:a.data,wealth_graph:a.data.wealth_graph,buy_value:a.data.buy_value,sell_value:a.data.sell_value,top10_buys:a.data.top10_buys,top10_sells:a.data.top10_sells,net_inst_by_date:e.getShares(a.data.net_inst_by_date),top10_inst:a.data.top10_inst,net_inst_value:a.data.net_inst_value,loading:!1,areaSeries:[{data:l}]})}))},e.toggleModal=function(){e.setState((function(e){return{loading:!e.loading}}))},e}return Object(n.a)(t,[{key:"componentDidMount",value:function(){this.fetchArticles()}},{key:"render",value:function(){return this.props.token?(0===this.state.docs.length&!1===this.state.isPostLoading&&this.setState({isPostLoading:!0}),0!==this.state.docs.length&!0===this.state.isPostLoading&&this.setState({isPostLoading:!1}),i.a.createElement(i.a.Fragment,null,this.state.loading?i.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"20vh"}},i.a.createElement("span",null,i.a.createElement(D.a,{color:"primary",size:"sm"})," Loading Stock Research Report ")):i.a.createElement("div",{className:"site-card-wrapper"},i.a.createElement(h.a,null,i.a.createElement(g.a,{lg:"4",sm:"12"},i.a.createElement(v.a,null,i.a.createElement(y.a,null,i.a.createElement(f.a,null,this.state.articles.ticker_name)),i.a.createElement("hr",null),i.a.createElement(b.a,null,i.a.createElement(E.a,{value:this.state.articles.price}))))),i.a.createElement(d.a,null),i.a.createElement(Y.a,{legend:"Wealth Graph",options:this.state.options,darkTheme:!0,areaSeries:this.state.areaSeries,autoWidth:!0,height:320}),i.a.createElement(d.a,null),i.a.createElement(h.a,{gutter:16},i.a.createElement(g.a,{lg:"4",sm:"12"},i.a.createElement(v.a,null,i.a.createElement(b.a,null,i.a.createElement(_.a,{strokeColor:"#b9c3cd",success:"#28C76F",title:"Company Health",percent:this.state.articles.company_health}),i.a.createElement(d.a,null),i.a.createElement(h.a,{gutter:20},i.a.createElement(g.a,{span:12},i.a.createElement("p",null,"5 Yr Revenue Growth (%)"),i.a.createElement(E.a,{value:this.state.articles.rev_growth})),i.a.createElement(g.a,{span:12},i.a.createElement("p",null,"Revenue Growth Uncertainty (%)"),i.a.createElement(E.a,{value:this.state.articles.rev_uncertainty})),i.a.createElement(d.a,null),i.a.createElement(g.a,{span:12},i.a.createElement("p",null,"5 Yr Average Profit Margin (%)"),i.a.createElement(E.a,{value:this.state.articles.profit_margin})),i.a.createElement(g.a,{span:12},i.a.createElement("p",null,"5 Yr Average Market Share Growth (%)"),i.a.createElement(E.a,{value:this.state.articles.market_share_growth})))))),i.a.createElement(g.a,{lg:"4",sm:"12"},i.a.createElement(v.a,null,i.a.createElement(b.a,null,i.a.createElement(_.a,{strokeColor:"#b9c3cd",success:"#28C76F",title:"Company Yield",percent:this.state.articles.company_yield}),i.a.createElement(d.a,null),i.a.createElement(h.a,{gutter:20},i.a.createElement(g.a,{span:12},i.a.createElement("p",null,"5 Yr Average Dividend Yield (%)"),i.a.createElement(E.a,{value:this.state.articles.dividend_yield})),i.a.createElement(g.a,{span:12},i.a.createElement("p",null,"5 Yr Average Earnings Yield (%)"),i.a.createElement(E.a,{value:this.state.articles.earnings_yield})),i.a.createElement(d.a,null),i.a.createElement(g.a,{span:12},i.a.createElement("p",null,"5 Yr Average Payout Ratio (%)"),i.a.createElement(E.a,{value:this.state.articles.payout_ratio})),i.a.createElement(g.a,{span:12},i.a.createElement("p",null,"5 Yr Average Free Cash Flow ($bn)"),i.a.createElement(E.a,{value:this.state.articles.free_cash_flow})))))),i.a.createElement(g.a,{lg:"4",sm:"12"},i.a.createElement(v.a,null,i.a.createElement(b.a,null,i.a.createElement(_.a,{strokeColor:"#b9c3cd",success:"#28C76F",title:"Company Quality",percent:this.state.articles.company_quality}),i.a.createElement(d.a,null),i.a.createElement(h.a,{gutter:20},i.a.createElement(g.a,{span:12},i.a.createElement("p",null,"5 Yr Average Debt/Equity"),i.a.createElement(E.a,{value:this.state.articles.debt_to_equity})),i.a.createElement(g.a,{span:12},i.a.createElement("p",null,"5 Yr Average Return on Invested Capital (%)"),i.a.createElement(E.a,{value:this.state.articles.return_on_invested_capital})),i.a.createElement(d.a,null),i.a.createElement(g.a,{span:12},i.a.createElement("p",null,"5 Yr Average Growth in ROE (%)"),i.a.createElement(E.a,{value:this.state.articles.roe_growth})),i.a.createElement(g.a,{span:12},i.a.createElement("p",null,"ROE Growth Uncertainty (%)"),i.a.createElement(E.a,{value:this.state.articles.roe_uncertainty}))))))),i.a.createElement(d.a,null),i.a.createElement(h.a,{gutter:16},i.a.createElement(g.a,{lg:"4",sm:"12"},i.a.createElement(v.a,null,i.a.createElement(y.a,null,i.a.createElement(f.a,null,"Fair Value")),i.a.createElement(b.a,null,i.a.createElement("p",null,"Fair Value Rating ( / 20)"),i.a.createElement(E.a,{value:this.state.articles.fair_value_score}),i.a.createElement(d.a,null),i.a.createElement(h.a,{gutter:20},i.a.createElement(g.a,{span:12},i.a.createElement("p",null,"Fair Value by Dividend Discount Model ($)"),i.a.createElement(E.a,{value:this.state.articles.fair_value_ddm})),i.a.createElement(g.a,{span:12},i.a.createElement("p",null,"Fair Value by Free Cash Flow Model ($)"),i.a.createElement(E.a,{value:this.state.articles.fair_value_fcf})))))),i.a.createElement(g.a,{lg:"4",sm:"12"},i.a.createElement(v.a,null,i.a.createElement(y.a,null,i.a.createElement(f.a,null,"Industry Rank: ",this.state.articles.industry)),i.a.createElement(b.a,null,i.a.createElement(E.a,{value:this.state.articles.industry_rank}),i.a.createElement(d.a,null),i.a.createElement(h.a,{gutter:20},i.a.createElement(g.a,{span:12},i.a.createElement("p",null,"Profitability Rank"),i.a.createElement(E.a,{value:this.state.articles.profitability_rank})),i.a.createElement(g.a,{span:12},i.a.createElement("p",null,"Value Rank"),i.a.createElement(E.a,{value:this.state.articles.value_rank})),i.a.createElement(d.a,null),i.a.createElement(g.a,{span:24},i.a.createElement("p",null,"Quality Rank"),i.a.createElement(E.a,{value:this.state.articles.quality_rank})))))),i.a.createElement(g.a,{lg:"4",sm:"12"},i.a.createElement(v.a,null,i.a.createElement(y.a,null,i.a.createElement(f.a,null,"Market Risk")),i.a.createElement(b.a,null,i.a.createElement("p",null,"Risk Rating ( / 30)"),i.a.createElement(E.a,{value:this.state.articles.risk_score}),i.a.createElement(d.a,null),i.a.createElement(h.a,{gutter:20},i.a.createElement(g.a,{span:12},i.a.createElement("p",null,"Annualized Volatility (%)"),i.a.createElement(E.a,{value:this.state.articles.vol})),i.a.createElement(g.a,{span:12},i.a.createElement("p",null,"Max Drawdown (%)"),i.a.createElement(E.a,{value:this.state.articles.max_drawdown})),i.a.createElement(d.a,null),i.a.createElement(g.a,{span:24},i.a.createElement("p",null,"Correlation with Market"),i.a.createElement(E.a,{value:this.state.articles.correl})))))),i.a.createElement(d.a,null),i.a.createElement(g.a,{sm:"5",lg:"3"},i.a.createElement(v.a,null,i.a.createElement(y.a,null,i.a.createElement(f.a,null,"Insider Rating")),i.a.createElement(b.a,null,i.a.createElement(_.a,{strokeColor:"#b9c3cd",success:"#28C76F",percent:this.state.articles.net_value_executed_pct})))),i.a.createElement(d.a,null),i.a.createElement(g.a,{sm:"12",lg:"5"},i.a.createElement(O,{themeColors:N,data:this.state.buy_value,columns:"value",title:"Insider Buy"})),i.a.createElement(g.a,{sm:"12",lg:"7"},i.a.createElement(v.a,null,i.a.createElement(y.a,null,i.a.createElement(f.a,null,"Top 10 Insider Trades Buy")),i.a.createElement(b.a,null,i.a.createElement(F.a,{data:this.state.top10_buys,columns:V,scroll:{x:1500},noHeader:!0})))),i.a.createElement(d.a,null),i.a.createElement(g.a,{sm:"12",lg:"5"},i.a.createElement(O,{themeColors:N,data:this.state.sell_value,title:"Insider Sell"})),i.a.createElement(g.a,{sm:"12",lg:"7"},i.a.createElement(v.a,null,i.a.createElement(y.a,null,i.a.createElement(f.a,null,"Top 10 Insider Trades Sell")),i.a.createElement(b.a,null,i.a.createElement(F.a,{data:this.state.top10_sells,columns:V,scroll:{x:1500},noHeader:!0})))),i.a.createElement(d.a,null),i.a.createElement(g.a,{sm:"5",lg:"3"},i.a.createElement(v.a,null,i.a.createElement(y.a,null,i.a.createElement(f.a,null,"Institutional Rating")),i.a.createElement(b.a,null,i.a.createElement(_.a,{strokeColor:"#b9c3cd",success:"#28C76F",percent:this.state.articles.net_holding_pct})))),i.a.createElement(d.a,null),i.a.createElement(g.a,{sm:"12",lg:"7"},i.a.createElement(v.a,{title:"Net Institutional Holdings"},i.a.createElement(y.a,null,i.a.createElement(f.a,null,"Net Institutional Holdings")),i.a.createElement(b.a,null,i.a.createElement(F.a,{data:this.state.net_inst_value,columns:L,scroll:{x:100},noHeader:!0})))),i.a.createElement(g.a,{sm:"12",lg:"5"},i.a.createElement(x,{themeColors:N,data:this.state.net_inst_by_date,title:"Net Institutional Share Holdings by Date"})),i.a.createElement(d.a,null),i.a.createElement(g.a,{sm:"20",lg:"10"},i.a.createElement(v.a,null,i.a.createElement(y.a,null,i.a.createElement(f.a,null,"Top 10 Institutional Holdings")),i.a.createElement(b.a,null,i.a.createElement(F.a,{data:this.state.top10_inst,columns:P,scroll:{x:1500},noHeader:!0})))))))):i.a.createElement(T.a,{to:"/login"})}}]),t}(i.a.Component);a.default=Object(o.b)((function(e){return{token:e.auth.token}}))(H)},643:function(e,a,t){"use strict";var l=t(11),n=t(12),r=t(14),s=t(13),c=t(0),i=t.n(c),o=t(1216),u=t(1217),m=t(1218),p=t(1219),E=t(599),d=t.n(E),h=function(e){Object(r.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=a.call.apply(a,[this].concat(r))).state={options:{chart:{sparkline:{enabled:!0},dropShadow:{enabled:!0,blur:3,left:1,top:1,opacity:.1}},colors:[e.props.success],plotOptions:{radialBar:{size:110,startAngle:-140,endAngle:150,hollow:{size:"77%"},track:{background:e.props.strokeColor,strokeWidth:"50%"},dataLabels:{name:{show:!1},value:{offsetY:18,color:e.props.strokeColor,fontSize:"4rem"}}}},fill:{type:"gradient",gradient:{shade:"dark",type:"horizontal",shadeIntensity:.5,gradientToColors:["#00b5b5"],inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[0,100]}},stroke:{lineCap:"round"}},series:[e.props.percent]},e}return Object(n.a)(t,[{key:"render",value:function(){return i.a.createElement(o.a,null,i.a.createElement(u.a,null,i.a.createElement(m.a,null,this.props.title)),i.a.createElement("hr",null),i.a.createElement(p.a,null,i.a.createElement(d.a,{options:this.state.options,series:[this.props.percent],type:"radialBar",height:200})))}}]),t}(i.a.Component);a.a=h},644:function(e,a,t){"use strict";var l=t(11),n=t(12),r=t(14),s=t(13),c=t(0),i=t.n(c),o=t(1216),u=t(1217),m=t(1218),p=t(1219),E=t(599),d=t.n(E),h=function(e){Object(r.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=a.call.apply(a,[this].concat(r))).modifydata=function(e,a,t){var l=[],n=[];for(var r in e)l.push(e[r].date),0==t?n.push(Math.round(100*e[r].portfolio_wealth)/100):n.push(Math.round(100*e[r].performance)/100);return a?n:l},e}return Object(n.a)(t,[{key:"render",value:function(){var e={chart:{id:"areaChart"},xaxis:{type:"date",categories:this.modifydata(this.props.data,0,this.props.second),tickAmount:8},stroke:{curve:"smooth"},dataLabels:{enabled:!1},colors:this.props.themeColors,grid:{row:{colors:["#f3f3f3","transparent"],opacity:.5}},legend:{offsetY:-10},tooltip:{x:{format:"dd/MM/yy"}}},a=[{name:"series1",data:this.modifydata(this.props.data,1,this.props.second)}];return i.a.createElement(o.a,null,i.a.createElement(u.a,null,i.a.createElement(m.a,null,this.props.title)),i.a.createElement(p.a,null,i.a.createElement(d.a,{options:e,series:a,type:"area",height:500})))}}]),t}(i.a.Component);a.a=h}}]);
//# sourceMappingURL=24.61ea1d45.chunk.js.map