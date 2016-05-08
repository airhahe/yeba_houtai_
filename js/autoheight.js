/**
 * Created by chnice on 5/7/16.
 */
$(document).ready(function () {
    var l_h = $(".sider-bar"). innerHeight();
    var r_h = $(".contents"). innerHeight();
    //console.log(l_h +"____" +r_h);
    if( l_h>=r_h ){
        $(".contents").css({height:l_h+"px"});
    }else{
        $(".sider-bar").css({height:r_h+"px"});
    }

    //status
    $(".ustate p").each(function (index) {
        if($(this).hasClass("normal-status")){
            $(this).html("正常");
        }
        else if($(this).hasClass("error-status")){
            $(this).html("冻结");
        }
        else if($(this).hasClass("ban-status")){
            $(this).html("禁言");
        }
    });




});
