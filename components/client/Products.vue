<template>
  <div class="all_products">
    <div v-if="productos" class="row">
      <div
        v-for="item in productos"
        :key="item.prod_id"
        class="col-xl-4 col-lg-4 col-md-6"
      >
        <div class="all_products_single text-center">
          <div class="all_product_item_image">
            <img
              :src="
                item.prod_imagen_url
                  ? item.prod_imagen_url
                  : '/assets/images/shop/shop_product_1.jpg'
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
          <h4>
            <nuxt-link :to="`/productos/${item.prod_id}`">
              {{ item.prod_nombre }}
            </nuxt-link>
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const productos = ref(null);
const init = async () => {
  let res = await fetch("http://infocir.linox.net.pe/api/productos");
  let json = await res.json();
  productos.value = json;
};
init();
</script>
