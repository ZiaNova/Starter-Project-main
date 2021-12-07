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

/* get handles on document nodes here (see in-class examples)  You need all the radio buttons AND the button at the end*/

/* add your event listener here (see in-class examples) it goes on the button */

// your project data goes here... maybe an array of objects?

const data = [
	{
		name: "Boston Common",
		activity: "meditate",
		density: "high",
		style: "older"
	},
	{
		name: "Amory Park",
		activity: "meditate",
		density: "medium",
		style: "newer"
	}
];

// collect user answers in an object
let userAnswers = {
	activity: "",
	density: "",
	style: ""
};

function getAnswers() {}
