module.exports = function isPrime(n){

	//Round up the square root of the given number
	let sqrt = Math.ceil(Math.sqrt(n));
	let factors = [];

	//Check between 2 and the sqaure root for any factors
	for(let i = 2; i <= sqrt; i++){

		//If a factor appears, push it to the array
		if(n % i === 0){
			factors.push(i);
		}
	}

	//If there are no factors the number is prime, returning 1.
	if(factors.length === 0){
		return 1;
	}
	
	//If there are 1 or more factors the number is prime, returning the smallest factor.
	else if(factors.length >= 1){
		return factors[0];
	}
}