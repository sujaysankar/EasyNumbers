function validatePuzzle(){

	if($("#optionsRadios1:checked").val() == $("#correctAnswer").val()) {
		// correct Answer 
		$('#correctAnswerModal').modal('show'); 
	}else {
		$('#wrongAnswerModal').modal('show'); 
	}
	
};