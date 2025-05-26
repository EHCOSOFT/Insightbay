$(document).ready(function () {
    // ==============================
    // [전역] 모달 삽입
    // ==============================

    if ($("#loginModal").length === 0) {
        $("body").append(LoginModal());
    }

    if ($("#joinModal").length === 0) {
        $("body").append(JoinModal());
    }

    // if ($("#joinModal").length === 0) {
    //     $("body").append(JoinKaKaoModal());
    // }
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
                                <a href="javascript:void(0);" class="open-modal" data-modal-id="pwFindModal">비밀번호 찾기</a>
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

    function JoinModal() {
        return `
            <div class="modal-wrap join-modal" id="joinModal">
                <div class="modal-inner">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h3 class="modal-title">회원가입</h3>
                            <button type="button" class="btn btn-ico btn-modal-close">
                                <img src="img/ico/i-modal-close.svg" alt="모달 닫기">
                            </button>
                        </div>
                        <div class="modal-body">
                            <form action="" id="joinForm" class="form-wrap">
                                <div class="input-wrap">
                                    <div class="input-group">
                                        <label for="emailInput">이메일</label>
                                        <input type="text" id="emailInput" class="email-input" placeholder="이메일을 입력해 주세요.">
                                        <small>이메일 형식이 일치하지 않습니다.</small>
                                        <p>이메일은 추후 변경이 불가하니 정확히 입력하세요.</p>
                                    </div>
                                    <div class="input-group">
                                        <label for="userNumber">전화번호</label>
                                        <div class="input-group-child">
                                            <input type="text" id="userNumber" placeholder="-없이 숫자만 입력해주세요.">
                                            <button type="button" class="btn btn-black btn-md btn-flex" disabled>전송</button>
                                        </div>
                                    </div>
                                    <div class="input-group input-error input-hidden">
                                        <label for="certificationNumber">인증번호</label>
                                        <div class="input-group-child">
                                            <input type="number" id="certificationNumber" placeholder="인증번호를 입력하세요.">
                                            <span class="cer-time">02:35</span>
                                        </div>
                                        <small>올바른 인증번호를 입력해주세요.</small>
                                    </div>
                                    <div class="input-group">
                                        <label for="pwInput01">비밀번호</label>
                                        <div class="input-group-child">
                                            <input type="password" id="pwInput01">
                                            <button type="button" class="btn btn-pw-eye">
                                                <img src="img/ico/i-eye-hide.svg" alt="비밀번호 숨김">
                                            </button>
                                        </div>
                                        <p>영문자/숫자/특수문자 포함 최소 8자 이상</p>
                                    </div>
                                    <div class="input-group input-success">
                                        <label for="pwInput02">비밀번호 확인</label>
                                        <div class="input-group-child">
                                            <input type="password" id="pwInput02">
                                            <button type="button" class="btn btn-pw-eye">
                                                <img src="img/ico/i-eye-hide.svg" alt="비밀번호 숨김">
                                            </button>
                                        </div>
                                        <small>비밀번호가 일치합니다.</small>
                                    </div>
                                    <!-- 약관 전체 동의 -->
                                    <div class="check-group black">
                                        <input type="checkbox" id="checkAll" class="check-all">
                                        <label for="checkAll">약관에 모두 동의합니다.</label>
                                    </div>
                                    <div class="check-terms-group">
                                        <div class="check-group black">
                                            <input type="checkbox" id="terms01" class="check-target">
                                            <label for="terms01">이용약관 동의(필수)</label>
                                        </div>
                                        <!-- 이용약관 동의 -->
                                        <div class="terms-group">
                                            <div class="terms-content">
                                                <p>제1조 목적<br>
                                                    본 이용약관은 “인사이트베이”(이하 "사이트")의 서비스의 이용조건과 운영에 관한 제반사항 규정을 목적으로 합니다.</p>
                                                <p>제2조 용어의 정의<br>
                                                    본 약관에서 사용되는 주요한 용어의 정의는 다음과 같습니다.<br>
                                                    ① 회원 : 사이트의 약관에 동의하고 개인정보를 제공하여 회원등록을 한 자로서, 사이트와의 이용계약을 체결하고 사이트를 이용하는 이용자를
                                                    말합니다.<br>
                                                    ② 이용계약 : 사이트 이용과 관련하여 사이트와 회원간에 체결 하는 계약을 말합니다.<br>
                                                    ③ 회원 아이디(이하 "ID") : 회원의 식별과 회원의 서비스 이용을 위하여 회원별로 부여하는 고유한 문자와 숫자의 조합을
                                                    말합니다.<br>
                                                    ④ 비밀번호 : 회원이 부여받은 ID와 일치된 회원임을 확인하고 회원의 권익보호를 위하여 회원이 선정한 문자와 숫자의 조합을
                                                    말합니다.<br>
                                                </p>
                                                <p>제3조 약관외 준칙<br>
                                                    운영자는 필요한 경우 별도로 운영정책을 공지 안내할 수 있으며, 본 약관과 운영정책이 중첩될 경우 운영정책이 우선 적용됩니다.
                                                </p>
                                                <p>제4조 이용계약 체결<br>
                                                    ① 이용계약은 회원으로 등록하여 사이트를 이용하려는 자의 본 약관 내용에 대한 동의와 가입신청에 대하여 운영자의 이용승낙으로
                                                    성립합니다.<br>
                                                    ② 회원으로 등록하여 서비스를 이용하려는 자는 사이트 가입신청시 본 약관을 읽고 아래에 있는 "동의합니다"를 선택하는 것으로 본 약관에
                                                    대한 동의 의사 표시를 합니다.
                                                </p>
                                                <p>제5조 약관외 준칙<br>
                                                    ① 회원으로 등록하여 사이트를 이용하려는 이용자는 사이트에서 요청하는 제반정보(이용자ID,비밀번호)를 제공해야 합니다.<br>
                                                    ② 타인의 정보를 도용하거나 허위의 정보를 등록하는 등 본인의 진정한 정보를 등록하지 않은 회원은 사이트 이용과 관련하여 아무런 권리를
                                                    주장할 수 없으며, 관계 법령에 따라 처벌 받을 수 있습니다.
                                                </p>
                                                <!-- 계속 -->
                                            </div>
                                        </div>
                                    </div>
                                    <div class="check-terms-group">
                                        <div class="check-group black">
                                            <input type="checkbox" id="terms02" class="check-target">
                                            <label for="terms02">개인정보 수집 및 이용(필수)</label>
                                        </div>
                                        <!-- 개인정보 수집 및 이용-->
                                        <div class="terms-group">
                                            <div class="terms-content">
                                                <p>제1조 목적<br>
                                                    본 이용약관은 “인사이트베이”(이하 "사이트")의 서비스의 이용조건과 운영에 관한 제반사항 규정을 목적으로 합니다.</p>
                                                <p>제2조 용어의 정의<br>
                                                    본 약관에서 사용되는 주요한 용어의 정의는 다음과 같습니다.<br>
                                                    ① 회원 : 사이트의 약관에 동의하고 개인정보를 제공하여 회원등록을 한 자로서, 사이트와의 이용계약을 체결하고 사이트를 이용하는 이용자를
                                                    말합니다.<br>
                                                    ② 이용계약 : 사이트 이용과 관련하여 사이트와 회원간에 체결 하는 계약을 말합니다.<br>
                                                    ③ 회원 아이디(이하 "ID") : 회원의 식별과 회원의 서비스 이용을 위하여 회원별로 부여하는 고유한 문자와 숫자의 조합을
                                                    말합니다.<br>
                                                    ④ 비밀번호 : 회원이 부여받은 ID와 일치된 회원임을 확인하고 회원의 권익보호를 위하여 회원이 선정한 문자와 숫자의 조합을
                                                    말합니다.<br>
                                                </p>
                                                <p>제3조 약관외 준칙<br>
                                                    운영자는 필요한 경우 별도로 운영정책을 공지 안내할 수 있으며, 본 약관과 운영정책이 중첩될 경우 운영정책이 우선 적용됩니다.
                                                </p>
                                                <p>제4조 이용계약 체결<br>
                                                    ① 이용계약은 회원으로 등록하여 사이트를 이용하려는 자의 본 약관 내용에 대한 동의와 가입신청에 대하여 운영자의 이용승낙으로
                                                    성립합니다.<br>
                                                    ② 회원으로 등록하여 서비스를 이용하려는 자는 사이트 가입신청시 본 약관을 읽고 아래에 있는 "동의합니다"를 선택하는 것으로 본 약관에
                                                    대한 동의 의사 표시를 합니다.
                                                </p>
                                                <p>제5조 약관외 준칙<br>
                                                    ① 회원으로 등록하여 사이트를 이용하려는 이용자는 사이트에서 요청하는 제반정보(이용자ID,비밀번호)를 제공해야 합니다.<br>
                                                    ② 타인의 정보를 도용하거나 허위의 정보를 등록하는 등 본인의 진정한 정보를 등록하지 않은 회원은 사이트 이용과 관련하여 아무런 권리를
                                                    주장할 수 없으며, 관계 법령에 따라 처벌 받을 수 있습니다.
                                                </p>
                                                <!-- 계속 -->
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="btn-group column">
                                    <!-- <button type="submit" class="btn btn-black btn-login" form="joinForm">가입하기</button> -->
                                    <button type="type" class="btn btn-black btn-login open-modal" data-modal-id="">가입하기</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }


    



    // function JoinKaKaoModal() {
    //     return `
            
    //     `;
    // }
});