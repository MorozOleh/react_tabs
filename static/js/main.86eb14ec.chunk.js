(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(6),r=a.n(l),i=a(1),s=a(2),b=a(4),o=a(3),d=(a(13),a(7)),u=a.n(d);function T(e){var t=e.selectedTab,a=e.title,n=e.id,l=e.onClickTab,r=e.selectedTabId,i=a===t||n===r;return c.a.createElement("li",{className:"Tab__item"},c.a.createElement("button",{type:"button",className:u()("Tab__button",{Tab__button_active:i}),onClick:function(){return l(a,n)}},a||n))}T.defaultProps={title:"",selectedTab:""};a(14);var m=function(e){Object(b.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state={},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.tabs,a=e.onClickTab,n=e.selectedTab,l=e.selectedTabId;return c.a.createElement("div",{className:"Tabs"},c.a.createElement("ul",{className:"Tabs__list"},t.map((function(e){return c.a.createElement(T,{key:e.id,title:e.title,id:e.id,onClickTab:a,selectedTab:n,selectedTabId:l})}))),c.a.createElement("div",{className:"Tabs__content"},t.map((function(e){return e.title!==n&&e.id!==l?null:e.content}))))}}]),a}(n.Component);m.defaultProps={selectedTab:""};a(15);var p=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],f=function(e){Object(b.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state={selectedTab:p[0].title,selectedTabId:p[0].id},e.onClickTab=function(t,a){e.setState({selectedTab:t,selectedTabId:a})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.onClickTab,t=this.state,a=t.selectedTab,n=t.selectedTabId;return c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"Selected tab is\xa0",a||n),c.a.createElement(m,{tabs:p,onClickTab:e,selectedTab:a,selectedTabId:n}))}}]),a}(n.Component);r.a.render(c.a.createElement(f,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.86eb14ec.chunk.js.map