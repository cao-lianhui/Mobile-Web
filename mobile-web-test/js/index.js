$(function() {
        //轮播图
        /*
       1.无缝滚动
       2.点对应改变
       3.手势切换(轻触切换)
       */
        /*获取需要操作的元素*/
        //大容器
        var $banner = $(".m-banner");
        //获取宽度
        var width = $banner.width();
        //图片容器
        var $imgBanner = $banner.find("ul:first-child");
        //console.log($imgBanner);
        //点盒子
        var $dotContainer = $banner.find("ul:last-child");
        //拿到所有的点
        var $dots = $dotContainer.find("li");

        //封装动画方法 方便后续调用
        var animateFunc = function() {
                //动画转起来
                //animate4个参数:需要改变动画的属性 动画执行的时间 执行的速度 执行完成回调
                $imgBanner.animate({ 'transform': 'translateX(' + ( - index * width) + 'px)'},200, 'linear', function() {
                        //判断索引 无缝滚动
                        if (index >= 9) {
                                index = 1;
                                //瞬间回到原来的位置 没有动换
                                $imgBanner.css({
                                        'transform': 'translateX(' + ( - index * width) + 'px)'
                                });
                        } else if (index <= 0) {
                                index = 8;
                                $imgBanner.css({
                                        'transform': 'translateX(' + ( - index * width) + 'px)'
                                });
                        }
                        //index 1-8
                        //点对应改变
                        $dots.removeClass('active').eq(index - 1).addClass('active');
                });

        }
        //无缝轮播
        var index = 1;
        var timer = setInterval(function(){
        index++;
        animateFunc();

    },3000);
        //手势切换
        //上一张 右滑
        $imgBanner.on('swipeRight', function() {
                index--;
                animateFunc();
        });
        //下一张 左滑
        $imgBanner.on('swipeLeft',function() {
                index++;
                animateFunc();
        });
});