import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const app = createApp(App)
app.use(createPinia())

import { watch } from '@vue/runtime-core';
import { useAccountStore } from './stores/account'

const accountStore = useAccountStore();

// 일정시간 간격으로 권한 토큰을 갱신한다.
let tokenRefreshTimer;
const setTokenRefreshTimer = () => {
    
    tokenRefreshTimer = setInterval( async () => {

		// 로그아웃일 경우 토큰갱신 타이머를 비활성화
		if (!accountStore.isLogined || localStorage.getItem("token") == null) {
			clearInterval(tokenRefreshTimer);
		} else {
			accountStore.getRefreshToken()
				.then(res => {
					getProfile(res);					
				})
		}
		
    }, 1000*60*55); // 토큰만료시간 1시간 이내에 갱신(55분)
};

// 로그인 사용자 정보 조회
const getProfile = (res) => {
	if (res) {
		accountStore.getProfile();
	} else {
		console.log("인증토큰 갱신시 오류 발생!!");
		localStorage.removeItem("token");				
	}
}

// 새로고침시 사용자 정보 조회 및 로그인 true 처리 후 router 를 세팅한다.
const setApp = () => {
	app.use(router)
	app.mount('#app')
}

// 새로고침시 토큰이 존재하면 토큰을 갱신하고 사용자 프로필을 조회한다.
if (localStorage.getItem("token") != null) {	
	accountStore.getRefreshToken()
		.then(res => {
			getProfile(res);
			setApp();
		})
} else {
	setApp();	
}

// 로그인 할 경우 토큰갱신 타이머를 활성화 한다.
watch(
	() => accountStore.isLogined, (curVal, preVal) => {	  

		console.log('preVal)', preVal);
		console.log('curVal', curVal);
		
	  if (curVal) {
		setTokenRefreshTimer();
	  } 
	}
)

import "bootstrap/dist/js/bootstrap.js"
import { useRouter } from 'vue-router'


