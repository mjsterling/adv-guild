import React from "react";

const items = [
  //tier 0 - empty
  {
    tier: 0,
    type: "weapon",
    name: "Fists",
    atk: 0,
    mhp: 0,
    aspd: 1,
    upcost: ["Aluminium", 20],
  },
  {
    tier: 0,
    type: "gloves",
    name: "No Gloves",
    atk: 0,
    mhp: 0,
    aspd: 1,
    upcost: ["Aluminium", 20],
  },
  {
    tier: 0,
    type: "helmet",
    name: "No Helmet",
    atk: 0,
    mhp: 0,
    aspd: 1,
    upcost: ["Aluminium", 20],
  },
  {
    tier: 0,
    type: "body",
    name: "No Armour",
    atk: 0,
    mhp: 0,
    aspd: 1,
    upcost: ["Aluminium", 20],
  },
  {
    tier: 0,
    type: "legs",
    name: "No Legs",
    atk: 0,
    mhp: 0,
    aspd: 1,
    upcost: ["Aluminium", 20],
  },
  //tier 1 - aluminium
  {
    tier: 1,
    type: "weapon",
    name: "Aluminium Sword",
    atk: 3,
    mhp: 0,
    aspd: 0.9,
    upcost: ["Bronze", 100],
  },
  {
    tier: 1,
    type: "gloves",
    name: "Foil Gloves",
    atk: 2,
    mhp: 25,
    aspd: 0.95,
    upcost: ["Bronze", 100],
  },
  {
    tier: 1,
    type: "helmet",
    name: "Foil Helmet",
    atk: 1,
    mhp: 25,
    aspd: 0.95,
    upcost: ["Bronze", 100],
  },
  {
    tier: 1,
    type: "body",
    name: "Foil Chestplate",
    atk: 1,
    mhp: 25,
    aspd: 0.95,
    upcost: ["Bronze", 100],
  },
  {
    tier: 1,
    type: "legs",
    name: "Foil Platelegs",
    atk: 1,
    mhp: 25,
    aspd: 0.95,
    upcost: ["Bronze", 100],
  },
  {
    tier: 2,
    type: "weapon",
    name: "Bronze Sword",
    atk: 10,
    mhp: 25,
    aspd: 0.8,
    upcost: ["Steel", 1000],
  },
  //tier 2 - Bronze
  {
    tier: 2,
    type: "gloves",
    name: "Bronze Gloves",
    atk: 4,
    mhp: 50,
    aspd: 0.8,
    upcost: ["Steel", 1000],
  },
  {
    tier: 2,
    type: "helmet",
    name: "Bronze Helmet",
    atk: 2,
    mhp: 75,
    aspd: 0.9,
    upcost: ["Steel", 1000],
  },
  {
    tier: 2,
    type: "body",
    name: "Bronze Chestplate",
    atk: 2,
    mhp: 75,
    aspd: 0.9,
    upcost: ["Steel", 1000],
  },
  {
    tier: 2,
    type: "legs",
    name: "Bronze Platelegs",
    atk: 2,
    mhp: 75,
    aspd: 0.9,
    upcost: ["Steel", 1000],
  },
  {
    tier: 3,
    type: "weapon",
    name: "Steel Sword",
    atk: 30,
    mhp: 100,
    aspd: 0.7,
    upcost: ["Titanium", 5000],
  },
  {
    tier: 3,
    type: "gloves",
    name: "Steel Gloves",
    atk: 10,
    mhp: 150,
    aspd: 0.7,
    upcost: ["Titanium", 5000],
  },
  {
    tier: 3,
    type: "helmet",
    name: "Steel Helmet",
    atk: 5,
    mhp: 300,
    aspd: 0.9,
    upcost: ["Titanium", 5000],
  },
  {
    tier: 3,
    type: "helmet",
    name: "Steel Helmet",
    atk: 5,
    mhp: 300,
    aspd: 0.9,
    upcost: ["Titanium", 5000],
  },
  {
    tier: 3,
    type: "body",
    name: "Steel Platebody",
    atk: 5,
    mhp: 300,
    aspd: 0.9,
    upcost: ["Titanium", 5000],
  },
  {
    tier: 3,
    type: "legs",
    name: "Steel Platelegs",
    atk: 5,
    mhp: 300,
    aspd: 0.9,
    upcost: ["Titanium", 5000],
  },
  {
    tier: 4,
    type: "weapon",
    name: "Titanium Sword",
    atk: 100,
    mhp: 300,
    aspd: 0.6,
    upcost: ["Tungsten", 25000],
  },
  {
    tier: 4,
    type: "gloves",
    name: "Titanium Gloves",
    atk: 50,
    mhp: 450,
    aspd: 0.6,
    upcost: ["Tungsten", 25000],
  },
  {
    tier: 4,
    type: "helmet",
    name: "Titanium Helmet",
    atk: 10,
    mhp: 750,
    aspd: 0.85,
    upcost: ["Tungsten", 25000],
  },
  {
    tier: 4,
    type: "body",
    name: "Titanium Platebody",
    atk: 10,
    mhp: 750,
    aspd: 0.85,
    upcost: ["Tungsten", 25000],
  },
  {
    tier: 4,
    type: "legs",
    name: "Titanium Platelegs",
    atk: 10,
    mhp: 750,
    aspd: 0.85,
    upcost: ["Tungsten", 25000],
  },
];

