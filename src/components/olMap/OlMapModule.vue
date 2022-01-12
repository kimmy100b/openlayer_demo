<template>
  <div class="OlMapModule-main">
    <div ref="map" class="map"></div>
  </div>
</template>

<script>
import Map from "ol/Map.js";
import View from "ol/View.js";
import TileLayer from "ol/layer/Tile.js";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj.js";
import { defaults as defaultControls } from "ol/control.js";

export default {
  name: "OlMapModule",
  props: {
    center: { Type: Array },
  },
  data() {
    return {
      olMap: undefined,
    };
  },
  mounted() {
    let view = new View({
      center: fromLonLat(this.center),
      zoom: 10,
    });
    let tile = new TileLayer({
      source: new OSM(), // OpenStreetMap
    });
    this.olMap = new Map({
      target: this.$refs.map,
      controls: defaultControls({
        attribution: false,
        attributionOptions: false,
        zoom: false,
        rotate: false,
      }),
      layers: [tile],
      view: view,
    });
  },
};
</script>

<style>
.map {
  height: 400px;
  width: 100%;
}
</style>