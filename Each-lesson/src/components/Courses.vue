<template>
    <div>
        <div class="courses_header_wrap">
            <div class="courses_header">
                <img @click="back" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAwCAYAAAAGlsrkAAADgUlEQVRYR8XY+6ulUxzH8dcYYsglGteI/OASpsYPrkXKdRq5TogIM5Mf5D8RPx23URTygzCuTcYouSU1Ipo0buMSEWJCGPpMa9eeZ9az97P3efbxrdM5nf3s9V7ftb6Xz/dZ5H+yRQvEPQCnIb8/wdaFAAe2GidjL/yMuVmC98BRuAtHNk723VmB98T5uAIHV65z8yzA8fQ6XIAlaDL+nMVRH4JbcHpL0G7H09jQp8cnFU+PR7xu2md4Bu9hRx/grJH7vAYHVY72X7yPx/D1YDfzBe+NFViJ/N20vwr0Afw2/OF8wEfgSpxR8rMJ/REv4hVkA7vYtOATcROOrRxtACkS9+ND/FMLtEnBixHoHS35Gcg23IPvR5XjScAH4kJchn1a7vNVrMdP43pAV/C+uL3kZ+pt0/7G43gNf4yD5vNx4Hx+GO7EcZUFkyo/4OESvV2YO58ZBc59noOrcGjLigmeJ/EpsonO1gbO/5MqlyLH3HwuQbSxlL9fOtOGHqyBU31uxNktC/6O58vPbvnZdRNNcOrs9TgBOeqmfVXq7Ttt+TkN+CzcUPKzuaHc38d4FF92XXxcHqdpX4yrW/IzqfIR7isVqQ/uzqBJUYintSKfQrABLyMNvDcL+F4srayYbpKushnxulcL+G4cXlk10ZvCkECaCfhc3Iz9KvBIlU14Dr/26XI8TtpEmK1qgcfbLXhwXMeZZGPDaROlv7ZFvmTNrXiopNNE5bG2oWa+RoBHmi5D0qxpaQhpe6/PN8prJTN9N40haVaztL2kWBRjpxbYxePhZy4pRaXWJPLcG6WSTRV0o9pitPFyXIujW7xPO3yilNMd0wZX24lECNyKUyoPJMiiJgN/q0/wYK2U09tGSNls4Cm80DXoxkmfYSdy15kYLi8DdtPB5PvbZQPfjfN+EnDWSrFJr47wq5XZKJP07Gjqz0fBJwUP1orwy5R/TMuAllI7VwRgL4J+2IkM3Dn281paarRYxpeMMWk4u9i0Hg8H3UVl8s8Q3rRosg+wriny5wsegCKb0uH2bxlTI5vSYr8ZfKEvcNbLABclkwG9JhS/xbN4M/29T3DgeRWRJpNBoGYJukjjl/oGD2ARjhnYU3hqw8C6WYFz1GeWJlPL922zAsfzwQu2NcigMGxfzBI8AEXLBR6FkxE3Of3IQoCzgcBPLcGX105bFgq8W4T/B/tloBIPNqWNAAAAAElFTkSuQmCC" />
                <div>课程详情</div>
                <img src="data:image/png;base64,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" />
            </div>
        </div>
        <div class="courses_title">
            <div class="courses_title_left">
                <div>{{title}}</div>
                <div style="color:orange">{{price | mf}}</div>
                <div style="color:lightgray">
                    <span>共{{total_periods}}课时</span>
                    |
                    <span>{{sales_num}}人已报名</span>
                </div>
            </div>
            <div class="courses_title_right">
                <span class="iconfont icon-shoucang1" style="font-size: 0.7rem;"></span>
            </div>
        </div>

        <div class="courses_img">
            <div>教学团队</div>
            <div class="courses_img_item" v-for="(item,index) in teacher" :key="index">
                <img :src="item.teacher_avatar" />
                <div style="font-size:0.3rem;color:gray">{{item.teacher_name}}</div>
            </div>
        </div>

        <div class="courses_Introduction">
            <div>课程介绍</div>
            <div style="font-size:0.37rem" v-html="this.course_details"></div>
        </div>

        <div class="courses_Introduction">
            <div>课程大纲</div>
            <div class="courses_Introduction_dian">
                <div style="font-size:0.8rem;margin-top:-0.3rem;color:orange">.</div>
                <div style="font-size:0.35rem" v-html="this.course_details"></div>
            </div>
        </div>

        <div class="courses_Comments">
            <div style="margin-top:0.5rem">课程评论</div>
            <div v-if="this.CommentsList.length == 0">
                <div class="img">
                    <img src="https://wap.365msmk.com/img/empty.0d284c2e.png" />
                    <div style="color:gray;font-size:0.35rem">暂无评论</div>
                </div>
            </div>
            <div v-else>
                <div v-for="(item,index) in CommentsList" :key="index" class="courses_Comments_item">
                    <div class="courses_Comments_item_img">
                        <img :src="item.avatar" />
                    </div>
                    <div class="courses_Comments_item_mobile">
                        <div class="courses_Comments_item_mobile_top">
                            <span>{{item.nickname}}</span>
                            <span style="color:#EB6100">
                                <span class="iconfont icon-xingxing"></span>
                                <span class="iconfont icon-xingxing"></span>
                                <span class="iconfont icon-xingxing"></span>
                                <span class="iconfont icon-xingxing"></span>
                                <span class="iconfont icon-xingxing"></span>
                            </span>
                            <span style="color:lightgray">{{item.created_at | time}}</span>
                        </div>
                        <div style="font-size:0.3rem;color:gray">
                            {{item.content}}
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="courses_footer"> 
            立即报名
        </div>

    </div>
