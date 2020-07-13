<template>
<div>
    <form action="/">
  <van-search
    v-model="value"
    show-action
    placeholder="请输入内容"
    @cancel="onCancel"
  />
  <div class="ls">
      <div>
          历史搜索
      </div>
      <div>
          <van-icon name="delete" />
      </div>
  </div>
    </form>
</div>
  
</template>

<script>
export default {
methods:{
    onCancel(){
        this.$router.go(-1)
        //点击取消
    }
}
}
</script>

<style lang="less" scoped>
.ls{
    display:flex;
    align-items: center;
    justify-content:space-between;
    line-height:100px;
}
</style>