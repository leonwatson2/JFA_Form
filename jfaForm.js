
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
		this.nextButtonText = $f.nextButtonText;
		this.print = jfaPrint;
		this.init = jfaGetHtml;

		this.init();
	} else {
		jfaWarn("No id was entered for JfaForm.");
	}

}	

function jfaGetHtml(){
	$f = this;
	$container = $("#"+ this.id);
	$container.addClass("jfa-form");
	$items = [];


		//create into function
		this.questions.forEach(function(ques, index, arr){
		$item = $('<li>', {class:"item"});
			$num = $('<div>', {class:"num"});
			$num.html(index);
			$question = $('<div>', {class:"question"});
			$question.html(ques.question);

			$item.append($num);
			$item.append($question);
		if(ques.text){
			$ansDiv = $('<div>', {class:"answer"});
			$input = $('<input>', {type:"text", id:ques.id});
			$nextBut = $('<span>', {class:"next"});
			
			$nextBut.html($f.nextButtonText);
			
			$ansDiv.append($input);
			$ansDiv.append($nextBut)
			$item.append($ansDiv);
		}
			$items.push($item);
		});


	$ulQuestions = $('<ul>', {class:"questions"});
	$items.forEach(function(item){
		$ulQuestions.append(item);
			console.log($item);
	});
	$container.html($ulQuestions);

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
	"nextButtonText" : "next",
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