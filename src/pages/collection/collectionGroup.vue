<template>
  <div>
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
                label="分单组ID"
               >
              </el-table-column>
              <el-table-column
                prop="order_id"
                label="分单客群">
              </el-table-column>
              <el-table-column
                prop="username"
                label="分单组名称">
              </el-table-column>
              <el-table-column
                prop="phone"
                label="最长逾期下限(天)">
              </el-table-column>
              <el-table-column
                prop="loan_day"
                label="最长逾期上限(天)">
              </el-table-column>
              <el-table-column
                prop="order_status"
                label="分单状态"
               >
              </el-table-column>
              <el-table-column
                prop="is_show"
                label="添加时间">
              </el-table-column>
              <el-table-column
                prop="loan_money"
                label="修改时间">
              </el-table-column>
              <el-table-column
                prop="arrival_amount"
                label="操作">
                <template slot-scope="scope">
                    <el-button type="warning" size="mini">编辑</el-button>
                     <el-button type="warning" size="mini">删除</el-button>
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
    name:'collectionGroup',
    data(){
      return{
    }
    }
  }
</script>

<style>
</style>