// const setbonuses = [
//   { tier: 1, name: "Full Aluminium", atk: 10, dr: 0.9, aspd: 0.9 },
// ];

const monsters = [
  {
    tier: 0,
    name: "Aluminium Golem",
    atk: 1,
    aspd: 1000,
    chp: 20,
    mhp: 20,
    xp: 20,
    loot: [
      { name: "Aluminium", max: 10 },
      { name: "Aluminium", max: 10 },
      { name: "Balsa", max: 3 },
      { name: "Jute", max: 3 },
    ],
  },
  {
    tier: 0,
    name: "Balsa Treant",
    atk: 1,
    aspd: 1000,
    chp: 20,
    mhp: 20,
    xp: 20,

    loot: [
      { name: "Aluminium", max: 3 },
      { name: "Balsa", max: 10 },
      { name: "Balsa", max: 10 },
      { name: "Jute", max: 3 },
    ],
  },
  {
    tier: 0,
    name: "Sentient Jute",
    atk: 1,
    aspd: 1000,
    chp: 20,
    mhp: 20,
    xp: 20,

    loot: [
      { name: "Aluminium", max: 3 },
      { name: "Balsa", max: 3 },
      { name: "Jute", max: 10 },
      { name: "Jute", max: 10 },
    ],
  },
  {
    tier: 1,
    name: "The Inamicable",
    atk: 5,
    aspd: 750,
    chp: 400,
    mhp: 400,
    xp: 120,
    loot: [
      { name: "Aluminium", max: 30 },
      { name: "Balsa", max: 30 },
      { name: "Jute", max: 30 },
    ],
  },
  {
    tier: 1,
    name: "Bronze Golem",
    atk: 5,
    aspd: 1000,
    chp: 200,
    mhp: 200,
    xp: 60,
    loot: [
      { name: "Bronze", max: 30 },
      { name: "Bronze", max: 30 },
      { name: "Redwood", max: 10 },
      { name: "Cotton", max: 10 },
    ],
  },
  {
    tier: 1,
    name: "Redwood Treant",
    atk: 5,
    aspd: 1000,
    chp: 200,
    mhp: 200,
    xp: 60,
    loot: [
      { name: "Bronze", max: 10 },
      { name: "Redwood", max: 30 },
      { name: "Redwood", max: 30 },
      { name: "Cotton", max: 10 },
    ],
  },
  {
    tier: 1,
    name: "Sentient Cotton",
    atk: 5,
    aspd: 1000,
    chp: 200,
    mhp: 200,
    xp: 60,
    loot: [
      { name: "Bronze", max: 10 },
      { name: "Redwood", max: 10 },
      { name: "Cotton", max: 30 },
      { name: "Cotton", max: 30 },
    ],
  },
  {
    tier: 2,
    name: "The Indomitable",
    atk: 10,
    aspd: 500,
    chp: 1000,
    mhp: 1000,
    xp: 300,
    loot: [
      { name: "Bronze", max: 100 },
      { name: "Redwood", max: 100 },
      { name: "Cotton", max: 100 },
    ],
  },
  {
    tier: 2,
    name: "Steel Golem",
    atk: 15,
    aspd: 1000,
    chp: 600,
    mhp: 600,
    xp: 120,
    loot: [
      { name: "Steel", max: 100 },
      { name: "Steel", max: 100 },
      { name: "Maple", max: 30 },
      { name: "Cashmere", max: 30 },
    ],
  },
  {
    tier: 2,
    name: "Maple Treant",
    atk: 15,
    aspd: 1000,
    chp: 600,
    mhp: 600,
    xp: 120,
    loot: [
      { name: "Steel", max: 30 },
      { name: "Maple", max: 100 },
      { name: "Maple", max: 100 },
      { name: "Cashmere", max: 30 },
    ],
  },
  {
    tier: 2,
    name: "Very Angry Goat",
    atk: 15,
    aspd: 1000,
    chp: 600,
    mhp: 600,
    xp: 120,
    loot: [
      { name: "Steel", max: 30 },
      { name: "Maple", max: 30 },
      { name: "Cashmere", max: 100 },
      { name: "Cashmere", max: 100 },
    ],
  },
  {
    tier: 3,
    name: "The Insurmountable",
    atk: 50,
    aspd: 500,
    chp: 3000,
    mhp: 3000,
    xp: 1200,
    loot: [
      { name: "Steel", max: 300 },
      { name: "Maple", max: 300 },
      { name: "Cashmere", max: 300 },
    ],
  },
  {
    tier: 3,
    name: "Titanium Golem",
    atk: 50,
    aspd: 1000,
    chp: 3000,
    mhp: 3000,
    xp: 600,
    loot: [
      { name: "Titanium", max: 300 },
      { name: "Titanium", max: 300 },
      { name: "Purpleheart", max: 100 },
      { name: "Silk", max: 100 },
    ],
  },
  {
    tier: 3,
    name: "Purpleheart Treant",
    atk: 50,
    aspd: 1000,
    chp: 3000,
    mhp: 3000,
    xp: 600,
    loot: [
      { name: "Titanium", max: 100 },
      { name: "Purpleheart", max: 300 },
      { name: "Purpleheart", max: 300 },
      { name: "Silk", max: 100 },
    ],
  },
  {
    tier: 3,
    name: "Egregiously Large Worm",
    atk: 50,
    aspd: 1000,
    chp: 3000,
    mhp: 3000,
    xp: 600,
    loot: [
      { name: "Titanium", max: 100 },
      { name: "Purpleheart", max: 100 },
      { name: "Silk", max: 300 },
      { name: "Silk", max: 300 },
    ],
  },
];

