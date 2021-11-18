<template>
    <div class="row">
		<div class="col-lg-2"></div>
		<div class="col-lg-8 p-5 m-3">
			<h1>정말로 회원 탈퇴 하시겠습니까?</h1>
			<hr>
			<div class="row">
				<div class="col">
					<button class="btn btn-success btn-lg btn-block" type="button" id="modifyBtn" onclick="location.href='/'"> 돌아가기 </button>
				</div>
				<div class="col">
					<button class="btn btn-outline-danger btn-lg btn-block" type="button" id="deleteBtn" onclick="location.href='/removeProfileProcess?id=${member.id}'">회원탈퇴</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {

}
</script>

<style>

</style>