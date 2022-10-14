/**
 * 언어변경 일본어
 * pre - 2022.09.09
 * modify - 2022.10.08
 * milestone - 2022.12.30
 * dev : 최양원
 * copyright : 최양원
 */
document.addEventListener('DOMContentLoaded', function () {
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
    /**
     * header.html
     */
    document.getElementById('page_icon').setAttribute('alt', 'penguin coderのページ');
    document.getElementById('page_icon').setAttribute('title', 'penguin coderのページ');
    document.getElementById('game_info_top_menu').innerText = 'ゲーム情報';
    document.getElementById('champions_top_menu').innerText = 'チャンピオン';
    document.getElementById('new_news_top_menu').innerHTML = '新情報<span class="caret"></span>';
    document.getElementById('news1_top_menu').innerText = 'お知らせ1';
    document.getElementById('news2_top_menu').innerText = 'お知らせ2';
    document.getElementById('patchnote_top_menu').innerText = 'パッチノート';
    document.getElementById('download_top_menu').innerText = 'ダウンロード';
    document.getElementById('esports_top_menu').innerText = 'Eスポーツ';
    document.getElementById('forInfo_top_menu').innerHTML = '調べる<span class="caret"></span>';
    document.getElementById('forInfo_1_top_menu').innerText = '調べる1';
    document.getElementById('forInfo_2_top_menu').innerText = '調べる2';
    document.getElementById('univers_top_menu').innerText = 'ユニバース';
    document.getElementById('riotStore_top_menu').innerText = 'ライオットストアー';
    document.getElementById('helpDesk_top_menu').innerText = '顧客サポート';
    document.getElementById('resetTimer').innerHTML = '<span class="glyphicon glyphicon-refresh" ></span > 時間リセット';
    document.getElementById('user_info').innerHTML = '<span class="glyphicon glyphicon-user"></span> 会員情報';
    document.getElementById('goback_intro_btn').innerHTML = '<span class="glyphicon glyphicon-remove"></span> ログアウト';
});