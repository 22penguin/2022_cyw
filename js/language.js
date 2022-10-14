/**
 * 언어변경
 * pre - 2022.09.09
 * modify - 2022.10.14
 * milestone - 2022.12.30
 * dev : 최양원
 * copyright : 최양원
 */

let onLanguage = {
    "ko": {
        content: "다국어설정</br> 예시"
    },

    "en": {
        content: "multi Language</br> example"
    }
};

window.onload = () => {
    let langKo = document.getElementById("langKo");
    let langEn = document.getElementById("langEn");

    let setLanguage = (lang) => {
        let changeNodeList = Array.prototype.slice.call(document.querySelectorAll('[data-detect]'));

        // 각 dataset중 detect인 요소들을 찾아 변경하는 곳. 
        changeNodeList.map(v => {
            v.textContent = onLanguage[lang][v.dataset.detect]
        })
    };

    langKo.addEventListener("click", () => {
        setLanguage(langKo.dataset.lang);
    });

    langEn.addEventListener("click", () => {
        setLanguage(langEn.dataset.lang);
    });
};

// test 필요
/*** setLanguage * use $.lang[currentLanguage][languageNumber]*/
// function setLanguage(currentLanguage) { console.log('setLanguage', arguments); $('[data-langNum]').each(function () { var $this = $(this); $this.html($.lang[currentLanguage][$this.data('langnum')]); }); }   // 언어 변경$('button').click(function() {  var lang = $(this).data('lang');  setLanguage(lang); });
