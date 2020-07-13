<template>
  <div class="yk">
      <div>约课记录</div>
      <div class="yk1">
        <p>待上课</p>
        <p>已上课</p>
        <p>已取消</p>
      </div>
      <div class="nr">
        <img src="../assets/img/tu_09.png" alt="">
        <button>登录/注册</button>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.yk{
  width: 100%;
  height: 100%;
    div{
      width:100%;
      height:90px;
      background:white;
      font-size:40px;
      display: flex;
      justify-content: center;
      align-items: center;
      }
    .yk1{
      width:100%;
      height:90px;
      background:white;
      display:flex;
      align-items: center;
      justify-content:space-around;
    }
    .nr{
      width:100%;
      height:auto;
      background:darkgray;
      img{
        width:100%;
        height:100%;
      }
      button{
        width:170px;
        height:50px;
        position:fixed;
        top:750px;
        border:none;
        font-size:24px;
        background:#EB6100;
        color:white;
      }
    }
}
p{
  margin: 0;
  padding: 0;
  font-size:30px;
  width:33.3%;
  height:100%;
  display:flex;
  align-items: center;
  justify-content:space-around;
}
p:hover{
  border-bottom:1px solid red ;
  border-bottom-width: 1px;
  color:red;
  
}
</style>