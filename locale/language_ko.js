/**
 * 언어변경 한국어
 * pre - 2022.09.09
 * modify - 2022.10.08
 * milestone - 2022.12.30
 * dev : 이규호, 최양원
 * copyright : 이규호, 최양원
 */
document.addEventListener('DOMContentLoaded', function () {
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
});