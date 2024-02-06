window.onload = function(){
    $(function(){
        $(".right").hide();
        $("#right0").show();

        $(".menu_list").on("click",function(){
            no = $(this).index(".menu_list");
            console.log(no);
            $(".right").hide();
            $("#right"+no).show();
        })
        
        var gno=0, sno;
        $(".top_menu li").on("click",function(){
            $(".top_menu li").css("background","none");
            $(this).css("background","#ccc");
            
            gno = $(this).index();
            $(".right_pic img").attr("src","img/menu"+gno+"_img0.jpg");
            for(i=0; i<5; i++){
                $(".left_pic"+i).attr("src","img/menu"+gno+"_img"+i+".jpg");
            }
        })
        
        $(".left_pic img").on("click",function(){
            sno = $(this).index(".left_pic img");
            $(".right_pic img").attr("src","img/menu"+gno+"_img"+sno+".jpg")
        })
    }) 
}