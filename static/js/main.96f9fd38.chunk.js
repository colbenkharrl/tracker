(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{319:function(e,t,n){e.exports=n(628)},324:function(e,t,n){},611:function(e,t){},613:function(e,t){},626:function(e,t){},628:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(27),l=n.n(o),i=(n(324),n(16)),c=n(17),s=n(19),u=n(18),m=n(20),p=n(15),h=n(630),d=n(83),f=n.n(d),E=n(61),g=n.n(E),b=n(21),O=n.n(b),v=n(629),C=n(300),y=n.n(C),j=n(82),S=n.n(j),N=n(33),A=n.n(N),T=n(56),w=n.n(T),x=n(37),k=n.n(x),B=n(84),F=n.n(B),I=n(42),D=n.n(I),M=n(299),R=n.n(M),L=n(297),_=n.n(L),q=n(298),X=n.n(q),z="Lizard Form\nSpecies|TEXT_FIELD\nLocation|COMBO_BOXES|Site 1,Site 2,Site 3,Site 4\nClip Code|TEXT_FIELD|unique\nBody Length|NUMBER|required\nTail Length|NUMBER|required\nCapture Time|DATE|required\nNotes|TEXT_AREA",W="Fish Form\nGenus|TEXT_FIELD\nLocation|COMBO_BOXES|Site 1,Site 2,Site 3,Site 4\nColor|COMBO_BOXES|Red, Green, Blue, Yellow\nBody Length|NUMBER|required\nBody Width|NUMBER|required\nCapture Time|DATE|required\nLocation1|COMBO_BOXES|Site 1,Site 2,Site 3,Site 4\nColor1|COMBO_BOXES|Red, Green, Blue, Yellow\nBody Length1|NUMBER|required\nBody Width1|NUMBER|required\nCapture Time1|DATE|required\nNotes|TEXT_AREA",P={TEXT_FIELD:{label:"string",required:"boolean"},TEXT_AREA:{label:"string",required:"boolean"},NUMBER:{label:"string",required:"boolean"},RADIO_BUTTON:{label:"string",required:"boolean",options:[{label:"string"}]},CHECK_BOXES:{label:"string",required:"boolean",options:[{label:"string"}]},COMBO_BOXES:{label:"string",required:"boolean",options:[{label:"string"}]},DATE:{label:"string",required:"boolean"}},U={TEXT_FIELD:"Text Field",TEXT_AREA:"Text Area",NUMBER:"Number",RADIO_BUTTON:"Radio Buttons",CHECK_BOXES:"Check Boxes",COMBO_BOXES:"Combo Box",DATE:"Date"},G=function(e){var t=e.split("\n"),n={name:t[0],id:t[0].substring(0,t[0].indexOf(" ")).toLowerCase(),inputs:[]};return t.splice(1).forEach(function(e){n.inputs.push(function(e){var t=e.trim().split("|"),n={name:t[0],type:t[1]};return P[n.type].options&&(n.options=t[2].split(",")),n}(e))}),n},H={lizard:{fixture:z,form:G(z),screenName:"Lizard",route:"/lizard",id:"lizard"},fish:{fixture:W,form:G(W),screenName:"Fish",route:"/fish",id:"fish"}},J=r.a.createContext(),V=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={forms:H},n.createRouteName=function(e){for(var t=n.state.forms,a="/"+e.toLowerCase().replace(/\W/g,""),r=Object.values(t).map(function(e){return e.route}),o="",l=1;r.includes(a+o);)o="-v-"+(l+=1);return a+o},n.addForm=function(e){var t=n.state.forms;if(t[e.id])t[e.id].form=e;else{var a={fixture:"",form:e,screenName:e.name,route:n.createRouteName(e.name),id:e.id};t[a.id]=a}n.setState({forms:t})},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.forms,t=this.addForm;return r.a.createElement(J.Provider,{value:{forms:e,addForm:t}},this.props.children)}}]),t}(r.a.Component);function Y(e){return function(t){function n(){return Object(i.a)(this,n),Object(s.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(m.a)(n,t),Object(c.a)(n,[{key:"render",value:function(){var t=this;return r.a.createElement(J.Consumer,null,function(n){return r.a.createElement(e,Object.assign({},t.props,n))})}}]),n}(r.a.Component)}var K=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={redirect:null},n.push=function(e){n.setState({redirect:e})},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.push,t=this.props,n=t.forms,o=t.onClose,l=t.classes,i=this.state.redirect;return i?(this.state.redirect=null,o(),r.a.createElement(v.a,{to:i})):r.a.createElement(a.Fragment,null,r.a.createElement(w.a,{className:l.list},r.a.createElement(O.a,{variant:"caption",className:l.sectionTitle},"MANAGE FORMS"),r.a.createElement(k.a,{button:!0,onClick:function(){return e("/forms")},className:l.item},r.a.createElement(F.a,null,r.a.createElement(_.a,null)),r.a.createElement(D.a,{primary:"Form Builder",className:l.itemLabel})),r.a.createElement(O.a,{variant:"caption",className:l.sectionTitle},"YOUR FORMS"),Object.values(n).map(function(t,n){return r.a.createElement(k.a,{key:n,button:!0,onClick:function(){return e(t.route)},className:l.item},r.a.createElement(F.a,null,r.a.createElement(X.a,null)),r.a.createElement(D.a,{primary:t.screenName,className:l.itemLabel}))}),r.a.createElement(O.a,{variant:"caption",className:l.sectionTitle},"ADMIN"),r.a.createElement(k.a,{button:!0,onClick:function(){return e("/settings")},className:l.item},r.a.createElement(F.a,null,r.a.createElement(R.a,null)),r.a.createElement(D.a,{primary:"Settings",className:l.itemLabel}))))}}]),t}(a.Component),Z=Object(p.withStyles)(function(e){return{list:{padding:0},sectionTitle:{marginLeft:10},item:{padding:0,margin:10},itemLabel:{padding:0}}})(Y(K)),$=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={anchorEl:null},n.handleMenu=function(e){n.setState({anchorEl:e.currentTarget})},n.handleClose=function(){n.setState({anchorEl:null})},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props.classes,t=this.state.anchorEl,n=Boolean(t);return r.a.createElement("div",null,r.a.createElement(A.a,{"aria-owns":n?"menu-appbar":null,"aria-haspopup":"true",onClick:this.handleMenu,color:"inherit"},r.a.createElement(y.a,null)),r.a.createElement(S.a,{id:"menu-appbar",anchorEl:t,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:n,onClose:this.handleClose},r.a.createElement(Z,{onClose:this.handleClose,className:e.menu})))}}]),t}(a.Component),Q=Object(p.withStyles)({menu:{padding:0}})($),ee=n(171),te=n.n(ee),ne=n(301),ae=n.n(ne),re=n(57),oe=n.n(re),le=n(62),ie=n.n(le),ce=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={anchorEl:null},n.handleMenu=function(e){n.setState({anchorEl:e.currentTarget})},n.handleClose=function(){n.setState({anchorEl:null})},n.handleSignout=function(){n.props.signout(),n.handleClose()},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props,t=e.classes,n=e.username,o=this.state.anchorEl,l=!!o;return r.a.createElement(a.Fragment,null,r.a.createElement(A.a,{"aria-owns":l?"menu-appbar":null,"aria-haspopup":"true",onClick:this.handleMenu,color:"inherit"},r.a.createElement(te.a,null)),r.a.createElement(S.a,{id:"menu-appbar",anchorEl:o,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:l,onClose:this.handleClose},r.a.createElement(oe.a,{onClick:this.handleClose},r.a.createElement(te.a,{className:t.menuIcon}),n),r.a.createElement(ie.a,null),r.a.createElement(oe.a,{onClick:this.handleSignout},r.a.createElement(ae.a,{className:t.menuIcon}),"Sign Out")))}}]),t}(a.Component),se=Object(p.withStyles)({menuIcon:{marginRight:10}})(ce),ue=r.a.createContext(),me=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={isAuth:!1,username:"demo@example.com"},n.authenticate=function(e,t){n.setState({isAuth:!0}),n.setState({username:e}),setTimeout(t,100)},n.signout=function(e){n.setState({isAuth:!1}),n.setState({username:""}),setTimeout(e,100)},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(ue.Provider,{value:{isAuth:this.state.isAuth,authenticate:this.authenticate,signout:this.signout,username:this.state.username}},this.props.children)}}]),t}(r.a.Component),pe=function(e){return r.a.createElement(ue.Consumer,null,function(t){var n=t.isAuth,a=t.authenticate,o=t.signout,l=t.username;return r.a.createElement(se,Object.assign({},e,{isAuth:n,authenticate:a,signout:o,username:l}))})},he=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={auth:!0,redirect:null},n.handleChange=function(e){n.setState({auth:e.target.checked})},n.clickHome=function(e){n.setState({redirect:"/"})},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes,n=this.state.redirect;return n?(this.state.redirect=null,r.a.createElement(v.a,{to:n})):r.a.createElement(ue.Consumer,null,function(n){var a=n.isAuth;return r.a.createElement(f.a,{position:"absolute",className:t.root},r.a.createElement(g.a,{className:t.toolbar},a&&r.a.createElement(Q,null),r.a.createElement(O.a,{variant:"h6",color:"inherit",className:t.grow,onClick:e.clickHome},"Tracker"),a&&r.a.createElement(pe,null)))})}}]),t}(a.Component),de=Object(p.withStyles)(function(e){return{root:{flexGrow:1,zIndex:e.zIndex.drawer+1},toolbar:{padding:"0px 10px"},grow:{flexGrow:1,cursor:"pointer"},menuButton:{marginLeft:-12,marginRight:20},logo:{height:40,marginRight:15,cursor:"pointer"}}})(he),fe=n(318),Ee=n(631),ge=n(632),be=n(24),Oe=n.n(be),ve=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(Oe.a,{className:"App-page-paper"},r.a.createElement(O.a,{variant:"h5",component:"h3"},"Home Page"),r.a.createElement(O.a,{component:"p"},"This is a placeholder for content on the home page."))}}]),t}(a.Component),Ce=n(29),ye=n.n(Ce),je=n(68),Se=n.n(je),Ne=n(69),Ae=n.n(Ne),Te=n(302),we=n.n(Te),xe=n(81),ke=n.n(xe),Be=n(50),Fe=n(67),Ie=n.n(Fe),De=n(92),Me=n.n(De),Re=n(46),Le=n.n(Re),_e=n(93),qe=n.n(_e),Xe=n(80),ze=n.n(Xe),We=n(94),Pe=n.n(We),Ue=n(119),Ge=n.n(Ue),He=n(120),Je=n.n(He),Ve=n(121),Ye=n.n(Ve),Ke=n(25),Ze=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",type:"",options:"",required:!1,errors:null},n.resetState=function(){n.setState({name:"",type:"",options:"",required:!1,errors:null})},n.hasOptions=function(){var e=n.state.type,t=!1;return Object.keys(P).forEach(function(n){n===e&&P[n].options&&(t=!0)}),t},n.handleTypeChange=function(e){return function(t){n.setState(Object(Be.a)({},e,t.target.value))}},n.handleValueChange=function(e){return function(t){n.setState(Object(Be.a)({},e,t.currentTarget.value))}},n.handleToggleChange=function(e){return function(){n.setState(Object(Be.a)({},e,!n.state[e]))}},n.handleSubmit=function(){var e=JSON.parse(JSON.stringify(n.state));""!==e.options.trim()&&(e.options=e.options.split(",").map(function(e){return e.trim()}));var t=n.getInputErrors(e);t?n.setState({errors:t}):(n.props.handleAdd(e),n.resetState())},n.handleCancel=function(){n.props.handleCancel(),n.resetState()},n.getInputErrors=function(e){var t=e.name,n=e.type,a=e.options;return t&&""!==t.trim()?n&&""!==n.trim()?!P[n].options||a&&a.length?null:"No options provided, please add options to your "+U[n]+".":"No type provided, please choose an input type.":"No name provided, please name your input."},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.open,a=t.input;if(!e.open&&n&&a){var r=JSON.parse(JSON.stringify(a));r.options=Array.isArray(a.options)?a.options.join(", "):"",this.setState(r)}}},{key:"render",value:function(){var e=this.props,t=e.open,n=e.classes,a=this.state,o=a.name,l=a.type,i=a.options,c=a.required,s=a.errors;return r.a.createElement(Se.a,{open:t,onClose:this.handleCancel,maxWidth:"lg",fullWidth:!0,"aria-labelledby":"input-dialog-title",PaperProps:{className:n.dialog}},r.a.createElement(Ge.a,{id:"input-dialog-title",className:n.title},"New Input"),r.a.createElement(Ae.a,{className:n.contentContainer},r.a.createElement(Le.a,{id:"name",label:"Input Name",margin:"none",fullWidth:!0,value:o,onChange:this.handleValueChange("name")}),r.a.createElement(qe.a,{className:n.formControl},r.a.createElement(Me.a,{htmlFor:"age-helper"},"Input Type"),r.a.createElement(ze.a,{value:l,onChange:this.handleTypeChange("type"),input:r.a.createElement(Ie.a,{name:"input-type",id:"input-type"})},r.a.createElement(oe.a,{value:"",key:"none"},"None"),Object.keys(U).map(function(e,t){return r.a.createElement(oe.a,{value:e,key:t},U[e])}))),this.hasOptions()?r.a.createElement(Le.a,{id:"options-multiline",label:"Options",multiline:!0,rowsMax:"4",value:i,onChange:this.handleValueChange("options"),margin:"none",fullWidth:!0}):null,r.a.createElement(Je.a,{control:r.a.createElement(Ye.a,{checked:c,onChange:this.handleToggleChange("required"),value:"required",color:"primary"}),label:"Required"}),s?r.a.createElement(Ke.Typography,{variant:"body1",className:n.errorMessage},"Error: ",s):null),r.a.createElement(Pe.a,{className:n.actions},r.a.createElement(ye.a,{variant:"contained",onClick:this.handleCancel,color:"default",size:"small",className:n.button},"Cancel"),r.a.createElement(ye.a,{variant:"contained",onClick:this.resetState,color:"default",size:"small",className:n.button},"Clear"),r.a.createElement(ye.a,{variant:"contained",size:"small",onClick:this.handleSubmit,color:"primary",className:n.button},"Add Input")))}}]),t}(a.Component),$e=Object(p.withStyles)({dialog:{margin:5,padding:15},title:{padding:0},contentContainer:{padding:0},formControl:{margin:0,width:"100%"},textField:{margin:0,width:"100%"},optionsInput:{width:"100%",margin:0},actions:{margin:0},errorMessage:{color:"red"}})(Ze),Qe=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.name,a=e.onName;return r.a.createElement(Oe.a,{className:t.paper},r.a.createElement(Le.a,{id:"form-name",label:"Form Name",value:n,onChange:a,className:t.nameControl,margin:"normal",variant:"outlined"}))}}]),t}(a.Component),et=Object(p.withStyles)({paper:{margin:5,marginTop:10,padding:5,paddingTop:8},nameControl:{margin:0,width:"100%"}})(Qe);function tt(e){return r.a.createElement(ke.a,Object.assign({direction:"up"},e))}var nt=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={name:"",inputs:[],inputDialogOpen:!1,errors:null,selectedInputIndex:null,id:null},n.resetState=function(){n.setState({name:"",inputs:[],inputDialogOpen:!1,errors:null,selectedInputIndex:null,id:null})},n.handleNameInput=function(e){n.setState({name:e.currentTarget.value})},n.handleOpenInputDialog=function(){n.setState({inputDialogOpen:!0})},n.handleInputCancel=function(){n.setState({inputDialogOpen:!1,selectedInputIndex:null})},n.handleInputAdd=function(e){var t=n.state,a=t.inputs,r=t.selectedInputIndex;null!==r?a[r]=e:a.push(e),n.setState({inputDialogOpen:!1,selectedInputIndex:null,inputs:a})},n.handleInputClick=function(e){return function(t){n.setState({inputDialogOpen:!0,selectedInputIndex:e})}},n.handleCancel=function(){n.props.onClose(),n.resetState()},n.handleCreate=function(){var e=n.state,t=e.name,a=e.inputs,r=e.id,o=JSON.parse(JSON.stringify({name:t,inputs:a,id:r||Date.now()})),l=n.getInputErrors(o);l?n.setState({errors:l}):(n.props.onClose(o),n.resetState())},n.getInputErrors=function(e){var t=e.name,n=e.inputs;return t&&""!==t.trim()?n&&n.length?null:"No inputs provided, please add an input to your form.":"No name provided, please name your form."},n.buildSecondaryString=function(e){return U[e.type]+(P[e.type].options?", "+e.options.length+" Options":"")+Object.keys(e).reduce(function(t,n){return"boolean"===typeof e[n]&&e[n]?t+", "+n:t},"")},n.renderInputList=function(){var e=n.state.inputs,t=n.props.classes;return e.length?e.map(function(e,t){return r.a.createElement("div",{key:t},t>0?r.a.createElement(ie.a,null):null,r.a.createElement(k.a,{button:!0,onClick:n.handleInputClick(t)},r.a.createElement(D.a,{primary:e.name,secondary:n.buildSecondaryString(e)})))}):r.a.createElement(k.a,null,r.a.createElement(D.a,{className:t.noInputs,primary:"No inputs added."}))},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.open,a=t.form;!e.open&&n&&a&&this.setState(a)}},{key:"render",value:function(){var e=this.state,t=e.inputDialogOpen,n=e.name,a=e.errors,o=e.inputs,l=e.selectedInputIndex,i=this.props,c=i.open,s=i.classes,u=null!==l?o[l]:null;return r.a.createElement("div",null,r.a.createElement(Se.a,{fullScreen:!0,open:c,onClose:this.handleCancel,TransitionComponent:tt,scroll:"paper"},r.a.createElement(f.a,{className:s.appBar},r.a.createElement(g.a,null,r.a.createElement(A.a,{color:"inherit",onClick:this.handleCancel,"aria-label":"Close"},r.a.createElement(we.a,null)),r.a.createElement(O.a,{variant:"title",color:"inherit",className:s.flex},"New Form"),a?r.a.createElement(O.a,{variant:"body1",className:s.errorText},a):null,r.a.createElement(ye.a,{color:"inherit",onClick:this.handleCreate},"Create"))),r.a.createElement(Ae.a,{className:s.noSpacing},r.a.createElement(et,{name:n,onName:this.handleNameInput}),r.a.createElement(Oe.a,{className:s.paper},r.a.createElement(w.a,{className:s.noSpacing},this.renderInputList())),r.a.createElement("div",{className:s.paper},r.a.createElement(ye.a,{color:"primary",onClick:this.handleOpenInputDialog,variant:"contained",className:s.createButton,fullWidth:!0},"Add Form Input")))),r.a.createElement($e,{open:t,handleCancel:this.handleInputCancel,handleAdd:this.handleInputAdd,input:u}))}}]),t}(a.Component),at=Object(p.withStyles)(function(e){return{appBar:{position:"relative"},flex:{flex:1},paper:{margin:5,marginTop:15},sectionTitle:{margin:"15px auto 0px 15px"},errorText:{color:"#FFFFFF"},createButton:{height:45,margin:0,marginBottom:10},noSpacing:{margin:0,padding:0}}})(nt),rt=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={open:!1,forms:[],selectedFormID:null},n.loadFormsFromFixtures=function(){var e=n.props.forms;n.setState({forms:Object.values(e).map(function(e){return e.form})})},n.handleNewFormClick=function(e){n.setState({open:!0})},n.handleFormOpen=function(e){return function(t){t.preventDefault(),n.setState({open:!0,selectedFormID:e})}},n.handleClose=function(e){var t=n.props.addForm;e&&t(e),n.setState({open:!1,selectedFormID:null})},n.renderFormList=function(){var e=n.props.forms,t=Object.values(e).map(function(e){return e.form});return t.length?t.map(function(e,t){return r.a.createElement("div",{key:t},t>0?r.a.createElement(ie.a,null):null,r.a.createElement(k.a,{button:!0},r.a.createElement(D.a,{primary:e.name,onClick:n.handleFormOpen(e.id)})))}):r.a.createElement(k.a,null,r.a.createElement(D.a,{primary:"No forms added."}))},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.loadFormsFromFixtures()}},{key:"componentDidUpdate",value:function(e){this.props.forms!==e.forms&&this.loadFormsFromFixtures()}},{key:"render",value:function(){var e=this.props.classes,t=this.state,n=t.open,o=t.forms,l=t.selectedFormID,i=o.find(function(e){return e.id===l});return r.a.createElement(a.Fragment,null,r.a.createElement(Oe.a,null,r.a.createElement(w.a,{className:e.formList},this.renderFormList())),r.a.createElement(ye.a,{variant:"contained",color:"primary",fullWidth:!0,onClick:this.handleNewFormClick,className:e.createButton},"Create New Form"),r.a.createElement(at,{open:n,onClose:this.handleClose,form:i,className:e.createButton}))}}]),t}(a.Component),ot=Object(p.withStyles)({createButton:{height:45,margin:0,marginTop:10},formList:{margin:0,padding:0}})(Y(rt)),lt=n(303),it=n.n(lt),ct=n(179),st=n(45),ut=n(6),mt=n.n(ut),pt=n(170),ht=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).exportCsv=function(){var e=n.props.columns.filter(function(e){return!e.hidden&&e.field}),t=n.props.renderData.map(function(t){return e.map(function(e){return t[e.field]})});new pt.CsvBuilder((n.props.title||"data")+".csv").setDelimeter(n.props.exportDelimiter).setColumns(e.map(function(e){return e.title})).addRows(t).exportFile();n.setState({exportButtonAnchorEl:null})},n.state={columnsButtonAnchorEl:null,exportButtonAnchorEl:null},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"renderSearch",value:function(){var e=this.props,n=e.search,a=e.searchText,o=e.onSearchChanged,l=Object(ct.a)({},t.defaultProps.localization,this.props.localization);return n?r.a.createElement(Ke.TextField,{value:a,onChange:function(e){return o(e.target.value)},color:"inherit",InputProps:{startAdornment:r.a.createElement(Ke.InputAdornment,{position:"start"},r.a.createElement(Ke.Tooltip,{title:l.searchTooltip},r.a.createElement(this.props.icons.Search,{color:"inherit"})))}}):null}},{key:"renderDefaultActions",value:function(){var e=this,n=this.props,o=n.classes,l=n.columnsButton,i=n.columns,c=n.onColumnsChanged,s=n.exportButton,u=n.components,m=n.actions,p=n.icons,h=Object(ct.a)({},t.defaultProps.localization,this.props.localization);return r.a.createElement(a.Fragment,null,this.renderSearch(),r.a.createElement("div",{className:o.spacer}),l&&r.a.createElement("span",null,r.a.createElement(Ke.Tooltip,{title:h.showColumnsTitle},r.a.createElement(Ke.IconButton,{color:"inherit",onClick:function(t){return e.setState({columnsButtonAnchorEl:t.currentTarget})},"aria-label":h.showColumnsAriaLabel},r.a.createElement(p.ViewColumn,null))),r.a.createElement(Ke.Menu,{anchorEl:this.state.columnsButtonAnchorEl,open:Boolean(this.state.columnsButtonAnchorEl),onClose:function(){return e.setState({columnsButtonAnchorEl:null})}},i.map(function(t,n){return r.a.createElement(Ke.MenuItem,{key:t.tableData.id},r.a.createElement(Ke.FormControlLabel,{label:t.title,control:r.a.createElement(Ke.Checkbox,{checked:!t.hidden,onChange:function(t,a){var r=e.props.columns;r[n].hidden=!a,c(r)}})}))}))),s&&r.a.createElement("span",null,r.a.createElement(Ke.Tooltip,{title:h.exportTitle},r.a.createElement(Ke.IconButton,{color:"inherit",onClick:function(t){return e.setState({exportButtonAnchorEl:t.currentTarget})},"aria-label":h.exportAriaLabel},r.a.createElement(p.Export,null))),r.a.createElement(Ke.Menu,{anchorEl:this.state.exportButtonAnchorEl,open:Boolean(this.state.exportButtonAnchorEl),onClose:function(){return e.setState({exportButtonAnchorEl:null})}},r.a.createElement(Ke.MenuItem,{key:"export-csv",onClick:this.exportCsv},h.exportName))),r.a.createElement(u.Actions,{actions:m&&m.filter(function(e){return e.isFreeAction})}))}},{key:"renderSelectedActions",value:function(){return r.a.createElement(r.a.Fragment,null,this.renderSearch(),r.a.createElement(this.props.components.Actions,{actions:this.props.actions.filter(function(e){return!e.isFreeAction}),data:this.props.selectedRows}))}},{key:"renderActions",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.flexContainer},this.props.selectedRows&&this.props.selectedRows.length>0?this.renderSelectedActions():this.renderDefaultActions())}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(Ke.Toolbar,{className:mt()(e.root,Object(Be.a)({},e.highlight,this.props.selectedRows&&this.props.selectedRows.length>0))},r.a.createElement("div",{className:e.actions},this.renderActions()))}}]),t}(r.a.Component);ht.defaultProps={actions:[],columns:[],columnsButton:!1,localization:{nRowsSelected:"{0} row(s) selected",showColumnsTitle:"Show Columns",showColumnsAriaLabel:"Show Columns",exportTitle:"Export",exportAriaLabel:"Export",exportName:"Export as CSV",searchTooltip:"Search"},search:!0,searchText:"",selectedRows:[],title:"No Title!"};var dt=Object(p.withStyles)(function(e){return{flexContainer:{display:"flex"},root:{},highlight:"light"===e.palette.type?{color:e.palette.secondary.main,backgroundColor:Object(st.lighten)(e.palette.secondary.light,.85)}:{color:e.palette.text.primary,backgroundColor:e.palette.secondary.dark},actions:{color:e.palette.text.secondary,width:"100%"},search:{alignSelf:"right"},spacer:{flexGrow:1}}})(ht),ft=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).onSelectChange=function(e){console.log(e)},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.form,o=e.rows,l=n.inputs;return r.a.createElement(a.Fragment,null,r.a.createElement(Oe.a,{className:t.title},r.a.createElement(O.a,{variant:"h6"},n.name," ")),r.a.createElement(Oe.a,{className:t.root},r.a.createElement(it.a,{columns:l.map(function(e){return{title:e.name,field:e.name}}),data:o,onSelectionChange:this.onSelectChange,options:{columnsButton:!0,exportButton:!0,selection:!0,paging:!1},color:"primary",components:{Toolbar:function(e){return r.a.createElement(dt,e)}}})))}}]),t}(r.a.Component),Et=Object(p.withStyles)(function(e){return{title:{padding:8,marginBottom:10},root:{width:"100%"},table:{minWidth:1020},tableWrapper:{overflowX:"auto"}}})(ft),gt=n(63),bt=n.n(gt),Ot={TEXT_FIELD:bt.a.string(10,30,"aA"),TEXT_AREA:bt.a.string(20,100,"aA"),NUMBER:bt.a.integer(0,9999),RADIO_BUTTON:bt.a.string(1,10,"aA"),CHECK_BOXES:bt.a.string(1,10,"aA"),COMBO_BOXES:bt.a.string(1,10,"aA"),DATE:bt.a.date(2010,2018,"YYYY-MM-DD HH:MM",!1)},vt=function(e){return Math.floor(Math.random()*Math.floor(e-1))},Ct=function(e,t){for(var n=[],a=function(t){var a={};Object.values(e.inputs).forEach(function(e){a[e.name]=e.options?e.options[vt(e.options.length)]:Ot[e.type].generate()}),n.push(a)},r=0;r<t;r++)a();return n},yt=Y(function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.forms,n=e.location,a=Object.values(t).find(function(e){return e.route===n.pathname}).form,o=Ct(a,20);return r.a.createElement(Et,{form:a,rows:o})}}]),t}(a.Component)),jt=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(Oe.a,{className:"App-page-paper"},r.a.createElement(O.a,{variant:"h5",component:"h3"},"Settings Page"),r.a.createElement(O.a,{component:"p"},"This is a placeholder for the page for managing users, permissions, and projects."))}}]),t}(a.Component),St=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(Oe.a,{className:"App-page-paper"},r.a.createElement(O.a,{variant:"h5",component:"h3"},"Page Not Found"),r.a.createElement(O.a,{component:"p"},"The page you are trying to reach does not exist."))}}]),t}(a.Component),Nt=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).resetState=function(){n.setState({email:"",password:"",errors:null})},n.handleChange=function(e){n.setState(Object(Be.a)({},e.target.name,e.target.value))},n.onSubmit=function(e){var t=n.state.email;e.preventDefault();var a=n.isFormValid();a?n.setState({errors:a}):(n.props.authenticate(t),n.resetState(),n.setState({redirect:!0}))},n.state={email:"",password:"",errors:null,redirect:!1},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"isFormValid",value:function(){var e,t=this.state,n=t.email,a=t.password,r=new RegExp("^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$","ig").test(n),o=a.length>7;return r&&o||(r?o||(e="Password must be at least 8 characters.",this.setState({errors:e})):(e="Please enter a valid email address. \n",this.setState({errors:e}))),e}},{key:"render",value:function(){var e=this,t=this.state,n=t.errors,a=t.redirect,o=this.props.classes,l=null;return a?r.a.createElement(v.a,{to:"/"}):(n?l=r.a.createElement(O.a,{className:o.errorText,variant:"body1"},n):this.props.isAuth&&(l=r.a.createElement(O.a,{className:o.errorText,variant:"body1"},"Signed In")),r.a.createElement("div",null,r.a.createElement(Oe.a,{className:o.loginPaper},r.a.createElement("form",{className:o.form},r.a.createElement(Le.a,{autoFocus:!0,className:o.loginField,name:"email",placeholder:"Email",value:this.state.email,onChange:function(t){return e.handleChange(t)},fullWidth:!0}),r.a.createElement("br",null),r.a.createElement(Le.a,{className:o.loginField,name:"password",placeholder:"Password",type:"password",value:this.state.password,onChange:function(t){return e.handleChange(t)},fullWidth:!0}),l)),r.a.createElement(ye.a,{className:o.loginButton,variant:"contained",color:"primary",onClick:this.onSubmit,fullWidth:!0},"Sign in")))}}]),t}(r.a.Component),At=Object(p.withStyles)(function(e){return{loginPaper:{padding:10,margin:0},loginField:{margin:"5px 0px"},loginButton:{marginTop:10},errorText:{color:"#3f51b5",fontWeight:"500"}}})(Nt),Tt=function(e){return r.a.createElement(ue.Consumer,null,function(t){var n=t.isAuth,a=t.authenticate,o=t.signout,l=t.username;return r.a.createElement(At,Object.assign({},e,{isAuth:n,authenticate:a,signout:o,username:l}))})},wt=function(e){var t=e.component,n=Object(fe.a)(e,["component"]);return r.a.createElement(ue.Consumer,null,function(e){var a=e.isAuth;return r.a.createElement(Ee.a,Object.assign({},n,{render:function(e){return!0===a?r.a.createElement(t,e):r.a.createElement(v.a,{to:"/login"})}}))})},xt=Y(function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.forms;return r.a.createElement(ge.a,null,r.a.createElement(wt,{exact:!0,path:"/",component:ve}),r.a.createElement(wt,{exact:!0,path:"/forms",component:ot}),Object.values(e).map(function(e){return r.a.createElement(wt,{exact:!0,path:e.route,component:yt,key:e.id})}),r.a.createElement(wt,{exact:!0,path:"/view",component:yt}),r.a.createElement(wt,{exact:!0,path:"/settings",component:jt}),r.a.createElement(Ee.a,{exact:!0,path:"/login",component:Tt}),r.a.createElement(Ee.a,{component:St}))}}]),t}(a.Component)),kt=Object(p.createMuiTheme)({palette:{primary:{main:"#B5FFFD"},secondary:{main:"#FED766"}}}),Bt=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(h.a,{basename:"/tracker"},r.a.createElement(V,null,r.a.createElement(p.MuiThemeProvider,{theme:kt},r.a.createElement("div",null,r.a.createElement(de,null),r.a.createElement("main",{className:e.content},r.a.createElement(xt,null))))))}}]),t}(a.Component),Ft=Object(p.withStyles)(function(e){return{content:{marginTop:64,flexGrow:1,backgroundColor:e.palette.background.default,minWidth:0,padding:5}}})(Bt);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(me,null,r.a.createElement(ue.Consumer,null,function(e){var t=e.isAuth,n=e.authenticate,a=e.signout,o=e.username;return r.a.createElement(Ft,{isAuth:t,authenticate:n,signout:a,username:o})})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[319,2,1]]]);
//# sourceMappingURL=main.96f9fd38.chunk.js.map