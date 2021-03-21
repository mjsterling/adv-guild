import React from "react";
import Fight from "./Fight.js";

const monsterDeathMsgs = [
  " has kicked the bucket.",
  " has carked it.",
  " was discorporated.",
  " departed the realm.",
  " has left the building.",
  " shuffled off this mortal coil.",
];

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.monsterDrop = this.monsterDrop.bind(this);
    this.buyUpgrade = this.buyUpgrade.bind(this);
    this.logLevel = this.logLevel.bind(this);
    this.state = {
      inventory: [
        { name: "Aluminium", amount: 0 },
        { name: "Balsa", amount: 0 },
        { name: "Leather", amount: 0 },
        { name: "Jute", amount: 0 },

        { name: "Bronze", amount: 0 },
        { name: "Redwood", amount: 0 },
        { name: "Snakehide", amount: 0 },
        { name: "Cotton", amount: 0 },

        { name: "Steel", amount: 0 },
        { name: "Maple", amount: 0 },
        { name: "Croc Skin", amount: 0 },
        { name: "Cashmere", amount: 0 },

        { name: "Titanium", amount: 0 },
        { name: "Purpleheart", amount: 0 },
        { name: "Drakeskin", amount: 0 },
        { name: "Silk", amount: 0 },

        { name: "Tungsten", amount: 0 },
        { name: "Snakewood", amount: 0 },
        { name: "Dragonhide", amount: 0 },
        { name: "Vicu\xF1a", amount: 0 },

        { name: "Diamond Weapon", amount: 0 },
        { name: "Diamond Gloves", amount: 0 },
        { name: "Diamond Helmet", amount: 0 },
        { name: "Diamond Chestpiece", amount: 0 },
        { name: "Diamond Legpiece", amount: 0 },
        { name: "Diamond Boots", amount: 0 },

        { name: "Prismatic Weapon", amount: 0 },
        { name: "Prismatic Gloves", amount: 0 },
        { name: "Prismatic Helmet", amount: 0 },
        { name: "Prismatic Chestpiece", amount: 0 },
        { name: "Prismatic Legpiece", amount: 0 },
        { name: "Prismatic Boots", amount: 0 },

        { name: "Olympian Weapon", amount: 0 },
        { name: "Olympian Gloves", amount: 0 },
        { name: "Olympian Helmet", amount: 0 },
        { name: "Olympian Chestpiece", amount: 0 },
        { name: "Olympian Legpiece", amount: 0 },
        { name: "Olympian Boots", amount: 0 },

        { name: "Starforged Weapon", amount: 0 },
        { name: "Starforged Gloves", amount: 0 },
        { name: "Starforged Helmet", amount: 0 },
        { name: "Starforged Chestpiece", amount: 0 },
        { name: "Starforged Legpiece", amount: 0 },
        { name: "Starforged Boots", amount: 0 },
        { name: "Max Tier!", amount: 0 },
        { name: "Mantle of the Universe", amount: 0 },
      ],
      tier: 0, //highest unlocked tier
      settingsMenu: { open: false, sound: true, music: true },
      inventoryMenu: false,
      log: [],
      instructions: true,
      resetWindow: false,
      youWin: false,
    };
  }

  componentDidMount() {
    //fetch game save from local storage
    let inventory = this.state.inventory;
    let tier = this.state.tier;
    for (let i = 0; i < inventory.length; i++) {
      inventory[i].amount = localStorage.getItem(inventory[i].name)
        ? parseInt(localStorage.getItem(inventory[i].name), 10)
        : 0;
    }
    let instructions =
      localStorage.getItem("instructions") == "false" ? false : true;
    tier = localStorage.getItem("tier")
      ? parseInt(localStorage.getItem("tier"), 10)
      : 0;
    this.setState({
      inventory: inventory,
      tier: tier,
      instructions: instructions,
    });
  }

  render() {
    //JSX element returned from inventoryMenu function stored as variable
    let inventoryMenu = this.state.inventoryMenu ? this.inventoryMenu() : null;
    let fightboxes = this.fightBoxes();
    let log = !this.state.inventoryMenu ? this.printLog() : null;
    let resetWindow = this.state.resetWindow ? this.resetWindow() : null;
    let instructions = this.state.instructions ? this.instructions() : null;
    let inventoryBtnText = this.state.inventoryMenu ? "Log" : "Inventory";
    let youWin = this.state.youWin ? this.youWin() : null;
    return (
      <div>
        <div className="container">
          <div className="fightcontainer">{fightboxes}</div>
          {log}
          {inventoryMenu}
          {resetWindow}
          {instructions}
          {youWin}
          <div className="menubar">
            <div className="menubtns">
              {/* toggle settings - TODO */}
              {/* <button className="settingsbtn">Settings</button> */}
              <button
                onClick={() =>
                  this.setState({
                    instructions: true,
                  })
                }
              >
                Instructions
              </button>
              <button
                onClick={() =>
                  this.setState({
                    resetWindow: !this.state.resetWindow,
                  })
                }
              >
                Hard Reset
              </button>
              <button
                className="inventorybtn"
                onClick={() =>
                  this.setState({ inventoryMenu: !this.state.inventoryMenu })
                }
              >
                {inventoryBtnText}
              </button>
            </div>
          </div>
          <footer>
            &copy; Matthew Sterling 2021. Built in React as a learning exercise
            / passion project. Source code{" "}
            <a href="https://github.com/mjsterling/adv-guild">here</a>
          </footer>
        </div>
      </div>
    );
  }

  componentDidUpdate() {
    //save game to localStorage
    localStorage.setItem("tier", this.state.tier.toString(10));
    let inventory = this.state.inventory;
    for (let i = 0; i < inventory.length; i++) {
      localStorage.setItem(inventory[i].name, inventory[i].amount.toString(10));
    }
    localStorage.setItem("instructions", this.state.instructions);
  }

  youWin() {
    return (
      <div className="resetWindow">
      <p>
        Congratulations! You have stolen the Mantle of the Universe from Time Himself and become the most powerful being in all creation.</p>
        <p>I really didn't expect anyone to get this far. 
          Thanks for playing! I admire your dedication. 
          Please email me at <a href="mailto:mjsterling93@gmail.com">mjsterling93@gmail.com</a> and let me know your thoughts!</p>
    </div>
    )
  }

  resetWindow() {
    return (
      <div className="resetWindow">
        <button
          onClick={() => {
            localStorage.clear();
            window.location.reload(true);
          }}
        >
          HARD RESET
        </button>
        <p>
          Warning: This will reset all your progress! Click the above button to
          confirm:
        </p>
        <button
          onClick={() =>
            this.setState({
              resetWindow: false,
            })
          }
        >
          Back
        </button>
      </div>
    );
  }

  instructions() {
    return (
      <div className="instructions">
        <p>Welcome to Adventurer's Guild Idle RPG!</p>
        <p>
          This is a simple idle/management RPG built in React. Your objective is
          to send heroes to fight monsters, level up, get loot, and spend
          resources to buy equipment upgrades for your heroes.
        </p>
        <p>Choose a class for your first hero to get started!</p>
        <button
          onClick={() =>
            this.setState({
              instructions: false,
            })
          }
        >
          Close
        </button>
      </div>
    );
  }

  fightBoxes() {
    let fights = new Array(this.state.tier + 1);
    for (let i = 0; i < this.state.tier + 1 && i < 5; i++) {
      fights[i] = this.renderFight(i);
    }
    return fights;
  }

  renderFight(i) {
    return (
      <Fight
        key={i}
        className="fight"
        heroId={i}
        monsterDrop={this.monsterDrop}
        inventory={this.state.inventory}
        buyUpgrade={this.buyUpgrade}
        logLevel={this.logLevel}
        tier={this.state.tier}
        shortScale={this.shortScale}
      />
    );
  }

  printLog() {
    let log = Array(this.state.log.length);
    for (let i = 0; i < log.length; i++) {
      log[i] = this.renderLog(i);
    }
    return <ul className="log">{log}</ul>;
  }

  renderLog(i) {
    return <LogItem key={i} content={this.state.log[i]} />;
  }
  //generate inventory items only if their amount > 0 and return JSX element
  inventoryMenu() {
    let inventoryList = Array(this.state.inventory.length);
    for (let i = 0; i < inventoryList.length; i++) {
      inventoryList[i] = this.state.inventory[i].amount
        ? this.renderInventory(i)
        : null;
    }
    return <div className="inventorymenu">{inventoryList}</div>;
  }

  shortScale(n) {
    if (n >= 10 ** 8) {
      return Math.round(n / 10 ** 6) + "M";
    } else if (n >= 10 ** 6) {
      return (n / 10 ** 6).toFixed(1) + "M";
    } else if (n >= 10 ** 4) {
      return Math.round(n / 1000) + "K";
    } else if (n >= 1000) {
      return (n / 1000).toFixed(1) + "K";
    } else {
      return n;
    }
  }
  //dynamic class iteratively called inside inventoryMenu() for loop
  renderInventory(i) {
    return (
      <Inventory
        key={i}
        contents={this.state.inventory[i]}
        shortScale={this.shortScale}
      />
    );
  }
  //calculate monster drop tables and update inventory totals. receives arg as array from Fight.fight()
  monsterDrop(monster) {
    let inventory = this.state.inventory;
    let log = this.state.log;
    let roll = monster.tier === 5 ? Math.floor(Math.random() * 100) : "";
    if (monster.tier === 5 && roll < 90) {
      log.push(
        monster.name +
          monsterDeathMsgs[
            Math.floor(Math.random() * monsterDeathMsgs.length)
          ] +
          "Roll: " +
          roll +
          ". " +
          "Loot: Nothing!"
      );
    }
    let dropid = Math.floor(Math.random() * monster.loot.length);
    let drop = monster.loot[dropid].name;
    let dropamount = Math.floor(Math.random() * monster.loot[dropid].max) + 1;
    let stockpile = inventory.find((x) => x.name === drop).amount;
    stockpile += dropamount;
    log.push(
      monster.name +
        monsterDeathMsgs[Math.floor(Math.random() * monsterDeathMsgs.length)] +
        roll +
        " Loot: " +
        dropamount +
        " " +
        drop
    );
    inventory.splice(
      inventory.findIndex((x) => x.name === drop),
      1,
      { name: drop, amount: stockpile }
    );
    this.setState({
      inventory: inventory,
      log: log,
    });
  }

  logLevel(hero) {
    let log = this.state.log;
    log.push(hero.name + " is now level " + hero.level);
    this.setState({
      log: log,
    });
  }
  //receives name, cost args from Fight.upgradeItem()
  buyUpgrade(name, cost, equipment) {
    let inventory = this.state.inventory;
    let resource = inventory.findIndex((x) => x.name === name);
    inventory[resource].amount -= cost;
    let tier = this.state.tier;
    //tier unlocked becomes equal to the lowest tier item in equipment array if higher than current
    let equipment1 = equipment.sort();
    let log = this.state.log;
    if (tier < equipment1[0]) {
      tier++;
      log.push("A new hero has joined the party!");
    }
    this.setState({
      inventory: inventory,
      tier: tier,
      log: log,
    });
  }
}
//function class returns line items of Game.state.inventory pairs based on Game.inventoryMenu() for loop
function Inventory(props) {
  return (
    <li>
      {props.contents.name + ": " + props.shortScale(props.contents.amount)}
    </li>
  );
}

function LogItem(props) {
  return <li className="logitem">{props.content}</li>;
}
// class Settings extends React.Component {
//   render() {
//     return (
//       <div>
//         {/* Settings menu
//                 - Sound
//                 - Music
//                  */}
//       </div>
//     );
//   }
// }

export default Game;
