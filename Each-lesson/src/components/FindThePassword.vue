<template>
    <div>
        <div class="simulation_header_wrap">
            <div class="simulation_header">
                <img v-on:click="back" style="margin-left:0.5rem" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAwCAYAAAAGlsrkAAADgUlEQVRYR8XY+6ulUxzH8dcYYsglGteI/OASpsYPrkXKdRq5TogIM5Mf5D8RPx23URTygzCuTcYouSU1Ipo0buMSEWJCGPpMa9eeZ9az97P3efbxrdM5nf3s9V7ftb6Xz/dZ5H+yRQvEPQCnIb8/wdaFAAe2GidjL/yMuVmC98BRuAtHNk723VmB98T5uAIHV65z8yzA8fQ6XIAlaDL+nMVRH4JbcHpL0G7H09jQp8cnFU+PR7xu2md4Bu9hRx/grJH7vAYHVY72X7yPx/D1YDfzBe+NFViJ/N20vwr0Afw2/OF8wEfgSpxR8rMJ/REv4hVkA7vYtOATcROOrRxtACkS9+ND/FMLtEnBixHoHS35Gcg23IPvR5XjScAH4kJchn1a7vNVrMdP43pAV/C+uL3kZ+pt0/7G43gNf4yD5vNx4Hx+GO7EcZUFkyo/4OESvV2YO58ZBc59noOrcGjLigmeJ/EpsonO1gbO/5MqlyLH3HwuQbSxlL9fOtOGHqyBU31uxNktC/6O58vPbvnZdRNNcOrs9TgBOeqmfVXq7Ttt+TkN+CzcUPKzuaHc38d4FF92XXxcHqdpX4yrW/IzqfIR7isVqQ/uzqBJUYintSKfQrABLyMNvDcL+F4srayYbpKushnxulcL+G4cXlk10ZvCkECaCfhc3Iz9KvBIlU14Dr/26XI8TtpEmK1qgcfbLXhwXMeZZGPDaROlv7ZFvmTNrXiopNNE5bG2oWa+RoBHmi5D0qxpaQhpe6/PN8prJTN9N40haVaztL2kWBRjpxbYxePhZy4pRaXWJPLcG6WSTRV0o9pitPFyXIujW7xPO3yilNMd0wZX24lECNyKUyoPJMiiJgN/q0/wYK2U09tGSNls4Cm80DXoxkmfYSdy15kYLi8DdtPB5PvbZQPfjfN+EnDWSrFJr47wq5XZKJP07Gjqz0fBJwUP1orwy5R/TMuAllI7VwRgL4J+2IkM3Dn281paarRYxpeMMWk4u9i0Hg8H3UVl8s8Q3rRosg+wriny5wsegCKb0uH2bxlTI5vSYr8ZfKEvcNbLABclkwG9JhS/xbN4M/29T3DgeRWRJpNBoGYJukjjl/oGD2ARjhnYU3hqw8C6WYFz1GeWJlPL922zAsfzwQu2NcigMGxfzBI8AEXLBR6FkxE3Of3IQoCzgcBPLcGX105bFgq8W4T/B/tloBIPNqWNAAAAAElFTkSuQmCC" />
                <div style="font-size:0.7rem;font-weight:100">
                    找回密码
                </div>
                <div></div>
            </div>
        </div>   
        <div class="loding_loding">
            <div>
                <div ref="div1" class="inp">
                    <input style="width:70%;font-size:0.5rem" v-on:blur="Loss" v-on:focus="Access" placeholder="请输入手机号" />
                    <span style="font-size:0.4rem;color:#FE7D2F">获取验证码</span>
                </div>
                <div ref="div3" class="inp">
                    <input style="font-size:0.5rem" v-on:blur="Loss2" v-on:focus="Access2" placeholder="请输入验证码" />
                </div>
                <div ref="div2" class="inp">
                    <input style="font-size:0.5rem" v-on:blur="Loss1" v-on:focus="Access1" placeholder="请输入密码" />
                </div>
                <button class="btn">确定</button>
            </div>
        </div>
    </div>    
</template>

<script>
export default {
    methods:{
        Access(){
            // window.console.log(123)
            this.$refs.div1.style.borderBottom = '1px solid #FE7D2F'
        },
        Loss(){
            this.$refs.div1.style.borderBottom = '1px solid lightgray'
        },
        Access1(){
            // window.console.log(123)
            this.$refs.div2.style.borderBottom = '1px solid #FE7D2F'
        },
        Loss1(){
            this.$refs.div2.style.borderBottom = '1px solid lightgray'
        },
        Access2(){
            // window.console.log(123)
            this.$refs.div3.style.borderBottom = '1px solid #FE7D2F'
        },
        Loss2(){
            this.$refs.div3.style.borderBottom = '1px solid lightgray'
        },
        back(){
            window.history.back()
        }
    }
}
</script>

<style scoped>
.simulation_header_wrap{
    width: 100%;
    height: 64px;
    /* background: pink; */
}
.simulation_header{
    position: fixed;
    top: 0rem;
    width: 100%;
    height: 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background: skyblue; */
}
.simulation_header img{
    height: 30%;
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