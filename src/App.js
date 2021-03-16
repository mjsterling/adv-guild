//instead of using state, can use something else to remember what HP totals are and read them from there instead of the local state during render (custom hook?)

import React from "react";

// const items = [
//   //tier 0 - empty
//   { id: "w0", name: "Fists", atk: 1, dr: 1, aspd: 1 },
//   { id: "g0", name: "No Gloves", atk: 0, dr: 1, aspd: 1 },
//   { id: "h0", name: "No Helmet", atk: 0, dr: 1, aspd: 1 },
//   { id: "b0", name: "No Armour", atk: 0, dr: 1, aspd: 1 },
//   { id: "l0", name: "No Legs", atk: 0, dr: 1, aspd: 1 },
//   //tier 1 - aluminium
//   { id: "w1", name: "Aluminium Sword", atk: 5, dr: 1, aspd: 0.9 },
//   { id: "g1", name: "Foil Gloves", atk: 2, dr: 0.95, aspd: 0.95 },
//   { id: "h1", name: "Foil Helmet", atk: 1, dr: 0.95, aspd: 0.95 },
//   { id: "b1", name: "Foil Chestplate", atk: 1, dr: 0.95, aspd: 0.95 },
//   { id: "l1", name: "Foil Platelegs", atk: 1, dr: 0.95, aspd: 0.95 },
// ];

// const setbonuses = [
//   { id: "t1", name: "Full Aluminium", atk: 10, dr: 0.9, aspd: 0.9 },
// ];

const monsters = [
  { id: "m0", name: "Aluminium Golem", atk: 3, aspd: 800, chp: 10, mhp: 10, loot: [
    { name: "Aluminium", max: 10},
    { name: "Balsa Wood", max: 3},
    { name: "Hessian Cloth", max: 3}
  ] },
  { id: "w0", name: "Balsa Treant", atk: 3, aspd: 2500, chp: 20, mhp: 20, loot: [
    { name: "Aluminium", max: 3},
    { name: "Balsa Wood", max: 10},
    { name: "Hessian Cloth", max: 3}
  ] },
  { id: "f0", name: "Sentient Jute", atk: 3, aspd: 2500, chp: 20, mhp: 20, loot: [
    { name: "Aluminium", max: 3},
    { name: "Balsa Wood", max: 3},
    { name: "Hessian Cloth", max: 10}
  ] },
];

//list of classes and their stats?

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.monsterDrop = this.monsterDrop.bind(this);
    this.state = {
      inventory: [ 
        { name: "Aluminium", amount: 0 },
        { name: "Balsa Wood", amount: 0 },
        { name: "Hessian Cloth", amount: 0 },
      ],
      // unlocked ?
      isTierUnlocked: {
        t0: true,
        t1: false,
        t2: false,
        t3: false,
        t4: false,
        t5: false,
      },
      settingsmenu: { open: false, sound: true, music: true },
      inventorymenu: false,
    };
  }

  inventoryMenu() {
    let inventorylist = Array(this.state.inventory.length);
    for (let i = 0; i < inventorylist.length; i++) {
      inventorylist[i] = this.renderInventory(i);
    }
    return <div className="inventorymenu">{inventorylist}</div>;
  }

  renderInventory(i) {
    return <Inventory key={i} contents={this.state.inventory[i]} />;
  }

  monsterDrop(loot) {
    let inventory = this.state.inventory;
    let drop = Math.floor(Math.random() * loot.length);
    console.log(drop);
    let inventoryi = this.state.inventory[drop];
    inventoryi.amount = 1 + inventoryi.amount + Math.floor(Math.random() * loot[drop].max);
    inventory.splice(drop, 1, inventoryi);
    console.log(inventory);
    this.setState({ inventory: inventory });
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
          />
          {/* <Fight className={hero2} />
          <Fight className={hero3} />
          <Fight className={hero4} />
          <Fight className={hero5} /> */}
          <div className="menubar">
            <button className="settingsbtn">Settings</button>
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
        atk: 4,
        aspd: 1000,
        chp: 100,
        mhp: 100,
        weapon: "w0",
        gloves: "g0",
        helmet: "h0",
        body: "b0",
        legs: "l0",
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
    };
  }
  //Select Monster onclick
  monsterMenu() {
    let xmonsters = Array(monsters.length);
    for (let i = 0; i < xmonsters.length; i++) {
      xmonsters[i] = this.renderMonster(i);
    }
    return (
      <div className="monstermenu">
        <ol>{xmonsters}</ol>
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

  fight() {
    const heroatk = setInterval(() => {
      let monsterc = { ...this.state.monster };
      monsterc.chp = monsterc.chp - this.state.hero.atk;
      if (this.state.monster.chp < 1) {
        clearInterval(heroatk);
        clearInterval(monsteratk);
        console.log("monster is dead");
        this.props.monsterDrop(this.state.monster.loot);
      }
      this.setState({
        monster: monsterc,
      });
    }, this.state.hero.aspd);

    const monsteratk = setInterval(() => {
      let heroc = { ...this.state.hero };
      heroc.chp = heroc.chp - this.state.monster.atk;
      if (this.state.hero.chp < 1) {
        clearInterval(heroatk);
        clearInterval(monsteratk);
        console.log("hero is dead");
      }
      this.setState({
        hero: heroc,
      });
    }, this.state.monster.aspd);
  }

  render() {
    const hero = this.state.hero;
    const monster = this.state.monster;
    const herohppc = Math.trunc((hero.chp / hero.mhp) * 100);
    const monsterhppc = Math.trunc((monster.chp / monster.mhp) * 100);
    let monsterMenu = null;
    // const tiersUnlocked = this.props.tiersUnlocked;
    if (this.state.monsterMenu) {
      monsterMenu = this.monsterMenu();
    }
    return (
      <div className="fight">
        <div className="heroname">{hero.name}</div>
        <div className="hpcontainer">
          <div className="herohpbar" style={{ width: herohppc + "%" }}></div>
        </div>
        <div className="herohp">{hero.chp + " / " + hero.mhp}</div>
        <button className="herobtn">Equipment</button>

        <div className="monstername">{monster.name}</div>
        <div className="hpcontainer">
          <div
            className="monsterhpbar"
            style={{ width: monsterhppc + "%" }}
          ></div>
        </div>
        <div className="monsterhp">{monster.chp + " / " + monster.mhp}</div>
        <button
          className="monsterbtn"
          onClick={() => this.setState({ monsterMenu: true })}
        >
          {monster.name}
        </button>
        {monsterMenu}
      </div>
    );
  }
}

//called by renderMonster
function Monsterbtn(props) {
  return <button onClick={props.onClick}>{props.value}</button>;
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
