let Vue = null

class store {
  constructor(options) {
    const { state, mutations = {} } = options
    let vm = new Vue({
      data: {
        state
      }
    })
    // 通过创建vue实例使得state所有的数据进行数据劫持
    this.state = vm.state
    // 存储修改state的方法
    this.mutations = {}
    Object.keys(mutations).forEach(key => {
      this.mutations[key] = value => {
        mutations[key].call(this, this.state, value)
      }
    })
  }
  commit(type, value) {
    this.mutations[type](value)
  }
}
/**
 * 1. 通过vue mixin全局混入beforeCreate生命周期函数, 把store混入到每一个组件上
 * 2. 如果当前组件有$store说明属于根组件
 * 3. 否则属于子孙组件赋值$store
 * @param _vue
 */
const install = _vue => {
  Vue = _vue
  Vue.mixin({
    beforeCreate() {
      // 根组件赋值
      if (this.$options.store) {
        this.$store = this.$options.store
      } else if(this.$parent) { // 子孙组件赋值
        this.$store = this.$parent.$store
      }
    }
  })
}
export default {
  install,
  store
}
