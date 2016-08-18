var update = (function() {
	var $el = $("#customersModule");
	var $ul = $el.find('ul');
	var $updateBtn = $('#update');
	
	$updateBtn.on('click', updateCustomer);
	$ul.delegate('i.edit', 'click', getCustomer);

	function updateCustomer(e) {
		e.preventDefault();
		model.updateItem(app.getFormData(), document.getElementById('index').value);
		events.emit('list');
		app.clearForm();
	}

	function getCustomer(e) {
		var index = app.getSelectedItem(e);
		var data = model.getItem(index);
		for (var key in data) {
			document.getElementById(key).value = data[key];
		}
		document.getElementById('index').value = index;
	}

	return {
		updateCustomer: updateCustomer
	};
})();