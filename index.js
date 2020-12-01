var readlineSync = require('readline-sync');
const chalk = require('chalk')
console.log(chalk.bgGreenBright("*********Welcome to Recipes Quiz********"));

console.log("\n Read instruction befor attempting quiz");
console.log("\n 1]There are Total 2 recipes" + "\n" + "\n 2]If you wants know 2 recipes you need to clear all Two round one \t \tby one" + "\n" + "\n 3]You need 15 points to clear level Two and Level Three" + "\n" + "\n 4]Correct Answer = 5 Points and Wrong Answer = -1 Points");

var proceed = confirm(chalk.yellowBright("\n Are you ready for recipe quiz "));

var userName = readlineSync.question(chalk.redBright("\n Enter your name? "));
console.log(chalk.yellow( "\n" + "Hello\t" + userName +"\tLet's Have Some Fun" + "\n"))
console.log(chalk.bgGreenBright("**********You are at level 1************"));

console.log(chalk.bgRedBright("\n 1. Recipe Butter Paneer Masala"));
var score = 0;
var questionLevel1 = [{
  question:"\n"+ "1] What all ingredients required for butter paneer ",
  options:"\n1]Butter \n2]Paneer \n3]Spices \n4]All of Above \nYour answer: ",
  answer:"4"
},
  {
  question: "2]What is the first Step to start with recipe? ", 
  answer:"1",
  options:"\n1]Cut paneer in to pieces and have a stir fry \n2]Crush paneer \n3]Deep fry paneer in Hot oil \n4]All of Above \nYour answer: "
  
},
{
  question:"3] Which ingreident is not required to prepare butter paneer masala ",
  answer:"4",
  options:  " \n1]Butter \n2]Paneer \n3]Tomato \n4]Potato \nYour answer: "
  
},
{
  question:"4] Which ingredients are required to prepare Gravy",
  options:"\n1]Butter and Bit of Oil \n2]Ginger,Garlic Paste \n3]tomato Pury \n4]All of Above \nYour answer: ",
  answer:"4"
},
{
  question:"5] How Much time Butter paneer masala takes to cook? ",
  options:"\n1]Half Hour \n2]15 Min \n3]If everything is ready It will take somewhere in between 5 to 7 min \n4]20 min \nYour answer: ",
  answer:"3"
}
]

console.log(chalk.bgRedBright("\n2. Recipe Chicken Biryaani"));

var questionLevel2 = [{
  question:"\n"+ "1] Which is the 1st step to prepare chicken biryani? ",
  options:"\n1]fry Chicken pieces \n2]Wash chicken pieces properly and Marinet Them \n3]Grill Chicken \n4]All of Above \nYour answer: ",
  answer:"2"
},
  {
  question: "2] Which are of Below ingredients require to Marinet Chicken? ",  
  answer:"4",
  options:"\n1]Curd \n2]Turmeric \n3]Chilli powder and Chat masala \n4]All of Above \nYour answer: "
  
},
{
  question:"3] How much Time it will take to Prepare complete Chicken Biryani(If rice is Precooked) for 4 people",
  answer:"3",
  options:  " \n1]2 hour \n2]1 hour \n3]half hour \n4]10 min \nYour answer: "
  
},
{
  question:"4]Do Chiken Biryani Require Smoke for Better Taste ",
  options:"\n1]Yes \n2]No \n3]May be \n4]None of Above \nYour answer: ",
  answer:"1"
}
]

function play(question, answer, options) {
  var userAnswer = readlineSync.question(chalk.yellowBright(question, options));
  console.log(chalk.green("You Entered option " + userAnswer + "\n"));
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.greenBright("You are right! "));
    score = score + 5;
  } else {
    console.log(chalk.redBright("You are wrong! "));
    console.log("Correct answer is: ", answer );
    score = score - 1;
  }
  console.log(chalk.whiteBright("Your score is : ", score));
  console.log("*****************");
}
for(var i = 0; i < questionLevel1.length; i++){
  var currentQuestion = questionLevel1[i];
  play(currentQuestion.question, currentQuestion.answer, currentQuestion.options)
}

if(score >=10 ){
  console.log(chalk.bgGreenBright("Congratulations!!! You are selected for Round-2"))
  console.log(chalk.bgRedBright("2.Chicken Biryaani"))
  for(var i = 0; i < questionLevel2.length; i++){
  var currentQuestion = questionLevel2[i];
  play(currentQuestion.question, currentQuestion.answer, currentQuestion.options)
}
}else{
  console.log(chalk.greenBright("Oops!!! Enjoy Butter Paneer Masala "));
  console.log(chalk.greenBright("Thank you for participating!!"))
}
console.log(chalk.bgYellow("Your final score: " ,score));
var flag = 0;
var highScore = [
  {name:"Sanket", score:40}, 
  {name:"Abhijeet", score:35}, 
  {name:"Kaivalya", score:30}
  ];

for(var i=0;i<highScore.length;i++){
  if(score >= highScore[i].score){
    console.log(chalk.greenBright('\n'+'Congratulations! '+userName+' You are topscorer'));
    flag = 1;
    console.log(chalk.greenBright("Thank you for participating"))
    break;
  }
}
if(flag===0){
  console.log(chalk.greenBright("Try Again for getting high score"));
}

for(var i = 0; i<highScore.length; i++){
  console.log( "These are the Topscores: ")
   console.log(`${highScore[i].name} => ${highScore[i].score}` )
}