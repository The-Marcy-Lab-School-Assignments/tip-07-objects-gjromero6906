//write your code here
//"hello world hello" -> {"hello":2, "world": 1}
const countWordFrequency = (sentence) => {
  // Split the sentence into an array of words
  // "hello world" -> ["hello", "world", "hello"]
  const words = sentence.split(" ");

  // Create frequency object to store { word: frequency } pairs
  const frequency = {};
//this starts at the index of 0 and goes through the length of the sentence in terms of each index
//inizalizes a starting point and ending and the increment
  for (let i = 0; i < words.length; i++) {
//sets the word to the word at i index and resets it every loop
    const word = words[i];
//checks if the current word is not inside frequency item
    if (frequency[word] === undefined) {
//adds word to fequency object with the value of 1
      frequency[word] = 1;
    } else {
//if word is already in frequency then add 1 to the value
      frequency[word]++;
    }
  }
//return frequency object after the for loop ended
  return frequency;
};
//
// Test the function
console.log(countWordFrequency("hello world hello"));
console.log(countWordFrequency("the cat and the hat"));
// { the: 2, cat: 1, and: 1, hat: 1 }