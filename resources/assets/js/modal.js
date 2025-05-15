$(document).ready(function () {
    // ==============================
    // [전역] 모달 삽입
    // ==============================

    if ($("#loginModal").length === 0) {
        $("body").append(LoginModal());
    }
    // ==============================
    // [컴포넌트] 
    // ==============================
    function LoginModal() {
        return `
            <div class="modal-wrap login-modal" id="loginModal">
                <div class="modal-inner">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="btn btn-ico btn-modal-close">
                            <img src="img/ico/i-modal-close.svg" alt="모달 닫기">
                            </button>
                        </div>
                        <div class="modal-body">
                            <img src="img/logo.svg" alt="인사이트베이 로고" class="login-logo">
                            <form action="" id="loginForm" class="form-wrap">
                                <div class="input-wrap">
                                    <div class="input-group">
                                        <label for="emailInput">이메일</label>
                                        <input type="text" id="emailInput" class="email-input">
                                        <small>이메일 형식이 일치하지 않습니다.</small>
                                    </div>
                                    <div class="input-group">
                                        <label for="pwInput">비밀번호</label>
                                        <div class="input-group-child">
                                            <input type="password" id="pwInput">
                                            <button type="button" class="btn btn-pw-eye">
                                                <img src="img/ico/i-eye-hide.svg" alt="비밀번호 숨김">
                                            </button>
                                        </div>
                                        <small>비밀번호가 일치하지 않습니다.</small>
                                    </div>
                                </div>
                                <div class="btn-group column">
                                    <button type="submit" class="btn btn-black btn-login" form="loginForm">로그인</button>
                                    <button type="button" class="btn btn-kakao space-xxs">
                                        <img src="img/ico/i-kakao.svg" alt="카카오 로그인">카카오 로그인
                                    </button>
                                </div>
                            </form>
                            <div class="link-group">
                                <a href="javascript:void(0);">비밀번호 찾기</a>
                                <div class="link-group-child">
                                    <p>아직 회원이 아니신가요? <a href="javascript:void(0);" class="open-modal" data-modal-id="joinModal">회원가입</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

});