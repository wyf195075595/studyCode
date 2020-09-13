var express = require('express');
var router = express.Router();
var crypto = require('crypto')
var multer = require('multer')
var path = require('path')
var fs = require('fs')
var cheerio = require('cheerio')

var users = require('../modules/users')
var tags = require('../modules/tags')
var greats = require('../modules/greats')
var articles = require('../modules/articles')
var comments = require('../modules/comments')
var messages = require('../modules/messages')

//设置磁盘存储引擎
var option = multer.diskStorage({
    // 设置储存路径
    destination:function(req, file, cb){
        cb(null, path.join(__dirname,'../','public','uploadImg'))
    },
    // 文件名
    filename:function(req, file, cb){
        var arr = file.originalname.split('.')
        cb(null, Date.now()+'.'+arr[arr.length-1])
    }
})
var upload = multer({storage:option})

router.get('/',(req,res)=>{
    res.send('Welcome to me blog!')
})

router.post('/',(req,res)=>{
    res.send('Welcome to me blog!')
})
// ----------------------后台管理接口-------------------------------
//上传图片 
router.post('/upload', upload.array('file', 12), function (req, res) {
    // req.files 是 `photos` 文件数组的信息req.body 将具有文本域数据，如果存在的话
    // console.log(req.files)
    if(req.files.length>0){
        res.json({
            status:'success',
            msg:'上传成功',
            data:req.files
        })
    }else{
        res.json({
            status:'fail',
            msg:'上传错误',
            data:''
        })
    }

  })

//注册 username,pwd
router.post('/sign',(req,res)=>{
    var name = req.body.username;
    var password = req.body.pwd;
    if(name&&password){
        let info = {
            name,
            pwd: crypto.createHash('md5').update(password).digest('hex'),
            avatar:'',
            time:Date.now()
        }
        users.find({name},(err,data)=>{
            if(data.length>0){//发现重名，返回失败
                res.json({
                    status:'fail',
                    msg:'用户名已注册',
                    data:''
                })
            }else{
                users.create(info,(err,data)=>{
                    if(!err){
                        res.json({
                            status:'success',
                            msg:'注册成功',
                            data:data
                        })
                    }else{
                        res.json({
                            status:'fail',
                            msg:'注册失败',
                            data:err
                        })
                    }
                })
            }
        })
       
    }else{
        res.json({
            status:'fail',
            msg:'参数错误',
            data:''
        })
    }
})

//获取用户列表
router.post('/userlist',(req,res)=>{
    users.find({},(err,data)=>{
        if(!err){
            res.json({
                status:'success',
                msg:'查询成功',
                data:data
            })
        }else{
            res.json({
                status:'success',
                msg:'查询失败',
                data:data
            })
        }
    })
}) 

// 删除用户  id
router.post('/delByuseId',(req,res)=>{
    var id = req.body.id;
    if(id){
        users.findByIdAndRemove(id,(err,data)=>{
            if(!err){
                res.json({
                    status:'success',
                    msg:'删除用户成功',
                    data:data
                })
            }else{
                res.json({
                    status:'fail',
                    msg:'删除用户失败',
                    data:err
                })
            }
        })
    }else{
        res.json({
            status:'fail',
            msg:'参数错误',
            data:''
        })
    }
})

// 用户搜索 keyword
router.post('/searchUser',(req,res)=>{
    var keyword = req.body.keyword;
    if(keyword){
        users.find({name:{$regex : new RegExp(keyword,'ig')}},(err,data)=>{
            if(!err){
                res.json({
                    status:'success',
                    msg:'查询成功',
                    data:data
                })
            }else{
                res.json({
                    status:'fail',
                    msg:'查询出错',
                    data:''
                })
            }
        })
    }else{
        res.json({
            status:'fail',
            msg:'参数错误',
            data:''
        })
    }
})

