window.onload = function(){
     //左侧滑动
     //leftSlide(); 
     iscrollLeft();
     //右侧滑动
     rightSlide();
}

var leftSlide = function(){
     /*
        1.上下的滑动 touch事件 位移
     */
     var leftBox = document.querySelector('.cate_left');
     var childBox = leftBox.querySelector('ul');
     console.log(childBox);
     var startY = 0;
     var distanceY = 0;
     //程序的核心点
     var currentY = 0;
     childBox.addEventListener('touchstart',function(e){
          startY = e.touches[0].clientY;
          console.log(e);
          console.log(startY);
     });
     childBox.addEventListener('touchmove',function(e){
          var moveY = e.touches[0].clientY;
          distanceY = moveY - startY;

          console.log(distanceY);
          //将要去做定位的位置
          var translateY = currentY + distanceY;
          //位移
          childBox.style.transform = 'translateY('+translateY+'px)';
          childBox.style.webkitTransform = 'translateY('+translateY+'px)';
     });
     childBox.addEventListener('touchend',function(e){
          //滑动完成后记录位置
          currentY = currentY + distanceY;
     });
}

var iscrollLeft = function(){
     //使用iscroll
     //在某些浏览器上失效,不过在移动端上不会有问题
     new IScroll(document.querySelector('.cate_left'));
}

var rightSlide = function(){
     //通过参数配置实现左右滚动
     new IScroll(document.querySelector('.cate_right'),{
            scrollX:true,
            scrollY:true
     });
}