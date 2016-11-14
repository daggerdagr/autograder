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
var taskID = "_U7_L3_P5_E3"; //this should follow the name of the nomenclature document
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
		"Ice Cream Bowls"
	);

	var NScoopBowlsName = "NScoopBowls %";
	var NScoopBowlsChunk = fb.newChunk('Complete the "' + NScoopBowlsName + '" block.');

	var NScoopBowlsExists = function() {
		return spriteContainsBlock(NScoopBowlsName);
	}

	function scoops(flavors, numscoops) {
		if (numscoops == 1) {
			return flavors
		}
		less = scoops(flavors, numscoops - 1)
		k = []
		for (j = 0; j < flavors.length; j++) {
			 for (i = 0; i < less.length; i++) {
				if (flavors[j] < less[i][0]) {
					x = [flavors[j]].concat(less[i]);
					k.push(x);
				}
			}
		}
		return k
	}

	var input01 = [['Vanilla', 'Chocolate', 'Strawberry', 'Coffee', 'Birthday Cake', 'Green Tea', 'Cotton Candy'], 4]
	var IOTest01 = function (output) {
            // Output should be a list of numbers.
            var expected,
                actual;
            console.log(output);

            expected = scoops(input01[0], 4);
            if (output instanceof List) {
                actual = output.asArray();
            } else {
                actual = output;
                actual += ""; //to string
            }
            console.log("expected")
            console.log(expected)
            for (i = 0; i < actual.length; i++)
            {
                actual[i] = actual[i].asArray().sort();
            }
            console.log("actual")
            console.log(actual)
            if (!_.isEqual(actual, expected)) {
                NScoopBowlsIOTest1.suggestion = 'The output should be ' + expected + ';';
                NScoopBowlsIOTest1.suggestion += ' but was ' + actual + '.';
                return false;
            }
            return true;
        }

	var input02 = [['Apricot', 'Banana', 'Chocolate', 'Dark Cherry', 'Rocky Road', 'Strawberry Shortcake'], 4]
	var IOTest02 = function (output) {
            // Output should be a list of numbers.
            var expected,
                actual;
            console.log(output);

            expected = scoops(input01[0], 4);
            if (output instanceof List) {
                actual = output.asArray();
            } else {
                actual = output;
                actual += ""; //to string
            }
            console.log("expected")
            console.log(expected)
            for (i = 0; i < actual.length; i++)
            {
                actual[i] = actual[i].asArray().sort();
            }
            console.log("actual")
            console.log(actual)
            if (!_.isEqual(actual, expected)) {
                NScoopBowlsIOTest1.suggestion = 'The output should be ' + expected + ';';
                NScoopBowlsIOTest1.suggestion += ' but was ' + actual + '.';
                return false;
            }
            return true;
        }

	var NScoopBowlsCheckExists = NScoopBowlsChunk.newTip('Make sure you name your block exactly "' + NScoopBowlsName + '" and place it in the scripting area.',
        'The "' + NScoopBowlsName + '" block exists and uses the suggested blocks.');
	
	NScoopBowlsCheckExists.newAssertTest(
			NScoopBowlsExists,
			'Testing if the "' + NScoopBowlsName + '" block is in the scripting area.',
			'The "' + NScoopBowlsName + '" block is in the scripting area.',
			'Make sure you name your block exactly "' + NScoopBowlsName + '" and place it in the scripting area.',
			1
		)

    var NScoopBowlsIOTest1 = NScoopBowlsChunk.newTip('Make sure you have written the "NScoopBowls % %" block correctly.', 'The "NScoopBowls % %" block works.');

    NScoopBowlsIOTest1.newIOTest('r',
			NScoopBowlsName,
			input01,
			IOTest01,
			4 * 1000,
			true,
			1
		);

    NScoopBowlsIOTest1.newIOTest('r',
			NScoopBowlsName,
			input02,
			IOTest02,
			4 * 1000,
			true,
			1
		);

	return fb;

};