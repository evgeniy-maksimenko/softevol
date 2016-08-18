var del = (function() {
	var $el = $("#customersModule");
	var $ul = $el.find('ul');

	$ul.delegate('i.del', 'click', deleteCustomer);

	function deleteCustomer(e) {
		model.deleteItem(app.getSelectedItem(e));
		events.emit('list');
	}

	return {
		deleteCustomer: deleteCustomer
	};

})();