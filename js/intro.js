/**
 * 로그인 화면
 * pre - 2022.09.09
 * modify - 2022.09.24
 * milestone - 2022.12.30
 * dev : 이규호, 최양원
 * copyright : 이규호, 최양원
 */

let input_id = "";
let input_pw = "";
let login_pw = "";

// 로그인
$(document).ready(function () {
    $("#login_id, #login_pw").keyup(function (e) {
        if (e.keyCode == 13) {
            input_id = $('#login_id').val();
            input_pw = $('#login_pw').val();

            if (localStorage.getItem(input_id) == null) {
                alert('아이디 또는 비밀번호를 확인 해주세요.');
                $("#login_id").val("");
                $("#login_pw").val("");
            }

            let getLoginData = JSON.parse(localStorage.getItem(input_id));
            let pwIndex = Object.values(getLoginData);
            login_pw = pwIndex[1];

            if (login_pw == input_pw) {
                location.href = '/html/index.html';
                return;
            }
            alert('아이디 또는 비밀번호를 확인 해주세요.');
            $("#login_id").val("");
            $("#login_pw").val("");
            login_pw = "";
        }
    });

    $("#intro_login_btn").click(function () {
        input_id = $('#login_id').val();
        input_pw = $('#login_pw').val();

        if (localStorage.getItem(input_id) == null) {
            alert('아이디 또는 비밀번호를 확인 해주세요.');
            $("#login_id").val("");
            $("#login_pw").val("");
        }

        let getLoginData = JSON.parse(localStorage.getItem(input_id));
        let pwIndex = Object.values(getLoginData);
        login_pw = pwIndex[1];

        if (login_pw == input_pw) {
            location.href = '/html/index.html';
            return;
        }
        alert('아이디 또는 비밀번호를 확인 해주세요.');
        $("#login_id").val("");
        $("#login_pw").val("");
    });

    // 아이디 저장
    var key = getCookie("key");
    $("#login_id").val(key);

    if ($("#login_id").val() != "") {
        $("#saveId").attr("checked", true);
    }
    $("#saveId").change(function () {
        if ($("#saveId").is(":checked")) {
            setCookie("key", $("#login_id").val(), 7);
        } else {
            deleteCookie("key");
        }
    });
});

// 아이디 저장 query
function setCookie(cookieName, value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var cookieValue = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toGMTString());
    document.cookie = cookieName + "=" + cookieValue;
}

function deleteCookie(cookieName) {
    var expireDate = new Date();
    expireDate.setDate(expireDate.getDate() - 1);
    document.cookie = cookieName + "=" + "; expires=" + expireDate.toGMTString();
}

function getCookie(cookieName) {
    cookieName = cookieName + "=";
    var cookieData = document.cookie;
    var start = cookieData.indexOf(cookieName);
    var cookieValue = '';
    if (start != -1) {
        start += cookieName.length;
        var end = cookieData.indexOf(';', start);
        if (end == -1)
            end = cookieData.length;
        console.log("end위치 : " + end);
        cookieValue = cookieData.substring(start, end);
    }
    return unescape(cookieValue);
}