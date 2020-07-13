<template>
  <div>
    <div class="loding_img">
      <img
        src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019pILfAg7Avr1567732916.png"
      />
    </div>
    <div class="loding_loding">
      <div>
        <div ref="div1" class="inp">
          <input
            style="width:70%;font-size:0.5rem"
            v-on:blur="Loss"
            v-on:focus="Access"
            v-model="user"
            placeholder="请输入手机号"
          />
          <span :class="isCode?'getColor':'active'" @click="hq">{{ this.content }}</span>
        </div>
        <div ref="div2" class="inp">
          <input
            style="font-size:0.5rem"
            v-on:blur="Loss1"
            v-on:focus="Access2"
            v-model="code"
            placeholder="请输入短信验证码"
          />
        </div>
        <div class="loding_loding_Registration">
          <div>*未注册的手机号将自动注册</div>
          <div v-on:click="password">使用密码登录</div>
        </div>
        <button class="btn" @click="dlu">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: "",
      code: "",
      content: "获取验证码",
      time: 60,
      isCode: true
    };
  },
  methods: {
    Access() {
      // window.console.log(123)
      this.$refs.div1.style.borderBottom = "1px solid #FE7D2F";
    },
    Loss() {
      this.$refs.div1.style.borderBottom = "1px solid lightgray";
    },
    Access2() {
      // window.console.log(123)
      this.$refs.div2.style.borderBottom = "1px solid #FE7D2F";
    },
    Loss1() {
      this.$refs.div2.style.borderBottom = "1px solid lightgray";
    },
    password() {
      this.$router.push("/shop/loding");
    },
    // 获取验证码
    hq() {
      if (this.isCode) {
        this.http
          .post("/api/app/smsCode", {
            mobile: this.user,
            sms_type: "login",
            type: 2
          })
          .then(msg => {
            console.log(msg);
            if (msg.data.code == 200) {
              this.id = setInterval(() => {
                this.time--;
                this.content = `获取验证码(${this.time})`;
                this.isCode = false;
                if (this.time <= 0) {
                  this.isCode = true;
                  clearInterval(this.id);
                  this.time = 60;
                  this.content = "获取验证码";
                }
              }, 1000);
            }
          });
      }
    },
    // 登录接口
    async dlu() {
      let { data: msg } = await this.http.post("/api/app/login", {
        mobile: this.user,
        sms_code: this.code,
        type: 2,
        client: 1
      });
      // console.log(msg);
      window.localStorage.setItem("token", JSON.stringify(msg.data.remember_token));
      window.localStorage.setItem("id", JSON.stringify(msg.data.id));
      window.localStorage.setItem("mobile", JSON.stringify(this.user));
      window.localStorage.setItem("sms_code", JSON.stringify(this.code));
      if (msg.data.is_new == 1) {
        this.$router.push("/shop/szpassword");
      } else if (msg.data.is_buy == 2) {
        this.$router.push("/shop/user");
      }
    }
  }
};
</script>

<style scoped>
.loding_img {
  width: 100%;
  height: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: red; */
}
.loding_img img {
  width: 60%;
}
.loding_loding {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loding_loding > div {
  width: 80%;
  /* background: pink; */
}
.loding_loding > div > .inp {
  width: 100%;
  height: 1.5rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid lightgray;
}
.loding_loding > div > .inp .getColor {
  font-size: 0.4rem;
  color: #fe7d2f;
}
.active {
  font-size: 0.4rem;
  color: rgb(204, 204, 204);
  width: 230px;
}
.loding_loding > div > .inp > input {
  width: 100%;
  height: 90%;
  border: none;
  outline: none;
  background: #f0f2f5;
}
.loding_loding_Registration {
  width: 100%;
  height: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.4rem;
  /* background: red; */
  color: gray;
}
.btn {
  width: 100%;
  height: 1.5rem;
  border: none;
  outline: none;
  color: white;
  border-radius: 20px;
  background: #fe7d2f;
  margin-top: 1.5rem;
  font-size: 0.6rem;
}
</style>