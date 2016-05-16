
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
		this.questions.forEach(jfaCreateQuestionStructure);


		$ulQuestions = $('<ul>', {class:"questions"});
		$items.forEach(function(item){
			$ulQuestions.append(item);
		});
		$container.html($ulQuestions);

	}
	
	function jfaCreateQuestionStructure(ques, index, arr){
		$item = $('<li>', {class:"item"});
		$num = $('<div>', {class:"num"});
		$ansDiv = $('<div>', {class:"answer"});
		$nextBut = $('<span>', {class:"next"});
		$question = $('<div>', {class:"question"});

		$num.html(index);
		$question.html(ques.question);
		$nextBut.html($f.nextButtonText);

		$item.append($num);
		$item.append($question);

		if(ques.text){

			$input = $('<input>', {type:"text", id:ques.id});


			$ansDiv.append($input);

		} else if(ques.select){
			$ansDiv.addClass("select");

			$selectDiv = $('<select>', {name:ques.id, id: ques.id});
			ques.values.forEach(function(ans, index, arr){
				$classes = "btn-answer";
				$classes += (index == 0) ? " selected": "";

				$btnAnswer = $('<button>', {name:ques.id, class: $classes, value:ans});
				$option = $('<option>', {value:ans});



				$btnAnswer.html(ans);
				$option.html(ans);

				$selectDiv.append($option);
				$ansDiv.append($btnAnswer);
				$ansDiv.append($selectDiv);

				$btnAnswer.click(function(){
					$("button[name=" + $(this).attr("name") + "]").removeClass("selected");
					$(this).addClass("selected");
					$("select[name=" + $(this).attr("name") + "]").val($(this).val());
					$curVal = $("select[name=" + $(this).attr("name") + "]").val();
				});
				$ansDiv.mousewheel(function(e){
					e.preventDefault();
					console.log("1");
					// -1 right
					// 1 left
					

				});


			});// /ques.forEach



		} //end if

		$ansDiv.append($nextBut)
		$item.append($ansDiv);
		$items.push($item);
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
		}
	], //questions

	"thanks":"Thank you for cheking in with us! Go Flow!"

}//testForm object
