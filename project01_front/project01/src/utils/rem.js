
module.exports  =  function(doc, win){
    var scaleNum = 1;
    var docEl = doc.documentElement,
        resizeEvt = "orientationchange" in window ? "orientationchange" : "resize",
        recalc = function () {
            var width = docEl.clientWidth / 19.20;
            docEl.style.fontSize = width + "px";
            scaleNum = width;

        };
        recalc()
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener("DOMContentLoaded", recalc, false);
}