import{_ as x}from"./nuxt-link.959afeec.js";import{K as E,L as T,g as f,r as v,m as R,x as $,o as g,c as b,a as t,b as a,w as c,z as I,d as l,M as N,N as P,A as w,_ as S,O as U}from"./entry.64260f61.js";const B=""+globalThis.__publicAssetsURL("assets/images/resources/logo.svg");function D(o){return E()?(T(o),!0):!1}function k(o){return typeof o=="function"?o():f(o)}const V=typeof window<"u",q=()=>{};function z(o){var e;const s=k(o);return(e=s==null?void 0:s.$el)!=null?e:s}const A=V?window:void 0;function F(...o){let e,s,n,_;if(typeof o[0]=="string"||Array.isArray(o[0])?([s,n,_]=o,e=A):[e,s,n,_]=o,!e)return q;Array.isArray(s)||(s=[s]),Array.isArray(n)||(n=[n]);const u=[],i=()=>{u.forEach(r=>r()),u.length=0},d=(r,p,h,m)=>(r.addEventListener(p,h,m),()=>r.removeEventListener(p,h,m)),L=R(()=>[z(e),k(_)],([r,p])=>{i(),r&&u.push(...s.flatMap(h=>n.map(m=>d(r,h,m,p))))},{immediate:!0,flush:"post"}),y=()=>{L(),i()};return D(y),y}function C({window:o=A}={}){if(!o)return{x:v(0),y:v(0)};const e=v(o.scrollX),s=v(o.scrollY);return F(o,"scroll",()=>{e.value=o.scrollX,s.value=o.scrollY},{capture:!1,passive:!0}),{x:e,y:s}}const M={class:"site_header__header_two_wrap"},W={class:"topbar-two"},H={class:"container"},O={class:"topbar_two_content clearfix"},X=t("div",{class:"logo-box-two float-left"},[t("a",{href:"/",class:"main-nag__logo py-3"},[t("img",{src:B,alt:""})])],-1),Y={class:"header_address_two float-left"},K={class:"clearfix list-unstyled"},j=t("div",{class:"address_icon"},[t("span",{class:"icon-farmer"})],-1),G=t("h6",null,"APP LACTIRED",-1),J=t("p",null,"infocir.linox.net.pe",-1),Q=t("div",{class:"address_icon"},[t("span",{class:"icon-meeting"})],-1),Z=t("h6",null,"Capacitaciones",-1),tt=t("p",null,"cap-infocir.linox.net.pe",-1),ot=t("div",{class:"header_btn_two float-right"},[t("a",{class:"thm-btn",href:"http://infocir.linox.net.pe/registro-cliente",target:"_blank"},"Registrarme")],-1),st={class:"main-nav__header_two clearfix"},et={class:"container"},at={class:"main-nav__header_two_content"},nt=t("div",{class:"mobile_menu_icon_two"},[t("a",{href:"#",class:"side-menu__toggler"},[t("i",{class:"fa fa-bars"})])],-1),it={class:"main-nav__main-navigation two float-left"},ct={class:"main-nav__navigation-box"},lt={class:"dropdown current"},rt={class:"dropdown"},_t={class:"main_nav_right_two float-right"},dt={class:"icon_cart_box"},ut=t("i",{class:"fas fa-globe"},null,-1),ft=t("span",{class:"icon-earth"},null,-1),pt={__name:"AppHeader",setup(o){const e=N(),{y:s}=C(),n=$(()=>s.value>70);return(_,u)=>{const i=x;return g(),b("div",M,[t("div",W,[t("div",H,[t("div",O,[X,t("div",Y,[t("ul",K,[t("li",null,[j,a(i,{to:f(e).public.appBaseURL,class:"a_item",target:"_blank"},{default:c(()=>[G,J]),_:1},8,["to"])]),t("li",null,[Q,a(i,{to:f(e).public.capBaseURL,class:"a_item",target:"_blank"},{default:c(()=>[Z,tt]),_:1},8,["to"])])])]),ot])])]),t("header",st,[t("nav",{class:I(`header-navigation stricky clearfix ${f(n)?"stricked-menu stricky-fixed":""}`)},[t("div",et,[t("div",at,[nt,t("div",it,[t("ul",ct,[t("li",lt,[a(i,{to:"/"},{default:c(()=>[l("Inicio")]),_:1})]),t("li",rt,[a(i,{to:"/plantas"},{default:c(()=>[l("Plantas")]),_:1})]),t("li",null,[a(i,{to:"/productos"},{default:c(()=>[l("Productos")]),_:1})]),t("li",null,[a(i,{to:"/nosotros"},{default:c(()=>[l("Nosotros")]),_:1})]),t("li",null,[a(i,{to:"/contactanos"},{default:c(()=>[l("Contactanos")]),_:1})])])]),t("div",_t,[t("div",dt,[a(i,{to:"/georeferencia"},{default:c(()=>[ut,ft]),_:1})])])])])],2)])])}}},ht=pt,mt=""+globalThis.__publicAssetsURL("assets/images/resources/site-footer-farm.png"),vt={class:"site-footer"},gt=t("div",{class:"site-footer_farm_image"},[t("img",{src:mt,alt:"Farm Image"})],-1),bt={class:"container"},wt={class:"row no-gutters"},yt=w('<div class="col-xl-4 col-lg-4 col-md-6"><div class="footer-widget__column footer-widget__about wow fadeInUp" data-wow-delay="100ms"><div class="footer-widget__title"><h3>Nosotros</h3></div><div class="footer-widget_about_text"><p> LACTIRED, es una plataforma de información y capacitación en producción de quesos y derivados lácteos, que busca fortalecer la cadena productiva de la leche en el Perú. </p></div><form><div class="footer_input-box"><input type="Correo" placeholder="Correo Electrónico"><button type="submit" class="button"><i class="fa fa-check"></i></button></div></form></div></div>',1),xt={class:"col-xl-2 col-lg-2 col-md-6"},$t={class:"footer-widget__column footer-widget__link wow fadeInUp","data-wow-delay":"200ms"},kt=t("div",{class:"footer-widget__title"},[t("h3",null,"Menu")],-1),At={class:"footer-widget__links-list list-unstyled"},Ct=w('<div class="col-xl-3 col-lg-3 col-md-6"><div class="footer-widget__column footer-widget__contact wow fadeInUp" data-wow-delay="400ms"><div class="footer-widget__title"><h3>Contacto</h3></div><div class="footer-widget_contact"><p>Puedes contactarnos en cualquier momento</p><a href="info@lactired.pe">info@lactired.pe</a><br><a href="tel:951208106"> 951208106 </a><div class="site-footer__social"><a href="#"><i class="fab fa-facebook-square"></i></a><a href="#"><i class="fab fa-twitter"></i></a><a href="#"><i class="fab fa-instagram"></i></a><a href="#"><i class="fab fa-dribbble"></i></a></div></div></div></div>',1),Lt=w('<div class="site-footer_bottom"><div class="container"><div class="site-footer_bottom_copyright"><p>@ 2021 LACTIRED. Todos los derechos reservados.</p></div><div class="site-footer_bottom_menu"><ul class="list-unstyled"><li><a href="#">Términos y Condiciones</a></li></ul></div></div></div>',1),Et=t("i",{class:"fa fa-angle-up"},null,-1),Tt=[Et],Rt={__name:"AppFooter",setup(o){const{x:e,y:s}=C(),n=$(()=>s.value>70),_=()=>{window.scrollTo({top:0,behavior:"smooth"})};return(u,i)=>{const d=x;return g(),b("div",null,[t("footer",vt,[gt,t("div",bt,[t("div",wt,[yt,t("div",xt,[t("div",$t,[kt,t("ul",At,[t("li",null,[a(d,{to:"/plantas"},{default:c(()=>[l("Plantas")]),_:1})]),t("li",null,[a(d,{to:"/productos"},{default:c(()=>[l("Productos")]),_:1})]),t("li",null,[a(d,{to:"/nosotros"},{default:c(()=>[l("Nosotros")]),_:1})]),t("li",null,[a(d,{to:"/contactanos"},{default:c(()=>[l("Contáctanos")]),_:1})])])])]),Ct])])]),Lt,t("div",{onClick:_,class:"scroll-to-target scroll-to-top",style:P(`display: ${f(n)?"block":"none"}`)},Tt,4)])}}},It=Rt,Nt={},Pt={class:"page-wrapper"};function St(o,e){const s=ht,n=It;return g(),b("div",Pt,[a(s),U(o.$slots,"default"),a(n)])}const Dt=S(Nt,[["render",St]]);export{Dt as default};
