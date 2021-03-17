//instead of using state, can use something else to remember what HP totals are and read them from there instead of the local state during render (custom hook?)

import React from "react";

const items = [
  //tier 0 - empty
  {
    tier: 0,
    type: "weapon",
    name: "Fists",
    atk: 1,
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
    atk: 5,
    mhp: 0,
    aspd: 0.9,
    upcost: ["Bronze", 100],
  },
  {
    id: "g1",
    name: "Foil Gloves",
    atk: 2,
    mhp: 25,
    aspd: 0.95,
    upcost: ["Bronze", 100],
  },
  {
    id: "h1",
    name: "Foil Helmet",
    atk: 1,
    mhp: 25,
    aspd: 0.95,
    upcost: ["Bronze", 100],
  },
  {
    id: "b1",
    name: "Foil Chestplate",
    atk: 1,
    mhp: 25,
    aspd: 0.95,
    upcost: ["Bronze", 100],
  },
  {
    id: "l1",
    name: "Foil Platelegs",
    atk: 1,
    mhp: 25,
    aspd: 0.95,
    upcost: ["Bronze", 100],
  },
  {
    id: "w2",
    name: "Bronze Sword",
    atk: 20,
    mhp: 25,
    aspd: 0.6,
    upcost: ["Steel", 1000],
  },
  {
    id: "g2",
    name: "Foil Gloves",
    atk: 10,
    mhp: 50,
    aspd: 0.9,
    upcost: ["Steel", 1000],
  },
  {
    id: "h2",
    name: "Foil Helmet",
    atk: 5,
    mhp: 75,
    aspd: 0.9,
    upcost: ["Steel", 1000],
  },
  {
    id: "b2",
    name: "Foil Chestplate",
    atk: 5,
    mhp: 75,
    aspd: 0.9,
    upcost: ["Steel", 1000],
  },
  {
    id: "l2",
    name: "Foil Platelegs",
    atk: 5,
    mhp: 75,
    aspd: 0.9,
    upcost: ["Steel", 1000],
  },
];

// const setbonuses = [
//   { id: "t1", name: "Full Aluminium", atk: 10, dr: 0.9, aspd: 0.9 },
// ];

const monsters = [
  {
    tier: 0,
    id: "m0",
    name: "Aluminium Golem",
    atk: 3,
    aspd: 2000,
    chp: 10,
    mhp: 10,
    xp: 20,
    loot: [
      { name: "Aluminium", max: 10 },
      { name: "Balsa Wood", max: 3 },
      { name: "Hessian Cloth", max: 3 },
    ],
  },
  {
    tier: 0,
    id: "w0",
    name: "Balsa Treant",
    atk: 3,
    aspd: 2000,
    chp: 10,
    mhp: 10,
    xp: 20,

    loot: [
      { name: "Aluminium", max: 3 },
      { name: "Balsa Wood", max: 10 },
      { name: "Hessian Cloth", max: 3 },
    ],
  },
  {
    tier: 0,
    id: "f0",
    name: "Sentient Jute",
    atk: 3,
    aspd: 2000,
    chp: 10,
    mhp: 10,
    xp: 20,

    loot: [
      { name: "Aluminium", max: 3 },
      { name: "Balsa Wood", max: 3 },
      { name: "Hessian Cloth", max: 10 },
    ],
  },
  {
    tier: 1,
    id: "m1",
    name: "Bronze Golem",
    atk: 10,
    aspd: 2000,
    chp: 50,
    mhp: 50,
    xp: 60,
    loot: [
      { name: "Bronze", max: 30 },
      { name: "Redwood", max: 10 },
      { name: "Cotton", max: 10 },
    ],
  },
  {
    tier: 1,
    id: "w1",
    name: "Redwood Treant",
    atk: 10,
    aspd: 2000,
    chp: 50,
    mhp: 50,
    xp: 60,
    loot: [
      { name: "Bronze", max: 10 },
      { name: "Redwood", max: 30 },
      { name: "Cotton", max: 10 },
    ],
  },
  {
    tier: 1,
    id: "c1",
    name: "Sentient Cotton",
    atk: 10,
    aspd: 2000,
    chp: 50,
    mhp: 50,
    xp: 60,
    loot: [
      { name: "Bronze", max: 10 },
      { name: "Redwood", max: 10 },
      { name: "Cotton", max: 30 },
    ],
  },
];

