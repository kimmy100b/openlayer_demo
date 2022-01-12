<template>
  <div>
    <ol-map-module ref="map" :center="center"></ol-map-module>
  </div>
</template>

<script>
import OlMapModule from "@/components/olMap/OlMapModule.vue";

export default {
  components: {
    "ol-map-module": OlMapModule,
  },
  data() {
    return {
      center: [127, 37],
    };
  },
};
</script>

<style>
</style>