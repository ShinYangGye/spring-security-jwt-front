<script setup>
import { useAccountStore } from "../../stores/account";

const accountStore = useAccountStore();

const checkSubmit = () => {
	accountStore.login();
}

</script>

<template>
    
<main class="form-signin w-100 m-auto">

    <h1 class="h3 mb-3 fw-normal">Log in</h1>

    <div class="form-floating pb-3">
      <input type="text" class="form-control is-valid" id="username" v-model="accountStore.loginObj.username">
      <div class="invalid-feedback"></div>
      <label for="username">아이디</label>
    </div>
    <div class="form-floating pb-3">
      <input type="password" class="form-control is-valid" id="password" v-model="accountStore.loginObj.password">
      <div class="invalid-feedback"></div>
      <label for="password">비밀번호</label>
    </div>

    <div class="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me"> Remember me
      </label>
    </div>
    <button class="w-100 btn btn-lg btn-primary" type="button" @click="checkSubmit()">Sign in</button>
    <p class="mt-5 mb-3 text-muted">&copy; 2017–2022</p>

</main>

</template>

<style scoped>
@import url("../../assets/css/login.css");
</style>