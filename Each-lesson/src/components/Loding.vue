<template>
    <div>
        <div class="loding_img">
            <img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019pILfAg7Avr1567732916.png" />
        </div>    
        <div class="loding_loding">
            <div>
                <div ref="div1" class="inp">
                    <input v-model="mobile" style="font-size:0.5rem" v-on:blur="Loss" v-on:focus="Access" placeholder="请输入手机号" />
                </div>
                <div ref="div2" class="inp">
                    <input v-model="pass" style="font-size:0.5rem" v-on:blur="Loss1" v-on:focus="Access2" type="password" placeholder="请输入密码" />
                </div>
                <div class="loding_loding_Registration">
                    <div v-on:click="password">找回密码</div>
                    <div v-on:click="reg">注册/验证码登录</div>
                </div>
                <button class="btn" @click="dlu">登录</button>
            </div>
        </div>
    </div>    
</template>

<script>
export default {
    data(){
        return{
            mobile:'',
            pass:''
        }
    },
    methods:{
        Access(){
            // window.console.log(123)
            this.$refs.div1.style.borderBottom = '1px solid #FE7D2F'
        },
        Loss(){
            this.$refs.div1.style.borderBottom = '1px solid lightgray'
        },
        Access2(){
            // window.console.log(123)
            this.$refs.div2.style.borderBottom = '1px solid #FE7D2F'
        },
        Loss1(){
            this.$refs.div2.style.borderBottom = '1px solid lightgray'
        },
        password(){
            this.$router.push('/shop/password')
        },
        reg(){
            this.$router.push('/shop/reg')
        },
        // 登录
        dlu(){
            let mobile = JSON.parse(window.localStorage.getItem('mobile'))
            if(this.mobile != mobile){
                alert('还没注册哦~')
                return
            }
            this.http.post('/api/app/login',{mobile:mobile,password:this.pass,type:1}).then((resp)=>{
                window.console.log(resp)
                if(resp.data.code == 201){
                    alert(resp.data.msg)
                }else{
                    this.$router.push('user')
                }
            })
        }
    }
}
</script>

<style scoped>
.loding_img{
    width: 100%;
    height: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background: red; */
}
.loding_img img{
    width: 60%;
}
.loding_loding{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.loding_loding>div{
    width: 80%;
    /* background: pink; */
}
.loding_loding>div>.inp{
    width: 100%;
    height: 1.5rem;
    display: flex;
    align-items: center;
    border-bottom: 1px solid lightgray;
}
.loding_loding>div>.inp>input{
    width: 100%;
    height: 90%;
    border:none;
    outline: none;
    background: #F0F2F5;
}
.loding_loding_Registration{
    width: 100%;
    height: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.4rem;
    /* background: red; */
    color: gray;
}
.btn{
    width: 100%;
    height: 1.5rem;
    border: none;
    outline: none;
    color: white;
    border-radius: 20px;
    background: #FE7D2F;
    margin-top: 1.5rem;
    font-size: 0.6rem;
}
</style>