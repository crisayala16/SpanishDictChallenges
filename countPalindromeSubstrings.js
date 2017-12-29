let isPalindrome = require('./isPalindrome.js');

module.exports = function countPalindromeSubstrings(string){
	//check inside string for palindrome sub strings
	//check string with multiple for loops firing at once.
	let subStringCount = 0;

	//seperate letters
	let letters = string.split('');

	//Check for every two letters
	for(let i = 0; i < letters.length; i++){
		if(isPalindrome(letters[i] + letters[i + 1]) === 'Palindrome'){
			subStringCount++;
		}
	}
	//Check for every 3 letters
	for(let i = 0; i < letters.length; i++){
		if(isPalindrome(letters[i] + letters[i + 1] + letters[i + 2]) === 'Palindrome'){
			subStringCount++;
		}
	}
	//Check for every 4 letters
	for(let i = 0; i < letters.length; i++){
		if(isPalindrome(letters[i] + letters[i + 1] + letters[i + 2] + letters[i + 3]) === 'Palindrome'){
			subStringCount++;
		}
	}
	//Check for every 5 letters
	for(let i = 0; i < letters.length; i++){
		if(isPalindrome(letters[i] + letters[i + 1] + letters[i + 2] + letters[i + 3] + letters[i + 4]) === 'Palindrome'){
			subStringCount++;
		}
	}
	return subStringCount;
}