// 负责db操作
class DataHelper {
    dataKey:string;
    primaryKey:string;
// 构造函数 --作用 ：为对象添加 各种属性
    constructor(dataKey:string,primaryKey:string){
        this.dataKey = dataKey;
        this.primaryKey = primaryKey;
    }
// 读取本地数据，返回数组
    readData(){

    }
// 新增数据对象-返回自动生成id
    addData(){

    }
// 存入本地数据
    saveData(){

    }
// 根据id删除数据对象，返回布尔值
    removeDataById(){

    }
}

export default DataHelper