$.ajax({
	url: '/testapi',
	dataType: 'json',
	async: true,
	success: function (data) {
           console.log(data.data.name);
	}
});