//list of classes and their stats?

class Game extends React.Component {
  //class Game globals
  constructor(props) {
    super(props);
    this.monsterDrop = this.monsterDrop.bind(this);
    this.buyUpgrade = this.buyUpgrade.bind(this);
    this.logLevel = this.logLevel.bind(this);
    this.state = {
      inventory: [
        { name: "Aluminium", amount: 0 },
        { name: "Balsa", amount: 0 },
        { name: "Jute", amount: 0 },
        { name: "Bronze", amount: 0 },
        { name: "Redwood", amount: 0 },
        { name: "Cotton", amount: 0 },
        { name: "Steel", amount: 0 },
        { name: "Maple", amount: 0 },
        { name: "Cashmere", amount: 0 },
        { name: "Titanium", amount: 0 },
        { name: "Purpleheart", amount: 0 },
        { name: "Silk", amount: 0 },
      ],
      tier: 0, //highest unlocked tier
      settingsMenu: { open: false, sound: true, music: true },
      inventoryMenu: false,
      heroes: [
        {id: 0, name: "Warrior", unlocked: true},
        {id: 1, name: "Hunter", unlocked: false},
        {id: 2, name: "Wizard", unlocked: false},
        {id: 3, name: "Vanguard", unlocked: false},
        {id: 4, name: "Farcaster", unlocked: false},
        {id: 5, name: "Battlemage", unlocked: false}
      ],
      log: [],
    };
  }

