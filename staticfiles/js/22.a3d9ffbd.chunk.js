(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[22],{1235:function(e,t,a){"use strict";a.r(t);var r=a(11),n=a(12),l=a(14),i=a(13),s=a(0),c=a.n(s),o=a(23),u=a(33),m=a.n(u),d=a(15),p=a(1233),h=a(1224),E=a(1215),v=a(1216),g=a(1217),f=a(1218),y=a(1219),b=a(1220),_=a(645),C=a(646),k=a(599),S=a.n(k),w=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).modifydata=function(e,t){var a=[],r=[];for(var n in e)a.push(e[n].filingdate),r.push(Math.round(100*e[n].transactionvalue)/100);return t?r:a},e}return Object(n.a)(a,[{key:"render",value:function(){var e={chart:{id:"areaChart"},xaxis:{type:"date",categories:this.modifydata(this.props.data,0),tickAmount:8},stroke:{curve:"smooth"},dataLabels:{enabled:!1},colors:this.props.themeColors,grid:{row:{colors:["#f3f3f3","transparent"],opacity:.5}},legend:{offsetY:-10},tooltip:{x:{format:"dd/MM/yy"}}},t=[{name:"series1",data:this.modifydata(this.props.data,1)}];return c.a.createElement(g.a,null,c.a.createElement(f.a,null,c.a.createElement(y.a,null,this.props.title)),c.a.createElement(b.a,null,c.a.createElement(S.a,{options:e,series:t,type:"area",height:400})))}}]),a}(c.a.Component),M=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).modifydata=function(e,t){var a=[],r=[];for(var n in e)a.push(e[n].calendardate),r.push(Math.round(100*e[n].value)/100);return t?r:a},e}return Object(n.a)(a,[{key:"render",value:function(){var e={chart:{id:"areaChart"},xaxis:{type:"date",categories:this.modifydata(this.props.data,0),tickAmount:8},stroke:{curve:"smooth"},dataLabels:{enabled:!1},colors:this.props.themeColors,grid:{row:{colors:["#f3f3f3","transparent"],opacity:.5}},legend:{offsetY:-10},tooltip:{x:{format:"dd/MM/yy"}}},t=[{name:"series1",data:this.modifydata(this.props.data,1)}];return c.a.createElement(g.a,null,c.a.createElement(f.a,null,c.a.createElement(y.a,null,this.props.title)),c.a.createElement(b.a,null,c.a.createElement(S.a,{options:e,series:t,type:"area",height:400})))}}]),a}(c.a.Component),O=a(679),T=a.n(O),D=[{name:"Filing Date",selector:"filingdate",render:function(e){return c.a.createElement("a",null,e)},grow:3},{name:"Officer Title",selector:"officertitle",grow:5},{name:"Security Title",selector:"securitytitle",grow:5},{name:"Exercise Price",selector:"priceexercisable"},{name:"Expiration Date",selector:"expirationdate"},{name:"Transaction Price ",selector:"transactionpricepershare",sortable:!0},{name:"Transaction Value ($ Mn)",selector:"transactionvalue",sortable:!0}],F=[{name:"Calendar Date",selector:"calendardate",render:function(e){return c.a.createElement("a",null,e)},grow:3},{name:"Investor Name",selector:"investorname",grow:5},{name:"Security Type",selector:"securitytype",grow:3},{name:"Price ",selector:"price",sortable:!0},{name:"Net Value ($ Mn)",selector:"value",sortable:!0}],j=[{name:"Calendar Date",selector:"calendardate",render:function(e){return c.a.createElement("a",null,e)}},{name:"Security Type",selector:"securitytype",grow:3},{name:"Net Value ($ Mn)",selector:"value",sortable:!0}],x=["#7367F0","#28C76F","#EA5455","#FF9F43","#00cfe8"],L=(c.a.Component,a(53)),R=a(678),A=a(1223),H=[{name:"Filing Date",selector:"filingdate",render:function(e){return c.a.createElement("a",null,e)},grow:3},{name:"Officer Title",selector:"officertitle",grow:5},{name:"Security Title",selector:"securitytitle",grow:5},{name:"Exercise Price",selector:"priceexercisable"},{name:"Expiration Date",selector:"expirationdate"},{name:"Transaction Price ",selector:"transactionpricepershare",sortable:!0},{name:"Transaction Value ($ Mn)",selector:"transactionvalue",sortable:!0}],I=[{name:"Calendar Date",selector:"calendardate",render:function(e){return c.a.createElement("a",null,e)},grow:3},{name:"Investor Name",selector:"investorname",grow:5},{name:"Security Type",selector:"securitytype",grow:3},{name:"Price ",selector:"price",sortable:!0},{name:"Net Value ($ Mn)",selector:"value",sortable:!0}],z=[{name:"Calendar Date",selector:"calendardate",render:function(e){return c.a.createElement("a",null,e)}},{name:"Security Type",selector:"securitytype",grow:3},{name:"Net Value ($ Mn)",selector:"value",sortable:!0}],V=["#7367F0","#28C76F","#EA5455","#FF9F43","#00cfe8"],Y=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).state={options:{alignLabels:!0,timeScale:{rightOffset:12,barSpacing:3,fixLeftEdge:!0,lockVisibleTimeRangeOnResize:!0,rightBarStaysOnScroll:!0,borderVisible:!1,borderColor:"#fff000",visible:!0,timeVisible:!0,secondsVisible:!1}},articles:[],docs:[],buy_value:[],sell_value:[],top10_buys:[],top10_sells:[],net_inst_by_date:[],top10_inst:[],net_inst_value:[],wealth_graph:[],isPostLoading:!0,loading:!0},e.getShares=function(e){for(var t=[],a=0;a<e.length;a++)"SHR"===e[a].securitytype&&t.push(e[a]);return t},e.renameKey=function(e,t,a){e[a]=e[t],delete e[t]},e.fetchArticles=function(){var t=e.props.match.params.articleID;m.a.get("https://openstreet.io/api/matrix/".concat(t,"/")).then((function(t){var a=JSON.stringify(t.data.wealth_graph);a=a.split('"date":').join('"time":').split('"performance":').join('"value":');var r=JSON.parse(a);console.log(r),e.setState({articles:t.data,wealth_graph:t.data.wealth_graph,buy_value:t.data.buy_value,sell_value:t.data.sell_value,top10_buys:t.data.top10_buys,top10_sells:t.data.top10_sells,net_inst_by_date:e.getShares(t.data.net_inst_by_date),top10_inst:t.data.top10_inst,net_inst_value:t.data.net_inst_value,loading:!1,areaSeries:[{data:r}]})}))},e.toggleModal=function(){e.setState((function(e){return{loading:!e.loading}}))},e}return Object(n.a)(a,[{key:"componentDidMount",value:function(){this.fetchArticles()}},{key:"render",value:function(){return this.props.token?(0===this.state.docs.length&!1===this.state.isPostLoading&&this.setState({isPostLoading:!0}),0!==this.state.docs.length&!0===this.state.isPostLoading&&this.setState({isPostLoading:!1}),c.a.createElement(c.a.Fragment,null,this.state.loading?c.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"20vh"}},c.a.createElement("span",null,c.a.createElement(A.a,{color:"primary",size:"sm"})," Loading Stock Research Report ")):c.a.createElement("div",{className:"site-card-wrapper"},c.a.createElement(E.a,null,c.a.createElement(v.a,{lg:"4",sm:"12"},c.a.createElement(g.a,null,c.a.createElement(f.a,null,c.a.createElement(y.a,null,this.state.articles.ticker_name)),c.a.createElement("hr",null),c.a.createElement(b.a,null,c.a.createElement(p.a,{value:this.state.articles.price}))))),c.a.createElement(h.a,null),c.a.createElement(R.a,{legend:"Wealth Graph",options:this.state.options,darkTheme:!0,areaSeries:this.state.areaSeries,autoWidth:!0,height:320}),c.a.createElement(h.a,null),c.a.createElement(E.a,{gutter:16},c.a.createElement(v.a,{lg:"4",sm:"12"},c.a.createElement(g.a,null,c.a.createElement(b.a,null,c.a.createElement(_.a,{strokeColor:"#b9c3cd",success:"#28C76F",title:"Company Health",percent:this.state.articles.company_health}),c.a.createElement(h.a,null),c.a.createElement(E.a,{gutter:20},c.a.createElement(v.a,{span:12},c.a.createElement("p",null,"5 Yr Revenue Growth (%)"),c.a.createElement(p.a,{value:this.state.articles.rev_growth})),c.a.createElement(v.a,{span:12},c.a.createElement("p",null,"Revenue Growth Uncertainty (%)"),c.a.createElement(p.a,{value:this.state.articles.rev_uncertainty})),c.a.createElement(h.a,null),c.a.createElement(v.a,{span:12},c.a.createElement("p",null,"5 Yr Average Profit Margin (%)"),c.a.createElement(p.a,{value:this.state.articles.profit_margin})),c.a.createElement(v.a,{span:12},c.a.createElement("p",null,"5 Yr Average Market Share Growth (%)"),c.a.createElement(p.a,{value:this.state.articles.market_share_growth})))))),c.a.createElement(v.a,{lg:"4",sm:"12"},c.a.createElement(g.a,null,c.a.createElement(b.a,null,c.a.createElement(_.a,{strokeColor:"#b9c3cd",success:"#28C76F",title:"Company Yield",percent:this.state.articles.company_yield}),c.a.createElement(h.a,null),c.a.createElement(E.a,{gutter:20},c.a.createElement(v.a,{span:12},c.a.createElement("p",null,"5 Yr Average Dividend Yield (%)"),c.a.createElement(p.a,{value:this.state.articles.dividend_yield})),c.a.createElement(v.a,{span:12},c.a.createElement("p",null,"5 Yr Average Earnings Yield (%)"),c.a.createElement(p.a,{value:this.state.articles.earnings_yield})),c.a.createElement(h.a,null),c.a.createElement(v.a,{span:12},c.a.createElement("p",null,"5 Yr Average Payout Ratio (%)"),c.a.createElement(p.a,{value:this.state.articles.payout_ratio})),c.a.createElement(v.a,{span:12},c.a.createElement("p",null,"5 Yr Average Free Cash Flow ($bn)"),c.a.createElement(p.a,{value:this.state.articles.free_cash_flow})))))),c.a.createElement(v.a,{lg:"4",sm:"12"},c.a.createElement(g.a,null,c.a.createElement(b.a,null,c.a.createElement(_.a,{strokeColor:"#b9c3cd",success:"#28C76F",title:"Company Quality",percent:this.state.articles.company_quality}),c.a.createElement(h.a,null),c.a.createElement(E.a,{gutter:20},c.a.createElement(v.a,{span:12},c.a.createElement("p",null,"5 Yr Average Debt/Equity"),c.a.createElement(p.a,{value:this.state.articles.debt_to_equity})),c.a.createElement(v.a,{span:12},c.a.createElement("p",null,"5 Yr Average Return on Invested Capital (%)"),c.a.createElement(p.a,{value:this.state.articles.return_on_invested_capital})),c.a.createElement(h.a,null),c.a.createElement(v.a,{span:12},c.a.createElement("p",null,"5 Yr Average Growth in ROE (%)"),c.a.createElement(p.a,{value:this.state.articles.roe_growth})),c.a.createElement(v.a,{span:12},c.a.createElement("p",null,"ROE Growth Uncertainty (%)"),c.a.createElement(p.a,{value:this.state.articles.roe_uncertainty}))))))),c.a.createElement(h.a,null),c.a.createElement(E.a,{gutter:16},c.a.createElement(v.a,{lg:"4",sm:"12"},c.a.createElement(g.a,null,c.a.createElement(f.a,null,c.a.createElement(y.a,null,"Fair Value")),c.a.createElement(b.a,null,c.a.createElement("p",null,"Fair Value Rating ( / 20)"),c.a.createElement(p.a,{value:this.state.articles.fair_value_score}),c.a.createElement(h.a,null),c.a.createElement(E.a,{gutter:20},c.a.createElement(v.a,{span:12},c.a.createElement("p",null,"Fair Value by Dividend Discount Model ($)"),c.a.createElement(p.a,{value:this.state.articles.fair_value_ddm})),c.a.createElement(v.a,{span:12},c.a.createElement("p",null,"Fair Value by Free Cash Flow Model ($)"),c.a.createElement(p.a,{value:this.state.articles.fair_value_fcf})))))),c.a.createElement(v.a,{lg:"4",sm:"12"},c.a.createElement(g.a,null,c.a.createElement(f.a,null,c.a.createElement(y.a,null,"Industry Rank: ",this.state.articles.industry)),c.a.createElement(b.a,null,c.a.createElement(p.a,{value:this.state.articles.industry_rank}),c.a.createElement(h.a,null),c.a.createElement(E.a,{gutter:20},c.a.createElement(v.a,{span:12},c.a.createElement("p",null,"Profitability Rank"),c.a.createElement(p.a,{value:this.state.articles.profitability_rank})),c.a.createElement(v.a,{span:12},c.a.createElement("p",null,"Value Rank"),c.a.createElement(p.a,{value:this.state.articles.value_rank})),c.a.createElement(h.a,null),c.a.createElement(v.a,{span:24},c.a.createElement("p",null,"Quality Rank"),c.a.createElement(p.a,{value:this.state.articles.quality_rank})))))),c.a.createElement(v.a,{lg:"4",sm:"12"},c.a.createElement(g.a,null,c.a.createElement(f.a,null,c.a.createElement(y.a,null,"Market Risk")),c.a.createElement(b.a,null,c.a.createElement("p",null,"Risk Rating ( / 30)"),c.a.createElement(p.a,{value:this.state.articles.risk_score}),c.a.createElement(h.a,null),c.a.createElement(E.a,{gutter:20},c.a.createElement(v.a,{span:12},c.a.createElement("p",null,"Annualized Volatility (%)"),c.a.createElement(p.a,{value:this.state.articles.vol})),c.a.createElement(v.a,{span:12},c.a.createElement("p",null,"Max Drawdown (%)"),c.a.createElement(p.a,{value:this.state.articles.max_drawdown})),c.a.createElement(h.a,null),c.a.createElement(v.a,{span:24},c.a.createElement("p",null,"Correlation with Market"),c.a.createElement(p.a,{value:this.state.articles.correl})))))),c.a.createElement(h.a,null),c.a.createElement(v.a,{sm:"5",lg:"3"},c.a.createElement(g.a,null,c.a.createElement(f.a,null,c.a.createElement(y.a,null,"Insider Rating")),c.a.createElement(b.a,null,c.a.createElement(_.a,{strokeColor:"#b9c3cd",success:"#28C76F",percent:this.state.articles.net_value_executed_pct})))),c.a.createElement(h.a,null),c.a.createElement(v.a,{sm:"12",lg:"5"},c.a.createElement(w,{themeColors:V,data:this.state.buy_value,columns:"value",title:"Insider Buy"})),c.a.createElement(v.a,{sm:"12",lg:"7"},c.a.createElement(g.a,null,c.a.createElement(f.a,null,c.a.createElement(y.a,null,"Top 10 Insider Trades Buy")),c.a.createElement(b.a,null,c.a.createElement(T.a,{data:this.state.top10_buys,columns:H,scroll:{x:1500},noHeader:!0})))),c.a.createElement(h.a,null),c.a.createElement(v.a,{sm:"12",lg:"5"},c.a.createElement(w,{themeColors:V,data:this.state.sell_value,title:"Insider Sell"})),c.a.createElement(v.a,{sm:"12",lg:"7"},c.a.createElement(g.a,null,c.a.createElement(f.a,null,c.a.createElement(y.a,null,"Top 10 Insider Trades Sell")),c.a.createElement(b.a,null,c.a.createElement(T.a,{data:this.state.top10_sells,columns:H,scroll:{x:1500},noHeader:!0})))),c.a.createElement(h.a,null),c.a.createElement(v.a,{sm:"5",lg:"3"},c.a.createElement(g.a,null,c.a.createElement(f.a,null,c.a.createElement(y.a,null,"Institutional Rating")),c.a.createElement(b.a,null,c.a.createElement(_.a,{strokeColor:"#b9c3cd",success:"#28C76F",percent:this.state.articles.net_holding_pct})))),c.a.createElement(h.a,null),c.a.createElement(v.a,{sm:"12",lg:"7"},c.a.createElement(g.a,{title:"Net Institutional Holdings"},c.a.createElement(f.a,null,c.a.createElement(y.a,null,"Net Institutional Holdings")),c.a.createElement(b.a,null,c.a.createElement(T.a,{data:this.state.net_inst_value,columns:z,scroll:{x:100},noHeader:!0})))),c.a.createElement(v.a,{sm:"12",lg:"5"},c.a.createElement(M,{themeColors:V,data:this.state.net_inst_by_date,title:"Net Institutional Share Holdings by Date"})),c.a.createElement(h.a,null),c.a.createElement(v.a,{sm:"20",lg:"10"},c.a.createElement(g.a,null,c.a.createElement(f.a,null,c.a.createElement(y.a,null,"Top 10 Institutional Holdings")),c.a.createElement(b.a,null,c.a.createElement(T.a,{data:this.state.top10_inst,columns:I,scroll:{x:1500},noHeader:!0})))))))):c.a.createElement(L.a,{to:"/login"})}}]),a}(c.a.Component);t.default=Object(o.b)((function(e){return{token:e.auth.token}}))(Y)},645:function(e,t,a){"use strict";var r=a(11),n=a(12),l=a(14),i=a(13),s=a(0),c=a.n(s),o=a(1217),u=a(1218),m=a(1219),d=a(1220),p=a(599),h=a.n(p),E=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).state={options:{chart:{sparkline:{enabled:!0},dropShadow:{enabled:!0,blur:3,left:1,top:1,opacity:.1}},colors:[e.props.success],plotOptions:{radialBar:{size:110,startAngle:-140,endAngle:150,hollow:{size:"77%"},track:{background:e.props.strokeColor,strokeWidth:"50%"},dataLabels:{name:{show:!1},value:{offsetY:18,color:e.props.strokeColor,fontSize:"4rem"}}}},fill:{type:"gradient",gradient:{shade:"dark",type:"horizontal",shadeIntensity:.5,gradientToColors:["#00b5b5"],inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[0,100]}},stroke:{lineCap:"round"}},series:[e.props.percent]},e}return Object(n.a)(a,[{key:"render",value:function(){return c.a.createElement(o.a,null,c.a.createElement(u.a,null,c.a.createElement(m.a,null,this.props.title)),c.a.createElement("hr",null),c.a.createElement(d.a,null,c.a.createElement(h.a,{options:this.state.options,series:[this.props.percent],type:"radialBar",height:200})))}}]),a}(c.a.Component);t.a=E},646:function(e,t,a){"use strict";var r=a(11),n=a(12),l=a(14),i=a(13),s=a(0),c=a.n(s),o=a(1217),u=a(1218),m=a(1219),d=a(1220),p=a(599),h=a.n(p),E=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).modifydata=function(e,t,a){var r=[],n=[];for(var l in e)r.push(e[l].date),0==a?n.push(Math.round(100*e[l].portfolio_wealth)/100):n.push(Math.round(100*e[l].performance)/100);return t?n:r},e}return Object(n.a)(a,[{key:"render",value:function(){var e={chart:{id:"areaChart"},xaxis:{type:"date",categories:this.modifydata(this.props.data,0,this.props.second),tickAmount:8},stroke:{curve:"smooth"},dataLabels:{enabled:!1},colors:this.props.themeColors,grid:{row:{colors:["#f3f3f3","transparent"],opacity:.5}},legend:{offsetY:-10},tooltip:{x:{format:"dd/MM/yy"}}},t=[{name:"series1",data:this.modifydata(this.props.data,1,this.props.second)}];return c.a.createElement(o.a,null,c.a.createElement(u.a,null,c.a.createElement(m.a,null,this.props.title)),c.a.createElement(d.a,null,c.a.createElement(h.a,{options:e,series:t,type:"area",height:500})))}}]),a}(c.a.Component);t.a=E},678:function(e,t,a){"use strict";var r=a(62),n=a(15),l=a(11),i=a(12),s=a(70),c=a(14),o=a(13),u=a(0),m=a.n(u),d=a(617),p=a(618),h=a.n(p),E={candlestick:"addCandlestickSeries",line:"addLineSeries",area:"addAreaSeries",bar:"addBarSeries",histogram:"addHistogramSeries"},v=["#008FFB","#00E396","#FEB019","#FF4560","#775DD0","#F86624","#A5978B"],g={layout:{backgroundColor:"#0e163b",lineColor:"#2B2B43",textColor:"#D9D9D9"},grid:{vertLines:{color:"#363c4e"},horzLines:{color:"#363c4e"}}},f={layout:{backgroundColor:"#FFFFFF",lineColor:"#2B2B43",textColor:"#191919"},grid:{vertLines:{color:"#e1ecf2"},horzLines:{color:"#e1ecf2"}}},y=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).resizeHandler=function(){var e=r.props.autoWidth&&r.chartDiv.current&&r.chartDiv.current.parentNode.clientWidth,t=r.props.autoHeight&&r.chartDiv.current?r.chartDiv.current.parentNode.clientHeight:r.props.height||500;r.chart.resize(e,t)},r.removeSeries=function(){r.series.forEach((function(e){return r.chart.removeSeries(e)})),r.series=[]},r.addSeries=function(e,t){var a=E[t],l=e.options&&e.options.color||v[r.series.length%v.length],i=r.chart[a](Object(n.a)({color:l},e.options)),s=r.handleLinearInterpolation(e.data,e.linearInterpolation);return i.setData(s),e.markers&&i.setMarkers(e.markers),e.priceLines&&e.priceLines.forEach((function(e){return i.createPriceLine(e)})),e.legend&&r.addLegend(i,l,e.legend),i},r.handleSeries=function(){var e=r.series,t=r.props;t.candlestickSeries&&t.candlestickSeries.forEach((function(t){e.push(r.addSeries(t,"candlestick"))})),t.lineSeries&&t.lineSeries.forEach((function(t){e.push(r.addSeries(t,"line"))})),t.areaSeries&&t.areaSeries.forEach((function(t){e.push(r.addSeries(t,"area"))})),t.barSeries&&t.barSeries.forEach((function(t){e.push(r.addSeries(t,"bar"))})),t.histogramSeries&&t.histogramSeries.forEach((function(t){e.push(r.addSeries(t,"histogram"))}))},r.unsubscribeEvents=function(e){var t=r.chart;t.unsubscribeClick(e.onClick),t.unsubscribeCrosshairMove(e.onCrosshairMove),t.timeScale().unsubscribeVisibleTimeRangeChange(e.onTimeRangeMove)},r.handleEvents=function(){var e=r.chart,t=r.props;t.onClick&&e.subscribeClick(t.onClick),t.onCrosshairMove&&e.subscribeCrosshairMove(t.onCrosshairMove),t.onTimeRangeMove&&e.timeScale().subscribeVisibleTimeRangeChange(t.onTimeRangeMove),e.subscribeCrosshairMove(r.handleLegends)},r.handleTimeRange=function(){var e=r.props,t=e.from,a=e.to;t&&a&&r.chart.timeScale().setVisibleRange({from:t,to:a})},r.handleLinearInterpolation=function(e,t){if(!t||e.length<2||!e[0].value)return e;var a=e[0].time,r=e[e.length-1].time,n=new Array(Math.floor((r-a)/t));n[0]=e[0];for(var l=1,i=1;i<e.length;i++){n[l++]=e[i];for(var s=e[i-1].time,c=e[i-1].value,o=e[i],u=o.time,m=o.value,d=s;d<u-t;d+=t){var p=c+(m-c)/(u-s)*(d-s);n[l++]={time:d,value:p}}}return n.filter((function(e){return e}))},r.handleUpdateChart=function(){window.removeEventListener("resize",r.resizeHandler);var e=Object(s.a)(r),t=e.chart,a=e.chartDiv,l=r.props,i=r.props.darkTheme?g:f;i=_(i,Object(n.a)({width:l.autoWidth?a.current.parentNode.clientWidth:l.width,height:l.autoHeight?a.current.parentNode.clientHeight:l.height||500},l.options)),t.applyOptions(i),r.legendDiv.current&&(r.legendDiv.current.innerHTML=""),r.legends=[],r.props.legend&&r.handleMainLegend(),r.handleSeries(),r.handleEvents(),r.handleTimeRange(),(l.autoWidth||l.autoHeight)&&window.addEventListener("resize",r.resizeHandler)},r.addLegend=function(e,t,a){r.legends.push({series:e,color:t,title:a})},r.handleLegends=function(e){var t=r.legendDiv.current;e.time&&t&&r.legends.length&&(t.innerHTML="",r.legends.forEach((function(a){var r=a.series,n=a.color,l=a.title,i=e.seriesPrices.get(r);if(void 0!==i){"object"==typeof i&&(n=i.open<i.close?"rgba(0, 150, 136, 0.8)":"rgba(255,82,82, 0.8)",i="O: ".concat(i.open,", H: ").concat(i.high,", L: ").concat(i.low,", C: ").concat(i.close));var s=document.createElement("div");s.innerText=l+" ";var c=document.createElement("span");c.style.color=n,c.innerText=" "+i,s.appendChild(c),t.appendChild(s)}})))},r.handleMainLegend=function(){if(r.legendDiv.current){var e=document.createElement("div");e.innerText=r.props.legend,r.legendDiv.current.appendChild(e)}},r.chartDiv=m.a.createRef(),r.legendDiv=m.a.createRef(),r.chart=null,r.series=[],r.legends=[],r}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.chart=Object(d.a)(this.chartDiv.current),this.handleUpdateChart(),this.resizeHandler()}},{key:"componentDidUpdate",value:function(e){this.props.autoWidth||this.props.autoHeight||window.removeEventListener("resize",this.resizeHandler),h()([e.onCrosshairMove,e.onTimeRangeMove,e.onClick],[this.props.onCrosshairMove,this.props.onTimeRangeMove,this.props.onClick])||this.unsubscribeEvents(e),h()([e.options,e.darkTheme,e.candlestickSeries,e.lineSeries,e.areaSeries,e.barSeries,e.histogramSeries],[this.props.options,this.props.darkTheme,this.props.candlestickSeries,this.props.lineSeries,this.props.areaSeries,this.props.barSeries,this.props.histogramSeries])?e.from===this.props.from&&e.to===this.props.to||this.handleTimeRange():(this.removeSeries(),this.handleUpdateChart())}},{key:"render",value:function(){var e=this.props.darkTheme?g.layout.textColor:f.layout.textColor;return m.a.createElement("div",{ref:this.chartDiv,style:{position:"relative"}},m.a.createElement("div",{ref:this.legendDiv,style:{position:"absolute",zIndex:2,color:e,padding:10}}))}}]),a}(m.a.Component);t.a=y;var b=function(e){return e&&"object"===typeof e&&!Array.isArray(e)},_=function e(t,a){var n=Object.assign({},t);return b(t)&&b(a)&&Object.keys(a).forEach((function(l){b(a[l])&&l in t?n[l]=e(t[l],a[l]):Object.assign(n,Object(r.a)({},l,a[l]))})),n}}}]);
//# sourceMappingURL=22.a3d9ffbd.chunk.js.map