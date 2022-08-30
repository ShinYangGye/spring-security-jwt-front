<script setup>
import { useAccountStore } from '../../stores/account.js';

const accountStore = useAccountStore();

accountStore.resetJoinObj();

const checkSubmit = () => {
	accountStore.join();
}

</script>


<template>
	<div class="container p-5">


		<div class="col-md-6 pb-4">
			<label for="username" class="form-label">아이디</label>
			<input type="text" class="form-control is-valid" id="username" v-model="accountStore.joinObj.username">
			<div class="invalid-feedback"></div>
		</div>

		<div class="col-md-6 pb-4">
			<label for="password" class="form-label">패스워드</label>
			<input type="text" class="form-control is-valid" id="password" v-model="accountStore.joinObj.password">
			<div class="invalid-feedback"></div>
		</div>

		<div class="col-md-6 pb-4">
			<label for="role" class="form-label">권한</label>
			<select class="form-select is-valid" id="role" v-model="accountStore.joinObj.role">
				<option selected value="ROLE_USER">사용자</option>
				<option selected value="ROLE_MANAGER">매니저</option>
				<option selected value="ROLE_ADMIN">관리자</option>
			</select>
			<div class="invalid-feedback"></div>
		</div>

		<div class="col-md-6 pb-4">
			<label for="email" class="form-label">이메일</label>
			<input type="text" class="form-control" id="email" v-model="accountStore.joinObj.email">
			<div class="invalid-feedback"></div>
		</div>

		<div class="col-md-6 pb-4">
			<label for="addr" class="form-label">주소</label>
			<input type="text" class="form-control" id="addr" v-model="accountStore.joinObj.addr">
			<div class="invalid-feedback"></div>
		</div>		

		<div class="col-md-6 pb-4">
			<label class="form-check-label" for="agree">
				약관동의
			</label>
			<input class="form-check-input is-valid" type="checkbox" value="true" id="agree" v-model="accountStore.joinObj.agree">
			<div class="invalid-feedback"></div>										
		</div>

		<hr />
		
		<div>
			<button class="btn btn-primary" type="button" @click="checkSubmit">회원가입</button>
		</div>



	</div>
</template>