
/* 프로필 이미지 교체 */
$(function () {
    $('#profileImgInput').on('change', function () {
        const file = this.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = function (e) {
            $('.biz-my-profile').css('background-image', 'url(' + e.target.result + ')');
        };
        reader.readAsDataURL(file);
    });
});

/* 드롭다운 */
$(function () {
    /* 버튼 클릭 → 해당 드롭다운 open 토글 */
    $(document).on('click', '.btn-dropdown', function (e) {
        e.stopPropagation();
        const $wrap = $(this).closest('.dropdown-wrap');
        const isOpen = $wrap.hasClass('open');
        $('.dropdown-wrap').removeClass('open');
        if (!isOpen) $wrap.addClass('open');
    });

    /* 외부 클릭 시 닫기 */
    $(document).on('click', function () {
        $('.dropdown-wrap').removeClass('open');
    });

    /* 메뉴 내부 클릭 시 닫기 */
    $(document).on('click', '.dropdown-menu li button', function () {
        $(this).closest('.dropdown-wrap').removeClass('open');
    });
});

/* 공고 선택 */
$(function () {
    /* 트리거 클릭 → 드롭다운 토글 */
    $(document).on('click', '.job-pick-trigger', function (e) {
        e.stopPropagation();
        const $wrap = $(this).closest('.job-pick-wrap');
        if ($wrap.hasClass('empty')) return;
        const isOpen = $wrap.hasClass('open');
        $('.job-pick-wrap').removeClass('open');
        if (!isOpen) $wrap.addClass('open');
    });

    /* 아이템 선택 */
    $(document).on('click', '.job-pick-item', function (e) {
        e.stopPropagation();
        const $wrap = $(this).closest('.job-pick-wrap');
        const title = $(this).data('title');
        const date = $(this).data('date');
        const deadline = $(this).data('deadline');
        const warn = $(this).data('warn');

        $wrap.find('.job-pick-title').text(title);
        $wrap.find('.job-pick-date').text(date);
        $wrap.find('.job-pick-deadline').text(deadline);
        $wrap.addClass('selected').removeClass('open');

        const $notice = $wrap.closest('.select-job-notice');
        $notice.find('.job-pick-warn').toggle(!!warn);
    });

    /* 외부 클릭 시 닫기 */
    $(document).on('click', function () {
        $('.job-pick-wrap').removeClass('open');
    });

    /* 드롭다운 내부 클릭 버블링 방지 */
    $(document).on('click', '.job-pick-dropdown', function (e) {
        e.stopPropagation();
    });
});

/* 급여 - 면접 후 결정 체크 시 input disabled */
$(function () {
    $('#salaryNegotiable').on('change', function () {
        const $salaryInput = $('#salary');
        if ($(this).is(':checked')) {
            $salaryInput.prop('disabled', true).val('');
        } else {
            $salaryInput.prop('disabled', false);
        }
    });
});

/* 프로모션 라디오 - class-select 토글 */
$(function () {
    $('.class-select').hide();

    $(document).on('change', 'input[name="promtion"]', function () {
        if ($(this).attr('id') === 'promtion02') {
            $('.class-select').show();
        } else {
            $('.class-select').hide();
        }
    });
});

/* 파일 업로드 */
$(function () {
    const ALLOWED_TYPES = ['image/png', 'image/jpeg', 'application/pdf'];
    const ALLOWED_EXT_LABEL = 'PNG, JPEG, PDF 형식만 업로드 가능합니다.';

    $('.file-group').each(function () {
        const $group = $(this);
        const $btn = $group.find('.btn-file-upload');
        const $fileInput = $group.find('input[type="file"]');
        const $textInput = $group.find('input[type="text"]');
        const $small = $group.find('small');

        // 버튼 클릭 → file input 트리거
        $btn.on('click', function () {
            $fileInput.trigger('click');
        });

        // 파일 선택 시
        $fileInput.on('change', function () {
            const file = this.files[0];

            if (!file) return;

            // 형식 검사
            if (!ALLOWED_TYPES.includes(file.type)) {
                $textInput.val('');
                $small.text(ALLOWED_EXT_LABEL).show();
                $group.addClass('input-error').removeClass('input-success');
                $fileInput.val('');
                return;
            }

            // 정상 파일
            $textInput.val(file.name);
            $small.hide();
            $group.addClass('input-success').removeClass('input-error');
        });
    });
});
