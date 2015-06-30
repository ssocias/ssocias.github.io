// AJAX for posting
$(document).ready(function() {
	$('#contactForm').submit(function(){
		console.log("HERE IN CONTFORM");
		$.ajax({
            data: $(this).serialize(), // get the form data
            type: $(this).attr('method'), // GET or POST
            url: $(this).attr('action'), // the file to call
	   		// handle a successful response
	    	success: function(response) {
	    		console.log("response");
		    	if ("success_message" in response){
		    		$("#contactForm").find(".errorField").remove();	//remove old errors
		    		// valid form submission
		    		$('#success').html('<p style="background-color: rgba(230, 230, 230, 0.3);">' + response["success_message"] + '</p>');
		    		$('#contactForm').hide();
		    	}
		    	else{
			    	console.log("error found");
			    	$("#contactForm").find(".errorField").remove();	//remove old errors
			    	for (var key in response) {
			    		console.log("getting errors");
			    		console.log(response[key]) ;
			    		error = response[key];
			    		field = $("#contactForm").find("#field_" + key)
			    		field.after('<p class="errorField">' + error + '</p>');
			        	
			        }
			    }  
	    	},
		});
		return false;
	});
});