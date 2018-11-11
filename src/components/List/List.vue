<template>
  <div class="list">
    <el-container>
      <el-header height="80px">
        <el-row>
          <el-col :span="24" class="text-center" @click.native="removeItem()">TODO-LIST</el-col>
        </el-row>
        <el-row>
          <el-col :span="16">
            <el-input v-model="userInput" placeholder="请输入内容" clearable @keyup.enter.native="setItem()"></el-input>
          </el-col>
          <el-col :span="8" class="text-center">
            <el-button type="primary" icon="el-icon-edit" @click="setItem()">留言</el-button>
          </el-col>
        </el-row>
      </el-header>

      <el-main>
        <el-table border stripe :data="tableData" width="100%" class="text-center">
          <el-table-column type="selection"></el-table-column>
          <el-table-column type="index" label="序号" ></el-table-column>
          <el-table-column prop="time" label="存储时间" width="100"></el-table-column>
          <el-table-column prop="text" label="内容" width="300">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top">
                <p>留言时间:&nbsp;&nbsp;&nbsp;&nbsp;{{ scope.row.time }}</p>
                <hr>
                <p>留言内容:&nbsp;&nbsp;&nbsp;&nbsp;{{ scope.row.text }}</p>
                <div slot="reference" class="name-wrapper">
                  <el-tag size="medium">{{ scope.row.text }}</el-tag>
                  <!-- <el-tag size="medium">蔡锦涛</el-tag> -->
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="">
            <template slot-scope="scope">
              <el-button size="mini" @click="editClick(scope.row)">edit</el-button><el-button type="danger" size="mini" @click="delItem(scope)">del</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
    <el-button type="danger">delate</el-button>
  </div>
</template>

<script>
import LocalStorage from '@/localstorage/index.js'
export default {
  name: 'List',
  data () {
    return {
      userInput: '',
      tableData: [
        // {
        //   time: '2016-05-03',
        //   text: '上海市普陀区金沙江路 1518 弄ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss',
        //   idx: 333
        // },
        // {
        //   time: '2016-05-03',
        //   text: '上海市普陀区金沙江路 1518 弄',
        //   idx: 22
        // },
        // {
        //   time: '2016-05-03',
        //   text: '上海市普陀区金沙江路 1518 弄',
        //   idx: 3
        // },
        // {
        //   time: '2016-05-03',
        //   text: '上海市普陀区金沙江路 1518 弄',
        //   idx: 4
        // },
        // {
        //   time: '2016-05-03',
        //   text: '上海市普陀区金沙江路 1518 弄',
        //   idx: 5
        // },
        // {
        //   time: '2016-05-03',
        //   text: '上海市普陀区金沙江路 1518 弄',
        //   idx: 6
        // },
        // {
        //   time: '2016-05-03',
        //   text: '上海市普陀区金沙江路 1518 弄',
        //   idx: 7
        // }
      ]
    }
  },
  mounted () {
    this.getItem()
  },
  methods: {
    ent () {
      alert(1)
    },
    getItem () {
      this.tableData = LocalStorage.getItem()
    },
    setItem () {
      if (!this.userInput) return
      LocalStorage.setItem({
        time: '22',
        text: this.userInput,
        idx: '2'
      })
      this.userInput = ''
      this.getItem()
    },
    delItem (n) {
      LocalStorage.delItem(n.$index)
      this.getItem()
    },
    removeItem () {
      LocalStorage.removeItem()
      this.getItem()
    },
    editClick (n) {
      console.log(n)
    }
  }
}
</script>

<style scoped lang="less">
.content-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.text-center {
  text-align: center;
}
.list {
  height: 100%;
}
.el-container {
  height: 100%;
  display: flex;
  justify-content: space-around;
  .el-header {
    width: 100%;
    background: rgb(195,222,183);
    .el-col-24 {
      height: 34px;
      line-height: 34px;
      font-size: 24px;
    }
  }
  .el-main {
    flex: 1;
    padding: 0 !important;
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
    .el-table__header-wrapper {
      height: 50px !important;
    }
  }
}
</style>
