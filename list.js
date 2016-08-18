var list = (function(){
	var $el = $("#customersModule");
	var $ul = $el.find('ul');
	var template = $el.find("#customers-template").html();

	events.on('list', render);
	
	function render() {
		$ul.html(Mustache.render(template, {
			customers: model.getList()
		}));
	}

	return {
		render:render
	};
})();