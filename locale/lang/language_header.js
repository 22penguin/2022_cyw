/**
 * 언어변경 default
 * pre - 2022.09.09
 * modify - 2022.10.08
 * milestone - 2022.12.30
 * dev : 최양원
 * copyright : 최양원
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
     * header.html
     */
    document.getElementById('page_icon').setAttribute('alt', 'penguin coder의 페이지');
    document.getElementById('page_icon').setAttribute('title', 'penguin coder의 페이지');
    document.getElementById('game_info_top_menu').innerText = '게임정보';
    document.getElementById('champions_top_menu').innerText = '챔피언';
    document.getElementById('new_news_top_menu').innerHTML = '새소식<span class="caret"></span>';
    document.getElementById('news1_top_menu').innerText = '소식1';
    document.getElementById('news2_top_menu').innerText = '소식2';
    document.getElementById('patchnote_top_menu').innerText = '패치노트';
    document.getElementById('download_top_menu').innerText = '다운로드';
    document.getElementById('esports_top_menu').innerText = 'E스포츠';
    document.getElementById('forInfo_top_menu').innerHTML = '알아보기<span class="caret"></span>';
    document.getElementById('forInfo_1_top_menu').innerText = '알아보기1';
    document.getElementById('forInfo_2_top_menu').innerText = '알아보기2';
    document.getElementById('univers_top_menu').innerText = '유니버스';
    document.getElementById('riotStore_top_menu').innerText = '라이엇 스토어';
    document.getElementById('helpDesk_top_menu').innerText = '고객지원';
    document.getElementById('resetTimer').innerHTML = '<span class="glyphicon glyphicon-refresh" ></span > 시간 초기화';
    document.getElementById('user_info').innerHTML = '<span class="glyphicon glyphicon-user"></span> 회원정보';
    document.getElementById('goback_intro_btn').innerHTML = '<span class="glyphicon glyphicon-remove"></span> 로그아웃';
}

function fnLangJp() {
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
}