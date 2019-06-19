(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,a){e.exports=a(46)},27:function(e,t,a){},28:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(19),s=a.n(r),i=(a(27),a(28),a(9)),c=a(1),o=a(2),d=a(4),u=a(3),m=a(6),h=a(5),p=function(e){function t(){return Object(c.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:this.props.className?"cell "+this.props.className:"cell",cell:this.props.cellName,onClick:this.props.onClick},this.props.letter.charAt(0))}}]),t}(n.a.Component);p.defaultProps={letter:""};var E=p,f=function(e){function t(){return Object(c.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){for(var e=[],t=0;t<this.props.size;t++)e[t]=n.a.createElement(E,{key:t.toString(),cellName:"c"+(this.props.rowNumber*this.props.size+t),letter:this.props.letters[t]?this.props.letters[t]:" ",onClick:this.props.onClick});return n.a.createElement("div",{className:this.props.className?"row "+this.props.className:"row"},e)}}]),t}(n.a.Component);f.defaultProps={size:5,letters:"TAPWD"};var v=f,b=function(e){function t(){return Object(c.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){for(var e=[],t=this.props.score.toString(),a=0;a<t.length;a++)e[a]=n.a.createElement(E,{key:a.toString(),letter:t[a]?t[a]:" "});return n.a.createElement("div",{className:"selection"},n.a.createElement("span",{className:"selection-info"},"SCORE"),n.a.createElement("span",{id:"score"},e))}}]),t}(n.a.Component);b.defaultProps={score:0};var g=b,S=function(e){function t(){return Object(c.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){for(var e=[],t=0;t<this.props.word.length;t++)e[t]=n.a.createElement(E,{key:t.toString(),letter:this.props.word[t]?this.props.word[t]:" "});return n.a.createElement("div",{id:"selection",className:"selection"},n.a.createElement("span",{className:"selection-info"},"WORD INPUT"),n.a.createElement("span",{id:"word"},e))}}]),t}(n.a.Component);S.defaultProps={word:""};var y=S,N=function(e){function t(){return Object(c.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"openSettingsModal",value:function(){window.location.hash="settings"}},{key:"openHelpModal",value:function(){window.location.hash="help"}},{key:"handleQuit",value:function(){alert("QUITING IS NOT A OPTION!")}},{key:"render",value:function(){var e;return e=this.props.endless?n.a.createElement("div",{className:"button alt"},"\u221e"):n.a.createElement("div",{className:"button alt"},this.props.minutes,n.a.createElement("span",{className:"highlight"},"m")),n.a.createElement("div",{className:"sidebar"},n.a.createElement("div",{className:"sidebar-inner"},n.a.createElement("div",{className:"cell tooltip","data-tooltip":"Score Multiplier"},n.a.createElement("div",{className:"button alt multiplier"},n.a.createElement("span",{className:"highlight"},"x"),n.a.createElement("span",{id:"multiplier"},this.props.multiplier))),n.a.createElement("div",{className:"cell tooltip","data-tooltip":"Timer"},e),n.a.createElement("div",{className:"cell tooltip","data-tooltip":"Grid Size"},n.a.createElement("div",{className:"button alt"},"\u229e",n.a.createElement("sub",{className:"highlight"},this.props.size))),n.a.createElement("div",{className:"cell tooltip","data-tooltip":"Undo Word"},n.a.createElement("button",{id:"undo",className:"button",onClick:this.props.handleUndoButtonClick},"\u21b6")),n.a.createElement("div",{className:"cell tooltip","data-tooltip":"Submit Word"},n.a.createElement("button",{id:"submit",className:"button",onClick:this.props.handleSubmitButtonClick},"\u21b5"))),n.a.createElement("div",{className:"sidebar-inner"},n.a.createElement("div",{className:"cell tooltip","data-tooltip":"Settings"},n.a.createElement("div",{className:"button alt",onClick:this.openSettingsModal.bind(this)},"\u2731")),n.a.createElement("div",{className:"cell tooltip","data-tooltip":"Help"},n.a.createElement("div",{className:"button alt",onClick:this.openHelpModal.bind(this)},"?")),n.a.createElement("div",{className:"cell tooltip","data-tooltip":"Quit"},n.a.createElement("button",{id:"quit",className:"button",onClick:this.handleQuit.bind(this)},"\xd7"))))}}]),t}(n.a.Component);N.defaultProps={size:5,minutes:5,multiplier:1,endless:!1};var O=N,k=a(20),w={SPELLCHECK_API_KEY:"1c9ac1fe40mshe41e56796409b00p14b6a1jsn78518c7e15bc"},C=a.n(k).a.create({baseURL:"https://montanaflynn-spellcheck.p.rapidapi.com/check/",headers:{"X-RapidAPI-Key":w.SPELLCHECK_API_KEY}}),j=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).state={size:e.size,rows:e.rows,multiplier:e.multiplier,endless:e.endless,score:e.score,lastWordScore:e.lastWordScore,word:e.word,cellToggle:e.cellToggle,shuffle:e.shuffle,shuffleAll:e.shuffleAll},a.randomLetters=a.randomLetters.bind(Object(m.a)(a)),a.handleCellClick=a.handleCellClick.bind(Object(m.a)(a)),a.pushSelectionWord=a.pushSelectionWord.bind(Object(m.a)(a)),a.popSelectionWord=a.popSelectionWord.bind(Object(m.a)(a)),a.handleKeyUp=a.handleKeyUp.bind(Object(m.a)(a)),a.submitWord=a.submitWord.bind(Object(m.a)(a)),a.updateMultiplier=a.updateMultiplier.bind(Object(m.a)(a)),a.updateScore=a.updateScore.bind(Object(m.a)(a)),a.clearSelectionWord=a.clearSelectionWord.bind(Object(m.a)(a)),a.resetSelectedCells=a.resetSelectedCells.bind(Object(m.a)(a)),a.shuffleCells=a.shuffleCells.bind(Object(m.a)(a)),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"randomLetters",value:function(){for(var e=Object(i.a)("ABCDEFGHIJKLMNOPQRSTUVWXYZ"),t=[],a=0;a<this.state.size;a++)t[a]=Object(i.a)(Array(parseInt(this.state.size))).map(function(t){return e[0|Math.floor(Math.random()*e.length)]}).join("");return t}},{key:"handleCellClick",value:function(e){var t=e.target,a=t.getAttribute("cell"),l=this.state.word;this.state.cellToggle?0===l.filter(function(e){return e.cell===a}).length?this.pushSelectionWord(t):(l=l.filter(function(e){return e.cell!==a}),this.setState({word:l}),t.classList.toggle("selected")):0===l.filter(function(e){return e.cell===a}).length?this.pushSelectionWord(t):l[l.length-1].cell===a&&this.popSelectionWord()}},{key:"pushSelectionWord",value:function(e){var t=e.getAttribute("cell"),a=this.state.word;a[a.length]={cell:t,letter:e.innerHTML},e.classList.add("selected"),this.setState({word:a})}},{key:"popSelectionWord",value:function(){if(this.state.word.length>0){var e=this.state.word;document.querySelectorAll("[cell="+e[e.length-1].cell+"]")[0].classList.remove("selected"),e.length--,this.setState({word:e})}}},{key:"clearSelectionWord",value:function(){this.setState({word:[]})}},{key:"updateMultiplier",value:function(e){if(this.state.lastWordScore>1){var t=this.state.lastWordScore,a=this.state.multiplier,l=document.getElementsByClassName("multiplier")[0];e>t?(l.classList.add("plus1"),setTimeout(function(){l.classList.remove("plus1")},500),a++):e<t&&this.state.multiplier>1&&(l.classList.add("minus1"),setTimeout(function(){l.classList.remove("minus1")},500),a--),this.setState({multiplier:a})}}},{key:"updateScore",value:function(e){var t=this.state.score;t+=e*this.state.multiplier,this.updateMultiplier(e),this.setState({score:t,lastWordScore:e})}},{key:"resetSelectedCells",value:function(){var e=document.querySelectorAll('[class="cell selected"]');e.forEach(function(e){return e.classList.remove("selected")}),this.shuffleCells(e)}},{key:"shuffleCells",value:function(e){if(this.state.shuffle)if(this.state.shuffleAll)this.setState({rows:this.randomLetters()});else{var t=Object(i.a)("ABCDEFGHIJKLMNOPQRSTUVWXYZ");e.forEach(function(e){return e.innerHTML=t[0|Math.floor(Math.random()*t.length)]})}}},{key:"submitWord",value:function(){if(this.state.word.length>0){var e=this.state.word.map(function(e){return e.letter}).join("").toLowerCase();C.get("?text="+e).then(function(t){var a=this,l=document.querySelectorAll('[class="cell selected"]');void 0===t.data.corrections[e]?(l.forEach(function(e){return e.classList.add("flash-success")}),setTimeout(function(){l.forEach(function(e){return e.classList.remove("flash-success")}),a.updateScore(e.length),a.clearSelectionWord(),a.resetSelectedCells()},500)):(document.getElementById("selection").classList.add("shake"),l.forEach(function(e){return e.classList.add("flash-error")}),setTimeout(function(){document.getElementById("selection").classList.remove("shake"),l.forEach(function(e){return e.classList.remove("flash-error")})},500))}.bind(this)).catch(function(e){console.log(e)}).finally(function(){})}}},{key:"handleKeyUp",value:function(e){switch(e.keyCode){case 8:e.preventDefault(),this.popSelectionWord();break;case 13:e.preventDefault(),this.submitWord()}}},{key:"componentDidMount",value:function(){document.addEventListener("keyup",this.handleKeyUp),this.props.generate&&this.setState({rows:this.randomLetters()})}},{key:"render",value:function(){for(var e=[],t=0;t<this.state.size;t++)e[t]=n.a.createElement(v,{key:t.toString(),rowNumber:t,size:this.state.size,letters:this.state.rows[t],onClick:this.handleCellClick});return n.a.createElement("div",{className:"grid"},n.a.createElement(g,{score:this.state.score}),n.a.createElement(y,{word:this.state.word.map(function(e){return e.letter})}),n.a.createElement("div",{className:"rows"},e),n.a.createElement(O,{multiplier:this.state.multiplier,endless:this.state.endless,handleUndoButtonClick:this.popSelectionWord,handleSubmitButtonClick:this.submitWord}))}}]),t}(n.a.Component);j.defaultProps={generate:!0,cellToggle:!1,shuffle:!0,shuffleAll:!0,size:5,rows:["TAP","WORD","GAME","BY","TUNJI"],multiplier:1,endless:!1,score:0,lastWordScore:0,word:[]};var L=j,T=a(8),W=function(e){function t(){return Object(c.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"saveSettings",value:function(){console.log("saving settings ...")}},{key:"render",value:function(){return n.a.createElement("div",{className:"modal",id:"settings"},n.a.createElement("a",{href:"#close",className:"modal-overlay","aria-label":"Close"}," "),n.a.createElement("div",{className:"modal-container"},n.a.createElement("div",{className:"modal-header"},n.a.createElement("a",{href:"#close",className:"btn btn-clear","aria-label":"Close"}," "),n.a.createElement("div",{className:"modal-title"},n.a.createElement("strong",{style:A},"GAME SETTINGS"))),n.a.createElement("div",{className:"modal-body"},n.a.createElement("div",{className:"content"},n.a.createElement("div",null,n.a.createElement("h5",{style:A},"GRID SIZE"),n.a.createElement("div",null,"..."),n.a.createElement("div",null,"\xa0"),n.a.createElement("div",null,[3,4,5,6,7].toString().replace(/,/g," "))),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",null,n.a.createElement("h5",{style:A},"TIMER"),n.a.createElement("div",null,"..."),n.a.createElement("div",null,"\xa0"),n.a.createElement("div",null,[0,1,2,3,4,5,6,7,8,9,10].toString().replace(/,/g," ")),n.a.createElement("div",null,n.a.createElement("em",null,n.a.createElement("small",null,"select 0 for endless mode")))),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",null,n.a.createElement("h5",{style:A},"CELL SHUFFLE TYPE"),n.a.createElement("div",null,"..."),n.a.createElement("div",null,"\xa0"),n.a.createElement("div",null,"SHUFFLE SELECTED CELLS | SHUFFLE ALL CELLS"),n.a.createElement("div",null,n.a.createElement("em",null,n.a.createElement("small",null,"cell reshuffle after submit")))),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",{style:Object(T.a)({},A,I)},n.a.createElement("button",{style:P,onClick:this.saveSettings.bind(this)},"Save Settings")))),n.a.createElement("div",{className:"modal-footer"})))}}]),t}(n.a.Component),A={letterSpacing:"0.1rem",wordSpacing:"0.2rem",textTransform:"uppercase",margin:0,fontWeight:500},I={textAlign:"center"},P={background:"transparent",color:"#FFF",textDecoration:"none",border:"1px solid #28F",padding:"6px 8px 6px 12px",cursor:"pointer",fontWeight:500},U=W;var M={letterSpacing:"0.1rem",wordSpacing:"0.2rem",textTransform:"uppercase",margin:0,fontWeight:500},x={border:"1px solid #28F",padding:"3px 4px 3px 6px"},B={textAlign:"center"},F={color:"#FFF",textDecoration:"none"},H=function(){return n.a.createElement("div",{className:"modal",id:"help"},n.a.createElement("a",{href:"#close",className:"modal-overlay","aria-label":"Close"}," "),n.a.createElement("div",{className:"modal-container"},n.a.createElement("div",{className:"modal-header"},n.a.createElement("a",{href:"#close",className:"btn btn-clear","aria-label":"Close"}," "),n.a.createElement("div",{className:"modal-title"},n.a.createElement("strong",{style:M},"HELP & ABOUT"))),n.a.createElement("div",{className:"modal-body"},n.a.createElement("div",{className:"content"},n.a.createElement("div",null,n.a.createElement("h5",{style:M},"HOW TO PLAY"),n.a.createElement("div",null,"..."),n.a.createElement("div",null,"\xa0"),n.a.createElement("div",null,"\u2022 Select some letters to make a word"),n.a.createElement("div",null,"\u2022 Submit to evaluate the word you entered"),n.a.createElement("div",null,"\u2022 Improve the length of words you submit to increase your score multiplier"),n.a.createElement("div",null,"\u2022 QUITING IS NOT AN OPTION!")),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",null,n.a.createElement("h5",{style:M},"KEYBOARD SHORTCUTS"),n.a.createElement("div",null,"..."),n.a.createElement("div",null,"\xa0"),n.a.createElement("div",null,n.a.createElement("kbd",{style:x},"BKSP")," UNDO"),n.a.createElement("div",null,"\xa0"),n.a.createElement("div",null,n.a.createElement("kbd",{style:x},"ENTER")," SUBMIT")),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",null,n.a.createElement("h5",{style:M},"ABOUT"),n.a.createElement("div",null,"..."),n.a.createElement("div",null,"\xa0"),n.a.createElement("div",null,"Tapword - ",n.a.createElement("em",null,"words are limitless")," : is a word game that tests your knowledge of English words. Tapword provides a means to combine as many letters as you can to make the longest word you possibly can."),n.a.createElement("div",null,"\xa0"),n.a.createElement("div",{style:B},n.a.createElement("em",null,"Play and Boast of your Vocabulary among friends")),n.a.createElement("div",null,"\xa0"),n.a.createElement("div",{style:Object(T.a)({},M,B)},"+++ THANK YOU +++")),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",{style:Object(T.a)({},M,B)},"*** ",n.a.createElement("a",{style:F,href:"https://github.com/tunjioye/tapword",target:"_blank",rel:"noopener noreferrer"},"Git Repo")," ***"))),n.a.createElement("div",{className:"modal-footer"})))};var z=function(){return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},n.a.createElement(L,{cellToggle:!0,shuffle:!0,shuffleAll:!0,endless:!0})),n.a.createElement(U,null),n.a.createElement(H,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,1,2]]]);
//# sourceMappingURL=main.516f7222.chunk.js.map