(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,,,,function(e,t,a){},,,function(e,t,a){e.exports=a(61)},,,,,,function(e,t,a){},,,,,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var l=a(0),s=a.n(l),i=a(24),n=a.n(i),r=a(3),o=a(4),c=a(7),d=a(5),u=a(1),m=a(6),h=(a(32),a(9)),p=(a(12),a(13),a(14),a(25)),v={SPELLCHECK_API_KEY:"1c9ac1fe40mshe41e56796409b00p14b6a1jsn78518c7e15bc"},f=a.n(p).a.create({baseURL:"https://montanaflynn-spellcheck.p.rapidapi.com/check/",headers:{"X-RapidAPI-Key":v.SPELLCHECK_API_KEY}});function g(){window.localStorage.getItem("last_word_request")&&window.localStorage.removeItem("last_word_request")}g(),f.interceptors.request.use(function(e){if(window.localStorage.getItem("last_word_request")&&window.localStorage.getItem("last_word_request")===arguments[0].url)return Promise.reject(!1);return window.localStorage.setItem("last_word_request",arguments[0].url),setTimeout(function(){g()},5e3),e},function(e){return Promise.reject(e)});var E=f,b=(a(50),function(e){return s.a.createElement("div",{className:e.large?"loading":"loading loading-lg"})});b.defaultProps={large:!1};var w=b,S=(a(51),a(52),a(53),a(54),function(e){var t=e.children,a=e.className;return s.a.createElement("div",{className:"popover ".concat(a)},t,s.a.createElement("div",{className:"popover-container"}))});S.defaultProps={children:"..."};var k=S,y=function(e){var t="c".concat(e.cellNumber),a=s.a.createElement("div",{className:"grid-cell ".concat(e.className?e.className:""," ").concat(-1!==e.wordCells.indexOf(t)?"selected":"").trim(),row:e.rowName,cell:t,onClick:e.handleCellClick},e.letter.charAt(0));return e.clickThis&&e.clickThis===e.cellNumber?s.a.createElement(k,{className:"click-this"},a):a};y.defaultProps={letter:"T",rowName:"r0",cellNumber:0,wordCells:[]};var C=y,N=function(e){for(var t=[],a=0;a<e.size;a++)t[a]=s.a.createElement(C,{key:a.toString(),rowName:"r".concat(e.rowNumber),cellNumber:e.rowNumber*e.size+a,letter:e.letters[a]?e.letters[a]:" ",clickThis:e.clickThis,wordCells:e.wordCells,handleCellClick:e.handleCellClick});return s.a.createElement(s.a.Fragment,null,t)};N.defaultProps={size:5,rowNumber:0,letters:"TAPWD",wordCells:[]};var T=N,G=function(e){for(var t=[],a=0;a<e.size;a++)t[a]=s.a.createElement(T,{key:a.toString(),rowNumber:a,size:e.size,letters:e.rows[a],clickThis:e.clickThis,wordCells:e.wordCells,handleCellClick:e.handleCellClick});return s.a.createElement("div",{className:"grid-container"},s.a.createElement("div",{className:"grid-new"},t))};G.defaultProps={size:5,rows:["TAP","WORD","GAME","BY","TUNJI"],wordCells:[]};var O=G,j=(a(23),a(55),a(2)),L=(a(56),function(e){return s.a.createElement("div",{className:"selection-cell",style:Object(j.a)({},e.style)},e.letter.charAt(0))});L.defaultProps={letter:"T"};var P=L,W=function(e){for(var t=[],a=e.score.toString(),l=0;l<a.length;l++)t[l]=s.a.createElement(P,{key:l.toString(),letter:a[l]?a[l]:" "});return s.a.createElement("div",{className:"selection"},s.a.createElement("span",{className:"selection-info"},"SCORE"),s.a.createElement("div",{className:"selection-wrapper"},s.a.createElement("span",{id:"score"},t)))};W.defaultProps={score:0};var M=W,x=function(e){for(var t=[],a=0;a<e.word.length;a++)t[a]=s.a.createElement(P,{key:a.toString(),letter:e.word[a]?e.word[a]:" "});return s.a.createElement("div",{id:"selection-word",className:"selection"},s.a.createElement("span",{className:"selection-info"},"WORD INPUT"),s.a.createElement("div",{className:"selection-wrapper"},s.a.createElement("span",{id:"word"},s.a.createElement(P,{letter:" ",style:{height:"64px"}}),t)))};x.defaultProps={word:[]};var A=x,z=(a(57),a(58),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={time:{},seconds:60*a.props.minutes},a.timer=0,a.secondsToTime=a.secondsToTime.bind(Object(u.a)(a)),a.calculateTimeLeft=a.calculateTimeLeft.bind(Object(u.a)(a)),a.startTimer=a.startTimer.bind(Object(u.a)(a)),a.stopTimer=a.stopTimer.bind(Object(u.a)(a)),a.countDown=a.countDown.bind(Object(u.a)(a)),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"secondsToTime",value:function(e){var t=e%3600,a=t%60;return{m:Math.floor(t/60),s:Math.ceil(a)}}},{key:"calculateTimeLeft",value:function(){var e=this.secondsToTime(this.state.seconds);this.setState({time:e})}},{key:"startTimer",value:function(){0===this.timer&&this.state.seconds>0&&(this.timer=setInterval(this.countDown,1e3))}},{key:"stopTimer",value:function(){clearInterval(this.timer),this.timer=0}},{key:"countDown",value:function(){var e=this,t=this.state.seconds-1>0?this.state.seconds-1:0;this.setState({time:this.secondsToTime(t),seconds:t}),t>0?(this.props.setMinutes(parseFloat(t/60).toFixed(3)),setTimeout(function(){e.props.saveGameProgress("save")},1e3)):(this.stopTimer(),this.props.quitGame("TIME UP!"))}},{key:"componentDidMount",value:function(){this.calculateTimeLeft(),this.props.newGame&&this.startTimer(),this.props.newGame||this.stopTimer()}},{key:"componentWillReceiveProps",value:function(e){var t=this;this.props!==e&&setTimeout(function(){t.setState({seconds:60*e.minutes}),e.newGame&&t.startTimer(),e.newGame||t.stopTimer()},10)}},{key:"render",value:function(){var e=this.state.time,t=e.m,a=e.s;return s.a.createElement("div",null,s.a.createElement("div",{className:"countdown-wrapper"},s.a.createElement("div",{className:"countdown-item"},0===t?a:t,s.a.createElement("span",{className:"highlight"},0===t?"s":"m"))))}}]),t}(s.a.Component));z.defaultProps={minutes:2};var I=z,B=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"openPlayModal",value:function(){window.location.hash="",window.location.hash="play",this.props.setMinutes(parseInt(this.props.minutes)),this.props.clickThis&&"play"===this.props.clickThis&&this.props.nextTutorialStep()}},{key:"openPlayerModal",value:function(){window.location.hash="",window.location.hash="player"}},{key:"openHelpModal",value:function(){window.location.hash="",window.location.hash="help"}},{key:"render",value:function(){var e="Timer",t=s.a.createElement("div",{className:"timer"},s.a.createElement(I,{minutes:parseFloat(this.props.minutes),newGame:this.props.newGame,setMinutes:this.props.setMinutes,saveGameProgress:this.props.saveGameProgress,quitGame:this.props.quitGame}));0===this.props.minutes&&(e="Endless",t=s.a.createElement("div",{className:"timer"},"\u221e"));var a="New Game",l=this.openPlayModal.bind(this),i=s.a.createElement("div",null,"\u2023");return this.props.newGame&&(a="Quit",l=this.props.quitGame,i=s.a.createElement("div",null,"\xd7")),s.a.createElement("div",{className:"grid-sidebar"},s.a.createElement("div",{className:"grid-gameplay sidebar-inner sidebar-inner-gameplay"},s.a.createElement("div",{className:"grid-cell tooltip button alt","data-tooltip":"Score Multiplier"},s.a.createElement("div",{className:"multiplier"},s.a.createElement("span",{className:"highlight"},"x"),s.a.createElement("span",null,this.props.multiplier))),s.a.createElement("div",{className:"grid-cell tooltip button alt","data-tooltip":e},t),s.a.createElement("div",{className:"grid-cell tooltip button alt","data-tooltip":"Grid Size"},s.a.createElement("div",{className:"grid-size"},"\u229e",s.a.createElement("sub",{className:"highlight"},this.props.size))),s.a.createElement("div",{className:"grid-cell"}),s.a.createElement("div",{className:"grid-cell"})),s.a.createElement("div",{className:"grid-actions sidebar-inner sidebar-inner-actions"},s.a.createElement("div",{className:"grid-cell tooltip button alt","data-tooltip":"Player",onClick:this.openPlayerModal.bind(this)},s.a.createElement("div",null,"\u2731")),s.a.createElement("div",{className:"grid-cell tooltip button alt","data-tooltip":"Help",onClick:this.openHelpModal.bind(this)},s.a.createElement("div",null,"?")),s.a.createElement("div",{className:"grid-cell tooltip button alt","data-tooltip":a,onClick:l},"play"===this.props.clickThis||"quit"===this.props.clickThis?s.a.createElement(k,{className:"click-this"},i):i),s.a.createElement("div",{className:"grid-cell tooltip button alt","data-tooltip":"Undo Word",onClick:this.props.handleUndoButtonClick},s.a.createElement("div",null,"\u2190")),s.a.createElement("div",{className:"grid-cell tooltip button alt","data-tooltip":"Submit Word",onClick:this.props.handleSubmitButtonClick},"submit"===this.props.clickThis?s.a.createElement(k,{className:"click-this"},s.a.createElement("div",null,"\u21b5")):s.a.createElement("div",null,"\u21b5"))))}}]),t}(s.a.Component);B.defaultProps={size:5,minutes:5,multiplier:1,newGame:!1};var q=B,F=(a(59),function(e){var t=e.id,a=e.transparent,l=e.canClose,i=e.title,n=e.children,r=e.footer;return s.a.createElement("div",{className:"modal",id:t},a?s.a.createElement("a",{href:"#close",className:"modal-overlay","aria-label":"Close"}," "):s.a.createElement("span",{className:"modal-overlay",style:{background:"rgb(25, 28, 34)"}}),s.a.createElement("div",{className:"modal-container"},s.a.createElement("div",{className:"modal-header"},l&&s.a.createElement("a",{href:"#close",className:"btn btn-clear","aria-label":"Close"}," "),s.a.createElement("div",{className:"modal-title"},s.a.createElement("strong",{style:U},i))),s.a.createElement("div",{className:"modal-body"},s.a.createElement("div",{className:"content"},n)),s.a.createElement("div",{className:"modal-footer"},r)))}),U={letterSpacing:"0.1rem",wordSpacing:"0.2rem",textTransform:"uppercase",margin:0,fontWeight:600};F.defaultProps={children:"Here is the default modal content ...",title:"TITLE",id:"modal",footer:"",transparent:!0,canClose:!0};var H=F;function D(e){var t=e.size,a=e.minutes,l=e.handleGridSizeClick,i=e.handleMinuteClick,n=e.startNewGame,r=e.clickThis,o=[];[3,4,5,6,7].forEach(function(e,a){o[a]=e===t?s.a.createElement("div",{key:a.toString(),className:"grid-box grid-size selected",onClick:l},e):s.a.createElement("div",{key:a.toString(),className:"grid-box grid-size",onClick:l},e)});var c=[];return[0,1,2,3,4,5,6,7,8,9,10].forEach(function(e,t){c[t]=0===e&&r&&"endless"===r?s.a.createElement(k,{key:t.toString(),className:"click-this"},s.a.createElement("div",{className:"grid-box grid-minute",onClick:i},e)):e===a?s.a.createElement("div",{key:t.toString(),className:"grid-box grid-minute selected",onClick:i},e):s.a.createElement("div",{key:t.toString(),className:"grid-box grid-minute",onClick:i},e)}),s.a.createElement(H,{title:"NEW GAME",id:"play",footer:s.a.createElement("div",{style:Object(j.a)({},K,R)},r&&"start"===r?s.a.createElement(k,{className:"click-this"},s.a.createElement("button",{style:Y,onClick:n},"Start New Game")):s.a.createElement("button",{style:Y,onClick:n},"Start New Game")),transparent:!1,canClose:!1},s.a.createElement("div",null,s.a.createElement("h5",{style:K},"GRID SIZE"),s.a.createElement("div",null,"..."),s.a.createElement("div",null,"\xa0"),s.a.createElement("div",{className:"grid-box-container","data-size":t},o)),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("div",null,s.a.createElement("h5",{style:K},"TIMER"),s.a.createElement("div",null,"..."),s.a.createElement("div",null,"\xa0"),s.a.createElement("div",{className:"grid-box-container","data-size":t},c),s.a.createElement("div",{style:{marginTop:".4rem"}},s.a.createElement("em",null,s.a.createElement("small",null,"select 0 for endless mode")))))}var K={letterSpacing:"0.1rem",wordSpacing:"0.2rem",textTransform:"uppercase",margin:0,fontWeight:600},R={textAlign:"center"},Y={background:"transparent",color:"#FFF",textDecoration:"none",border:"1px solid #28F",padding:"6px 8px 6px 12px",cursor:"pointer",fontWeight:600};D.defaultProps={newGame:!1,size:5,minutes:5};var _=D,J=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"saveProfile",value:function(){console.log("saving profile and settings ..."),window.location.hash=""}},{key:"render",value:function(){return s.a.createElement(H,{title:"PLAYER",id:"player"},s.a.createElement("div",null,s.a.createElement("h5",{style:Q},"PROFILE"),s.a.createElement("div",null,"..."),s.a.createElement("div",null,"\xa0"),s.a.createElement("div",null,"Username : tunjioye"),s.a.createElement("div",null,"\xa0"),s.a.createElement("div",null,"Highest Score : 2019")),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("div",null,s.a.createElement("h5",{style:Q},"CELL SHUFFLE TYPE"),s.a.createElement("div",null,"..."),s.a.createElement("div",null,"\xa0"),s.a.createElement("div",null,"SHUFFLE SELECTED CELLS | SHUFFLE ALL CELLS"),s.a.createElement("div",null,s.a.createElement("em",null,s.a.createElement("small",null,"cell reshuffle after submit")))),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("div",{style:Object(j.a)({},Q,V)},s.a.createElement("button",{style:X,onClick:this.saveProfile.bind(this)},"Save Profile")))}}]),t}(s.a.Component),Q={letterSpacing:"0.1rem",wordSpacing:"0.2rem",textTransform:"uppercase",margin:0,fontWeight:600},V={textAlign:"center"},X={background:"transparent",color:"#FFF",textDecoration:"none",border:"1px solid #28F",padding:"6px 8px 6px 12px",cursor:"pointer",fontWeight:600},Z=J,$=a(10);var ee={letterSpacing:"0.1rem",wordSpacing:"0.2rem",textTransform:"uppercase",margin:0,fontWeight:600},te={border:"1px solid #28F",padding:"3px 4px 3px 6px"},ae={textAlign:"center"},le={color:"#FFF",textDecoration:"none"},se={margin:"0 auto",dt:{width:"80px",display:"inline-block",textAlign:"right",margin:"5px auto"},dd:{display:"inline"}},ie=function(){return s.a.createElement(H,{title:"HELP & ABOUT",id:"help"},s.a.createElement("div",null,s.a.createElement("h5",{style:ee},"HOW TO PLAY"),s.a.createElement("div",null,"..."),s.a.createElement("div",null,"\xa0"),s.a.createElement("div",null,"\u2022 Select some letters to make a word"),s.a.createElement("div",null,"\u2022 Click Submit Button to evaluate your Score"),s.a.createElement("div",null,"\u2022 QUITING IS NOT AN OPTION!"),s.a.createElement("div",null,"\u2022 ",s.a.createElement("em",null,"How to Play Tutorial coming soon ..."))),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("div",null,s.a.createElement("h5",{style:ee},"KEYBOARD SHORTCUTS"),s.a.createElement("div",null,"..."),s.a.createElement("div",null,"\xa0"),s.a.createElement("dl",{style:Object(j.a)({},se)},s.a.createElement("dt",{style:Object(j.a)({},se.dt)},s.a.createElement("small",null,"UNDO")),s.a.createElement("dd",{style:Object(j.a)({},se.dd)},s.a.createElement("kbd",{style:te},"BKSP")," \xa0\xa0\xa0 ",s.a.createElement("small",null,"OR")," \xa0\xa0\xa0 ",s.a.createElement("kbd",{style:te},"DEL"),s.a.createElement("br",null)),s.a.createElement("dt",{style:Object(j.a)({},se.dt)},s.a.createElement("small",null,"SUBMIT")),s.a.createElement("dd",{style:Object(j.a)({},se.dd)},s.a.createElement("kbd",{style:te},"ENTER")," \xa0\xa0 ",s.a.createElement("small",null,"OR")," \xa0\xa0 ",s.a.createElement("kbd",{style:te},"SPACE"),s.a.createElement("br",null)))),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("div",null,s.a.createElement("h5",{style:ee},"ABOUT"),s.a.createElement("div",null,"..."),s.a.createElement("div",null,"\xa0"),s.a.createElement("div",null,"Tapword - ",s.a.createElement("em",null,"words are limitless")," : is a word game that tests your knowledge of English words. Tapword provides a means to combine as many letters as you can to make the longest word you possibly can."),s.a.createElement("div",null,"\xa0"),s.a.createElement("div",{style:ae},s.a.createElement("em",null,"Play and Boast of your Vocabulary among friends")),s.a.createElement("div",null,"\xa0"),s.a.createElement("div",{style:Object(j.a)({},ee,ae)},"+++ THANK YOU +++")),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("div",{style:Object(j.a)({},ee,ae)},"*** ",s.a.createElement("a",{style:le,href:"https://github.com/tunjioye/tapword",target:"_blank",rel:"noopener noreferrer"},"Git Repo")," ***"),s.a.createElement("br",null),s.a.createElement("div",{style:Object(j.a)({},ae)},s.a.createElement($.a,{href:"https://github.com/tunjioye/tapword","data-icon":"octicon-star","aria-label":"Star tunjioye/tapword on GitHub"},"Star"),s.a.createElement("span",{style:{padding:"0 5px"}}),s.a.createElement($.a,{href:"https://github.com/tunjioye/tapword/fork","data-icon":"octicon-repo-forked","aria-label":"Fork tunjioye/tapword on GitHub"},"Fork")))},ne=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={newGame:e.newGame,size:e.size,minutes:e.minutes,rows:e.rows,multiplier:e.multiplier,score:e.score,lastWordLength:e.lastWordLength,word:e.word,cellToggle:e.cellToggle,shuffle:e.shuffle,shuffleAll:e.shuffleAll},a.startNewGame=a.startNewGame.bind(Object(u.a)(a)),a.quitGame=a.quitGame.bind(Object(u.a)(a)),a.hasStartedNewGame=a.hasStartedNewGame.bind(Object(u.a)(a)),a.setMinutes=a.setMinutes.bind(Object(u.a)(a)),a.randomLetters=a.randomLetters.bind(Object(u.a)(a)),a.handleCellClick=a.handleCellClick.bind(Object(u.a)(a)),a.toggleSelectionWord=a.toggleSelectionWord.bind(Object(u.a)(a)),a.pushSelectionWord=a.pushSelectionWord.bind(Object(u.a)(a)),a.popSelectionWord=a.popSelectionWord.bind(Object(u.a)(a)),a.handleKeyUp=a.handleKeyUp.bind(Object(u.a)(a)),a.submitWord=a.submitWord.bind(Object(u.a)(a)),a.updateMultiplier=a.updateMultiplier.bind(Object(u.a)(a)),a.updateScore=a.updateScore.bind(Object(u.a)(a)),a.clearSelectionWord=a.clearSelectionWord.bind(Object(u.a)(a)),a.setSelectedCells=a.setSelectedCells.bind(Object(u.a)(a)),a.resetSelectedCells=a.resetSelectedCells.bind(Object(u.a)(a)),a.shuffleCells=a.shuffleCells.bind(Object(u.a)(a)),a.saveGameProgress=a.saveGameProgress.bind(Object(u.a)(a)),a.handleGridSizeClick=a.handleGridSizeClick.bind(Object(u.a)(a)),a.handleMinuteClick=a.handleMinuteClick.bind(Object(u.a)(a)),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"startNewGame",value:function(){this.setState({newGame:!0,multiplier:1,score:0,lastWordLength:0,word:[]}),this.resetSelectedCells(),window.location.hash="",this.saveGameProgress("save")}},{key:"quitGame",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:" ";"string"===typeof e&&""!==e?window.alert("".concat(e," \r\nYour Score is : ").concat(this.state.score)):window.alert("Your Score is : ".concat(this.state.score)),this.setState({newGame:!1}),window.localStorage.getItem("game")&&window.localStorage.removeItem("game")}},{key:"hasStartedNewGame",value:function(){return!!this.state.newGame||(window.confirm("Would You like to Start a New Game?")&&(window.location.hash="play"),!1)}},{key:"setMinutes",value:function(e){this.setState({minutes:e})}},{key:"randomLetters",value:function(){for(var e=Object(h.a)("ABCDEFGHIJKLMNOPQRSTUVWXYZ"),t=[],a=0;a<this.state.size;a++)t[a]=Object(h.a)(Array(parseInt(this.state.size))).map(function(t){return e[0|Math.floor(Math.random()*e.length)]}).join("");return t}},{key:"handleCellClick",value:function(e){if(this.hasStartedNewGame()){this.saveGameProgress("loading");var t=e.target,a=t.getAttribute("cell"),l=this.state.word;this.state.cellToggle?0===l.filter(function(e){return e.cell===a}).length?this.pushSelectionWord(t):this.toggleSelectionWord(e):0===l.filter(function(e){return e.cell===a}).length?this.pushSelectionWord(t):l[l.length-1].cell===a&&this.popSelectionWord(),this.saveGameProgress("save")}}},{key:"toggleSelectionWord",value:function(e){if(this.hasStartedNewGame()){this.saveGameProgress("loading");var t=e.target.getAttribute("cell"),a=this.state.word;a=a.filter(function(e){return e.cell!==t}),this.setState({word:a}),this.saveGameProgress("save")}}},{key:"pushSelectionWord",value:function(e){var t=e.getAttribute("cell"),a=this.state.word;a[a.length]={cell:t,letter:e.innerHTML},this.setState({word:a})}},{key:"popSelectionWord",value:function(){if(this.hasStartedNewGame()){if(this.saveGameProgress("loading"),this.state.word.length>0){var e=this.state.word;e.length--,this.setState({word:e})}this.saveGameProgress("save")}}},{key:"clearSelectionWord",value:function(){this.setState({word:[]})}},{key:"updateMultiplier",value:function(e){if(this.state.lastWordLength>1){var t=this.state.lastWordLength,a=this.state.multiplier,l=document.getElementsByClassName("multiplier")[0];e>t?(l.classList.add("plus1"),setTimeout(function(){l.classList.remove("plus1")},500),a++):e<t&&this.state.multiplier>1&&(l.classList.add("minus1"),setTimeout(function(){l.classList.remove("minus1")},500),a--),this.setState({multiplier:a})}}},{key:"updateScore",value:function(e){var t=this.state.score;t+=e*this.state.multiplier,this.updateMultiplier(e),this.setState({score:t,lastWordLength:e})}},{key:"setSelectedCells",value:function(){this.state.word.forEach(function(e){document.querySelector('[cell="'.concat(e.cell,'"]')).classList.add("selected")})}},{key:"resetSelectedCells",value:function(){var e=document.querySelectorAll('[class="grid-cell selected"]');this.shuffleCells(e)}},{key:"shuffleCells",value:function(e){if(this.state.shuffle)if(this.state.shuffleAll)this.setState({rows:this.randomLetters()});else{var t=Object(h.a)("ABCDEFGHIJKLMNOPQRSTUVWXYZ");e.forEach(function(e){return e.innerHTML=t[0|Math.floor(Math.random()*t.length)]})}}},{key:"submitWord",value:function(){if(this.hasStartedNewGame()&&this.state.word.length>0){this.saveGameProgress("loading");var e=this.state.word.map(function(e){return e.letter}).join("").toLowerCase();E.get("?text="+e).then(function(t){var a=this,l=document.querySelectorAll('[class="grid-cell selected"]');void 0===t.data.corrections[e]?(l.forEach(function(e){return e.classList.add("flash-success")}),setTimeout(function(){l.forEach(function(e){return e.classList.remove("flash-success")}),a.updateScore(e.length),a.clearSelectionWord(),a.resetSelectedCells(),a.saveGameProgress("save")},500)):(document.getElementById("selection-word").classList.add("shake"),l.forEach(function(e){return e.classList.add("flash-error")}),setTimeout(function(){document.getElementById("selection-word").classList.remove("shake"),l.forEach(function(e){return e.classList.remove("flash-error")}),a.saveGameProgress("save")},500))}.bind(this)).catch(function(e){if(e){var t="Network Error";void 0!==e.response&&(t=e.response.data.message),console.error(t),alert(t)}this.saveGameProgress("save")}.bind(this))}}},{key:"saveGameProgress",value:function(e){var t=this,a=document.getElementById("saving-progress");switch(e){case"save":setTimeout(function(){window.localStorage.setItem("game",JSON.stringify(t.state)),a.classList.add("d-hide")},500);break;case"loading":default:a.classList.remove("d-hide")}}},{key:"handleGridSizeClick",value:function(e){var t=this,a=parseInt(e.target.innerText);this.setState({size:a}),setTimeout(function(){t.setState({rows:t.randomLetters()});var e=document.getElementsByClassName("grid-new"),l=document.getElementsByClassName("grid-container"),s=document.getElementsByClassName("grid-sidebar");e[0].setAttribute("size",a),l[0].setAttribute("size",a),s[0].setAttribute("size",a)},10)}},{key:"handleMinuteClick",value:function(e){this.setState({minutes:parseInt(e.target.innerText)})}},{key:"handleKeyUp",value:function(e){switch(e.keyCode){case 8:case 46:e.preventDefault(),this.popSelectionWord();break;case 13:case 32:e.preventDefault(),this.submitWord()}}},{key:"componentDidMount",value:function(){var e=this;if(document.addEventListener("keyup",this.handleKeyUp),this.props.generate&&this.setState({rows:this.randomLetters()}),window.localStorage.getItem("game")){var t=window.localStorage.getItem("game"),a=JSON.parse(t);if(a.newGame){this.setState(a);var l=document.getElementsByClassName("grid-new"),s=document.getElementsByClassName("grid-container"),i=document.getElementsByClassName("grid-sidebar");l[0].setAttribute("size",a.size),s[0].setAttribute("size",a.size),i[0].setAttribute("size",a.size),setTimeout(function(){e.setSelectedCells()},10)}else window.localStorage.removeItem("game")}}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("header",{className:"App-header"},s.a.createElement("div",{id:"saving-progress",className:"d-hide"},s.a.createElement(w,null)),s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement(M,{score:this.state.score})),s.a.createElement("div",null,s.a.createElement(A,{word:this.state.word.map(function(e){return e.letter})}))),s.a.createElement("div",{style:{minHeight:"8px",maxHeight:"8px"}},"\xa0"),s.a.createElement("div",{className:"grid-flex"},s.a.createElement(O,{size:this.state.size,rows:this.state.rows,handleCellClick:this.handleCellClick}),s.a.createElement(q,{multiplier:this.state.multiplier,minutes:parseFloat(this.state.minutes),newGame:this.state.newGame,setMinutes:this.setMinutes,saveGameProgress:this.saveGameProgress,quitGame:this.quitGame,handleUndoButtonClick:this.popSelectionWord,handleSubmitButtonClick:this.submitWord})))),!this.state.newGame&&s.a.createElement(_,{newGame:this.state.newGame,startNewGame:this.startNewGame,size:this.state.size,minutes:this.state.minutes,handleGridSizeClick:this.handleGridSizeClick,handleMinuteClick:this.handleMinuteClick}),s.a.createElement(Z,null),s.a.createElement(ie,null))}}]),t}(s.a.Component);ne.defaultProps={newGame:!1,generate:!0,cellToggle:!0,shuffle:!0,shuffleAll:!0,size:5,minutes:5,rows:[],multiplier:1,score:0,lastWordLength:0,word:[]};var re=ne,oe=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={tutorialSteps:e.tutorialSteps,currentStep:e.currentStep,newGame:e.newGame,size:e.size,minutes:e.minutes,rows:e.rows,multiplier:e.multiplier,score:e.score,lastWordLength:e.lastWordLength,word:e.word,cellToggle:e.cellToggle,shuffle:e.shuffle,shuffleAll:e.shuffleAll},a.startNewGame=a.startNewGame.bind(Object(u.a)(a)),a.quitGame=a.quitGame.bind(Object(u.a)(a)),a.hasStartedNewGame=a.hasStartedNewGame.bind(Object(u.a)(a)),a.setMinutes=a.setMinutes.bind(Object(u.a)(a)),a.randomLetters=a.randomLetters.bind(Object(u.a)(a)),a.handleCellClick=a.handleCellClick.bind(Object(u.a)(a)),a.toggleSelectionWord=a.toggleSelectionWord.bind(Object(u.a)(a)),a.pushSelectionWord=a.pushSelectionWord.bind(Object(u.a)(a)),a.popSelectionWord=a.popSelectionWord.bind(Object(u.a)(a)),a.handleKeyUp=a.handleKeyUp.bind(Object(u.a)(a)),a.submitWord=a.submitWord.bind(Object(u.a)(a)),a.updateMultiplier=a.updateMultiplier.bind(Object(u.a)(a)),a.updateScore=a.updateScore.bind(Object(u.a)(a)),a.clearSelectionWord=a.clearSelectionWord.bind(Object(u.a)(a)),a.resetSelectedCells=a.resetSelectedCells.bind(Object(u.a)(a)),a.shuffleCells=a.shuffleCells.bind(Object(u.a)(a)),a.saveGameProgress=a.saveGameProgress.bind(Object(u.a)(a)),a.handleGridSizeClick=a.handleGridSizeClick.bind(Object(u.a)(a)),a.handleMinuteClick=a.handleMinuteClick.bind(Object(u.a)(a)),a.nextTutorialStep=a.nextTutorialStep.bind(Object(u.a)(a)),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"startNewGame",value:function(){5===this.state.size&&0===this.state.minutes?(this.setState({newGame:!0,multiplier:1,score:0,lastWordLength:0,word:[]}),this.resetSelectedCells(),window.location.hash="",this.saveGameProgress("save"),this.nextTutorialStep()):this.setState({currentStep:1})}},{key:"quitGame",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:" ";"string"===typeof e&&""!==e?window.alert("".concat(e," \r\nYour Score is : ").concat(this.state.score)):window.alert("Your Score is : ".concat(this.state.score)),this.setState({newGame:!1}),window.localStorage.getItem("game")&&window.localStorage.removeItem("game"),window.localStorage.setItem("tw_quicktutorial","done"),window.alert("Thanks for taking our Quick Tutorial"),this.props.endTutorial()}},{key:"hasStartedNewGame",value:function(){return!!this.state.newGame}},{key:"setMinutes",value:function(e){this.setState({minutes:e})}},{key:"randomLetters",value:function(){for(var e=Object(h.a)("ABCDEFGHIJKLMNOPQRSTUVWXYZ"),t=[],a=0;a<this.state.size;a++)t[a]=Object(h.a)(Array(parseInt(this.state.size))).map(function(t){return e[0|Math.floor(Math.random()*e.length)]}).join("");return t}},{key:"handleCellClick",value:function(e){if(this.hasStartedNewGame()){var t=this.state,a=t.tutorialSteps,l=t.currentStep;switch("c".concat(a[l])){case e.target.getAttribute("cell"):this.nextTutorialStep();break;default:return}this.saveGameProgress("loading");var s=e.target,i=s.getAttribute("cell"),n=this.state.word;this.state.cellToggle?0===n.filter(function(e){return e.cell===i}).length?this.pushSelectionWord(s):this.toggleSelectionWord(e):0===n.filter(function(e){return e.cell===i}).length?this.pushSelectionWord(s):n[n.length-1].cell===i&&this.popSelectionWord(),this.saveGameProgress("save")}}},{key:"toggleSelectionWord",value:function(e){if(this.hasStartedNewGame()){this.saveGameProgress("loading");var t=e.target.getAttribute("cell"),a=this.state.word;a=a.filter(function(e){return e.cell!==t}),this.setState({word:a}),this.saveGameProgress("save")}}},{key:"pushSelectionWord",value:function(e){var t=e.getAttribute("cell"),a=this.state.word;a[a.length]={cell:t,letter:e.innerHTML},this.setState({word:a})}},{key:"popSelectionWord",value:function(){if(this.hasStartedNewGame()){if(this.saveGameProgress("loading"),this.state.word.length>0){var e=this.state.word;e.length--,this.setState({word:e})}this.saveGameProgress("save")}}},{key:"clearSelectionWord",value:function(){this.setState({word:[]})}},{key:"updateMultiplier",value:function(e){if(this.state.lastWordLength>1){var t=this.state.lastWordLength,a=this.state.multiplier,l=document.getElementsByClassName("multiplier")[0];e>t?(l.classList.add("plus1"),setTimeout(function(){l.classList.remove("plus1")},500),a++):e<t&&this.state.multiplier>1&&(l.classList.add("minus1"),setTimeout(function(){l.classList.remove("minus1")},500),a--),this.setState({multiplier:a})}}},{key:"updateScore",value:function(e){var t=this.state.score;t+=e*this.state.multiplier,this.updateMultiplier(e),this.setState({score:t,lastWordLength:e})}},{key:"resetSelectedCells",value:function(){var e=document.querySelectorAll('[class="grid-cell selected"]');this.shuffleCells(e)}},{key:"shuffleCells",value:function(e){if(this.state.shuffle)if(this.state.shuffleAll)this.setState({rows:this.randomLetters()});else{var t=Object(h.a)("ABCDEFGHIJKLMNOPQRSTUVWXYZ");e.forEach(function(e){return e.innerHTML=t[0|Math.floor(Math.random()*t.length)]})}}},{key:"submitWord",value:function(){if(this.hasStartedNewGame()&&this.state.word.length>0){this.saveGameProgress("loading");var e=this.state.word.map(function(e){return e.letter}).join("").toLowerCase();E.get("?text="+e).then(function(t){var a=this,l=document.querySelectorAll('[class="grid-cell selected"]');void 0===t.data.corrections[e]?(l.forEach(function(e){return e.classList.add("flash-success")}),setTimeout(function(){l.forEach(function(e){return e.classList.remove("flash-success")}),a.updateScore(e.length),a.clearSelectionWord(),a.resetSelectedCells(),a.saveGameProgress("save"),a.nextTutorialStep()},500)):(document.getElementById("selection-word").classList.add("shake"),l.forEach(function(e){return e.classList.add("flash-error")}),setTimeout(function(){document.getElementById("selection-word").classList.remove("shake"),l.forEach(function(e){return e.classList.remove("flash-error")}),a.saveGameProgress("save")},500))}.bind(this)).catch(function(e){if(e){var t="Network Error";void 0!==e.response&&(t=e.response.data.message),console.error(t),alert(t)}this.saveGameProgress("save")}.bind(this))}}},{key:"saveGameProgress",value:function(e){var t=this,a=document.getElementById("saving-progress");switch(e){case"save":setTimeout(function(){window.localStorage.setItem("game",JSON.stringify(t.state)),a.classList.add("d-hide")},500);break;case"loading":default:a.classList.remove("d-hide")}}},{key:"handleGridSizeClick",value:function(e){var t=this,a=parseInt(e.target.innerText);this.setState({size:a}),setTimeout(function(){t.setState({rows:t.randomLetters()});var e=document.getElementsByClassName("grid-new"),l=document.getElementsByClassName("grid-container"),s=document.getElementsByClassName("grid-sidebar");e[0].setAttribute("size",a),l[0].setAttribute("size",a),s[0].setAttribute("size",a)},10)}},{key:"handleMinuteClick",value:function(e){this.setState({minutes:parseInt(e.target.innerText)});var t=this.state;"endless"===t.tutorialSteps[t.currentStep]&&"0"===e.target.innerText&&this.nextTutorialStep()}},{key:"nextTutorialStep",value:function(){var e=this.state.currentStep;this.setState({currentStep:e+1})}},{key:"handleKeyUp",value:function(e){switch(e.keyCode){case 8:case 46:e.preventDefault(),this.popSelectionWord();break;case 13:case 32:e.preventDefault(),this.submitWord()}}},{key:"componentDidMount",value:function(){document.addEventListener("keyup",this.handleKeyUp),this.props.generate&&this.setState({rows:this.randomLetters()})}},{key:"render",value:function(){var e=this.state.word.map(function(e){return e.cell});return s.a.createElement("div",{className:"App"},s.a.createElement("header",{className:"App-header"},s.a.createElement("div",{id:"saving-progress",className:"d-hide"},s.a.createElement(w,null)),s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement(M,{score:this.state.score})),s.a.createElement("div",null,s.a.createElement(A,{word:this.state.word.map(function(e){return e.letter})}))),s.a.createElement("div",{style:{minHeight:"8px",maxHeight:"8px"}},"\xa0"),s.a.createElement("div",{className:"grid-flex"},s.a.createElement(O,{clickThis:this.state.tutorialSteps[this.state.currentStep],wordCells:e,handleCellClick:this.handleCellClick}),s.a.createElement(q,{clickThis:this.state.tutorialSteps[this.state.currentStep],nextTutorialStep:this.nextTutorialStep,multiplier:this.state.multiplier,minutes:parseFloat(this.state.minutes),newGame:this.state.newGame,setMinutes:this.setMinutes,saveGameProgress:this.saveGameProgress,quitGame:this.quitGame,handleUndoButtonClick:this.popSelectionWord,handleSubmitButtonClick:this.submitWord})))),!this.state.newGame&&s.a.createElement(_,{clickThis:this.state.tutorialSteps[this.state.currentStep],newGame:this.state.newGame,startNewGame:this.startNewGame,size:this.state.size,minutes:this.state.minutes,handleGridSizeClick:this.handleGridSizeClick,handleMinuteClick:this.handleMinuteClick}),s.a.createElement(Z,null),s.a.createElement(ie,null))}}]),t}(s.a.Component);oe.defaultProps={tutorialSteps:["play","endless","start",15,13,"submit",16,11,7,8,"submit","quit"],currentStep:0,newGame:!1,generate:!0,cellToggle:!0,shuffle:!0,shuffleAll:!0,size:5,minutes:5,rows:[],multiplier:1,score:0,lastWordLength:0,word:[]};var ce=oe,de=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={tutorial:e.tutorial},a.quickTutorial=a.quickTutorial.bind(Object(u.a)(a)),a.endTutorial=a.endTutorial.bind(Object(u.a)(a)),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"quickTutorial",value:function(){window.confirm("Quick Tutorial?")&&this.setState({tutorial:!0})}},{key:"endTutorial",value:function(){this.setState({tutorial:!1})}},{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){window.localStorage.getItem("tw_quicktutorial")?e.endTutorial():e.quickTutorial()},100)}},{key:"render",value:function(){return this.state.tutorial?s.a.createElement(ce,{endTutorial:this.endTutorial}):s.a.createElement(re,null)}}]),t}(s.a.Component);de.defaultProps={tutorial:!1};var ue=de;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(s.a.createElement(ue,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[26,1,2]]]);
//# sourceMappingURL=main.148ecb1e.chunk.js.map