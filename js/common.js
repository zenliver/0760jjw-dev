// Code by ZHJ/ZenLiver
// 灵猫

$(function () {

    // 根域名自动重定向到www主域名
    $(function () {
        var domainName=window.location.hostname;
        console.log(domainName);
        var urlPath=window.location.pathname;
        console.log(urlPath);
        if (domainName == "0760jjw.com") {
            window.location.href="http://www.0760jjw.com"+urlPath;
        }
    });

    // 移动设备下：“全部商品分类”改为点击切换显示/隐藏
    var screenWidth=$(window).width();
    if (screenWidth<1025) {
        $("#el_14927538274858kw11").click(function () {
            $("#el_1492757044432qwwx1").slideToggle(500);
        });
    }

    // 手机下：点击菜单项显示/隐藏子菜单
    $("#app_5500345888940088 li.family.navItem").click(function () {
        $(this).toggleClass("selected active");
        $(this).find("ul.navSon").slideToggle(500);
    });

    // 移动设备下：顶部导航子菜单改为点击切换显示/隐藏
    var screenWidth=$(window).width();
    if (screenWidth<1025) {
        $(".nav_1 .navList li.family.navItem").click(function () {
            $(this).find("ul.navSon").toggleClass("visibility_toggle");

        });

        $("#el_14908598674884xw11").off();
        $("#el_14908598674884xw11").click(function () {
            $("#app_2378630758728660").slideToggle(500);
        });
    }

    // 右侧悬浮条：微信二维码
    $("#app_3919654703623535").click(function () {
        $(this).next().fadeToggle("fast");
        event.stopPropagation();
    });
    // $(document).click(function (e) {
    //     console.log("点击微信图标之外的元素了！");
    //     var clickTarget = e.target;
    //     if (clickTarget != $("##app_5747325887592472 .appContent .image img")[0] && clickTarget != $("#app_3919654703623535")[0]) {
    //         $("##app_5747325887592472").fadeOut("slow");
    //     }
    // });

    // 以前旧的效果：点击微信图标显示遮罩层和悬浮层
    // $("#app_3919654703623535").click(function () {
    //     $("#app_2814781838292986 > .appMask, #app_2814781838292986 > .appContent").show();
    // });
    // $("#app_2814781838292986 > .appMask").click(function () {
    //     $(this).hide();
    //     $("#app_2814781838292986 > .appContent").hide();
    // });

    // 底部客服微信二维码
    $("#app_2760091177200049").click(function () {
        $(this).next().slideToggle("slow");
        $(this).attr("data-clicked","clicked");
        event.stopPropagation(); // 阻止事件冒泡，防止微信图标的点击事件传递到document上面，这样当点击微信图标时下面的方法1就不会执行，只有点击微信图标之外的元素时才会执行方法1里的代码。
    });

    // 方法1：（效果完美）
    $(document).click(function (e) {
        console.log("点击微信图标之外的元素了！");
        var clickTarget = e.target;
        if (clickTarget != $("#app_9174927673375094 .appContent .image img")[0] && clickTarget != $("#app_2760091177200049 .appContent .image img")[0]) {
            $("#app_9174927673375094").slideUp("slow");
        }
    });

    // 方法2：（效果不够好）
    // $(document).click(function () {
    //     var dataClicked = $("#app_2760091177200049").attr("data-clicked");
    //     if (dataClicked == "clicked") {
    //         $("#app_9174927673375094").slideUp("slow");
    //     }
    // });

    // 53客服
    $.getScript("http://tb.53kf.com/code/code/10155743/1");

});
