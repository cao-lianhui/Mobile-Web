�ƶ�����ò���jquery
      1.jquery�����
      2.jquery���˴����ļ���,ʵ��Ч����,�ƶ��˶��Ǹ߰汾�����,����û��Ҫ
         
����Ч��
      
�ƶ��˵��ƶ��¼�touch:
     �ƶ��������¼�,�����豸���е��¼�,android,ios�豸��
     *touchstart
          ��ָ�ոմ�������Ļ��ʱ�� �������¼�
    
     *touchmove
          ��ָ����Ļ�ϻ�����ʱ�� �᲻ͣ�Ĵ���
  
     *touchhend
          ��ָ�뿪��Ļ��ʱ�򴥷����¼�

     touchcancel
          ������ֹ�����������¼�
          ��:����ʱ������ֹ�˵�ǰ�����Ľ���

ʹ��on����Щ�¼�,�ظ��󶨻ᱻ����
������addEventListener('touchstart',function(){});���¼�
���div��touch�¼�
      var dom = document.querySelector('div');

      touchstart:
      dom.addEventListener('touchstart',function(e){
           console.log('touchstart');
           console.log(e);//��ӡ�¼�
      })

      touchmove:
      dom.addEventListener('touchstart',function(e){
           console.log('touchmove');
           console.log(e);//��ӡ�¼�
      })

      touchend:
      dom.addEventListener('touchstart',function(e){
           console.log('touchend');
           console.log(e);//��ӡ�¼�
      })

����Ч������
����touch����¼�,���ݴ�����λ�õĸı�,�ı��ӦԪ�ص�λ��translate

1.��ô����λ�õĸı�
2.��ô��ȡ��ǰ������
3.�����������λ�������û���

��Ҫ֪��������ļ���(�ڴ�ӡ���¼���):
changedTouches:��ǰҳ�����¸ı�Ĵ����㼯�� �����¼������м�¼������
targetTouches:��¼��ǰԪ����������д����㼯�� touchend�¼�û�м�¼
touches:��¼ҳ�������еĴ����㼯��                  touchend�¼�û�м�¼

��ӡ�¼���ȡ����:
      clientX
      clientY
              ���ڵ�ǰ�ӿڵĴ���������
      pageX
      pageY
              ���ڵ�ǰҳ��Ĵ���������
      screenX
      screenY
              ���ڵ�ǰ��Ļ�����������

�ƶ����ֲ�ͼЧ��:
      �������ɽ����¼�
      dom.addEventListener('transitionend',function(){

      });

      �������������¼�
      dom.addEventListener('animationend',function(){

      });

�ƶ��˵��ᴥ�¼�tap:

���ƶ���click�¼��й�
click�¼����ƶ��˵��ص�:300ms������ʱ
��ʱ���������:�����Ӧ����,�û������½�
�������:
      ����һ:tap(�Ǳ�click��Ӧ������¼�)  touch�������¼�
      ����ʲô��������Ϊ��tap
            1.�϶�Ҫ��click��Ӧ�� 150ms����
            2.���ܻ���
      zepto�ƶ��˵�js�� ������tap�¼�

      ������:���fastclick
           һ���ǳ�����Ŀ�,���ƶ�������Ϸ����������ü����֮���ָ��ʱ,�ܹ��������300������ӳ�


�б�(����)ҳ��

��������Ӧ�ķ���
һ��̶���ȸ��� ��һ������overflow:hidden;
overflow:hidden
      1.�����������
      2.���õ�ǰ����Ϊ��Ե����,��������Ԫ��Ӱ��,Ҳ��Ӱ������Ԫ��
          
����������
      iscroll.js