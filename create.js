var create = (function() {
	var $createBtn = $('#create');

	$createBtn.on('click', createCustomer);

	function createCustomer(e) {
		e.preventDefault();
		model.insertItem(app.getFormData());
		events.emit('list');
		app.clearForm();
	}

	return {
		createCustomer: createCustomer
	};
})();