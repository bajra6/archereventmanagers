
if(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)){
	$(".hiddeninmobile").addClass("hidden"); //hides about us
	$(".aboutuscss").addClass("mobileaboutuscss");
	$(".aboutuscontentcss").addClass("mobileaboutuscontentcss");

	$(".problemlist").addClass("mobileproblemlist");
	$(".problemlistitems").addClass("mobileproblemlistitems");
	$(".problem").css("margin-top", "15%");
	
	// $(".registerinputs").addClass("mobileregisterinputs");
	$(".enteryourdetails").css("margin-top", "40%");
	$(".enteryourdetails").addClass("mobileenteryourdetails");

	$(".enterdetails").addClass("mobileenterdetails");
	$(".registerinputs").addClass("mobileregisterinputs");

	$(".registerbutton").addClass("mobileregisterbutton");

} else {
	$(".hiddeninlaptop").addClass("hidden"); //hides about us
	$(".aboutuscss").addClass("laptopaboutuscss");
	$(".aboutuscontentcss").addClass("laptopaboutuscontentcss");

	$(".problemlistitems").addClass("laptopproblemlistitems");

	$(".featuresicon").css("height", "150px");
	$(".featuresicon").css("width", "150px");

}

if(/iPad|iPod/i.test(navigator.userAgent)){
	$(".enteryourdetails").addClass("ipadenteryourdetails");
	console.log($(".enteryourdetails"));
}


// centering sit back and enjoy

let sitbackboxheight = $(".sitbackandenjoy").css("height").slice(0,-2);
let sitbackboxwidth = $(".sitbackandenjoy").css("width").slice(0,-2);

$(".sitbackandenjoy").css("margin-top", (-1*180/2) + "px");
$(".sitbackandenjoy").css("margin-left", (-1*574/2 -10)+ "px");

// postioning about us after landing page

let heightoflandingpage = $(".landingpage").css("height").slice(0,-2);
let heightofnavbar = $(".customnavbarcss").css("height").slice(0,-2);

let aboutuspos = parseInt(heightoflandingpage);//+parseInt(heightofnavbar);

$(".aboutus").css("top",aboutuspos-2+"px");
$("#aboutusvideo").css("height", heightoflandingpage*0.9+"px");

//positioning features section

let featuresvideopos = aboutuspos + parseInt($(".aboutus").css("height").slice(0,-2));
$(".features").css("top", featuresvideopos-5+"px");

//positioning register form

let registerformpos = featuresvideopos + parseInt($(".features").css("height").slice(0,-2));

// console.log(registerformpos);

$(".Questions").css("top", registerformpos-10 + "px");

//positioning footer

let footerpos = registerformpos + parseInt($(".Questions").css("height").slice(0,-2));4

console.log(footerpos);
$(".footer").css("top", footerpos-15 +"px");

