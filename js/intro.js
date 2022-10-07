/**
 * 로그인 화면
 * pre - 2022.09.09
 * modify - 2022.10.06
 * milestone - 2022.12.30
 * dev : 이규호, 최양원
 * copyright : 이규호, 최양원
 */
let userId = "";
let userEmail = "";
let inputDomain = "";
let userPw = "";
let userPw2 = "";
let fnCheckId_result = 1; // 아이디 중복 체크 결과를 담을 변수
let fnCheckPw_result = 1; // 비밀번호 일치 확인 결과를 담을 변수

// 회원가입 쿼리
function fnCheckId() {
    userId = $('#insert_Id').val();

    if (localStorage.getItem(userId) == null) {
        alert("사용 가능한 ID 입니다.");
        fnCheckId_result = 0;
    } else {
        alert("사용중인 ID 입니다.");
        fnCheckId_result = 1;
    }
}

// 비밀번호 확인 query
function fnCheckPw() {
    var pw1 = $('#insert_Pw').val();
    var pw2 = $('#insert_Pw_confirm').val();
    var pwsc = ["!", "@", "#", "%", "^", "?"];
    var pw_check_sc = 0;
    var num = pw1.search(/[0-9]/g);
    var eng = pw1.search(/[a-z]/ig);
    var spe = pw1.search(/[!@#%^?]/gi);

    if (pw1.length < 6 || pw1.length > 15) {
        alert("비밀번호는 6글자 이상, 15글자 이하로 입력해주세요.");
        document.getElementById('insert_Pw').value = '';
        return false;
    }
    if (pw1.search(/\s/) != -1) {
        alert("비밀번호는 공백 없이 입력해주세요.");
        return false;
    }
    for (var i = 0; i < pwsc.length; i++) {
        if (pw1.indexOf(pwsc[i]) != 0 - 1) {
            pw_check_sc = 1;
        }
    }
    if (pw_check_sc == 0) {
        alert("!,@,#,%,^,?의 특수문자가 들어가 있지 않습니다.");
        document.getElementById('insert_Pw').value = '';
        return false;
    }
    if (num < 0 || eng < 0 || spe < 0) {
        alert("영문, 숫자, 특수문자를 혼합하여 입력해주세요.");
        return false;
    }
    if ($('#insert_Pw').val() != "" && $('#insert_Pw_confirm').val() != "") {
        if ($('#insert_Pw').val() == $('#insert_Pw_confirm').val()) {
            $('.pwConfirmError').css('visibility', 'hidden');
            fnCheckPw_result = 0;
        } else {
            $('.pwConfirmError').css('visibility', 'visible');
            fnCheckPw_result = 1;
        }
    }
}

function fnTryRegist() {
    userId = $('#insert_Id').val();
    userEmail = $('#insert_Email').val() + "@" + $("#input-domain").val();
    emailDomain = $('#input-domain').val();
    userPw = $('#insert_Pw').val();
    userPw2 = $('#insert_Pw_confirm').val();

    if (userId == "") {
        alert("아이디를 입력해주세요.");
        return false;
    }
    if (userEmail == "", emailDomain == "") {
        alert("이메일을 입력해주세요.");
        return false;
    }
    if (userPw == "", userPw2 == "") {
        alert("비밀번호를 입력해주세요.");
        return false;
    }
    if (fnCheckId_result == 1) {
        alert("아이디 중복확인을 확인해주세요.");
        return false;
    } else if (fnCheckPw_result == 1) {
        alert("비밀번호를 확인해주세요.");
        return false;
    }
    if (fnCheckId_result == 0, fnCheckPw_result == 0) {
        var infoArr = { email: userEmail, password: userPw2 }
        console.log("start to submit user info...");
        localStorage.setItem(userId, JSON.stringify(infoArr));
        alert("회원가입이 완료되었습니다.");
    }
}

let userLoginInfo = "";
let input_id = "";
let input_pw = "";
let login_pw = "";
let login_email = "";

// 로그인
$(document).ready(function () {
    // email 도메인 선택시 input 변경 쿼리
    $("#select_domain").change(function () {
        $("#select_domain option:selected").each(function () {
            if ($(this).val() == '1') {
                $("#input-domain").val('');
                $("#input-domain").attr("disabled", false);
            } else {
                $("#input-domain").val($(this).text());
                $("#input-domain").attr("disabled", true);
            }
        });
    });

    $("#login_id, #login_pw").keyup(function (e) {
        if (e.keyCode == 13) {
            input_id = $('#login_id').val();
            input_pw = $('#login_pw').val();

            if (localStorage.getItem(input_id) == null) {
                alert('아이디 또는 비밀번호를 확인 해주세요.');
                $("#login_id").val("");
                $("#login_pw").val("");
            }

            var getLoginData = JSON.parse(localStorage.getItem(input_id));
            let pwIndex = Object.values(getLoginData);
            login_pw = pwIndex[1];
            login_email = pwIndex[0];

            if (login_pw == input_pw) {
                var pwemArr = { email: login_email, id: input_id }
                sessionStorage.setItem(login_pw, JSON.stringify(pwemArr));

                location.href = '/html/index.html';
                return;
            }
            alert('아이디 또는 비밀번호를 확인 해주세요.');
            $("#login_id").val("");
            $("#login_pw").val("");
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
        login_email = pwIndex[0];

        if (login_pw == input_pw) {
            var pwemArr = { email: login_email, id: input_id }
            sessionStorage.setItem(login_pw, JSON.stringify(pwemArr));

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

let langToggle = true;
$(function () {
    $("#lang_select").click(() => {
        if (langToggle) {
            $("#lang_dropdown").slideDown(500);
        } else {
            $("#lang_dropdown").slideUp(500);
        }
        langToggle = !langToggle;
    });
});