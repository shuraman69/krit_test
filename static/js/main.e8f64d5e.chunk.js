(this["webpackJsonpscratch.radio"]=this["webpackJsonpscratch.radio"]||[]).push([[0],{42:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a(1),s=a.n(i),c=a(12),o=a.n(c),r=a(7),l=a(10),d=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function p(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var j=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,48)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),n(e),i(e),s(e),c(e)}))},h=(a(42),a(4)),u=a(23),m=a(13),b="Connecting...",f=function(e){return function(t){e.map((function(e){var a=e.station;return function e(){var n=new WebSocket("wss://admin.scratch.radio/api/live/nowplaying/"+a.shortcode);n.onopen=function(){t({type:"SET_OPEN_WSS",payload:!0})},n.onmessage=function(e){var a=e.data,n=JSON.parse(a),i=n.station.id;t({type:"UPDATE_STATION",payload:{id:i,item:n}})},n.onerror=function(){t({type:"SET_ERROR",payload:b}),n.close()},n.onclose=function(){return setTimeout(e,5e3)}}()})),setInterval((function(){return t({type:"SET_TIME"})}),1e3)}},x=a(15),g=a.n(x),O=a(18),v=function(){return function(){var e=Object(O.a)(g.a.mark((function e(t){var a,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://admin.scratch.radio/api/nowplaying");case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,t({type:"SET_STATIONS",payload:n}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),t({type:"SET_ERROR",payload:b});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()},_=function(e,t,a,n,i){return!0===a.includes("live")||i?n:e?"".concat(t," (").concat(e,")"):t},C=function(e){return{type:"SET_CURRENT_STATION",payload:{id:e.id,url:e.url}}},w=function(e,t,a){var n=e.station.id,i=e.station.listen_url;a.id===n?t(C({})):t(C({id:n,url:i}))};var A=function(){var e=Object(l.b)();!function(){var e=Object(l.c)((function(e){return e.stations})),t=e.items,a=e.current;"mediaSession"in navigator&&t.forEach((function(e){if(e.station.id===a.id){var t=e.station.description,n=e.live,i=n.is_live,s=n.streamer_name,c=e.now_playing.song,o=c.artist,r=c.title,l=c.art;navigator.mediaSession.metadata=new MediaMetadata({title:_(o,r,t,s,i),artist:o,album:e.station.name,artwork:[{src:"https://via.placeholder.com/96",sizes:"96x96",type:"image/png"},{src:"https://via.placeholder.com/128",sizes:"128x128",type:"image/png"},{src:"https://via.placeholder.com/192",sizes:"192x192",type:"image/png"},{src:"https://via.placeholder.com/256",sizes:"256x256",type:"image/png"},{src:"https://via.placeholder.com/384",sizes:"384x384",type:"image/png"},{src:{art:l},sizes:"512x512",type:"image/jpg"}]})}}))}();var t=s.a.useState(!1),a=Object(m.a)(t,2),i=(a[0],a[1],Object(l.c)((function(e){return e.stations}))),c=i.items,o=i.loading,r=i.current,d=i.openWss;return s.a.useEffect((function(){o?e(v()):d||e(f(c))}),[c]),Object(n.jsx)("div",{className:"container container--offset_top container--offset_left",children:Object(n.jsx)("div",{className:"stations",children:c.map((function(t){var a=t.station,i=a.name,s=a.id,c=a.description,o=t.live,l=o.is_live,d=o.streamer_name,p=t.now_playing,j=p.elapsed,h=p.duration,u=p.song,m=u.art,b=u.artist,f=u.title,x=u.album;return("scratch.radio"!==window.location.hostname||!0!==c.includes("disable"))&&Object(n.jsx)(X,{id:s,name:i,status:c,description:_(b,f,c,d,l),isLive:l,elapsed:j,duration:h,art:m,album:x,active:s===r.id,onClick:function(){return function(t,a){" "!==t.key&&"click"!==t.type||w(a,e,r)}(event,t)}},s)}))})})};var N=function(){return Object(n.jsx)("section",{className:"container container--offset_top container--offset_left container--offset_bottom text-page",children:Object(n.jsxs)("div",{className:"text-page__item",children:[Object(n.jsx)("h1",{className:"title",children:"About"}),Object(n.jsx)("p",{className:"text text--offset_bottom",children:"This project is designed to make scratch music more accessible."}),Object(n.jsx)("span",{className:"text text--theme_gold text--size_sm",children:"Privacy statement"}),Object(n.jsx)("p",{className:"text text--offset_bottom text-page",children:"The authors of the project do not approve or call for anything, nor do they oppose or support it. All broadcast music is the property of its authors and is provided to radio listeners free of charge."}),Object(n.jsx)("span",{className:"text text--theme_gold text--size_sm",children:"Collecting user data"}),Object(n.jsx)("p",{className:"text text--offset_bottom text-page",children:"The site and mobile applications collect user data using Google Analytics. The information is collected anonymously and is used only for the purpose of improving the service."}),Object(n.jsx)("span",{className:"text text--theme_gold text--size_sm",children:"Based on"}),Object(n.jsxs)("p",{className:"text text--offset_bottom text-page",children:[Object(n.jsx)("a",{className:"link",href:"https://www.azuracast.com/",title:"Online radio project",target:"_blank",rel:"noopener noreferrer",children:"Azuracast"})," ","engine."]})]})})};var y=function(){return Object(n.jsxs)("section",{className:"container container--offset_top container--offset_left container--offset_bottom text-page",children:[Object(n.jsx)("h1",{className:"title",children:"Mobile applications"}),Object(n.jsx)("p",{className:"text",children:"Mobile applicationns are in development now."}),Object(n.jsx)("span",{className:"text text--theme_gold text--size_sm",children:"iOS"}),Object(n.jsx)("p",{className:"text",children:"If you are experiencing problems with background playback of radio stations, please try to launch the site in the Safari browser."}),Object(n.jsx)("span",{className:"text text--theme_gold text--size_sm",children:"Android"}),Object(n.jsxs)("p",{className:"text",children:["You can install the application on your home screen as a PWA by following the"," ",Object(n.jsx)("a",{className:"link",href:"https://support.google.com/chrome/answer/9658361?co=GENIE.Platform%3DAndroid&hl=en",target:"_blank",rel:"noopener noreferrer",children:"instructions"}),"."]})]})};var k=function(){return Object(n.jsxs)("section",{className:"container container--offset_top container--offset_left container--offset_bottom text-page",children:[Object(n.jsx)("h1",{className:"title",children:"Support"}),Object(n.jsx)("p",{className:"text",children:"Making a profit is not the goal of the project. However, its maintenance requires costs, including financial ones. All collected funds will be used to pay for server capacity and improve product quality. You can make a donation using the forms below."}),Object(n.jsx)("iframe",{className:"mt-30",title:"Support us",src:"https://yoomoney.ru/quickpay/shop-widget?writer=buyer&targets=&targets-hint=My%20name%20and%20my%20email&default-sum=100&button-text=14&payment-type-choice=on&hint=&successURL=https%3A%2F%2Fscratch.radio%2Fsupport%2Fthank-you-page%2F&quickpay=shop&account=4100110355156177",width:"270",height:"227",frameBorder:"0",allowtransparency:"true",scrolling:"no"})]})};var F=function(){return Object(n.jsxs)("section",{className:"container container--offset_top container--offset_left container--offset_bottom text-page",children:[Object(n.jsx)("h1",{className:"title",children:"Thank you!"}),Object(n.jsx)("p",{className:"text",children:"\u0421\u043f\u0430\u0441\u0438\u0431\u043e, Shoukran, Shnorhakalutjun, \u0414\u0437\u044f\u043a\u0443\u044e, Blagodaria, K\xf6sz\xf6n\xf6m, Dank u wel, \u03b5\u03c5\u03c7\u03b1\u03c1\u03b9\u03c3\u03c4\u03ce, \u10d3\u10d8\u10d3\u10d8 \u10db\u10d0\u10d3\u10da\u10dd\u10d1\u10d0, Tak, \u05ea\u05d5\u05d3\u05d4, Takk, Grazie, Gracias, Xie-xie, Kamsu, hamnida, Paldies, A\u010di\u016b, Danke, sch\xf6n, Tak, \u0411\u0443\u0437\u043d\u044b\u0433, Dziekuje bardzo, Obrigado/Obrigada, Mul\u0163umesc, Dakujem, Hvala, Rahmat, Rekhmet, \u0414\u044f\u043a\u0443\u044e, Kiitos, Merci beaucoups, Hvala, Dekuju, Tack, T\xe4nan, Domo arigato!"})]})};var S=function(){return Object(n.jsxs)("div",{className:"error-page text-center container container--offset_top",children:[Object(n.jsx)("h1",{className:"error-page__title color-gold",children:"404"}),Object(n.jsx)("p",{className:"error-page__desc",children:"Page not found."}),Object(n.jsxs)("p",{className:"error-page__text",children:["Return to"," ",Object(n.jsx)(r.b,{to:"/",className:"link link--theme_gold",children:"home page"})," ","or provide another link."]})]})};var H=function(e){var t=new Date(1e3*e),a=t.getUTCMinutes(),n=t.getSeconds();return a<10&&(a="0".concat(a)),n<10&&(n="0".concat(n)),"".concat(a,":").concat(n)};var T=function(e){var t=e.elapsed,a=void 0===t?0:t,i=e.duration,s=void 0===i?0:i,c=e.className,o=void 0===c?"":c;return Object(n.jsxs)("div",{className:"timer ".concat(o),children:[Object(n.jsx)("span",{className:"timer__count",children:H(a)}),"/",Object(n.jsx)("span",{className:"timer__count",children:H(s)})]})};a(47);var L=a.p+"static/media/detail_bg.b29ae789.png",E=a(19),M=a.n(E),I=function(e){var t=e.stationInfo,a=e.active,i=e.selectStation,s=Object(h.g)(),c=(t.name,t.id,t.description),o=t.art,r=t.album,l=t.duration,d=t.elapsed;return Object(n.jsxs)("div",{className:"station-info",children:[Object(n.jsx)("img",{className:"station-info__img",src:L,alt:c}),Object(n.jsx)("button",{type:"button",className:"close-button popup__close station-info__close",onClick:function(){s.push("/")},children:Object(n.jsx)("svg",{className:"close-button__icon",fill:"#fff",width:19,height:19,viewBox:"0 0 19 19",xmlns:"http://www.w3.org/2000/svg",children:Object(n.jsx)("path",{d:"M11.2407 9.50014L18.6389 2.10154C19.1204 1.6203 19.1204 0.842184 18.6389 0.360936C18.1577 -0.120312 17.3796 -0.120312 16.8983 0.360936L9.49989 7.75953L2.10167 0.360936C1.62021 -0.120312 0.842336 -0.120312 0.361098 0.360936C-0.120366 0.842184 -0.120366 1.6203 0.361098 2.10154L7.75932 9.50014L0.361098 16.8987C-0.120366 17.38 -0.120366 18.1581 0.361098 18.6393C0.600928 18.8794 0.916268 19 1.23138 19C1.5465 19 1.86161 18.8794 2.10167 18.6393L9.49989 11.2407L16.8983 18.6393C17.1384 18.8794 17.4535 19 17.7686 19C18.0837 19 18.3988 18.8794 18.6389 18.6393C19.1204 18.1581 19.1204 17.38 18.6389 16.8987L11.2407 9.50014Z"})})}),Object(n.jsxs)("div",{className:"station-info__container container container--offset_top ",children:[Object(n.jsxs)("div",{className:"description station-info__description",children:[Object(n.jsx)("h2",{className:"description-title",children:"Scratch Radio"}),Object(n.jsx)("div",{className:"description-text",children:"This can be demonstrated with the following experiment: hold a tennis racket at its handle, with its face being horizontal, and try to throw it in the air"})]}),Object(n.jsxs)("div",{className:"station station-item--current",children:[Object(n.jsx)("div",{className:"station_title",children:"Now Playing"}),Object(n.jsx)("div",{className:"station-share",children:Object(n.jsx)("img",{onClick:function(){navigator.clipboard.writeText(r).then((function(e){return alert("\u0421\u0441\u044b\u043b\u043a\u0430 \u0441\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0430 \u0432 \u0431\u0443\u0444\u0435\u0440 \u043e\u0431\u043c\u0435\u043d\u0430")}))},src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAOCAYAAAD0f5bSAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADOSURBVHgBjZLvDYJADMXvYAFHYAMdQSdxBFbQCdAJdAPdgBFwg3ODw/Dv4/meuSohgdqkKWn6o30vZ8wf0fd93nWdR3Vt226sBjRNs03TtBy16kSDAKynvVnIe58Nw8ANJ+RT+iGE83hoJRW3F8iALAFm7FMLgM+MQXMfRXLoFr8rapm7gs64CEgWRonku/J380uFrLXHEfBAybmdRiyS3CaCWaHrylNRLwKLUYsR4YowrY96HY1TYYCHiVFOfRE4/T5p1erbk20oefzJ7g0/Lcf/Jql3+gAAAABJRU5ErkJggg==",alt:"share"})}),Object(n.jsxs)("div",{className:"station-inner",children:[Object(n.jsx)("div",{children:Object(n.jsx)("img",{onClick:function(e){return i(e)},className:"station-inner__img image",src:o,alt:c})}),Object(n.jsx)("div",{children:Object(n.jsx)("img",{onClick:function(e){return i(e)},className:M()({image_active:!a,image_disable:a}),src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMjSURBVHgBxVmNdaMwDFbu3QBsUN8EaTfgJrhuUDZINgid4HIT9DpBsgG9CZJOEG4CsoEqlc/F5IdgY5LvPT0g2PIXWbaEPKEBYOZELvciv0QM7hOIYi9S4roV+SfyNplM9hSICQVAiKZyWTgELTEl9f+g+R21/4xiLfIqxNc0JpSoSME1KpEc5H36L0V20KHXjGJDlBqHaOFDskNn5hBXnYZiQBQ9wZrVGNZwiKv+OQ2BKFg4FkhoJGAGVxhrQSFwyOZ0JWBN+JO+BVlnbD/S0nB2K7IOB0v66VJDA+df0Y2BdVN17h5otGOPLQYzErZQuvUmIFyca5BhGjLygLOXbjjWXnrMKT038I48gX6baHvpsf7iyMryw2OIddFXib7A//9CzyqWtbkO520rYwBv67qEnWcbuXYcKTK2fBnOrVhSAA4J4zc3cr0MtTa2OSWduO6QUgBOEXbezTHQIGu33ILrdK+iQHQRxnuDRTnI2vjjy29yP6U68R4FkqSXIg9y+yySiRQ6q+SPUsQo4QQPo0JI53L5gUf179/slwG+i0yVsKHjz5pRAGsrabW27tfqKvc9u5ciibXwVXFg7Y1HsPkkfCskZ+47oYSDP7lDwXWytMHjT1i8D/bfqSZ8R1cAtjRNXdVv/4jkHjUK7VuqhbdQMCqE7Ixqq+r0q1XnngUVNepeCesOYWgkIHBoHqCh/1XkQYi+kT/UqO+nsyE/Ql2hecZNiSAkWFg9luOjm9nnFICO5KfgJtUctHUifeAvPVAelE+cSC9dq0ZJ5jHG2v0h2C24SeATblLKguMl8NmXOxy8KPjcB99lwpvYVj3Qvzv1wlo5Iw/wGAW9Rnf3hzE3tYDeiwQLIqpVodfAGMWlRlWIa8QG1kN1cdacaYheHOkLbmp7/WaOQ6uIEcChhchbkOahVVOHdLTCyJlxEm4iY05DwJE+1Tv0Zxz7SILbuUEU4tw+kYq+h9tBbBnKEtcv39Sjfwo/rRyivfsrQg8WNa5rddzGd3vSWdLpg0XNZQ01h5Da9jkkLw4ibIGImEKmIGSofXRrCeof0YxrO+To9gOa12/xBYa3vAAAAABJRU5ErkJggg==",alt:c})}),Object(n.jsxs)("div",{className:"station-inner__description",children:[Object(n.jsx)("div",{className:"station-inner__name",children:c}),Object(n.jsxs)("div",{className:"station-inner__d",children:[r&&Object(n.jsx)("a",{href:r,className:"station-inner__link",children:"Link to artist"}),Object(n.jsx)(T,{duration:l,elapsed:d,className:"station-item__timer station-inner_timer"})]})]})]})]})]})]})};var R=function(e){var t=Object(l.b)(),a=Object(l.c)((function(e){return e.stations})),i=a.items,c=a.loading,o=a.openWss,r=a.current,d=Object(h.h)().id,p=function(e){var t=e.station,a=t.name,n=t.id,i=t.description,s=e.live,c=s.is_live,o=s.streamer_name,r=e.now_playing,l=r.elapsed,d=r.duration,p=r.song,j=p.art,h=p.artist,u=p.title,m=p.album;return{name:a,id:n,description:_(h,u,i,o,c),art:j,album:m,is_live:c,streamer_name:o,elapsed:l,duration:d}};return s.a.useEffect((function(){c?t(v()):o||t(f(i))}),[i]),Object(n.jsx)(n.Fragment,{children:i.map((function(e){if(e.station.id===+d)return Object(n.jsx)(I,{selectStation:function(){return function(e,a){e.stopPropagation()," "!==e.key&&"click"!==e.type||w(a,t,r)}(event,e)},active:d==r.id,stationInfo:p(e)})}))})},V="/",B=[{id:1,path:"".concat(V),name:"Main",exact:!0,header:!0,"\u0421omponent":A,title:"Scratch.Radio",keywords:"This project is designed to make scratch music more accessible.",description:"This project is designed to make scratch music more accessible."},{id:2,path:"".concat(V,"about/"),name:"About",exact:!0,header:!0,"\u0421omponent":N,title:"About Scratch.Radio",keywords:"about scratch.radio, privacy statement",description:"The authors of the project do not approve or call for anything, nor do they oppose or support it."},{id:3,path:"".concat(V,"mobile-app/"),name:"",exact:!0,header:!0,"\u0421omponent":y,title:"Mobile App",keywords:"scratch.radio application",description:"Mobile application description"},{id:4,path:"".concat(V,"support/"),name:"",exact:!0,header:!0,"\u0421omponent":k,title:"Support project",keywords:"support scratch.radio, donate",description:"Donate to scratch.radio project"},{id:5,path:"".concat(V,"support/thank-you-page/"),name:"",exact:!0,header:!0,"\u0421omponent":F,title:"Thank you page",keywords:"support scratch.radio, donate, thank you",description:"Donate to scratch.radio project, thank you"},{id:7,path:"".concat(V,"station/:id"),name:"",exact:!0,header:!0,"\u0421omponent":R,title:"About Scratch.Radio",keywords:"about scratch.radio, privacy statement",description:"The authors of the project do not approve or call for anything, nor do they oppose or support it."},{id:6,path:"*",name:"",exact:!0,header:!1,"\u0421omponent":S,title:"404 Page not found",keywords:"",description:""}];var W=function(){return Object(n.jsxs)("div",{className:"contacts",children:[Object(n.jsx)("span",{className:"contacts__title",children:"Contact us"}),Object(n.jsx)("a",{href:"mailto:listen@scratch.radio",className:"link link--theme_gray contacts__link",children:"listen@scratch.radio"})]})},D=a.p+"static/media/app-store.00f22e23.svg",U=a.p+"static/media/google-play.e95a0008.svg";var Y=function(e){var t=e.closeMenu,a=void 0===t?function(e){return e}:t;return Object(n.jsxs)("div",{className:"download",children:[Object(n.jsx)("span",{className:"download__title",children:"Download mobile app"}),Object(n.jsxs)("div",{className:"download__list",children:[Object(n.jsx)(r.b,{to:"/mobile-app/",className:"download__link",onClick:a,children:Object(n.jsx)("img",{src:D,alt:"App Store",className:"download__image"})}),Object(n.jsx)(r.b,{to:"/mobile-app/",className:"download__link",onClick:a,children:Object(n.jsx)("img",{src:U,alt:"Google Play",className:"download__image"})})]})]})};var Z=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("svg",{width:54,height:33,viewBox:"0 0 54 33",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(n.jsx)("path",{d:"M10.3862 3.11263C10.3279 3.11263 10.2697 3.05389 10.2697 2.99515C10.1532 2.52521 9.92025 2.11402 9.39608 2.11402H2.93128C2.4071 2.11402 2.1159 2.6427 2.1159 3.05389C2.1159 3.52383 2.4071 4.05251 2.93128 4.05251H9.39608C10.8521 4.05251 11.9587 5.22735 11.9587 6.51967C11.9587 7.87074 10.9686 9.22181 9.39608 9.22181H2.93128C1.47524 9.22181 0.426894 8.10571 0.368652 6.75464C0.368652 6.6959 0.426894 6.63716 0.485135 6.63716H1.94117C1.99941 6.63716 2.05765 6.6959 2.05765 6.75464C2.05765 7.16584 2.34886 7.63577 2.93128 7.63577H9.39608C9.92025 7.63577 10.2697 7.16584 10.2697 6.63716C10.2697 6.10848 9.92025 5.63854 9.39608 5.63854H2.93128C1.53348 5.63854 0.368652 4.4637 0.368652 3.11263C0.368652 1.76156 1.53348 0.469238 2.93128 0.469238H9.39608C10.7356 0.469238 11.9005 1.58534 11.9587 2.93641C11.9587 2.99515 11.9005 3.05389 11.8422 3.05389H10.3862V3.11263Z",fill:"#F4F7FF"}),Object(n.jsx)("path",{d:"M23.8401 5.69729C23.9566 5.69729 24.0149 5.75603 23.9566 5.81477C23.2577 8.04697 21.2193 9.16307 18.3654 9.16307H18.1325C15.2786 9.10433 12.716 7.98823 12.4248 5.22735C12.4248 5.10986 12.4248 4.99238 12.4248 4.81615C12.4248 4.63993 12.4248 4.52244 12.4248 4.40496C12.6578 1.64408 15.2786 0.52798 18.1325 0.469238H18.3654C21.2193 0.469238 23.1995 1.64408 23.9566 3.81754C23.9566 3.87628 23.9566 3.93502 23.8401 3.93502H22.2676C22.2094 3.93502 22.1511 3.87628 22.0929 3.81754C21.394 2.6427 20.2292 2.05527 18.3072 2.05527H18.0742C16.327 2.05527 14.1138 2.81892 14.1138 4.81615C14.1138 6.75464 16.327 7.51829 18.0742 7.57703H18.3072C20.2292 7.57703 21.4522 7.04835 22.0929 5.81477C22.1511 5.75603 22.1511 5.69729 22.2676 5.69729H23.8401Z",fill:"#F4F7FF"}),Object(n.jsx)("path",{d:"M34.4399 9.22166C34.3817 9.22166 34.3234 9.16292 34.2652 9.10418L32.8674 5.69714L26.5191 6.28456V9.04544C26.5191 9.10418 26.4608 9.16292 26.4026 9.16292H24.9466C24.8883 9.16292 24.8301 9.10418 24.8301 9.04544V0.645316C24.8301 0.586574 24.8883 0.527832 24.9466 0.527832H33.6245C35.0806 0.527832 36.1872 1.70267 36.1872 3.11248C36.1872 4.16984 35.5465 5.10972 34.6146 5.52091L36.1289 9.04544C36.1872 9.16292 36.1289 9.22166 36.0124 9.22166H34.4399ZM33.6245 2.11387H26.5191V4.69852L33.6245 4.1111C34.1487 4.1111 34.4982 3.58242 34.4982 3.11248C34.4982 2.64255 34.1487 2.11387 33.6245 2.11387Z",fill:"#F4F7FF"}),Object(n.jsx)("path",{d:"M11.8423 11.9827C11.9005 11.9827 11.9588 12.0414 11.9588 12.1001V13.4512C11.9588 13.51 11.9005 13.5687 11.8423 13.5687H6.94999V20.559C6.94999 20.6178 6.89175 20.6765 6.83351 20.6765H5.31923C5.26099 20.6765 5.20275 20.6178 5.20275 20.559V13.5687H0.252225C0.193984 13.5687 0.135742 13.51 0.135742 13.4512V12.1001C0.135742 12.0414 0.193984 11.9827 0.252225 11.9827H11.8423Z",fill:"#F4F7FF"}),Object(n.jsx)("path",{d:"M23.7237 17.2107C23.8402 17.2107 23.8984 17.2695 23.8402 17.3282C23.1413 19.5604 21.1028 20.6765 18.249 20.6765H18.016C15.1622 20.6178 12.5996 19.5017 12.3083 16.7408C12.3083 16.6233 12.3083 16.5058 12.3083 16.3296C12.3083 16.1534 12.3083 16.0359 12.3083 15.9184C12.5413 13.1575 15.1622 11.9827 18.016 11.9827H18.249C21.1028 11.9827 23.083 13.1575 23.8402 15.331C23.8402 15.3897 23.8402 15.4485 23.7237 15.4485H22.1512C22.0929 15.4485 22.0347 15.3897 21.9764 15.331C21.2775 14.1561 20.1127 13.5687 18.1907 13.5687H17.9578C16.2105 13.5687 13.9974 14.3324 13.9974 16.3296C13.9974 18.2681 16.2105 19.0317 17.9578 19.0905H18.1907C20.1127 19.0905 21.3358 18.5618 21.9764 17.3282C22.0347 17.2695 22.0347 17.2107 22.1512 17.2107H23.7237Z",fill:"#F4F7FF"}),Object(n.jsx)("path",{d:"M34.1488 20.6765C34.0906 20.6765 34.0324 20.6178 34.0324 20.559V17.152L26.461 18.0331V20.6178C26.461 20.6765 26.4027 20.7352 26.3445 20.7352H24.8885C24.8302 20.7352 24.772 20.6765 24.772 20.6178V12.1001C24.772 12.0414 24.8302 11.9827 24.8885 11.9827H26.3445C26.4027 11.9827 26.461 12.0414 26.461 12.1001V16.3883L34.0324 15.5072V12.1001C34.0324 12.0414 34.0906 11.9827 34.1488 11.9827H35.6049C35.6631 11.9827 35.7214 12.0414 35.7214 12.1001V20.559C35.7214 20.6178 35.6631 20.6765 35.6049 20.6765H34.1488Z",fill:"#F4F7FF"}),Object(n.jsx)("path",{d:"M38.7496 20.6766C38.2837 20.6766 37.876 20.2654 37.876 19.7954C37.876 19.3255 38.2837 18.9143 38.7496 18.9143C39.2155 18.9143 39.6232 19.3255 39.6232 19.7954C39.6232 20.3241 39.2155 20.6766 38.7496 20.6766Z",fill:"#F4F7FF"}),Object(n.jsx)("path",{d:"M10.2696 32.425C10.2114 32.425 10.1532 32.3663 10.0949 32.3075L8.69712 28.9005L2.34881 29.6642V32.3075C2.34881 32.3663 2.29056 32.425 2.23232 32.425H0.718045C0.659804 32.425 0.601562 32.3663 0.601562 32.3075V23.8487C0.601562 23.7899 0.659804 23.7312 0.718045 23.7312H9.45426C10.9103 23.7312 12.0169 24.906 12.0169 26.3159C12.0169 27.3732 11.3762 28.3131 10.4444 28.7243L11.9586 32.2488C12.0169 32.3663 11.9586 32.425 11.8422 32.425H10.2696ZM9.45426 25.2585H2.34881V28.0194L9.45426 27.3145C9.97843 27.3145 10.3279 26.7858 10.3279 26.3159C10.3279 25.7872 9.97843 25.2585 9.45426 25.2585Z",fill:"#F4F7FF"}),Object(n.jsx)("path",{d:"M24.1313 32.2488C24.1895 32.3075 24.1313 32.425 24.0148 32.425H22.384C22.3258 32.425 22.2675 32.425 22.2093 32.3663L21.2774 30.6628L14.8709 31.1327L14.2302 32.3075C14.172 32.3663 14.172 32.3663 14.0555 32.3663H12.4247C12.3082 32.3663 12.25 32.3075 12.3082 32.1901L17.0258 23.7899C17.084 23.7312 17.084 23.7312 17.2005 23.7312H19.239C19.2972 23.7312 19.3555 23.7312 19.4137 23.7899L24.1313 32.2488ZM18.2489 25.141L15.8027 29.5467L20.4621 29.0767L18.2489 25.141Z",fill:"#F4F7FF"}),Object(n.jsx)("path",{d:"M36.0709 28.9005C36.0709 30.839 34.4984 32.3663 32.6346 32.3663H25.0633C25.005 32.3663 24.9468 32.3075 24.9468 32.2488V23.8487C24.9468 23.7899 25.005 23.7312 25.0633 23.7312H32.5764C34.4984 23.7312 36.0126 25.3172 36.0126 27.197V28.9005H36.0709ZM34.3236 27.197C34.3236 26.2571 33.5665 25.3172 32.5764 25.3172H26.694V30.839H32.6346C33.6247 30.839 34.3819 29.8991 34.3819 28.9592V27.197H34.3236Z",fill:"#F4F7FF"}),Object(n.jsx)("path",{d:"M39.4485 32.3075H38.0507C37.9342 32.3075 37.876 32.2487 37.876 32.19V23.7898C37.876 23.7311 37.9342 23.6724 38.0507 23.6724H39.4485C39.565 23.6724 39.6232 23.7311 39.6232 23.7898V32.19C39.6232 32.2487 39.565 32.3075 39.4485 32.3075Z",fill:"#F4F7FF"}),Object(n.jsx)("path",{d:"M53.1358 28.078C53.1358 28.1955 53.1358 28.2542 53.1358 28.3717C52.9611 31.3088 50.3402 32.4249 47.4282 32.4837H47.1952C44.2831 32.4249 41.6623 31.3088 41.4875 28.3717C41.4875 28.313 41.4875 28.1955 41.4875 28.078C41.4875 27.9605 41.4875 27.9018 41.4875 27.7843C41.6623 24.8472 44.2831 23.7311 47.1952 23.6724H47.4282C50.3402 23.7311 52.9611 24.8472 53.1358 27.7843C53.1358 27.8431 53.1358 27.9605 53.1358 28.078ZM47.4282 30.7802C49.1754 30.7802 51.3886 30.0165 51.3886 28.0193C51.3886 26.0808 49.1754 25.3171 47.4282 25.2584H47.1952C45.448 25.2584 43.2348 26.022 43.2348 28.0193C43.2348 29.9578 45.448 30.7214 47.1952 30.7802H47.4282Z",fill:"#F4F7FF"}),Object(n.jsx)("path",{d:"M51.539 8.81409L46.9086 0.583551C46.8514 0.526395 46.8514 0.469238 46.7371 0.469238L40.506 1.89815H45.7653L46.5656 3.32707L38.1622 4.75598H47.3659L48.1662 6.18489L37.4191 7.72812V7.78528L36.7902 8.87125C36.7331 8.92841 36.7902 9.04272 36.9046 9.04272H38.5052C38.5624 9.04272 38.6196 9.04272 38.6767 8.98556L38.8482 8.64262L49.0809 7.84243L49.7097 8.98556C49.7669 9.04272 49.7669 9.04272 49.8812 9.04272H51.4818C51.5962 8.98556 51.5962 8.87125 51.539 8.81409Z",fill:"#F4F7FF"})]})})};var Q=function(e){var t=e.closeMenu,a=void 0===t?function(e){return e}:t;return Object(n.jsx)("ul",{className:"header-menu__list",children:B.map((function(e){return Object(n.jsx)(i.Fragment,{children:e.name&&Object(n.jsx)("li",{className:"header-menu__item",children:Object(n.jsx)(r.c,{to:e.path,className:"link header-menu__link",activeClassName:"active",exact:!0,onClick:a,children:e.name})})},e.id)}))})};var P=function(){var e=s.a.useState(!1),t=Object(m.a)(e,2),a=t[0],i=t[1],c=function(){i(!a)},o=function(){i(!1)};return Object(n.jsxs)("header",{className:a?"header hidden":"header",children:[Object(n.jsxs)("div",{className:"header__container container",children:[Object(n.jsx)(r.b,{to:V,className:"header__logo logo",children:Object(n.jsx)(Z,{})}),Object(n.jsx)("button",{type:"button",className:"header__button",onClick:c,children:Object(n.jsxs)("svg",{width:20,height:5,viewBox:"0 0 20 5",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(n.jsx)("circle",{cx:"2.71271",cy:"2.39142",r:"2.08527",fill:"#F4F7FF"}),Object(n.jsx)("circle",{cx:"10.2708",cy:"2.39142",r:"2.08527",fill:"#F4F7FF"}),Object(n.jsx)("circle",{cx:"17.8289",cy:"2.39142",r:"2.08527",fill:"#F4F7FF"})]})})]}),Object(n.jsx)("nav",{className:a?"header-menu visible":"header-menu",children:Object(n.jsxs)("div",{className:"header-menu__container container",children:[Object(n.jsx)("button",{type:"button",className:"header-menu__button",onClick:c,children:Object(n.jsxs)("svg",{width:14,height:14,viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(n.jsx)("path",{d:"M12.6094 13.0625L6.82815 6.88323L12.6094 0.89285",stroke:"#E7ECFF",strokeWidth:2}),Object(n.jsx)("path",{d:"M1.04688 0.892578L6.8281 7.07185L1.04688 13.0622",stroke:"#E7ECFF",strokeWidth:2})]})}),Object(n.jsx)(Q,{closeMenu:o}),Object(n.jsxs)("div",{className:"header-menu__bottom",children:[Object(n.jsx)(W,{}),Object(n.jsxs)("div",{className:"header-menu__contains",children:[Object(n.jsx)(Y,{closeMenu:o}),Object(n.jsx)(r.b,{to:V,onClick:o,className:"header-menu__logo logo logo--gray",children:Object(n.jsx)(Z,{})})]})]})]})})]})};var X=function(e){var t=e.active,a=void 0===t?null:t,i=e.onClick,c=void 0===i?function(e){return e}:i,o=e.id,r=void 0===o?null:o,l=e.name,d=void 0===l?"":l,p=e.description,j=void 0===p?"":p,u=e.status,b=void 0===u?"":u,f=e.isLive,x=void 0!==f&&f,g=e.elapsed,O=void 0===g?0:g,v=e.duration,_=void 0===v?0:v,C=e.art,w=void 0===C?"":C,A=(e.album,Object(h.g)()),N=s.a.useState(!1),y=Object(m.a)(N,2),k=(y[0],y[1],!0===b.includes("disable")||!0===b.includes("live")&&!x);return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{role:"button",tabIndex:k?"-1":"0",onKeyDown:function(e){return c(e)},onClick:function(e){return c(e)},className:M()({"station-item":!0,"station-item--current":a&&!k,"station-item--disable":k}),children:[Object(n.jsxs)("div",{className:"station-item__statuses",children:[x&&Object(n.jsx)("span",{className:"status station-item__status",children:"live"}),Object(n.jsx)("button",{type:"button",className:"status status--more",onClick:function(e){return function(e){e.stopPropagation(),A.push("station/".concat(r))}(e)},children:"info"})]}),Object(n.jsxs)("div",{className:"station-item__container",children:[Object(n.jsx)("figure",{className:"station-item__figure",children:Object(n.jsx)("img",{src:w,alt:j,className:"station-item__image"})}),Object(n.jsxs)("div",{className:"station-item__contains",children:[Object(n.jsx)("span",{className:"station-item__name",children:d}),Object(n.jsxs)("div",{className:"station-item__description-block",children:[Object(n.jsx)("span",{className:"station-item__description",children:j}),"live"!==b&&!x&&Object(n.jsx)(T,{duration:_,elapsed:O,className:"station-item__timer"})]})]})]})]})})};var K=function(){return Object(n.jsx)("div",{className:"update text-center",children:Object(n.jsxs)("div",{className:"update__inner",children:[Object(n.jsx)("span",{className:"update__title",children:"Congratulations, new version is available!"}),Object(n.jsx)("p",{className:"update__desc",children:"We are updating the app..."}),Object(n.jsx)("div",{className:"update-bar axis-x-center",children:Object(n.jsx)("div",{className:"update-bar__line"})})]})})};var z=function(){var e=Object(l.c)((function(e){return e.stations})).errorMessage;return Object(n.jsx)(u.b,{children:Object(n.jsx)("div",{className:"main-wrapper",children:Object(n.jsxs)("div",{className:"content",children:[e&&Object(n.jsx)("div",{className:"alert",children:Object(n.jsx)("span",{className:"alert__description",children:e})}),Object(n.jsx)(h.d,{children:B.map((function(e){return Object(n.jsxs)(h.b,{path:e.path,exact:!0,children:[Object(n.jsxs)(u.a,{children:[Object(n.jsx)("meta",{name:"keywords",content:e.keywords}),Object(n.jsx)("meta",{name:"description",content:e.description}),Object(n.jsx)("title",{children:e.title}),Object(n.jsx)("meta",{property:"og:title",content:e.title}),Object(n.jsx)("meta",{property:"og:description",content:e.description}),Object(n.jsx)("meta",{property:"og:url",content:e.path})]}),e.title.includes("404")&&Object(n.jsx)(h.a,{to:"/404"}),e.header&&Object(n.jsx)(P,{}),Object(n.jsx)(e.\u0421omponent,{})]},e.id)}))})]})})})},G=a(14),J=a(31),q=a(8),$=new Audio,ee={loading:!0,current:{id:null,url:null,data:{}},items:[],openWss:!1,errorMessage:!1},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_STATIONS":return Object(q.a)(Object(q.a)({},e),{},{items:t.payload,loading:!1});case"SET_CURRENT_STATION":return $.pause(),$.src=t.payload.url,t.payload.url&&($.load(),$.addEventListener("canplay",(function(){$.play()}))),Object(q.a)(Object(q.a)({},e),{},{current:t.payload});case"UPDATE_STATION":var a=e.items.findIndex((function(e){return e.station.id===t.payload.id})),n=e.items;return n[a]=t.payload.item,Object(q.a)(Object(q.a)({},e),{},{items:n,errorMessage:!1});case"SET_TIME":var i=e.items;return e.errorMessage||i.map((function(e){var t=e;return t.now_playing.remaining-=1,t.now_playing.elapsed+=1,!1})),Object(q.a)(Object(q.a)({},e),{},{items:i});case"SET_ERROR":return Object(q.a)(Object(q.a)({},e),{},{errorMessage:t.payload});case"SET_LOADING":return Object(q.a)(Object(q.a)({},e),{},{loading:!1});case"SET_OPEN_WSS":return Object(q.a)(Object(q.a)({},e),{},{openWss:!0});default:return e}},ae=Object(G.c)({stations:te}),ne=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||G.d,ie=Object(G.e)(ae,ne(Object(G.a)(J.a)));window.store=ie;var se=ie;(0,o.a.hydrate)(Object(n.jsx)(r.a,{children:Object(n.jsx)(l.a,{store:se,children:Object(n.jsx)(z,{})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/krit_test",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/krit_test","/service-worker.js");d?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):p(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):p(t,e)}))}}({onUpdate:function(e){o.a.render(Object(n.jsx)(K,{}),document.getElementById("root")),e&&e.waiting&&e.waiting.postMessage({type:"SKIP_WAITING"}),setTimeout((function(){window.location.reload()}),2500)}}),j()}},[[45,1,2]]]);
//# sourceMappingURL=main.e8f64d5e.chunk.js.map