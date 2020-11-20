class Form{
    constructor(){
        //DOM is document object model
    }

    display(){
        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(130,0);

        var input=createInput("NAME");
        var button=createButton("Play")
        var greeting=createElement('h3');
        input.position(130,150);
        button.position(250,200);
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name=input.value();
            player.update(name);
            playerCount=playerCount+1;
            player.updateCount(playerCount);
            greeting.html("Hello "+ name);
            greeting.position(180,180);
        });
    }
}