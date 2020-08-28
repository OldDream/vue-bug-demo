<template functional>
  <div class="exitBtnDiv" v-on="listeners">
    <span>functional Component Click To Trigger BUG !</span>
  </div>
</template>

<script>
export default {
  name: 'ExitAutoNaviBtn',
};
</script>

<style lang="scss" scoped>
.exitBtnDiv {
  display: flex;
  justify-content: center;
  align-items: center;
  height: n(64);
  box-shadow: 0 0 n(6) 0 rgba(0, 0, 0, 0.3);
  background:rgba(255,255,255,1);
  border-radius: n(32);
  position: absolute;
  top: n(32);
  left: n(32);
  z-index: 11;
  span {
    font-size: n(28);
    font-weight: 500;
    color: rgb(29, 20, 20);
  }
  img {
    width: n(40);
    margin-right: n(16);
  }
}
</style>
