<template>
  <div class="Main-main">
    <split-panes class="default-theme">
      <pane :size="size">
        NAVi
      </pane>
      <pane :size="100 - size">
        <ol-map></ol-map>
      </pane>
    </split-panes>
  </div>
</template>

<script>
import { Splitpanes, Pane } from "splitpanes";
import "splitpanes/dist/splitpanes.css";

import OlMap from "@/components/olMap/OlMap.vue";

export default {
  data() {
    return {
      size: 30,
    };
  },
  components: {
    "split-panes": Splitpanes,
    pane: Pane,
    "ol-map": OlMap,
  },
};
</script>

<style>
.Main-main {
  width: 100%;
  height: 100%;
}
</style>