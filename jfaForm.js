
function jfaForm($f){
	this.id = $f.id;
	this.welcome = $f.welcome;
	this.questions = $f.questions;
	this.thanks = $f.thanks;
	this.print = jfaPrint;
}

function jfaPrint(){
	console.log(this);
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
			"question":"Are you a student",
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
			"question":"",
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