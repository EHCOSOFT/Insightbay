$(document).ready(function () {
    $(".main-sec-03 .link-primary").on("click", function (e) {
        e.preventDefault(); // 링크 기본 동작 방지

        // 숨겨진 후기들을 보여줌
        $(".main-sec-03 .sec-cont-one li.hidden").addClass("show");

        // 버튼 영역 숨김
        $(".main-sec-03 .link-group").hide();
    });
});

AOS.init();