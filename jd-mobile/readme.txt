移动端最好不用jquery
      1.jquery体积大
      2.jquery做了大量的兼容,实现效率慢,移动端都是高版本浏览器,所以没必要
         
搜索效果
      
移动端的移动事件touch:
     移动端特有事件,触屏设备特有的事件,android,ios设备。
     *touchstart
          手指刚刚触摸到屏幕的时候 触发的事件
    
     *touchmove
          手指在屏幕上滑动的时候 会不停的触发
  
     *touchhend
          手指离开屏幕的时候触发的事件

     touchcancel
          被迫终止滑动触发的事件
          如:来电时被迫终止了当前滑动的界面

使用on绑定这些事件,重复绑定会被覆盖
可以用addEventListener('touchstart',function(){});绑定事件
如给div绑定touch事件
      var dom = document.querySelector('div');

      touchstart:
      dom.addEventListener('touchstart',function(e){
           console.log('touchstart');
           console.log(e);//打印事件
      })

      touchmove:
      dom.addEventListener('touchstart',function(e){
           console.log('touchmove');
           console.log(e);//打印事件
      })

      touchend:
      dom.addEventListener('touchstart',function(e){
           console.log('touchend');
           console.log(e);//打印事件
      })

滑动效果分析
依靠touch相关事件,根据触摸的位置的改变,改变对应元素的位移translate

1.怎么监听位置的改变
2.怎么获取当前的坐标
3.根据坐标计算位移再设置滑动

需要知道触摸点的集合(在打印的事件里):
changedTouches:当前页面最新改变的触摸点集合 整个事件都会有记录触摸点
targetTouches:记录当前元素上面的所有触摸点集合 touchend事件没有记录
touches:记录页面上所有的触摸点集合                  touchend事件没有记录

打印事件获取坐标:
      clientX
      clientY
              基于当前视口的触摸点坐标
      pageX
      pageY
              基于当前页面的触摸点坐标
      screenX
      screenY
              基于当前屏幕触摸点的坐标

移动端轮播图效果:
      监听过渡结束事件
      dom.addEventListener('transitionend',function(){

      });

      监听动画结束事件
      dom.addEventListener('animationend',function(){

      });

移动端的轻触事件tap:

和移动端click事件有关
click事件在移动端的特点:300ms左右延时
延时会出现问题:造成响应过慢,用户体验下降
解决问题:
      方案一:tap(是比click响应更快的事件)  touch衍生的事件
      满足什么条件才认为是tap
            1.肯定要比click响应快 150ms以内
            2.不能滑动
      zepto移动端的js库 包含了tap事件

      方案二:插件fastclick
           一个非常方便的库,在移动浏览器上发生介于轻敲及点击之间的指令时,能够让你摆脱300毫秒的延迟


列表(分类)页面

两栏自适应的方案
一侧固定宽度浮动 另一侧设置overflow:hidden;
overflow:hidden
      1.设置溢出隐藏
      2.设置当前容器为绝缘容器,不受其他元素影响,也不影响其他元素
          
区域滚动插件
      iscroll.js