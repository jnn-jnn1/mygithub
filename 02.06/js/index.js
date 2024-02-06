window.onload = function(){
    $(".right").hide();
    $("#right4").show();
 
    $(function(){
    $(".menu").on("click",function(){
        let no = $(this).attr("class").substring(4, 5);
        // console.log(no);
        $(".right").hide();
        $("#right"+no).show();
    })
    let gno=0, sno;
    $(".right_menu li").on("click",function(){
        $(".right_menu li").css("background","none");
        $(this).css("background","#D1CBBD")
        $(".right4_small li").css("background","none");

        gno = $(this).index();
        for(i =0; i<5 ; i++){
            $(".pic"+i).attr("src","img/menu"+gno+"_img"+i+".jpg");
        }
        $(".right4_pic").attr("src","img/menu"+gno+"_img0.jpg");
    
    })
    $(".right4_small li").on("click",function(){
        sno = $(this).index();
        // console.log(sno);
        console.log("img/menu"+gno+"_img"+sno+".jpg");
        $(".right4_pic").attr("src","img/menu"+gno+"_img"+sno+".jpg");
    })
console.log(gno);
    })
 }