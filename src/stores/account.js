import router from '../router';
import { defineStore } from 'pinia';
import { saveAccountJoin, getAccountLogin, getAccountProfile, getAccountRefreshToken } from '../api/account';
import { getErrors, resetErrors } from '../util/httpErrors';

export const useAccountStore = defineStore({
	id: 'account',
	state: () => ({

		joinObj : {
			username: '',
			password: '',
			role: '',
			email: '',
			addr: '',
			agree: null,
		},
		requiredJoin : [
			{fieldId: 'username', required: true},
			{fieldId: 'password', required: true},
			{fieldId: 'role', required: true},
			{fieldId: 'email', required: false},
			{fieldId: 'addr', required: false},
			{fieldId: 'agree', required: true},
		],
		loginObj: {
			username: '',
			password: '',
		},
		requiredLogin : [
			{fieldId: 'username', required: true},
			{fieldId: 'password', required: true},
		],		
		isLogined: false,
		profile: {
			id: '',
			username: '',
			role: '',
			email: '',
			addr: '',
			regDate: '',
		}
	}),

	getters: {},	

	actions: {

		async join() {

			// Validation 오류 메세지 초기화
			resetErrors(this.requiredJoin);
			
			try {

				if (!this.joinObj.agree) {
					this.joinObj.agree = null;
				}

				const res = await saveAccountJoin(this.joinObj);
				console.log(res);

				alert("회원가입 완료!!");
				router.push({name: 'login'})

			} catch (error) {
				console.log(error);
				getErrors(error, this.requiredJoin);			
			} 
	
		},

		async login() {
			
			// Validation 오류 메세지 초기화
			resetErrors(this.requiredLogin);

			try {
				
				const res = await getAccountLogin(this.loginObj);			
				console.log(res);	

				localStorage.setItem("token", res.headers.token);
								
				this.getProfile();
				router.push({name: 'home'})

			} catch (error) {
				getErrors(error, this.requiredLogin);

				console.log(error);
				this.resetLoginObj();
			}

		},

		async logout() {
			this.isLogined = false;
			localStorage.removeItem("token");
			router.push({name: 'home'})
		},
		
		async getProfile() {
		
			try {
				
				const res = await getAccountProfile();
				console.log(res);
				
				this.profile.id 		= res.data.id;
				this.profile.username 	= res.data.username;
				this.profile.role 		= res.data.role;
				this.profile.email 		= res.data.email;
				this.profile.addr 		= res.data.addr;
				this.profile.regDate 	= res.data.regDate;

				this.isLogined = true;

			} catch (error) {
				console.log(error);
				getErrors(error, null);
			}
			
		},

		async getRefreshToken() {
			try {
				const res = await getAccountRefreshToken();
				console.log('getRefreshToken ##########################', res.headers.token);
				localStorage.setItem("token", res.headers.token);
				this.isLogined = true;
				return true;
			} catch (error) {
				this.isLogined = false;
				console.log(error);
				getErrors(error, null);
				return false;
			}
		},

		resetJoinObj() {
			this.joinObj.username = '';
			this.joinObj.password = '';
			this.joinObj.role = '';
			this.joinObj.email = '';
			this.joinObj.addr = '';			
			this.joinObj.agree = null;
		},

		resetLoginObj() {
			this.loginObj.username = '';
			this.loginObj.password = '';	
		},		

	  }	

})	