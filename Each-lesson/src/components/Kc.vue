<template>
  <div class="kc">
    <div class="tsk">
      <div>特色课</div>
      <router-link tag="div" :to="{path:'/Search'}"><van-icon name="search" /></router-link>
    </div>
    <div class="fl">
      <div class="fl1">
        <p @click="f">分类</p>
        <p>排序</p>
        <p>筛选</p>
      </div>

      <div  v-show="flag">显示隐藏</div>
    </div>

    <div class="content"> <!-- 内容-->
      <div class="div1" v-for="(iteam,key) in sz" :key="key">
        <div class="div1-1">
          <p>{{iteam.aa}}</p>
        </div>
        <div class="div1-2">{{iteam.bb}}</div>
        <div class="div1-3">
          <div class="div1-3-1">
            <img class="img1" src="/zhimg/zh3.gif" alt="">
            <span>{{iteam.cc}}</span>
          </div>
        </div>
        <div class="div1-4">
          <div>{{iteam.dd}}</div>
          <div>{{iteam.ee}}</div>
        </div>
      </div>
      
    </div>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      flag:false,
      sz:[]
    };
  },
  methods:{
    f(){
      console.log("f");
      this.flag=!this.flag
    },
    lls(){
      axios.get('/zhdata.json').then((res)=>{
        console.log(res.data.list)
        this.sz=res.data.list
      })
    }
  },
  mounted() {
    this.lls();
    
  }

}
</script>

<style lang="less" scoped>
.kc{
  width: 100%;
  height: 100%;
  .tsk{
    width:100%;
    height:75px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background:white;
    border:2px solid grey;
    border-top:none;
    border-left:none;
    div:nth-child(1){
      font-size:30px;
      align-items: center;
    }
    div:nth-child(2){
      position:fixed;
      top:10px;
      left:685px;
    }
  }
  .fl{
    width:100%;
    height:70px;
    background:white;
    .fl1{
      width:100%;
      height:70px;
      display: flex;
        justify-content: space-around;
        align-items: center;
      p{
        font-size:25px;
        width:33.3%;
        height:70px;
        display: flex;
        justify-content: space-around;
        align-items: center;
      }
    }
  }
  .content{
    width:100%;
    height:auto;
    .div1{
      background:white;
      width:95%;
      height:300px;
      margin-left:20px;
      margin-top:25px;
      border-radius:8px;
      .div1-1{
        padding-top: 25px;
        padding-left:20px;
        box-sizing: border-box;
        p{
          font-size:30px;
        }
      }
      .div1-2{
        font-size:25px;
        padding-top: 5px;
        padding-left:20px;
      }
      .div1-3{
        font-size:27px;
        padding-top: 40px;
        padding-left:20px;
        .div1-3-1{
          display:flex;
          align-items: center;
          span{
            margin-left:15px;
          }
        }
      }
      .div1-4{
        font-size:25px;
        display:flex;
        // justify-content: space-around;
        justify-content: space-between;
        padding-top: 50px;
        div:nth-child(1){
          padding-left:20px;
        }
        div:nth-child(2){
          font-size:30px;
          color:green;
          padding-right:20px;
        }
      }
    }
  }
}
</style>