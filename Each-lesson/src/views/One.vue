<template>
  <div class="yiduiyi">
      <!-- 头部 -->
   <van-nav-bar title="一对一辅导" left-arrow @click-left="onClickLeft" size="20">
  <template #right>
    <van-icon name="search" size="18" />
  </template>
</van-nav-bar>
<!-- 菜单 -->

<van-dropdown-menu>
  <van-dropdown-item v-model="value" :options="option" />
  <van-dropdown-item title="选择老师条件" ref="item">
    <van-switch-cell v-model="switch1" title="包邮" />
    <van-switch-cell v-model="switch2" title="团购" />
    <van-button block type="info">确认</van-button>
  </van-dropdown-item>
</van-dropdown-menu>

<div class="teacher">
<ul>
    <li v-for="(item,index) in list" :key="index">
        <img :src="item.avatar" alt="">
        <div class="nav">
            <p>{{ item.real_name }}</p> 
            <p class="lf">{{item.sex}} <span>{{item.teach_age}}</span>年教龄 </p>
        </div>
       <div class="anniu">
           <input type="button" value="预约">
       </div>
    </li>
</ul>
</div>



  </div>
</template>

<script>
import axios from "axios"
// import "../assets/rem"
export default {
    data() {
        return {
             value: 0,
      switch1: false,
      switch2: false,
      option: [
        { text: '选择上课时间', value: 0 },
        { text: '你好', value: 1 },
        { text: '活动商品', value: 2 },
      ],
      list:[],

        }
    },
    mounted() {
        axios.get("https://www.365msmk.com/api/app/otoCourse?page=1&limit=10&start_time=&end_time=&level_id=4&is_collect=0&is_attended=0&sex=&attr_val_id=&level_id").then((msg)=>{
            // console.log(msg)
            this.list= msg.data.data
                    })
    },
    methods: {
        // 返回首页
        onClickLeft(){
            this.$router.push("/shop/home")
        }
    },
}
</script>

<style scoped>
.teacher{
    width: 100%;
}
.teacher ul {
    display: flex;
    justify-content: space-around;
    width: 100%;
    flex-wrap: wrap;
    background: #ccc;
}
.teacher ul li {
    width: 100%;
    height:100px;
    background: #fff;
    margin-bottom: 10px;
    line-height: 80px;
   
}
.teacher ul li img{
    width: 45px;
    height:45px;
    display: block;
    float: left;
    border-radius: 50%;
    margin-top:30px;
    margin-left: 40px;
}
.teacher ul li .nav{
    float: left;
    width: 150px;
   height: 40px;
   line-height: 30px;
   margin-top: 30px;
   margin-left: 30px;

}
.teacher ul li .nav p{
    font-size:26px;
}
.teacher ul li .nav .lf{
    font-size:22px;
    color:#ccc;
    font-weight: normal;

}
.teacher ul li .anniu{
  
    float: right;
    margin-right: 22px;
    margin-top: 20px;
}
.teacher ul li .anniu input{
    width:100px;
    height:50px;
border-radius: 45%;
line-height: 40px;
color:red;
border:0;
background:cyan;
outline: none;
font-size:20px;
font-weight: bold;
}
</style>