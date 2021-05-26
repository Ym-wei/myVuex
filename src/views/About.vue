<template>
  <div class="about">
<!--    <h1>name: {{$store.state.name}}</h1>-->
    <h1>name: {{name}}</h1>
    <h1>count: {{$store.state.count}}</h1>
    <h1>数值类型: {{countType}}</h1>
    <input type="number" v-model.number="number">
    <button @click="clickAdd">加号</button>
    <button @click="sub">减号</button>
    <h1>-------------</h1>
    <input type="text" v-model="nameInp">
    <button @click="changeName">改名字</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from '../myVuex/index'
export default {
  data () {
    return {
      number: 5,
      nameInp: '你好啊'
    }
  },
  computed: {
    ...mapState(['name']),
    ...mapGetters(['countType'])
  },
  methods: {
    ...mapMutations(['add']),
    ...mapActions(['actionsChangeName']),
    clickAdd () {
      this.add(this.number)
    },
    sub () {
      this.$store.commit('sub', this.number)
    },
    changeName () {
      this.actionsChangeName(this.nameInp)
    }
  }
}
</script>
