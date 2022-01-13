<template>
  <div class="olMap-main">
    <div class="olMap-navi">
      <div class="olMap-navi-item">
        {{ $t("OLMAP.SATELLITE_BTN") }}
        <el-switch v-model="satellite.isShow" @change="showSatellite"></el-switch>
      </div>
      <div class="olMap-navi-item">
        {{ $t("OLMAP.DRAW_TYPE") }}
        <el-select 
          v-model="value"
          placeholder="Select" 
          size="small"
          :no-data-text="$t('GOLOBAL.SELECT.NO_DATA')"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
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
      options: [{
        value: 'point',
        label: 'Point'
      }, {
        value: 'lineString',
        label: 'LineString'
      }, {
        value: 'polygon',
        label: 'Polygon'
      }, {
        value: 'circle',
        label: 'Circle'
      }, {
        value: 'none',
        label: 'None'
      }],
      value: '',
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

<style lang="scss">
.olMap-main {
  width: 100%;
  height: 100%;
}


.olMap-navi-item {
  width: 100px;
  height: 100px;
  // border: 1px solid $color-primary-blue;
}

.olMap-map {
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0.8; 
}
</style>