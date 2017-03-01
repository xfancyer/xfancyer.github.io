
let Tools = {
	getUserID: function () {
		let id = window.sessionStorage.getItem("userID")||window.localStorage.getItem("userID");
		if (!id) {
			window.location.hash = "#/login"
		}
		return id
	}
};

export {Tools}
