var app = (function() {

	var $el = $("#customersModule");
	var $ul = $el.find('ul');
	var $form = $el.find('form');
	var $createBtn = $('#create');
	var $updateBtn = $('#update');
	var template = $el.find("#customers-template").html();


	_render();

	function _render() {
		$ul.html(Mustache.render(template, {
			customers: model.getList()
		}));
	}

	$createBtn.on('click', addCustomer);
	$updateBtn.on('click', updateCustomer);

	$ul.delegate('i.del', 'click', deleteCustomer);
	$ul.delegate('i.edit', 'click', getCustomer);

	function _getFormData() {
		var el = {};
		var serializeArray = $form.serializeArray();
		for (var i = 0; i < serializeArray.length; i++) {
			var customer = serializeArray[i];
			el[customer.name] = customer.value;
		}
		return el;
	}

	function _clearForm() {
		document.getElementById("customerForm").reset();
	}

	function addCustomer(e) {
		e.preventDefault();
		model.insertItem(_getFormData());
		_render();
		_clearForm();
	}

	function deleteCustomer(e) {
		model.deleteItem(_getSelectedItem(e));
		_render();
	}

	function getCustomer(e) {
		var index = _getSelectedItem(e);
		var data = model.getItem(index);
		for (var key in data) {
			document.getElementById(key).value = data[key];
		}
		document.getElementById('index').value = index;
	}

	function updateCustomer(e) {
		e.preventDefault();
		model.updateItem(_getFormData(), document.getElementById('index').value);
		_render();
		_clearForm();
	}

	function _getSelectedItem(e) {
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
		addCustomer: addCustomer,
		updateCustomer: updateCustomer,
		deleteCustomer: deleteCustomer
	};
})();