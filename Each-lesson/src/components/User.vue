<template>
  <div class="myapp">
  <div class="imgs">
          
      </div>
     <div class="header">
     </div>
     <div class="operation">
         <div class="operation_top">
            <span class="tx">
              <img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/avatar.jpg" alt="">
            </span>
            <span>{{mobile}}</span>
            <span class="bian">编辑</span>
         </div>
        <div class="operation_up">
            <ul>
              <li>
                  <p>0</p>
                  <h6>我的课程</h6>
                  <b>-易购课程学习-</b>
              </li>
              <li>
                 <p>0</p>
                  <h6>我的预约</h6>
                  <b>-一对一老师预约-</b>
              </li>
              <li>
                 <p>0</p>
                  <h6>剩余学习币</h6>
                  <b>-查看剩余学习币-</b>
              </li>
            </ul>
        </div>
     </div>
     <!-- 注册app -->
     <div class="z_app">
       <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA2CAYAAACbZ/oUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDFGMzI1MUM3ODVBMTFFOThFMjRCMzEzRDg2Mjg3RDUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDFGMzI1MUQ3ODVBMTFFOThFMjRCMzEzRDg2Mjg3RDUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0MUYzMjUxQTc4NUExMUU5OEUyNEIzMTNEODYyODdENSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0MUYzMjUxQjc4NUExMUU5OEUyNEIzMTNEODYyODdENSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuSIwewAAATUSURBVHja7JrbbxR1FMdnl7LlJkq1BbnIxUJi8a6tgoBaEhQxIsYHfVIT4y2++GB89Z8wvhgflTcSFKN4t6IRFcQiAtZSVAR7RWlV2rLj98TPhMm4092dnS1Td07yybbb2dnf9/c7v3PO70wzrus6RWyOuA8u4b2iH5pEy/B6WuyE4bCL64rczP5+v3hSXCfqneTaWbFIZMV2MR5FcIPYJtY5ybcc4+wVu3n9j2WLuMpCsdiZWraYcWfKFWx/uyzhblzI6hl3tlzBZtOcqWnTogatfIURuUt8L37n9wXielbAs4PiMJHV9uHlok3MjvidLuOOJDiqDYi94h3xhejn/aVik3hAzBD7SCNfkVbsveXiXrG1GvGjGoLziHhJdIoxn5d0i/1MiNkO0cM1nv3AZJ0Sz7DiiRZ8VLwhvg6ZjEHxKpMwMME1r5AWn4tzcNmYxf4pPhEHilzXHyLWb7bCHWH5NCmCh3HZ/pjuZ8HuRJIFnxNnxGhM9xvnXm5SBdeRcmbGWC7ODKuakiD4InLo/BjLxCVJdmnLo7dBpat8jbhbzEuyYK+4eFDcWUHau0I8juDEFx5mdxDA/iJNnStT7AviYXHxVBE8gxV2oaNE0SvFs+KhuF25VMGZCiLkLLEZobZ1PpqoqJetEk+JR6qxsqUI9lYnV+ExbSuip4vPyNPBSV0mnhaPxSB2etTjYd5X6TRzbdTV3kIXwurj1ylBvaDZKp5gYuJY2VEnpJ9VikvbQeBFcaNoJ900RuxC3EqqMo95jcm0HtTzYoOYG4PYHuLF8bDtk/G1aXMk+j8K1MJ1DPgmsP12dcRDuh0ZX+bwYMFpWwwiD3Ng6aKWt6bC2TDBFg2bxFrRIvo4mHdzUhkukGdbWfE2uhgLymgH5emC2F67MmIbqZdxHhOfsqpfBs7VDgvSxHdZ7Dhlgh/VD7cz0zkCzEk6FR+Id/mC0UDBMpuy7y5xD5VRAzevho2S120130LkUTzl7wJp0RZhvdhIirPPbTfB1nVYU6D+HRG/shrmJh/TiglG2UsRvsq3z1fHWfDTTOjg9Yj4mfNy0BbhdWvonS0lWNbTQtplgo8z4IkG+Bt75JD4XHzL7AYDQwt7+1rn3ycVNzPTURpx34lvfG0h2/s/FrjWTmc34GFXMYbVIRF/yASfLjMdHGS29yL8lwJdiXoi+yZWfCGzPafIvU9wP/OqPRQrXQWua+CeS3wZpJXT2sSVlAQPOecfkpVqYwSzTvbT20TLkUAOzLECbeTZtQx0FnHAZV8O4TEWL3bz80jAg+r43DJq9Y2sbCPfU9JByAQPVlC3uuylk7j7++I9Vil4kPce26xn5VeIn4gNH3KP3pD2UDNpsZ292Uj0LbsKrFRwMN10wn7SxD5Wym9N7O8mxB0iCAVtOe7q7cmVxIdKSt1YBfttkH2+h33eQ/AZK/K5+ezLFtx1HQEwF9fAqiXYc/dx3Ntc9k3nfBP+TOBUNRe33cD+vIU8H/uzrWoK9tswlVE3ldEOCoFmjpDtVF3zoFrn9EkTHEw9B8jtjbjvisn68gsh+IJa1qkxSwWnglPBqeBUcCo4FZwKTgWngmMUnK01wflaEzxQa4Ktk99XI3r7rJWyE8H2H6zWW7InEO7/SKSnx56K7vpHgAEAUQBJ+2WPUPoAAAAASUVORK5CYII=" alt="">
        <div>
            <h6>邀请好友注册App,享多重好礼</h6>
            <b>限时特惠，多邀多得</b>
        </div>
        <!-- <img src="../../assets/03.jpg" alt=""> -->
        <p style="margin-top:0.3rem;color:white;font-size:0.7rem ;">&gt;</p>
     </div>
    
     <div class="Kc">
          <h4>课程相关</h4>
        <van-grid icon-size="32px">
            <van-grid-item icon="description" text="我的作业"></van-grid-item>
            <van-grid-item  icon="friends-o" text="关注的老师" />
            <van-grid-item  icon="star-o" text="我的收藏" />
            <van-grid-item  icon="down" text="我的下载" />
        </van-grid>

     </div>

      <div class="Dd">
          <h4>订单相关</h4>
        <van-grid icon-size="32px">
            <van-grid-item icon="records" text="我的订单" />
            <van-grid-item  icon="cash-back-record" text="收货地址" />
        </van-grid>

     </div>
     <div class="Zh">
       <h4>我的账户</h4>
        <van-grid icon-size="32px" >
            <van-grid-item icon="balance-pay" text="优惠价"></van-grid-item>
            <van-grid-item  icon="credit-pay" text="学习卡" />
            <van-grid-item  icon="bulb-o" text="会员" />
 
        </van-grid>
     </div>
     <div class="Fw">
        <h4>自助服务</h4>
        <van-grid icon-size="32px">
            <van-grid-item icon="user-circle-o" text="我的消息"></van-grid-item>
            <van-grid-item  icon="envelop-o" text="意见反馈" />
            <van-grid-item  icon="phone-circle-o" text="在线客服" />
            <van-grid-item  icon="wap-home-o" text="设置" />
        </van-grid>

     </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      mobile:''
    }
  },
  mounted(){
    let mobile = JSON.parse(window.localStorage.getItem('mobile'))
    this.mobile = mobile
  }
}
</script>

