const getDateTime = (timestamp) => {
	if (timestamp != null) {
		let dateValue = new Date(timestamp);
		let newDate = new Date(dateValue.getTime());
		// let newDate = new Date(dateValue.getTime() - dateValue.getTimezoneOffset() * 60 * 1000);

		let year = newDate.getFullYear();
		let month = newDate.getMonth() + 1;
		let date = newDate.getDate();
		let hour = newDate.getHours();
		let min = newDate.getMinutes();
		let sec = newDate.getSeconds();

		let monthFormat = month < 10 ? "0" + month : month;
		let dateFormat = date < 10 ? "0" + date : date;
		let hourFormat = hour < 10 ? "0" + hour : hour;
		let minFormat = min < 10 ? "0" + min : min;
		let secFormat = sec < 10 ? "0" + sec : sec;

		let fullDateTime = `${year}-${monthFormat}-${dateFormat} ${hourFormat}:${minFormat}:${secFormat}`;

		return fullDateTime;
	} else {
		return null;
	}
}

export {
	getDateTime,
}