window.onload = function(){
      /*��ʼ��ҳ�湦��:�������ֲ�ͼ������ʱ*/
      //����
      search();
      //�ֲ�ͼ
      banner();
      //�ı��ֲ�
      textBanner();
      //����ʱ
      countTime();
      //console.log(1);
}

var search = function(){
      /*
         1.ҳ���ʼ����ʱ�� ���붥��Ϊ���ʱ�� ͸����Ϊ��
         2.��ҳ�������ʱ�� ����ҳ����붥���ľ���Խ�� ͸����Խ��
         3.�������ľ��볬�����ֲ�ͼ��ʱ�� ͸���ȱ��ֲ���
     */
      var search = document.querySelector('.jd_search_box');
      var banner = document.querySelector('.jd_banner');
  
      var banHeight = banner.offsetHeight;
      //���������¼�
      window.onscroll = function(){
           //��ǰҳ������ľ��� ���ݸ���������Ļ�ȡ����
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
                 //������ɫ��search
                 search.style.background = 'rgba(216,80,92,'+opacity+')';
           }
      }
}

 //����һ�����õķ���,��ֹ�����ظ�
//����
var addTransition = function(obj){
     obj.style.transition = 'all 0.2s';
     obj.style.webkitTransition = 'all 0.2s';//����
}
//�������
var removeTransition = function(obj){
     obj.style.transition = 'none';
     obj.style.webkitTransition = 'none';//����
}
//λ��
var setTranslate = function(obj,translate,xOry){
     obj.style.transform = xOry?'translateX('+translate+'px)':'translateY('+translate+'px)';//�Ƶ�ǰ��Ļ�Ŀ��
     obj.style.webkitTransform = xOry?'translateX('+translate+'px)':'translateY('+translate+'px)';//�Ƶ�ǰ��Ļ�Ŀ��
}
var banner = function(){
      /*
        1.�޷�����ͻ���(��ʱ�� ���� λ��)
        2.����Ӷ�Ӧ�ı�(�ı䵱ǰ��ʽ)
        3.���Ի���(touch�¼� ��������������ı� ����λ��)
        4.������������ʱ�� ������ȥ(���ɼ�λ��)
        5.�������㹻��ʱ�� ��ת��һ�Ż���һ��(�жϻ������� ���� λ��)
      */
      //��ȡdomԪ��
      var bannerBox = document.querySelector('.jd_banner');
      //��ȡ�ֲ�ͼ���
      var banWidth = bannerBox.offsetWidth;
      //ul:first��jquery��װ��ѡ���� css������Ч
      //var imgBox = bannerBox.querySelector('ul:first');
      //querySelector�õ�ѡ��������css���е�ѡ����
      var imgBox = bannerBox.querySelector('ul:first-child');
      var pointBox = bannerBox.querySelector('ul:last-child');
      //��ȡ���еĵ����
      var points = pointBox.querySelectorAll('li');
      
      //ʵ���޷����
      var index = 1;//Ĭ������
      var timer = setInterval(function(){
           index++;
           //����
           addTransition(imgBox);
           //λ��
           setTranslate(imgBox,-index*banWidth,true);
      },3000);

      //�������ɽ������ʱ���
      imgBox.addEventListener('transitionend', function(){
           if(index>=9){
                //˲�䶨λ����һ��
                index = 1;
                //�������
                removeTransition(imgBox);
                //��λ��ȥ
                setTranslate(imgBox,-index*banWidth,true);
           }else if(index<=0){
                //�޷컬��
                index = 8;
                //�������
                removeTransition(imgBox);
                //��λ��ȥ
                setTranslate(imgBox,-index*banWidth,true);
           }
           //indexȡֵΪ1-8
           setPoint();
      });
      //�����
      var setPoint = function(){
           //ȥ�����е�selected��ʽ
           for(var i=0;i<points.length;i++){
                points[i].classList.remove('selected');
           }
            points[index-1].classList.add('selected');
      }
      var startX = 0;//��¼��ʼ��x����
      var distanceX = 0;//��¼������ĸı�
      //�ж��Ƿ񴥷����ƶ��¼�
      var isMove = false;
      //ʵ�ֻ���(touch�¼�)
      imgBox.addEventListener('touchstart',function(e){
            //�����ʱ��
            clearInterval(timer);
            startX = e.touches[0].clientX;
            //console.log(startX);
      });
      imgBox.addEventListener('touchmove',function(e){
            var moveX = e.touches[0].clientX;
            distanceX = moveX-startX;
            //���ڵ�ǰ��λ��(����)�ƶ�
            var translateX = -index*banWidth + distanceX;
            //�������
            removeTransition(imgBox);
            //����λ
            setTranslate(imgBox,translateX,true);
            isMove = true;
      });
      imgBox.addEventListener('touchend',function(e){
             //�����¼�����֮�����жϵ�ǰ�����ľ���
             //�����������֮һ �л�ͼƬ ��֮���л�
             //console.log(distanceX);
             if(isMove){
                    if(Math.abs(distanceX)<banWidth/3){
                          //��ǰ�������벻��
                          //����Ч��
                          addTransition(imgBox);
                          //λ��
                          setTranslate(imgBox,-index*banWidth,true);
                    }else{
                          //��ǰ���빻�� distanceX����0���� ��������
                          index=distanceX>0?index-1:index+1;
                          //����Ч��
                          addTransition(imgBox);
                          //λ��
                          setTranslate(imgBox,-index*banWidth,true);
                    }
             }
             //���϶�ʱ��
             //ȷ��һ��ֻ��һ�ζ�ʱ��,���������һ��
             clearInterval(timer);
             timer = setInterval(function(){
                    index++;
                    //����
                    addTransition(imgBox);
                    //λ��
                    setTranslate(imgBox,-index*banWidth,true);
             },3000);

             //���ò���
             startX = 0;
             distanceX = 0;
             isMove = false;
      });
}

var textBanner = function(){
     /*
        1.�޷����Ϲ���,����(��ʱ��)
     */
     var textBox = document.querySelector('.banner_text');
     var textBan = textBox.querySelector('ul');
     //��ȡ���ӵĸ߶�
     var banHeight = textBox.offsetHeight;

     
      //ʵ���޷����
      var index = 0;//Ĭ������
      var timer = setInterval(function(){
           index++;
           //����
           addTransition(textBan);
           //λ��
           setTranslate(textBan,-index*banHeight,false);
      },3000);

      //�������ɽ������ʱ���
      textBan.addEventListener('transitionend', function(){
           if(index>=4){
                //˲�䶨λ����һ��
                index = 0;
                //�������
                removeTransition(textBan);
                //��λ��ȥ
                setTranslate(textBan,-index*banHeight,false);
           }
      });
}

var countTime = function(){
      /*
         1.ģ�⵹��ʱ��ʱ��
         2.���ö�ʱ�� 1��һ�� ����չʾʱ��
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

           //����ʱ��
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