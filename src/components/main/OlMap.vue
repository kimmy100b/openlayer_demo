<template>
  <div class="OlMap-main">
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
import { defaults as defaultInteractions } from "ol/interaction";

export default {
  name: "OlMap",
  data() {
    return {
      olMap: undefined,
    };
  },
  mounted() {
    // ref는 하위 컴포넌트의 요소를 사용하기 위해 쓰는 Vue 속성. 하위 컴포넌트가 완전히 렌더링 된 후에 ref참조
    this.olMap = new Map({
      target: this.$refs.map,
      controls: defaultControls({
        attribution: false,
        attributionOptions: false,
        zoom: false,
        rotate: false,
      }),
      interaction: defaultInteractions({
        altShiftDragRotate: false,
        onFocusOnly: false,
        doubleClickZoom: false,
        keyboard: false,
        shiftDragZoom: false,
        dragPan: false,
        pinchRotate: false,
        pinchZoom: false,
        zoomDelta: false,
        mouseWheelZoom: false,
      }),
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: fromLonLat([127, 37]),
        zoom: 10,
      }),
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