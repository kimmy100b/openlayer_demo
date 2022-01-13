<template>
  <div ref="map" class="olMapModule-main">
  </div>
</template>

<script>
import Map from "ol/Map.js";
import View from "ol/View.js";
import TileLayer from "ol/layer/Tile.js";
import OSM from "ol/source/OSM";
import XYZ from "ol/source/XYZ";
import { fromLonLat } from "ol/proj.js";
import { defaults as defaultControls } from "ol/control.js";
import 'ol/ol.css';

export default {
  name: "OlMapModule",
  props: {
    center: { Type: Array },
    tile: { Type : Object },
    satellite: { Type : Object },
  },
  data() {
    return { 
      map: null,
      tileLayer: null // removeLayer 시에는 tileLayer가 무엇인지 알아야함
    };
  },
  mounted() {
    let view = new View({
      center: fromLonLat(this.center),
      zoom: 10,
    });
    this.tileLayer = this.getTileLayer(this.satellite.isShow);
    this.map = new Map({
      target: this.$refs.map,
      controls: defaultControls({
        attribution: false,
        attributionOptions: false,
        zoom: false,
        rotate: false,
      }),
      layers: [this.tileLayer],
      view: view,
    });
  },
  methods: {
    getTileLayer(isSatellite) {
      return  new TileLayer({
        source: isSatellite ? new XYZ({ // 위성
          tileSize: this.tile.size,
          url: this.satellite.url
        }) : new OSM() // OpenStreetMap
      });
    },
    showSatellite(isSatellite) {
      this.tileLayer = this.getTileLayer(isSatellite);
      this.map.addLayer(this.tileLayer);
    },
    // refresh() {
    //   this.$map.updateSize();
    //   this.$map.getLayers().forEach(layer => {
    //       layer.getSource().refresh();
    //   });
    //   //vectorlayer.refresh({force:true});
    // },
  }
};
</script>

<style>
.olMapModule-main {
  width: 100%;
  height: 100%;
}
</style>