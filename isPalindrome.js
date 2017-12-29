module.exports = function isPalindrome(string){
	
	//Taking the given string
	//Removing spaces
	//Sliting each letter
	//Reversing the array containing the letters
	//Joining each letter back into a string
	let strReverse = string.replace(/\s/g, '').split('').reverse().join('');

	//Check if the reversed string matches the given string with no spaces 
	if(strReverse === string.replace(/\s/g, '')){
		return 'Palindrome';
	}
	else{
		return 'Not Palindrome';
	}
}