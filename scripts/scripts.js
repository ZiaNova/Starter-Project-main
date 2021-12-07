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
  
  // Find button for calculating result and attach our event listener
  document.getElementById("end-result").onclick = getAnswers;
  
  /* get handles on document nodes here (see in-class examples)  You need all the radio buttons AND the button at the end*/
  
  /* add your event listener here (see in-class examples) it goes on the button */
  
  // your project data goes here... maybe an array of objects?
  
  const data = [
	{
	  name: "Boston Common",
	  activity: "chill",
	  density: "high",
	  style: "old",
	  type: "popular",
	  sound: "high",
	  setting: "outdoors",
	  image: "images/Quietscape-Assests/chill/bostoncommons.png"
	},
	{
	  name: "Amory Park",
	  activity: "chill",
	  density: "medium",
	  style: "new",
	  type: "uncommon",
	  sound: "low",
	  setting: "outdoors",
	  image: "images/Quietscape-Assests/chill/amorypark.jpg"
	},
	{
	  name: "Boston Harbor",
	  activity: "chill",
	  density: "medium",
	  style: "new",
	  type: "popular",
	  sound: "high",
	  setting: "outdoors",
	  image: "images/Quietscape-Assests/chill/bostonharbor.jpg"
	},
	{
	  name: "BU Beach",
	  activity: "chill",
	  density: "medium",
	  style: "new",
	  type: "popular",
	  sound: "medium",
	  setting: "outdoors",
	  image: "images/Quietscape-Assests/chill/bubeach.jpg"
	},
	{
	  name: "Fitrec",
	  activity: "workout",
	  density: "high",
	  style: "new",
	  type: "popular",
	  sound: "high",
	  setting: "indoors",
	  image: "images/Quietscape-Assests/workout/fitrec.jpg"
	},
	{
	  name: "Gymit",
	  activity: "workout",
	  density: "medium",
	  style: "new",
	  type: "uncommon",
	  sound: "low",
	  setting: "indoors",
	  image: "images/Quietscape-Assests/workout/gymit.jpg"
	},
	{
	  name: "BSC",
	  activity: "workout",
	  density: "medium",
	  style: "old",
	  type: "popular",
	  sound: "medium",
	  setting: "indoors",
	  image: "images/Quietscape-Assests/workout/bsc.jpg"
	},
	{
	  name: "Esplanade Outdoors Gym",
	  activity: "workout",
	  density: "low",
	  style: "old",
	  type: "uncommon",
	  sound: "low",
	  setting: "outdoors",
	  image: "images/Quietscape-Assests/workout/esplanadegym.jpg"
	},
	{
	  name: "Charles River Esplanade",
	  activity: "stroll",
	  density: "medium",
	  style: "old",
	  type: "popular",
	  sound: "low",
	  setting: "outdoors",
	  image: "images/Quietscape-Assests/stroll/charlesriver.jpg"
	},
	{
	  name: "Newbury St",
	  activity: "stroll",
	  density: "high",
	  style: "old",
	  type: "popular",
	  sound: "high",
	  setting: "outdoors",
	  image: "images/Quietscape-Assests/stroll/newburyst.jpg"
	},
	{
	  name: "Emrald Neckglace Trail",
	  activity: "stroll",
	  density: "low",
	  style: "old",
	  type: "uncommon",
	  sound: "low",
	  setting: "outdoors",
	  image: "images/Quietscape-Assests/stroll/emraldneckglace.jpg"
	},
	{
	  name: "The Freedom Trail",
	  activity: "stroll",
	  density: "medium",
	  style: "old",
	  type: "popular",
	  sound: "medium",
	  setting: "outdoors",
	  image: "images/Quietscape-Assests/stroll/freedomtrail.jpg"
	},
	{
	  name: "BU Law Library",
	  activity: "study",
	  density: "high",
	  style: "old",
	  type: "popular",
	  sound: "low",
	  setting: "indoors",
	  image: "images/Quietscape-Assests/study/lawlibrary.jpg"
	},
	{
	  name: "BU Mugar Library",
	  activity: "study",
	  density: "medium",
	  style: "old",
	  type: "popular",
	  sound: "low",
	  setting: "indoors",
	  image: "images/Quietscape-Assests/study/mugarlibrary.jpg"
	},
	{
	  name: "Cafe Nero",
	  activity: "study",
	  density: "medium",
	  style: "new",
	  type: "uncommon",
	  sound: "medium",
	  setting: "indoors",
	  image: "images/Quietscape-Assests/study/cafenero.jpg"
	},
	{
	  name: "Thinking Cup",
	  activity: "study",
	  density: "low",
	  style: "old",
	  type: "uncommon",
	  sound: "medium",
	  setting: "indoors",
	  image: "images/Quietscape-Assests/study/thinkingcup.jpg"
	}
  ];
  
  // collect user answers in an object
  let userAnswers = {
	activity: "",
	density: "",
	style: "",
	type: "",
	sound: "",
	setting: ""
  };
  
  function getAnswers() {
	//retrieves user answer//
	const question1 = document.querySelector('input[name="activity"]:checked')
	  .value;
	const question2 = document.querySelector('input[name="density"]:checked')
	  .value;
	const question3 = document.querySelector('input[name="style"]:checked').value;
	const question4 = document.querySelector('input[name="type"]:checked').value;
	const question5 = document.querySelector('input[name="sound"]:checked').value;
	const question6 = document.querySelector('input[name="setting"]:checked')
	  .value;
  
	let best_match = {};
	let best_match_score = 0;
	for (const curr_answer of data) {
	  //console.log(curr_answer)
	  let curr_score = 0;
	  if (curr_answer["activity"] == question1) {
		curr_score = curr_score + 1;
	  }
	  if (curr_answer["density"] == question2) {
		curr_score = curr_score + 1;
	  }
	  if (curr_answer["style"] == question3) {
		curr_score = curr_score + 1;
	  }
	  if (curr_answer["type"] == question4) {
		curr_score = curr_score + 1;
	  }
	  if (curr_answer["sound"] == question5) {
		curr_score = curr_score + 1;
	  }
	  if (curr_answer["setting"] == question6) {
		curr_score = curr_score + 1;
	  }
	  //next iteration of the for loop comparison//
	  if (curr_score > best_match_score) {
		best_match_score = curr_score;
		best_match = curr_answer;
	  }
	}
  
	result_loc = document.getElementById("result-loc");
	image = document.createElement("img");
	image.src = best_match["image"];
	p = document.createElement("p");
	text = document.createTextNode(best_match["name"]);
	p.appendChild(text);
	result_loc.appendChild(p);
	result_loc.appendChild(image);
  }
  