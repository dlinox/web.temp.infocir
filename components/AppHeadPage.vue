<template>
    <section class="page-header" style="background-image: url(/assets/images/planta/header.jpg);">
    <div class="container">
      <h2>{{ title }}</h2>
      <ul class="thm-breadcrumb list-unstyled">
        <li><nuxt-link to="/">Inicio</nuxt-link></li>
        <li><span>{{ subtitle ? subtitle : title }}</span></li>
      </ul>
    </div>
  </section>
</template>
<script setup>

defineProps({
  title: String,
  subtitle: String
});

</script>