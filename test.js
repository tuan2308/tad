$('#formKhoe').submit(function(e) {
	e.preventDefault();
	$.ajax({
		url: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSeK2khxStEsoKi5PmfQd8B0kRPe2CCRz1RScdostEngJm6Cgw/formResponse',
		type: 'post',
		data: $('#formKhoe').serialize(),

		statusCode: {
			0: function() {
				alert("a")
			},

			1: function() {
				alert("b")
			}

		}
	});
});