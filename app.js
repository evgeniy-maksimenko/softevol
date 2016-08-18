var app = (function() {

	var $el = $("#customersModule");
	var $ul = $el.find('ul');
	var $form = $el.find('form');
	
	function getFormData() {
		var el = {};
		var serializeArray = $form.serializeArray();
		for (var i = 0; i < serializeArray.length; i++) {
			var customer = serializeArray[i];
			el[customer.name] = customer.value;
		}
		return el;
	}

	function clearForm() {
		document.getElementById("customerForm").reset();
	}

	function getSelectedItem(e) {
		var i;
		if (typeof e === "number") {
			i = e;
		} else {
			var $remove = $(e.target).closest('li');
			i = $ul.find('li').index($remove);
		}
		return i;
	}

	return {
		getSelectedItem: getSelectedItem,
		getFormData: getFormData,
		clearForm:clearForm
	};
})();