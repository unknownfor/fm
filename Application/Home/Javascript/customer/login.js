/**
 * Created by hisihi on 2016/8/10.
 */
$(document).ready(function () {

    //弹出登录框
    $ ('#login').click (function () {
        $('.login').show();
    });

    /*someday I will be remember*/
    function getCheckCode() {
        var codeUrl = window.fmUrlObject.img+"/checkCode.png";
        $("#pass-code-img").attr("src", codeUrl);
    }

    //关闭登录框
    $(".closeLogin").on("click", function () {
        $(".login").hide();
    });

    //login按钮
    $("#login-btn").on("click", function () {
        var userName = $("#user-name").val();
        var pwd = $("#password").val();
        if (userName != "邮箱/用户名" && userName != "") {
            if (pwd != "密码" && pwd != "") {
                //userId = userName;
                $(".login-container").remove();
                $("#over-lay").remove();
            }
            else {
                alert("密码错误！");
            }
        }
        else {
            alert("用户名错误！");
        }
    });

    //用户名
    $("#user-name").on("click", function () {
        if ($(this).val() == "邮箱/用户名") {
            $(this).val("");
        }
    });
    $("#user-name").on("focusout", function () {
        if ($(this).val() == "") {
            $(this).val("邮箱/用户名");
        }
    });
    //密码
    $("#password").on("click", function () {
        if ($(this).val() == "密码") {
            $(this).val("");
        }
    });
    $("#password").on("focusout", function () {
        if ($(this).val() == "") {
            $(this).val("密码");
        }
    });
    //验证码
    $("#pass-code").on("click", function () {
        if ($(this).val() == "验证码") {
            $(this).val("");
        }
    });
    $("#pass-code").on("focusout", function () {
        if ($(this).val() == "") {
            $(this).val("验证码");
        }
    });

});