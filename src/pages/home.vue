<template>
  <div class="container">

    <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
    <el-form-item label="日期">
     <el-date-picker
      v-model="timeRange"
      type="daterange"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      default-value="2010-10-01">
    </el-date-picker>
  </el-form-item>
  </el-form>
  </div>
  
</template>
<script type="text/javascript">
export default {
  name: 'home',
  data() {
    return {
      timeRange:''
    }
  }
}
</script>
<style>
/* .app-container .app-body {
  background-color: red;
} */

  .container{
    background-color: #ffffff;
    width: 100%;
    height: 100%;
    padding: 20px;
  }

  .test{
    height: 40px;
    background: #ccc;
    margin-bottom: 15px;
  }
</style>
