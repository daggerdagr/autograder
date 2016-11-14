// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//            Standard Start Code
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var starter_path = null;
// The id is to act as a course identifier.
// NOTE: FOR NOW YOU ALSO HAVE TO ADD THE ID TO THE BOTTOM OF THE PAGE.
var courseID = "BJC.1x";  // e.g. "BJCx"
// Specify a prerequisite task id, should be null if no such requirement.
var preReqTaskID = null;
var preReqID = courseID + preReqTaskID;
// taskID uniquely identifies the task for saving in browser sessionStorage.
var taskID = "_U7_L3_P2_E1"; //this should follow the name of the nomenclature document
var id = courseID + taskID;
var isEDX = isEDXurl();
// if this question is not meant to be graded, change this flag to false
var graded = true;
// to hide feedback for this problem, set this to false
var showFeedback = true;
// to allow ability to regrade certain tests, set this to true
var regradeOn = true;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//           Actual Autograder Code
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function AGTest(outputLog) {
	var fb = new FeedbackLog(
		world,
		id,
		"Pascal's Triangle Efficiency"
	);

	var pascalName = "pascal % %";
	var pascalChunk = fb.newChunk('Complete the "' + pascalName + '" block.');

	var pascalExists = function() {
		return spriteContainsBlock(pascalName);
	}

	function factorial(num) {
		if (num == 1) {
			return 1
		} else {
			return num * factorial(num - 1)
		}
	}

	var input01 = [10, 6]
	var IOTest01 = function(output) {
		return output == factorial(10) / (factorial(6) * factorial(10 - 6))
	}

	var input02 = [7, 2]
	var IOTest02 = function(output) {
		return output == factorial(7) / (factorial(2) * factorial(7 - 2))
	}

	var input03 = [8, 1]
	var IOTest03 = function(output) {
		return output == factorial(8) / (factorial(1) * factorial(8 - 1))
	}

	var pascalCheckExists = pascalChunk.newTip('Make sure you name your block exactly "' + pascalName + '" and place it in the scripting area.', 'The "' + pascalName + '" block exists.');
	
	pascalCheckExists.newAssertTest(
			pascalExists,
			'Testing if the "' + pascalName + '" block is in the scripting area.',
			'The "' + pascalName + '" block is in the scripting area.',
			'Make sure you name your block exactly "' + pascalName + '" and place it in the scripting area.',
			1
		)

    var pascalIOTest1 = pascalChunk.newTip('Make sure you have written the "pascal % %" block correctly.', 'The "pascal % %" block works.');

    pascalIOTest1.newIOTest('r',
			pascalName,
			input01,
			IOTest01,
			4 * 1000,
			true,
			1
		);

    pascalIOTest1.newIOTest('r',
			pascalName,
			input02,
			IOTest02,
			4 * 1000,
			true,
			1
		);

    pascalIOTest1.newIOTest('r',
			pascalName,
			input03,
			IOTest03,
			4 * 1000,
			true,
			1
		);

	return fb;

};