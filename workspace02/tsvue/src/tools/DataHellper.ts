// 负责db操作
class DataHelper {
    dataKey:string;//表名
    primaryKey:string;//主键
    dbName:string = "dataNames"
// 构造函数 --作用 ：为对象添加 各种属性
    constructor(dataKey:string,primaryKey:string){
        this.dataKey = dataKey;
        this.primaryKey = primaryKey;
    }
// 创建数据库，表
    initData(){
        // 打开数据库没有就创建数据库再打开
        const request = window.indexedDB.open(this.dbName);//如果要删除数据库：indexDB.deleteDatabase('数据库名');
        
        // 数据库版本升级事件
        request.onupgradeneeded =(e:any)=> {
            const db:any = e.target.result;//数据库实例对象
            var objectStore:any;
            //contain方法查看数据库表集合中是否存在某种表
            if (!db.objectStoreNames.contains(this.dataKey)) {
                //使用数据库实例的createObjectStore方法创建对象仓库(其实就是数据表),第一个参数字符串就是数据表名，第二个表示设置这个表中的id为主键(主键是唯一的，方便迅速索引查找)
                objectStore = db.createObjectStore(this.dataKey, { keyPath:this.primaryKey });//(表名,{keyPAth:主键})
                //使用createIndex为这个数据表添加索引（其实就是列名），三个参数分别是：列名，列名所在属性，配置对象(是否包含重复的值)
                objectStore.createIndex('content', 'content', { unique:true });
                // objectStore.createIndex('email', 'email', { unique: true });
            }
        };

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