<template>
    <div class="row">
	    <div class="col-lg-2"></div>
	        <div class="col-lg-8 p-5 m-3" style="background: white; border-radius: 16px">
	            <form action="/signupProcess" id="signup-form" method="post">
                    <h1>회원가입</h1>
                    <hr />
                    <div class="form-group">
                        <label for="id">아이디 <span class="text-danger small">*</span></label>
                        <input type="text" class="form-control required" id="id" name="id" />
                    </div>
                    <div class="form-group">
                        <label for="password">비밀번호 <span class="text-danger small">*</span></label>
                        <input type="password" class="form-control required" id="password" name="password" />
                    </div>
                    <div class="form-group">
                        <label for="name">이름 <span class="text-danger small">*</span></label>
                        <input type="text" class="form-control required" id="name" name="name" />
                    </div>
                    <div class="form-group">
                        <label for="address">주소 <span class="text-danger small">*</span></label>
                        <input type="text" class="form-control required" id="address" name="address" />
                    </div>
                    <div class="form-group">
                        <label for="tel">전화번호 <span class="text-danger small">*</span></label>
                        <input type="text" class="form-control required" id="phone" name="phone" />
                    </div>
                    <div class="form-group mt-5">
                        <button class="btn btn-primary btn-lg btn-block" type="submit" id="signupBtn">
                            회원 가입
                        </button>
                    </div>
                </form>
	        </div>
	    <div class="col-lg-2"></div>
	</div>
</template>

<script>
export default {

}
</script>

<style>

</style>