//list of classes and their stats?

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.monsterDrop = this.monsterDrop.bind(this);
    this.buyUpgrade = this.buyUpgrade.bind(this);
    this.state = {
      inventory: [
        { name: "Aluminium", amount: 0 },
        { name: "Balsa Wood", amount: 0 },
        { name: "Hessian Cloth", amount: 0 },
        { name: "Bronze", amount: 0 },
        { name: "Redwood", amount: 0 },
        { name: "Cotton", amount: 0 },
      ],
      // unlocked ?
      tier: 0,
      settingsmenu: { open: false, sound: true, music: true },
      inventorymenu: false,
    };
  }

  componentDidMount() {
    let inventory = this.state.inventory;
    let tier = this.state.tier;
    for (let i = 0; i < inventory.length; i++) {
      inventory[i].amount = parseInt(
        localStorage.getItem(inventory[i].name),
        10);
    }
    tier = localStorage.getItem("tier") ? parseInt(localStorage.getItem("tier"), 10) : 0;
    this.setState({
      inventory: inventory,
      tier: tier,
    });
  }

  componentDidUpdate() {
    localStorage.removeItem("tier");
    localStorage.setItem("tier", (this.state.tier).toString(10));
    let inventory = this.state.inventory;
    for (let i = 0; i < inventory.length; i++) {
      localStorage.removeItem(inventory[i].name);
      localStorage.setItem(inventory[i].name, (inventory[i].amount).toString(10));
    }
    // console.log(localStorage.getItem("Aluminium"));
  }

  logLocalStorage() {
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

  inventoryMenu() {
    let inventorylist = Array(this.state.inventory.length);
    for (let i = 0; i < inventorylist.length; i++) {
      inventorylist[i] = this.state.inventory[i].amount
        ? this.renderInventory(i)
        : null;
    }
    return <div className="inventorymenu">{inventorylist}</div>;
  }

  renderInventory(i) {
    return <Inventory key={i} contents={this.state.inventory[i]} />;
  }

  monsterDrop(loot) {
    let inventory = this.state.inventory;
    let drop = Math.floor(Math.random() * loot.length);
    let inventoryi = this.state.inventory[drop];
    inventoryi.amount =
      1 + inventoryi.amount + Math.floor(Math.random() * loot[drop].max);
    inventory.splice(drop, 1, inventoryi);
    this.setState({ inventory: inventory });
  }

  buyUpgrade(name, cost) {
    let inventory = this.state.inventory;
    let resource = inventory.findIndex((x) => x.name === name);
    inventory[resource].amount = inventory[resource].amount - cost;
    this.setState({
      inventory: inventory,
    });
  }

  render() {
    let inventorymenu = null;
    if (this.state.inventorymenu) {
      inventorymenu = this.inventoryMenu();
    }
    return (
      <div>
        <div className="container">
          <Fight
            className="hero0"
            tiersUnlocked={this.state.tiersUnlocked}
            monsterDrop={this.monsterDrop}
            inventory={this.state.inventory}
            buyUpgrade={this.buyUpgrade}
            tier={this.state.tier}
          />
          {/* <Fight
            className="hero0"
            tiersUnlocked={this.state.tiersUnlocked}
            monsterDrop={this.monsterDrop}
            inventory={this.state.inventory}
            buyUpgrade={this.buyUpgrade}
          /> */}
          <div className="menubar">
            <button className="settingsbtn">Settings</button>
            <button onClick={() => this.logLocalStorage()}>
              Console.Log Local Storage
            </button>
            <button onClick={() => localStorage.clear()}>
              Clear Local Storage
            </button>
            <button
              className="inventorybtn"
              onClick={() =>
                this.setState({ inventorymenu: !this.state.inventorymenu })
              }
            >
              Inventory
            </button>
          </div>
          {inventorymenu}
        </div>
      </div>
    );
  }
}