</template>

<script>
export default {
    data(){
        return{
            title:'',
            price:0,
            total_periods:0,
            sales_num:0,
            teacher:[],
            course_details:'',
            CommentsList:[]
        }
    },
    mounted(){
        this.getCourses()
        this.Comments()
    },
    methods:{
        async getCourses(){
            let { data } = await this.http.get(`/api/app/courseInfo/basis_id=${this.$route.query.id}`)
            this.title = data.data.info.title
            this.price = data.data.info.price
            this.total_periods = data.data.info.total_periods
            this.sales_num = data.data.info.sales_num
            this.teacher = data.data.teachers
            this.course_details = data.data.info.course_details
            window.console.log(data.data)
        },
        back(){
            window.history.back()
        },
        async Comments(){
            let {data:res} = await this.http.post('/api/app/courseComment',{id:this.$route.query.id,limit:10,page:1})
            window.console.log(res)
            this.CommentsList = res.data.list
        }
    },
    filters:{
        mf(value){
            if(value == 0){
                return "免费"
            }else{
                return (value/100).toFixed(2)
            }
        },
        time(value){
            let date = Number(value)
            var time = new Date(date).toLocaleString()
            return time
        }
    }
}
</script>

<style scoped>
.courses_header_wrap{
    width: 100%;
    height: 101px;
}
.courses_header{
    position: fixed;
    top: 0rem;
    width: 100%;
    height: 100px;
    border-bottom: 1px solid lightgray;
    font-size: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: white;
}
.courses_header img{
    height: 30%;
    margin: 0rem 0.4rem;
}
.courses_title{
    width: 100%;
    height: 3.5rem;
    display: flex;
    margin-bottom: 0.5rem;
    background: white;
}
.courses_title_left{
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    width: 85%;
    height: 100%;
    font-size: 0.45rem;
    /* background: red; */
    padding-left:5%;
}
.courses_title_right{
    width: 10%;
    height: 100%;
    /* background: yellow; */
}
.courses_img{
    width: 95%;
    height: 3.5rem;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    margin-bottom: 0.5rem;
    font-size: 0.4rem;
    background: white;
    padding-left: 5%;
}
.courses_img_item{
    width: 100%;
    height: 50%;
}
.courses_img_item img{
    width: 10%;
    height: 50%;
    border-radius: 50%;
}
.courses_Introduction{
    width: 90%;
    height: 3rem;
    background: white;
    margin-bottom: 0.5rem;
    font-size: 0.4rem;
    padding:0rem 5%;
    display: flex;
    justify-content: space-around;
    flex-direction:column;
}
.courses_Introduction_dian{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.courses_Comments{
    width: 90%;
    background: white;
    margin-bottom: 1.5rem;
    font-size: 0.4rem;
    padding:0rem 5%;
    display: flex;
    justify-content: space-around;
    flex-direction:column;
}
.courses_Comments_item{
    width: 100%;
    height: 1.7rem;
    display: flex;
    background: white;
}
.courses_Comments_item_img{
    width: 15%;
    height: 100%;
    display: flex;
    justify-content: center;
    /* background: red; */
}
.courses_Comments_item_img img{
    width: 50%;
    height: 40%;
    border-radius: 50%;
}
.courses_Comments_item_mobile{
    width: 85%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    /* background: yellow; */
}
.courses_Comments_item_mobile_top{
    width: 100%;
    font-size: 0.3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.courses_footer{
    position: fixed;
    bottom: 0rem;
    width: 100%;
    height: 1.2rem;
    font-size: 0.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background: #EB6100;
}
.img{
    width: 100%;
    height: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.img img{
    height: 70%;
}

</style>