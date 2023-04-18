/*
1) User clicks on an option
2) Generate a random computer option
3) Compare the two options
4) Display the winner & score
 */

/**
 * Rock - 0
 * Paper - 1
 * Scissors - 2
 */

// create a function with js that generates a random response between 0-2 (inclusive)

const options = ["Rock", "Paper", "Scissors"];

const generateRandomResponse = ()=>(Math.random()*10).toFixed(0)%3


