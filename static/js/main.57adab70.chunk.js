(this.webpackJsonpproject_react=this.webpackJsonpproject_react||[]).push([[0],[,,,,function(e,t,a){e.exports={playArea:"Scene_pub_playArea__2dcgG",resolvescreen:"Scene_pub_resolvescreen__13VR9",link:"Scene_pub_link__3FU-X",pubspace:"Scene_pub_pubspace__2KMax",inebriationbox:"Scene_pub_inebriationbox__1Eakh",soundOn:"Scene_pub_soundOn__158P3",soundOff:"Scene_pub_soundOff__1iupn",alienhead:"Scene_pub_alienhead__H7r0Q",alienwisdom:"Scene_pub_alienwisdom__3Txxl",beerbottle:"Scene_pub_beerbottle__3uawp",drinkingdude:"Scene_pub_drinkingdude__1ChWB",drinkingduderesponse:"Scene_pub_drinkingduderesponse__1d4cV",dialogueArea:"Scene_pub_dialogueArea__6rlGI"}},,,,,,,,,,,,,,function(e,t,a){e.exports={mainscreen:"Intro_mainscreen__1zvlN",link:"Intro_link__1RQO9"}},,,,,function(e,t,a){e.exports={mainscreen:"Game_over_mainscreen__2D03S",link:"Game_over_link__2_FbY"}},,,function(e,t,a){e.exports={container:"Container_container__2gRg6"}},,,,function(e,t,a){e.exports=a.p+"static/media/belch.08488751.wav"},function(e,t,a){e.exports=a.p+"static/media/swallow.6c0edf12.mp3"},function(e,t,a){e.exports=a.p+"static/media/woah.09fb21c5.wav"},function(e,t,a){e.exports=a.p+"static/media/pub_ambience.76d325c0.mp3"},function(e,t,a){e.exports=a.p+"static/media/dun_dun_dun.92c3bace.wav"},function(e,t,a){e.exports=a(48)},,,,,function(e,t,a){},function(e,t,a){},,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(14),r=a.n(c),i=(a(40),a(41),a(26)),u=a.n(i),l=function(e){var t=e.children;return o.a.createElement("div",{className:u.a.container},t)},s=a(8),m=a(10),b=a(2),d=a(18),p=a.n(d),h=a(9),f=function(){var e=Object(h.b)(),t=Object(n.useState)(!1),a=Object(b.a)(t,2),c=a[0],r=a[1],i=Object(n.useState)("some random loser"),u=Object(b.a)(i,2),l=u[0],m=u[1],d=Object(n.useState)(!1),f=Object(b.a)(d,2),_=f[0],E=f[1],O=Object(n.useState)(!1),y=Object(b.a)(O,2),v=y[0],j=y[1],g=Object(n.useState)(!1),S=Object(b.a)(g,2),k=S[0],w=S[1];return o.a.createElement("div",{className:p.a.mainscreen},!c&&o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"Once upon a time in a pub..."),o.a.createElement("button",{onClick:r},"START")),c&&!_&&o.a.createElement(o.a.Fragment,null,!v&&o.a.createElement("p",null,"Please enter your character's name in the field below"),v&&o.a.createElement("p",null,"Yo, come on, type in a name. You don't want to be some random loser do you?"),o.a.createElement("input",{type:"text",placeholder:"Enter name here...",onInput:function(e){return m(e.target.value)}}),o.a.createElement("button",{onClick:function(){e({type:"CHARACTER_NAME",characterName:l}),"some random loser"===l&&!1===k?(j(!v),w(!0)):E(!0)}},v?"I don't care":"Continue...")),_&&o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"\xa0\xa0\xa0Well, ",l,", do you remember that one time when your pockets were almost empty but your thirst was mighty, and you walked into this one pub?"),o.a.createElement(s.b,{className:p.a.link,to:"/Scene_pub"},"Um... okay?")))},_=a(22),E=a.n(_),O=a(29),y=a(4),v=a.n(y),j=a(30),g=a.n(j),S=a(31),k=a.n(S),w=a(32),N=a.n(w),x=a(33),A=a.n(x),T=a(34),I=a.n(T),L=new Audio(g.a),C=new Audio(k.a),Y=new Audio(N.a),R=new Audio(A.a),M=new Audio(I.a),F=function(){var e=Object(h.b)(),t=Object(h.c)((function(e){return e.characterName})),a=Object(h.c)((function(e){return e.inebriationLevel})),c=Object(n.useState)(!1),r=Object(b.a)(c,2),i=r[0],u=r[1],l=Object(n.useState)(!1),m=Object(b.a)(l,2),d=m[0],p=m[1],f=Object(n.useState)(!1),_=Object(b.a)(f,2),y=_[0],j=_[1],g=Object(n.useState)(0),S=Object(b.a)(g,2),k=S[0],w=S[1],N=Object(n.useState)(!0),x=Object(b.a)(N,2),A=x[0],T=x[1],I=Object(n.useState)(!1),F=Object(b.a)(I,2),G=F[0],U=F[1],V=Object(n.useState)(""),D=Object(b.a)(V,2),W=D[0],B=D[1],H=Object(n.useState)(!1),X=Object(b.a)(H,2),z=X[0],q=X[1],J=Object(n.useState)(""),P=Object(b.a)(J,2),Q=P[0],K=P[1],$=Object(n.useState)(!1),Z=Object(b.a)($,2),ee=Z[0],te=Z[1],ae=Object(n.useState)(null),ne=Object(b.a)(ae,2),oe=ne[0],ce=ne[1],re=Object(n.useState)("This alien head has surprisingly deep eyes..."),ie=Object(b.a)(re,2),ue=ie[0],le=ie[1],se=Object(n.useState)("Somebody left this beer unattended? And the bottle is almost full too..."),me=Object(b.a)(se,2),be=me[0],de=me[1],pe=Object(n.useState)("This guy seems to be really into his beer."),he=Object(b.a)(pe,2),fe=he[0],_e=he[1],Ee=Object(n.useState)(0),Oe=Object(b.a)(Ee,2),ye=Oe[0],ve=Oe[1],je=Object(n.useState)(0),ge=Object(b.a)(je,2),Se=ge[0],ke=ge[1],we=Object(n.useState)(0),Ne=Object(b.a)(we,2),xe=Ne[0],Ae=Ne[1],Te=Object(n.useState)(!1),Ie=Object(b.a)(Te,2),Le=Ie[0],Ce=Ie[1],Ye=Object(n.useState)(!1),Re=Object(b.a)(Ye,2),Me=Re[0],Fe=Re[1],Ge=Object(n.useState)(!1),Ue=Object(b.a)(Ge,2),Ve=Ue[0],De=Ue[1],We=Object(n.useState)(!1),Be=Object(b.a)(We,2),He=Be[0],Xe=Be[1];Object(n.useEffect)((function(){A?R.play():R.pause(),i&&T(!1)}),[A,i]),R.addEventListener("timeupdate",(function(){R.currentTime>R.duration-2&&(R.currentTime=.1,R.play())})),Object(n.useEffect)((function(){i&&M.play()}),[i]),Object(n.useEffect)((function(){oe&&clearTimeout(oe);var e=setTimeout((function(){q(!1),ce(null)}),1900);ce(e)}),[xe]),Object(n.useEffect)((function(){Le&&setTimeout((function(){de("Sigh, it's all empty now. You drank it.")}),1700)}),[Le]),Object(n.useEffect)((function(){ee&&setTimeout((function(){_e("He's your pal now. At least for tonight.")}),1700)}),[ee]),Object(n.useEffect)((function(){d&&setTimeout((function(){u(!0),p(!1)}),1700)}),[d]);var ze=function(){Fe(!Me)},qe=function(){De(!Ve)},Je=function(){Xe(!He)},Pe=function(){T(!A)},Qe=function(){var e=Object(O.a)(E.a.mark((function e(){var t,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://inspirobot.me/api?generate=true");case 2:return t=e.sent,e.next=5,t.text();case 5:a=e.sent,B(a),U(!G);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return o.a.createElement("div",{className:v.a.playArea},i&&o.a.createElement("div",{className:v.a.resolvescreen},!ee&&!y&&o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"You have been called out to step outside, which you do..."),o.a.createElement("button",{onClick:j},"Uh-huh...")),!ee&&y&&o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"\xa0\xa0\xa0Unfortunately ",t.characterName,", you are too sober and nervous to calm this guy down, and promptly, before you even consider throwing a punch, you get your ass kicked. Disheartened you decide to go home. With a black eye and your thirst unquenched..."),o.a.createElement(s.b,{className:v.a.link,to:"/Game_over"},"Crap")),ee&&!y&&o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"You have been called out to step outside, which you do..."),o.a.createElement("button",{onClick:j},"Uh-huh...")),ee&&y&&o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"\xa0\xa0\xa0The guy seems really pissed off at first, but you have some beer in you too, and that makes you calm and confident. You start chatting, and soon you are both laughing and pretending to throw punches at each other. After realizing that you both are not so different, you return to the pub. You seem to have acquired a new best friend for this evening."),o.a.createElement("button",{onClick:function(){u(!i),ee&&y&&Pe()}},"Return to the pub"))),o.a.createElement("div",{className:v.a.pubspace},o.a.createElement("div",{className:v.a.inebriationbox},"Inebriation Level: ",a.inebriationLevel),o.a.createElement("div",{onClick:Pe,className:A?v.a.soundOn:v.a.soundOff}),G&&o.a.createElement("div",{className:v.a.alienwisdom,onClick:Qe},o.a.createElement("img",{src:W,alt:""})),o.a.createElement("div",{className:v.a.alienhead,onClick:function(){switch(ve(ye+1),ye+1){case 1:le("You keep your gaze fixed on those alien eyes and your head starts spinning...");break;case 2:le("Woah! Suddenly you feel like you gained some deep alien insight into human nature. Stare again?"),Qe(),Y.play();break;case 3:le("You have absorbed some more weird alien wisdom. Stare again?"),Qe(),Y.play(),ve(2)}},onMouseEnter:ze,onMouseLeave:ze}),o.a.createElement("div",{className:v.a.beerbottle,onMouseEnter:Je,onMouseLeave:Je,onClick:function(){switch(ke(Se+1),Se+1){case 1:e({type:"INEBRIATION_LEVEL",inebriationLevel:k}),w(1),Ce(!0),de("While nobody sees it... Bottoms up!"),C.play();break;case 2:de("Sigh, it's all empty now. You drank it.")}}}),o.a.createElement("div",{className:v.a.drinkingdude,onMouseEnter:qe,onMouseLeave:qe,onClick:function(){switch(Ae(xe+1),xe+1){case 1:q(!0),L.play(),K("Get lost, ".concat(t.characterName,"...")),_e("He seems to be annoyed by your attempts to socialize.");break;case 2:q(!0),K("Seriously, piss off mate."),_e("You're getting some angry vibes from this guy.");break;case 3:q(!0),K("You are really asking for it, aren't ya?"),_e("You wonder whether it's smart to provoke him any further.");break;case 4:q(!0),K("THAT'S IT! YOU AND ME! OUTSIDE! NOW!"),_e("Now you've done it..."),a.inebriationLevel>0&&te(!0),p(!0);break;case 5:q(!0),K("Have one on me buddy! Sorry about earlier..."),e({type:"INEBRIATION_LEVEL",inebriationLevel:k}),w(1),C.play();break;case 6:q(!0),K("You're... you're a really cool guy.. *hic*"),L.play();break;case 7:q(!0),K("I... I love you... You know?"),L.play(),Ae(5)}}}),z&&o.a.createElement("div",{className:v.a.drinkingduderesponse},Q)),o.a.createElement("div",{className:v.a.dialogueArea},Ve&&o.a.createElement("p",null,fe),He&&o.a.createElement("p",null,be),Me&&o.a.createElement("p",null,ue)))},G=a(23),U=a.n(G),V=[{isExact:!0,component:f,path:"/",label:"Intro"},{isExact:!0,component:F,path:"/Scene_pub",label:"Scene_pub"},{isExact:!0,component:function(){return o.a.createElement("div",{className:U.a.mainscreen},o.a.createElement("h1",null,"GAME OVER"),o.a.createElement(s.b,{className:U.a.link,to:"/"},"Visit the pub again?"))},path:"/Game_over",label:"Game_over"},{isExact:!0,component:function(){return o.a.createElement("div",null,o.a.createElement("h2",null,"404! This page does not exist!"))},path:"/404",label:""}];var D=function(){return o.a.createElement(s.a,null,o.a.createElement(l,null,o.a.createElement(m.d,null,V.map((function(e,t){return o.a.createElement(m.b,{key:t,path:e.path,component:function(){return o.a.createElement(e.component,null)},exact:e.isExact})})),o.a.createElement(m.a,{from:"*",to:"/404"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var W=a(13),B=a(16),H={characterName:"some random loser"},X={inebriationLevel:0},z=Object(W.b)({characterName:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHARACTER_NAME":return Object(B.a)({},e,{characterName:t.characterName});default:return e}},inebriationLevel:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INEBRIATION_LEVEL":return Object(B.a)({},e,{inebriationLevel:t.inebriationLevel+1});default:return e}}}),q=Object(W.c)(z,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());r.a.render(o.a.createElement(h.a,{store:q},o.a.createElement(o.a.StrictMode,null,o.a.createElement(D,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[35,1,2]]]);
//# sourceMappingURL=main.57adab70.chunk.js.map