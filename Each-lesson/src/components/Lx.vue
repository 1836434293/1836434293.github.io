<template>
  <div class="lv">
    <div class="header">
        <p>练习</p>
    </div>
     <div class="nav">
          <ul>
            <li  v-for="(item,index) in list"  :key="index" >
              <div class="quan" @click="getKd(index)">
                   <img :src="item.img" alt="">
              </div>
              <a>{{item.title}}</a>
            </li>
          </ul>
     </div>
     <div class="content">
           <h3>近期模考</h3>
           <p>默认排序 <span>时间</span> </p>
           <div>
               <img src="../assets/img/lx_18.jpg" alt="" class="pic">
                <h4>暂无模考安排，敬请期待</h4>

           </div>
     </div>
  </div>
</template>

<script>
export default {
data(){
  return{
  list:[
    {
      img:require("../assets/img/lx_03.jpg"),
      title:"考点专练"
    },
    {
      img:  require("../assets/img/lx_05.jpg"),
      title:"套卷练习"
    },
    {
      img:require("../assets/img/lx_07.jpg"),
      title:"仿真模考"
    },
    {
      img:require("../assets/img/lx_09.jpg"),
      title:"错题练习"
    },
    {
      img:require("../assets/img/lx_12.jpg"),
      title:"测评结果"
    },
    {
      img:require("../assets/img/lx_15.jpg"),
      title:"习题收藏"
    }
  ]
  }

},
methods:{
  getKd(index){
    if(index==2){
      this.$router.push('/shop/simulation')
    }else{
    this.$router.push('/kd')
    }
  }
}
}
</script>

<style scoped>
 .header{
   height: 80px;
   text-align: center;
   background-color: white;
   margin-bottom: 20px;
 }
 .header p{
   line-height: 80px;
 }
 .nav{
   width: 96%;
   background-color: white;
   height: 300px;
   margin: 0 auto;
   border-radius: 10px;
   
 }
 ul{
   width: 100%;
  display: flex;
  height: 99%;
  flex-wrap: wrap;
  margin-top: 20px;
  padding:10px 0px ;
 }
 li{
   width: 25%;
   height: 50%;
   text-align: center;
 }
 .quan{
   width:70px;
   height: 70px;
   border: 1px solid #eee;
   text-align: center;
   margin: 0 auto;
   border-radius: 50px;
   line-height: 50px;
 }
 img{
    width: 35px;
    height: 35px;
    margin-top: 10px;
 }
 li a{
   font-size: 22px;
 }
 .content{
   width: 95%;
   background: white;
   margin:20px auto;
 }
 .content h3{
   font-size: 30px;
   color: #8d8e94;
   line-height: 60px;
 }
 .content p{
   font-size: 24px;
   color: #e97357;
   margin-top: 5px;
 }
 .content p span{
   float: right;
 }
 .pic{
   width: 175px;
   height: 220px;
   margin-left: 40%;
   margin-top: 40px;
 }
 h4{
   font-size: 24px;
   color: #8d8e94;
   margin-left: 35%;
   margin-top: 20px;
 }
</style>