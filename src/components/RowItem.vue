<template>
  <div class="row-item">
    <img class="flex-item head" :src="headSrc">
    <div class="flex-item info">
      <span class="num font-num">{{num}}</span>
      <div class="detail">
        <p class="username">{{data.name}}</p>
        <p class="label">{{data.desc}}</p>
      </div>
    </div>
    <div class="flex-item btn-block">
      <a class="flex-item add-btn" @mousedown.prevent.stop="add"></a>
      <a class="flex-item del-btn" @mousedown.prevent.stop="del"></a>
    </div>
    <p class="flex-item count font-num">{{data.value}}</p>
    <div class="flex-item progress">
      <img class="bg" src="~assets/p_bg.png">
      <div class="bar" :style="barStyle"></div>
    </div>

  </div>
</template>
<style>
  .row-item {
    display: flex;
    position: relative;
    align-items: center;
    flex-direction: column;
    width: .64rem;
    height: 90%;
    -webkit-user-select: none;
    margin: 0 .05rem;
  }

  .flex-item {

  }

  .head {
    width: .64rem;
    height: .64rem;
  }

  .info {
    /*width: .84rem;*/
    position: relative;
    display: flex;
    align-items: center;
    text-align: center;
    margin: .1rem 0;
    line-height: .24rem;
  }

  .info > * {
    display: block;
  }

  .num {
    font-size: .20rem;
    color: #fff;

  }

  .num:after {
    content: '';
    border-left: #fff solid .02rem;
    height: .20rem;
    margin-left: .02rem;

  }

  .detail {
    padding-left: .06rem;
    width: .25rem;
    text-align: left;
  }

  .username {
    font-size: .12rem;
    color: #fff;
  }

  .label {
    font-size: .08rem;
    color: #f5e82a;
    margin-top: .02rem;
    text-align: center;
  }

  .count {
    font-size: .20rem;
    color: #fff;
    padding-bottom: .06rem;
  }

  .progress {
    position: relative;
    width: .24rem;
    /*height: 3.66rem;*/
    flex: 1;
  }

  .bg {
    position: absolute;
    left: 0;
    top: 0;
    width: .24rem;
    height: 100%;
  }

  .bar {
    position: absolute;
    left: .04rem;
    bottom: .04rem;
    width: .16rem;
    height: 96%;
    background-size: cover;
    border-radius: .05rem;
    transition: height .5s;
  }
  .btn-block a{
    display: inline-block;
    cursor: pointer;
    margin-bottom: .06rem;
    background-size: cover;
    width: .31rem;
    height: .33rem;
  }
  .add-btn {
    background: url(~assets/add-btn.png) no-repeat center;
  }

  .add-btn:active {
    background-image: url(~assets/add-btn-hover.png);
  }
  .del-btn {
    background: url(~assets/del-btn.png) no-repeat center;
  }

  .del-btn:active {
    background-image: url(~assets/del-btn-hover.png);
  }
</style>
<script>
  export default{
    data(){
      return {
        msg: 'hello vue'
      }
    },
    props: {
      index: Number,
      data: Object,
      max: Number,
    },
    computed: {
      headSrc(){
        return "static/img/head" + (this.index + 1) + ".png";
      },
      progress(){
        return this.data.value / this.max * 4.73 * .8 + 'rem';
      },
      num(){
        let val = (this.index + 1).toString();
        if (val.length < 2) {
          val = '0' + val;
        }
        return val
      },
      barStyle(){
        return {
          background: "url(static/img/bar" + (this.index + 1) + ".png) no-repeat center",
          height: this.data.value / this.max * 96 * .8 + '%'
        };
      }
    },
    methods: {
      add(){
        this.$dispatch('add', this);
      },
      del(){
        this.$dispatch('del', this);
      }
    },
    components: {}
  }
</script>
