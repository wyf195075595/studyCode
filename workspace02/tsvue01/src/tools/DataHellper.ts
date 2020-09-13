// 负责db操作
class DataHelper {
    dataKey:string;//表名
    primaryKey:string;//主键
    dbName:string = "dataNames";//数据库名
    db:any = null;//拿到数据库实例对象，其中包含了对数据库表的的创建编辑等功能
// 构造函数 --作用 ：为对象添加 各种属性
    constructor(dataKey:string,primaryKey:string){
        this.dataKey = dataKey;
        this.primaryKey = primaryKey;
    }
// 创建数据库，表
    initData(callback:any = null){
        // 打开数据库没有就创建数据库再打开
        const request = window.indexedDB.open(this.dbName);//如果要删除数据库：indexDB.deleteDatabase('数据库名');
        
        // 数据库版本升级事件
        request.onupgradeneeded =(e:any)=> {
            this.db = e.target.result;//数据库实例对象
            var objectStore:any;
            console.log('数据库初始化',this.db);
            
            //contain方法查看数据库表集合中是否存在某种表
            if (!this.db.objectStoreNames.contains(this.dataKey)) {
                //使用数据库实例的createObjectStore方法创建对象仓库(其实就是数据表),第一个参数字符串就是数据表名，第二个表示设置这个表中的id为主键(主键是唯一的，方便迅速索引查找)
                objectStore = this.db.createObjectStore(this.dataKey, { keyPath:this.primaryKey });//(表名,{keyPAth:主键})
                //使用createIndex为这个数据表添加索引（其实就是列名），三个参数分别是：列名，列名所在属性，配置对象(是否包含重复的值)[注：主键默认设置索引，设置索引的列有唯一值]
                // objectStore.createIndex('content', 'content', { unique:false});//,autoIncrement:true 自动生成主键
            }
        };

         // 数据库打开(已有就打开，没有就创建后打开)成功事件
        request.onsuccess = (e:any)=> {
            //拿到数据库实例对象，其中包含了对数据库表的的创建编辑等功能
            this.db = e.target.result;
            console.log('链接成功，打开数据库',this.db);
            callback&&callback();
        };
    }
// 读取本地数据，返回数组
    readData(callback:any = null):any{
        //创建一个指定表的事务对象
        var transaction = this.db.transaction([this.dataKey]);
        //获取指定表的实例
        var objectStore = transaction.objectStore(this.dataKey);
        //通过get(索引)拿取数据
        // var request=objectStore.get(1);
        var request = objectStore.getAll();//获取全部数据
        //获取数据总数 var request = objectStore.count();
        // 数据拿取失败
        request.onerror = function(event:any) {
            // reject();
            console.log('事务失败');
        };
        //数据拿取成功
        request.onsuccess = function(event:any) {
            //这里数据拿取成功的话，传入的事件对象中的target的result就是我们拿取到的数据了
            //如果上面是用objectStore.get(1);拿取的那就是单个数据
            //使用objectStore.getAll();拿取的就是全部数据
            //不管拿取的那种数据都会被存到事件对象的target.result中去
            if (request.result) {
                console.log(request.result);
                callback&&callback(request.result);
            } else {
                console.log('未获得数据记录');
            }
        };
    }
// 新增数据对象-返回自动生成id
    addData(){
        
    }
// 存入本地数据
    saveData(data:object,callback:any = null){
        //indexedDB数据库的读写都是通过事务来完成的，
        // 通过数据库对象实例.transaction(['表名'],‘只读或读写’)来创建一个指定表的事务
        // 只读：read，不能修改数据库数据，可以并发执行
        // 读写：readwrite，可以进行读写操作
        // 版本变更：verionchange

        console.log('数据库对象实例:',this.db);
        var request = this.db.transaction([this.dataKey], 'readwrite');//
        //通过创建的表事务的pbjectStore(‘表名’)拿到我们要的数据库指定表对象
        request=request.objectStore(this.dataKey);//数据库指定表对象
        //通过表对象的add方法向数据库中写入数据返回一个IDBRequest对象，对手上的onsuccess事件是数据写入成功事件，onerror是数据写入失败事件
        request =request.add(data);

        //数据写入成功
        request.onsuccess = function (event:any){
            console.log('数据写入成功');
            callback&&callback(data)
        };
        //数据写入失败
        request.onerror = function (event:any) {
            console.log('数据写入失败');
        }
    }
// 根据id删除数据对象，返回布尔值
    removeDataById(id:number,callback:any){
        var request = this.db.transaction([this.dataKey], 'readwrite').objectStore(this.dataKey).delete(id);
        request.onsuccess = ()=>{
            console.log('删除成功！');
            callback&&callback('success')
        }
    }
}

export default DataHelper