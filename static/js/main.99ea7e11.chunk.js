(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a(45)},26:function(e,t,a){},27:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(18),l=a.n(s),o=(a(26),a(27),a(8)),c=a(2),i=a(3),u=a(6),p=a(4),d=a(7),h=a(5),m=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:this.props.className?"cell "+this.props.className:"cell",cell:this.props.cellName,onClick:this.props.onClick},this.props.letter.charAt(0))}}]),t}(r.a.Component);m.defaultProps={letter:""};var b=m,f=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){for(var e=[],t=0;t<this.props.size;t++)e[t]=r.a.createElement(b,{key:t.toString(),cellName:"c"+(this.props.rowNumber*this.props.size+t),letter:this.props.letters[t]?this.props.letters[t]:" ",onClick:this.props.onClick});return r.a.createElement("div",{className:this.props.className?"row "+this.props.className:"row"},e)}}]),t}(r.a.Component);f.defaultProps={size:5,letters:"TAPWD"};var v=f,E=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){for(var e=[],t=this.props.score.toString(),a=0;a<t.length;a++)e[a]=r.a.createElement(b,{key:a.toString(),letter:t[a]?t[a]:" "});return r.a.createElement("div",{className:"selection"},r.a.createElement("span",{className:"selection-info"},"SCORE"),r.a.createElement("span",{id:"score"},e))}}]),t}(r.a.Component);E.defaultProps={score:0};var g=E,w=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){for(var e=[],t=0;t<this.props.word.length;t++)e[t]=r.a.createElement(b,{key:t.toString(),letter:this.props.word[t]?this.props.word[t]:" "});return r.a.createElement("div",{className:"selection"},r.a.createElement("span",{className:"selection-info"},"WORD INPUT"),r.a.createElement("span",{id:"word"},e))}}]),t}(r.a.Component);w.defaultProps={word:""};var O=w,j=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e;return e=this.props.endless?r.a.createElement("div",{className:"button alt"},"\u221e"):r.a.createElement("div",{className:"button alt"},this.props.minutes,r.a.createElement("span",{className:"highlight"},"m")),r.a.createElement("div",{className:"sidebar"},r.a.createElement("div",{className:"cell"},r.a.createElement("div",{className:"button alt"},r.a.createElement("span",{className:"highlight"},"x"),r.a.createElement("span",{id:"multiplier"},this.props.multiplier))),r.a.createElement("div",{className:"cell"},e),r.a.createElement("div",{className:"cell"},r.a.createElement("div",{className:"button alt"},"\u229e",r.a.createElement("sub",{className:"highlight"},this.props.size))),r.a.createElement("div",{className:"cell"},r.a.createElement("button",{id:"undo",className:"button",onClick:this.props.handleUndoButtonClick},"\u21b6")),r.a.createElement("div",{className:"cell"},r.a.createElement("button",{id:"submit",className:"button",onClick:this.props.handleSubmitButtonClick},"\u21b5")))}}]),t}(r.a.Component);j.defaultProps={size:5,minutes:5,multiplier:1,endless:!1};var k=j,C=a(19),N={SPELLCHECK_API_KEY:"1c9ac1fe40mshe41e56796409b00p14b6a1jsn78518c7e15bc"},y=a.n(C).a.create({baseURL:"https://montanaflynn-spellcheck.p.rapidapi.com/check/",headers:{"X-RapidAPI-Key":N.SPELLCHECK_API_KEY}}),S=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={size:e.size,rows:e.rows,word:e.word,cellToggle:e.cellToggle},a.randomLetters=a.randomLetters.bind(Object(d.a)(a)),a.handleCellClick=a.handleCellClick.bind(Object(d.a)(a)),a.pushSelectionWord=a.pushSelectionWord.bind(Object(d.a)(a)),a.popSelectionWord=a.popSelectionWord.bind(Object(d.a)(a)),a.handleKeyUp=a.handleKeyUp.bind(Object(d.a)(a)),a.submitWord=a.submitWord.bind(Object(d.a)(a)),a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"randomLetters",value:function(){for(var e=Object(o.a)("ABCDEFGHIJKLMNOPQRSTUVWXYZ"),t=[],a=0;a<this.state.size;a++)t[a]=Object(o.a)(Array(parseInt(this.state.size))).map(function(t){return e[Math.random()*e.length|0]}).join("");return t}},{key:"handleCellClick",value:function(e){var t=e.target,a=t.getAttribute("cell"),n=this.state.word;this.state.cellToggle?0===n.filter(function(e){return e.cell===a}).length?this.pushSelectionWord(t):(n=n.filter(function(e){return e.cell!==a}),this.setState({word:n}),t.classList.toggle("selected")):0===n.filter(function(e){return e.cell===a}).length?this.pushSelectionWord(t):n[n.length-1].cell===a&&this.popSelectionWord()}},{key:"pushSelectionWord",value:function(e){var t=e.getAttribute("cell"),a=this.state.word;a[a.length]={cell:t,letter:e.innerHTML},e.classList.add("selected"),this.setState({word:a})}},{key:"popSelectionWord",value:function(){if(this.state.word.length>0){var e=this.state.word;document.querySelectorAll("[cell="+e[e.length-1].cell+"]")[0].classList.remove("selected"),e.length--,this.setState({word:e})}}},{key:"submitWord",value:function(){var e=this.state.word.map(function(e){return e.letter}).join("").toLowerCase();console.log(e),y.get("?text="+e).then(function(t){console.log(t.data),void 0===t.data.corrections[e]?alert(e.toUpperCase()+" ACCEPTED"):alert(e.toUpperCase()+" REJECTED")}).catch(function(e){console.log(e)}).finally(function(){})}},{key:"handleKeyUp",value:function(e){switch(e.keyCode){case 8:e.preventDefault(),this.popSelectionWord();break;case 13:e.preventDefault(),console.log("Return button was pressed")}}},{key:"componentDidMount",value:function(){document.addEventListener("keyup",this.handleKeyUp),this.props.generate&&this.setState({rows:this.randomLetters()})}},{key:"render",value:function(){for(var e=[],t=0;t<this.state.size;t++)e[t]=r.a.createElement(v,{key:t.toString(),rowNumber:t,size:this.state.size,letters:this.state.rows[t],onClick:this.handleCellClick});return r.a.createElement("div",{className:"grid"},r.a.createElement(g,null),r.a.createElement(O,{word:this.state.word.map(function(e){return e.letter})}),r.a.createElement("div",{className:"rows"},e),r.a.createElement(k,{handleUndoButtonClick:this.popSelectionWord,handleSubmitButtonClick:this.submitWord}))}}]),t}(r.a.Component);S.defaultProps={generate:!0,cellToggle:!1,size:5,rows:["TAP","WORD","GAME","BY","TUNJI"],word:[]};var W=S;var L=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(W,{cellToggle:!0})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,1,2]]]);
//# sourceMappingURL=main.99ea7e11.chunk.js.map