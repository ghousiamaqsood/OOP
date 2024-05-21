
     import inquirer from "inquirer";

      const Computer_number=Math.floor(Math.random() * 10 +1 );

      const result = await inquirer.prompt([
    {
        name:"guessing_game",
        type: "number",
        message: "please guess a number between 1-10: ",

    },
     ]); 
     // Condition

     if(result.guessing_game === Computer_number){

       console.log("congratulation! you guess a right number");
    }
     else{
        console.log("wrong number,try Again");
      
    }
     
    

