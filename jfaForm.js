
function jfaForm($f){
	
	if($f.id != undefined){
		
		if($f.questions.length < 1){
			jfaWarn("There are no questions.")
			return;
		}
		this.id = $f.id;
		this.welcome = $f.welcome;
		this.questions = $f.questions;
		this.thanks = $f.thanks;
		this.print = jfaPrint;
		this.init = jfaGetHtml;

		this.init();
	} else {
		jfaWarn("No id was entered for JfaForm.");
	}

}	

function jfaGetHtml(){
	$container = $("#"+ this.id);
	console.log($container);
	$container.addClass("jfa-form");
	if(this.text){

	}

}

function jfaPrint($type = "all", $values = false){
	$f = this;
	switch($type){
		case "questions":
			var allQuestions = "";
			$f.questions.forEach(function(item, index, arr){
				var completeQuestion = "";
				completeQuestion += (index + " : " + item.question);
				if($values && item.values != undefined){
					var t = "\tValues:\n\t\t";
					item.values.forEach(function(item, index, arr){
						t += (index + " : " + item + "\t");
					});
					
					completeQuestion += t;
				}
				allQuestions += "\n" + completeQuestion;
			});
			return allQuestions + "\n";
		break;

		case "all":
			return this;
		break;

		default:
			if($f[$type] != undefined)
				return $f[$type];
			
	}
	jfaWarn("The '" + $type + "' property was not found");
}

function jfaWarn(string){
		
		console.warn("JfaForm: " + string);
	return;
}









$testForm = {
	"id":"test",
	"welcome":"Hey, ready to flow? First let us know you're here!",
	"questions":[
		{
			"id":"name",
			"question":"What's your name?",
			"boolean":false,
			"required":false,
			"text":true,
			"email":false,
			"checkbox":false,
			"color":false,
			"date":false,
			"datetime":false,
			"datetime-local":false,
			"month":false,
			"number":false,
			"range":false,
			"radio":false,
			"search":false,
			"select":false,
			"time":false,
			"tel":false,
			"url":false,
			"week":false
		},
		{
			"id":"is-Student",
			"question":"Are you a student?",
			"values":["yes", "no"],
			"boolean":true,
			"required":false,
			"text":false,
			"email":false,
			"checkbox":false,
			"color":false,
			"date":false,
			"datetime":false,
			"datetime-local":false,
			"month":false,
			"number":false,
			"range":false,
			"radio":false,
			"search":false,
			"select":true,
			"time":false,
			"tel":false,
			"url":false,
			"week":false
		},

		{
			"id":"student-id",
			"question":"Student Id Number?",
			"boolean":false,
			"required":false,
			"text":true,
			"email":false,
			"checkbox":false,
			"color":false,
			"date":false,
			"datetime":false,
			"datetime-local":false,
			"month":false,
			"number":false,
			"range":false,
			"radio":false,
			"search":false,
			"select":false,
			"time":false,
			"tel":false,
			"url":false,
			"week":false
		},

		{
			"id":"tshirt-size",
			"question":"What's your t-shirt size?",
			"values" : ["x-small", "small", "medium", "large", "x-large", "xx-large"],
			"boolean":false,
			"required":false,
			"text":true,
			"email":false,
			"checkbox":false,
			"color":false,
			"date":false,
			"datetime":false,
			"datetime-local":false,
			"month":false,
			"number":false,
			"range":false,
			"radio":false,
			"search":false,
			"select":true,
			"time":false,
			"tel":false,
			"url":false,
			"week":false
		}
	], //questions

	"thanks":"Thank you for cheking in with us! Go Flow!"

}//testForm object