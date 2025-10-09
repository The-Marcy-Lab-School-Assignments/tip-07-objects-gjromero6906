const movie = {
  title: "Inception",
  director: "Christopher Nolan",
  releaseYear: 2010,
};

// Access values
console.log(movie.title); // "Inception"
console.log(movie["releaseYear"]); // 2010

// Update a value
movie.director = "Nolan";
console.log(movie.director); // "Nolan"

// Add a new key/value pair
movie.rating = 9;
console.log(movie.rating); // 9

// Loop through the object
for (let key in movie) {
  console.log(`${key}: ${movie[key]}`);
}

for(const word in movie){
  console.log(Object.values(movie))
}
for(let key in movie){
  let val = movie[key];
  console.log(val);
}