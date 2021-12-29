<template>
  <div>
    <div v-for="(item, index) in list " :key="index" class="item">
      <img alt="Vue logo" src="../assets/bg.jpg">
      <span class="name">{{item.name}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'logo',
  props: {},
  data () {
    return {
      list: [
        {
          type: 'def',
          name: '胰岛素'
        },
        {
          type: 'def',
          name: '胰岛素注射液 400单位/支'
        },
        {
          type: 'def',
          name: '甘舒霖 R 400IU/支'
        },
        {
          type: 'def',
          name: '门冬胰岛素 300单位/支'
        },
        {
          type: 'def',
          name: '来得时 300IU/支'
        },
        {
          type: 'def',
          name: '化疗药品'
        },
        {
          type: 'def',
          name: '50%葡萄糖注射液 100ml'
        },
        {
          type: 'def',
          name: '灭菌注射用水 500ml'
        },
        {
          type: 'def',
          name: '硝酸甘油注射液 5mg/支'
        },
        {
          type: 'def',
          name: '硝普钠 50mg/支'
        },
        {
          type: 'def',
          name: '去乙酰毛花苷注射液 0.4mg/支'
        },
        {
          type: 'def',
          name: '20%甘露醇注射液 250ml/支'
        },
        {
          type: 'def',
          name: '25%硫酸镁 10ml/支'
        },
        {
          type: 'def',
          name: '去甲肾上腺素 2mg'
        },
        {
          type: 'def',
          name: '10%氯化钠注射液 10ml'
        },
        {
          type: 'def',
          name: '10%氯化钾注射液 10ml'
        },
        {
          type: 'def',
          name: '多巴胺 20mg'
        },
        {
          type: 'def',
          name: '盐酸肾上腺 1mg'
        },
        {
          type: 'def',
          name: '氨茶碱 0.25g'
        },
        {
          type: 'def',
          name: '尼可刹米 0.375g/支'
        },
        {
          type: 'def',
          name: '可达龙 0.15g/支'
        },
        {
          type: 'def',
          name: '20%甘露醇注射液 250ml'
        },
        {
          type: 'def',
          name: '肝素钠 1.25wu'
        }
      ]
    }
  },
  methods: {}
}
</script>

<style>
  .item {
    position: relative;
    text-align: left;
    margin-bottom: 15px;
  }

  img  {
    width: 480px;
  }

  .name {
    font-size: 25px;
    position: absolute;
    top: 60px;
    left: 30px;
    font-weight: 600;
  }
</style>
