window.onload = function(){
      /*初始化页面功能:搜索、轮播图、倒计时*/
      //搜索
      search();
      //轮播图
      banner();
      //文本轮播
      textBanner();
      //倒计时
      countTime();
      //console.log(1);
}

var search = function(){
      /*
         1.页面初始化的时候 距离顶部为零的时候 透明度为零
         2.当页面滚动的时候 随着页面距离顶部的距离越大 透明度越大
         3.当滚动的距离超过了轮播图的时候 透明度保持不变
     */
      var search = document.querySelector('.jd_search_box');
      var banner = document.querySelector('.jd_banner');
  
      var banHeight = banner.offsetHeight;
      //监听滚动事件
      window.onscroll = function(){
           //当前页面滚动的距离 兼容各种浏览器的获取方法
           var  scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
           //console.log(scrollTop);
           if(scrollTop>=0&&scrollTop<6){
                 search.style.background = '-webkit-linear-gradient(top,#000,transparent)';
                 search.style.height = '60px';
           }else{
                 search.style.height = '40px';
                 search.style.background = 'rgba(216,80,92,0)';
                 var opacity = 0;
                 if(scrollTop > banHeight){
                      opacity = 0.85;
                 }else{
                      opacity = 0.85*(scrollTop/banHeight);
                 }
                 //设置颜色给search
                 search.style.background = 'rgba(216,80,92,'+opacity+')';
           }
      }
}

 //提起一个公用的方法,防止代码重复
//过渡
var addTransition = function(obj){
     obj.style.transition = 'all 0.2s';
     obj.style.webkitTransition = 'all 0.2s';//兼容
}
//清除过渡
var removeTransition = function(obj){
     obj.style.transition = 'none';
     obj.style.webkitTransition = 'none';//兼容
}
//位移
var setTranslate = function(obj,translate,xOry){
     obj.style.transform = xOry?'translateX('+translate+'px)':'translateY('+translate+'px)';//移当前屏幕的宽度
     obj.style.webkitTransform = xOry?'translateX('+translate+'px)':'translateY('+translate+'px)';//移当前屏幕的宽度
}
var banner = function(){
      /*
        1.无缝滚动和滑动(定时器 过渡 位移)
        2.点盒子对应改变(改变当前样式)
        3.可以滑动(touch事件 监听触摸点坐标改变 进行位移)
        4.当滑动不够的时候 吸附回去(过渡加位移)
        5.当滑动足够的时候 跳转上一张或下一张(判断滑动方向 过渡 位移)
      */
      //获取dom元素
      var bannerBox = document.querySelector('.jd_banner');
      //获取轮播图宽度
      var banWidth = bannerBox.offsetWidth;
      //ul:first是jquery封装的选择器 css当中无效
      //var imgBox = bannerBox.querySelector('ul:first');
      //querySelector用的选择器就是css当中的选择器
      var imgBox = bannerBox.querySelector('ul:first-child');
      var pointBox = bannerBox.querySelector('ul:last-child');
      //获取所有的点盒子
      var points = pointBox.querySelectorAll('li');
      
      //实现无缝滚动
      var index = 1;//默认索引
      var timer = setInterval(function(){
           index++;
           //过渡
           addTransition(imgBox);
           //位移
           setTranslate(imgBox,-index*banWidth,true);
      },3000);

      //监听过渡结束这个时间点
      imgBox.addEventListener('transitionend', function(){
           if(index>=9){
                //瞬间定位到第一张
                index = 1;
                //清除过渡
                removeTransition(imgBox);
                //定位回去
                setTranslate(imgBox,-index*banWidth,true);
           }else if(index<=0){
                //无缝滑动
                index = 8;
                //清除过渡
                removeTransition(imgBox);
                //定位回去
                setTranslate(imgBox,-index*banWidth,true);
           }
           //index取值为1-8
           setPoint();
      });
      //点盒子
      var setPoint = function(){
           //去除所有的selected样式
           for(var i=0;i<points.length;i++){
                points[i].classList.remove('selected');
           }
            points[index-1].classList.add('selected');
      }
      var startX = 0;//记录开始的x坐标
      var distanceX = 0;//记录坐标轴的改变
      //判断是否触发了移动事件
      var isMove = false;
      //实现滑动(touch事件)
      imgBox.addEventListener('touchstart',function(e){
            //清除定时器
            clearInterval(timer);
            startX = e.touches[0].clientX;
            //console.log(startX);
      });
      imgBox.addEventListener('touchmove',function(e){
            var moveX = e.touches[0].clientX;
            distanceX = moveX-startX;
            //基于当前的位置(索引)移动
            var translateX = -index*banWidth + distanceX;
            //清除过渡
            removeTransition(imgBox);
            //做定位
            setTranslate(imgBox,translateX,true);
            isMove = true;
      });
      imgBox.addEventListener('touchend',function(e){
             //滑动事件结束之后来判断当前滑动的距离
             //如果大于三分之一 切换图片 反之不切换
             //console.log(distanceX);
             if(isMove){
                    if(Math.abs(distanceX)<banWidth/3){
                          //当前滑动距离不够
                          //过渡效果
                          addTransition(imgBox);
                          //位移
                          setTranslate(imgBox,-index*banWidth,true);
                    }else{
                          //当前距离够了 distanceX大于0向右 否则向左
                          index=distanceX>0?index-1:index+1;
                          //过渡效果
                          addTransition(imgBox);
                          //位移
                          setTranslate(imgBox,-index*banWidth,true);
                    }
             }
             //加上定时器
             //确保一定只加一次定时器,所以再清楚一次
             clearInterval(timer);
             timer = setInterval(function(){
                    index++;
                    //过渡
                    addTransition(imgBox);
                    //位移
                    setTranslate(imgBox,-index*banWidth,true);
             },3000);

             //重置参数
             startX = 0;
             distanceX = 0;
             isMove = false;
      });
}

var textBanner = function(){
     /*
        1.无缝向上滚动,滑动(定时器)
     */
     var textBox = document.querySelector('.banner_text');
     var textBan = textBox.querySelector('ul');
     //获取盒子的高度
     var banHeight = textBox.offsetHeight;

     
      //实现无缝滚动
      var index = 0;//默认索引
      var timer = setInterval(function(){
           index++;
           //过渡
           addTransition(textBan);
           //位移
           setTranslate(textBan,-index*banHeight,false);
      },3000);

      //监听过渡结束这个时间点
      textBan.addEventListener('transitionend', function(){
           if(index>=4){
                //瞬间定位到第一张
                index = 0;
                //清除过渡
                removeTransition(textBan);
                //定位回去
                setTranslate(textBan,-index*banHeight,false);
           }
      });
}

var countTime = function(){
      /*
         1.模拟倒计时的时间
         2.利用定时器 1秒一次 重新展示时间
      */
      var time = 60*60*11;
      
      var rightNow = document.querySelector('.now');
      //var timeBox = rightNow.
      var timeList = rightNow.querySelectorAll('li');
      var timer = setInterval(function(){
           time--;
           var h = Math.floor(time/3600);
           var m = Math.floor(time%3600/60);
           var s = time%60;

           //设置时间
           timeList[0].innerHTML = Math.floor(h/10);
           timeList[1].innerHTML = h%10;
           timeList[3].innerHTML = Math.floor(m/10);
           timeList[4].innerHTML = m%10;
           timeList[6].innerHTML = Math.floor(s/10);
           timeList[7].innerHTML = s%10;
           if(time<0){
                clearInterval(timer);
           }
      },1000);
}