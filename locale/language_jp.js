/**
 * 언어변경 일본어
 * pre - 2022.09.09
 * modify - 2022.10.02
 * milestone - 2022.12.30
 * dev : 이규호, 최양원
 * copyright : 이규호, 최양원
 */
document.addEventListener('DOMContentLoaded', function () {
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
});