  componentDidMount() {
    //fetch game save from local storage
    let inventory = this.state.inventory;
    let tier = this.state.tier;
    for (let i = 0; i < inventory.length; i++) {
      inventory[i].amount = localStorage.getItem(inventory[i].name) ? parseInt(
        localStorage.getItem(inventory[i].name),
        10
      ) : 0;
    }
    tier = localStorage.getItem("tier")
      ? parseInt(localStorage.getItem("tier"), 10)
      : 0;
    this.setState({
      inventory: inventory,
      tier: tier,
    });
  }

  render() {
    //JSX element returned from inventoryMenu function stored as variable
    let inventoryMenu = null;
    if (this.state.inventoryMenu) {
      inventoryMenu = this.inventoryMenu();
    }
    let fightboxes = this.fightBoxes();
    let log = this.printLog();
    return (
      <div>
        <div className="container">
        {fightboxes}
          <div className="menubar">
          {log}
          {inventoryMenu}
            <div className="menubtns">
            {/* toggle settings - TODO */}
            <button className="settingsbtn">Settings</button>
            <button onClick={() => this.logLocalStorage()}>
              Console.Log Local Storage
            </button>
            <button onClick={() => localStorage.clear()}>
              Clear Local Storage
            </button>
            {/* toggle inventory */}
            <button
              className="inventorybtn"
              onClick={() =>
                this.setState({ inventoryMenu: !this.state.inventoryMenu })
              }
            >
              Inventory
            </button>
            </div>
          </div>
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
  }

  fightBoxes() {
    let fights = new Array(this.state.tier + 1);
    for (let i = 0; i < this.state.tier + 1; i++) {
      fights[i] = this.renderFight(i);
    }
    console.log(fights);
    return fights;
  }

  renderFight(i) {
    let hero = this.state.heroes[i];
    return (
      <Fight
      key={i}
      className="fight"
      heroId={hero.id}
      heroName={hero.name}
      heroUnlocked={hero.unlocked}
      monsterDrop={this.monsterDrop}
      inventory={this.state.inventory}
      buyUpgrade={this.buyUpgrade}
      logLevel={this.logLevel}
      tier={this.state.tier}
  /> 
    )
  }
  logLocalStorage() {
    //development button only - TODO remove for production
    console.log("local storage");
    for (let i = 0; i < localStorage.length; i++) {
      console.log(
        localStorage.key(i) +
          "=[" +
          localStorage.getItem(localStorage.key(i)) +
          "]"
      );
    }
  }
  printLog() {
    let log = Array(this.state.log.length);
    for (let i = 0; i < log.length; i++) {
      log[i] = this.renderLog(i);
    }
    return <ul className="log">{log}</ul>;
  }
  
  renderLog(i) {
    return <LogItem
              key={i}
              content={this.state.log[i]} />
  }
  //generate inventory items only if their amount > 0 and return JSX element
  inventoryMenu() {
    let inventoryList = Array(this.state.inventory.length);
    for (let i = 0; i < inventoryList.length; i++) {
      console.log(this.state.inventory[i]);
      inventoryList[i] = this.state.inventory[i].amount
        ? this.renderInventory(i)
        : null;
    }
    return <div className="inventorymenu">{inventoryList}</div>;
  }

  //dynamic class iteratively called inside inventoryMenu() for loop
  renderInventory(i) {
    return <Inventory key={i} contents={this.state.inventory[i]} />;
  }
  //calculate monster drop tables and update inventory totals. receives arg as array from Fight.fight()
  monsterDrop(loot, monster) {
    let inventory = this.state.inventory;
    let log = this.state.log;
    let dropid = Math.floor(Math.random() * loot.length);
    let drop = loot[dropid].name;
    let dropamount = Math.floor(Math.random() * loot[dropid].max) + 1;
    let stockpile = inventory.find(x => x.name === drop).amount;
    stockpile += dropamount;
    log.push(monster + " has carked it. Loot: " + dropamount + " " + drop)
    inventory.splice(inventory.findIndex(x => x.name === drop), 1, {name: drop, amount: stockpile});
    this.setState({
       inventory: inventory,
       log: log,
       });
  }
  logLevel(hero) {
    let log = this.state.log;
    log.push(hero.name + " is now level " + hero.level)
    this.setState({
      log: log,
    })
  }
  //receives name, cost args from Fight.upgradeItem()
  buyUpgrade(name, cost, equipment) {
    let inventory = this.state.inventory;
    let resource = inventory.findIndex((x) => x.name === name);
    inventory[resource].amount -= cost;
    let tier = this.state.tier;
    console.log("equipment:", equipment);
    //tier becomes equal to the lowest tier item in equipment array if lower than
    let equipment1 = equipment.sort();
    let log = this.state.log;
    if (tier < equipment1[0]) {
      tier++;
      log.push(this.state.heroes[tier].name + " has joined the party!")
    };
    this.setState({
      inventory: inventory,
      tier: tier,
      log: log,
    });
  }
}

//function class returns line items of Game.state.inventory pairs based on Game.inventoryMenu() for loop
function Inventory(props) {
  return <li>{props.contents.name + ": " + props.contents.amount}</li>;
}

class Fight extends React.Component {
  constructor(props) {
    super(props);
    let id = this.props.heroId;
    let name = this.props.heroName;
    let unlocked = this.props.heroUnlocked;
    this.state = {
      hero: {
        id: id,
        name: name,
        unlocked: unlocked,
        atk: 0,
        aspd: 1000,
        chp: 100,
        mhp: 100,
        cxp: 0,
        mxp: 100,
        level: 1,
        equipment: {
          weapon: 0,
          gloves: 0,
          helmet: 0,
          body: 0,
          legs: 0,
        },
      },
      monster: {
        id: null,
        name: "Select Enemy",
        atk: null,
        aspd: null,
        chp: 0,
        mhp: 0,
        loot: null,
      },
      monsterMenu: false,
      equipmentMenu: false,
      equipTT: false,
      equipTTTier: null,
      equipTTType: null,
      heroDead: false,
    };
  }

