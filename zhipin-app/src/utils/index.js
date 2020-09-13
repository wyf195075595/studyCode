// 工具函数

export function getRedirectTo(type,avatar){
    console.log("1-",type,"-1")
    let path = ''
    if(type === 'dashen'){
        path = '/dashen'
    }else{
        path = '/laoban'
    }
    if(!avatar){
        path += 'Info'
    }
    console.log(path)
    return path
}