(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[0],{10:function(e,t,a){e.exports={MoviesPage:"MoviesPage_MoviesPage__2nRA6",SearchForm:"MoviesPage_SearchForm__T6L6x",SearchFormButton:"MoviesPage_SearchFormButton__3WHcn",SearchFormButtonLabel:"MoviesPage_SearchFormButtonLabel__3Wdjk",SearchFormInput:"MoviesPage_SearchFormInput__1BQTp"}},12:function(e,t,a){e.exports={link:"Navigation_link__2L6lq",activeLink:"Navigation_activeLink__1xbYI Navigation_link__2L6lq"}},29:function(e,t,a){e.exports={container:"Container_container__1Nnov"}},37:function(e,t,a){},38:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(28),i=a.n(r),o=a(8),s=(a(37),a(38),a(2)),j=a(29),l=a.n(j),u=a(1);function h(e){var t=e.children;return Object(u.jsx)("div",{className:l.a.container,children:t})}var b=a(12),m=a.n(b),d=function(){return Object(u.jsxs)("nav",{children:[Object(u.jsx)(o.c,{exact:!0,to:"/",className:m.a.link,activeClassName:m.a.activeLink,children:"Home"}),Object(u.jsx)(o.c,{to:"/movies",className:m.a.link,activeClassName:m.a.activeLink,children:"Movies"})]})},v=a(15),x=a(32),O=a.n(x);function f(){var e=Object(c.useState)([]),t=Object(v.a)(e,2),a=t[0],n=t[1];return Object(c.useEffect)((function(){O.a.get("".concat("https://api.themoviedb.org/3/","trending/movie/day").concat("?api_key=5ac7dab86f0784856afa396a121529bf")).then((function(e){return n(e.data.results)})).catch((function(e){return console.log(e)}))}),[]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{className:"",children:"Trending today"}),Object(u.jsx)("ul",{className:"",children:a.map((function(e){return Object(u.jsx)("li",{children:Object(u.jsx)(o.b,{to:{pathname:"/movies/".concat(e.id),state:{from:"/",label:"Back to Home"}},children:e.title})},e.id)}))})]})}var _=a(10),p=a.n(_);var g=function(e){var t=e.onSubmit,a=Object(c.useState)(""),n=Object(v.a)(a,2),r=n[0],i=n[1];return Object(u.jsx)("header",{className:p.a.MoviesPage,children:Object(u.jsxs)("form",{className:p.a.SearchForm,onSubmit:function(e){e.preventDefault(),""!==r.trim()?(t(r),i("")):alert("B\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441!!!")},children:[Object(u.jsx)("button",{type:"submit",className:p.a.SearchFormButton,children:Object(u.jsx)("span",{className:p.a.SearchFormButtonLabel,children:"Search"})}),Object(u.jsx)("input",{className:p.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:function(e){i(e.currentTarget.value.toLowerCase())},value:r})]})})};function S(){return Object(u.jsx)("h1",{children:"404 \u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430 :("})}var N=function(){return Object(u.jsxs)(h,{children:[Object(u.jsx)(d,{}),Object(u.jsx)(c.Suspense,{children:Object(u.jsxs)(s.c,{children:[Object(u.jsx)(s.a,{path:"/",exact:!0,children:Object(u.jsx)(f,{})}),Object(u.jsx)(s.a,{children:Object(u.jsx)(g,{})}),Object(u.jsx)(s.a,{children:Object(u.jsx)(S,{})})]})})]})};i.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(o.a,{children:Object(u.jsx)(N,{})})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.91d3dead.chunk.js.map