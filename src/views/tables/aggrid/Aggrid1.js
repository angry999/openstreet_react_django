import React, { useState } from "react";
import Checkbox from "../../../components/@vuexy/checkbox/CheckboxesVuexy"
import { Check } from "react-feather"
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import {
  Card,
  CardImg,
  CardBody,
  CardHeader,
  CardTitle,
  Input,
  Button,
  UncontrolledDropdown,
  UncontrolledButtonDropdown,
  DropdownMenu,
  Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
  DropdownItem,
  DropdownToggle,
  Col,
  FormGroup,
  Form,
  Spinner,
  Container,
  Row
} from "reactstrap";
import { Player } from 'video-react';
import { AgGridReact } from "ag-grid-react";
import { ContextLayout } from "../../../utility/context/Layout";
import { ChevronDown } from "react-feather";
import axios from "axios";
import "../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/light.css";
import "../../../assets/scss/plugins/forms/flatpickr/flatpickr.scss"
import { LoadingOutlined } from '@ant-design/icons';
import { List,Divider } from 'antd';
import * as Icon from 'react-feather';
import Tour, { STATUS } from "react-joyride"
import "../../../assets/scss/plugins/extensions/react-tour.scss"
import "../../../../node_modules/video-react/dist/video-react.css";


const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
const isoCountries = {
  'AF' : 'Afghanistan',
  'AX' : 'Aland Islands',
  'AL' : 'Albania',
  'DZ' : 'Algeria',
  'AS' : 'American Samoa',
  'AD' : 'Andorra',
  'AO' : 'Angola',
  'AI' : 'Anguilla',
  'AQ' : 'Antarctica',
  'AG' : 'Antigua And Barbuda',
  'AR' : 'Argentina',
  'AM' : 'Armenia',
  'AW' : 'Aruba',
  'AU' : 'Australia',
  'AT' : 'Austria',
  'AZ' : 'Azerbaijan',
  'BS' : 'Bahamas',
  'BH' : 'Bahrain',
  'BD' : 'Bangladesh',
  'BB' : 'Barbados',
  'BY' : 'Belarus',
  'BE' : 'Belgium',
  'BZ' : 'Belize',
  'BJ' : 'Benin',
  'BM' : 'Bermuda',
  'BT' : 'Bhutan',
  'BO' : 'Bolivia',
  'BA' : 'Bosnia And Herzegovina',
  'BW' : 'Botswana',
  'BV' : 'Bouvet Island',
  'BR' : 'Brazil',
  'IO' : 'British Indian Ocean Territory',
  'BN' : 'Brunei Darussalam',
  'BG' : 'Bulgaria',
  'BF' : 'Burkina Faso',
  'BI' : 'Burundi',
  'KH' : 'Cambodia',
  'CM' : 'Cameroon',
  'CA' : 'Canada',
  'CV' : 'Cape Verde',
  'KY' : 'Cayman Islands',
  'CF' : 'Central African Republic',
  'TD' : 'Chad',
  'CL' : 'Chile',
  'CN' : 'China',
  'CX' : 'Christmas Island',
  'CC' : 'Cocos (Keeling) Islands',
  'CO' : 'Colombia',
  'KM' : 'Comoros',
  'CG' : 'Congo',
  'CD' : 'Congo, Democratic Republic',
  'CK' : 'Cook Islands',
  'CR' : 'Costa Rica',
  'CI' : 'Cote D\'Ivoire',
  'HR' : 'Croatia',
  'CU' : 'Cuba',
  'CY' : 'Cyprus',
  'CZ' : 'Czech Republic',
  'DK' : 'Denmark',
  'DJ' : 'Djibouti',
  'DM' : 'Dominica',
  'DO' : 'Dominican Republic',
  'EC' : 'Ecuador',
  'EG' : 'Egypt',
  'SV' : 'El Salvador',
  'GQ' : 'Equatorial Guinea',
  'ER' : 'Eritrea',
  'EE' : 'Estonia',
  'ET' : 'Ethiopia',
  'FK' : 'Falkland Islands (Malvinas)',
  'FO' : 'Faroe Islands',
  'FJ' : 'Fiji',
  'FI' : 'Finland',
  'FR' : 'France',
  'GF' : 'French Guiana',
  'PF' : 'French Polynesia',
  'TF' : 'French Southern Territories',
  'GA' : 'Gabon',
  'GM' : 'Gambia',
  'GE' : 'Georgia',
  'DE' : 'Germany',
  'GH' : 'Ghana',
  'GI' : 'Gibraltar',
  'GR' : 'Greece',
  'GL' : 'Greenland',
  'GD' : 'Grenada',
  'GP' : 'Guadeloupe',
  'GU' : 'Guam',
  'GT' : 'Guatemala',
  'GG' : 'Guernsey',
  'GN' : 'Guinea',
  'GW' : 'Guinea-Bissau',
  'GY' : 'Guyana',
  'HT' : 'Haiti',
  'HM' : 'Heard Island & Mcdonald Islands',
  'VA' : 'Holy See (Vatican City State)',
  'HN' : 'Honduras',
  'HK' : 'Hong Kong',
  'HU' : 'Hungary',
  'IS' : 'Iceland',
  'IN' : 'India',
  'ID' : 'Indonesia',
  'IR' : 'Iran, Islamic Republic Of',
  'IQ' : 'Iraq',
  'IE' : 'Ireland',
  'IM' : 'Isle Of Man',
  'IL' : 'Israel',
  'IT' : 'Italy',
  'JM' : 'Jamaica',
  'JP' : 'Japan',
  'JE' : 'Jersey',
  'JO' : 'Jordan',
  'KZ' : 'Kazakhstan',
  'KE' : 'Kenya',
  'KI' : 'Kiribati',
  'KR' : 'Korea',
  'KW' : 'Kuwait',
  'KG' : 'Kyrgyzstan',
  'LA' : 'Lao People\'s Democratic Republic',
  'LV' : 'Latvia',
  'LB' : 'Lebanon',
  'LS' : 'Lesotho',
  'LR' : 'Liberia',
  'LY' : 'Libyan Arab Jamahiriya',
  'LI' : 'Liechtenstein',
  'LT' : 'Lithuania',
  'LU' : 'Luxembourg',
  'MO' : 'Macao',
  'MK' : 'Macedonia',
  'MG' : 'Madagascar',
  'MW' : 'Malawi',
  'MY' : 'Malaysia',
  'MV' : 'Maldives',
  'ML' : 'Mali',
  'MT' : 'Malta',
  'MH' : 'Marshall Islands',
  'MQ' : 'Martinique',
  'MR' : 'Mauritania',
  'MU' : 'Mauritius',
  'YT' : 'Mayotte',
  'MX' : 'Mexico',
  'FM' : 'Micronesia, Federated States Of',
  'MD' : 'Moldova',
  'MC' : 'Monaco',
  'MN' : 'Mongolia',
  'ME' : 'Montenegro',
  'MS' : 'Montserrat',
  'MA' : 'Morocco',
  'MZ' : 'Mozambique',
  'MM' : 'Myanmar',
  'NA' : 'Namibia',
  'NR' : 'Nauru',
  'NP' : 'Nepal',
  'NL' : 'Netherlands',
  'AN' : 'Netherlands Antilles',
  'NC' : 'New Caledonia',
  'NZ' : 'New Zealand',
  'NI' : 'Nicaragua',
  'NE' : 'Niger',
  'NG' : 'Nigeria',
  'NU' : 'Niue',
  'NF' : 'Norfolk Island',
  'MP' : 'Northern Mariana Islands',
  'NO' : 'Norway',
  'OM' : 'Oman',
  'PK' : 'Pakistan',
  'PW' : 'Palau',
  'PS' : 'Palestinian Territory, Occupied',
  'PA' : 'Panama',
  'PG' : 'Papua New Guinea',
  'PY' : 'Paraguay',
  'PE' : 'Peru',
  'PH' : 'Philippines',
  'PN' : 'Pitcairn',
  'PL' : 'Poland',
  'PT' : 'Portugal',
  'PR' : 'Puerto Rico',
  'QA' : 'Qatar',
  'RE' : 'Reunion',
  'RO' : 'Romania',
  'RU' : 'Russian Federation',
  'RW' : 'Rwanda',
  'BL' : 'Saint Barthelemy',
  'SH' : 'Saint Helena',
  'KN' : 'Saint Kitts And Nevis',
  'LC' : 'Saint Lucia',
  'MF' : 'Saint Martin',
  'PM' : 'Saint Pierre And Miquelon',
  'VC' : 'Saint Vincent And Grenadines',
  'WS' : 'Samoa',
  'SM' : 'San Marino',
  'ST' : 'Sao Tome And Principe',
  'SA' : 'Saudi Arabia',
  'SN' : 'Senegal',
  'RS' : 'Serbia',
  'SC' : 'Seychelles',
  'SL' : 'Sierra Leone',
  'SG' : 'Singapore',
  'SK' : 'Slovakia',
  'SI' : 'Slovenia',
  'SB' : 'Solomon Islands',
  'SO' : 'Somalia',
  'ZA' : 'South Africa',
  'GS' : 'South Georgia And Sandwich Isl.',
  'ES' : 'Spain',
  'LK' : 'Sri Lanka',
  'SD' : 'Sudan',
  'SR' : 'Suriname',
  'SJ' : 'Svalbard And Jan Mayen',
  'SZ' : 'Swaziland',
  'SE' : 'Sweden',
  'CH' : 'Switzerland',
  'SY' : 'Syrian Arab Republic',
  'TW' : 'Taiwan',
  'TJ' : 'Tajikistan',
  'TZ' : 'Tanzania',
  'TH' : 'Thailand',
  'TL' : 'Timor-Leste',
  'TG' : 'Togo',
  'TK' : 'Tokelau',
  'TO' : 'Tonga',
  'TT' : 'Trinidad And Tobago',
  'TN' : 'Tunisia',
  'TR' : 'Turkey',
  'TM' : 'Turkmenistan',
  'TC' : 'Turks And Caicos Islands',
  'TV' : 'Tuvalu',
  'UG' : 'Uganda',
  'UA' : 'Ukraine',
  'AE' : 'United Arab Emirates',
  'GB' : 'United Kingdom',
  'US' : 'United States',
  'UM' : 'United States Outlying Islands',
  'UY' : 'Uruguay',
  'UZ' : 'Uzbekistan',
  'VU' : 'Vanuatu',
  'VE' : 'Venezuela',
  'VN' : 'Viet Nam',
  'VG' : 'Virgin Islands, British',
  'VI' : 'Virgin Islands, U.S.',
  'WF' : 'Wallis And Futuna',
  'EH' : 'Western Sahara',
  'YE' : 'Yemen',
  'ZM' : 'Zambia',
  'ZW' : 'Zimbabwe'
};

