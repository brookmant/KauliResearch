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

    	   $('#Elevator').val(SelectFloor);
	});

    //Show Floor of Elevator
    $('#submit').click(function () {
    	    var SelectFloor = $('#SelectFloor option:selected').val();

    	 $('#Elevator').val(SelectFloor);
    });
});