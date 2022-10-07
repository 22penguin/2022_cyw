/**
 * 언어변경 default
 * pre - 2022.09.09
 * modify - 2022.10.08
 * milestone - 2022.12.30
 * dev : 이규호, 최양원
 * copyright : 이규호, 최양원
 */
$(document).ready(function () {
    $("#ko").click(function () {
        fnLangKo();
    });

    $("#jp").click(function () {
        fnLangJp();
    });

    $("#en").click(function () {
        fnLangKo();
    });
});

function fnLangKo() {
    /**
     * intro.html
     */
    document.getElementById('text_login').innerText = '로그인';
    document.getElementById('login_info_1').innerText = '계정 정보를 입력한 후에';
    document.getElementById('login_info_2').innerText = '접속하실 수 있습니다.';
    document.getElementById('login_id').setAttribute('placeholder', '아이디를 입력하세요.');
    document.getElementById('login_pw').setAttribute('placeholder', '패스워드를 입력하세요.');
    document.getElementById('intro_regist_btn').innerHTML = '<span class="glyphicon glyphicon-user"></span> 회원가입';
    document.getElementById('intro_login_btn').innerHTML = '<span class="glyphicon glyphicon-ok"></span> 로그인';
    document.getElementById('saveId_lebel').innerText = '아이디 저장';
    document.getElementById('registModalLabel').innerText = '회원가입';
    document.getElementById('insert_Id').setAttribute('placeholder', '아이디를 입력하세요.');
    document.getElementById('choose_domain_reg').innerText = '직접입력';
    document.getElementById('insert_Pw').setAttribute('placeholder', '비밀번호를 입력하세요.');
    document.getElementById('insert_Pw_confirm').setAttribute('placeholder', '비밀번호를 다시 입력하세요.');
    document.getElementById('wrong_password').innerText = '비밀번호가 틀립니다!';
    document.getElementById('try_regist_btn').innerHTML = '<span class="glyphicon glyphicon-ok"></span>회원가입';
    document.getElementById('checkId').innerText = '중복확인';
}

function fnLangJp() {
    /**
     * intro.html
     */
    document.getElementById('text_login').innerText = 'ログイン';
    document.getElementById('login_info_1').innerText = 'アカウント情報を入力されたあと';
    document.getElementById('login_info_2').innerText = 'アクセス可能です。';
    document.getElementById('login_id').setAttribute('placeholder', 'IDを入力してください。');
    document.getElementById('login_pw').setAttribute('placeholder', 'パスワードを入力してください。');
    document.getElementById('intro_regist_btn').innerHTML = '<span class="glyphicon glyphicon-user"></span> アカウント登録';
    document.getElementById('intro_login_btn').innerHTML = '<span class="glyphicon glyphicon-ok"></span> ログイン';
    document.getElementById('saveId_lebel').innerText = 'IDセーブ';
    document.getElementById('registModalLabel').innerText = 'アカウント登録';
    document.getElementById('insert_Id').setAttribute('placeholder', 'IDを入力してください。');
    document.getElementById('choose_domain_reg').innerText = '直接入力';
    document.getElementById('insert_Pw').setAttribute('placeholder', 'パスワードを入力してください。');
    document.getElementById('insert_Pw_confirm').setAttribute('placeholder', '再びパスワードを入力してください。');
    document.getElementById('wrong_password').innerText = 'パスワードが違います！';
    document.getElementById('try_regist_btn').innerHTML = '<span class="glyphicon glyphicon-ok"></span>アカウント登録';
    document.getElementById('checkId').innerText = 'ID確認';
}