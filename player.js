class Player
{
    constructor()
    {
      this.index=null;
      this.distance=0;
      this.name=null;
      this.rank=null;
    }

    getCount()
    {
      var playerCountref=database.ref("playerCount");
      playerCountref.on("value",(data)=>{
          playerCount=data.val();
      })
    }
    updateCount(count)
    {
      database.ref('/').update({
          playerCount:count
      })
    }
    update()
    {
        var playerIndex='players/player'+  this.index;
        database.ref(playerIndex).set({
            name:this.name,
            distance: this.distance
        })
    }
    static getPlayerInfo()
    {
      var playerInforef=database.ref("players");
      playerInforef.on("value",(data)=>{
          allPlayers=data.val();
      })
    }

    getrank()
    {
      var rankref=database.ref('rank');
      rankref.on("value",(data)=>{
        this.rank=data.val()
      })
    }

    updateRank(rank)
    {
      database.ref('/').update({
        rank:rank
    })
    }
}
