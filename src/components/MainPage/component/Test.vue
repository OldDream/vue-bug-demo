<template>
  <div id="aMapContainer"></div>
</template>

<script>
export default {
  name: "TEST",
  data() {
    return {};
  },
  methods: {
    addDom() {
      let node1 = document.querySelector("#aMapContainer");
      node1.innerHTML = `<div class="dynamicAdded">this DOM is added by  Vanilla JS after mounted</div>`;
    },
  },

  mounted() {
    this.addDom();
  },
};
</script>

<style lang="scss">
.dynamicAdded {
  height: 100%;
  background-color: rgb(196, 250, 0);
  padding-top: 100px;
}
</style>