  componentDidMount() {
    this.getLocalStorage();
    this.calculateStats();
  }

  componentDidUpdate() {
    this.setLocalStorage();
  }

  // load game save from localstorage - TODO append unique iterator to permit saving of multiple Fight classes
  getLocalStorage() {
    let hero = this.state.hero;
    hero.chp = localStorage.getItem(hero.id + "chp") ? localStorage.getItem(hero.id + "chp") : 100;
    hero.cxp = localStorage.getItem(hero.id + "cxp")
      ? parseInt(localStorage.getItem(hero.id + "cxp"), 10)
      : 0;
    hero.mxp = localStorage.getItem(hero.id + "mxp")
      ? parseInt(localStorage.getItem(hero.id + "mxp"), 10)
      : 100;
    hero.level = localStorage.getItem(hero.id + "level")
      ? parseInt(localStorage.getItem(hero.id + "level"), 10)
      : 1;
    hero.equipment.weapon = localStorage.getItem(hero.id + "weapon")
      ? parseInt(localStorage.getItem(hero.id + "weapon"), 10)
      : 0;
    hero.equipment.helmet = localStorage.getItem(hero.id + "helmet")
      ? parseInt(localStorage.getItem(hero.id + "helmet"), 10)
      : 0;
    hero.equipment.legs = localStorage.getItem(hero.id + "legs")
      ? parseInt(localStorage.getItem(hero.id + "legs"), 10)
      : 0;
    hero.equipment.body = localStorage.getItem(hero.id + "body")
      ? parseInt(localStorage.getItem(hero.id + "body"), 10)
      : 0;
    hero.equipment.gloves = localStorage.getItem(hero.id + "gloves")
      ? parseInt(localStorage.getItem(hero.id + "gloves"), 10)
      : 0;
    this.setState({
      hero: hero,
    });
  }

