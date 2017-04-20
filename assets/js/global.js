$(document).ready(function(){
    
    //Floors
    var GroundFloor = 1;
    var TopFloor = 7;
    var ElevatorMove = "Moving Floor";
    var Elevator1 = "Shut Down Maintence Mode";
    var Elevator2 = "Shut Down Maintence Mode";



    //Evavator Actions
    var OpenDoor = "Opened Door";
    var CloseDoor = "Closed Door";

    //Elevator 1
    //Get Floor once selected
    $("#SelectFloor1").on("change", function() {
    	   var SelectFloor = $('#SelectFloor1 option:selected').val();
    	   var CurrentFloor = $('#CurrentFloor').val();
    	   var Elevator = $('#Elevator').val(SelectFloor);
           
           //Get moving count

    	    //If Current Floor
		    if (CurrentFloor && Elevator == GroundFloor ) {
		    	var MovingFloors = Math.abs(SelectFloor - CurrentFloor);

		    	$(".p1").text(OpenDoor + " : " + "You are already on the ground floor, get off or select another floor");
		    	$('#CurrentFloor').val(GroundFloor);

			}
			//Same Floor
			else if (CurrentFloor == Elevator) {
				$(".p1").text(OpenDoor + " : " + "You are already on the same floor, get off or select another floor");

			}
			// If on Top Floor
			else if (SelectFloor  == TopFloor) {
			    var MovingFloors = Math.abs(SelectFloor - CurrentFloor);

			 	$(".p1").text(OpenDoor + " : " + "You are on the Top Floor, get off or select another floor");
			    $('#CurrentFloor').val(TopFloor);
			 }
			//If Not current Floor Move
		    else {
		    	var FloorMovingCount = $("#FloorMoving").val();
		    	var MovingFloors = Math.abs(SelectFloor - CurrentFloor);
		    	MovingCount();
		    	$(".p1").text("(" + CloseDoor + ")" + " " + ElevatorMove + ": " + MovingFloors);

                
		    	function MovingCount() {
		    		var MovingFloors = Math.abs(SelectFloor - CurrentFloor);
		    		TotalMovingFloors = MovingFloors;

		    	    $("#FloorMoving").val(TotalMovingFloors);


		    	    //If Elevator Moves more than 100 times shut down.
					if (TotalMovingFloors > 6) {
						Elevator1 = "Shut Down Maintence Mode";
					    $(".closed").text("(" + CloseDoor + ")" + " " + Elevator1);
					    $("#SelectFloor1").attr("disabled", true);
					}
           		}



		    	// If same floor
		    	if (MovingFloors === 0) {
		    	   $(".p1").text(OpenDoor + " : " + "You are already on the same floor, get off or select another floor");
		    	}

		    }

	});

//Second Elevator
    $("#SelectFloor2").on("change", function() {
    	   var SelectFloor2 = $('#SelectFloor2 option:selected').val();
    	   var CurrentFloor2 = $('#CurrentFloor2').val();
    	   var Elevator2 = $('#Elevator2').val(SelectFloor);

    	    //If Current Floor
		    if (CurrentFloor2 == GroundFloor ) {
		    	$(".p2").text(OpenDoor + " : " + "You are already on the ground floor");
		    }
		    else {
		    	$(".p2").text(CloseDoor);
		    }
	});

//functions
	function Maintence() {
		if (FloorMovingCount < 6) {
			Elevator1 = "Shut Down Maintence Mode";
		    Elevator2 = "Shut Down Maintence Mode";
		    $(".p1").text(CloseDoor + " " + Elevator1);
		    $(".p2").text(CloseDoor + " " + Elevator2);
		}
	}
	function EmptyElevator() {
		var ElevatorEmpty = "Empty";
		   if (ElevatorEmpty) {
		   		OpenElevator
		   }
	}
	//Get Count of Closed Door
	function ClosedDoors() {
		var CountClosedDoors = CloseDoor.counterIncrement = 'inherit';
	}

	//GetCount of Open Door
	function OpenedDoors() {
		var CountOpenedDoors = OpenDoor.counterIncrement = 'inherit';
	}

 
});