const params = {
  "colorTheme": "dark",
  "dateRange": "12M",
  "showChart": true,
  "locale": "en",
  "largeChartUrl": "",
  "isTransparent": false,
  "showSymbolLogo": true,
  "width": "400",
  "height": "660",
  "plotLineColorGrowing": "rgba(25, 118, 210, 1)",
  "plotLineColorFalling": "rgba(25, 118, 210, 1)",
  "gridLineColor": "rgba(42, 46, 57, 1)",
  "scaleFontColor": "rgba(120, 123, 134, 1)",
  "belowLineFillColorGrowing": "rgba(33, 150, 243, 0.12)",
  "belowLineFillColorFalling": "rgba(33, 150, 243, 0.12)",
  "symbolActiveColor": "rgba(33, 150, 243, 0.12)",
  "tabs": [
    {
      "title": "Indices",
      "symbols": [
        {
          "s": "FOREXCOM:SPXUSD",
          "d": "S&P 500"
        },
        {
          "s": "FOREXCOM:NSXUSD",
          "d": "Nasdaq 100"
        },
        {
          "s": "FOREXCOM:DJI",
          "d": "Dow 30"
        },
        {
          "s": "INDEX:NKY",
          "d": "Nikkei 225"
        },
        {
          "s": "INDEX:DEU30",
          "d": "DAX Index"
        },
        {
          "s": "FOREXCOM:UKXGBP",
          "d": "FTSE 100"
        }
      ],
      "originalTitle": "Indices"
    },
    {
      "title": "Commodities",
      "symbols": [
        {
          "s": "CME_MINI:ES1!",
          "d": "S&P 500"
        },
        {
          "s": "CME:6E1!",
          "d": "Euro"
        },
        {
          "s": "COMEX:GC1!",
          "d": "Gold"
        },
        {
          "s": "NYMEX:CL1!",
          "d": "Crude Oil"
        },
        {
          "s": "NYMEX:NG1!",
          "d": "Natural Gas"
        },
        {
          "s": "CBOT:ZC1!",
          "d": "Corn"
        }
      ],
      "originalTitle": "Commodities"
    },
    {
      "title": "Bonds",
      "symbols": [
        {
          "s": "CME:GE1!",
          "d": "Eurodollar"
        },
        {
          "s": "CBOT:ZB1!",
          "d": "T-Bond"
        },
        {
          "s": "CBOT:UB1!",
          "d": "Ultra T-Bond"
        },
        {
          "s": "EUREX:FGBL1!",
          "d": "Euro Bund"
        },
        {
          "s": "EUREX:FBTP1!",
          "d": "Euro BTP"
        },
        {
          "s": "EUREX:FGBM1!",
          "d": "Euro BOBL"
        }
      ],
      "originalTitle": "Bonds"
    },
    {
      "title": "Forex",
      "symbols": [
        {
          "s": "FX:EURUSD"
        },
        {
          "s": "FX:GBPUSD"
        },
        {
          "s": "FX:USDJPY"
        },
        {
          "s": "FX:USDCHF"
        },
        {
          "s": "FX:AUDUSD"
        },
        {
          "s": "FX:USDCAD"
        }
      ],
      "originalTitle": "Forex"
    }
  ]
}

