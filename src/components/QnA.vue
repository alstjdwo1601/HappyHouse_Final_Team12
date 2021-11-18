<template>
    <div class="container">
        <router-link to="/input">게시글작성</router-link>&nbsp;&nbsp;
        <router-link to="/list">게시글목록</router-link>&nbsp;&nbsp;
        <router-link to="/search">게시글검색</router-link>
        <br /><br />
        <router-view/>
    </div>
</template>

<script>
export default {
    created() {
        this.$router.push("/list");
    },
}
</script>

<style>

</style>