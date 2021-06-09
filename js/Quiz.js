class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();

    //write code to change the background color here
    background('yellow');

    //write code to show a heading for showing the result of Quiz
    fill('black');
    textSize(24);
    text("RESULT", 400, 50);

    //call getContestantInfo( ) here
    Contestant.getPlayerInfo();

    //write condition to check if contestantInfor is not undefined
    if (allContestants !== undefined) {
      fill('black');
      textSize(18);
      text("NOTE : Contestant who answered correct will be highlighted in Green.", 130, 230);

      var y = 250;

 //     console.log(allContestants);

      for (var plr in allContestants) {

 //       console.log(allContestants[plr]);

        var correctAns = "2";
  
        if (correctAns === allContestants[plr].answer) {
//          console.log("Correct Answer")
          fill('green');
        }else {
//          console.log("Wrong Answer")
          fill('red');
        }
  
        textSize(16);
        text(allContestants[plr].name + " : " + allContestants[plr].answer, 250, y);
        y += 30;
  
      }
    }
    
  }

}
