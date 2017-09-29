console.log("security_questions.js loaded");

var securityQuestions=[	{question:"What was your first pet's name?",
						expectedAnswer:"Max"},

						{question:"where are you from?",
						expectedAnswer:"San Francisco"},

						{question:"What did you have for lunch today?",
						expectedAnswer:"dumplings!"},

];

var answer=""
for(let i=0; i< securityQuestions.length; i++){
	answer=prompt(securityQuestions[i].question);
	if(securityQuestions[i].expectedAnswer !==answer){
		alert("stop there, wrong answer");
		break;
	}
}