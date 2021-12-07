// initialize the carousel
// documentation here... read and apply it:
// https://github.com/kenwheeler/slick/
// demos here:
// http://kenwheeler.github.io/slick/
$(document).ready(function () {
	$(".questionContainer").slick({
		dots: true
	});
});

const question1 = document.getElementsByName('activity');
const question2 = document.getElementsByName('density');
const question3 = document.getElementsByName('style');
const question4 = document.getElementsByName('type');
const question5 = document.getElementsByName('sound');
const question6 = document.getElementsByName('setting');
const endBtn = document.getElementById('end-result')

endBtn.addEventListener("click", getAnswers);

/* get handles on document nodes here (see in-class examples)  You need all the radio buttons AND the button at the end*/

/* add your event listener here (see in-class examples) it goes on the button */

// your project data goes here... maybe an array of objects?

const data = [
	{
		name: "Boston Common",
		activity: "chill",
		density: "high",
		style: "old",
		type:"popular",
		sound:"high",
		setting:"outdoors",
		image: 'images/Quietscape-Assests/chill/bostoncommons.png'
	},
	{
		name: "Amory Park",
		activity: "chill",
		density: "medium",
		style: "new",
		type: "uncommon",
		sound: "low",
		setting: "outdoors",
		image: 'images/Quietscape-Assests/chill/amorypark.jpg'
	},
	{
		name: "Boston Harbor",
		activity: "chill",
		density: "medium",
		style: "new",
		type:"popular",
		sound:"high",
		setting:"outdoors",
		image: 'images/Quietscape-Assests/chill/bostonharbor.jpg'
	},
	{
		name: "BU Beach",
		activity: "chill",
		density: "medium",
		style: "new",
		type:"popular",
		sound:"medium",
		setting:"outdoors",
		image: 'images/Quietscape-Assests/chill/bubeach.jpg'
	},
	{
		name: "Fitrec",
		activity: "workout",
		density: "high",
		style: "new",
		type:"popular",
		sound:"high",
		setting:"indoors",
		image: 'images/Quietscape-Assests/workout/fitrec.jpg'
	},
	{
		name: "Gymit",
		activity: "workout",
		density: "medium",
		style: "new",
		type:"uncommon",
		sound:"low",
		setting:"indoors",
		image: 'images/Quietscape-Assests/workout/gymit.jpg'
	},
	{
		name: "BSC",
		activity: "workout",
		density: "medium",
		style: "old",
		type:"popular",
		sound:"medium",
		setting:"indoors",
		image: 'images/Quietscape-Assests/workout/bsc.jpg'
	},
	{
		name: "Esplanade Outdoors Gym",
		activity: "workout",
		density: "low",
		style: "old",
		type:"uncommon",
		sound:"low",
		setting:"outdoors",
		image: 'images/Quietscape-Assests/workout/esplanadegym.jpg'
	},
	{
		name: "Charles River Esplanade",
		activity: "stroll",
		density: "medium",
		style: "old",
		type:"popular",
		sound:"low",
		setting:"outdoors",
		image: 'images/Quietscape-Assests/stroll/charlesriver.jpg'
	},
	{
		name: "Newbury St",
		activity: "stroll",
		density: "high",
		style: "old",
		type:"popular",
		sound:"high",
		setting:"outdoors",
		image: 'images/Quietscape-Assests/stroll/newburyst.jpg'
	},
	{
		name: "Emrald Neckglace Trail",
		activity: "stroll",
		density: "low",
		style: "old",
		type:"uncommon",
		sound:"low",
		setting:"outdoors",
		image: 'images/Quietscape-Assests/stroll/emraldneckglace.jpg'
	},
	{
		name: "The Freedom Trail",
		activity: "stroll",
		density: "medium",
		style: "old",
		type:"popular",
		sound:"medium",
		setting:"outdoors",
		image: 'images/Quietscape-Assests/stroll/freedomtrail.jpg'
	},
	{
		name: "BU Law Library",
		activity: "study",
		density: "high",
		style: "old",
		type:"popular",
		sound:"low",
		setting:"indoors",
		image: 'images/Quietscape-Assests/study/lawlibrary.jpg'
	},
	{
		name: "BU Mugar Library",
		activity: "study",
		density: "medium",
		style: "old",
		type:"popular",
		sound:"low",
		setting:"indoors",
		image: 'images/Quietscape-Assests/study/mugarlibrary.jpg'
	},
	{
		name: "Cafe Nero",
		activity: "study",
		density: "medium",
		style: "new",
		type:"uncommon",
		sound:"medium",
		setting:"indoors",
		image: 'images/Quietscape-Assests/study/cafenero.jpg'
	},
	{
		name: "Thinking Cup",
		activity: "study",
		density: "low",
		style: "old",
		type:"uncommon",
		sound:"medium",
		setting:"indoors",
		image: 'images/Quietscape-Assests/study/thinkingcup.jpg'
	}
];

// collect user answers in an object
let userAnswers = {
	activity: "",
	density: "",
	style: "",
	type: "",
	sound: "",
	setting: "",
};


function getAnswers() {
//if answer for q1 is x + q2 is y +... = 

//if usersAnswers[density] = low




