(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(8),o=a.n(c),i=(a(14),a(2)),r=a(3),s=a(6),d=a(4),m=a(1),h=a(5),u=(a(15),a(16),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12"},l.a.createElement("h3",null,"My Todo List With React")))}}]),t}(l.a.Component)),p=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).handleAddClick=a.handleAddClick.bind(Object(m.a)(a)),a}return Object(h.a)(t,e),Object(r.a)(t,[{key:"handleAddClick",value:function(e){e.preventDefault();var t=this.refs.texto.value;this.refs.texto.value="",this.props.AddTodoItem(t)}},{key:"render",value:function(){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-2"},"\xa0"),l.a.createElement("div",{className:"col-6"},l.a.createElement("input",{className:"form-control",type:"text",placeholder:"Please input a todo name",ref:"texto"})),l.a.createElement("div",{className:"col-2 left"},l.a.createElement("input",{className:"form-control",type:"button",value:"Add",onClick:this.handleAddClick})),l.a.createElement("div",{className:"col-2"},"\xa0"))}}]),t}(l.a.Component),v=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).handleDeleteClick=a.handleDeleteClick.bind(Object(m.a)(a)),a.handleCheckedClick=a.handleCheckedClick.bind(Object(m.a)(a)),a}return Object(h.a)(t,e),Object(r.a)(t,[{key:"handleDeleteClick",value:function(e){e.preventDefault(),console.log("AppTodoItem->handleDeleteClick");var t=1*e.target.getAttribute("todoid");this.props.DeleteTodoItem(t)}},{key:"handleCheckedClick",value:function(e){console.log("AppTodoItem -> handleCheckedClick");var t=this.refs.todoid.getAttribute("todoid"),a=e.target.checked;this.props.SwitchTodoItem(1*t,a)}},{key:"render",value:function(){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-1"},l.a.createElement("span",null,this.props.id)),l.a.createElement("div",{className:"col-5"},l.a.createElement("span",null,this.props.name)),l.a.createElement("div",{className:"col-4"},l.a.createElement("input",{className:"form-control",type:"checkbox",checked:this.props.status,onChange:this.handleCheckedClick}),l.a.createElement("span",null,{false:"Not Completed",true:"Completed"}[this.props.status])),l.a.createElement("div",{className:"col-2"},l.a.createElement("i",{className:"fa fa-trash-o","aria-hidden":"true",onClick:this.handleDeleteClick,ref:"todoid",todoid:this.props.id})))}}]),t}(l.a.Component),f=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.data,t=this.props.DeleteTodoItem,a=this.props.SwitchTodoItem,n=void 0;return n=0===this.props.filter?e.filter((function(e){return!e.status})):1===this.props.filter?e.filter((function(e){return e.status})):e,l.a.createElement(l.a.Fragment,null,n.map((function(e){return l.a.createElement(v,{key:e.id,id:e.id,name:e.name,status:e.status,DeleteTodoItem:t,SwitchTodoItem:a})})))}}]),t}(l.a.Component),k=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).handleCheckedClick=a.handleCheckedClick.bind(Object(m.a)(a)),a}return Object(h.a)(t,e),Object(r.a)(t,[{key:"handleCheckedClick",value:function(e){var t=e.target.value;this.props.Filter(1*t)}},{key:"render",value:function(){var e=this.props.filter,t=!1,a=!1,n=!1;return 0===e?n=!0:1===e?a=!0:t=!0,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"row footer"},l.a.createElement("div",{className:"col-12"},l.a.createElement("span",null,"Select a filter condition:"))),l.a.createElement("div",{className:"row footer"},l.a.createElement("div",{className:"col-3"},"\xa0"),l.a.createElement("div",{className:"col-3"},l.a.createElement("input",{className:"form-control",type:"radio",checked:t,value:"-1",onChange:this.handleCheckedClick}),l.a.createElement("span",null,"All")),l.a.createElement("div",{className:"col-3"},l.a.createElement("input",{className:"form-control",type:"radio",checked:a,value:"1",onChange:this.handleCheckedClick}),l.a.createElement("span",null,"Completed")),l.a.createElement("div",{className:"col-3"},l.a.createElement("input",{className:"form-control",type:"radio",checked:n,value:"0",onChange:this.handleCheckedClick}),l.a.createElement("span",null,"Not Completed"))))}}]),t}(l.a.Component),E=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).OnAddTodoItem=a.OnAddTodoItem.bind(Object(m.a)(a)),a.OnDeleteTodoItem=a.OnDeleteTodoItem.bind(Object(m.a)(a)),a.OnSwitchTodoItem=a.OnSwitchTodoItem.bind(Object(m.a)(a)),a.OnFilter=a.OnFilter.bind(Object(m.a)(a)),a.state={data:a.props.data,filter:-1},a}return Object(h.a)(t,e),Object(r.a)(t,[{key:"OnAddTodoItem",value:function(e){console.log(e);var t=-1;this.state.data.forEach((function(e){e.id>t&&(t=e.id)}));var a=this.state.data.concat({id:t+1,name:e,status:!1});this.setState({data:a})}},{key:"OnDeleteTodoItem",value:function(e){console.log(e);var t=[];this.state.data.forEach((function(a){e!==a.id&&t.push(a)})),this.setState({data:t})}},{key:"OnSwitchTodoItem",value:function(e,t){var a=this.state.data;a.find((function(t){return t.id===e})).status=t;var n=Array.from(a);this.setState({data:n})}},{key:"OnFilter",value:function(e){var t=-1;0!==e&&1!==e||(t=e),this.setState({filter:t})}},{key:"render",value:function(){var e=this.state.data,t=this.state.filter;return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement("div",{id:"content",className:"container"},l.a.createElement(u,null),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12"},l.a.createElement("hr",null))),l.a.createElement(p,{AddTodoItem:this.OnAddTodoItem}),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12"},l.a.createElement("hr",null))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"container col-12"},l.a.createElement(f,{data:e,DeleteTodoItem:this.OnDeleteTodoItem,SwitchTodoItem:this.OnSwitchTodoItem,filter:t}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12"},l.a.createElement("hr",null))),l.a.createElement(k,{filter:t,Filter:this.OnFilter}))))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(E,{data:[{id:1,name:"Brush my Teeth",status:!0},{id:2,name:"Wash my face",status:!1},{id:3,name:"Wash clothes",status:!1},{id:4,name:"Cooking",status:!0}]}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);