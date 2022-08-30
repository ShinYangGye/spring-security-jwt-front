import router from "../router";

const getErrors = (error, requiredObj) => {

	if (requiredObj == null) {
		alert(error.response.data.message);

		// 토큰 만료시간 오류 및 비정상적인 토큰 오류 확인
		if (error.response.data.code == 'TokenExpiredException' || error.response.data.code == 'TokenInvalidException') {
			localStorage.removeItem("token");
			router.push({name: 'home'});
		}
	} else {
		if (error.response.data.code == 'MethodArgumentNotValidException') {				
			requiredObj.forEach(e => {
				getFieldError(error, e.fieldId, e.required);
			});	
		} else {
			alert(error.response.data.message);
		}
	}
	
};

const getFieldError = (error, fieldId, required) => {
	let errField = document.getElementById(fieldId);
	if(error.response.data.errors[fieldId] != null) {				
		if (required) {
			errField.classList.remove('is-valid');					
		}
		errField.classList.add('is-invalid');				
		errField.nextElementSibling.textContent = error.response.data.errors[fieldId];
	}
};

const resetErrors = (requiredObj) => {
	requiredObj.forEach(e => {
		resetFieldError(e.fieldId, e.required);
	});				
};

const resetFieldError = (fieldId, required) => {
	let errField = document.getElementById(fieldId);
	errField.classList.remove('is-invalid');
	if (required) {				
		errField.classList.add('is-valid');
	}
	errField.nextElementSibling.textContent = '';
};	

export {
	getErrors,
	resetErrors,
}

