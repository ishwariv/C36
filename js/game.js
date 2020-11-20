class Game{
    constructor(){
        
    }

    getState(){
        //ref: reference
        var gameStateRef=database.ref('gameState');
        //on: listener
        gameStateRef.on("value",function(data){
            gameState = data.val();
        })
    }

    update(state){
        // / means root. this refers to main database, inside which the gameState is created.
        database.ref('/'). update({
        gameState:state
        })
    }

    start(){
        if(gameState===0){
            //creating an object when the blueprints are not defined, then that style is called abstraction.
            player=new Player();
            player.getCount();
            form=new Form();
            form.display();
        }

    }
}