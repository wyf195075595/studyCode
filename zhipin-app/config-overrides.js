// const { override, fixBabelImports } = require('customize-cra');
const {override, fixBabelImports, addLessLoader} = require('customize-cra');
module.exports = override(
    // 按需引入
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        style: 'css',
    }),
    // 自定义样式失败
    addLessLoader({ 
        javascriptEnabled: true, 
        modifyVars: {'@primary-color': '#1cae82'},

        // modifyVars: {
        //     '@brand-primary': '#1cae82',
        //     '@brand-primary-tap': '#1DA57A',
        // },
    }),
);