//修改密码 id,pwd
router.post('/changePwd',(req,res)=>{
    var id = req.body.id;
    var password = req.body.pwd;
    if(id&&password){
         users.findByIdAndUpdate(id,{pwd:crypto.createHash('md5').update(password).digest('hex')},(err,data)=>{
            if(!err){
                res.json({
                    status:'success',
                    msg:'更改密码成功',
                    data:data
                })
            }else{
                res.json({
                    status:'fail',
                    msg:'更改密码失败',
                    data:err
                })
            }
        })
    }else{
        res.json({
            status:'fail',
            msg:'参数有误',
            data:''
        })
    }
   
})

//登陆 username,pwd
router.post('/login',(req,res)=>{
    var name = req.body.username;
    var password = req.body.pwd;
    if(name&&password){
        users.find({name},(err,data)=>{
            if(data.length>0){
                if(data[0].pwd == crypto.createHash('md5').update(password).digest('hex')){
                    res.json({
                        status:'success',
                        msg:'登陆成功',
                        data:data
                    })
                }else{
                    res.json({
                        status:'fail',
                        msg:'密码错误',
                        data:''
                    })
                }
            }else{
                res.json({
                    status:'fail',
                    msg:'用户名不存在',
                    data:''
                })
            }
        })
    }else{
        res.json({
            status:'fail',
            msg:'参数错误',
            data:''
        })
    }
})

// 增加标签 tagname
router.post('/addtags',(req,res)=>{
    var tagname = req.body.tagname;
    if(tagname){
        tags.create({tagname},(err,data)=>{
            if(!err){
                res.json({
                    status:'success',
                    msg:'增加标签成功',
                    data:data
                })
            }else{
                res.json({
                    status:'fail',
                    msg:'增加标签失败',
                    data:err
                })
            }
        })
    }else{
        res.json({
            status:'fail',
            msg:'参数有误',
            data:''
        })
    }
})

// 标签列表
router.post('/gettags',(req,res)=>{
    tags.find({},(err,data)=>{
        if(!err){
            res.json({
                status:'success',
                msg:'增加标签成功',
                data:data
            })
        }else{
            res.json({
                status:'fail',
                msg:'增加标签失败',
                data:err
            })
        }
    })

})

// 删除标签  id
router.post('/deltags',(req,res)=>{
    var id = req.body.id;
    if(id){
        tags.findByIdAndRemove(id,(err,data)=>{
            if(!err){
                res.json({
                    status:'success',
                    msg:'删除标签成功',
                    data:data
                })
            }else{
                res.json({
                    status:'fail',
                    msg:'删除标签失败',
                    data:err
                })
            }
        })
    }else{
        res.json({
            status:'fail',
            msg:'参数有误',
            data:''
        })
    }
})

// 添加文章
router.post('/addArticle',(req,res)=>{
    var title  =req.body.title;
    var tag  =req.body.tag;
    var content  =req.body.content;
    var picUrl  =req.body.picUrl;
    if(!picUrl){
         // 找内容图片
         var $ = cheerio.load(content,{decodeEntities:false});
         var imgs = $('img');
         if(imgs.length>0){
             var ph = imgs.eq(0).attr("src");
             console.log(ph)
             picUrl = ph
         }
    }
    if(title&&tag&&content){
        var info = {
            title,//标题
            tag,//标签
            picUrl,//头图
            time:Date.now(),//时间
            views:0,//浏览次数
            content,//文章内容
            thumbs:0,//点赞数
            comments:[]//评论
        }
        articles.create(info,err=>{
            if(!err){
                res.json({
                    status:'success',
                    msg:'添加文章成功',
                    data:''
                })
            }else{
                res.json({
                    status:'fail',
                    msg:'添加文章失败',
                    data:err
                })
            }
        })

    }else{
        res.json({
            status:'fail',
            msg:'参数错误',
            data:''
        })
    }
})