  //save game to localstorage - TODO append unique iterator to permit saving of multiple Fight classes
  setLocalStorage() {
    let hero = this.state.hero;
    localStorage.setItem(hero.id + "chp", hero.chp.toString(10));
    localStorage.setItem(hero.id + "cxp", hero.cxp.toString(10));
    localStorage.setItem(hero.id + "mxp", hero.mxp.toString(10));
    localStorage.setItem(hero.id + "level", hero.level.toString(10));
    localStorage.setItem(hero.id + "weapon", hero.equipment.weapon);
    localStorage.setItem(hero.id + "helmet", hero.equipment.helmet);
    localStorage.setItem(hero.id + "body", hero.equipment.body);
    localStorage.setItem(hero.id + "legs", hero.equipment.legs);
    localStorage.setItem(hero.id + "gloves", hero.equipment.gloves);
  }

  calculateStats(f) {
    let hero = this.state.hero;
    let equipment = hero.equipment;
    hero.atk = hero.level * 2;
    hero.mhp = 100 + 20 * (hero.level - 1);
    hero.aspd = Math.floor(1500 * 0.98 ** (hero.level - 1));
    let equipentries = Object.entries(equipment);
    for (let i = 0; i < 5; i++) {
      hero.atk += items.find(
        (x) => x.type === equipentries[i][0] && x.tier === equipentries[i][1]
      ).atk;
      hero.mhp += items.find(
        (x) => x.type === equipentries[i][0] && x.tier === equipentries[i][1]
      ).mhp;
      hero.aspd *= items.find(
        (x) => x.type === equipentries[i][0] && x.tier === equipentries[i][1]
      ).aspd;
    }
    this.setState({ hero: hero }, () => (f ? this.fight() : null));
  }

  render() {
    const hero = this.state.hero;
    const monster = this.state.monster;
    const herohppc = Math.trunc((hero.chp / hero.mhp) * 100);
    const heroxppc = Math.trunc((hero.cxp / hero.mxp) * 100);
    const monsterhppc = Math.trunc((monster.chp / monster.mhp) * 100);
    let monsterMenu = null;
    // const tiersUnlocked = this.props.tiersUnlocked;
    if (this.state.monsterMenu) {
      monsterMenu = this.monsterMenu();
    }
    let equipmentMenu = null;
    if (this.state.equipmentMenu) {
      equipmentMenu = this.equipmentMenu();
    }
    let equipTT = null;
    if (this.state.equipTT) {
      equipTT = this.openequipTT();
    }
    let herodead = null;
    if (this.state.heroDead) {
      herodead = this.heroDead();
    }
    return (
      <div className="fight">
        <div className="heroname">{hero.name}</div>
        <div className="hpcontainer">
          <div className="herohpbar" style={{ width: herohppc + "%" }}></div>
          <div className="herohp">
            {"HP: " + hero.chp + " / " + hero.mhp}
          </div>
        </div>
        <div className="hpcontainer">
          <div className="heroxpbar" style={{ width: heroxppc + "%" }}></div>
          <div className="heroxp">
            {"Lvl " +
              hero.level +
              " - " +
              "XP: " +
              hero.cxp +
              " / " +
              hero.mxp}
          </div>
        </div>
        <button
          className="herobtn"
          onClick={() =>
            this.setState({ equipmentMenu: !this.state.equipmentMenu })
          }
        >
          Equipment
        </button>

        <div className="monstername">{monster.name}</div>
        <div className="hpcontainer">
          <div
            className="monsterhpbar"
            style={{ width: monsterhppc + "%" }}
          ></div>
          <div className="monsterhp">
            {"HP: " + monster.chp + " / " + monster.mhp}
          </div>
        </div>
        <div className="monsterxp"></div>
        <button
          className="monsterbtn"
          onClick={() =>
            this.setState({ monsterMenu: !this.state.monsterMenu })
          }
        >
          {monster.name}
        </button>
        {monsterMenu}
        {equipmentMenu}
        {equipTT}
        {herodead}
      </div>
    );
  }

