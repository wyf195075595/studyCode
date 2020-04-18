<style lang="css">
  .editor {
    width: 100%;
    margin: 0 auto;
    position: relative;
    z-index: 0;
  }
  .toolbar {
    border: 1px solid #ccc;
  }
  .text {
    border: 1px solid #ccc;
    min-height: 400px;
  }
</style>
<template lang="html">
  <div class="editor">
    <div ref="toolbar" class="toolbar"></div>
    <div ref="editor"  class="text"></div>
  </div>
</template>

<script>
  import E from 'wangeditor'
  export default {
    name: 'editoritem',
    data() {
      return {
        editor: null,
        info_: null,
        picList:[],
      }
    },
    props:{
      value:{
        type:String,
        default:''
      }

    },
    watch: {
      value(val){
        // 使用v-model时设置初始值
        this.editor.txt.html(val)
      }
    },
    mounted() {
      this.seteditor()
    },
    methods: {
      seteditor() {
        this.editor = new E(this.$refs.toolbar, this.$refs.editor)
        this.editor.customConfig.uploadImgShowBase64 = false // base 64 存储图片
        this.editor.customConfig.uploadImgServer = 'http://106.54.247.250:4000/blog/upload'// 配置服务器端地址 106.54.247.250:3000
        this.editor.customConfig.uploadImgHeaders = { }// 自定义 header
        this.editor.customConfig.uploadFileName = 'file' // 后端接受上传文件的参数名
        this.editor.customConfig.uploadImgMaxSize = 2 * 1024 * 1024 // 将图片大小限制为 2M
        this.editor.customConfig.uploadImgMaxLength = 6 // 限制一次最多上传 6 张图片
        this.editor.customConfig.uploadImgTimeout = 3 * 60 * 1000 // 设置超时时间
        // 配置菜单
        this.editor.customConfig.menus = [
          'head', // 标题
          'bold', // 粗体
          'fontSize', // 字号
          'fontName', // 字体
          'italic', // 斜体
          'underline', // 下划线
          'strikeThrough', // 删除线
          'foreColor', // 文字颜色
          'backColor', // 背景颜色
          'link', // 插入链接
          'list', // 列表
          'justify', // 对齐方式
          'quote', // 引用
          'emoticon', // 表情
          'image', // 插入图片
          'table', // 表格
          'video', // 插入视频
          'code', // 插入代码
          'undo', // 撤销
          'redo', // 重复
          'fullscreen' // 全屏
        ]
        // 上传图片设置
        this.editor.customConfig.uploadImgHooks = {
          customInsert: (insertImg, result, editor) => {
            // 图片上传成功，插入图片的回调
            //insertImg()为插入图片的函数106.54.247.250
            // console.log(result.data)
            for(let i=0 ; i < result.data.length ; i++ ){
              let url = "http://106.54.247.250:4000/uploadImg/"+result.data[i].filename
              // console.log(url)
              this.picList.push(result.data[i].filename)
              insertImg(url)
            }
              // console.log(this.picList)
              this.$emit('getpics',this.picList)//把上传图片路径返回到父级

          }
        }
        // 用户操作（鼠标点击、键盘打字等）导致的内容变化之后，会自动触发onchange函数执行
        var that = this;
        this.editor.customConfig.onchange=function(html){
            // html 即变化之后的内容
              that.info_ = html //绑定当前值
              that.$emit('getval',that.info_)//把内容返回到父级
        }
        // 创建富文本编辑器
        this.editor.create()
      }
    }
  }
</script>