const getCountryName = (countryCode) => {
  if (isoCountries.hasOwnProperty(countryCode)) {
      return isoCountries[countryCode];
  } else {
      return countryCode;
  }
}
class AggridTable extends React.Component {
  state = {
    error_state: false,
    rowData: [],
    paginationPageSize: 20,
    name: "",
    docs: [],
    allocation: "",
    basicPicker: "",
    currenPageSize: "",
    getPageSize: "",
    isLoading: true,
    isPostLoading: true,
    searchText: '',
    company_health: "0",
    company_yield: "0",
    fair_value_score: "0",
    company_quality: "0",
    risk_score: "0",
    industry:"",
    industry_rank: "100",
    net_value_executed_pct: "0",
    net_holding_pct: "0",
    isTouropen: false,
    defaultColDef: {
      sortable: true,
      editable: false,
      resizable: true,
      suppressMenu: true
    },
    columnDefs: [
      {
        headerName: "Ticker",
        field: "ticker",
        width: 150,
        cellRenderer: function (params) {
          let keyData = params.value;
          let newLink = `<a href="/articleview/${keyData}">${keyData}</a>`;
          return newLink;
        },
        filter: false,
        checkboxSelection:true
        
      },
      {
        headerName: "Name",
        field: "ticker_name",
        filter: true,
        filterParams: {
          filterOptions: [
            'contains'
          ],
          suppressAndOrCondition: true,
        },
        width: 200,
        // pinned: window.innerWidth > 992 ? "left" : false
      },
      {
        headerName: "Industry",
        field: "industry",
        filter: true,
        filterParams: {
          filterOptions: [
            'contains'
          ],
          suppressAndOrCondition: true,
        },
        width: 300,
        // pinned: window.innerWidth > 992 ? "left" : false
      },
      {
        headerName: "Health Rating",
        field: "company_health",
        filter: "agNumberColumnFilter",
        filterParams: {
          filterOptions: [
            'greaterThan'
          ],
          suppressAndOrCondition: true,
        },
        width: 200
      },
      {
        headerName: "Yield Rating",
        field: "company_yield",
        filter: "agNumberColumnFilter",
        filterParams: {
          filterOptions: [
            'greaterThan'
          ],
          suppressAndOrCondition: true,
        },
        width: 140
      },
      {
        headerName: "Quality Rating",
        field: "company_quality",
        filter: "agNumberColumnFilter",
        filterParams: {
          filterOptions: [
            'greaterThan'
          ],
          suppressAndOrCondition: true,
        },
        width: 200
      },
      {
        headerName: "Industry Rank",
        field: "industry_rank",
        filter: "agNumberColumnFilter",
        filterParams: {
          filterOptions: [
            'lessThan'
          ],
          suppressAndOrCondition: true,
        },
        width: 180
      },
      {
        headerName: "Fair Value Rating",
        field: "fair_value_score",
        filter: "agNumberColumnFilter",
        filterParams: {
          filterOptions: [
            'greaterThan'
          ],
          suppressAndOrCondition: true,
        },
        width: 200
      },
      {
        headerName: "Risk Rating",
        field: "risk_score",
        filter: "agNumberColumnFilter",
        filterParams: {
          filterOptions: [
            'greaterThan'
          ],
          suppressAndOrCondition: true,
        },
        width: 140
      },
      {
        headerName: "Insider Rating",
        field: "net_value_executed_pct",
        filter: "agNumberColumnFilter",
        filterParams: {
          filterOptions: [
            'greaterThan'
          ],
          suppressAndOrCondition: true,
        },
        width: 200
      },
      {
        headerName: "Institutional Rating",
        field: "net_holding_pct",
        filter: "agNumberColumnFilter",
        filterParams: {
          filterOptions: [
            'greaterThan'
          ],
          suppressAndOrCondition: true,
        },
        width: 200
      },
    ]
  }

