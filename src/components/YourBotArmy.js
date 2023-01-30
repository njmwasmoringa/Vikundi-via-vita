import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ myBots, retireBot }) {
  //your bot army code here...

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          { myBots.map((bot, i)=><BotCard key={bot.id} bot={bot} retireBot={retireBot} />) }
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
