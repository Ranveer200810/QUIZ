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
    console.log("start");
    if(gameState === 0){
      console.log("state = 0");
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question();
      question.display();
    }
  }

  play(){
    //write code here to hide question elements

    //write code to change the background color here
  //  background('yellow');

    //write code to show a heading for showing the result of Quiz

    //call getContestantInfo( ) here
//    Contestant.getPlayerInfo();

    //write condition to check if contestantInfor is not undefined

    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

}
