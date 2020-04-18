const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')//导入在内存中自动生成index页面的插件

//创建插件的实例对象
const htmlPlugin = new HtmlWebpackPlugin({
    template:path.join(__dirname , './src/index.html'),//源文件
    filename:'index.html' //生成内存中首页的名称
})

module.exports = {
    mode:'development' ,  //production(压缩版)-development（不压缩）
    plugins:[//插件
        htmlPlugin
    ],
    module:{//所有第三方模块配置规则
        rules:[//第三方匹配规则
            {test:/\.js|jsx$/,use:'babel-loader',exclude:/node_modules/},//别忘记exclude排除项
            //css-loader后面可以通过？追加参数，其中固定参数 modules 表示普通css样式表，启用模块化
            //其他参数 loaclIdentName； [path](相对根目录) [name](样式表文件名) [local](样式类名定义名称) [hash:length](32位hash值)
            //eg : 'css-loader?modules&localIdentName=[path][name]-[local]-[hash:5]'
            // 需求：只对自己写的样式进行模块化，引入的第三方样式不需要（如bootstrapcss）,有因为第三方样式一般都是.css文件
            // 所以为了区分，我们自己的样式采用 .scss/.less 结尾
            // {test:/\.scss$/,use:[
            //     'style-loader',
            //     'scss-loader',
            //     {loader: "css-loader",
            //         options: {
            //             modules: {
            //                 localIdentName: "[path][name]-[local]-[hash:5]"
            //             }
            //         }
            //     }
            // ]},
            {test:/\.css$/,use:[
                'style-loader',
                {loader: "css-loader",
                    options: {
                        modules: {
                            localIdentName: "[path][name]-[local]-[hash:5]"
                        }
                    }
                }
            ]},//打包处理css样式表
           {test:/\.ttf|.woff|.woff2|.eot|svg$/,use:'url-loader'},//打包处理字体文件的loader，依赖file-loader
        ]
    },
    resolve:{
        extensions:['.js','.jsx','.json'], //表示这几个文件的后缀名可省略不写
        alias:{//表示别名
            '@':path.join(__dirname,'src'),//这样， @ 表示项目中的根目录src的这一层路径
        }
    }
}
//ERROR in Entry module not found: Error: Can't resolve './src' in 'D:\vscode\workSpace\webpacktest'
//默认打包入口文件 ./src/index.js  
//默认打包出口文件 /dist/main.js  