<template>
  <div style="height: 100%; min-height: 500px; z-index: 1">
    <LMap ref="map" :zoom="zoom" :center="latLng" style="z-index: 2">
      <LTileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&amp;copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        layer-type="base"
        name="OpenStreetMap"
      />

      <l-marker :lat-lng="latLng">
        <l-icon
          icon-url="/assets/images/icons-map/home.png"
          :icon-size="[40, 40]"
        />
      </l-marker>
    </LMap>
  </div>
</template>
<script setup>
const zoom = ref(6);
defineProps({
  latLng: Array,
});
</script>
