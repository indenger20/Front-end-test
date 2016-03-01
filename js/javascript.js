"use strict";

var link = document.getElementById('sendForm');
var textArea = document.getElementById('textForm');
var new_comment_block = document.getElementsByClassName('all-comment')[0];

link.addEventListener('click', function(e) {
	
	if(textArea.value !== '') {
		console.log(new_comment_block);
		var myText = textArea.value;
		var elem =  document.createElement('div');
		elem.className = 'b-comment-line';
		elem.innerHTML='<div class="b-comment-line__note"><p class="b-comment-line__note-text">'+myText+'</p><div>';
		new_comment_block.appendChild(elem);
		textArea.value = '';
		
	}else {
		alert('Введите текст');
	}

	e.preventDefault();
});

var isCtrl = false;

textArea.addEventListener('keyup', function(event) {
	if(event.which == 17) {
		isCtrl=false;
	}
})
textArea.addEventListener('keydown', function(event) {
	if(event.which == 17) {
		isCtrl=true;
	}
	if(event.which == 13 && isCtrl == true) {
		link.click();
	}
})