(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{"J/mE":function(e,t,r){"use strict";(function(e){var a=r("HeVR"),n=r("Wcl9"),i=r("yZHS"),s=r.n(i),o=r("Rfo6"),c=r("ABXw"),l=r("oxME"),d=r("jxKE"),u=function(e){return"0"===e||" 0"===e};t.a=function(t){var r=t.mainSidebar,i=t.mainSidebarHidden,b=void 0!==i&&i,f=t.totalWidth,h=void 0===f?18.75:f,v=Object(c.a)(["sidebar"]),m=Object(n.a)(v,3),j=m[0],p=m[1],g=m[2],x=s.a.useState(!1),O=Object(n.a)(x,2),y=O[0],w=O[1],_=s.a.useState("false"!==j.sidebar),k=Object(n.a)(_,2),E=k[0],I=k[1],P=s.a.useState(!1),S=Object(n.a)(P,2),N=S[0],C=S[1];s.a.useEffect((function(){var e,t;null!==(e=(t=window).matchMedia)&&void 0!==e&&e.call(t,"(min-width: 600px)").matches?I("false"!==j.sidebar):I(b)}),["false"!==j.sidebar]);var L=function(){return w(!0)},A=function(){return w(!1)};s.a.useEffect((function(){null===document.getElementById("sidebar-caret-collapse-2")||N||C(!0)}),[N]),s.a.useEffect((function(){var e="sidebar-caret-collapse-".concat(r?"main":"2"),t=document.getElementById(e);if(null!==t){var a=t.parentNode;return a.addEventListener("mouseover",L),a.addEventListener("mouseleave",A),function(){a.removeEventListener("mouseover",L),a.removeEventListener("mouseleave",A)}}}),[]),s.a.useEffect((function(){var e,t;if(!r){var a=document.getElementById("sidebar-caret-collapse-2");if(null!==a){var n=a.parentElement,i=b?"calc(3rem + (".concat(h-3,"rem * var(--sidebar)))"):"calc(".concat(h,"rem * var(--sidebar))");null!==(e=(t=window).matchMedia)&&void 0!==e&&e.call(t,"(min-width: 600px)").matches?(n.style.width=i,n.style.maxWidth=i):(n.style.width="calc(18.75rem * var(--sidebar))",n.style.maxWidth="calc(18.75rem * var(--sidebar))");var s=document.querySelector("#__next"),o=function(e){e.matches?(n.style.width=i,n.style.maxWidth=i,E&&(n.classList.add("overflow-visible"),s.style.removeProperty("--sidebar"),g("sidebar"))):(n.style.width="calc(18.75rem * var(--sidebar))",n.style.maxWidth="calc(18.75rem * var(--sidebar))",E&&n.classList.remove("overflow-visible"),b&&(I(!0),g("sidebar")))},c=window.matchMedia("(min-width: 600px)");return c.addEventListener("change",o),function(){c.removeEventListener("change",o)}}}}),[b,E,r]),s.a.useEffect((function(){var e,t;if(!r){var a=document.getElementById("sidebar-caret-collapse-2");if(null!==a){var n=a.parentElement;null!==(e=(t=window).matchMedia)&&void 0!==e&&e.call(t,"(min-width: 600px)").matches&&(E?n.classList.add("overflow-visible"):n.classList.remove("overflow-visible"))}}}),[E,r]),s.a.useEffect((function(){var e,t;if(!r){var a=document.getElementById("sidebar-caret-collapse-2");if(null!==a){var n=a.parentElement,i=document.querySelector("#__next"),s=i?getComputedStyle(i).getPropertyValue("--sidebar"):void 0;null!==(e=(t=window).matchMedia)&&void 0!==e&&e.call(t,"(min-width: 600px)").matches&&(u(s)?(n.classList.remove("overflow-visible"),I(!1)):(n.classList.add("overflow-visible"),I(!0)))}}}),[r]);var T=E?!N||N&&!r:r||b;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(l.a,{overlay:"".concat(E?"Collapse":"Expand"," Sidebar"),position:d.hc,padding:"px-4 py-1.5",parentClasses:"absolute top-4 cursor-pointer w-8 h-8 items-center justify-center transition duration-300 z-30 \n        ".concat(E?"-right-4 rounded-full bg-white dark:bg-dark-80 border border-solid border-gray-200 dark:border-dark-70":"right-2","\n        ").concat(y||!E?"opacity-100":"opacity-0","\n        ").concat(T?"tailwind-hidden sm:flex":"hidden"),id:"sidebar-caret-collapse-".concat(r?"main":"2"),onClick:function(){var e,t;r&&null!==document.getElementById("sidebar-caret-collapse-2")&&!N&&C(!0);var a=document.querySelector("#__next"),n=a?getComputedStyle(a).getPropertyValue("--sidebar"):void 0;null!==(e=(t=window).matchMedia)&&void 0!==e&&e.call(t,"(min-width: 600px)").matches?u(n)?(a.style.removeProperty("--sidebar"),g("sidebar")):(a.style.setProperty("--sidebar","0"),p("sidebar",!1)):!function(e){return"1"===e||" 1"===e}(n)?a.style.setProperty("--sidebar","1"):a.style.removeProperty("--sidebar"),I((function(e){return!e}))},overlayParentStyles:{borderWidth:"0.5px"},"aria-label":"toggle sidebar",children:Object(a.jsx)(o.a,{className:"stroke-current text-gray-A200 dark:text-gray-200 m-0 transform transition-all duration-600 ease-in-out ".concat(E?"rotate-0":"rotate-180"," ")})}),(r||b)&&!E&&Object(a.jsx)("div",{id:e.env.REACT_APP_STANDALONE?"selenium-sidebar-placeholder":null,className:"tailwind-hidden sm:block absolute h-full w-full bg-white dark:bg-dark-80 border-0 border-r border-solid border-gray-200 dark:border-dark-70 z-20"})]})}}).call(this,r("viS8"))},Rfo6:function(e,t,r){"use strict";var a,n=r("yZHS");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}t.a=function(e){return n.createElement("svg",i({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-chevron-left"},e),a||(a=n.createElement("polyline",{points:"15 18 9 12 15 6"})))}},vQEP:function(e,t,r){"use strict";var a,n,i=r("HeVR"),s=r("Wcl9"),o=r("yZHS"),c=r.n(o),l=r("NNBf"),d=r("LCSC"),u=r("ABXw"),b=r("Rfo6"),f=r("0Xgo"),h=r("MrRq"),v=r("qgSY"),m=r("2TDz"),j=r("waO9"),p=r("cao8"),g=r("d7AX"),x=r("jO1V"),O=r("reap"),y=r("tu1G"),w=r("Cz0k"),_=r("r7fO"),k=r.n(_),E=r("y71I"),I=r("5d6T"),P=r("jxKE"),S=r("vPyr"),N=r.n(S),C=function(e){var t=e.showIf,r=e.Icon,a=e.iconClass,n=void 0===a?"stroke-current":a,o=e.title,c=e.href,b=e.onClick,f=e.showBadge,h=void 0!==f&&f,v=e.badgeText,m=void 0===v?"New":v,j=e.badgeStyles,p=void 0===j?"":j,g=e.selectedBadgeStyles,x=void 0===g?"":g,O=e.activeHref,y=e.unWrapLink,w=Object(d.useRouter)(),_=Object(u.a)(["theme","use_system_preference"]),S=Object(s.a)(_,1)[0],C=Object(l.c)((function(e){var t,r;return null===(t=e.user)||void 0===t||null===(r=t.info)||void 0===r?void 0:r.data})),L=Object(l.c)((function(e){var t,r;return null===(t=e.user)||void 0===t||null===(r=t.info)||void 0===r?void 0:r.loaded})),A=Object(I.e)({cookies:S,userInfo:C,userInfoLoaded:L})===P.Gc.DARK_MODE,T=O?O===w.pathname:N.a.parseUrl(w.asPath).url===c||"/explore"===c&&N.a.parseUrl(w.asPath).url.includes(c),B=Object(i.jsxs)("a",{onClick:b,href:c,className:"flex flex-col items-center w-full cursor-pointer py-3 px-1 ".concat(O?O===w.pathname?"bg-gray-A700 hover:bg-gray-A900 hover:text-white focus:text-white text-white":"hover:bg-gray-buttonHover text-black dark:text-dark-contrastText hover:text-black focus:text-black":N.a.parseUrl(w.asPath).url===c||"/explore"===c&&N.a.parseUrl(w.asPath).url.includes(c)?"bg-gray-A700 dark:bg-gray-A400 hover:bg-gray-A900 dark:hover:bg-alphas-primary3 hover:text-white focus:text-white text-white":"hover:bg-gray-buttonHover text-black hover:text-black dark:text-dark-contrastText focus:text-black"),title:o,children:[h&&Object(i.jsx)(E.a,{className:"mb-2 px-2 ".concat(T?x:p),children:m}),Object(i.jsx)(r,{isDarkMode:A,isActive:N.a.parseUrl(w.asPath).url===c,className:"mb-2 w-6 h-6 dark:text-dark-contrastText ".concat(n)}),Object(i.jsx)("span",{className:"text-xs font-semibold tracking-wide dark:text-dark-contrastText",children:o})]});return!1===t?null:c&&!y?Object(i.jsx)(k.a,{href:c,children:B}):B},L=r("mymk"),A=r("dP4l"),T=r("+Zpp"),B=r("Jn46"),R=r("kRT8");function H(){return(H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var M=function(e){return o.createElement("svg",H({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),a||(a=o.createElement("g",{clipPath:"url(#a)"},o.createElement("path",{d:"M10.5 9 2 6.4 15.1 4h.2l7.6 2.2c.3 0 .3.4 0 .5L10.6 8.9h-.1Z",fill:"currentColor"}),o.createElement("path",{d:"m2 18.5 8.5 2.5h.1l11.8-2.4c.2 0 .2-.2.2-.3v-6c0-.1-.1-.3-.3-.2l-11.7 2.4h-.1L2 12H2c-.7-.6-1.8-3.6 0-5.5m0 0 8.5 2.4h.1L23 6.7c.3 0 .3-.5 0-.5L15.3 4H15l-13 2.5Z",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round"}))),n||(n=o.createElement("defs",null,o.createElement("clipPath",{id:"a"},o.createElement("path",{fill:"#fff",d:"M0 0h24v24H0z"})))))},D=function(){var e,t,r,a,n,o,u,b,_,k=Object(d.useRouter)(),E=Object(l.b)(),I=Object(l.c)((function(e){return e.user.info})),S=null===I||void 0===I?void 0:I.data,N=Object(l.c)((function(e){return e.userConfig})),H=["/teach","/create-answer","/learning-plans-dashboard/[selectedTab]","/assessments-dashboard"].includes(k.pathname),D=c.a.useState(H),W=Object(s.a)(D,2),z=W[0],q=W[1],F=Object(l.c)((function(e){var t,r;return null===(t=e.user)||void 0===t||null===(r=t.subscriptions)||void 0===r?void 0:r.loaded})),G=Object(l.c)((function(e){var t,r,a,n,i,s,o,c;return null!==e&&void 0!==e&&null!==(t=e.user)&&void 0!==t&&null!==(r=t.info)&&void 0!==r&&null!==(a=r.data)&&void 0!==a&&a.user_id&&F?null===e||void 0===e||null===(n=e.user)||void 0===n||null===(i=n.subscriptions)||void 0===i||null===(s=i.data)||void 0===s?void 0:s.subscriptions:null===e||void 0===e||null===(o=e.userConfig)||void 0===o||null===(c=o.data)||void 0===c?void 0:c.subscriptions}));G=G||[];var J=Object(l.c)((function(e){var t,r,a,n,i,s,o;return!(null===e||void 0===e||null===(t=e.user)||void 0===t||null===(r=t.info)||void 0===r||null===(a=r.data)||void 0===a||!a.user_id)&&(null===e||void 0===e||null===(n=e.user)||void 0===n||null===(i=n.subscriptions)||void 0===i||null===(s=i.data)||void 0===s||null===(o=s.subscription_feature_type)||void 0===o?void 0:o.is_premium_user)}));if(c.a.useEffect((function(){var e,t=document.querySelector("#__next");I.loggedOut&&(null===t||void 0===t||null===(e=t.style)||void 0===e||e.setProperty("--sidebar","0"))}),[I]),!S||!F)return null;var K=!!F&&Object(B.e)(G),U=!(null===S||void 0===S||null===(e=S.enterprise)||void 0===e||null===(t=e.organizations)||void 0===t||!t.find((function(e){return e.is_admin||e.is_subscriber}))),Z=Object(A.d)(S,"onboarding_enabled"),V=!(null===S||void 0===S||null===(r=S.enterprise)||void 0===r||null===(a=r.organizations)||void 0===a||!a.find((function(e){return(e.is_admin||e.is_subscriber)&&e.can_create_public_content}))),X=!(null===S||void 0===S||null===(n=S.enterprise)||void 0===n||null===(o=n.organizations)||void 0===o||!o.find((function(e){return(e.is_admin||e.is_subscriber)&&e.can_create_private_content}))),Y=S.can_create_all_editor_pages||S.can_create_marketing_pages,Q=S.can_create_all_editor_pages||S.can_create_blogs,$=(S.can_edit_edpresso_shot||S.can_publish_edpresso_shot)&&(!U||V),ee=!U||V,te=S.can_view_beta_features||X,re=S.can_manage_learning_plans,ae=S.can_create_templates,ne=!!Z,ie=$||Y||Q||ee||te||re||ae||ne,se=Object(A.f)(S),oe=!!Object(A.b)(S),ce=!!Object(A.c)(S),le=null===S||void 0===S||null===(u=S.email)||void 0===u?void 0:u.endsWith("@educative.io"),de=!!Object(A.d)(S,"can_access_learning_plans"),ue=!!Object(A.d)(S,"can_access_standalone_projects");return se?null:Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("nav",{className:"ed-grid-sidebar dark:bg-dark-80 transition-none",children:[Object(i.jsx)(C,{title:"My Learning",href:"/learn",Icon:f.Learn}),Object(i.jsx)(C,{title:"Explore",href:"/explore",Icon:x.a}),Object(i.jsx)(C,{title:"Personalized Plans",href:"/learning-plans",Icon:f.LearningPlansPremium,onClick:function(){return Object(T.e)(T.c.LEARNING_PLANS,T.b.LP_SIDEBAR_CTA_CLICK,E(Object(T.d)()))},showIf:le||J||(U?de:K)}),Object(i.jsx)(C,{title:"Projects",href:"/projects",Icon:f.ProjectsPremium,activeHref:"/projects",iconClass:"stroke-current",showIf:le||J||(U?ue:K),onClick:function(){Object(T.e)(T.c.STANDALONE_PROJECT,T.b.PROJECTS_SIDEBAR_ICON_CLICKED,E(Object(T.d)()))}}),Object(i.jsx)(C,{title:"Tracks",href:"/tracks",Icon:f.Tracks,showIf:!Object(L.c)(null===(b=N.data)||void 0===b?void 0:b.constants[P.G.PATHS_ENABLED_GLOBALLY])}),Object(i.jsx)(C,{title:"Paths",href:"/paths",Icon:f.MarketingPages,showIf:Object(L.c)(null===(_=N.data)||void 0===_?void 0:_.constants[P.G.PATHS_ENABLED_GLOBALLY])}),Object(i.jsx)(C,{title:"Assessments",href:"/assessments",Icon:v.a,iconClass:"fill-current",onClick:function(){(Z||oe||U||ce)&&Object(T.e)(T.c.ENTERPRISE_ASSESSMENTS,T.b.ASSESS_CLICKED_SIDEBAR),Object(T.e)(T.c.ASSESSMENT,T.b.SA_CLICKED_IN_SIDEBAR,"/assessments")}}),Object(i.jsx)("div",{className:"flex-grow pt-16"}),Object(i.jsx)(C,{title:"Onboarding",href:Object(A.g)(S,null===Z||void 0===Z?void 0:Z.organization_id)?"/onboarding/admin":Object(A.i)(S,null===Z||void 0===Z?void 0:Z.organization_id)?"/onboarding/dashboard":"/onboarding/plans",Icon:h.a,iconClass:"fill-current",showIf:!!Z,activeHref:"/onboarding/[selectedTab]"}),Object(i.jsx)(C,{title:"Enterprise Dashboard",href:"/enterprise-dashboard/manager-dashboard",Icon:m.a,iconClass:"fill-current",showIf:oe||ce,activeHref:"/enterprise-dashboard/[selectedTab]"}),Object(i.jsx)(C,{title:"Manage Trial",href:"/manage-trial",Icon:j.a,showIf:!oe&&!S.is_team_buy_admin&&!!S.is_team_trial_admin}),Object(i.jsx)(C,{title:"Usage Stats Dashboard",href:"/usage-stats",Icon:g.a,showIf:S.has_usage_stats_access}),Object(i.jsx)(C,{title:"Affiliate Dashboard",href:"/affiliate/".concat(S.user_id,"/sales"),Icon:O.a,showIf:!!S.seller_affiliate_id}),Object(i.jsx)(C,{title:"Admin",href:"/admin",Icon:p.a,showIf:S.admin,unWrapLink:!0}),Object(i.jsx)(C,{title:"Team Subscription",href:"/team-subscription/team-management",Icon:j.a,showIf:S.is_team_buy_admin}),ie?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(y.RootCloseWrapper,{onRootClose:function(){return q(!1)},disabled:!z||H,children:Object(i.jsx)(w.a,{in:z,children:Object(i.jsxs)("div",{className:"w-full border-0 border-solid border-gray-300 ".concat(z?"border-t":"h-0"),children:[Object(i.jsx)(C,{href:"/teach",title:"Course",Icon:f.Learn,showIf:ee}),Object(i.jsx)(C,{href:"/create-answer",title:"Answer",Icon:f.Answers,showIf:$}),Object(i.jsx)(C,{href:"/blog/create-editor-page",title:"Blogs",Icon:f.Blogs,showIf:Q}),Object(i.jsx)(C,{href:"/enterprise/create-editor-page",title:"Enterprise blogs",Icon:f.EnterpriseBlogs,showIf:Q}),Object(i.jsx)(C,{href:"/m/create-editor-page",title:"Marketing Page",Icon:f.MarketingPages,showIf:Y}),Object(i.jsx)(C,{href:"/paths-dashboard",title:"Path",Icon:f.MarketingPages,showIf:te}),Object(i.jsx)(C,{href:"/templates-dashboard",title:"Onboarding Template",Icon:R.a,showIf:ae}),Object(i.jsx)(C,{href:"/assessments-dashboard",title:"Assessments",Icon:v.a,iconClass:"fill-current",showIf:ne,showBadge:!0,badgeText:"Beta",badgeStyles:P.Uc,selectedBadgeStyles:P.Tc}),Object(i.jsx)(C,{href:"/learning-plans-dashboard/questionnaire",title:"Learning Plans",Icon:M,showIf:re,activeHref:"/learning-plans-dashboard/[selectedTab]"})]})})}),Object(i.jsx)(C,{onClick:function(e){e.preventDefault(),q(!z)},Icon:f.Teach,title:"Create"})]}):null,Object(i.jsx)("div",{className:"flex-auto",style:{maxHeight:"3vh"}})]})})},W=c.a.memo(D),z=r("FAkm"),q=r("reQN"),F=function(e){var t=e.tab,r=e.active,a=e.hubHref;return Object(i.jsx)(k.a,{prefetch:!1,href:t.standAloneLink?t.href:"".concat(a).concat(t.href),children:Object(i.jsxs)("div",{className:"flex flex-col py-3 space-y-2 items-center cursor-pointer ".concat(r?"text-primary dark:text-primary-lightP1 bg-primary-lightP2 dark:bg-black border-0 border-r-4 border-solid border-primary dark:border-primary-lightP1":"text-gray-900 dark:text-gray-500 bg-transparent hover:bg-primary-lightP2 dark:hover:bg-black"),children:[t.icon,Object(i.jsx)("span",{className:"text-xs font-semibold leading-4 tracking-wide px-2",children:t.name})]})})},G=function(){var e=Object(d.useRouter)(),t=Object(l.b)(),r=Object(l.c)((function(e){return e.user.info.data})),a=Object(l.c)((function(e){return e.user.info.loaded})),n=Object(z.a)(r,a).urlMap,s=e.asPath.split("/"),o=s.length>=3?"/"+s[1]+"/"+s[2]:e.asPath,u=!(o in n||e.asPath in n&&n[e.asPath].tab.useFullPath),b=o in n?n[o]:e.asPath in n&&n[e.asPath].tab.useFullPath?n[e.asPath]:a&&r.enterprise.enterpriseSidebarState?r.enterprise.enterpriseSidebarState:n["/dashboard/progress"];return c.a.useEffect((function(){a&&null!==r&&void 0!==r&&r.user_id&&t(q.b.setEnterpriseSidebarState(b))}),[]),Object(i.jsx)("div",{className:"ed-grid-sidebar transition-none flex flex-col w-full h-full justify-start bg-white dark:bg-dark-80 border-0 border-r border-solid border-gray-200 dark:border-dark-70",children:b.hub.tabs.map((function(e){return Object(i.jsx)(F,{tab:e,active:!u&&b.tab.name===e.name,hubHref:b.hub.href})}))})},J=c.a.memo(G),K=r("J/mE"),U=function(){return Object(i.jsxs)("div",{className:"flex flex-col items-center space-y-2 my-3",children:[Object(i.jsx)("div",{className:"h-6 w-6 bg-gray-200 dark:bg-dark-80 animate-pulse"}),Object(i.jsx)("div",{className:"h-4 w-14 bg-gray-200 dark:bg-dark-80 animate-pulse"})]})};t.a=function(){var e=Object(d.useRouter)(),t=Object(u.a)(["sidebar"]),r=Object(s.a)(t,1)[0],a=Object(l.c)((function(e){return e.user.info})),n=null===a||void 0===a?void 0:a.data,o=c.a.useState("false"!==r.sidebar),f=Object(s.a)(o,2),h=f[0],v=f[1],m=Object(l.c)((function(e){var t,r;return null===(t=e.user)||void 0===t||null===(r=t.subscriptions)||void 0===r?void 0:r.loading})),j=Object(l.c)((function(e){var t,r;return null===(t=e.user)||void 0===t||null===(r=t.subscriptions)||void 0===r?void 0:r.loaded}));c.a.useEffect((function(){window.matchMedia("(min-width: 600px)").matches&&"false"===r.sidebar&&(document.querySelector("#__next").style.setProperty("--sidebar","0"),v(!1));var t=function(){window.matchMedia("(min-width: 600px)").matches||document.querySelector("#__next").style.removeProperty("--sidebar")};return e.events.on("routeChangeStart",t),function(){e.events.off("routeChangeStart",t)}}),[]),c.a.useEffect((function(){var e,t=document.querySelector("#__next");a.loggedOut&&(null===t||void 0===t||null===(e=t.style)||void 0===e||e.setProperty("--sidebar","0"))}),[a]);var p=!(null===a||void 0===a||!a.loading)||!!m,g=!(null===n||void 0===n||!n.user_id)&&j;if(a.loggedOut||!p&&!g)return null;if(!g)return Object(i.jsx)("nav",{className:"ed-grid-sidebar overflow-visible z-30 hidden sm:!flex",children:h?Object(i.jsxs)("div",{className:"flex flex-col items-center w-full h-full bg-gray-100 dark:bg-dark-90 justify-between pb-6 overflow-visible",children:[Object(i.jsx)("div",{className:"flex flex-col items-center",children:Array(4).fill(Object(i.jsx)(U,{}))}),Object(i.jsx)(U,{})]}):Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"block absolute h-full w-full bg-white dark:bg-dark-80 border-0 border-r border-solid border-gray-200 dark:border-dark-70 z-20"}),Object(i.jsx)("div",{className:"absolute top-4 ".concat(h?"-right-4 rounded-full bg-white dark:bg-dark-80 border border-solid border-gray-200 dark:border-dark-70":"right-2"," w-8 h-8 flex items-center justify-center transition duration-300 z-30"),style:{borderWidth:"0.5px"},children:Object(i.jsx)(b.a,{className:"stroke-current text-gray-A200 dark:text-gray-200 m-0 transform rotate-180"})})]})});var x=g&&n.enterprise.enable_new_nav_b2b;return Object(i.jsxs)("nav",{className:"ed-grid-sidebar dark:bg-dark-80 transition-none overflow-visible ".concat(x?"hidden lg:!flex":""),children:[Object(i.jsx)(K.a,{mainSidebar:!0}),x?Object(i.jsx)(J,{}):Object(i.jsx)(W,{})]})}},y71I:function(e,t,r){"use strict";var a=r("guIr"),n=r("HeVR"),i=r("MAGH");r("yZHS");function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){Object(a.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var c={"top-right":"absolute transform translate-x-1/2 -translate-y-1/2","top-left":"absolute transform -translate-x-1/2 -translate-y-1/2","bottom-right":"absolute transform translate-x-1/2 translate-y-1/2","bottom-left":"absolute transform -translate-x-1/2 translate-y-1/2"};t.a=function(e){var t=e.anchorOrigin,r=e.className,a=void 0===r?"":r,s=e.children,l=e.bgFontClass,d=void 0===l?"bg-primary text-white font-bold tracking-wide":l,u=Object(i.a)(e,["anchorOrigin","className","children","bgFontClass"]);return Object(n.jsx)("div",o(o({className:"inline-flex h-5 items-center justify-center align-middle px-1 ".concat(d," text-xs rounded-sm\n      ").concat(t?c[t]:"","\n      ").concat(a),style:{minWidth:"20px"}},u),{},{children:s}))}}}]);
//# sourceMappingURL=4db01b015ffa6e6b205402f50cd97312f5bb49ee.b2168336f5c629ff4823.js.map