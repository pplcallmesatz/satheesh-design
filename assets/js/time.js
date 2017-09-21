
		function diplaytime()
		{
			// To Declare the variable for hours, minutes & second
			var newDate = new Date();
			var hours = newDate.getHours();
			var minutes = newDate.getMinutes();
			var seconds = newDate.getSeconds();
			
			// To Display the current time
//			$(".datetimedisp").html(newDate.toLocaleTimeString());
			
			// To Print the hours, minutes & second
						

			
			  if (seconds < 10 ) {
				  $(".sec").html("0" + seconds);
			  }
			else {
				$(".sec").html(seconds);
			}
			if(minutes <10) {
							$(".min").html("0" + minutes);
			}
			else {
				$(".min").html(minutes);
			}
            
            
            
			
            if (hours > 12) {
                var twelveHour = hours - 12;
				if (twelveHour < 10) {
					                $(".hou").html("0" + twelveHour);
				}
				else {
					                $(".hou").html(twelveHour);

				}
                $(".scene").html("PM");
            }
            else {
                
                if (hours < 10) {
                  
                     $(".hou").html("0" + hours);
                }
                else {
                    $(".hou").html(hours);
                }
                
                
                $(".scene").html("AM");
            }
			// Calculation for converting hours, minutes & second to "Degree"
			
			//formuleee
			
			//  360degree = 24hour ;  degree = (total degree / total hour) * actual hour;
			var degreeHour = (360/24) * hours;
			// 15degree = 60min; degree=(total degree within hour / total minutes) * actual minutes;
			var degreeMin =  (15/60) * minutes;
			// 0.25degree = 1min; degree=(total degree for 1min / total seconds for 1min) * actual seconds;
			var degreesec =  (0.25/60) * seconds;
			
			// Overall total
			var degree = degreeHour + degreeMin + degreesec;
			
			// Printing the output
			
//			console.log(degreeHour);
//			console.log(degreeMin);
//			console.log(degreesec);
//			console.log("degree: " , degree );
//			
            
        
			// Applying the css property
//			$(".wheel").css({transform:  'rotate(-' + degree + 'deg)'})
			$(".wheel").css(
							{
				'transform':  'rotate(-' + degree + 'deg)',
					'-webkit-transform': 'rotate(-' + degree + 'deg)',
						'-moz-transform': 'rotate(-' + degree + 'deg)',
						'-o-transform': 'rotate(-' + degree + 'deg)'
			
			})
	$(".moon, .sun").css(
							{
				'transform':  'rotate(' + degree + 'deg)',
					'-webkit-transform': 'rotate(' + degree + 'deg)',
						'-moz-transform': 'rotate(' + degree + 'deg)',
						'-o-transform': 'rotate(' + degree + 'deg)'
			
			})
	
	
	// For moon raising and set down
	
	   if (hours >= 17) {
                var twelveHour = hours - 12;
		   var moonRaiseInt = twelveHour - 4;
		var moonRaiseOpacity = (moonRaiseInt/6) * 1.5;
		$(".moon").css({opacity:  moonRaiseOpacity });	
//		   		console.log(moonRaiseOpacity);

		            }
            else {
               var moonSetInt = 7 - hours;
		var moonSetOpacity = (moonSetInt/6) * 1.5;
		$(".moon").css({opacity:  moonSetOpacity }) 
//		console.log(moonSetOpacity);
            }

			
			// For Sun raise and set down
			
	if (hours <= 16) {
				var sunRiseInt = hours - 4;
		var sunRiseOpacity = (sunRiseInt/6) * 1.5;
		$(".sun").css({opacity:  sunRiseOpacity })
//				console.log(sunRiseOpacity);

	}
			else {
				var twelveHour = hours - 12;
				var sunSetInt = 4 - twelveHour;
		var sunSetOpacity = ((sunSetInt/6) * 1.5)+1;
		$(".sun").css({opacity:  sunSetOpacity })
//				console.log(sunSetOpacity);
			}
			
//	if ( hours > 13 || hours <= 3) {
//		var moonRaiseInt = hours - 16;
//		var moonRaiseOpacity = (moonRaiseInt/6) * 1.5;
//		$(".moon").css({opacity:  moonOpacity })
//	}
//			else {
//			var moonRaiseInt = 5 - 4;
//		var moonRaiseOpacity = ((moonRaiseInt/6) * 1.5);
//		console.log(moonRaiseOpacity);	

//			}

//    var moonOpacityInt = hours - 14;
            
//	var moonOpacity = (moonOpacityInt/6) * 1.5;
//            var sunOpacity =   (1 - moonOpacity) / 1.5;
//            $(".moon").css({opacity:  moonOpacity })
//            $(".sun").css({opacity:  sunOpacity })
//						console.log(moonOpacityInt, moonOpacity, sunOpacity)

             if ((hours >= 6 ) && (hours < 16)) {
                 $('.body').removeClass("night");
                 $('.body').addClass("day");
                 }
                 else if ((hours >= 16 ) && (hours < 19)) {
                        $('.body').addClass("evening");
                     $('.body').removeClass("day");
                     $('.body').removeClass("night");
                 }
            else {
                $('.body').removeClass("day");
                $('.body').removeClass("evening");
                $('.body').addClass("night");
            }

			 // Alert between a hour gap
			if ( degreeHour == degree ) {
//							alert("it's " + hours + " o'clock");
 			}
			
			setTimeout("diplaytime()",1000);
		}
        

        $(window).load(function(){
            $(".overlay").hide();
        })
	$(document).ready(function(){
		diplaytime();
        
       
	});
	
	