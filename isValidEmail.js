module.exports = function isValidEmail(string){
	//Get domain from string
	let domain = string.split('@')[1];

	//Get string before the @
	let start = string.split('@')[0];

	//Divide the letters and the special characters/numbers
	let letters = start.split(/[_0-9]/)[0];
	let chars = start.slice(letters.length);
	let numbers = null;
	let underscore = null;

	//If the characters begin with an underscore,
	//seperate the numbers from the underscore
	if(chars.charAt(0) === '_'){
		numbers = chars.split('_')[1];
		underscore = chars.charAt(0);
	}

	//Check for any capital letters
	let checkForCaptial = /[A-Z]/.exec(start);

	//Return Not Valid for the incorrect domain
	if(domain !== 'hackerrank.com'){
		return 'Not Valid';
	}

	//Return Not Valid for any capital letters 
	//as well as too little or too many letters 
	else if(checkForCaptial !== null || letters.length > 6 || letters.length < 1){
		return 'Not Valid';
	}

	//If there is an underscore at the begining of the characters
	//Make sure there are no more than 4 numbers as well as an underscore in the numbers
	else if(underscore){
		if(numbers.length > 4 || /[_]/.exec(numbers) !== null){
			return 'Not Valid';
		}
		else{
			return 'Valid';
		}
	}
	//If there is no underscore at the begining or the character
	//Make sure there are no more than 4 numbers as well as an underscore in the numbers
	else if(chars.length > 4 || /[_]/.exec(chars) !== null){
		return 'Not Valid';
	}
	else{
		return 'Valid';
	}
}