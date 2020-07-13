<template>
    <div>
        <div class="details_header">
            <img @click="back" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAPCAYAAADd/14OAAAA/ElEQVQoU33RsUvWYRTF8c8hQmgIE4e2IFDQIfCPcHGIlBpqcWtPcFHBFgWdHGxykURxUtfWZkfHtkZBCBzcrjzxe+P9ha/P9sD33nPuOfHIq6pJnOBZRnFVNYdzvML+g2BVfcIBnuJLkm89sKqeYAcruMaHJD+b6j+wqiZwinlcYinJ74G1v2BVven8vMYRPie5G/afqnqPQ4xhNcneQwc28AYvsJ1kfVQKDVzAMZ5jE1tJ6v+BgcdpXGAGZ1hOctvzOPhUVdvYDnmLKywm+dW7eghuCl+xgT/4mORHL8dhmap6h++tY6wl2X2s69nO91SLbyTYFTHebX55D93jTsSH0JDDAAAAAElFTkSuQmCC" />
            <div style="font-size:0.5rem;margin-top:0.2rem;color:white">讲师详情</div>
            <div></div>
        </div>
        <div class="details_tearch">
            <div class="details_tearch_img">
                <img :src="this.$route.query.img" />
            </div>
            <div class="details_tearch_tearch">
                <div style="margin-top:0.7rem"><span>{{this.$route.query.teacher_name}}</span> <span style="font-size:0.3rem;color:#EB6100">{{this.$route.query.level_name}}</span></div>
                <div style="font-size:0.35rem;margin-top:0.2rem;color:gray"><span>{{this.$route.query.sex | sex}}</span> <span>{{this.$route.query.teach_age}}年教龄</span></div>
            </div>
            <div class="details_tearch_img">
                <button @click="concerns">{{concern}}</button>
            </div>
        </div>
        <div class="details_content">
            <div class="details_content_top">
                <div :class="this.sel == '讲师介绍' ? 'sel' : 'aa' " @click="selClick('讲师介绍')">讲师介绍</div>
                <div :class="this.sel == '主讲课程' ? 'sel' : 'aa' " @click="selClick('主讲课程')">主讲课程</div>
                <div :class="this.sel == '学员评价' ? 'sel' : 'aa' " @click="selClick('学员评价')">学员评价</div>
            </div>
            <div v-if="this.sel == '讲师介绍' ">
                <div class="jian_nav">
                    <p v-for="(item,index) in list" :key="index">
                        <span class="jian_left">
                            <span v-if="item.attr_name == '年级'"></span>
                            <span v-else-if="item.attr_name == '学科'"></span>
                            <span v-else>{{item.attr_name}}</span>
                        </span>
                        <span class="jian_right" v-for="(v,i) in item.attr_value" :key="i"> 
                                <span v-if="item.attr_name == '年级'"></span>
                                <span v-else-if="item.attr_name == '学科'"></span>
                                <span v-else>{{v.attr_value_name}}</span>
                        </span>
                    </p>
                    <p>
                        <span class="jian_left">老师简介</span>
                        <span class="jian_navs">{{obj.intro}}</span>
                    </p>
                </div>
            </div>
            <div v-if="this.sel == '主讲课程' " style="background: #f0f2f5;overflow:hidden">
                <div v-for="(item,index) in lectureList" :key="index" class="details_lecture">
                    <div></div>
                    <div>{{item.title}}</div>
                    <div></div>
                    <div v-for="(v,i) in item.teachers_list" :key="i" class="details_lecture_img">
                        <img :src="v.teacher_avatar" />
                        <div style="font-size:0.3rem;color:gray">{{v.teacher_name}}</div>
                    </div>
                    <div class="details_lecture_price">
                        <div style="font-size:0.35rem;color:gray">{{item.sales_num}}人已报名</div>
                        <div style="font-size:0.35rem;color:green">{{item.price | price}}</div>
                    </div>
                </div>
            </div>
            <div v-if="this.sel == '学员评价' " class="details_studentEvaluation">
                <img src="https://wap.365msmk.com/img/empty.0d284c2e.png" />
                <div style="font-size:0.4rem;color:gray;margin-top:0.5rem">暂无评论</div>
            </div>
        </div>
        <div class="details_footer">
            立即预约
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            sel:'讲师介绍',
            obj:{},
            list:[],
            lectureList:[] ,
            concern:'关注'
        }
    },
    mounted(){
        this.getDetails()
        this.getLecture()
    },
    methods:{
        async getDetails(){
            let { data:res } = await this.http.get(`/api/app/teacher/info/${this.$route.query.id}}`)
            window.console.log(res)
            this.obj = res.data
            this.list =res.data.attr
            },
        async getLecture(){
            let {data:res} = await this.http.post('/api/app/teacher/mainCourse')
            this.lectureList = res.data.list
        },

        selClick(s){
            this.sel = s
        },
        back(){
            window.history.back()
        },
        async concerns(){
            let {data} = await this.http.get(`/api/app/teacher/collect/${this.$route.query.id}`)
            window.console.log(data)
            if(data.data.flag != 0){
                this.concern = '已关注'
            }else{
                this.concern = '关注'
            }
        }
    },
    filters:{
        sex(value){
            if(value == 0){
                return '男'
            }else{
                return '女'
            }
            return sex
        },
        price(value){
            if(value == 0){
                return '免费'
            }else{
                return `￥${(value/100).toFixed(2)}`
            }
        }
    }
}
</script>

