<template>
  <div id="app">
    <div v-if="edit">
      <div v-for="item in list">
        <input placeholder="名字" v-model="item.name">
        <input placeholder="描述" v-model="item.desc">
        <input placeholder="数量" type="tel" v-model="item.value">
        <a class="del" @click="delItem($index)">删除</a>
      </div>
      <a class="add" @click="addItem">添加</a>
      <a class="reset" @click="reset">清零</a>
    </div>
    <div class="list" v-else>
      <row-item v-for="item in list" :data="item" :index="$index" :max="max" @add="add" @del="del"></row-item>
    </div>
  </div>
</template>

<script>
  import RowItem from './components/RowItem.vue'
  const CACHE_NAME="cache list"
  export default {
    ready(){
      let str = window.localStorage.getItem(CACHE_NAME);
      if(str && str.length>0){
        this.list = JSON.parse(str);
      }
      this.updateMax();
      document.body.onkeydown = this.onkeydown.bind(this);
    },
    data(){
      return {
        list: [
          {name: '女神',desc:'jane', value: 0},
          {name: '女神',desc:'niki', value: 0},
          {name: '女神',desc:'楚婷', value: 0},
          {name: '女神',desc:'大P', value: 0},
          {name: '女神',desc:'菲比', value: 0},
          {name: '女神',desc:'罗欢', value: 0},
          {name: '女神',desc:'瑞娜', value: 0},
          {name: '女神',desc:'晓芬', value: 0},
          {name: '女神',desc:'丫丫', value: 0},
          {name: '女神',desc:'格凌', value: 0},
        ],
        max: 10,
        edit: false
      }
    },
//  computed:{
//    max(){
//      return 100;
//    }
//  },
    methods: {
      updateMax(){
        this.max = 10;
        for (let i = 0; i < this.list.length; i++) {
          let val = ~~this.list[i].value;
          if (val > this.max) {
            this.max = val;
          }
        }
      },
      add(item){
//        this.list.$set(item.index, Object.assign({},this.list[item.index],{value: ~~item.data.value + 1}));
        this.list[item.index].value = ~~item.data.value+1;
        this.updateMax();
      },
      del(item){
        let count = ~~item.data.value-1;
        if(count<0)count = 0;
        this.list[item.index].value = count;
        this.updateMax();
      },
      addItem(){
        this.list.push({name: '', value: 0});
      },
      delItem(index){
        this.list.splice(index, 1);
      },
      reset(){
        for(let i = 0;i<this.list.length;i++){
          this.list.$set(i,Object.assign({},this.list[i],{value:0}));
        }
      },
      onkeydown(e){
        if(e.keyCode==13){
          this.edit = !this.edit;
          window.localStorage.setItem(CACHE_NAME,JSON.stringify(this.list));
        }
      }
    },
    components: {
      RowItem
    }
  }
</script>

<style>
  html {
    height: 100%;
  }

  html, body, p {
    margin: 0;
    padding: 0;
  }

  p {
    line-height: 1;
  }

  body {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .list{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100%;
  }


  #app {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-family: Source Sans Pro, Helvetica, sans-serif;
    background: #fff url(./assets/bg.png) no-repeat center;
    background-size: 100% 100%;
    font-size: 10px;
  }

  a:hover{
    cursor: pointer;
  }
</style>
