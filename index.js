let ques = '[Question]';

random_num = Math.floor(Math.random() * 9);

console.log('Question:',ques);
if (random_num === 1){
  console.log("Yes - definitely.");
} else if (random_num === 2){
  console.log("It is decidedly so.");
} else if (random_num === 3){
  console.log("Without a doubt.");
} else if (random_num === 4){
  console.log("Reply hazy, try again.");
} else if (random_num === 5){
  console.log("Ask again later.");
} else if (random_num === 6){
  console.log("Better not tell you now.");
} else if (random_num === 7){
  console.log("My sources say no.");
} else if (random_num === 8){
  console.log("Outlook not so good.");
} else if (random_num === 9){
  console.log("Very doubtful.");
} else{
  console.log('You are not supposed to see this message 💀. Anyways, an error has occured, so please try again.');
}
