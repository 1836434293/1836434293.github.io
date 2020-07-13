<template>
  <div class="home">
    <div class="hy">
      <!-- 轮播图 -->
      <van-swipe class="my-swipe" :autoplay="3000">
        <van-swipe-item v-for="(item,index) of banner" :key="index">
          <img :src="item.banner_img" alt />
        </van-swipe-item>
      </van-swipe>
      <!-- 选择课程类型 -->
      <div class="kc">
        <ul>
          <li>
            <img src="../assets/img/tu_03.png" alt />
            <p>特色课</p>
          </li>
          <li @click="yi">
            <img src="../assets/img/tu_05.png" alt />
            <p>一对一辅导</p>
          </li>
          <li>
            <img src="../assets/img/tu_07.png" alt />
            <p>学习日历</p>
          </li>
        </ul>
      </div>
      <div class="box" style="margin-bottom:65px" v-for="(item,index) of list" :key="index">
        <!-- 名师阵容 -->
        <div class="ms" v-if="item.channel_info.type == 3">
          <h5>{{ item.channel_info.name }}</h5>
          <ul>
            <li v-for="(v,i) of item.list " :key="i" @click="getDetails(v)">
              <img :src="v.teacher_avatar" alt />
              <h2>
                <p>{{ v.teacher_name }}</p>
                <b>{{ v.introduction }}</b>
              </h2>
            </li>
          </ul>
        </div>
        <!-- 精品课程 -->
        <div class="jing" v-if="item.channel_info.type == 1">
          <h5>{{ item.channel_info.name }}</h5>
          <ul>
            <li v-for="(v,i) of item.list" :key="i" @click="courses(v)">
              <h4>{{ v.title }}</h4>
              <div class="bo">
                <h3 v-for="(m,n) of v.teachers_list" :key="n">
                  <img :src="m.teacher_avatar" alt />
                  <p>{{ m.teacher_name }}</p>
                </h3>
              </div>
              <h2>
                <p>{{ v.sales_num }}人报名</p>
                <b id="pr">{{ v.price | Myprice }}</b>
              </h2>
            </li>
          </ul>
        </div>
        <!-- 明星讲师 -->
        <div class="ms" v-if="item.channel_info.type == 4">
          <h5>{{ item.channel_info.name }}</h5>
          <ul>
            <li v-for="(v,i) of item.list " :key="i">
              <img :src="v.teacher_avatar" alt />
              <h2>
                <p>{{ v.teacher_name }} <span>{{ v.level_name }}</span> </p>
                <b>{{ v.introduction }}</b>
              </h2>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      arr: [],
      banner: []
    };
  },
  mounted() {
    // 轮播图
    this.Banner();
    // 首页列表
    this.mi();
  },
  methods: {
    // 一对一辅导
    yi() {
      this.$router.push("/one");
    },
    // 轮播图
    async Banner() {
      let { data: res } = await this.http.get(
        "/api/app/banner"
      );
      // console.log(res);
      this.banner = res.data;
    },
    // 首页列表
    async mi() {
      let { data: res } = await this.http.get(
        "/api/app/recommend/appIndex"
      );
      // console.log(res);
      this.list = res.data;
    },
    async getDetails(v){
      let { data } = await this.http.get(`/api/app/teacher/${v.teacher_id}`)
      window.console.log(data)
      var temp = JSON.parse(window.localStorage.getItem('token'))
      if(temp){
        this.$router.push({
          path:'details',
          query:{
            id:v.teacher_id,
            img:data.data.teacher.avatar,
            sex:data.data.teacher.sex,
            level_name:data.data.teacher.level_name,
            teach_age:data.data.teacher.teach_age,
            teacher_name:data.data.teacher.teacher_name
          }
        })
      }else{
        alert('需要先登录哦')
        this.$router.push('loding')
      }
    },
    courses(v){
      // window.console.log(v)
      var temp = JSON.parse(window.localStorage.getItem('token'))
      if(temp){
        this.$router.push({
          path:'courses',
          query:{
            id:v.id
          }
        })
      }else{
        alert('需要先登录哦')
        this.$router.push('loding')
      }  
    }
  },
  filters: {
    Myprice(val) {
      if (val == 0) {
        return "免费";
      } else {
       return`￥${(val / 100).toFixed(2)}`;
      }
    }
  }
};
</script>

<style lang="less">
.van-swipe-item {
  img {
    width: 100%;
    height: 400px;
  }
}
.home {
  .hy {
    height: 100%;
    overflow: hidden;
    .kc {
      position: relative;
      margin-top: -60px;
      padding: 0 20px;
      ul {
        display: flex;
        justify-content: space-around;
        li {
          width: 203px;
          height: 203px;
          background: #fff;
          text-align: center;
          border-radius: 23px;
          img {
            width: 42px;
            height: 42px;
            margin: 56px 0 13px 0;
          }
          p {
            font-size: 25px;
            color: #9b9c9c;
          }
        }
      }
    }
    .ms {
      padding: 0 30px;
      h5 {
        font-size: 30px;
        color: #666;
        margin: 38px 0;
        border-left: 7px solid #eb5600;
        padding-left: 18px;
      }
      ul {
        li {
          display: flex;
          width: 100%;
          height: 160px;
          background: #fff;
          margin-bottom: 17px;
          align-items: center;
          border-radius: 10px;
          img {
            width: 81px;
            height: 81px;
            margin: 0 22px 0 30px;
            border-radius: 50%;
          }
          h2 {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            height: 60%;
            width: 100%;
            p {
              font-size: 29px;
              color: #666;
              span{
                color: #ea7a2f;
                font-size: 25px;
              }
            }
            b {
              font-size: 22px;
              width: 80%;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              color: #b7b7b7;
            }
          }
        }
      }
    }
    .jing {
      padding: 0 30px;
      h5 {
        font-weight: normal;
        font-size: 30px;
        color: #666;
        margin: 33px 0;
        border-left: 7px solid #eb5600;
        padding-left: 18px;
      }
      ul {
        li {
          width: 100%;
          height: 407px;
          background: #fff;
          border-radius: 10px;
          margin-bottom: 30px;
          padding: 0px 29px 0 29px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          h4 {
            font-size: 33px;
          }
          .bo {
            display: flex;
            flex-wrap: wrap;
            h3 {
              display: flex;
              height: 55px;
              align-items: center;
              margin-bottom: 15px;
              img {
                width: 55px;
                height: 55px;
                border-radius: 50%;
              }
              p {
                font-size: 20px;
                color: #666;
                margin: 0 20px;
              }
            }
          }
          h2 {
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-top: 1px solid #eee;
            padding-top: 26px;
            p {
              font-size: 23px;
              color: #666;
            }
            b {
              font-size: 33px;
              color: #389d1d;
            }
          }
        }
      }
    }
  }
}
</style>