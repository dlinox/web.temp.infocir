<template>
  <ClientOnly>
    <AppHeadPage
      v-if="producto"
      :title="planta?.plan_razon_social"
      subtitle="detalle"
    />

    <section v-if="producto" class="product_detail">
      <div class="container">
        <div class="row">
          <div class="col-xl-6 col-lg-6">
            <div class="product_detail_image">
              <img
                :src="
                  producto.prod_imagen_url
                    ? producto.prod_imagen_url
                    : '/assets/images/shop/product-detai_img-1l.jpg'
                "
                alt=""
              />
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="product_detail_content">
              <h2>{{ producto.prod_nombre }}</h2>

              <div class="product_detail_text">
                <p>
                  Aliquam hendrerit a augue insuscipit. Etiam aliquam massa quis
                  des mauris commodo venenatis ligula commodo leez sed blandit
                  convallis dignissim onec vel pellentesque neque.
                </p>
              </div>

              <ul class="list-unstyled category_tag_list">
                <li>Planta: {{ producto.plant_nombre }}</li>
                <li>Tipo : {{ producto.tpro_nombre }}</li>
              </ul>
              <div class="product_detail_share_box">
                <a href="#" class="thm-btn w-100 text-center px-3 py-2">
                  <i class="fab fa-whatsapp mr-2"></i> Contactarme con la planta
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section v-if="productosRelacionados" class="all_products_two">
      <div class="container">
        <div class="block-title text-center">
          <p>{{ producto.plant_nombre }}</p>
          <h3>Otros Productos de la planta</h3>
          <div class="leaf">
            <img src="/assets/images/resources/leaf.png" alt="" />
          </div>
        </div>
        <div class="all_products">
          <div class="row">
            <div
              v-for="item in productosRelacionados"
              :key="item.prod_id"
              class="col-xl-3 col-lg-3 col-md-6"
            >
              <div class="all_products_single text-center">
                <div class="all_product_item_image">
                  <img
                    :src="
                      item.prod_imagen_url
                        ? item.prod_imagen_url
                        : '/assets/images/shop/product-detai_img-1l.jpg'
                    "
                    alt=""
                  />
                  <div class="all_product_hover">
                    <div class="all_product_icon">
                      <nuxt-link :to="`/productos/${item.prod_id}`">
                        <span class="icon-show">
                          <i class="fas fa-plus"></i>
                        </span>
                      </nuxt-link>
                    </div>
                  </div>
                </div>
                <h4>{{ item.prod_nombre }}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </ClientOnly>
</template>

<script setup>
const route = useRoute();

const producto = ref(null);
const productosRelacionados = ref(null);

const init = async () => {
  let res = await fetch(
    "http://infocir.linox.net.pe/api/producto/" + route.params.producto
  );
  let json = await res.json();
  producto.value = json;

  let resP = await fetch(
    "http://infocir.linox.net.pe/api/planta/productos/" +
      producto.value.prod_plan_id
  );
  let jsonP = await resP.json();
  productosRelacionados.value = jsonP;
};

init();
</script>
