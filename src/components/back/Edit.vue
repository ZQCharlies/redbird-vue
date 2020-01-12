<template>
    <el-form ref="articleForm" :model="articleForm" label-width="80px">
      <el-form-item label="标题">
        <el-input v-model="articleForm.title"></el-input>
      </el-form-item>
      <el-form-item label="摘要">
        <el-input v-model="articleForm.abscontent"></el-input>
      </el-form-item>
      <el-form-item label="内容">
        <ckeditor :editor="editor" v-model="articleForm.content" :config="editorConfig"></ckeditor>
      </el-form-item>
      <el-form-item label="分类">
        <el-select v-model="articleForm.category" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标签">
        <el-tag
          :key="tag"
          v-for="tag in articleForm.tage"
          closable
          :disable-transitions="false"
          @close="handleClose(tag)"
        >{{tag}}</el-tag>
        <el-input
          class="input-new-tag"
          v-if="inputVisible"
          v-model="inputValue"
          ref="saveTagInput"
          size="small"
          @keyup.enter.native="handleInputConfirm"
          @blur="handleInputConfirm"
        ></el-input>
        <el-button v-else class="button-new-tag" size="small" @click="showInput">NewTag</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm()" :disabled="flag">发表</el-button>
        <el-button @click="saveForm()">保存</el-button>
      </el-form-item>
    </el-form>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import request from "../../network/request";
export default {
  data() {
    return {
      articleForm: {
        title: "",
        abscontent: "",
        content: "",
        category:"",
        tage: []
      },
      options: [],
      flag:false,
      editor: ClassicEditor,
      editorConfig: {},
      //标签
      inputVisible: false,
      inputValue: ""
    };
  },
  methods: {
    //标签
    handleClose(tag) {
      this.articleForm.tage.splice(this.articleForm.tage.indexOf(tag), 1);
    },
    showInput() {
      this.inputVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.articleForm.tage.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = "";
    },
    // 表单
    submitForm() {
      request({
        method: "post",
        url: "/article",
        data: {
          title: this.articleForm.title,
          abscontent: this.articleForm.abscontent,
          content: this.articleForm.content,
          category:this.articleForm.category,
          tage: this.articleForm.tage + ""
        }
      });
      this.flag = true;
    },
    saveForm() {
      request({
        method: "put",
        url: "/article",
        data: {
          title: this.articleForm.title,
          abscontent: this.articleForm.abscontent,
          content: this.articleForm.content,
          tage: this.articleForm.tage + ""
        }
      });
    }
  },
  created(){
     request({
        method:"get",
        url:"/category"
      })
      .then(res=>{
        this.options = res.data.jsonArray;
      })
  },
  watch: {
    articleForm: function() {
      alert("数据已改变");
    }
  }
};
</script>
<style scoped>
@import url("//unpkg.com/element-ui@2.13.0/lib/theme-chalk/index.css");
.ck-editor__editable {
  min-height: 350px;
}
.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
.el-form-item {
  text-align: left;
}
</style>