$(document).ready(function () {

    // ==============================
    // [전역]
    // ==============================

    /* -- 공통 레이아웃 삽입 (header, footer 등) -- */
    /* -- 페이지마다 공통으로 사용되는 구조를 동적으로 삽입 -- */
    $("#header").append(Header());
    $("#footer").append(Footer());
    // $("#navbar").append(Navbar());

    /* -- 상단 메뉴 초기화 -- */
    initNavbarActive();







    // ==============================
    // [컴포넌트] 
    // ==============================

    /* -- header -- */
    /* -- .container 내부에 모바일 메뉴, 로고, 네비게이션, 로그인 영역 포함 -- */
    function Header() {
        return `
            <div class="container">
                <button type="button" class="btn btn-ico header-menu">
                    <img src="img/ico/i-menu.svg" alt="모바일 메뉴 열기">
                </button>
                <div class="header-logo">
                    <a href="0_메인.html">
                        <img src="img/symbol-logo.svg" alt="인사이트 베이 로고">
                    </a>
                    <a href="javascript:void(0);">
                        <img src="img/logo.svg" alt="인사이트 베이 로고">
                    </a>
                </div>
                <nav class="navbar">
                    <button type="button" class="btn btn-ico header-menu-close">
                        <img src="img/ico/i-x.svg" alt="모바일 메뉴 닫기">
                    </button>
                    <ul>
                        <li><a href="1_클래스.html">CLASS</a></li>
                        <li><a href="1_도서.html">BOOK</a></li>
                        <li><a href="1_공지사항.html">NOTICE</a></li>
                        <li><a href="javascript:void(0);">COMMUNITY</a></li>
                    </ul>
                </nav>
                <ul class="header-login">
                    <li><a href="javascript:void(0);" class="open-modal" data-modal-id="loginModal">LOG IN</a></li>
                    <li><a href="javascript:void(0);">JOIN</a><span>신규 가입 2,000P 지급</span></li>
                </ul>
            </div>
        `
    }

    function Footer() {
        return `
        <div class="container">
            <img src="img/owl.svg" alt="캐릭터" class="footer-owl">
            <div class="footer-wrap">
                <div class="footer-logo">
                    <img src="img/footer-logo.svg" alt="인사이트 베이">
                </div>
                <div class="footer-info">
                    <address class="address">
                        <p>인사이트베이 대표 : 박형일<br>
                            개인정보책임관리자 : 박형일, 박찬희<br>
                            사업자번호 : 711-88-03274<br>
                            통신판매업 : 제 2024-서울중구-1449호<br>
                            사무실 : 서울특별시 중구 남대문로 9길 24</p>
                    </address>
                    <ul class="footer-terms">
                        <li>방침</li>
                        <li><a href="0_이용약관.html">이용약관</a></li>
                        <li><a href="0_개인정보취급방침.html">개인정보취급방침</a></li>
                    </ul>
                    <div class="footer-cs">
                        <h6>고객센터</h6>
                        <p>Email : edward@insightbay.co.kr<br>
                            KakaoTalk 상담<br>
                            전화 : 02-6081-6050<br>
                            Time : 10:00 AM - 18:00 PM<br>
                            http://cafe.naver.com/iloveconsulting</p>
                    </div>
                </div>
                <p class="footer-copy">CopyRight © 2024 InsightBay All Rights Reserved</p>
            </div>
        </div>`
    }


    /* -- 모바일 메뉴 관련 이벤트 바인딩 -- */
    /* -- 윈도우 width가 992px 이하일 때만 실행 -- */
    let windowWidth = $(window).width();
    if (windowWidth <= 992) {
        /* -- 모바일 메뉴 열기 -- */
        $(".header-menu").on("click", openNav);

        /* -- 모바일 메뉴 닫기 -- */
        $(".header-menu-close").on("click", closeNav);
    }
    // else {
    //     // 💻 PC 메뉴용 이벤트가 필요할 경우 여기에 추가
    // }








    // ==============================
    // [함수]
    // ==============================

    /* -- 상단 메뉴 열기 -- */
    function openNav() {
        $(".header .navbar").addClass("show");
        $("body").addClass("scroll-lock");
    }

    /* -- 상단 메뉴 닫기 -- */
    function closeNav() {
        $(".header .navbar").removeClass("show");
        $("body").removeClass("scroll-lock");
    }

    /* -- 상단 메뉴 클릭 시 .active 토글 -- */
    function initNavbarActive() {
        $(document).on("click", ".navbar > ul > li > a", function (e) {
            // e.preventDefault();
            const $clickedLi = $(this).parent("li");
            $clickedLi.addClass("active").siblings().removeClass("active");
        });
    }
});
