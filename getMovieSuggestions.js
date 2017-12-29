module.exports = function getMovieSuggestions(string){

	//List of Movies
	let possibleSuggestions = ["The Shawshank Redemption", "The Godfather", 
	"The Godfather: Part II", "The Dark Knight", "Pulp Fiction", "The Good, the Bad and the Ugly",
	"Schindler's List", "12 Angry Men", "The Lord of the Rings: The Return of the King",
	"Fight Club", "The Lord of the Rings: The Fellowship of the Ring", "Star Wars: Episode V - The Empire Strikes Back",
	"Inception", "Forrest Gump", "One Flew Over the Cuckoo's Nest", "The Lord of the Rings: The Two Towers",
	"Goodfellas", "The Matrix", "Star Wars", "Seven Samurai"];

	//Filter through movies
	let matches = possibleSuggestions.filter((movie)=>{

		//Set movie and string to variables
		let movieString = movie;
		let inputString = string;

		//If the movie we are currently looking at contains 'The' at the begining
		//Then we remove 'The' from the movie title
		if(movie.slice(0, 3).match(/the/gi)){
			movieString = movieString.slice(4);

			//If the input string also contains 'The' at the begining
			//Then we also remove 'The' from the input string
			if(inputString.slice(0, 3).match(/the/gi)){
				inputString = parString.slice(4);
			}
		}

		//Cut the movie title down to the same length as the input string
		let stringToCheck = movieString.slice(0, inputString.length);

		//Check if the input string matches the cut down string to check
		//If they match, return the movie, adding it to the matches array
		let expString = new RegExp(inputString, 'i');
		if(stringToCheck.match(expString)){
			return movie;
		} 
	});

	return matches;
}