import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {  

  const [bots, setBots] = useState([]);
  const [myBotArmy, setMyBotArmy] = useState([]);


  function addBot(bot){
    setMyBotArmy([...myBotArmy, bot]);
  }

  function removeBot(botId){
    const index = myBotArmy.findIndex(bot=>bot.id==botId);
    const updatedBots = [...myBotArmy];
    updatedBots.splice(index, 1);
    setMyBotArmy( updatedBots );
  }

  useEffect(()=>{
    fetch('http://localhost:3000/bots').then(resp=>resp.json())
    .then(bots=>setBots(bots));
  }, [myBotArmy]);

  return (
    <div>
      <YourBotArmy myBots={myBotArmy} retireBot={removeBot} recruteBot={addBot} />
      <BotCollection bots={bots} recruteBot={addBot} />
    </div>
  )
}

export default BotsPage;
