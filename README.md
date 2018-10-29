# Mobile-Web

1. jd-mobile

京东商城移动端自适应布局总结和用到的知识点可以点击进入:

![自适应布局](https://github.com/cao-lianhui/jd-mobile/blob/master/%E8%87%AA%E9%80%82%E5%BA%94%E5%B8%83%E5%B1%80.txt) 和 ![readme.txt](https://github.com/cao-lianhui/jd-mobile/blob/master/readme.txt)

效果图(图像不是很清晰主要是录制的问题):

![效果图](https://github.com/cao-lianhui/jd-mobile/blob/master/gif/1.gif)

2.Mobile-Web-test

京东商城还不能算完全的移动端自适应，因为随着屏幕大小的改变页面整体高宽可以自适应，但页面内容是固定的。没有改变

下面的这个移动端页面整体内容则可以自适应，用rem计算整体内容的大小，less编译css文件，轮播图是用了移动端的轻量级插件zepto.

zepto插件:
      fx.js：提供动画
      
      touch.js：提供触摸事件

less模块有：

      adapter.less:主要解决移动端响应式问题，用了媒体查询@media，还有less语法中的函数，循环。
      
      index.less:主要的页面index样式的
      
      main.less:导入了上面两个less文件
       
      编译:lessc main.less index.css，编译器版本为1.6.3,系统为linuxmint
      
![less.txt](https://github.com/cao-lianhui/Mobile-Web/blob/master/mobile-web-test/Less.txt)

效果图：

![效果图](https://github.com/cao-lianhui/Mobile-Web/blob/master/mobile-web-test/gif/mobile-gif.gif)
