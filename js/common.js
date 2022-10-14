/**
 * common
 * pre - 2022.09.09
 * modify - 2022.09.24
 * milestone - 2022.12.30
 * dev : 최양원
 * copyright : 최양원
 */
const NO_DATA_MSG = "검색된 데이터가 없습니다.";
const LOCALE_LANG = {
    "ko": {
        "columns": {
            "name": "Name", //replace the title of column name with the value "Name"
        },
        "groups": { //copy for the auto generated item count in group header
            "item": "item", //the singular  for item
            "items": "items", //the plural for items
        },
        "pagination": {
            "first": "처음", //text for the first page button
            "first_title": "첫 페이지", //tooltip text for the first page button
            "last": "마지막",
            "last_title": "마지막 페이지",
            "prev": "이전",
            "prev_title": "이전 페이지",
            "next": "다음",
            "next_title": "다음 페이지",
            "counter": {
                "showing": "데이터",
                "of": "전체",
                "rows": "건",
                "pages": "페이지수",
            }
        }
    }
};

//패스워드 정규식 체크 숫자, 영문, 특수문자
function passwordCheck(pw) {
    let check = /^(?=.*[a-zA-Z])(?=.*[a-zA-Z0-9])(?=.*[0-9]).{8,16}$/;
    if (pw.length < 8 || pw.length > 16) {
        var msg = "암호를 8자 이상 16자이하로 설정해주세요.";
        return msg;
    }

    if (!check.test(pw)) {
        let msg = "영문, 숫자, 특수문자의 조합으로 입력해주세요.";
        return msg;
    }

    return "s";

}

//필드값 Number 체크 함수
function IsNumber(strNumber) {
    //var reg = RegExp(/^ (\d|-)?(\d|,)*\.?\d*$/);
    let reg = RegExp(/^\d*\d*$/);

    return reg.test(strNumber);

}

//필드값 Number 체크 함수
function checkNumber(field) {

    if (!IsNumber(field.value)) {
        alert("숫자형식만 입력해주십시오.");
        field.value = "";
        field.focus();
        field.select();
    }
}

//이메일 확인 함수
function checkEmailAddress(str) {
    let supported = 0;

    if (window.RegExp) {
        let tempStr = "a";
        let tempReg = new RegExp(tempStr);

        if (tempReg.test(tempStr))
            supported = 1;
    }

    if (!supported)
        return (str.indexOf(".") > 2) && (str.indexOf("@") > 0);

    let r1 = new RegExp("(@.*@)|(\\.\\.)|(@\\.)|(^\\.)");
    let r2 = new RegExp("^.+\\@(\\[?)[a-zA-Z0-9\\-\\.]+\\.([a-zA-Z]{2,3}|[0-9]{1,3})(\\]?)$");

    return (!r1.test(str) && r2.test(str));
}

// 게시글 입력 특수문자 체크(태그입력 방지)
function fnXXSS(Objectname) {
    let intErr = 0;
    let strValue = Objectname.value;
    let re = /[<>;'&=^]/gi; //특수문자 정규식 변수 선언
    for (let i = 0; i < strValue.length; i++) {
        var retCode = strValue.charCodeAt(i);
        retCode = parseInt(retCode);
        if (re.test(strValue)) {
            intErr = -1;
            break;
        }
    }
    if (intErr < 0) {
        alert("특수문자 중  < > ; ' & = ^ 는 사용할수 없습니다.");
        Objectname.value = strValue.replace(/[<>;'&=^]/gi, '');
    }
}

//Null 값 체크
function isNull(str) {
    let strResult = delSpace(str);
    let isnull = false;

    if (strResult == null)
        isnull = true;
    else if (strResult.length < 1)
        isnull = true;

    return isnull;
}

function strToInt(s) {
    try {
        s = s.replace(/px/gi, "");
        return parseInt(s);
    } catch (exception) {
        console.error("strToInt Error [" + exception.name + "] : " + exception.message);
    } finally {

    }
}

//숫자 천단위마다 콤마 찍어주는 함수
function addCommas(nStr) {
    nStr += '';
    let x = nStr.split('.');
    let x1 = x[0];
    let x2 = x.length > 1 ? '.' + x[1] : '';
    let rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}

function strToDate(nStr) {
    let year = str.substr(0, 4);
    let month = str.substr(4, 2);
    let day = str.substr(6, 2);
    return new Date(year, month - 1, dday);
}

//contains 메소드 추가
Array.prototype.contains = function (element) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] == element) {
            return true;
        }
    }
    return false;
}

// 좌측문자열채우기
function lpad(str, padLen, padStr) {
    if (padStr.length > padLen) {
        console.log("오류 : 채우고자 하는 문자열이 요청 길이보다 큽니다");
        return str;
    }
    str += ""; // 문자로
    padStr += ""; // 문자로
    while (str.length < padLen)
        str = padStr + str;
    str = str.length >= padLen ? str.substring(0, padLen) : str;
    return str;
}

// 우측문자열채우기
function rpad(str, padLen, padStr) {
    if (padStr.length > padLen) {
        console.log("오류 : 채우고자 하는 문자열이 요청 길이보다 큽니다");
        return str + "";
    }
    str += ""; // 문자로
    padStr += ""; // 문자로
    while (str.length < padLen)
        str += padStr;
    str = str.length >= padLen ? str.substring(0, padLen) : str;
    return str;
}

function pad(n, width) {
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
}