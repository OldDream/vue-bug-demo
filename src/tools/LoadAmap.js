import AMapLoader from '@amap/amap-jsapi-loader';

var AMap = null
var AMapInstance = null

function loadAMapClass() {
  return new Promise((resolve, reject) => {
    AMapLoader.load({
      "key": "23d5ef7b2e6bba4c8fb3e232251221eb",   // 申请好的Web端开发者Key，首次调用 load 时必填
      "version": "2.0",   // 指定要加载的 JSAPI 的版本
      "plugins": []  //插件列表
    }).then(AMap1 => {
      AMap = AMap1
      resolve(AMap1)
    }).catch(e => {
      console.log(e);
      reject(e)
    })
  })
}

function getAMap() {
  if (AMap) {
    return AMap
  } else {
    throw 'Load AMap first !'
  }
}

/**
 * 获取高德地图实例，单例模式
 * @param {*} containerSelector 
 * @param {*} mapOpts 
 */
function getAMapInstance(containerSelector, mapOpts) {
  if (AMapInstance) {
    return AMapInstance
  } else {
    return AMapInstance = new AMap.Map(containerSelector, mapOpts);
  }
}



/**
     * 与初始化地图相关的操作
     */
function initAMapInstance() {
  let mapOpts = {
    viewMode: '2D',
    zooms: [9, 20],
    zoom: 15,
    rotateEnable: false, // 地图是否可旋转，3D视图默认为true，2D视图默认false
    doubleClickZoom: false,
    pitchEnable: false,
    keyboardEnable: false,
    animateEnable: false,
    // showBuildingBlock: false,
    jogEnable: false,
    isHotspot: false,
    features: ['bg', 'point', 'road', 'building']
  };
  const aMapObj = getAMapInstance('aMapContainer', mapOpts);

  return aMapObj
}

export { loadAMapClass, getAMap, getAMapInstance, initAMapInstance }

