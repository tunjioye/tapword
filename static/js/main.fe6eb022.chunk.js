(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a(51)},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},49:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(20),s=a.n(r),i=a(9),o=a(1),c=a(2),d=a(4),m=a(3),u=a(6),h=a(5),p=(a(28),a(29),a(30),a(31),a(21)),E={SPELLCHECK_API_KEY:"1c9ac1fe40mshe41e56796409b00p14b6a1jsn78518c7e15bc"},v=a.n(p).a.create({baseURL:"https://montanaflynn-spellcheck.p.rapidapi.com/check/",headers:{"X-RapidAPI-Key":E.SPELLCHECK_API_KEY}});function b(){window.localStorage.getItem("last_word_request")&&window.localStorage.removeItem("last_word_request")}b(),v.interceptors.request.use(function(e){if(window.localStorage.getItem("last_word_request")&&window.localStorage.getItem("last_word_request")===arguments[0].url)return Promise.reject(!1);return window.localStorage.setItem("last_word_request",arguments[0].url),setTimeout(function(){b()},5e3),e},function(e){return Promise.reject(e)});var f=v,g=(a(49),function(e){return n.a.createElement("div",{className:e.large?"loading":"loading loading-lg"})});g.defaultProps={large:!1};var w=g,y=function(e){function t(){return Object(o.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:this.props.className?"cell-new "+this.props.className:"cell-new",cell:this.props.cellName,onClick:this.props.handleCellClick},this.props.letter.charAt(0))}}]),t}(n.a.Component);y.defaultProps={letter:"T"};var S=y,k=function(e){function t(){return Object(o.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){for(var e=[],t=0;t<this.props.size;t++)e[t]=n.a.createElement(S,{key:t.toString(),cellName:"c"+(this.props.rowNumber*this.props.size+t),letter:this.props.letters[t]?this.props.letters[t]:" ",handleCellClick:this.props.handleCellClick});return n.a.createElement(n.a.Fragment,null,e)}}]),t}(n.a.Component);k.defaultProps={size:5,letters:"TAPWD"};var N=k,O=function(e){function t(){return Object(o.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){for(var e=[],t=0;t<this.props.size;t++)e[t]=n.a.createElement(N,{key:t.toString(),rowNumber:t,size:this.props.size,letters:this.props.rows[t],handleCellClick:this.props.handleCellClick});return n.a.createElement("div",{className:"grid-new"},e)}}]),t}(n.a.Component);O.defaultProps={size:5,rows:["TAP","WORD","GAME","BY","TUNJI"]};var C=O,j=function(e){function t(){return Object(o.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:this.props.className?"cell "+this.props.className:"cell",style:this.props.style?this.props.style:{},cell:this.props.cellName,onClick:this.props.handleCellClick},this.props.letter.charAt(0))}}]),t}(n.a.Component);j.defaultProps={letter:"T"};var G=j,L=function(e){function t(){return Object(o.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){for(var e=[],t=this.props.score.toString(),a=0;a<t.length;a++)e[a]=n.a.createElement(G,{key:a.toString(),letter:t[a]?t[a]:" "});return n.a.createElement("div",{className:"selection"},n.a.createElement("span",{className:"selection-info"},"SCORE"),n.a.createElement("div",{className:"selection-wrapper"},n.a.createElement("span",{id:"score"},e)))}}]),t}(n.a.Component);L.defaultProps={score:0};var P=L,T=function(e){function t(){return Object(o.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){for(var e=[],t=0;t<this.props.word.length;t++)e[t]=n.a.createElement(G,{key:t.toString(),letter:this.props.word[t]?this.props.word[t]:" "});return n.a.createElement("div",{id:"selection-word",className:"selection"},n.a.createElement("span",{className:"selection-info"},"WORD INPUT"),n.a.createElement("div",{className:"selection-wrapper"},n.a.createElement("span",{id:"word"},n.a.createElement(G,{letter:"  ",style:{height:"64px"}}),e)))}}]),t}(n.a.Component);T.defaultProps={word:""};var W=T,z=function(e){function t(){return Object(o.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"openPlayModal",value:function(){window.location.hash="play"}},{key:"openPlayerModal",value:function(){window.location.hash="player"}},{key:"openHelpModal",value:function(){window.location.hash="help"}},{key:"render",value:function(){var e=n.a.createElement("div",{className:"timer"},this.props.minutes,n.a.createElement("span",{className:"highlight"},"m"));0===this.props.minutes&&(e=n.a.createElement("div",{className:"timer"},"\u221e"));var t="New Game",a=this.openPlayModal.bind(this),l=n.a.createElement("div",null,"\u2023");return this.props.newGame&&(t="Quit",a=this.props.quitGame,l=n.a.createElement("div",null,"\xd7")),n.a.createElement("div",{className:"grid-sidebar"},n.a.createElement("div",{className:"grid-gameplay sidebar-inner sidebar-inner-gameplay"},n.a.createElement("div",{className:"cell-new tooltip button alt","data-tooltip":"Score Multiplier"},n.a.createElement("div",{className:"multiplier"},n.a.createElement("span",{className:"highlight"},"x"),n.a.createElement("span",null,this.props.multiplier))),n.a.createElement("div",{className:"cell-new tooltip button alt","data-tooltip":"Timer"},e),n.a.createElement("div",{className:"cell-new tooltip button alt","data-tooltip":"Grid Size"},n.a.createElement("div",{className:"grid-size"},"\u229e",n.a.createElement("sub",{className:"highlight"},this.props.size))),n.a.createElement("div",{className:"cell-new"}),n.a.createElement("div",{className:"cell-new"})),n.a.createElement("div",{className:"grid-actions sidebar-inner sidebar-inner-actions"},n.a.createElement("div",{className:"cell-new tooltip button alt","data-tooltip":"Player",onClick:this.openPlayerModal.bind(this)},n.a.createElement("div",null,"\u2731")),n.a.createElement("div",{className:"cell-new tooltip button alt","data-tooltip":"Help",onClick:this.openHelpModal.bind(this)},n.a.createElement("div",null,"?")),n.a.createElement("div",{className:"cell-new tooltip button alt","data-tooltip":t,onClick:a},l),n.a.createElement("div",{className:"cell-new tooltip button alt","data-tooltip":"Undo Word",onClick:this.props.handleUndoButtonClick},n.a.createElement("div",null,"\u2190")),n.a.createElement("div",{className:"cell-new tooltip button alt","data-tooltip":"Submit Word",onClick:this.props.handleSubmitButtonClick},n.a.createElement("div",null,"\u21b5"))))}}]),t}(n.a.Component);z.defaultProps={size:5,minutes:5,multiplier:1,newGame:!1};var x=z,A=a(7),I=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).state={newGame:e.newGame,size:e.size,minutes:e.minutes},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=[];[3,4,5,6,7].forEach(function(a,l){a===e.props.size?t[l]=n.a.createElement("div",{key:l.toString(),className:"grid-box grid-size selected",onClick:e.props.handleGridSizeClick},a):t[l]=n.a.createElement("div",{key:l.toString(),className:"grid-box grid-size",onClick:e.props.handleGridSizeClick},a)});var a=[];return[0,1,2,3,4,5,6,7,8,9,10].forEach(function(t,l){t===e.props.minutes?a[l]=n.a.createElement("div",{key:l.toString(),className:"grid-box grid-minute selected",onClick:e.props.handleMinuteClick},t):a[l]=n.a.createElement("div",{key:l.toString(),className:"grid-box grid-minute",onClick:e.props.handleMinuteClick},t)}),n.a.createElement("div",{className:"modal",id:"play"},n.a.createElement("span",{className:"modal-overlay",style:{background:"rgb(25, 28, 34)"}}),n.a.createElement("div",{className:"modal-container"},n.a.createElement("div",{className:"modal-header"},n.a.createElement("div",{className:"modal-title"},n.a.createElement("strong",{style:M},"NEW GAME"))),n.a.createElement("div",{className:"modal-body"},n.a.createElement("div",{className:"content"},n.a.createElement("div",null,n.a.createElement("h5",{style:M},"GRID SIZE"),n.a.createElement("div",null,"..."),n.a.createElement("div",null,"\xa0"),n.a.createElement("div",{className:"grid-box-container","data-size":this.props.size},t)),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",null,n.a.createElement("h5",{style:M},"TIMER"),n.a.createElement("div",null,"..."),n.a.createElement("div",null,"\xa0"),n.a.createElement("div",{className:"grid-box-container","data-size":this.props.size},a),n.a.createElement("div",{style:{marginTop:".4rem"}},n.a.createElement("em",null,n.a.createElement("small",null,"select 0 for endless mode"))),n.a.createElement("div",{style:{marginTop:".4rem"}},n.a.createElement("em",null,n.a.createElement("small",null,"TIMER MODE coming soon ...")))))),n.a.createElement("div",{className:"modal-footer"},n.a.createElement("div",{style:Object(A.a)({},M,B)},n.a.createElement("button",{style:F,onClick:this.props.startNewGame},"Start New Game")))))}}]),t}(n.a.Component),M={letterSpacing:"0.1rem",wordSpacing:"0.2rem",textTransform:"uppercase",margin:0,fontWeight:600},B={textAlign:"center"},F={background:"transparent",color:"#FFF",textDecoration:"none",border:"1px solid #28F",padding:"6px 8px 6px 12px",cursor:"pointer",fontWeight:600};I.defaultProps={newGame:!1,size:5,minutes:5};var U=I,H=function(e){function t(){return Object(o.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"saveProfile",value:function(){console.log("saving profile and settings ..."),window.location.hash=""}},{key:"render",value:function(){return n.a.createElement("div",{className:"modal",id:"player"},n.a.createElement("a",{href:"#close",className:"modal-overlay","aria-label":"Close"}," "),n.a.createElement("div",{className:"modal-container"},n.a.createElement("div",{className:"modal-header"},n.a.createElement("a",{href:"#close",className:"btn btn-clear","aria-label":"Close"}," "),n.a.createElement("div",{className:"modal-title"},n.a.createElement("strong",{style:R},"PLAYER"))),n.a.createElement("div",{className:"modal-body"},n.a.createElement("div",{className:"content"},n.a.createElement("div",null,n.a.createElement("h5",{style:R},"PROFILE"),n.a.createElement("div",null,"..."),n.a.createElement("div",null,"\xa0"),n.a.createElement("div",null,"Username : tunjioye"),n.a.createElement("div",null,"\xa0"),n.a.createElement("div",null,"Highest Score : 2019")),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",null,n.a.createElement("h5",{style:R},"CELL SHUFFLE TYPE"),n.a.createElement("div",null,"..."),n.a.createElement("div",null,"\xa0"),n.a.createElement("div",null,"SHUFFLE SELECTED CELLS | SHUFFLE ALL CELLS"),n.a.createElement("div",null,n.a.createElement("em",null,n.a.createElement("small",null,"cell reshuffle after submit")))),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",{style:Object(A.a)({},R,D)},n.a.createElement("button",{style:q,onClick:this.saveProfile.bind(this)},"Save Profile")))),n.a.createElement("div",{className:"modal-footer"})))}}]),t}(n.a.Component),R={letterSpacing:"0.1rem",wordSpacing:"0.2rem",textTransform:"uppercase",margin:0,fontWeight:600},D={textAlign:"center"},q={background:"transparent",color:"#FFF",textDecoration:"none",border:"1px solid #28F",padding:"6px 8px 6px 12px",cursor:"pointer",fontWeight:600},_=H,K=a(10);var Y={letterSpacing:"0.1rem",wordSpacing:"0.2rem",textTransform:"uppercase",margin:0,fontWeight:600},J={border:"1px solid #28F",padding:"3px 4px 3px 6px"},Q={textAlign:"center"},V={color:"#FFF",textDecoration:"none"},X={margin:"0 auto",dt:{width:"80px",display:"inline-block",textAlign:"right",margin:"5px auto"},dd:{display:"inline"}},Z=function(){return n.a.createElement("div",{className:"modal",id:"help"},n.a.createElement("a",{href:"#close",className:"modal-overlay","aria-label":"Close"}," "),n.a.createElement("div",{className:"modal-container"},n.a.createElement("div",{className:"modal-header"},n.a.createElement("a",{href:"#close",className:"btn btn-clear","aria-label":"Close"}," "),n.a.createElement("div",{className:"modal-title"},n.a.createElement("strong",{style:Y},"HELP & ABOUT"))),n.a.createElement("div",{className:"modal-body"},n.a.createElement("div",{className:"content"},n.a.createElement("div",null,n.a.createElement("h5",{style:Y},"HOW TO PLAY"),n.a.createElement("div",null,"..."),n.a.createElement("div",null,"\xa0"),n.a.createElement("div",null,"\u2022 Select some letters to make a word"),n.a.createElement("div",null,"\u2022 Click Submit Button to evaluate your Score"),n.a.createElement("div",null,"\u2022 QUITING IS NOT AN OPTION!"),n.a.createElement("div",null,"\u2022 ",n.a.createElement("em",null,"How to Play Tutorial coming soon ..."))),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",null,n.a.createElement("h5",{style:Y},"KEYBOARD SHORTCUTS"),n.a.createElement("div",null,"..."),n.a.createElement("div",null,"\xa0"),n.a.createElement("dl",{style:Object(A.a)({},X)},n.a.createElement("dt",{style:Object(A.a)({},X.dt)},n.a.createElement("small",null,"UNDO")),n.a.createElement("dd",{style:Object(A.a)({},X.dd)},n.a.createElement("kbd",{style:J},"BKSP")," \xa0\xa0\xa0 ",n.a.createElement("small",null,"OR")," \xa0\xa0\xa0 ",n.a.createElement("kbd",{style:J},"DEL"),n.a.createElement("br",null)),n.a.createElement("dt",{style:Object(A.a)({},X.dt)},n.a.createElement("small",null,"SUBMIT")),n.a.createElement("dd",{style:Object(A.a)({},X.dd)},n.a.createElement("kbd",{style:J},"ENTER")," \xa0\xa0 ",n.a.createElement("small",null,"OR")," \xa0\xa0 ",n.a.createElement("kbd",{style:J},"SPACE"),n.a.createElement("br",null)))),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",null,n.a.createElement("h5",{style:Y},"ABOUT"),n.a.createElement("div",null,"..."),n.a.createElement("div",null,"\xa0"),n.a.createElement("div",null,"Tapword - ",n.a.createElement("em",null,"words are limitless")," : is a word game that tests your knowledge of English words. Tapword provides a means to combine as many letters as you can to make the longest word you possibly can."),n.a.createElement("div",null,"\xa0"),n.a.createElement("div",{style:Q},n.a.createElement("em",null,"Play and Boast of your Vocabulary among friends")),n.a.createElement("div",null,"\xa0"),n.a.createElement("div",{style:Object(A.a)({},Y,Q)},"+++ THANK YOU +++")),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",{style:Object(A.a)({},Y,Q)},"*** ",n.a.createElement("a",{style:V,href:"https://github.com/tunjioye/tapword",target:"_blank",rel:"noopener noreferrer"},"Git Repo")," ***"),n.a.createElement("br",null),n.a.createElement("div",{style:Object(A.a)({},Q)},n.a.createElement(K.a,{href:"https://github.com/tunjioye/tapword","data-icon":"octicon-star","aria-label":"Star tunjioye/tapword on GitHub"},"Star"),n.a.createElement("span",{style:{padding:"0 5px"}}),n.a.createElement(K.a,{href:"https://github.com/tunjioye/tapword/fork","data-icon":"octicon-repo-forked","aria-label":"Fork tunjioye/tapword on GitHub"},"Fork")),n.a.createElement("br",null))),n.a.createElement("div",{className:"modal-footer"})))},$=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).state={newGame:e.newGame,size:e.size,minutes:e.minutes,rows:e.rows,multiplier:e.multiplier,score:e.score,lastWordScore:e.lastWordScore,word:e.word,cellToggle:e.cellToggle,shuffle:e.shuffle,shuffleAll:e.shuffleAll},a.startNewGame=a.startNewGame.bind(Object(u.a)(a)),a.quitGame=a.quitGame.bind(Object(u.a)(a)),a.hasStartedNewGame=a.hasStartedNewGame.bind(Object(u.a)(a)),a.randomLetters=a.randomLetters.bind(Object(u.a)(a)),a.handleCellClick=a.handleCellClick.bind(Object(u.a)(a)),a.toggleSelectionWord=a.toggleSelectionWord.bind(Object(u.a)(a)),a.pushSelectionWord=a.pushSelectionWord.bind(Object(u.a)(a)),a.popSelectionWord=a.popSelectionWord.bind(Object(u.a)(a)),a.handleKeyUp=a.handleKeyUp.bind(Object(u.a)(a)),a.submitWord=a.submitWord.bind(Object(u.a)(a)),a.updateMultiplier=a.updateMultiplier.bind(Object(u.a)(a)),a.updateScore=a.updateScore.bind(Object(u.a)(a)),a.clearSelectionWord=a.clearSelectionWord.bind(Object(u.a)(a)),a.setSelectedCells=a.setSelectedCells.bind(Object(u.a)(a)),a.resetSelectedCells=a.resetSelectedCells.bind(Object(u.a)(a)),a.shuffleCells=a.shuffleCells.bind(Object(u.a)(a)),a.saveGameProgress=a.saveGameProgress.bind(Object(u.a)(a)),a.handleGridSizeClick=a.handleGridSizeClick.bind(Object(u.a)(a)),a.handleMinuteClick=a.handleMinuteClick.bind(Object(u.a)(a)),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"startNewGame",value:function(){this.setState({newGame:!0,minutes:5,multiplier:1,score:0,lastWordScore:0,word:[]}),this.resetSelectedCells(),window.location.hash=""}},{key:"quitGame",value:function(){window.alert("Your Score is : "+this.state.score),this.setState({newGame:!1}),window.localStorage.getItem("game")&&window.localStorage.removeItem("game")}},{key:"hasStartedNewGame",value:function(){return!!this.state.newGame||(window.confirm("Would You like to Start a New Game?")&&(window.location.hash="play"),!1)}},{key:"randomLetters",value:function(){for(var e=Object(i.a)("ABCDEFGHIJKLMNOPQRSTUVWXYZ"),t=[],a=0;a<this.state.size;a++)t[a]=Object(i.a)(Array(parseInt(this.state.size))).map(function(t){return e[0|Math.floor(Math.random()*e.length)]}).join("");return t}},{key:"handleCellClick",value:function(e){if(this.hasStartedNewGame()){this.saveGameProgress("loading");var t=e.target,a=t.getAttribute("cell"),l=this.state.word;this.state.cellToggle?0===l.filter(function(e){return e.cell===a}).length?this.pushSelectionWord(t):this.toggleSelectionWord(e):0===l.filter(function(e){return e.cell===a}).length?this.pushSelectionWord(t):l[l.length-1].cell===a&&this.popSelectionWord(),this.saveGameProgress("save")}}},{key:"toggleSelectionWord",value:function(e){if(this.hasStartedNewGame()){this.saveGameProgress("loading");var t=e.target,a=t.getAttribute("cell"),l=this.state.word;l=l.filter(function(e){return e.cell!==a}),this.setState({word:l}),t.classList.toggle("selected"),this.saveGameProgress("save")}}},{key:"pushSelectionWord",value:function(e){var t=e.getAttribute("cell"),a=this.state.word;a[a.length]={cell:t,letter:e.innerHTML},e.classList.add("selected"),this.setState({word:a})}},{key:"popSelectionWord",value:function(){if(this.hasStartedNewGame()){if(this.saveGameProgress("loading"),this.state.word.length>0){var e=this.state.word;document.querySelectorAll("[cell="+e[e.length-1].cell+"]")[0].classList.remove("selected"),e.length--,this.setState({word:e})}this.saveGameProgress("save")}}},{key:"clearSelectionWord",value:function(){this.setState({word:[]})}},{key:"updateMultiplier",value:function(e){if(this.state.lastWordScore>1){var t=this.state.lastWordScore,a=this.state.multiplier,l=document.getElementsByClassName("multiplier")[0];e>t?(l.classList.add("plus1"),setTimeout(function(){l.classList.remove("plus1")},500),a++):e<t&&this.state.multiplier>1&&(l.classList.add("minus1"),setTimeout(function(){l.classList.remove("minus1")},500),a--),this.setState({multiplier:a})}}},{key:"updateScore",value:function(e){var t=this.state.score;t+=e*this.state.multiplier,this.updateMultiplier(e),this.setState({score:t,lastWordScore:e})}},{key:"setSelectedCells",value:function(){this.state.word.forEach(function(e){document.querySelector('[cell="'.concat(e.cell,'"]')).classList.add("selected")})}},{key:"resetSelectedCells",value:function(){var e=document.querySelectorAll('[class="cell-new selected"]');e.forEach(function(e){return e.classList.remove("selected")}),this.shuffleCells(e)}},{key:"shuffleCells",value:function(e){if(this.state.shuffle)if(this.state.shuffleAll)this.setState({rows:this.randomLetters()});else{var t=Object(i.a)("ABCDEFGHIJKLMNOPQRSTUVWXYZ");e.forEach(function(e){return e.innerHTML=t[0|Math.floor(Math.random()*t.length)]})}}},{key:"submitWord",value:function(){if(this.hasStartedNewGame()&&(this.saveGameProgress("loading"),this.state.word.length>0)){var e=this.state.word.map(function(e){return e.letter}).join("").toLowerCase();f.get("?text="+e).then(function(t){var a=this,l=document.querySelectorAll('[class="cell-new selected"]');void 0===t.data.corrections[e]?(l.forEach(function(e){return e.classList.add("flash-success")}),setTimeout(function(){l.forEach(function(e){return e.classList.remove("flash-success")}),a.updateScore(e.length),a.clearSelectionWord(),a.resetSelectedCells()},500)):(document.getElementById("selection-word").classList.add("shake"),l.forEach(function(e){return e.classList.add("flash-error")}),setTimeout(function(){document.getElementById("selection-word").classList.remove("shake"),l.forEach(function(e){return e.classList.remove("flash-error")})},500))}.bind(this)).catch(function(e){console.log(e)}).finally(function(){this.saveGameProgress("save")}.bind(this))}}},{key:"saveGameProgress",value:function(e){var t=this,a=document.getElementById("saving-progress");switch(e){case"save":setTimeout(function(){window.localStorage.setItem("game",JSON.stringify(t.state)),a.classList.add("d-hide")},500);break;case"loading":default:a.classList.remove("d-hide")}}},{key:"handleGridSizeClick",value:function(e){var t=this,a=parseInt(e.target.innerText);this.setState({size:a}),setTimeout(function(){t.setState({rows:t.randomLetters()});var e=document.getElementsByClassName("grid-new"),l=document.getElementsByClassName("grid-container"),n=document.getElementsByClassName("grid-sidebar");e[0].setAttribute("size",a),l[0].setAttribute("size",a),n[0].setAttribute("size",a)},10)}},{key:"handleMinuteClick",value:function(e){this.setState({minutes:parseInt(e.target.innerText)})}},{key:"handleKeyUp",value:function(e){switch(e.keyCode){case 8:case 46:e.preventDefault(),this.popSelectionWord();break;case 13:case 32:e.preventDefault(),this.submitWord()}}},{key:"componentDidMount",value:function(){var e=this;if(document.addEventListener("keyup",this.handleKeyUp),this.props.generate&&this.setState({rows:this.randomLetters()}),window.localStorage.getItem("game")){var t=window.localStorage.getItem("game"),a=JSON.parse(t);this.setState(a);var l=document.getElementsByClassName("grid-new"),n=document.getElementsByClassName("grid-container"),r=document.getElementsByClassName("grid-sidebar");l[0].setAttribute("size",a.size),n[0].setAttribute("size",a.size),r[0].setAttribute("size",a.size),setTimeout(function(){e.setSelectedCells()},10)}}},{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},n.a.createElement("div",{id:"saving-progress",className:"saving-progress d-hide"},n.a.createElement(w,null)),n.a.createElement("div",null,n.a.createElement("div",null,n.a.createElement("div",null,n.a.createElement(P,{score:this.state.score})),n.a.createElement("div",null,n.a.createElement(W,{word:this.state.word.map(function(e){return e.letter})}))),n.a.createElement("div",{style:{minHeight:"8px",maxHeight:"8px"}},"\xa0"),n.a.createElement("div",{className:"flex-centered"},n.a.createElement("div",{className:"grid-container"},n.a.createElement(C,{size:this.state.size,rows:this.state.rows,handleCellClick:this.handleCellClick})),n.a.createElement(x,{multiplier:this.state.multiplier,minutes:this.state.minutes,newGame:this.state.newGame,quitGame:this.quitGame,handleUndoButtonClick:this.popSelectionWord,handleSubmitButtonClick:this.submitWord})))),n.a.createElement(U,{newGame:this.state.newGame,startNewGame:this.startNewGame,size:this.state.size,minutes:this.state.minutes,handleGridSizeClick:this.handleGridSizeClick,handleMinuteClick:this.handleMinuteClick}),n.a.createElement(_,null),n.a.createElement(Z,null))}}]),t}(n.a.Component);$.defaultProps={newGame:!1,generate:!0,cellToggle:!0,shuffle:!0,shuffleAll:!0,size:5,minutes:5,rows:[],multiplier:1,score:0,lastWordScore:0,word:[]};var ee=$;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[22,1,2]]]);
//# sourceMappingURL=main.fe6eb022.chunk.js.map