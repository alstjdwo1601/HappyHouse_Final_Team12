<template>
    <div class="row">
	    <div class="col-lg-2"></div>
	    <div class="col-lg-8 p-5 m-3" style="background: white; border-radius: 16px">
	        <form action="/profileModifyProcess" id="signup-form" method="post">
	            <h1>회원 정보 수정</h1>
	            <hr />
	            <div class="form-group">
	                <label for="id">아이디</label>
	                <input type="hidden" name="id" id="id" value="${member.id}"/>
	                <p id="info-id">${member.id}</p>
	            </div>
	            <div class="form-group">
	                <label for="password">비밀번호</label>
	                <input type="password" class="form-control required" id="password" name="password" value="${member.password}"/>
	            </div>
	            <div class="form-group">
	                <label for="name">이름</label>
	                <input type="text" class="form-control required" id="name" name="name" value="${member.name}"/>
	            </div>
	            <div class="form-group">
	                <label for="address">주소</label>
	                <input type="text" class="form-control required" id="address" name="address" value="${member.address}" />
	            </div>
	            <div class="form-group">
	                <label for="tel">전화번호</label>
	                <input type="text" class="form-control required" id="phone" name="phone" value="${member.phone}" />
	            </div>
	            <div class="form-group mt-2">
	                <button class="btn btn-primary btn-lg btn-block" type="submit" id="signupBtn">
	              	    수정 완료
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