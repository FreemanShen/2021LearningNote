//用于实现屏幕大小变化时的自适应
var screenHeight = $(window).height();
var screenWidth = $(window).width();


//@record: window.onload/$(document).ready的区别是什么？
$(document).ready(function(){
    $('body').css('height',screenHeight+'px')
    $('body').css('width',screenWidth+'px')
    if(screenWidth<1066){
        $('body').css('width',1066+'px')    
    }
})

//@todo:这个函数用来检测浏览器大小改变时的屏幕宽高，当屏幕太小时，因为使用了float去布局，会有Bug,可以通过条件判断去去除
window.onresize = function(){
    let screenHeight = $(window).height();
    let screenWidth = $(window).width();
    if(screenWidth>1066){
        $('body').css('height',screenHeight+'px')
        $('body').css('width',screenWidth+'px')    
    }
}

window.onload = function(){

}