module.exports = {
    timeFormat,
    shake
}
// 格式化时间
function timeFormat(time){
    var timeStr = new Date(+time);
    var now = new Date(Date.now());//当前年份
    
    var year = timeStr.getFullYear();
 
    var month = timeStr.getMonth()+1;
    if(month<10){
        month="0"+month;
    }
    var today = timeStr.getDate();
    if(today<10){
        today="0"+today;
    }
    var hours = timeStr.getHours()
    if(hours<10){
        hours="0"+hours;
    }
    var minutes = timeStr.getMinutes();
    if(minutes<10){
        minutes="0"+minutes;
    }
    if(now.getFullYear()==year){//如果年份为当前年份，则不返回年份
        return month+"/"+today+" "+hours+":"+minutes;
    }
    // +" "+hours+":"+minutes
    return year+"/"+month+"-"+today;
}
// 元素抖动
function shake(ele){
    var $panel = $('#'+ele);
    box_left = 0;
    $panel.css({'left':box_left,'position':'relative'})
    for(var i=1 ; i< 4 ; i++){
        $panel.animate({left:box_left-(12-3*i)},200)
        $panel.animate({left:box_left+(12-3*i)},200)
    }
}