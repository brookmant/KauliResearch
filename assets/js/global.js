$(document).ready(function(){
    
    //Floors
    var GroundFloor = 1;
    var TopFloor = 7;
    var ElevatorMove = "Moving";

    //Evavator Actions
    var OpenDoor = "Opened";
    var CloseDoor = "Closed";


    //Get Floor once selected
    $("#SelectFloor").on("change", function() {
    	   var SelectFloor = $('#SelectFloor option:selected').val();
    	   var CurrentFloor = $('#CurrentFloor').val();
    	   var Elevator = $('#Elevator').val(SelectFloor);

    	    //If Current Floor
		    if (CurrentFloor == GroundFloor ) {
		    	$("p").text(OpenDoor + " : " + "You are already on the ground floor");
		    }
		    else {
		    	$("p").text(CloseDoor);
		    }
	});

    //Show Floor of Elevator
    $('#submit').click(function () {
    	  var SelectFloor = $('#SelectFloor option:selected').val();
    	 $('#Elevator').val(SelectFloor);
    });


});