!function(e){function t(e){delete installedChunks[e]}function n(e){var t=document.getElementsByTagName("head")[0],n=document.createElement("script");n.type="text/javascript",n.charset="utf-8",n.src=f.p+""+e+"."+w+".hot-update.js",t.appendChild(n)}function r(){return new Promise(function(e,t){if("undefined"==typeof XMLHttpRequest)return t(new Error("No browser support"));try{var n=new XMLHttpRequest,r=f.p+""+w+".hot-update.json";n.open("GET",r,!0),n.timeout=1e4,n.send(null)}catch(e){return t(e)}n.onreadystatechange=function(){if(4===n.readyState)if(0===n.status)t(new Error("Manifest request to "+r+" timed out."));else if(404===n.status)e();else if(200!==n.status&&304!==n.status)t(new Error("Manifest request to "+r+" failed."));else{try{var o=JSON.parse(n.responseText)}catch(e){return void t(e)}e(o)}}})}function o(e){var t=H[e];if(!t)return f;var n=function(n){return t.hot.active?(H[n]?H[n].parents.indexOf(e)<0&&H[n].parents.push(e):k=[e],t.children.indexOf(n)<0&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),k=[]),S=!1,f(n)};for(var r in f)Object.prototype.hasOwnProperty.call(f,r)&&Object.defineProperty(n,r,function(e){return{configurable:!0,enumerable:!0,get:function(){return f[e]},set:function(t){f[e]=t}}}(r));return Object.defineProperty(n,"e",{enumerable:!0,value:function(e){function t(){C--,"prepare"===_&&(j[e]||u(e),0===C&&0===E&&l())}return"ready"===_&&c("prepare"),C++,f.e(e).then(t,function(e){throw t(),e})}}),n}function i(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:S,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:a,apply:p,status:function(e){if(!e)return _;O.push(e)},addStatusHandler:function(e){O.push(e)},removeStatusHandler:function(e){var t=O.indexOf(e);t>=0&&O.splice(t,1)},data:b[e]};return S=!0,t}function c(e){_=e;for(var t=0;t<O.length;t++)O[t].call(null,e)}function s(e){return+e+""===e?+e:e}function a(e){if("idle"!==_)throw new Error("check() is only allowed in idle status");return g=e,c("check"),r().then(function(e){if(!e)return c("idle"),null;q={},j={},D=e.c,v=e.h,c("prepare");var t=new Promise(function(e,t){m={resolve:e,reject:t}});y={};return u(0),"prepare"===_&&0===C&&0===E&&l(),t})}function d(e,t){if(D[e]&&q[e]){q[e]=!1;for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(y[n]=t[n]);0==--E&&0===C&&l()}}function u(e){D[e]?(q[e]=!0,E++,n(e)):j[e]=!0}function l(){c("ready");var e=m;if(m=null,e)if(g)p(g).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in y)Object.prototype.hasOwnProperty.call(y,n)&&t.push(s(n));e.resolve(t)}}function p(n){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];e.indexOf(r)<0&&e.push(r)}}if("ready"!==_)throw new Error("apply() is only allowed in ready status");n=n||{};var o,i,a,d,u,l={},p=[],h={},m=function(){console.warn("[HMR] unexpected require("+S.moduleId+") to disposed module")};for(var g in y)if(Object.prototype.hasOwnProperty.call(y,g)){u=s(g);var S;S=y[g]?function(e){for(var t=[e],n={},o=t.slice().map(function(e){return{chain:[e],id:e}});o.length>0;){var i=o.pop(),c=i.id,s=i.chain;if((d=H[c])&&!d.hot._selfAccepted){if(d.hot._selfDeclined)return{type:"self-declined",chain:s,moduleId:c};if(d.hot._main)return{type:"unaccepted",chain:s,moduleId:c};for(var a=0;a<d.parents.length;a++){var u=d.parents[a],l=H[u];if(l){if(l.hot._declinedDependencies[c])return{type:"declined",chain:s.concat([u]),moduleId:c,parentId:u};t.indexOf(u)>=0||(l.hot._acceptedDependencies[c]?(n[u]||(n[u]=[]),r(n[u],[c])):(delete n[u],t.push(u),o.push({chain:s.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}(u):{type:"disposed",moduleId:g};var x=!1,O=!1,E=!1,C="";switch(S.chain&&(C="\nUpdate propagation: "+S.chain.join(" -> ")),S.type){case"self-declined":n.onDeclined&&n.onDeclined(S),n.ignoreDeclined||(x=new Error("Aborted because of self decline: "+S.moduleId+C));break;case"declined":n.onDeclined&&n.onDeclined(S),n.ignoreDeclined||(x=new Error("Aborted because of declined dependency: "+S.moduleId+" in "+S.parentId+C));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(S),n.ignoreUnaccepted||(x=new Error("Aborted because "+u+" is not accepted"+C));break;case"accepted":n.onAccepted&&n.onAccepted(S),O=!0;break;case"disposed":n.onDisposed&&n.onDisposed(S),E=!0;break;default:throw new Error("Unexception type "+S.type)}if(x)return c("abort"),Promise.reject(x);if(O){h[u]=y[u],r(p,S.outdatedModules);for(u in S.outdatedDependencies)Object.prototype.hasOwnProperty.call(S.outdatedDependencies,u)&&(l[u]||(l[u]=[]),r(l[u],S.outdatedDependencies[u]))}E&&(r(p,[S.moduleId]),h[u]=m)}var j=[];for(i=0;i<p.length;i++)u=p[i],H[u]&&H[u].hot._selfAccepted&&j.push({module:u,errorHandler:H[u].hot._selfAccepted});c("dispose"),Object.keys(D).forEach(function(e){D[e]===!1&&t(e)});for(var q,T=p.slice();T.length>0;)if(u=T.pop(),d=H[u]){var I={},P=d.hot._disposeHandlers;for(a=0;a<P.length;a++)(o=P[a])(I);for(b[u]=I,d.hot.active=!1,delete H[u],a=0;a<d.children.length;a++){var A=H[d.children[a]];A&&((q=A.parents.indexOf(u))>=0&&A.parents.splice(q,1))}}var M,U;for(u in l)if(Object.prototype.hasOwnProperty.call(l,u)&&(d=H[u]))for(U=l[u],a=0;a<U.length;a++)M=U[a],(q=d.children.indexOf(M))>=0&&d.children.splice(q,1);c("apply"),w=v;for(u in h)Object.prototype.hasOwnProperty.call(h,u)&&(e[u]=h[u]);var G=null;for(u in l)if(Object.prototype.hasOwnProperty.call(l,u)){d=H[u],U=l[u];var L=[];for(i=0;i<U.length;i++)M=U[i],o=d.hot._acceptedDependencies[M],L.indexOf(o)>=0||L.push(o);for(i=0;i<L.length;i++){o=L[i];try{o(U)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:u,dependencyId:U[i],error:e}),n.ignoreErrored||G||(G=e)}}}for(i=0;i<j.length;i++){var N=j[i];u=N.module,k=[u];try{f(u)}catch(e){if("function"==typeof N.errorHandler)try{N.errorHandler(e)}catch(t){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:u,error:t,orginalError:e}),n.ignoreErrored||G||(G=t),G||(G=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:u,error:e}),n.ignoreErrored||G||(G=e)}}return G?(c("fail"),Promise.reject(G)):(c("idle"),Promise.resolve(p))}function f(t){if(H[t])return H[t].exports;var n=H[t]={i:t,l:!1,exports:{},hot:i(t),parents:(x=k,k=[],x),children:[]};return e[t].call(n.exports,n,n.exports,o(t)),n.l=!0,n.exports}var h=this.webpackHotUpdate;this.webpackHotUpdate=function(e,t){d(e,t),h&&h(e,t)};var m,y,v,g=!0,w="69c18a0febc2817b0603",b={},S=!0,k=[],x=[],O=[],_="idle",E=0,C=0,j={},q={},D={},H={};f.m=e,f.c=H,f.i=function(e){return e},f.d=function(e,t,n){f.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},f.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return f.d(t,"a",t),t},f.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},f.p="",f.h=function(){return w},o("./src/app.js")(f.s="./src/app.js")}({"./src/app.js":function(e,t,n){"use strict";function r(e){return e[Math.floor(Math.random()*e.length)]}function o(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n+=1)if(e[n]!==t[n])return!1;return!0}var i=n("./src/style.scss"),c=(function(e){e&&e.__esModule?e:{default:e}}(i),document.querySelector(".game-board")),s=document.querySelector(".start"),a=document.querySelector(".round-count"),d=document.querySelector(".message"),u=document.querySelector(".strict-mode"),l={colors:["red","blue","green","yellow"],userSequence:[],targetSequence:["red","blue","green","yellow"],isStrict:!1,roundCount:0,gameSounds:{red:new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"),blue:new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"),green:new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"),yellow:new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3")},messages:{win:"You won!",lose:"You failed. Now you have to start over!",retry:"Wrong sequence. Try again",next:"You are doing great! Keep it up!"},removeFillFromCircle:function(e){document.getElementById(e).style.fill="none"},lightUpTile:function(e){var t=this,n=document.getElementById(e),r=n.childNodes[5];switch(e){case"yellow":r.style.fill="url(#yellow-radial)";break;case"red":r.style.fill="url(#red-radial)";break;case"green":r.style.fill="url(#green-radial)";break;case"blue":r.style.fill="url(#blue-radial)";break;default:r.style.fill="none"}setTimeout(function(){return t.removeFillFromCircle(r.id)},350)},playSound:function(e){this.gameSounds[e].play()},playSoundSequence:function(e){var t=this;this.removeClick(),e.forEach(function(e,n,r){setTimeout(function(){return t.playSound(e)},700*(n+1)),setTimeout(function(){return t.lightUpTile(e)},700*(n+1)),setTimeout(function(){return t.addClick()},700*r.length)})},addCount:function(e){return e+1},removeClick:function(){c.removeEventListener("click",this.playGame)},addClick:function(){c.addEventListener("click",this.playGame)},handleStrict:function(e){return e===!0},startGame:function(){this.addClick(),this.resetGame()},resetGame:function(){this.roundCount=0,this.userSequence=[],this.targetSequence=[],d.textContent="",this.isStrict=this.handleStrict(u.checked),this.nextTurn(),this.makeTurn()},nextTurn:function(){this.roundCount=this.addCount(this.roundCount),a.textContent=this.roundCount,this.targetSequence.push(r(this.colors))},makeTurn:function(e){"repeat"===e&&(d.textContent=this.messages.retry),"next"===e&&(d.textContent=this.messages.next,this.nextTurn()),this.userSequence=[],this.playSoundSequence(this.targetSequence)},handleClick:function(e){if(this.playSound(e),this.lightUpTile(e),this.userSequence.push(e),this.isMoveValid(this.userSequence,this.targetSequence)){if(this.userSequence.length===this.targetSequence.length){if(20===this.roundCount)return d.textContent=this.messages.win,void this.removeClick();this.makeTurn("next")}}else{if(this.isStrict===!0)return d.textContent=this.messages.lose,void this.removeClick();this.makeTurn("repeat")}},playGame:function(e){var t=e.target.id;l.handleClick(t)},isMoveValid:function(e,t){var n=e.length;return o(e,t.slice(0,n))===!0}};s.addEventListener("click",function(){return l.startGame()})},"./src/style.scss":function(e,t){}});