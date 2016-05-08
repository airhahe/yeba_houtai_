/**
 * Created by chnice on 5/7/16.
 */
/*分页功能*/
var curPage = 1;
var total,pageSize,totalPage;

function getData(page) {
    $.ajax({
        type:'POST',
        url:'pages.php',
        data:{'pageNum':page-1},
        dataType:json,
        beforeSend:function () {
            $('.detail table').append("<tr class='list'><td>Loading.....</td><tr>")
        },
        success:function (json) {
            $(".detail table").filter(".title").empty();
            total = json.total;
            pageSize = json.pageSize;
            curPage = page; //当前页
            totalPage = json.totalPage;//总页数
            var li = "";
            var list = json.list;
            $.each(list,function (index,array) {
                li += "<tr class='list'>" +
                    "<td><input type='checkbox'></td>" +
                    "<td>" +
                    array["id"] + //用户id
                    "</td>" +
                    "<td class='upic'><img src='" +
                    array["userPhoto"] +  //用户照片
                    "'><span>" +
                    array["userName"] +  //用户名称
                    "</span><em>" +
                    array["phoneNumber"] +  //用户手机号
                    "</em></td><td class='time'><span>" +
                    array["lastDate"] + //最后登陆日期
                    "</span><em>" +
                    array["lastMinute"] + //最后登陆时间
                    "</em></td><td><div class='pho-num'>" +
                    array["photoNum"] + //图片数目
                    "</div><div class='msg-num'>" +
                    array["msgNum"] + //信息数目
                    "</div></td><td class='service'><span>" +
                    array["service"] + //手机型号
                    "</span><em>" +
                    array["appType"] + // 软件登陆
                    "</em></td><td class='isPub'><p>" +
                    array["Pub"] + //酒吧数
                    "</p></td><td class='ustate'><p class='" +
                    array['state-icon'] + //用户状态class
                    "'></p></td><td class='dosth'><div><a href=''>操作</a>/<a href=''>查看</a></div></td></tr>"
            });
            $('.detail table').append(li);
        },
        //生成分页条
        complete:function () {
            getPageBar();
        },
        error:function () {
            alert("数据加载失败");
        }
    });
}

//获取分页条
function getPageBar() {
    //页码大于最大页数
    if(curPage > totalPage) curPage = totalPage;
    //页码小于1
    if(curPage<1) curPage = 1;
    pageStr_L = "<p>第<span>"+curPage+"</span>页,共<span>"+totalPage+"</span>页 | 共<em>"+pageSize+"</em>条记录</p>"
    pageStr_R = "";

    $(".page-count").html(pageStr_L);
    //如果时第一页
    if(curPage==1){

    }
}