<template>
  <div>
    <div class="box-card" style="margin-bottom: 15px;">
      <el-row style="margin-bottom:15px;">
        <el-col :span="24" style="text-align: right;">
          <el-button size="mini" type="warning">人员添加</el-button>
        </el-col>
      </el-row>
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item label="分单组">
          <el-select  placeholder="全部" size="mini">
             <el-option label="区域一" value="shanghai"></el-option>
             <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="催收人员">
          <el-select  placeholder="全部" size="mini">
             <el-option label="区域一" value="shanghai"></el-option>
             <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-button type="warning" size="mini">查询</el-button>
      </el-form>
    </div>
    <div class="order-table">
          <el-table
              :data='tableData'
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
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400">
        </el-pagination>
        </div>
  </div>
</template>

<script>
  export default{
    name: 'collectionSd',
    data(){
      return{
      tableData:[
        {
          id: '1',
          order_id: '110011',
          username: '张三',
          phone: '15070634344',
          loan_day: 7,
          order_status: '风控不通过',
          is_show: '否',
          loan_money: '5000'
        }
      ]
    }
    }
  }

</script>

<style>
</style>
