class Form
{
    constructor()
    {
        this.title=createElement('h1');
        this.inp=createInput('').attribute("placeholder","name");
        this.button=createButton('Play');
        this.button2=createButton('Reset');
        this.greeting=createElement('h3');
        this.greeting2=createElement('h3');
    }
    hide ()
    {
        this.inp.hide();
            this.button.hide();
            this.title.hide();
            this.greeting.hide();
    }
     display()
     {
        
         this.title.html('Car Racing Game');
         this.title.style("color","blue");
         this.title.position(displayWidth/2+150,150);

         
         this.inp.position(displayWidth/2+150,displayHeight/2-80);
        
         this.button.position(displayWidth/2+280,displayHeight/2);
         this.button2.position(displayWidth-50,100);
         
         this.button.mousePressed(()=>
         {
            this.inp.hide();
            this.button.hide();
            player.name= this.inp.value();
            playerCount+=1;
            player.index=playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html('Welcome '+player.name);
            this.greeting.style("color","blue");
            this.greeting.position(displayWidth/2-70,displayHeight/4);
         })
     }
     finish()
     {
        this.greeting2.html('YOU HAVE ACHIEVED '+player.rank);
            this.greeting2.style("color","blue");
            this.greeting2.position(displayWidth/2-70,displayHeight/4);
              
        this.button2.mousePressed(()=>
         {
           game.updateState(0);
           player.updateCount(0);
           player.updateRank(0);
           database.ref("players").remove();
           this.greeting2.hide();
           clear();
           game.start();
         })
     }
}