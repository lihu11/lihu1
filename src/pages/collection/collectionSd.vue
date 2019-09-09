<template>
  <div>
    <div class="box-card" style="margin-bottom: 15px;">
      <el-row style="margin-bottom:15px;">
        <el-col :span="24" style="text-align: right;">
          <el-button size="mini" type="warning">人员添加</el-button>
        </el-col>
      </el-row>
      <el-form :inline="true" class="demo-form-inline" ref='form' :model="form">
        <el-form-item label="分单组">
          <el-select  placeholder="全部" size="mini" v-model="form.a">
             <el-option label="" value="shanghai"></el-option>
             <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="催收人员">
          <el-select  placeholder="全部" size="mini" v-model="form.d">
             <el-option label="居杰涛" value="1"></el-option>
             <el-option label="齐康星" value="2"></el-option>
             <el-option label="汪武新" value="3"></el-option>
             <el-option label="姜元全" value="4"></el-option>
             <el-option label="陈栋" value="5"></el-option>
             <el-option label="彭彬" value="6"></el-option>
             <el-option label="赵启" value="7"></el-option>
             <el-option label="居强军" value="8"></el-option>
          </el-select>
        </el-form-item>
        <el-button type="warning" size="mini">查询</el-button>
      </el-form>
    </div>
    <div class="order-table">
          <el-table
              height="480px"
              size='mini'
              border
              style="width: 100%"
              >
              <el-table-column
                    type="selection"
                    width="55">
                  </el-table-column>
              <el-table-column
                prop="id"
                label="序号"
               >
              </el-table-column>
              <el-table-column
                prop="order_id"
                label="分单组名称">
              </el-table-column>
              <el-table-column
                prop="username"
                label="催收人">
              </el-table-column>
              <el-table-column
                prop="phone"
                label="分配比例(%)">
                <el-input value='0' size="mini" style="width: 50%;"></el-input>%
              </el-table-column>
              <el-table-column
                prop="loan_day"
                label="添加时间">
              </el-table-column>
              <el-table-column
                prop="order_status"
                label="修改时间"
               >
              </el-table-column>
              <el-table-column
                prop="arrival_amount"
                label="操作">
                <template slot-scope="scope">
                    <el-button type="warning" size="mini">编辑</el-button>
                     <el-button type="danger" size="mini">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
        </div>
        <div class="pageBox">
          <el-pagination
          background
          :page-size="10"
          layout="total, sizes, prev, pager, next, jumper"
          :total="0">
        </el-pagination>
        </div>
  </div>
</template>

<script>
  export default{
    name: 'collectionSd',
    data(){
      return{
        //form
        form:{
          a:'',
          b:'',
          c:'',
          d:'',
          e:'',
          f:'',
          g:''
        },
    }
    }
  }

</script>

<style>
</style>