<style>
.details_header{
    width: 100%;
    height: 2.7rem;
    display: flex;
    justify-content: space-between;
    background: #5DA6F6;
    margin-bottom: 1.2rem;
}
.details_header img{
    height: 15%;
    margin-top:0.3rem;
}
.details_tearch{
    position: absolute;
    top: 1.1rem;
    left: 4%;
    width: 92%;
    height: 2.5rem;
    background: white;
    border-radius: 10px;
    display: flex;
    font-size: 0.4rem;
}
.details_tearch_img{
    width: 20%;
    height: 100%;
    /* background: red; */
    display: flex;
    justify-content: center;
    align-items: center;
}
.details_tearch_img img{
    width: 60%;
    height: 45%;
    border-radius: 50%;
}
.details_tearch_img button{
    width: 80%;
    height: 30%;
    border-radius: 40px;
    border: none;
    outline: none;
    font-size: 0.3rem;
    color:#EB6100 ;
    background: #f0f2f5;
}
.details_tearch_tearch{
    width: 60%;
    height: 100%;
    /* background: yellow; */
}
.details_content{
    background: white;
    margin-bottom:100px ;
}
.details_content_top{
    width: 100%;
    height: 1.3rem;
    border-bottom: 1px solid lightgray;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 0.4rem;
    color:gray
}
.details_content_top>div{
    height: 90%;
    display: flex;
    align-items: center;
}
.aa{
    border-bottom: 1px solid #f0f2f5;
}
.sel{
    color: #EB6100;
    border-bottom: 1px solid #EB6100;
}
.jian_nav{
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    /* padding: 0.2rem 0rem 0rem 0.4rem; */
}
.jian_nav p{
    width: 100%;
    display: flex;
    justify-content: space-around;
}
.jian_left{
    width: 20%;
    font-size:0.4rem;
    color:gray;
    line-height: 1.5rem;
}

.jian_right{
    width: 70%;
    font-size:0.4rem;
    color:gray;
    line-height: 1.4rem;
}
.jian_navs{
    width: 70%;
    font-size:0.36rem;
    color:gray;
    line-height: 0.8rem;
    margin-left: -0.2rem;
}
.details_footer{
    position: fixed;
    bottom: 0rem;
    width: 100%;
    height: 95px;
    background:#EB6100 ;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 0.4rem;
}
.details_lecture{
    width: 100%;
    height: 6rem;
    background: white;
    border-radius: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    margin-top: 0.2rem;
}
.details_lecture>div{
    width: 90%;
    padding:0 5%;
    font-size: 0.4rem;
}
.details_lecture_img{
    width: 100%;
    height: 25%;
    display: flex;
    align-items: center;
    /* background: red; */
    border-bottom: 1px solid lightgray;
}
.details_lecture_img img{
    width: 8%;
    height: 50%;
    margin-right:0.5rem;
    border-radius: 50%;
}
.details_lecture_price{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.details_studentEvaluation{
    width: 100%;
    height: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    flex-direction: column;
}
.details_studentEvaluation img{
    height: 60%;
}
</style>