  equipTT(itemtype, itemtier) {
    this.setState({
      equipTT: true,
      equipTTTier: itemtier,
      equipTTType: itemtype,
    });
  }

  openequipTT() {
    let itemtier = this.state.equipTTTier;
    let itemtype = this.state.equipTTType;
    console.log(itemtype, itemtier);
    return (
      <div className="equipTT">
        <EquipTT
          itemtier={itemtier}
          itemtype={itemtype}
          upgrade={() => this.upgradeItem(itemtier, itemtype)}
          close={() => this.closeMenu()}
        />
        ;
      </div>
    );
  }

  closeMenu() {
    this.setState({
      equipTT: false,
    });
  }

  upgradeItem(itemtier, itemtype) {
    let item = items.find((x) => x.tier === itemtier && x.type === itemtype);
    console.log(item)
    let stockpile = this.props.inventory.find((x) => x.name === item.upcost[0]).amount;
    if (stockpile >= item.upcost[1]) {
      let hero = this.state.hero;
      hero.equipment[itemtype]++;
      let equipment = Object.values(this.state.hero.equipment);
      this.setState(
        {
          hero: hero,
          equipTT: false,
        },
        () => {
          this.props.buyUpgrade(item.upcost[0], item.upcost[1], equipment);
          this.calculateStats();
        }
      );
    }
  }


  //Select Monster onclick
  monsterMenu() {
    let tier = this.props.tier;
    //check each monster for its tier
    let count = 0;
    for (let i = 0; i < monsters.length; i++) {
      if (monsters[i].tier <= tier) {
        count++;
      }
    }
    let xmonsters = Array(count);
    for (let i = 0; i < xmonsters.length; i++) {
      xmonsters[i] = this.renderMonster(i);
    }
    return (
      <div className="monstermenu">
        <ul className="monsterbtns">
          {xmonsters}
          <br />
          <br />
          <button onClick={() => this.setState({ monsterMenu: false })}>
            Close menu
          </button>
        </ul>
      </div>
    );
  }
  //called iteratively by for loop in monsterMenu
  renderMonster(i) {
    return (
      <Monsterbtn
        key={i}
        onClick={() => this.selectMonster(i)}
        value={monsters[i].name}
      />
    );
  }

  //Monsterbtn onclick
  selectMonster(i) {
    let monster = { ...monsters[i] };
    this.setState(
      {
        monster: monster,
        monsterMenu: false,
      },
      () => this.fight()
    );
  }
  monsterdeath(n) {
    let heroc = this.state.hero;
    heroc.cxp += n;
    let monsterc = this.state.monster;
    monsterc.chp = monsterc.mhp;
    //level up
    if (heroc.cxp >= heroc.mxp) {
      heroc.level++;
      heroc.cxp -= heroc.mxp;
      heroc.mxp = Math.floor(heroc.mxp + 20 * 1.2 ** (heroc.level - 1));
      setTimeout(() => {
        this.setState(
          {
            hero: heroc,
            monster: monsterc,
          },
          () => {this.levelup(); this.props.logLevel(heroc)}
        );
      }, 1000);
    } else {
      setTimeout(() => {
        this.setState(
          {
            monster: monsterc,
          },
          () => this.fight()
        );
      }, 1000);
    }
  }

  levelup() {
    this.calculateStats();
    this.fight();
  }

  fight() {
    const heroatk = setInterval(() => {
      let monsterc = { ...this.state.monster };
      monsterc.chp = monsterc.chp - this.state.hero.atk;
      if (this.state.monster.chp < 1) {
        clearInterval(heroatk);
        clearInterval(monsteratk);
        this.props.monsterDrop(this.state.monster.loot, this.state.monster.name);
        this.monsterdeath(this.state.monster.xp);
      } else {
        this.setState({
          monster: monsterc,
        });
      }
    }, this.state.hero.aspd);

    const monsteratk = setInterval(() => {
      let heroc = { ...this.state.hero };
      heroc.chp = heroc.chp - this.state.monster.atk;
      if (heroc.chp < 1) {
        clearInterval(heroatk);
        clearInterval(monsteratk);
        this.setState(
          {
            hero: heroc,
            heroDead: true,
            deathTimer: 10,
            monster: {
              id: null,
              name: "Select Enemy",
              atk: null,
              aspd: null,
              chp: 0,
              mhp: 0,
              loot: null,
            },
          },
          () => this.deathTimer()
        );
      } else {
        this.setState({
          hero: heroc,
        });
      }
    }, this.state.monster.aspd);
  }