function Inventory(props) {
  return <li>{props.contents.name + ": " + props.contents.amount}</li>;
}

class Fight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hero: {
        name: "Warrior",
        atk: 0,
        aspd: 1000,
        chp: 100,
        mhp: 100,
        cxp: 0,
        mxp: 100,
        level: 1,
        equipment: ["w0", "g0", "h0", "b0", "l0"],
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
      equiptooltip: false,
      equiptooltipid: null,
      herodead: false,
    };
  }

  componentDidMount() {
    this.getLocalStorage();
    this.calculateStats();
  }

  componentDidUpdate() {
    this.setLocalStorage();
  }

  getLocalStorage() {
    let hero = this.state.hero;
    hero.name = null;
    hero.name = localStorage.getItem("name")
      ? localStorage.getItem("name")
      : "Warrior";
    hero.cxp = localStorage.getItem("cxp")
      ? parseInt(localStorage.getItem("cxp"), 10)
      : 0;
    hero.mxp = localStorage.getItem("mxp")
      ? parseInt(localStorage.getItem("mxp"), 10)
      : 100;
    hero.level = localStorage.getItem("level")
      ? parseInt(localStorage.getItem("level"), 10)
      : 1;
    for (let i = 0; i < 5; i++) {
      hero.equipment[i] = localStorage.getItem("equipment" + i)
        ? localStorage.getItem("equipment" + i)
        : items[i].id;
    }
    this.setState({
      hero: hero,
    });
  }

  setLocalStorage() {
    let hero = this.state.hero;
    localStorage.removeItem("name");
    localStorage.setItem("name", hero.name);
    localStorage.removeItem("cxp");
    localStorage.setItem("cxp", (hero.cxp).toString(10));
    localStorage.removeItem("mxp");
    localStorage.setItem("mxp", (hero.mxp).toString(10));
    localStorage.removeItem("level");
    localStorage.setItem("level", (hero.level).toString(10));
    for (let i = 0; i < 5; i++) {
    localStorage.removeItem("equip" + i);
    localStorage.setItem("equip" + i, hero.equipment[i]);
  }
  }

  calculateStats(f) {
    let hero = this.state.hero;
    let equipment = hero.equipment;
    hero.atk = 0 + hero.level ** 2;
    hero.mhp = 100 + 10 * (hero.level ** 2 - hero.level);
    hero.aspd = Math.floor(2000 * (0.95 ** hero.level - 1));
    console.log(hero.aspd);
    for (let i = 0; i < 5; i++) {
      hero.atk += items.find((x) => x.id === equipment[i]).atk;
    }
    for (let i = 0; i < 5; i++) {
      hero.mhp += items.find((x) => x.id === equipment[i]).mhp;
    }
    for (let i = 0; i < 5; i++) {
      hero.aspd *= items.find((x) => x.id === equipment[i]).aspd;
    }
    console.log(hero.aspd);
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
    let equiptooltip = null;
    if (this.state.equiptooltip) {
      equiptooltip = this.openequipTooltip();
    }
    let herodead = null;
    if (this.state.herodead) {
      herodead = this.heroDead();
    }
    return (
      <div className="fight">
        <div className="heroname">{hero.name}</div>
        <div className="hpcontainer">
          <div className="herohpbar" style={{ width: herohppc + "%" }}></div>
          <div className="herohp">
            {"HP: " + hero.chp.toFixed(1) + " / " + hero.mhp}
          </div>
        </div>
        <div className="hpcontainer">
          <div className="heroxpbar" style={{ width: heroxppc + "%" }}></div>
          <div className="heroxp">
            {"Level: " +
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
            {"HP: " + monster.chp.toFixed(1) + " / " + monster.mhp}
          </div>
        </div>
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
        {equiptooltip}
        {herodead}
      </div>
    );
  }

  equipTooltip(id) {
    this.setState({
      equiptooltip: true,
      equiptooltipid: id,
    });
  }

  openequipTooltip() {
    let item = this.state.equiptooltipid;
    return (
      <div className="equiptooltip">
        <Equiptooltip
          item={item}
          upgrade={() => this.upgradeItem(item)}
          close={() => this.closeMenu()}
        />
        ;
      </div>
    );
  }

  closeMenu() {
    this.setState({
      equiptooltip: false,
    });
  }

  upgradeItem(id) {
    let item = items.find((x) => x.id === id);
    let stockpile = this.props.inventory.find((x) => x.name === item.upcost[0])
      .amount;
    if (stockpile >= item.upcost[1]) {
      let hero = this.state.hero;
      let equipid = hero.equipment.findIndex((x) => x === id);
      let arrid = item.id.split("");
      arrid[1] = parseInt(arrid[1], 10);
      arrid[1]++;
      let newitemid = arrid.join("");
      hero.equipment[equipid] = newitemid;
      console.log(hero);
      this.setState(
        {
          hero: hero,
          equiptooltip: false,
          equipmentMenu: false,
        },
        () => this.updateStats(item.upcost[0], item.upcost[1])
      );
    }
  }

  updateStats(name, cost) {
    this.calculateStats();
    this.props.buyUpgrade(name, cost);
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
          () => this.levelup()
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
        console.log(monsterc.name, "has shuffled off this mortal coil.");
        this.props.monsterDrop(this.state.monster.loot);
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
            herodead: true,
            deathtimer: 10,
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
      if (this.state.deathtimer <= 0) {
        clearInterval(timer);
        let heroc = this.state.hero;
        heroc.chp = heroc.mhp;
        this.setState({ herodead: false, hero: heroc });
      }
      this.setState({ deathtimer: this.state.deathtimer - 1 });
    }, 1000);
  }

  heroDead() {
    return <Herodead timer={this.state.deathtimer} />;
  }

  equipmentMenu() {
    let hero = this.state.hero;
    let equipbtns = Array(5);
    for (let i = 0; i < 5; i++) {
      equipbtns[i] = this.renderEquipment(i);
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
          <li>{"Attack: " + hero.atk.toFixed(1) + " dmg"}</li>
          <li>{"HP Bonus: " + (hero.mhp - 100)}</li>
          <li>{"Att Speed: " + (hero.aspd / 1000).toFixed(2) + "s"}</li>
        </ol>
      </div>
    );
  }

  renderEquipment(i) {
    let item = this.state.hero.equipment[i];
    return (
      <Equipment
        key={i}
        item={item}
        onClick={() => this.equipTooltip(item)}
        close={() => this.closeETT()}
      />
    );
  }
}

function Equipment(props) {
  let itemname = items.find((x) => x.id === props.item).name;
  return <button onClick={props.onClick}>{itemname}</button>;
}

function Equiptooltip(props) {
  let item = items.find((x) => x.id === props.item);
  let arrid = item.id.split("");
  arrid[1] = parseInt(arrid[1], 10);
  arrid[1]++;
  let newitemid = arrid.join("");
  let newitem = items.find((x) => x.id === newitemid);
  return (
    <ul className="equipttbtns">
      <div key="0">Current Item:</div>
      <li key="1">{item.name}</li>
      <li key="2">{"Attack bonus: " + item.atk}</li>
      <li key="3">{"HP bonus: " + item.mhp}</li>
      <li key="4">{"Attack speed boost: " + (item.aspd - 1)}</li>
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
  );
}
//called by renderMonster
function Monsterbtn(props) {
  return <button onClick={props.onClick}>{props.value}</button>;
}

function Herodead(props) {
  return <div className="herodead">{"Recovering: " + props.timer + "s"}</div>;
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
