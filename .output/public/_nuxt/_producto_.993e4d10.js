import{_ as x}from"./AppHeadPage.24e71277.js";import{_ as b}from"./nuxt-link.959afeec.js";import{_ as w}from"./client-only.b5839762.js";import{B as y,r as m,f as h,w as g,o as e,g as o,i as _,c as n,a as t,t as l,F as k,h as j,d as P,b as q}from"./entry.64260f61.js";import{_ as B}from"./leaf.de1c0cde.js";const C={key:1,class:"product_detail"},N={class:"container"},V={class:"row"},z={class:"col-xl-6 col-lg-6"},A={class:"product_detail_image"},E=["src"],F={class:"col-xl-6 col-lg-6"},O={class:"product_detail_content"},R=t("div",{class:"product_detail_text"},[t("p",null," Aliquam hendrerit a augue insuscipit. Etiam aliquam massa quis des mauris commodo venenatis ligula commodo leez sed blandit convallis dignissim onec vel pellentesque neque. ")],-1),T={class:"list-unstyled category_tag_list"},$=t("div",{class:"product_detail_share_box"},[t("a",{href:"#",class:"thm-btn w-100 text-center px-3 py-2"},[t("i",{class:"fab fa-whatsapp mr-2"}),P(" Contactarme con la planta ")])],-1),D={key:2,class:"all_products_two"},H={class:"container"},L={class:"block-title text-center"},S=t("h3",null,"Otros Productos de la planta",-1),G=t("div",{class:"leaf"},[t("img",{src:B,alt:""})],-1),I={class:"all_products"},J={class:"row"},K={class:"all_products_single text-center"},M={class:"all_product_item_image"},Q=["src"],U={class:"all_product_hover"},W={class:"all_product_icon"},X=t("span",{class:"icon-show"},[t("i",{class:"fas fa-plus"})],-1),lt={__name:"[producto]",setup(Y){const v=y(),s=m(null),c=m(null);return(async()=>{let d=await(await fetch("http://infocir.linox.net.pe/api/producto/"+v.params.producto)).json();s.value=d;let i=await(await fetch("http://infocir.linox.net.pe/api/planta/productos/"+s.value.prod_plan_id)).json();c.value=i})(),(r,d)=>{const p=x,i=b,f=w;return e(),h(f,null,{default:g(()=>{var u;return[o(s)?(e(),h(p,{key:0,title:(u=r.planta)==null?void 0:u.plan_razon_social,subtitle:"detalle"},null,8,["title"])):_("",!0),o(s)?(e(),n("section",C,[t("div",N,[t("div",V,[t("div",z,[t("div",A,[t("img",{src:o(s).prod_imagen_url?o(s).prod_imagen_url:"/assets/images/shop/product-detai_img-1l.jpg",alt:""},null,8,E)])]),t("div",F,[t("div",O,[t("h2",null,l(o(s).prod_nombre),1),R,t("ul",T,[t("li",null,"Planta: "+l(o(s).plant_nombre),1),t("li",null,"Tipo : "+l(o(s).tpro_nombre),1)]),$])])])])])):_("",!0),o(c)?(e(),n("section",D,[t("div",H,[t("div",L,[t("p",null,l(o(s).plant_nombre),1),S,G]),t("div",I,[t("div",J,[(e(!0),n(k,null,j(o(c),a=>(e(),n("div",{key:a.prod_id,class:"col-xl-3 col-lg-3 col-md-6"},[t("div",K,[t("div",M,[t("img",{src:a.prod_imagen_url?a.prod_imagen_url:"/assets/images/shop/product-detai_img-1l.jpg",alt:""},null,8,Q),t("div",U,[t("div",W,[q(i,{to:`/productos/${a.prod_id}`},{default:g(()=>[X]),_:2},1032,["to"])])])]),t("h4",null,l(a.prod_nombre),1)])]))),128))])])])])):_("",!0)]}),_:1})}}};export{lt as default};
