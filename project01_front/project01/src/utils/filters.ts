export function timeFormat(time:number){
    let t = new Date(time);
    return `${t.getFullYear()}/${t.getMonth() > 8?t.getMonth()+1:'0'+(t.getMonth()+1)}/${t.getDate()>9?t.getDate():'0' + t.getDate()}`
}

export function sum(a:number,b:number){
    return a + b;
}

export function listSum(a:Array<number>){
    let sum:number = 0;
    a.forEach(ele=>{
        sum += ele ;
    })
    return sum;
}

export function addStr(a:string){
    return a + '。。。';
}