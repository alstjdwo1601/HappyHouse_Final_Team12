<template>
    <div class="row">
        <div class="col-lg-2"></div>
        <div class="col-lg-8 p-5 m-3" style="background: white; border-radius: 16px">
            <form action="/loginProcess" id="signup-form" method="post">
                <h1>로그인</h1>
                <hr />
                <div class="form-group">
                    <label for="id">아이디</label>
                    <input type="text" class="form-control required" id="id" name="id"/>
                </div>
                <div class="form-group">
                    <label for="password">비밀번호</label>
                    <input type="password" class="form-control required" id="password" name="password"/>
                </div>
                <button class="btn btn-primary btn-lg btn-block" type="submit" id="signupBtn">
                    로그인
                </button>
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