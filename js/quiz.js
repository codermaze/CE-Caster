var pos = 0, quiz, quiz_status, question, choice, choices, chA, chB, chC, correct = 0;
var questions = [
        [ "Who was the speaker in this video?", "The guy", "Pick this person", "wasn't this one", "B" ],
	[ "What was the topic ?", "no idea", "this is not the answer", "pick this one", "C" ],
	[ "What is the answer here?", "pick me", "nope", "2not this one", "A" ],
	[ "What is 8 / 2?", "10", "2", "4", "C" ]
];

var attempts = 0;

function _(x){
	return document.getElementById(x);
}
function renderQuestion(){
	quiz = _("quiz");
	if(pos >= questions.length){
		quiz.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
		_("quiz_status").innerHTML = "Test Completed";
                attempts += 1;
                $('.attempts').text(attempts);

                function checkPass() {
                    
                    if(correct == questions.length) {
                    $('#passed').show();
                    $('#failed').hide();
                    return true;
                }
                else {  
                    $('#passed').hide();
                    $('#failed').show();
                    return false;
                }
            }
                
                $('.pass').text(checkPass())
                
		pos = 0;
		correct = 0;
		return false;
	}
	_("quiz_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
	question = questions[pos][0];
	chA = questions[pos][1];
	chB = questions[pos][2];
	chC = questions[pos][3];
	quiz.innerHTML = "<h3>"+question+"</h3>";
	quiz.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
	quiz.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
	quiz.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br><br>";
	quiz.innerHTML += "<button class='btn btn-primary' onclick='checkAnswer()'>Submit Answer</button>";
}
function checkAnswer(){
	choices = document.getElementsByName("choices");
	for(var i=0; i<choices.length; i++){
		if(choices[i].checked){
			choice = choices[i].value;
		}
	}
	if(choice == questions[pos][4]){
		correct++;
	}
	pos++;
	renderQuestion();
}

    
  
function restart() {
    $('#passed').hide();
    $('#failed').hide();
    pos = 0;
    correct = 0; 
    renderQuestion();
}

