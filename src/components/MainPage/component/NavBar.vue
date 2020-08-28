<template>
  <div class="navBar__scrollWrapper">
    <div class="navBar__container" ref="scrollWrapper">
      <div
        class="navBar__item"
        v-for="(item, index) in arrayData"
        :key="item.id"
        @click="hadleClick(item,index)"
        :ref="`item${index}`"
      >
        <img v-if="selectedIndex == index" :src="item.img" />
        <img v-else :src="item.grayImg" />
        <p>{{item.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: ['arrayData', 'defaultSelectedIndex'],
  data() {
    return {
      selectedIndex: null
    };
  },
  methods: {
    /**
     * 滚动item到应有位置，允许情况下，滚动到中间
     */
    scrollAction(index) {
      var selectedNode = this.$refs[`item${index}`][0];
      var scrollNode = selectedNode.parentNode.parentNode; // 滚动容器

      // 滚动函数
      var scrollSmoothTo = function(position) {
        // 当前滚动位置
        var scrollLeft = scrollNode.scrollLeft;
        // 滚动step方法
        var step = function() {
          // 距离目标滚动距离
          var distance = position - scrollLeft;
          // 目标滚动位置
          scrollLeft = scrollLeft + distance / 5;
          if (Math.abs(distance) < 1) {
            scrollNode.scrollLeft = position;
          } else {
            scrollNode.scrollLeft = scrollLeft;
            requestAnimationFrame(step);
          }
        };
        step();
      };

      // 计算滚动位置
      // 目标为 selectedNode.offsetLeft - selectedNode.scrollLeft 小于 容器宽度 - 自身宽度
      var selfWidth = selectedNode.offsetWidth;
      var containerWidth = scrollNode.offsetWidth;
      // var minLeft = scrollNode.offsetWidth / 2; // offsetLeft 大于 minLeft 才能滚动
      var X1 = selectedNode.offsetLeft - scrollNode.scrollLeft;
      var targetX1 = containerWidth / 2 - selfWidth / 2;
      var delta = X1 - targetX1;
      var newScrollLeft = scrollNode.scrollLeft + delta;
      scrollSmoothTo(newScrollLeft);
    },
    hadleClick(item, index) {
      this.selectedIndex = index;
      this.scrollAction(index);
      this.$emit('navbarclick', {
        index,
        item
      });
    },
    /**
     * 触发当前选中项目的点击
     */
    triggerClick() {
      console.log('triggerClick');
      this.$emit('navbarclick', {
        index: this.selectedIndex,
        item: this.arrayData[this.selectedIndex]
      });
    },
    /**
     * 触发相应index项目的点击事件
     */
    clickCertainIndex(index) {
      this.hadleClick(this.arrayData[index], index)
    }
  },
  created() {
    this.selectedIndex = this.defaultSelectedIndex;
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.navBar {
  &__scrollWrapper {
    box-sizing: content-box;
    width: 100vw;
    overflow: hidden;
    overflow-x: auto;
    background-color: #fff;
    box-shadow: 0 -1px 0px 0px rgba(225, 230, 228, 1),
      0px 1px 0px 0px rgba(225, 230, 228, 1);
    &::-webkit-scrollbar {
      // 隐藏滚动条
      display: none;
    }
  }
  &__container {
    // 内容容器
    min-width: 00%;
    height: 100%;
    display: flex;
    flex-direction: row;
    .navBar__item {
      flex-shrink: 0;
      flex-grow: 1;
      flex-basis: auto;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: n(136);
      height: 100%;
      img {
        width: n(48);
        height: n(48);
      }
      p {
        font-size: n(20);
        color: rgba(51, 51, 51, 1);
      }
    }
  }
}
</style>
