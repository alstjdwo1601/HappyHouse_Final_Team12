<template>
	<div>
		<div class="jumbotron text-center mb-1">
			<h4>행복한 우리 집</h4>
		</div>
	
		<!-- nav start -->
		<nav class="navbar navbar-expand-sm bg-dark navbar-dark rounded">
			<ul class="navbar-nav">
				<li class="nav-item">
					<router-link to="/"><a class="nav-link">Home</a></router-link>
				</li>
				<li class="nav-item">
					<router-link to="/qna"><a class="nav-link">QnA</a></router-link>
				</li>
				<li class="nav-item">
					<router-link to="/signup"><a class="nav-link">Sign up</a></router-link>
				</li>
				<li class="nav-item">
					<router-link to="/login"><a class="nav-link">Login</a></router-link>
				</li>
				<li class="nav-item">
					<router-link to="/profile"><a class="nav-link">Profile</a></router-link>
				</li>
			</ul>
		</nav>
  	</div>
</template>

<script>
export default {

};
</script>

<style>

</style>