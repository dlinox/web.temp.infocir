<template>
  <div v-if="tiposProductos" class="categories-box">
    <div class="title">
      <h3>Tipo de productos</h3>
    </div>
    <ul class="categories clearfix ">
      <li v-for="item in tiposProductos" :key="item.tpro_id">
        <a href="#" class="text-uppercase"> {{ item.tpro_nombre }} </a>
      </li>
    </ul>
  </div>
</template>
<script setup>
const tiposProductos = ref(null);
const init = async () => {
  let res = await fetch(
    "http://infocir.linox.net.pe/api/tipo-productos"
  );
  let json = await res.json();
  tiposProductos.value = json;
};
init();
</script>
