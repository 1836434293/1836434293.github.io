<template>
  <div class="szpassword">
    <van-nav-bar title="设置密码" right-text="跳过" @click-right="onClickRight" />
    <!-- <div class="ti"><input type="password" placeholder="请设置登录密码"></div>
    <div class="ti"><input type="password"  placeholder="请再次输入密码"></div>
    <div class="bt">
        <button style="background:orange;color:#fff">提交</button>
    </div>-->
    <div style="margin:16px 0;">
      <van-field
        type="password"
        placeholder="密码："
        v-model="pa"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <van-field
        type="password"
        placeholder="密码："
        v-model="ss"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
    </div>
    <div style="margin: 16px;display:flex;justify-content: center;">
      <van-button round type="info" native-type="submit" size="60px" @click="tj">提交</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pa: "",
      ss: ""
    };
  },
  methods: {
    // 跳过
    onClickRight() {},
    // 提交
    tj() {
      if (this.pa.length < 6 && this.pa.length == 0) {
        alert("密码格式不正确");
        return;
      }
      if (this.pa != this.ss) {
        alert("两次密码不一致");
        return;
      }
      var sj = JSON.parse(window.localStorage.getItem("mobile"));
      var yz = JSON.parse(window.localStorage.getItem("sms_code"));
      this.http
        .post("/api/app/password", {
          mobile: sj,
          sms_code: yz,
          password: this.pa
        })
        .then(res => {
          console.log(res);
          if (res.data.code == 200) {
            this.$router.push("loding");
          }else{
            alert('验证码已过期')
          }
        });
    }
  }
};
</script>

<style>
.van-nav-bar {
  height: 100px;
}
.van-nav-bar__title {
  font-size: 30px;
}
.van-nav-bar__text {
  font-size: 30px;
}
.van-cell {
  height: 100px;
  line-height: 100px;
}
.van-field__control {
  font-size: 30px;
}
.van-button__text {
  font-size: 30px;
}
.van-button {
  width: 70%;
  height: 80px;
}
</style>