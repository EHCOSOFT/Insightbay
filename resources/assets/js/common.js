$(document).ready(function () {

    // ==============================
    // [전역] 이벤트 바인딩
    // ==============================
    bindPasswordToggle(); // 비밀번호 보기


    // ==============================
    // [전역] 이벤트
    // ==============================

    /* -- .btn-pw-eye에 비밀번호 토글 기능 바인딩 -- */
    function bindPasswordToggle() {
        $(document).off("click", ".btn-pw-eye").on("click", ".btn-pw-eye", function () {
            const $btn = $(this);
            const $group = $btn.closest(".input-group-child");
            const $input = $group.find("input");
            const $img = $btn.find("img");

            const isHidden = $input.attr("type") === "password";

            if (isHidden) {
                $input.attr("type", "text");
                $img.attr("src", "img/ico/i-eye-show.svg");
                $img.attr("alt", "비밀번호 보임");
            } else {
                $input.attr("type", "password");
                $img.attr("src", "img/ico/i-eye-hide.svg");
                $img.attr("alt", "비밀번호 숨김");
            }
        });
    }


    // ==============================
    // [모달]
    // ==============================

    // 모달 열기
    $(document).on("click", ".open-modal", function () {
        const modalId = $(this).data("modal-id");

        /* -- 2중모달 X (기존 모달은 닫고, 새 모달 하나만 열리는 구조) -- */
        // 1️⃣ 현재 열려있는 모든 모달 닫기
        $(".modal-wrap.active").each(function () {
            closeModal($(this));
        });

        // 2️⃣ 새 모달 열기
        openModal(modalId);
    });

    // 모달 닫기 버튼
    $(document).on("click", ".btn-modal-close", function () {
        const $modal = $(this).closest(".modal-wrap");
        closeModal($modal);
    });

    // 외부 클릭 시 닫기 / 내부 클릭 막기 / 키보드 대응
    setupModalCloseOnOutsideClick();
    // setupModalContentClick();
    setupIOSKeyboardFix();

    function removeDefaultEvent(e) {
        e.preventDefault();
    }

    /* -- 모달 열기 버튼 클릭 이벤트 -- */
    function openModal(modalId) {
        const $modal = $("#" + modalId);
        $modal.addClass("active");

        $("body").addClass("scroll-lock");

        if (!($modal.hasClass("full-modal") || $modal.hasClass("toggle-modal"))) {
            // wheel 이벤트 차단 (PC용)
            // window.addEventListener("wheel", removeDefaultEvent, { passive: false });
        }

        if ($modal.hasClass("toggle-modal")) {
            // 모바일 touchmove 차단 (iOS 대응)
            window.addEventListener("touchmove", removeDefaultEvent, { passive: false });
        }

    }


    /* -- 모달 닫기 버튼 클릭 이벤트 -- */
    function closeModal($modal) {
        console.log("🔒 closeModal 실행됨")
        $modal.removeClass("active");
        $("body").removeClass("scroll-lock");
        // window.removeEventListener("wheel", removeDefaultEvent);
        // window.removeEventListener("touchmove", removeDefaultEvent);
    }

    /* -- 모달 영역 외부를 클릭하여 닫기 -- */
    function setupModalCloseOnOutsideClick() {
        $(".modal-wrap").on("click", function (e) {
            if ($(e.target).hasClass("modal-wrap")) {
                const $target = $(this);
                console.log("닫을 모달:", $target.attr("id")); // ✅ 이거 확인
                closeModal($target);
            }
        });
    }

    /* -- 모달 내부 클릭 시 닫기 방지 -- */
    // function setupModalContentClick() {
    //     $(".modal-content").on("click", function (e) {
    //         e.stopPropagation();
    //     });
    // }

    /* -- ✅ iOS 키보드 대응 : ios 키보드 scroll resize (modal 에서만 생기는 현상) -- */
    function setupIOSKeyboardFix() {
        $('.modal-wrap input').on("keydown", function (event) {
            if (event.key === "Enter") {
                $(this).blur();
            }
        });

        $('.modal-wrap input').on('blur', function () {
            window.scrollTo(0, 1); // iOS 이슈 대응
        });
    }








    // ==============================
    // [Swiper]
    // ==============================

    // 메인
    const mainVisualSwiper = new Swiper(".main-visual-swiper", {
        autoplay: {
            delay: 4000, // 4초마다 자동 전환
            disableOnInteraction: false // 유저가 조작해도 autoplay 계속 유지
        },
        loop: true // 필요시 반복 설정 (옵션)
    });






    // ==============================
    // [로그인]
    // ==============================

    /* -- 이메일 입력 시 형식 검사 → 오류 메시지 토글 -- */
    $(document).on("input", ".email-input", function () {
        const $input = $(this);
        const $group = $input.closest(".input-group");
        const email = $input.val().trim();

        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

        if (!isValidEmail) {
            $group.addClass("input-error");
        } else {
            $group.removeClass("input-error");
        }
    });







    // ==============================
    // [회원가입]
    // ==============================
    /* -- 체크박스 전체 선택 -- */
    $(document).on("change", ".check-all", function () {
        const isChecked = $(this).is(":checked");
        $(".check-target").prop("checked", isChecked);
    });





    // ==============================
    // [메인]
    // ==============================
    $(".package-title h2").on("click", function () {
        const $li = $(this).closest("li");
        $li.toggleClass("show");
    });






    // ==============================
    // [클래스]
    // ==============================
    initTabs(".tab-wrap");

    function initTabs(selector) {
        $(selector).each(function () {
            const $tabWrap = $(this);
            const $tabButtons = $tabWrap.find(".tab-list li");
            const $tabContents = $tabWrap.find(".tab-content");

            $tabButtons.on("click", function () {
                const tabId = $(this).data("tab");

                $tabButtons.removeClass("active");
                $(this).addClass("active");

                $tabContents.removeClass("active");
                $tabWrap.find("#" + tabId).addClass("active");
            });
        });
    }
});