  deathTimer() {
    const timer = setInterval(() => {
      if (this.state.deathTimer <= 0) {
        clearInterval(timer);
        let heroc = this.state.hero;
        heroc.chp = heroc.mhp;
        this.setState({ heroDead: false, hero: heroc });
      }
      this.setState({ deathTimer: this.state.deathTimer - 1 });
    }, 1000);
  }

  heroDead() {
    return <Herodead timer={this.state.deathTimer} />;
  }

  equipmentMenu() {
    let hero = this.state.hero;
    let equipbtns = Array(5);
    let equiplist = ["weapon", "gloves", "helmet", "body", "legs"]
    for (let i = 0; i < 5; i++) {
      equipbtns[i] = this.renderEquipment(equiplist[i]);
    }
    return (
      <div className="equipmentmenu">
        <ul className="equipbtns">
          {equipbtns}
          <button onClick={() => this.setState({ equipmentMenu: false })}>
            Close menu
          </button>
        </ul>
        <ol>
          <li>Current stats:</li>
          <li>{"Attack: " + hero.atk + " dmg"}</li>
          <li>{"HP Bonus: " + (hero.mhp - 100)}</li>
          <li>{"Att Speed: " + (hero.aspd / 1000).toFixed(2) + "s"}</li>
        </ol>
      </div>
    );
  }

  renderEquipment(i) {
    let equipment = this.state.hero.equipment;
    let itemtier = equipment[i];
    return (
      <Equipment
        key={i}
        itemtype={i}
        itemtier={itemtier}
        onClick={() => this.equipTT(i, itemtier)}
        close={() => this.closeETT()}
      />
    );
  }
}

function Equipment(props) {
  let itemname = items.find(
    (x) => x.type === props.itemtype && x.tier === props.itemtier
  ).name;
  return <button onClick={props.onClick}>{itemname}</button>;
}

function EquipTT(props) {
  console.log(props.itemtype, props.itemtier);
  let item = items.find(
    (x) => x.type === props.itemtype && x.tier === props.itemtier
  );
  let newitem = items.find((x) => x.tier === props.itemtier + 1 && x.type === props.itemtype);
  return (
    <ul className="equipttbtns">
      <div key="0">Current Item:</div>
      <li key="1">{item.name}</li>
      <li key="2">{"Attack bonus: " + item.atk}</li>
      <li key="3">{"HP bonus: " + item.mhp}</li>
      <li key="4">{"Attack speed boost: " + ((1 / item.aspd) * 100 - 100).toFixed(0) +
          "%"}</li>
      <br />
      <div key="5">Next Item:</div>
      <li key="6">{newitem.name}</li>
      <li key="7">{"Attack bonus: " + "+" + newitem.atk}</li>
      <li key="8">{"HP bonus: " + "+" + newitem.mhp}</li>
      <li key="9">
        {"Attack speed boost: " +
          "+" +
          ((1 / newitem.aspd) * 100 - 100).toFixed(0) +
          "%"}
      </li>

      <button key="10" onClick={props.upgrade}>
        {"Upgrade"}
        <br />
        {"Cost: " + item.upcost[1] + " " + item.upcost[0]}
      </button>
      <button key="11" onClick={props.close}>
        Close menu
      </button>
    </ul>
  )
}
//called by renderMonster
function Monsterbtn(props) {
  return <button onClick={props.onClick}>{props.value}</button>;
}

function Herodead(props) {
  return <div className="herodead">{"Recovering: " + props.timer + "s"}</div>;
}

function LogItem(props) {
  return <li className="logitem">{props.content}</li>
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
