<template>
  <div class="host-container">
    <tips :tips="tips" />
    <div class="box-shadow">
      <el-table :data="hosts" style="width: 100%">
        <el-table-column prop="name" label="名称" width="180">
        </el-table-column>
        <el-table-column prop="sync_at" label="同步时间" width="180">
          <template slot-scope="scope">
            {{ scope.row.sync_at | parseTime }}
          </template>
        </el-table-column>
        <el-table-column prop="description" label="描述"> </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import Tips from "@/components/Tips";
const tips = ["现在仅支持同步主机资产"];
export default {
  name: "Host",
  components: { Tips },
  data() {
    return {
      tips: tips,
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.box-shadow {
  margin: 12px 0;
}
</style>