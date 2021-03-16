//instead of using state, can use something else to remember what HP totals are and read them from there instead of the local state during render (custom hook?)

import React, { useState } from "react";
import ReactDOM from "react-dom";

const items = [
  //tier 0 - empty
  { id: "w0", name: "Fists", atk: 1, dr: 1, aspd: 1 },
  { id: "g0", name: "No Gloves", atk: 0, dr: 1, aspd: 1 },
  { id: "h0", name: "No Helmet", atk: 0, dr: 1, aspd: 1 },
  { id: "b0", name: "No Armour", atk: 0, dr: 1, aspd: 1 },
  { id: "l0", name: "No Legs", atk: 0, dr: 1, aspd: 1 },
  //tier 1 - aluminium
  { id: "w1", name: "Aluminium Sword", atk: 5, dr: 1, aspd: 0.9 },
  { id: "g1", name: "Foil Gloves", atk: 2, dr: 0.95, aspd: 0.95 },
  { id: "h1", name: "Foil Helmet", atk: 1, dr: 0.95, aspd: 0.95 },
  { id: "b1", name: "Foil Chestplate", atk: 1, dr: 0.95, aspd: 0.95 },
  { id: "l1", name: "Foil Platelegs", atk: 1, dr: 0.95, aspd: 0.95 },
];

const setbonuses = [
  { id: "t1", name: "Full Aluminium", atk: 10, dr: 0.9, aspd: 0.9 },
];

const monsters = [
  //tier 0
  [
    { id: "m0", name: "Aluminium Golem", atk: 3, aspd: 800, chp: 30, mhp: 30 },
    { id: "w0", name: "Balsa Treant", atk: 3, aspd: 2500, chp: 20, mhp: 20 },
  ],
];

//list of classes and their stats?

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: [
        { id: "m0", name: "Aluminium", amount: 0 },
        { id: "w0", name: "Balsa Wood", amount: 0 },
        { id: "f0", name: "Hessian Cloth", amount: 0 },
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
      //settings menu, inventory menu
      menus: {
        settings: { open: false, sound: true, music: true },
        inventory: { open: false },
      },
    };
  }

  render() {
    return (
      <div>
        <div className="container">
          <Fight className="hero0" tiersUnlocked={this.state.tiersUnlocked} />
          {/* <Fight className={hero2} />
          <Fight className={hero3} />
          <Fight className={hero4} />
          <Fight className={hero5} /> */}
          <div className="menubar">
            <button className="settingsbtn">Settings</button>
            <button className="inventorybtn">Inventory</button>
          </div>
        </div>
      </div>
    );
  }
}

class Fight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hero: {
        name: "Warrior",
        atk: 1,
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
        name: null,
        atk: null,
        aspd: null,
        chp: null,
        mhp: null,
      },
      monsterMenu: false,
      fighting: false,
      fightprimer: false,
    };
  }

  monsterMenu() {
    let monsters0 = new Array(monsters[0].length);
    for (let i = 0; i < monsters0.length; i++) {
      monsters0[i] = this.renderMonster(i);
      return (
        <div className="monstermenu">
          <ol>{monsters0}</ol>
        </div>
      );
    }
  }

  renderMonster(i) {
    return (
      <Monsterbtn
        key={i}
        onClick={() => this.selectMonster(i)}
        value={monsters[0][i].name}
      />
    );
  }

  selectMonster(i) {
    let monster = monsters[0][i];
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
      let monsterc = {...this.state.monster};
      monsterc.chp = monsterc.chp - this.state.hero.atk;
      if (this.state.monster.chp <= 0) {
      clearInterval(heroatk);
      clearInterval(monsteratk);
      console.log("monster is dead");
    }
    this.setState ({
      monster: monsterc,
    });
    }, this.state.hero.aspd);

    const monsteratk = setInterval(() => {
      let heroc = {...this.state.hero};
      heroc.chp = heroc.chp - this.state.monster.atk;
      if (this.state.hero.chp <= 0) {
        clearInterval(heroatk);
        clearInterval(monsteratk);
        console.log("hero is dead");
      }
      this.setState({
        hero: heroc,
      })
    }, this.state.monster.aspd);
  }

  render() {
    const hero = this.state.hero;
    const monster = this.state.monster;
    const herohppc = Math.trunc((hero.chp / hero.mhp) * 100);
    const monsterhppc = Math.trunc((monster.chp / monster.mhp) * 100);
    let monstername;
    let monsterbtn;
    if (monster.name) {
      monstername = monster.name;
      monsterbtn = monster.name;
    } else {
      monstername = String.fromCharCode(160);
      monsterbtn = "Select Enemy";
    }

    let monsterMenu = null;
    const tiersUnlocked = this.props.tiersUnlocked;
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

        <div className="monstername">{monstername}</div>
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
          {monsterbtn}
        </button>
        {monsterMenu}
      </div>
    );
  }
}

function Monsterbtn(props) {
  return <button onClick={props.onClick}>{props.value}</button>;
}

class Settings extends React.Component {
  render() {
    return (
      <div>
        {/* Settings menu
                - Sound
                - Music
                 */}
      </div>
    );
  }
}

class Inventory extends React.Component {
  render() {
    return (
      <div>
        {/* Inventory
              -list of obtained resources
              -amounts of each */}
      </div>
    );
  }
}

export default Game;
