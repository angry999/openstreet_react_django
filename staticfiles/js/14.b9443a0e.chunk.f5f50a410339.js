(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[14],{1226:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(11),r=a(12),s=a(14),l=a(13),c=a(93),d=a(53),u=a(31),h=a(23),p=(a(311),function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"fallback-spinner"},i.a.createElement("div",{className:"loading component-loader"},i.a.createElement("div",{className:"effect-1 effects"}),i.a.createElement("div",{className:"effect-2 effects"}),i.a.createElement("div",{className:"effect-3 effects"})))}}]),a}(i.a.Component)),m=a(167),f=a(1209),y=a(1210),g=a(1211),v=a(1212),b=a(1213),w=a(1214),q=a(1215),k=a(1216),E=a(32),x=(a(642),a(675),a(676)),O=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement(f.a,null,x.a.filter((function(t){return t.did==e.props.match.params.categoryId})).map((function(e){return i.a.createElement(y.a,{lg:"4",md:"6",sm:"12",key:e.id},i.a.createElement(g.a,null,i.a.createElement(v.a,null,i.a.createElement(b.a,null,e.title)),i.a.createElement(w.a,{className:"knowledge-base-category"},i.a.createElement(q.a,{flush:!0},e.questions.map((function(t){return i.a.createElement(k.a,{key:t.qid},i.a.createElement(E.a,{to:"/pages/knowledge-base/category/questions/"+e.id+"/"+t.qid},t.question))}))))))}))))}}]),a}(i.a.Component),R=a(71),I=a(200),j=a(201),A=(a(941),function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={category:x.a.filter((function(e){return e.id==n.props.match.params.categoryId}))[0],questionId:n.props.match.params.questionId},n.handleChange=n.handleChange.bind(Object(R.a)(n)),n.handleNext=n.handleNext.bind(Object(R.a)(n)),n.handlePrev=n.handlePrev.bind(Object(R.a)(n)),n}return Object(r.a)(a,[{key:"handleChange",value:function(e){this.setState({questionId:e})}},{key:"handleNext",value:function(e){for(var t=0;t<this.state.category.questions.length;t++)Number(this.state.category.questions[t].qid)===Number(this.state.questionId)&&t<this.state.category.questions.length-1&&this.setState({questionId:this.state.category.questions[t+1].qid})}},{key:"handlePrev",value:function(e){for(var t=0;t<this.state.category.questions.length;t++)Number(this.state.category.questions[t].qid)===Number(this.state.questionId)&&t>0&&this.setState({questionId:this.state.category.questions[t-1].qid})}},{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement(f.a,null,i.a.createElement(y.a,{lg:"3",md:"5",sm:"12"},i.a.createElement(g.a,null,i.a.createElement(v.a,null,i.a.createElement(b.a,null,"Related Questions")),i.a.createElement(w.a,{className:"knowledge-base-category"},i.a.createElement(q.a,{flush:!0},this.state.category.questions.filter((function(t){return t.qid!=e.state.questionId})).map((function(t){return i.a.createElement(k.a,{key:t.qid,tag:"a",href:"#",onClick:function(a){return e.handleChange(t.qid)}},t.question)})))))),i.a.createElement(y.a,{lg:"9",md:"7",sm:"12"},i.a.createElement(g.a,null,i.a.createElement(v.a,null,i.a.createElement("h1",null,this.state.category.questions.filter((function(t){return t.qid==e.state.questionId}))[0].question),i.a.createElement("p",null,"Last updated on 10 Dec 2018")),i.a.createElement(w.a,null,i.a.createElement("p",null,this.state.category.questions.filter((function(t){return t.qid==e.state.questionId}))[0].answer),this.state.category.questions.filter((function(t){return t.qid==e.state.questionId}))[0].subanswers&&this.state.category.questions.filter((function(t){return t.qid==e.state.questionId}))[0].subanswers.map((function(e){return i.a.createElement("p",null,"\u2022 ",e)})),i.a.createElement("div",{className:"d-flex justify-content-between mt-2"},i.a.createElement(E.a,{to:"#",onClick:this.handlePrev},i.a.createElement(I.a,{size:15}),i.a.createElement("span",{className:"align-middle"},"Previous Article")),i.a.createElement(E.a,{to:"#",onClick:this.handleNext},i.a.createElement("span",{className:"align-middle"},"Next Article"),i.a.createElement(j.a,{size:15}))))))))}}]),a}(i.a.Component)),C=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(3),a.e(9)]).then(a.bind(null,1224))})),W=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(1),a.e(8),a.e(17)]).then(a.bind(null,1218))})),P=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(2),a.e(12),a.e(21)]).then(a.bind(null,1227))})),z=Object(n.lazy)((function(){return Promise.all([a.e(16),a.e(19)]).then(a.bind(null,1229))})),T=Object(n.lazy)((function(){return a.e(20).then(a.bind(null,1221))})),S=Object(n.lazy)((function(){return Promise.all([a.e(3),a.e(15)]).then(a.bind(null,1230))})),N=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(4),a.e(10)]).then(a.bind(null,1222))})),F=Object(n.lazy)((function(){return Promise.all([a.e(3),a.e(18)]).then(a.bind(null,1231))})),H=Object(n.lazy)((function(){return a.e(22).then(a.bind(null,1228))})),D=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(4),a.e(11)]).then(a.bind(null,1223))})),L=Object(h.b)((function(e){return{token:e.auth.token}}))((function(e){var t=e.component,a=e.fullLayout,o=Object(c.a)(e,["component","fullLayout"]);return i.a.createElement(d.b,Object.assign({},o,{render:function(e){return i.a.createElement(m.a.Consumer,null,(function(o){var r=!0===a?o.fullLayout:"horizontal"===o.state.activeLayout?o.horizontalLayout:o.VerticalLayout;return i.a.createElement(r,Object.assign({},e,{permission:e.user}),i.a.createElement(n.Suspense,{fallback:i.a.createElement(p,null)},i.a.createElement(t,e)))}))}}))})),M=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement(d.c,{history:u.a},i.a.createElement(d.d,null,i.a.createElement(d.b,{exact:!0,path:"/",component:N}),i.a.createElement(L,{path:"/dashboard",component:W}),i.a.createElement(L,{path:"/articleview/:articleID",component:P}),i.a.createElement(L,{path:"/portfolios",component:C}),i.a.createElement(L,{path:"/login",component:S,fullLayout:!0}),i.a.createElement(L,{path:"/register",component:F,fullLayout:!0}),i.a.createElement(L,{path:"/user/edit",component:z}),i.a.createElement(L,{path:"/user/view",component:T}),i.a.createElement(L,{path:"/knowledgebase",component:H,exact:!0}),i.a.createElement(L,{path:"/pages/knowledge-base/category/:categoryId",component:O,exact:!0}),i.a.createElement(L,{path:"/pages/knowledge-base/category/questions/:categoryId/:questionId",component:A}),i.a.createElement(d.b,{component:D})))}}]),a}(i.a.Component),V=a(300),Y=a(1204);V.a.Ripple=function(e){var t=e.rippleColor,a=e.during,n=e.block,o=Object(c.a)(e,["rippleColor","during","block"]);return i.a.createElement(Y.a,{color:t||"rgba(255, 255, 255, .5)",during:a,className:"".concat(n?"d-block":"")},i.a.createElement(V.a,o))};a(942),a(943),a(944),t.default=function(e){return i.a.createElement(M,null)}},642:function(e,t,a){"use strict";var n=a(11),i=a(12),o=a(14),r=a(13),s=a(0),l=a.n(s);l.a.Component},675:function(e,t,a){},676:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return d}));var n=a(935),i=a.n(n),o=a(936),r=a.n(o),s=a(937),l=a.n(s),c=(a(938),a(939),a(940),[{id:1,img:i.a,title:"Company Research Report",text:"Muffin lemon drops chocolate carrot cake chocolate bar sweet roll."},{id:2,img:r.a,title:"Portfolio Generation and Tracking",text:"Gingerbread sesame snaps wafer souffl\xe9. Macaroon brownie ice cream."},{id:3,img:l.a,title:"Execution, Rebalancing and Exiting",text:"cotton candy caramels danish chocolate cake pie candy. Lemon drops tart.."}]),d=[{id:1,did:1,title:"Research Reports:",questions:[{qid:11,question:"What kind of research does openstreet provide?",answer:"Openstreet provides top-level ratings matrix for stocks as well as Stock-specific research which is broken down into company analysis, insider analysis and institutional analysis."},{qid:12,question:"What does the top-level ratings matrix consist of and how is it computed? ",answer:"The top-level rating matrix is computed through the aggregation of the metrics in the following 8 risk categories by listing, then calculation of the CDF for each of the listings, based on the distribution obtained."},{qid:13,question:"What is the universe of stocks that are screened in this report? ",answer:"Openstreet mainly analyzes stocks in the S&P 500 index. These stocks are the major movers of the stock market."},{qid:14,question:"What data is used to prepare the research report?",answer:"OpenStreet derives analytics from Quandl, Sharadar fundamental data which is extracted, standardized and organized from the company filings."},{qid:15,question:"How often are the research reports updated? ",answer:"Research reports are updated quarterly. The underlying data that is derived from the company filings is also updated quarterly."}]},{id:3,did:1,title:"Insider Analysis: ",questions:[{qid:31,question:"What is provided under insider analysis?",answer:"Insider Analysis provides the top 10 insider trades on the buy and sell-side and the trend in aggregate insider trades. "},{qid:32,question:"Why is insider analysis important? ",answer:"Academic studies with US data suggest insiders can earn above-normal profits on trades. Findings suggest that company insiders may be better informed than average investors about their firms\u2019 prospects. Lakonishok and Lee, \u201cAre Insider Trades Informative?\u201d The Review of Financial Studies, spring 2001"}]},{id:4,did:1,title:"Institutional Analysis:",questions:[{qid:41,question:"What is provided under institutional analysis? ",answer:"Institutional Analysis provides the aggregate institutional holdings by security type and the trend in institutional shares held. It also provides details of the top 10 institutions holding that company\u2019s stock."},{qid:42,question:"Why is institutional analysis important? ",answer:"Tracking and analyzing the flow of institutional funds into the company\u2019s stock provides potentially profitable insights into where \u201csmart money\u201d is investing."}]},{id:2,did:1,title:"Company Analysis:",questions:[{qid:21,question:"What is Company Health and how is it computed? ",answer:"Company health helps assess the company\u2019s good standing. OpenStreet examines:",subanswers:["5yr Revenue Growth calculated as an increase in sales in one year compared to sales of a previous year averaged over 5 years","Uncertainty in Revenue Growth measures annualized volatility in revenue growth","5yr Average Profit Margin represents the percentage of sales turned into profits, averaged over 5 years","5yr Average Market Share growth is the percent of total sales in an industry generated by this particular company, averaged over 5 years"]},{qid:22,question:"What is Company Yield and how is it computed? ",answer:"Company yield helps assess the company\u2019s cash flow and how it decides to distribute yields among shareholders. OpenStreet examines:",subanswers:["The 5yr Average Dividend Yield, expressed as a percentage, shows how much the company pays out in dividends each year, relative to its stock price, averaged over 5 years ","A 5yr Average Earnings Yield refers to the earnings per share for the most recent 12-month period, divided by the current market price per share, averaged over 5 years","The 5yr Average Dividend Payout Ratio is the comparative ratio of the total amount of dividends paid out to shareholders relative to net income, averaged over 5 years","A 5yr Average Free Cash Flow (FCF) represents the cash a company generates after accounting for cash outflows to support operations and maintain its capital assets, averaged over 5 years"]},{qid:23,question:"What is Company Quality and how is it computed?",answer:"Company quality helps assess the company\u2019s debt levels and return on equity. OpenStreet examines:",subanswers:["The 5yr Average Debt-to-Equity (D/E) ratio, calculated by dividing a company\u2019s total liabilities by its shareholder equity, averaged over 5 years","A 5yr Average Return on Invested Capital (ROIC) is a calculation used to assess efficiency at allocating the capital under the company\u2019s control toward profitable investments, averaged over 5 years","The 5yr Average Growth in Return on Equity (ROE) measures financial performance calculated by dividing net income by shareholder\u2019s equity. OpenStreet calculates y-o-y growth and averages over 5 years","Uncertainty in ROE Growth measures the annualized volatility in ROE growth"]},{qid:24,question:"What is Industry Rank and how is it computed? ",answer:"Industry Rank helps assess how the company is fairing compared to its peers in the same industry. OpenStreet examines Value, Quality and Profitability to rank the stocks.",subanswers:["Value considers book-to-price, sales-to-price, and free cash flow","Quality considers return on equity, equity-to-debt, and return on invested capital","Profitability considers earnings yield and net profit margin"]},{qid:25,question:"Why is industry Rank important? ",answer:"Factors capture risk premia i.e., stocks and portfolios that historically demonstrate excess market returns in the long-term. These transparent, rules-based systems can help screen specific stocks with favorable characteristics. Backed by powerful empirical results, the industry rank factor provides replicability, simple implementation, and works for traditional active and passive mandates. "},{qid:26,question:"What is Fair Value and how is it computed? ",answer:"Fair Value helps assess the fair price of the company\u2019s stock. OpenStreet employs two methods:",subanswers:["Fair Value by Dividend Discount Model (DDM) based on the present value of expected dividends, adjusted for growth and volatility. The DDM model discounts expected future dividends to present values, thus estimating if shares are over or undervalued.","Fair Value by Free Cash Flow Model (FCFM) uses the company\u2019s intrinsic value as equal to the present value of free cash flow. The net cash flow available for distribution to stockholders, adjusted for growth and volatility"]},{qid:27,question:"What is Market Risk and how is it computed?",answer:"Risk helps assess the uncertainty of the company\u2019s stock price.",subanswers:["Annualized Volatility is the annualized uncertainty in price movements","Max Drawdown is the maximum downward movement over past 5 years","Correlation with Market is how closely the company\u2019s stock tracks market movements"]},{qid:28,question:"Why is Market Risk important?",answer:"We track market risk to determine if other prospective shareholders might be willing to offer less to own a stock than your offer. We must protect ourselves from this risk by owning stocks with historically smaller drawdowns and less correlation with the market as a whole. "}]},{id:5,did:2,title:"Portfolio and Portfolio Rule List:",questions:[{qid:51,question:"What is a portfolio and what are portfolio rules? ",answer:"A portfolio is a group of assets that represent a person or entity\u2019s holdings. Portfolio rules are a list of conditions applied on an asset universe to derive a portfolio. For Eg., rule: select stocks that have \u2018company health\u2019 greater than 90; selects stocks where the company health rating is greater than 90. You could chain two or more such rules to obtain a desirable portfolio.  "},{qid:52,question:"What parameters are needed to generate a portfolio? ",answer:"To generate a portfolio, you need the allocation or the amount of funds you would like to allocate to the portfolio. Next, you want the list of assets you would like to add to your holdings. You also need the weights for each assets that you are adding to the portfolio. In the openstreet form, you are also requested an effective date and name for the portfolio. The effective date determines when the portfolio comes into existence. If you enter an older date, the prices of assets from that date will be used as entry price for assets."}]},{id:6,did:2,title:"Tracking performance: ",questions:[{qid:61,question:"What are the main stats and graphs that are used to track performance of a portfolio? ",answer:"Performance of a portfolio is tracked using the portfolio wealth graph. The stats used are Net Value, Change, Historical Return, Historical Risk, Historical Sharpe, Aggregate Industry Rank, Portfolio Health, Portfolio Yield, Portfolio Quality, Insider Rating, Institutional Rating, Fair Value Rating and Aggregate Risk Rating. "},{qid:62,question:"What is Historical Return and how is it computed? ",answer:"Historical Return is the annualized return over the last 5 years for the portfolio. The annualized return formula is calculated as a geometric average to show what an investor would earn over a period of time if the annual return was compounded."},{qid:63,question:"What is Historical Risk and how is it computed? ",answer:"Historical Risk is the annualized risk over the last 5 years for the portfolio. A stock's risk is the variation in its price over a period of time. For example, one stock may have a tendency to swing wildly higher and lower, while another stock may move in much steadier, less turbulent way. Both stocks may end up at the same price at the end of day, but their path to that point can vary wildly. To present this volatility in annualized terms, we simply need to multiply our daily standard deviation by the square root of 252."},{qid:64,question:"What is Sharpe ratio and how is it computed?",answer:"The Sharpe ratio was developed by Nobel laureate William F. Sharpe and is used to help investors understand the return of an investment compared to its risk. The ratio is the average return earned in excess of the risk-free rate per unit of volatility or total risk."},{qid:65,question:"Why is Sharpe ratio important?",answer:"The Sharpe ratio can help explain whether a portfolio's excess returns are due to smart investment decisions or a result of too much risk. Although one portfolio or fund can enjoy higher returns than its peers, it is only a good investment if those higher returns do not come with an excess of additional risk."},{qid:66,question:"How is the Wealth Graph computed?  ",answer:"Wealth graph is the portfolio value computed daily over a historical period of 5 years. It is computed by aggregating the value for each stock in the portfolio everyday for 5 years."},{qid:67,question:"How are Aggregate Risk scores computed? ",answer:"Aggregate risk scores are obtained by computing the weighted average of the risk rating across the stocks in the portfolio. "}]},{id:7,did:3,title:"Execution:",questions:[{qid:71,question:"How is the portfolio executed? ",answer:"Portfolio is executed by placing market buy orders on the names in the portfolio with the given stock shares. In openstreet, portfolios are executed via TD Ameritrade API. User must first create an account with TD Ameritrade and then he/she will be prompted to connect the brokerage account with openstreet before executing the portfolio. "},{qid:72,question:"How to check if the portfolio executed correctly?",answer:"Once the portfolio is executed, the recent orders sent will be displayed on the portfolios page which shows the names of the executed portfolio. You could also check with your brokerage if the orders have been executed correctly."},{qid:73,question:"How to update the portfolio according to the executions? ",answer:"You can update the portfolio according to the executions by hitting sync. Sync checks at your currently positions and makes changes in the portfolio saved on openstreet."}]},{id:8,did:3,title:"Rebalancing:",questions:[{qid:81,question:"What is rebalancing? ",answer:"Rebalancing is the process of realigning the weightings of a portfolio of assets. Rebalancing involves periodically buying or selling assets in a portfolio to maintain an original or desired level of asset allocation or risk."},{qid:82,question:"How is rebalancing carried out? ",answer:"Rebalancing is carried out by re-applying the portfolio rules and making the necessary changes in the portfolio by buying and selling assets."},{qid:83,question:"How often can I rebalance? ",answer:"It is recommended to rebalance quarterly or semi-annually. The underlying data changes quarterly."}]},{id:9,did:3,title:"Exiting: ",questions:[{qid:91,question:"What is the process of exiting the portfolio allocations? ",answer:"Exiting the portfolio involves selling all the stakes in the portfolio holdings. Once you hit the exit portfolio button, openstreet automatically sends orders to sell the portfolio constituents."},{qid:92,question:"What happens after I exit? ",answer:"After exiting, the portfolio listing is returned to virtual portfolio state."},{qid:93,question:"Can I execute the portfolio again after exiting? ",answer:"Yes, you can execute the portfolio again by hitting the execute button."}]}]},935:function(e,t,a){e.exports=a.p+"static/media/graphic-1.58c221eb.png"},936:function(e,t,a){e.exports=a.p+"static/media/graphic-2.6dd844b4.png"},937:function(e,t,a){e.exports=a.p+"static/media/graphic-3.32e0e0cb.png"},938:function(e,t,a){e.exports=a.p+"static/media/graphic-4.0112e680.png"},939:function(e,t,a){e.exports=a.p+"static/media/graphic-5.e6415499.png"},940:function(e,t,a){e.exports=a.p+"static/media/graphic-6.4df5e78b.png"},941:function(e,t,a){e.exports=a.p+"static/media/kb-article.034f99d6.jpg"}}]);
//# sourceMappingURL=14.b9443a0e.chunk.js.map