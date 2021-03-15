//instead of using state, can use something else to remember what HP totals are and read them from there instead of the local state during render (custom hook?)

import React, { useState } from "react";
import ReactDOM from "react-dom";

//0 item name, 1 attack boost (additive), 2 dmgreduction boost (multiplicative), 3 aspd boost (multiplicative)
const weapon0 = ["Fists", 1, 1, 1];
const gloves0 = ["No Gloves", 0, 1, 1];
const helmet0 = ["No Helmet", 0, 1, 1];
const body0 = ["No Armour", 0, 1, 1];
const legs0 = ["No Legs", 0, 1, 1];
const weapon1 = ["Aluminium Sword", 5, 1, 0.9];
const gloves1 = ["Foil Gloves", 2, 0.95, 0.95];
const helmet1 = ["Foil Helmet", 1, 0.95, 0.95];
const body1 = ["Foil Chestplate", 1, 0.95, 0.95];
const legs1 = ["Foil Platelegs", 1, 0.95, 0.95];
//0 set id, 1 attack boost (additive), 2 dmgreduction boost (multiplicative), 3 aspd boost (multiplicative)
const set1 = ["Full Aluminium", 10, 0.9, 0.9];
//const arr
//list of items and their stat bonuses
//const arr
//monster name, max hp, attack, aspd
const tier0monsters = [["Aluminium Golem", 3, 3000, 30, 30]];
//list of classes and their stats

class Game extends React.Component {
  constructor(props) {
    super(props);
    //base hero state
    this.state = {
      //resource name, resource amount
      inventory: [
        ["Aluminium", 0],
        ["Balsa Wood", 0],
        ["Hessian Cloth", 0],
      ],
      // unlocked ?
      tiersUnlocked: [true, false, false, false, false, false],
      //settings menu, inventory menu
      menusOpen: [false, false],
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

function useFightingState() {
      const [fighting, setFighting] = useState(false);
}

class Fight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hero: [
        /*0 name*/ "Warrior",
        /*1 att*/ 1,
        /*2 aspd*/ 3000,
        /*3 crnt hp*/ 100,
        /*4 max hp*/ 100,
        /*5 weapon*/ weapon0,
        /*6 gloves*/ gloves0,
        /*7 helmet*/ helmet0,
        /*8 body*/ body0,
        /*9 legs*/ legs0,
      ],
      monster: [
        /*0 m name*/ null,
        /*1 m att*/ null,
        /*2 m aspd*/ null,
        /*3 m crnt hp*/ null,
        /*4 m max hp*/ null,
      ],
      monsterMenu: false,
      fighting: false,
    };
  }



  monsterMenu() {
    let monsters0 = new Array(tier0monsters.length);
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
        value={tier0monsters[i][0]}
      />
    );
  }

  selectMonster(i) {
    let monster = tier0monsters[i].slice();
    this.fight();
    this.setState({
      monster: monster,
      monsterMenu: false,
    });
  }

  fight() {
    let hero = this.state.hero.slice();
    let monster = this.state.monster.slice();
    if (!this.state.fighting) {
        console.log(hero, monster);
        let herohp = hero[3];
        let monsterhp = monster[3];

        const heroatk = setInterval(() => {
        monsterhp = monsterhp - hero[1];
        }, hero[2]);

        const monsteratk = setInterval(() => {
        herohp = herohp - monster[1];
        }, monster[2]);

        const updatefunc = setInterval(() => {
        hero[3] = herohp;
        monster[3] = monsterhp;
        if (herohp <= 0 || monsterhp <= 0) {
            clearInterval(heroatk);
            clearInterval(monsteratk);
            clearInterval(updatefunc);
            monster = [null, null, null, null, null];
            this.setState({
            hero: hero,
            monster: monster,
            fighting: false,
            });
        } else {
            this.setState({
            hero: hero,
            monster: monster,
            fighting: true,
            });
        }
        }, 1000);
  }
}

  render() {
    const hero = this.state.hero;
    const monster = this.state.monster;
    const herohppc = Math.trunc((hero[3] / hero[4]) * 100);
    const monsterhppc = Math.trunc((monster[3] / monster[4]) * 100);
    let monstername;
    let monsterbtn;
    if (monster[0]) {
      monstername = monster[0];
      monsterbtn = monster[0];
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
        <div className="heroname">{hero[0]}</div>
        <div className="hpcontainer">
          <div className="herohpbar" style={{ width: herohppc + "%" }}></div>
        </div>
        <div className="herohp">{hero[3] + " / " + hero[4]}</div>
        <button className="herobtn">Equipment</button>

        <div className="monstername">{monstername}</div>
        <div className="hpcontainer">
          <div
            className="monsterhpbar"
            style={{ width: monsterhppc + "%" }}
          ></div>
        </div>
        <div className="monsterhp">{monster[3] + " / " + monster[4]}</div>
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
