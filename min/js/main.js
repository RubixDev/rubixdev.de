function copyText(e){const t=document.createElement("textarea");t.innerHTML=e,document.body.appendChild(t),t.select(),t.setSelectionRange(0,99999),document.execCommand("copy"),document.body.removeChild(t)}function _addNavbarListItem(e,t,n){const d=document.createElement("li"),a=document.createElement("a");a.setAttribute("href",t),a.innerHTML=n,d.appendChild(a),e.appendChild(d)}function addNavbarListItem(e,t,n,d){(window.location.href.includes("src")||window.location.href.includes("min")||window.location.href.includes("github.io"))&&(t=`/${window.location.pathname.split("/")[1]}${t}`),_addNavbarListItem(e,t,`<i class="${n}"></i><span style="vertical-align: middle;">${d}</span>`)}function addLoadEvent(e){const t=window.onload;"function"!=typeof window.onload?window.onload=e:window.onload=function(){t&&t(void 0),e()}}addLoadEvent((function(){let e=document.getElementsByTagName("nav");if(!e)return;e=e[0];const t=document.createElement("input");t.setAttribute("type","checkbox"),t.setAttribute("id","nav-checkbox"),e.appendChild(t);const n=document.createElement("div");n.setAttribute("id","navbar-list");const d=document.createElement("ul");addNavbarListItem(d,"/","fas fa-home","Home"),addNavbarListItem(d,"/creations","fas fa-code","Creations"),addNavbarListItem(d,"/videos","fas fa-film","Videos"),n.appendChild(d),e.appendChild(n);const a=document.createElement("label");a.setAttribute("for","nav-checkbox");const o=document.createElement("div");o.setAttribute("id","hamburger-content");const i=document.createElement("div");i.setAttribute("id","hamburger-middle"),o.appendChild(i),a.appendChild(o),e.appendChild(a)}));