<style lang="less">
.myapp{
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    background: white;
}
.imgs{
    width: 100%;
    z-index: 1;
}
.imgs img{
    width: 100%;
    height: 100%;
    display: block;
}
.header{
    width: 100%;
    height: 6rem;
    background: #fb5500;
    border-radius: 45%;
    margin-top: -2.8rem;
    z-index: 0;
}
.operation{
    width: 90%;
    height: 3.6rem;
    background: #fff;
    z-index: 1;
    margin-top: -2.3rem;
    // border: 1px solid darkgray;
    border-radius: 3%;
    box-shadow: 1px 1px 4px  #000;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
.z_app{
    width: 90%;
    height: 1.5rem;
    background: #fb5500;
    margin-top: 0.7rem;
    border-radius: 1rem;
    display: flex;
    //  line-height: 1.5rem;
    justify-content: space-around;
    
}
.z_app img{
  width: 0.6rem;
  height: 0.6rem;
  display: block;
  line-height: 1.5rem;
  margin: 0.4rem 0.2rem 0rem 0.6rem;
}
.z_app div{
  width: 70%;
  height: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 0.2rem;
}
.z_app div h6{
    font-size:0.34rem;
    width: 80%;
    color:white
}
.z_app div b{
  font-size:0.3rem;
   width: 80%;
    color:white
}
.operation_top{
  width: 100%;
  height: 1.8rem;
  display: flex;
     line-height: 1.8rem;
  justify-content: space-around;
}
.operation_top .bian{
  width: 1rem;
  height: 0.8rem;
  background: #fb5500;
 margin: 0.4rem -0.8rem 0rem 0rem;
 border-radius: 1rem 0rem 0rem 1rem;
 z-index: 0;
 line-height: 0.8rem;
 color:#fff;
 font-size:0.42rem;
 padding-left: 0.5rem;
}
.operation_top span{
  font-size:0.42rem;
  line-height: 1.8rem;
}
.operation_top .tx{
  width: 1.8rem;
  height: 1.8rem;
  display: block;
  border-radius: 50%;
  border:1px solid #000;
  text-align: center;
  line-height: 3rem;
}
.tx img{
  width: 80%;
  height: 80%;
  border-radius: 50%;
}
.operation_up{
  width: 100%;
  height: 1.8rem;
  
}
.operation_up ul{
  list-style: none;
  display: flex;
  justify-content: space-around;

}
.operation_up ul li{
  width: 33%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

}
.operation_up ul li p{
  width: 100%;
  text-align: center;
  font-size:0.55rem;
  color: orange;
  
}
.operation_up ul li h6{
  font-size:0.34rem;
  
}
.operation_up ul li b{
  font-weight: normal;
  font-size:0.28rem;
  color:gray;
}
.Kc{
    width: 90%;
    height: 3.2rem;
    // background: green;
    margin-top: 0.3rem;

}
.Kc h4 {
  font-size:0.5rem;
}
.van-grid{
  height: 1.7rem;
  background: #ccc;
  margin-top: 0.5rem;
}
.van-grid-item__icon{
  color:orange;
}
.Dd{
    width: 90%;
    height: 3.2rem;
    // background: green;
    margin-top: 0.3rem;
}
.Dd h4{
    font-size:0.5rem;
}
.van-grid{
 background: none;
}
.Zh{
      width: 90%;
    height: 3.2rem;
    // background: green;
    margin-top: 0.3rem;
}
.Zh h4{
 font-size:0.5rem;
}
.Zh .van-grid-item__icon{
  color:red;
}
.Fw{
 width: 90%;
    height: 3.2rem;
    // background: green;
    margin-top: 0.3rem;
    margin-bottom: 1.5rem;

}
.Fw h4{
 font-size:0.5rem;
}
.Fw .van-grid-item__icon{
  color:red;
}
</style>