//删除文章 id
router.post('/delArticleByid',(req,res)=>{
    var id = req.body.id;
    if(id){
        articles.findByIdAndDelete(id,(err,data)=>{
            // 删除相关评论
            for(let i = 0; i<data.comments.length;i++){
                 comments.findByIdAndRemove(data.comments[i]._id,error=>{
                     if(!error){
                         console.log('删除相关评论成功')
                     }
                 })
            }
            // 删除内容图片
            var $ = cheerio.load(data.content,{decodeEntities:false});
            var imgs = $('img');
            for(let i =0 ; i< imgs.length; i++){
                var ph = imgs.eq(i).attr("src");
                ph = ph.replace('http://localhost:4000','')
                ph =path.join('public',ph)
                fs.unlink(ph,err=>{
                    if(!err){
                        console.log('删除内容图片成功'+ph)
                    }else{
                        console.log('删除内容图片失败',err)
                    }
                })
            }
            if(!err){
                res.json({
                    status:'success',
                    msg:'删除文章成功',
                    data:'',
                })
            }else{
                res.json({
                    status:'fail',
                    msg:'删除文章失败',
                    data:'',
                })
            }
        })
    }else{
        res.json({
            status:'fail',
            msg:'参数有误',
            data:'',
        })
    }
})

// 查询文章列表 page limit
router.post('/getArticles',(req,res)=>{
    var page = +req.body.page||1;
    var limit = +req.body.limit||10
    //
    articles.find({},'title time _id tag ').limit(limit).skip((page-1)*limit).exec((err,data1)=>{
        if(!err){
            articles.find({},(err,data2)=>{
                if(!err){
                    res.json({
                        status:'success',
                        mag:'查询文章成功',
                        data:data1,
                        length:data2.length
                    })
                }else{
                    res.json({
                        status:'success',
                        mag:'查询文章成功',
                        data:data1,
                        length:10
                    })
                }
            })
            
        }else{
            res.json({
                status:'fail',
                mag:'查询文章失败',
                data:err
            })
        }
    })
})

// 文章模糊查询 keyword
router.post('/searchArticle',(req,res)=>{
    var keyword = req.body.keyword;
    if(keyword){
        articles.find({title:{$regex : new RegExp(keyword,'ig')}},(err,data)=>{
            if(!err){
                res.json({
                    status:'success',
                    msg:'查询成功',
                    data:data
                })
            }else{
                res.json({
                    status:'fail',
                    msg:'查询出错',
                    data:''
                })
            }
        })
    }else{
        res.json({
            status:'fail',
            msg:'参数错误',
            data:''
        })
    }
})

//查询文章信息
router.post('/getArticleInfo',(req,res)=>{
    var id = req.body.id;
    if(id){
        articles.findById(id,'tag  title content picUrl',(err,data)=>{
            if(!err){
                res.json({
                    status:'success',
                    mag:'查询文章成功',
                    data:data
                })
            }else{
                res.json({
                    status:'fail',
                    mag:'查询文章失败',
                    data:err
                })
            }
            
        })
    }else{
        res.json({
            status:'fail',
            mag:'参数有误',
            data:err
        })
    }
    
})

//更新文章 info()
router.post('/updateArticle',(req,res)=>{
    var id  =req.body.id;
    var title  =req.body.title;
    var tag  =req.body.tag;
    var content  =req.body.content;
    var picUrl  =req.body.picUrl;
    if(title&&tag&&content&&id){
        var info = {
            title,//标题
            tag,//标签
            picUrl,//头图
            time:Date.now(),//时间
            content,//文章内容
        }
        articles.findByIdAndUpdate(id,info,err=>{
            if(!err){
                res.json({
                    status:'success',
                    msg:'修改文章成功',
                    data:''
                })
            }else{
                res.json({
                    status:'fail',
                    msg:'修改文章失败',
                    data:err
                })
            }
        })

    }else{
        res.json({
            status:'fail',
            msg:'参数错误',
            data:''
        })
    }
    
})

