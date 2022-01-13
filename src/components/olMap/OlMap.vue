<template>
  <div class="olMap-main">
    <div>
      {{ $t("OLMAP.SATELLITE_BTN") }}
      <el-switch v-model="satellite.isShow" @change="showSatellite"></el-switch>
    </div>
    <div class="olMap-map">
      <ol-map-module ref="mapModule" :center="center" :tile="tile" :satellite="satellite"></ol-map-module>
    </div>
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
      center: [126.97650254117013, 37.5717429965491],
      satellite: {
        isShow: false,
        url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      },
      tile: {
        size: [400, 400]
      }
    };
  },
  methods: {
    showSatellite() {
      this.$refs.mapModule.showSatellite(this.satellite.isShow);
    }
  }
};
</script>

<style>
.olMap-main {
  width: 100%;
  height: 100%;
}

.olMap-map {
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0.8; 
}
</style>