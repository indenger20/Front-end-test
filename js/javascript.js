$(function() {

	$('#sendForm').on('click', function go(e) {

		var text = $('#textForm').val();
		console.log(text);
		$('.all-comment').append(function(indx, val) {
			if($('#textForm').val() != '') {
				return '<div class="b-comment-line"><div class="b-comment-line__note"><p class="b-comment-line__note-text">'+text+'<p></div></div>';
			}else if($('#textForm').val('')){
				return alert('Введите текст');
			}
		})
		function foo() {
			$('#textForm').val('');
		}
		foo();
		e.preventDefault();
	});

	var isCtrl = false;
	$("#textForm").keyup(function (e) {
		if(e.which == 17) isCtrl=false;
	})
	$("#textForm").keydown(function (e) {
		if(e.which == 17) isCtrl=true;
		if(e.which == 13 && isCtrl == true) {
	 		 $('#sendForm').click();
			
		}
	 
	});

})