// 删除留言  id
router.post('/delMessages',(req,res)=>{
    var id = req.body.id;
    if(id){
        messages.findByIdAndRemove(id,(err,data)=>{
            if(!err){
                res.json({
                status:'success',
                msg:'删除留言成功',
                data:data
                })
            }else{
                res.json({
                    status:'fail',
                    msg:'删除留言失败',
                    data:err
                })
            }
        })
    }else{
        res.json({
            status:'fail',
            msg:'参数错误',
            data:''
        })
    }
    
})

// 点赞+1  aid,uid, status 0取消点赞  1点赞
router.post('/great',(req,res)=>{
    var aid = req.body.aid;
    var uid = req.body.uid;
    var status = req.body.status;
    console.log(aid,uid,status)
    if(aid&&uid&&status){
        status = +status;//转Number
        greats.findOne({aid,uid},(err,data)=>{
            if(err){
                res.json({
                    status:'fail',
                    msg:'查找点赞表数据失败',
                    data:''
                })
            }else{
                if(data != null){
                    if(status == 1 && data.status == 1){
                        //已赞
                        res.json({
                            status:'fail',
                            msg:'您已点过赞了',
                            data:''
                        })
                    }else if(status == 0 &&  data.status == 1){
                        // 取消点赞
                        greats.findOneAndUpdate({aid,uid},{status},err=>{
                            if(!err){//更新文章列表
                                articles.findByIdAndUpdate(aid,{$inc:{thumbs:-1}},err=>{
                                    if(!err){
                                        res.json({
                                            status:'success',
                                            msg:'取消点赞成功',
                                            data:''
                                        })
                                    }else{
                                        res.json({
                                            status:'success',
                                            msg:'取消点赞更新文章列表失败',
                                            data:''
                                        })
                                    }
                                })
                            }else{
                                res.json({
                                    status:'fail',
                                    msg:'取消点赞失败',
                                    data:''
                                })
                            }
                        })
                    }else{// 1 0 点赞
                        greats.findOneAndUpdate({aid,uid},{status},err=>{
                            if(!err){
                                // 更新文章点赞数
                                articles.findByIdAndUpdate(aid,{$inc:{thumbs:1}},err=>{
                                    if(!err){
                                        res.json({
                                            status:'success',
                                            msg:'点赞成功',
                                            data:''
                                        })
                                    }else{
                                        res.json({
                                            status:'fail',
                                            msg:'点赞更新文章表失败',
                                            data:''
                                        })
                                    }
                                })
                                
                            }else{
                                res.json({
                                    status:'fail',
                                    msg:'点赞失败',
                                    data:''
                                })
                            }
                        })
                    }
                    
                }else{//第一次点赞
                    var info = {
                        aid,
                        uid,
                        status:1
                    }
                    greats.create(info,err=>{
                        if(!err){
                            // 更新文章点赞数
                            articles.findByIdAndUpdate(aid,{$inc:{thumbs:1}},err=>{
                                if(!err){
                                    res.json({
                                        status:'success',
                                        msg:'点赞成功',
                                        data:''
                                    })
                                }else{
                                    res.json({
                                        status:'fail',
                                        msg:'点赞更新文章表失败',
                                        data:''
                                    })
                                }
                            })
                            
                        }else{
                            res.json({
                                status:'fail',
                                msg:'点赞失败',
                                data:''
                            })
                        }
                    })
                }
            }
        })
    }else{
        res.json({
            status:'fail',
            msg:'参数有误',
            data:''
        })
    }
})
// end
// ---------------------------前台页面---------------------------------
//
//查询文章详情列表List页面 page limit
router.post('/getArticlesInfo',(req,res)=>{
    var page = +req.body.page||1;
    var limit = +req.body.limit||10
    //
    articles.find({},'-content').limit(limit).skip((page-1)*limit).exec((err,data1)=>{
        if(!err){
            articles.find({},(err,data2)=>{
                if(!err){
                    res.json({
                        status:'success',
                        mag:'查询文章成功',
                        data:data1,
                        length:data2.length
                    })
                }else{
                    res.json({
                        status:'success',
                        mag:'查询文章成功',
                        data:data1,
                        length:10
                    })
                }
            })
            
        }else{
            res.json({
                status:'fail',
                mag:'查询文章失败',
                data:err
            })
        }
    })
})

