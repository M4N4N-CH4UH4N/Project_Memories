(this["webpackJsonpmern-stack-client"]=this["webpackJsonpmern-stack-client"]||[]).push([[0],{136:function(e,t,a){e.exports=a.p+"static/media/memoriesLogo.dc8bbfe3.png"},137:function(e,t,a){e.exports=a.p+"static/media/memoriesText.2b89c5fa.png"},155:function(e,t,a){e.exports=a(214)},213:function(e,t,a){},214:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(12),c=a.n(o),l=a(13),i=a(44),s=a(129),u=a(42),m=a(7),p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{authData:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH":return localStorage.setItem("profile",JSON.stringify(Object(m.a)({},null===t||void 0===t?void 0:t.data))),Object(m.a)(Object(m.a)({},e),{},{authData:t.data,loading:!1,errors:null});case"LOGOUT":return localStorage.clear(),Object(m.a)(Object(m.a)({},e),{},{authData:null,loading:!1,errors:null});default:return e}},d=Object(i.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,posts:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"START_LOADING":return Object(m.a)(Object(m.a)({},e),{},{isLoading:!0});case"END_LOADING":return Object(m.a)(Object(m.a)({},e),{},{isLoading:!1});case"FETCH_ALL":return Object(m.a)(Object(m.a)({},e),{},{posts:t.payload.data,currentPage:t.payload.currentPage,numberOfPages:t.payload.numberOfPages});case"FETCH_BY_SEARCH":case"FETCH_BY_CREATOR":return Object(m.a)(Object(m.a)({},e),{},{posts:t.payload.data});case"FETCH_POST":return Object(m.a)(Object(m.a)({},e),{},{post:t.payload.post});case"LIKE":return Object(m.a)(Object(m.a)({},e),{},{posts:e.posts.map((function(e){return e._id===t.payload._id?t.payload:e}))});case"COMMENT":return Object(m.a)(Object(m.a)({},e),{},{posts:e.posts.map((function(e){return e._id==+t.payload._id?t.payload:e}))});case"CREATE":return Object(m.a)(Object(m.a)({},e),{},{posts:[].concat(Object(u.a)(e.posts),[t.payload])});case"UPDATE":return Object(m.a)(Object(m.a)({},e),{},{posts:e.posts.map((function(e){return e._id===t.payload._id?t.payload:e}))});case"DELETE":return Object(m.a)(Object(m.a)({},e),{},{posts:e.posts.filter((function(e){return e._id!==t.payload}))});default:return e}},auth:p}),f=a(249),g=a(25),b=a(15),v=a(147),h=a(239),E=a(217),O=a(240),x=a(76),y=a.n(x),j=a(10),w=a.n(j),C=a(19),N=a(130),k=a.n(N).a.create({baseURL:"http://localhost:5000"});k.interceptors.request.use((function(e){return localStorage.getItem("profile")&&(e.headers.Authorization="Bearer ".concat(JSON.parse(localStorage.getItem("profile")).token)),e}));var S=function(e){return k.get("/posts/".concat(e))},I=function(e){return k.get("/posts?page=".concat(e))},T=function(e){return k.get("/posts/creator?name=".concat(e))},A=function(e){return k.get("/posts/search?searchQuery=".concat(e.search||"none","&tags=").concat(e.tags))},_=function(e){return k.patch("/posts/".concat(e,"/likePost"))},D=function(e,t){return k.post("/posts/".concat(t,"/commentPost"),{value:e})},L=function(e,t){return k.patch("/posts/".concat(e),t)},P=function(e){return k.delete("/posts/".concat(e))},R=function(e){return k.post("/user/signin",e)},B=function(e){return k.post("/user/signup",e)},F=function(e){return function(){var t=Object(C.a)(w.a.mark((function t(a){var n,r;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:"START_LOADING"}),t.next=4,A(e);case 4:n=t.sent,r=n.data.data,a({type:"FETCH_BY_SEARCH",payload:{data:r}}),a({type:"END_LOADING"}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()},W=function(e,t){return function(){var a=Object(C.a)(w.a.mark((function a(n){var r,o;return w.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n({type:"START_LOADING"}),a.next=4,c=e,k.post("/posts",c);case 4:r=a.sent,o=r.data,n({type:"CREATE",payload:o}),t.push("/posts/".concat(o._id)),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(0),console.log(a.t0);case 13:case"end":return a.stop()}var c}),a,null,[[0,10]])})));return function(e){return a.apply(this,arguments)}}()},H=function(e,t){return function(){var a=Object(C.a)(w.a.mark((function a(n){var r,o;return w.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,L(e,t);case 3:r=a.sent,o=r.data,n({type:"UPDATE",payload:o}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()},z=function(e){return function(){var t=Object(C.a)(w.a.mark((function t(a){var n,r,o;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=JSON.parse(localStorage.getItem("profile")),t.prev=1,t.next=4,_(e,null===n||void 0===n||n.token);case 4:r=t.sent,o=r.data,a({type:"LIKE",payload:o}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},G=function(e,t){return function(){var a=Object(C.a)(w.a.mark((function a(n){var r,o;return w.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,D(e,t);case 3:return r=a.sent,o=r.data,n({type:"COMMENT",payload:o}),a.abrupt("return",o.comments);case 9:a.prev=9,a.t0=a.catch(0),console.log(a.t0);case 12:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()},U=a(23),J=a(252),M=a(238),Y=a(22),K=a(236),Q=Object(K.a)((function(e){return{media:{borderRadius:"20px",objectFit:"cover",width:"100%",maxHeight:"600px"},card:Object(Y.a)({display:"flex",width:"100%"},e.breakpoints.down("sm"),{flexWrap:"wrap",flexDirection:"column"}),section:{borderRadius:"20px",margin:"10px",flex:1},imageSection:Object(Y.a)({marginLeft:"20px"},e.breakpoints.down("sm"),{marginLeft:0}),recommendedPosts:Object(Y.a)({display:"flex"},e.breakpoints.down("sm"),{flexDirection:"column"}),loadingPaper:{display:"flex",justifyContent:"center",alignItems:"center",padding:"20px",borderRadius:"15px",height:"39vh"},commentsOuterContainer:{display:"flex",justifyContent:"space-between"},commentsInnerContainer:{height:"200px",overflowY:"auto",marginRight:"30px"}}})),q=function(e){var t,a=e.post,o=JSON.parse(localStorage.getItem("profile")),c=Object(n.useState)(""),i=Object(U.a)(c,2),s=i[0],u=i[1],m=Object(l.b)(),p=Object(n.useState)(null===a||void 0===a?void 0:a.comments),d=Object(U.a)(p,2),f=d[0],g=d[1],b=Q(),v=Object(n.useRef)(),h=function(){var e=Object(C.a)(w.a.mark((function e(){var t,n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m(G("".concat(null===o||void 0===o||null===(t=o.result)||void 0===t?void 0:t.name,": ").concat(s),a._id));case 2:n=e.sent,u(""),g(n),v.current.scrollIntoView({behavior:"smooth"});case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("div",{className:b.commentsOuterContainer},r.a.createElement("div",{className:b.commentsInnerContainer},r.a.createElement(E.a,{gutterBottom:!0,variant:"h6"},"Comments"),null===f||void 0===f?void 0:f.map((function(e,t){return r.a.createElement(E.a,{key:t,gutterBottom:!0,variant:"subtitle1"},r.a.createElement("strong",null,e.split(": ")[0]),e.split(":")[1])})),r.a.createElement("div",{ref:v})),(null===o||void 0===o||null===(t=o.result)||void 0===t?void 0:t.name)&&r.a.createElement("div",{style:{width:"70%"}},r.a.createElement(E.a,{gutterBottom:!0,variant:"h6"},"Write a comment"),r.a.createElement(J.a,{fullWidth:!0,rows:4,variant:"outlined",label:"Comment",multiline:!0,value:s,onChange:function(e){return u(e.target.value)}}),r.a.createElement("br",null),r.a.createElement(M.a,{style:{marginTop:"10px"},fullWidth:!0,disabled:!s.length,color:"primary",variant:"contained",onClick:h},"Comment"))))},V=a(134),X=a.n(V),Z=function(){var e=Object(l.c)((function(e){return e.posts})),t=e.post,a=e.posts,o=e.isLoading,c=Object(l.b)(),i=Object(b.g)(),s=Q(),u=Object(b.i)().id;if(Object(n.useEffect)((function(){c(function(e){return function(){var t=Object(C.a)(w.a.mark((function t(a){var n,r;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:"START_LOADING"}),t.next=4,S(e);case 4:n=t.sent,r=n.data,a({type:"FETCH_POST",payload:{post:r}}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()}(u))}),[u]),Object(n.useEffect)((function(){t&&c(F({search:"none",tags:null===t||void 0===t?void 0:t.tags.join(",")}))}),[t]),!t)return null;if(o)return r.a.createElement(v.a,{elevation:6,className:s.loadingPaper},r.a.createElement(h.a,{size:"7em"}));var m=a.filter((function(e){return e._id!==t._id}));return r.a.createElement(X.a,null,r.a.createElement(v.a,{style:{padding:"20px",borderRadius:"15px"},elevation:6},r.a.createElement("div",{className:s.card},r.a.createElement("div",{className:s.section},r.a.createElement(E.a,{variant:"h3",component:"h2"},t.title),r.a.createElement(E.a,{gutterBottom:!0,variant:"h6",color:"textSecondary",component:"h2"},t.tags.map((function(e){return r.a.createElement(g.b,{to:"/tags/".concat(e),style:{textDecoration:"none",color:"#3f51b5"}}," #".concat(e," "))}))),r.a.createElement(E.a,{gutterBottom:!0,variant:"body1",component:"p"},t.message),r.a.createElement(E.a,{variant:"h6"},"Created by:",r.a.createElement(g.b,{to:"/creators/".concat(t.name),style:{textDecoration:"none",color:"#3f51b5"}}," ".concat(t.name))),r.a.createElement(E.a,{variant:"body1"},y()(t.createdAt).fromNow()),r.a.createElement(O.a,{style:{margin:"20px 0"}}),r.a.createElement(E.a,{variant:"body1"},r.a.createElement("strong",null,"Realtime Chat - coming soon!")),r.a.createElement(O.a,{style:{margin:"20px 0"}}),r.a.createElement(q,{post:t}),r.a.createElement(O.a,{style:{margin:"20px 0"}})),r.a.createElement("div",{className:s.imageSection},r.a.createElement("img",{className:s.media,src:t.selectedFile||"https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png",alt:t.title}))),m.length&&r.a.createElement("div",{className:s.section},r.a.createElement(E.a,{gutterBottom:!0,variant:"h5"},"You might also like:"),r.a.createElement(O.a,null),r.a.createElement("div",{className:s.recommendedPosts},m.map((function(e){var t=e.title,a=e.name,n=e.message,o=e.likes,c=e.selectedFile,l=e._id;return r.a.createElement("div",{style:{margin:"20px",cursor:"pointer"},onClick:function(){return function(e){return i.push("/posts/".concat(e))}(l)},key:l},r.a.createElement(E.a,{gutterBottom:!0,variant:"h6"},t),r.a.createElement(E.a,{gutterBottom:!0,variant:"subtitle2"},a),r.a.createElement(E.a,{gutterBottom:!0,variant:"subtitle2"},n),r.a.createElement(E.a,{gutterBottom:!0,variant:"subtitle1"},"Likes: ",o.length),r.a.createElement("img",{src:c,width:"200px"}))}))))))},$=a(242),ee=a(243),te=a(255),ae=a(135),ne=a(136),re=a.n(ne),oe=a(137),ce=a.n(oe),le=a(241),ie=Object(K.a)((function(e){return{appBar:Object(Y.a)({borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"10px 50px"},e.breakpoints.down("sm"),{flexDirection:"column"}),heading:{color:e.palette.primary.main,textDecoration:"none",fontSize:"2em",fontWeight:300},image:{marginLeft:"10px",marginTop:"5px"},toolbar:Object(Y.a)({display:"flex",justifyContent:"flex-end",width:"400px"},e.breakpoints.down("sm"),{width:"auto"}),profile:Object(Y.a)({display:"flex",justifyContent:"space-between",width:"400px",alignItems:"center"},e.breakpoints.down("sm"),{width:"auto",marginTop:20,justifyContent:"center"}),logout:{marginLeft:"20px"},userName:{display:"flex",alignItems:"center",textAlign:"center"},brandContainer:{display:"flex",alignItems:"center"},purple:{color:e.palette.getContrastText(le.a[500]),backgroundColor:le.a[500]}}})),se=function(){var e=Object(n.useState)(JSON.parse(localStorage.getItem("profile"))),t=Object(U.a)(e,2),a=t[0],o=t[1],c=Object(l.b)(),i=Object(b.h)(),s=Object(b.g)(),u=ie(),m=function(){c({type:"LOGOUT"}),s.push("/auth"),o(null)};return Object(n.useEffect)((function(){var e=null===a||void 0===a?void 0:a.token;e&&(1e3*Object(ae.a)(e).exp<(new Date).getTime()&&m());o(JSON.parse(localStorage.getItem("profile")))}),[i]),r.a.createElement($.a,{className:u.appBar,position:"static",color:"inherit"},r.a.createElement(g.b,{to:"/",className:u.brandContainer},r.a.createElement("img",{component:g.b,to:"/",src:ce.a,alt:"icon",height:"45px"}),r.a.createElement("img",{className:u.image,src:re.a,alt:"icon",height:"40px"})),r.a.createElement(ee.a,{className:u.toolbar},(null===a||void 0===a?void 0:a.result)?r.a.createElement("div",{className:u.profile},r.a.createElement(te.a,{className:u.purple,alt:null===a||void 0===a?void 0:a.result.name,src:null===a||void 0===a?void 0:a.result.imageUrl},null===a||void 0===a?void 0:a.result.name.charAt(0)),r.a.createElement(E.a,{className:u.userName,variant:"h6"},null===a||void 0===a?void 0:a.result.name),r.a.createElement(M.a,{variant:"contained",className:u.logout,color:"secondary",onClick:m},"Logout")):r.a.createElement(M.a,{component:g.b,to:"/auth",variant:"contained",color:"primary"},"Sign In")))},ue=a(254),me=a(248),pe=a(83),de=a.n(pe),fe=a(138),ge=a.n(fe),be=a(244),ve=a(149),he=a(245),Ee=a(246),Oe=a(247),xe=a(139),ye=a.n(xe),je=a(141),we=a.n(je),Ce=a(140),Ne=a.n(Ce),ke=a(97),Se=a.n(ke),Ie=Object(K.a)({media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"},cardAction:{display:"block",textAlign:"initial"}}),Te=function(e){var t,a,o,c,i,s,m=e.post,p=e.setCurrentId,d=JSON.parse(localStorage.getItem("profile")),f=Object(n.useState)(null===m||void 0===m?void 0:m.likes),g=Object(U.a)(f,2),v=g[0],h=g[1],O=Object(l.b)(),x=Object(b.g)(),j=Ie(),N=(null===d||void 0===d?void 0:d.result.googleId)||(null===d||void 0===d||null===(t=d.result)||void 0===t?void 0:t._id),k=null===m||void 0===m||null===(a=m.likes)||void 0===a?void 0:a.find((function(e){return e===N})),S=function(){var e=Object(C.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:O(z(m._id)),h(k?m.likes.filter((function(e){return e!==N})):[].concat(Object(u.a)(m.likes),[N]));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){return(null===v||void 0===v?void 0:v.length)>0?(null===v||void 0===v?void 0:v.find((function(e){return e===N})))?r.a.createElement(r.a.Fragment,null,r.a.createElement(ye.a,{fontSize:"small"}),"\xa0",v.length>2?"You and ".concat(v.length-1," others"):"".concat(v.length," like").concat(v.length>1?"s":"")):r.a.createElement(r.a.Fragment,null,r.a.createElement(Se.a,{fontSize:"small"}),"\xa0",v.length," ",1===v.length?"Like":"Likes"):r.a.createElement(r.a.Fragment,null,r.a.createElement(Se.a,{fontSize:"small"}),"\xa0Like")};return r.a.createElement(be.a,{className:j.card,raised:!0,elevation:6},r.a.createElement(ve.a,{component:"span",name:"test",className:j.cardAction,onClick:function(e){x.push("/posts/".concat(m._id))}},r.a.createElement(he.a,{className:j.media,image:m.selectedFile||"https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png",title:m.title}),r.a.createElement("div",{className:j.overlay},r.a.createElement(E.a,{variant:"h6"},m.name),r.a.createElement(E.a,{variant:"body2"},y()(m.createdAt).fromNow())),((null===d||void 0===d||null===(o=d.result)||void 0===o?void 0:o.googleId)===(null===m||void 0===m?void 0:m.creator)||(null===d||void 0===d||null===(c=d.result)||void 0===c?void 0:c._id)===(null===m||void 0===m?void 0:m.creator))&&r.a.createElement("div",{className:j.overlay2,name:"edit"},r.a.createElement(M.a,{onClick:function(e){e.stopPropagation(),p(m._id)},style:{color:"white"},size:"small"},r.a.createElement(Ne.a,{fontSize:"default"}))),r.a.createElement("div",{className:j.details},r.a.createElement(E.a,{variant:"body2",color:"textSecondary",component:"h2"},m.tags.map((function(e){return"#".concat(e," ")})))),r.a.createElement(E.a,{className:j.title,gutterBottom:!0,variant:"h5",component:"h2"},m.title),r.a.createElement(Ee.a,null,r.a.createElement(E.a,{variant:"body2",color:"textSecondary",component:"p"},m.message.split(" ").splice(0,20).join(" "),"..."))),r.a.createElement(Oe.a,{className:j.cardActions},r.a.createElement(M.a,{size:"small",color:"primary",disabled:!(null===d||void 0===d?void 0:d.result),onClick:S},r.a.createElement(I,null)),((null===d||void 0===d||null===(i=d.result)||void 0===i?void 0:i.googleId)===(null===m||void 0===m?void 0:m.creator)||(null===d||void 0===d||null===(s=d.result)||void 0===s?void 0:s._id)===(null===m||void 0===m?void 0:m.creator))&&r.a.createElement(M.a,{size:"small",color:"secondary",onClick:function(){return O((e=m._id,function(){var t=Object(C.a)(w.a.mark((function t(a){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,P(e);case 3:a({type:"DELETE",payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()));var e}},r.a.createElement(we.a,{fontSize:"small"})," \xa0 Delete")))},Ae=Object(K.a)((function(e){var t;return t={mainContainer:{borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"10px 50px"},heading:{color:"rgba(0,183,255, 1)",textDecoration:"none"},image:{marginLeft:"15px"},toolbar:{display:"flex",justifyContent:"flex-end",width:"400px"},profile:{display:"flex",justifyContent:"space-between",width:"400px"},userName:{display:"flex",alignItems:"center"},brandContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},purple:{color:e.palette.getContrastText(le.a[500]),backgroundColor:le.a[500]}},Object(Y.a)(t,e.breakpoints.down("sm"),{appBar:{padding:"10px 20px"},heading:{display:"none"},userName:{display:"none"},image:{marginLeft:"5px"},toolbar:{display:"flex",justifyContent:"flex-end",width:"160px"}}),Object(Y.a)(t,"actionDiv",{textAlign:"center"}),t})),_e=function(e){var t=e.setCurrentId,a=Object(l.c)((function(e){return e.posts})),n=a.posts,o=a.isLoading,c=Ae();return n.length||o?o?r.a.createElement(h.a,null):r.a.createElement(me.a,{className:c.container,container:!0,alignItems:"stretch",spacing:3},null===n||void 0===n?void 0:n.map((function(e){return r.a.createElement(me.a,{key:e._id,item:!0,xs:12,sm:12,md:6,lg:3},r.a.createElement(ge.a,null,r.a.createElement(Te,{post:e,setCurrentId:t})))}))):"No posts"},De=a(142),Le=a.n(De),Pe=Object(K.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10}}})),Re=function(e){var t,a=e.currentId,o=e.setCurrentId,c=Object(n.useState)({title:"",message:"",tags:[],selectedFile:""}),i=Object(U.a)(c,2),s=i[0],p=i[1],d=Object(l.c)((function(e){return a?e.posts.posts.find((function(e){return e._id===a})):null})),f=Object(l.b)(),g=Pe(),h=JSON.parse(localStorage.getItem("profile")),O=Object(b.g)(),x=function(){o(0),p({title:"",message:"",tags:[],selectedFile:""})};Object(n.useEffect)((function(){(null===d||void 0===d?void 0:d.title)||x(),d&&p(d)}),[d]);var y=function(){var e=Object(C.a)(w.a.mark((function e(t){var n,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),0===a?(f(W(Object(m.a)(Object(m.a)({},s),{},{name:null===h||void 0===h||null===(n=h.result)||void 0===n?void 0:n.name}),O)),x()):(f(H(a,Object(m.a)(Object(m.a)({},s),{},{name:null===h||void 0===h||null===(r=h.result)||void 0===r?void 0:r.name}))),x());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();if(!(null===h||void 0===h||null===(t=h.result)||void 0===t?void 0:t.name))return r.a.createElement(v.a,{className:g.paper,elevation:6},r.a.createElement(E.a,{variant:"h6",align:"center"},"Please Sign In to create your own memories and like other's memories."));return r.a.createElement(v.a,{className:g.paper,elevation:6},r.a.createElement("form",{autoComplete:"off",noValidate:!0,className:"".concat(g.root," ").concat(g.form),onSubmit:y},r.a.createElement(E.a,{variant:"h6"},a?'Editing "'.concat(null===d||void 0===d?void 0:d.title,'"'):"Creating a Memory"),r.a.createElement(J.a,{name:"title",variant:"outlined",label:"Title",fullWidth:!0,value:s.title,onChange:function(e){return p(Object(m.a)(Object(m.a)({},s),{},{title:e.target.value}))}}),r.a.createElement(J.a,{name:"message",variant:"outlined",label:"Message",fullWidth:!0,multiline:!0,rows:4,value:s.message,onChange:function(e){return p(Object(m.a)(Object(m.a)({},s),{},{message:e.target.value}))}}),r.a.createElement("div",{style:{padding:"5px 0",width:"94%"}},r.a.createElement(de.a,{name:"tags",variant:"outlined",label:"Tags",fullWidth:!0,value:s.tags,onAdd:function(e){return t=e,void p(Object(m.a)(Object(m.a)({},s),{},{tags:[].concat(Object(u.a)(s.tags),[t])}));var t},onDelete:function(e){return t=e,void p(Object(m.a)(Object(m.a)({},s),{},{tags:s.tags.filter((function(e){return e!==t}))}));var t}})),r.a.createElement("div",{className:g.fileInput},r.a.createElement(Le.a,{type:"file",multiple:!1,onDone:function(e){var t=e.base64;return p(Object(m.a)(Object(m.a)({},s),{},{selectedFile:t}))}})),r.a.createElement(M.a,{className:g.buttonSubmit,variant:"contained",color:"primary",size:"large",type:"submit",fullWidth:!0},"Submit"),r.a.createElement(M.a,{variant:"contained",color:"secondary",size:"small",onClick:x,fullWidth:!0},"Clear")))},Be=a(256),Fe=a(253),We=Object(K.a)((function(){return{ul:{justifyContent:"space-around"}}})),He=function(e){var t=e.page,a=Object(l.c)((function(e){return e.posts})).numberOfPages,o=Object(l.b)(),c=We();return Object(n.useEffect)((function(){t&&o(function(e){return function(){var t=Object(C.a)(w.a.mark((function t(a){var n,r,o,c,l;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:"START_LOADING"}),t.next=4,I(e);case 4:n=t.sent,r=n.data,o=r.data,c=r.currentPage,l=r.numberOfPages,a({type:"FETCH_ALL",payload:{data:o,currentPage:c,numberOfPages:l}}),a({type:"END_LOADING"}),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),console.log(t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(e){return t.apply(this,arguments)}}()}(t))}),[o,t]),r.a.createElement(Be.a,{classes:{ul:c.ul},count:a,page:Number(t)||1,variant:"outlined",color:"primary",renderItem:function(e){return r.a.createElement(Fe.a,Object.assign({},e,{component:g.b,to:"/posts?page=".concat(e.page)}))}})},ze=Object(K.a)((function(e){return{appBarSearch:{borderRadius:4,marginBottom:"1rem",display:"flex",padding:"16px"},pagination:{borderRadius:4,marginTop:"1rem",padding:"16px"},gridContainer:Object(Y.a)({},e.breakpoints.down("xs"),{flexDirection:"column-reverse"})}}));var Ge=function(){var e=ze(),t=new URLSearchParams(Object(b.h)().search),a=t.get("page")||1,o=t.get("searchQuery"),c=Object(n.useState)(0),i=Object(U.a)(c,2),s=i[0],m=i[1],p=Object(l.b)(),d=Object(n.useState)(""),g=Object(U.a)(d,2),h=g[0],E=g[1],O=Object(n.useState)([]),x=Object(U.a)(O,2),y=x[0],j=x[1],w=Object(b.g)(),C=function(){h.trim()||y?(p(F({search:h,tags:y.join(",")})),w.push("/posts/search?searchQuery=".concat(h||"none","&tags=").concat(y.join(",")))):w.push("/")};return r.a.createElement(ue.a,{in:!0},r.a.createElement(f.a,{maxWidth:"xl"},r.a.createElement(me.a,{container:!0,justify:"space-between",alignItems:"stretch",spacing:3,className:e.gridContainer},r.a.createElement(me.a,{item:!0,xs:12,sm:6,md:9},r.a.createElement(_e,{setCurrentId:m})),r.a.createElement(me.a,{item:!0,xs:12,sm:6,md:3},r.a.createElement($.a,{className:e.appBarSearch,position:"static",color:"inherit"},r.a.createElement(J.a,{onKeyDown:function(e){13===e.keyCode&&C()},name:"search",variant:"outlined",label:"Search Memories",fullWidth:!0,value:h,onChange:function(e){return E(e.target.value)}}),r.a.createElement(de.a,{style:{margin:"10px 0"},value:y,onAdd:function(e){return j([].concat(Object(u.a)(y),[e]))},onDelete:function(e){return j(y.filter((function(t){return t!==e})))},label:"Search Tags",variant:"outlined"}),r.a.createElement(M.a,{onClick:C,className:e.searchButton,variant:"contained",color:"primary"},"Search")),r.a.createElement(Re,{currentId:s,setCurrentId:m}),!o&&!y.length&&r.a.createElement(v.a,{className:e.pagination,elevation:6},r.a.createElement(He,{page:a}))))))},Ue=a(145),Je=a.n(Ue),Me=Object(K.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center",padding:e.spacing(2)},root:{"& .MuiTextField-root":{margin:e.spacing(1)}},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},googleButton:{marginBottom:e.spacing(2)}}})),Ye=a(250),Ke=a(251),Qe=a(143),qe=a.n(Qe),Ve=a(144),Xe=a.n(Ve),Ze=function(e){var t=e.name,a=e.handleChange,n=e.label,o=e.half,c=e.autoFocus,l=e.type,i=e.handleShowPassword;return r.a.createElement(me.a,{item:!0,xs:12,sm:o?6:12},r.a.createElement(J.a,{name:t,onChange:a,variant:"outlined",required:!0,fullWidth:!0,label:n,autoFocus:c,type:l,InputProps:"password"===t?{endAdornment:r.a.createElement(Ye.a,{position:"end"},r.a.createElement(Ke.a,{onClick:i},"password"===l?r.a.createElement(qe.a,null):r.a.createElement(Xe.a,null)))}:null}))},$e={firstName:"",lastName:"",email:"",password:"",confirmPassword:""},et=function(){var e=Object(n.useState)($e),t=Object(U.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(!1),i=Object(U.a)(c,2),s=i[0],u=i[1],p=Object(l.b)(),d=Object(b.g)(),g=Me(),h=Object(n.useState)(!1),O=Object(U.a)(h,2),x=O[0],y=O[1],j=function(e){return o(Object(m.a)(Object(m.a)({},a),{},Object(Y.a)({},e.target.name,e.target.value)))};return r.a.createElement(f.a,{component:"main",maxWidth:"xs"},r.a.createElement(v.a,{className:g.paper,elevation:6},r.a.createElement(te.a,{className:g.avatar},r.a.createElement(Je.a,null)),r.a.createElement(E.a,{component:"h1",variant:"h5"},s?"Sign up":"Sign in"),r.a.createElement("form",{className:g.form,onSubmit:function(e){var t,n;e.preventDefault(),p(s?(t=a,n=d,function(){var e=Object(C.a)(w.a.mark((function e(a){var r,o;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,B(t);case 3:r=e.sent,o=r.data,a({type:"AUTH",data:o}),n.push("/"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()):function(e,t){return function(){var a=Object(C.a)(w.a.mark((function a(n){var r,o;return w.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,R(e);case 3:r=a.sent,o=r.data,n({type:"AUTH",data:o}),t.push("/"),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),console.log(a.t0);case 12:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()}(a,d))}},r.a.createElement(me.a,{container:!0,spacing:2},s&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Ze,{name:"firstName",label:"First Name",handleChange:j,autoFocus:!0,half:!0}),r.a.createElement(Ze,{name:"lastName",label:"Last Name",handleChange:j,half:!0})),r.a.createElement(Ze,{name:"email",label:"Email Address",handleChange:j,type:"email"}),r.a.createElement(Ze,{name:"password",label:"Password",handleChange:j,type:x?"text":"password",handleShowPassword:function(){return y(!x)}}),s&&r.a.createElement(Ze,{name:"confirmPassword",label:"Repeat Password",handleChange:j,type:"password"})),r.a.createElement(M.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:g.submit},s?"Sign Up":"Sign In"),r.a.createElement(me.a,{container:!0,justify:"flex-end"},r.a.createElement(me.a,{item:!0},r.a.createElement(M.a,{onClick:function(){o($e),u((function(e){return!e})),y(!1)}},s?"Already have an account? Sign in":"Don't have an account? Sign Up"))))))},tt=function(){var e=Object(b.i)().name,t=Object(l.b)(),a=Object(l.c)((function(e){return e.posts})),o=a.posts,c=a.isLoading,i=Object(b.h)();return Object(n.useEffect)((function(){i.pathname.startsWith("/tags")?t(F({tags:e})):t(function(e){return function(){var t=Object(C.a)(w.a.mark((function t(a){var n,r;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:"START_LOADING"}),t.next=4,T(e);case 4:n=t.sent,r=n.data.data,a({type:"FETCH_BY_CREATOR",payload:{data:r}}),a({type:"END_LOADING"}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()}(e))}),[]),o.length||c?r.a.createElement("div",null,r.a.createElement(E.a,{variant:"h2"},e),r.a.createElement(O.a,{style:{margin:"20px 0 50px 0"}}),c?r.a.createElement(h.a,null):r.a.createElement(me.a,{container:!0,alignItems:"stretch",spacing:3},null===o||void 0===o?void 0:o.map((function(e){return r.a.createElement(me.a,{key:e._id,item:!0,xs:12,sm:12,md:6,lg:3},r.a.createElement(Te,{post:e}))})))):"No posts"},at=function(){var e=JSON.parse(localStorage.getItem("profile"));return r.a.createElement(g.a,null,r.a.createElement(f.a,{maxWidth:"xl"},r.a.createElement(se,null),r.a.createElement(b.d,null,r.a.createElement(b.b,{path:"/",exact:!0,component:function(){return r.a.createElement(b.a,{to:"/posts"})}}),r.a.createElement(b.b,{path:"/posts",exact:!0,component:Ge}),r.a.createElement(b.b,{path:"/posts/search",exact:!0,component:Ge}),r.a.createElement(b.b,{path:"/posts/:id",exact:!0,component:Z}),r.a.createElement(b.b,{path:["/creators/:name","/tags/:name"],component:tt}),r.a.createElement(b.b,{path:"/auth",exact:!0,component:function(){return e?r.a.createElement(b.a,{to:"/posts"}):r.a.createElement(et,null)}}))))},nt=(a(213),Object(i.e)(d,{},Object(i.d)(Object(i.a)(s.a))));c.a.render(r.a.createElement(l.a,{store:nt},r.a.createElement(at,null)),document.getElementById("root"))}},[[155,1,2]]]);
//# sourceMappingURL=main.f2d0ae49.chunk.js.map