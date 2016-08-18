var model = (function() {
	var list = [];

	function insertItem(value) {
		list.push(value);
	}

	function getItem(index) {
		for (var i = 0; i < list.length; i++) {
			if (i === index) {
				return list[i];
			}
		}
		return {};
	}

	function getList() {
		return list;
	}

	function updateItem(value, index) {
		for (var i = 0; i < list.length; i++) {
			if (i === parseInt(index, 10)) {
				list[i] = value;
				break;
			}
		}
	}

	function deleteItem(index) {
		list.splice(index, 1);
	}

	return {
		insertItem: insertItem,
		getList: getList,
		getItem: getItem,
		updateItem: updateItem,
		deleteItem: deleteItem,
	};

})();