// 查询文章详情 info页面  aid
router.post('/getinfo',(req,res)=>{
    var aid = req.body.aid;
    if(aid){
        articles.findById(aid).populate({path:'comments',options:{sort:{'time':-1}}}).exec((err,data)=>{
            if(!err){
                res.json({
                    status:'success',
                    mag:'查询文章详情成功',
                    data:data
                })
            }else{
                res.json({
                    status:'fail',
                    mag:'查询文章详情失败',
                    data:err
                })
            }
        })
    }else{
        res.json({
            status:'fail',
            mag:'查询文章参数有误',
            data:''
        })
    }
})

// 分类查询文章  type
router.post('/getArticleTypes',(req,res)=>{
    var page = +req.body.page||1;
    var limit = +req.body.limit||10
    var type = req.body.type;
    console.log(page,limit,type)
    //
    articles.find({tag:type},'-content').limit(limit).skip((page-1)*limit).exec((err,data1)=>{
        if(!err){
            articles.find({tag:type},(err,data2)=>{
                if(!err){
                    res.json({
                        status:'success',
                        mag:'查询文章成功',
                        data:data1,
                        length:data2.length
                    })
                }else{
                    res.json({
                        status:'success',
                        mag:'查询文章成功',
                        data:data1,
                        length:10
                    })
                }
            })
            
        }else{
            res.json({
                status:'fail',
                mag:'查询文章失败',
                data:err
            })
        }
    })
})
// 添加评论
router.post('/addComments',(req,res)=>{
    var info = req.body;
    if(req.body.aid&&req.body.content&&req.body.name&&req.body.email){
        comments.create(info,(err,data)=>{
            if(!err){
                articles.findByIdAndUpdate(req.body.aid,{$push:{comments:data._id}},(err,article)=>{
                    if(!err){
                        res.json({
                            status:'success',
                            msg:'评论成功',
                            data:article
                        })
                    }else{
                        res.json({
                            status:'success',
                            msg:'评论失败',
                            data:''
                        })
                    }
                })
            }else{
                res.json({
                    status:'fail',
                    msg:'评论失败,评论表更新失败',
                    data:err
                })
            }
        })
    }else{
        res.json({
            status:'fail',
            msg:'参数有误',
            data:''
        })
    }
})

// 近期的评论
router.post('/getComments',(req,res)=>{
    comments.find({}).populate('aid','title').sort({time:-1}).limit(5).exec((err,data)=>{

        if(!err){
            res.json({
                status:'success',
                msg:'获取近期评论成功',
                data:data
            })
        }else{
            res.json({
                status:'fail',
                msg:'获取近期评论失败',
                data:err
            })
        }
    })
    
})

// 添加留言 
router.post('/leaveMessage',(req,res)=>{
    var info = req.body;
    if(req.body.content&&req.body.name&&req.body.email){
        messages.create(info,(err,data)=>{
            if(!err){
                res.json({
                    status:'success',
                    msg:'留言成功',
                    data:data
                })
            }else{
                res.json({
                    status:'fail',
                    msg:'留言失败',
                    data:err
                })
            }
        })
    }else{
        res.json({
            status:'fail',
            msg:'参数有误',
            data:''
        })
    }
})

// 留言查询 page limit
router.post('/getMessages',(req,res)=>{
    var page = +req.body.page||1;
    var limit = +req.body.limit||5;
    messages.find({}).limit(limit).skip((page-1)*limit).exec((err,data)=>{
        if(!err){
            messages.find({},(err,msgs)=>{
                if(!err){
                     res.json({
                        status:'success',
                        msg:'查询留言成功',
                        data:data,
                        length:msgs.length
                    })
                }
            })
        }else{
            res.json({
                status:'fail',
                msg:'查询留言失败',
                data:err
            })
        }
    })
})




module.exports = router