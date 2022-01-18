$(document).ready(function(){
      // 모달창닫기
      $('.modal a').click(function () {
        $('.modal').hide();
      });

    //마우스오버시
    $("article").on("mouseenter", function(){
        //변수 vid에 비디오파일참조
        var vid = $(this).find("video").get(0);
        //동영상의 재생위치를 0 처음으로 설정
        // vid.currentTime=0;
        //동영상을 재생
        vid.play();

        $(this).stop().animate({"width":"25%"},800,function(){
            //아티클이 넓어진뒤 아래구문이 실행됩니다
            $(this).find("h3").stop().animate({"right":"10px"},400);
            $(this).find("p").stop().animate({"right":"10px"},800);
            $(this).find("h2 a").css({"color":"#fff"});
        });
        
        $(this).find("video").stop().animate({"opacity":"0.9"},1200);
    });

    //마우스 아웃시
    $("article").on("mouseleave", function(){
        //변수 vid에 비디오를 담고 pause로 동영상을 정지
        var vid = $(this).find("video").get(0);
        vid.pause();

        $(this).stop().animate({"width":"12%"},700);
        $(this).find("video").stop().animate({"opacity":"0"},2000);
        $(this).find("h3").stop().animate({"right":"-310px"},200);
        $(this).find("p").stop().animate({"right":"-310px"},500);
        $(this).find("h2 a").css({"color":"#333"});
    });

});