  toggleModal = () => {
    this.setState(prevState => ({
      error_state: !prevState.error_state
    }));
  }

  startTour = () => {
    this.setState({
      isTouropen: true
    })
  }

  fetchArticles = () => {
    axios.get('https://openstreet.io/api/matrix/?action=search')
      .then(res => {
        // console.log(res.data);
        let items = this.state;
        items['rowData'] = items['rowData'].concat(res.data);
        this.setState({ items });

      });
    let today = new Date();
    today.setDate(today.getDate() - 20);
    today = today.toISOString().slice(0, 10);
    axios.get(`https://openstreet.io/api/matrix/?action=news`)
      .then(res => {
        let sorted = res.data['hits']
        this.setState({ docs: sorted });
      
      });
    
  }


  componentDidMount() {
    if (document.getElementById("chart")) {
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-tickers.js'
      script.async = true;
      script.innerHTML = JSON.stringify({
        "symbols": [{
          "proName": "OANDA:SPX500USD",
          "title": "S&P 500"
        }, {
          "proName": "OANDA:NAS100USD",
          "title": "Nasdaq 100"
        }, {
          "proName": "FX_IDC:INRUSD",
          "title": "INR/USD"
        }, {
          "proName": "BITSTAMP:BTCUSD",
          "title": "BTC/USD"
        }, {
          "proName": "BITSTAMP:ETHUSD",
          "title": "ETH/USD"
        }],
        "colorTheme": "dark",
        "isTransparent": true,
        "displayMode": "adaptive",
        "locale": "en"
      });

    document.getElementById("chart").appendChild(script);
    }
   
    this.fetchArticles();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.token) {
      this.fetchArticles();
    }
  }


  onGridReady = params => {
    this.gridApi = params.api
    this.gridColumnApi = params.columnApi
    this.setState({
      currenPageSize: this.gridApi.paginationGetCurrentPage() + 1,
      getPageSize: this.gridApi.paginationGetPageSize(),
      totalPages: this.gridApi.paginationGetTotalPages()
    })
  }

  updateSearchQuery = val => {
    this.gridApi.setQuickFilter(val)
  }

  filterSize = val => {
    if (this.gridApi) {
      this.gridApi.paginationSetPageSize(Number(val))
      this.setState({
        currenPageSize: val,
        getPageSize: val
      })
    }
  }
  filter = (params) => {
    var model = this.gridApi.getFilterModel();
    let items = this.state;
    items['company_health'] = "0";
    items['fair_value_score'] = "0";
    items['company_yield'] = "0";
    items['company_quality'] = "0";
    items['risk_score'] = "0";
    items['industry'] = "";
    items['industry_rank'] = "100";
    items['net_value_executed_pct'] = "0";
    items['net_holding_pct'] = "0";
    for (const field in model) {
      items[`${field}`] = `${model[field].filter}`;
    }
    this.setState({ items });
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
    // console.log(this.state)
  }
  handleSubmit = event => {
    event.preventDefault();
    let selectedNodes = this.gridApi.getSelectedNodes();
	  let selectedData = selectedNodes.map(node => node.data);
    console.log(selectedData);
    if(selectedData.length!==0)
    {
      if(this.state.basicPicker.length>0){
        axios.post(`https://openstreet.io/api/portfolio/?token=${localStorage.getItem('token')}`, {
        custom_portfolio: true,
        portfolio_name: this.state.name,
        allocation: this.state.allocation,
        date_created: this.state.basicPicker[0].toISOString().split('T')[0],
        portfolio: selectedData
      }).then(res => {
        this.props.history.push('/portfolios/');
      })
    .catch(err => {
    if (err.response) {
      console.log(err.response)
      this.setState({ error_state: true })
    }
      })}
      else{
        this.setState({ error_state: true })
  
      }

    
  }else{
    if(this.state.basicPicker.length>0){
      axios.post(`https://openstreet.io/api/portfolio/?token=${localStorage.getItem('token')}`, {
      custom_portfolio: false,  
      portfolio_name: this.state.name,
        allocation: this.state.allocation,
        date_created: this.state.basicPicker[0].toISOString().split('T')[0],
        min_health: parseInt(this.state.company_health),
        min_yield: parseInt(this.state.company_yield),
        min_fair_value:parseInt(this.state.fair_value_score),
        min_quality: parseInt(this.state.company_quality),
        min_risk:parseInt(this.state.risk_score),
        max_industry_rank: parseInt(this.state.industry_rank),
        min_insider_rating:parseInt(this.state.net_value_executed_pct),
        min_inst_rating: parseInt(this.state.net_holding_pct),
        industry: this.state.industry,
      }).then(res => {
        this.props.history.push('/portfolios/');
      })
    .catch(err => {
    if (err.response) {
      console.log(err.response)
      this.setState({ error_state: true })
    } 
})
    }else{
      this.setState({ error_state: true })

    }
    
  } 
  }
  render() {
    if (!this.props.token) {
      return <Redirect to="/login" />;
    }
    const { rowData, columnDefs, defaultColDef, basicPicker } = this.state;
    if (this.state.rowData.length === 0 & this.state.isLoading === false) {
      let items = this.state;
      items['isLoading'] = true;
      this.setState({ items });
    }
    if (this.state.rowData.length !== 0 & this.state.isLoading === true) {
      let items = this.state;
      items['isLoading'] = false;
      this.setState({ items });
    }
    if (this.state.docs.length === 0 & this.state.isPostLoading === false) {
      this.setState({isPostLoading: true});
    }
    if (this.state.docs.length !== 0 & this.state.isPostLoading === true) {
      this.setState({isPostLoading: false})
    }
    const steps = [
      {
        target: ".ag-header-row:first-child> :first-child",
        content: "Ticker - Click on ticker to navigate to stock research report.",
        disableBeacon: true
      },
      {
        target: ".ag-header-row:first-child> :nth-child(3)",
        content: "Generate Portfolio - Enter Filter Parameters to apply rules on the stock universe.",
        disableBeacon: true
      },
      {
        target: "[name=name]",
        content: "Generate Portfolio - Portfolio Name: Enter a name for the portfolio",
        disableBeacon: false
      },
      {
        target: "#allocation",
        content: "Generate Portfolio - Allocation: Enter an amount to allocate to the portfolio",
        disableBeacon: true
      },
      {
        target: "[placeholder=yyyy-mm-dd]",
        content: "Generate Portfolio - Effective Date: Enter a date on which you would like to apply the rules",
        disableBeacon: true
      },
      {
        target: ".applybtn",
        content: "Generate Portfolio - Hit Apply Rules to add the filter parameters to the portfolio rule list.",
        disableBeacon: true
      },
      {
        target: ".navbar-nav li:nth-child(2)",
        content: "Portfolios - View and track your portfolios in this tab",
        disableBeacon: true
      }
    ]
    return (
      <React.Fragment>
         
        { 
        this.state.error_state ?

        <Modal
        isOpen={this.state.error_state}
        toggle={this.toggleModal}
        className="modal-dialog-centered"
      >
          <ModalHeader toggle={this.toggleModal}>Error</ModalHeader>
          <ModalBody>
            
            An error occured during the operation. Please make amends and try again.
          </ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={this.toggleModal}>
              Dismiss
            </Button>
          </ModalFooter>
        </Modal>
        :
        <div/>
       }
        <Row>
          <Col sm="12">
            <Tour
              disableOverlay
              steps={steps}
              run={this.state.isTouropen}
              continuous={true}
              showSkipButton={true}
              floaterProps={{ disableAnimation: true }}
              callback={data => {
                if ([STATUS.FINISHED, STATUS.SKIPPED].includes(data.status)) {
                  this.setState({ isTouropen: false })
                }
              }}
            />
            <Card>
              <CardBody>
                <Button color="primary" outline onClick={this.startTour}>
                  Start Tour
                </Button>
              </CardBody>
            </Card>
            
          </Col>
        </Row>
        <Card>
        <div id="chart"> </div>
        </Card>
        <Divider/>

        <List
          // itemLayout="horizontal"
          grid={{
            gutter: 12,
            xs: 1,
            sm: 1,
            md: 1,
            lg: 3,
            xl: 3,
          }}
          size="small"
          pagination={{
            onChange: page => {
              console.log(page);
            },
            pageSize: 3,
          }}
          dataSource={this.state.docs}

          renderItem={item => (
            <Card style={{marginLeft: 20, marginRight: 20}}>
              <CardImg
                className="img-fluid mb-2"
                src={item.imageUrl}
                alt="card image cap"
              />
                <Container>
                  <Row>
                    
                    <Col>
                      <a href={item.url}><h3>{item.title}</h3></a>
                      <Row>
                        <Col lg="5" sm="5" md="5" style={{paddingTop: 5}}>
                          <Icon.Clock size={15} style={{color: "white"}}/>
                          <label>{new Date(item.pubDate).toString().substring(4, 15)}</label>
                        </Col>
                        <Col lg="5" sm="5" style={{paddingTop: 5}}>
                          <Icon.User size={15} style={{color: "white"}}/>
                          <label>{item.authors[0]}</label>
                        </Col>
                        <Col lg="5" sm="5" style={{paddingTop: 5}}>
                          <Icon.Globe size={15} style={{color: "white"}}/>
                          <label>{getCountryName(item.country.toUpperCase())}</label>
                        </Col>
                        <Col lg="5" sm="5">
                          <img src={`https://www.google.com/s2/favicons?domain=${item.source}`} alt="No Image"/>
                          <label>{item.source.toUpperCase()}</label>
                        </Col>
                      </Row>
                      <Divider />
                      <p>{item.content.substring(0, 250)}...</p>
                    </Col>
                  </Row>
                
                </Container>
            </Card>
          )}
        />
        <Divider/>
       
        <Card style={{marginTop: 15}}>

          <CardHeader id="portgen">
            <CardTitle>
              <h4 style={{paddingBottom: 15}}>Portfolio Generation</h4>
            </CardTitle>

          </CardHeader>

          <CardBody>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup row>
                <Col md="4">
                  <span>Portfolio Name</span>
                </Col>
                <Col md="6">
                  <Input
                    required
                    type="text"
                    name="name"
                    id="name"
                    onChange={this.handleChange}

                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Col md="4">
                  <span>Allocation</span>
                </Col>
                <Col md="6">
                  <Input
                    //  ref="sdf"
                    required
                    type="text"
                    name="allocation"
                    id="allocation"
                    onChange={this.handleChange}

                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Col md="4">
                  <span>Effective Date</span>
                </Col>
                <Col md="6">
                  <Flatpickr
                    className="form-control"
                    value={basicPicker}
                    placeholder="yyyy-mm-dd"
                    onChange={date => {
                      this.setState({ basicPicker: date });
                    }}
                    options={{maxDate: new Date().fp_incr(-1) }}
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Col md={{ size: 8, offset: 4 }}>
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1 applybtn"
                  >
                    Apply Rules
                  </Button.Ripple>
                  <Button.Ripple
                    outline
                    color="warning"
                    type="reset"
                    className="mb-1"
                  >
                    Reset
                  </Button.Ripple>
                </Col>
              </FormGroup>
            </Form>
          </CardBody>
          </Card>
          
        
        
        <Card className="overflow-hidden agGrid-card">
        <CardTitle>
              <h4 style={{paddingTop: 20, paddingLeft: 20}}>Stock Ratings Matrix</h4>
            </CardTitle>
          
            
            
            <CardBody className="py-0">
              {this.state.rowData === null ? null : (
                <div className="ag-theme-material w-100 my-2 ag-grid-table">
                  <div className="d-flex flex-wrap justify-content-between align-items-center">
                    <div className="mb-1">
                      <UncontrolledDropdown className="p-1 ag-dropdown">
                        <DropdownToggle tag="div">
                          {this.gridApi
                            ? this.state.currenPageSize
                            : "" * this.state.getPageSize -
                            (this.state.getPageSize - 1)}{" "}
                        -{" "}
                          {this.state.rowData.length -
                            this.state.currenPageSize * this.state.getPageSize >
                            0
                            ? this.state.currenPageSize * this.state.getPageSize
                            : this.state.rowData.length}{" "}
                        of {this.state.rowData.length}
                          <ChevronDown className="ml-50" size={15} />
                        </DropdownToggle>
                        <DropdownMenu right>
                          <DropdownItem
                            tag="div"
                            onClick={() => this.filterSize(20)}
                          >
                            20
                        </DropdownItem>
                          <DropdownItem
                            tag="div"
                            onClick={() => this.filterSize(50)}
                          >
                            50
                        </DropdownItem>
                          <DropdownItem
                            tag="div"
                            onClick={() => this.filterSize(100)}
                          >
                            100
                        </DropdownItem>
                          <DropdownItem
                            tag="div"
                            onClick={() => this.filterSize(134)}
                          >
                            134
                        </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between mb-1">
                      <div className="table-input mr-1">
                        <Input
                          placeholder="search..."
                          onChange={e => this.updateSearchQuery(e.target.value)}
                          value={this.state.value}
                        />
                      </div>
                      
                    </div>
                  </div>
                  
                  <ContextLayout.Consumer>
                    {context => (
                      <AgGridReact
                      
                      selectableRows
                        gridOptions={{}}
                        rowSelection="multiple"
                        defaultColDef={defaultColDef}
                        columnDefs={columnDefs}
                        rowData={rowData}
                        onGridReady={this.onGridReady}
                        colResizeDefault={"shift"}
                        animateRows={true}
                        floatingFilter={true}
                        onFilterChanged={this.filter}
                        pagination={true}
                        paginationPageSize={this.state.paginationPageSize}
                        pivotPanelShow="always"
                        enableRtl={context.state.direction === "rtl"}
                      />
                    )}
                  </ContextLayout.Consumer>
                  
                </div>
              )}
            </CardBody>
        </Card>
        <Row md="12">
          <Col style={{height:'700px'}}md="12" sm="12" lg="12">
          
        
   
  </Col>
  </Row>
  <Divider/>
      </React.Fragment>
    )
  }
}

const mapStatetoProps = state => {
  return {
    token: state.auth.token
  }
}


export default connect(mapStatetoProps)(AggridTable);


