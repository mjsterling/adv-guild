import React from "react";
import items from "./lists/items.js";
import monsters from "./lists/monsters.js";

const recoveringMsgs = [
  "Questioning life choices... ",
  "Making lasagna... ",
  "Learning the tuba... ",
  "Foraging for truffles... ",
  "Soul searching... ",
  "Composing a ballad... ",
  "Reattaching limbs... ",
  "Twiddling thumbs... ",
  "Performing open heart surgery... ",
  "Doing a step class... "
];

class Fight extends React.Component {
  constructor(props) {
    super(props);
    let id = this.props.heroId;
    this.state = {
      hero: {
        id: id,
        name: "\xa0",
        atk: 2,
        aspd: 2000,
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
          boots: 0,
        },
      },
      monster: {
        tier: null,
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
      deathMsg: "",
      heroatk: null,
      monsteratk: null,
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
    hero.name = localStorage.getItem(hero.id + "name")
      ? localStorage.getItem(hero.id + "name")
      : "\xa0";
    hero.chp = localStorage.getItem(hero.id + "chp")
      ? localStorage.getItem(hero.id + "chp")
      : 100;
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
    hero.equipment.boots = localStorage.getItem(hero.id + "boots")
      ? parseInt(localStorage.getItem(hero.id + "boots"), 10)
      : 0;
    this.setState({
      hero: hero,
    });
  }

  //save game to localstorage - TODO append unique iterator to permit saving of multiple Fight classes
  setLocalStorage() {
    let hero = this.state.hero;
    localStorage.setItem(hero.id + "name", hero.name);
    localStorage.setItem(hero.id + "chp", hero.chp.toString(10));
    localStorage.setItem(hero.id + "cxp", hero.cxp.toString(10));
    localStorage.setItem(hero.id + "mxp", hero.mxp.toString(10));
    localStorage.setItem(hero.id + "level", hero.level.toString(10));
    localStorage.setItem(hero.id + "weapon", hero.equipment.weapon);
    localStorage.setItem(hero.id + "helmet", hero.equipment.helmet);
    localStorage.setItem(hero.id + "body", hero.equipment.body);
    localStorage.setItem(hero.id + "legs", hero.equipment.legs);
    localStorage.setItem(hero.id + "gloves", hero.equipment.gloves);
    localStorage.setItem(hero.id + "boots", hero.equipment.boots);
  }

  calculateStats() {
    let hero = this.state.hero;
    if (hero.name !== "\xa0") {
      let equipment = hero.equipment;
      hero.atk = hero.level * 2;
      hero.mhp = 100 + 20 * (hero.level - 1);
      hero.aspd = Math.floor(2000 * 0.99 ** (hero.level - 1));
      let equipentries = Object.entries(equipment);
      for (let i = 0; i < 5; i++) {
        hero.atk += items.find(
          (x) =>
            x.type === equipentries[i][0] &&
            x.tier === equipentries[i][1] &&
            x.class === hero.name
        ).atk;
        hero.mhp += items.find(
          (x) =>
            x.type === equipentries[i][0] &&
            x.tier === equipentries[i][1] &&
            x.class === hero.name
        ).mhp;
        hero.aspd *= items.find(
          (x) =>
            x.type === equipentries[i][0] &&
            x.tier === equipentries[i][1] &&
            x.class === hero.name
        ).aspd;
      }
      this.setState({ hero: hero });
    }
  }

  render() {
    const hero = this.state.hero;
    const monster = this.state.monster;
    const herochp = hero.chp < 1 ? 0 : hero.chp;
    const monsterchp = monster.chp < 1 ? 0 : monster.chp;
    const herohppc = Math.trunc((herochp / hero.mhp) * 100);
    const heroxppc = Math.trunc((hero.cxp / hero.mxp) * 100);
    const monsterhppc = monster.mhp
      ? Math.trunc((monsterchp / monster.mhp) * 100)
      : 0;
    const monsterMenu = this.state.monsterMenu ? this.monsterMenu() : null;
    const equipmentMenu = this.state.equipmentMenu
      ? this.equipmentMenu()
      : null;
    const equipTT = this.state.equipTT ? this.openequipTT() : null;
    const herodead = this.state.heroDead ? this.heroDead() : null;
    const chooseClass = hero.name === "\xa0" ? this.chooseClass() : null;
    return (
      <div className={this.props.fightclass}>
        <div className="heroname">{hero.name}</div>
        <div className="hpcontainer">
          <div className="herohpbar" style={{ width: herohppc + "%" }}></div>
          <div className="herohp">{"HP: " + this.props.shortScale(herochp) + " / " + this.props.shortScale(hero.mhp)}</div>
        </div>
        <div className="hpcontainer">
          <div className="heroxpbar" style={{ width: heroxppc + "%" }}></div>
          <div className="heroxp">
            {"Lvl " + hero.level + " - " + "XP: " + this.props.shortScale(hero.cxp) + " / " + this.props.shortScale(hero.mxp)}
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
            {"HP: " + this.props.shortScale(monsterchp) + " / " + this.props.shortScale(monster.mhp)}
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
        {chooseClass}
        {monsterMenu}
        {equipmentMenu}
        {equipTT}
        {herodead}
      </div>
    );
  }

  chooseClass() {
    return (
      <div className="chooseclass">
        Choose a class:
        <div className="chooseclassbtns">
          <button onClick={() => this.setClass("Warrior")}>Warrior</button>
          <button onClick={() => this.setClass("Hunter")}>Hunter</button>
          <button onClick={() => this.setClass("Wizard")}>Wizard</button>
        </div>
      </div>
    );
  }

  setClass(name) {
    let hero = this.state.hero;
    hero.name = name;
    this.setState({
      hero: hero,
    });
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
    return (
      <div className="equipTT">
        <EquipTT
          itemtier={itemtier}
          itemtype={itemtype}
          upgrade={() => this.upgradeItem(itemtier, itemtype)}
          close={() =>
            this.setState({
              equipTT: false,
            })
          }
          name={this.state.hero.name}
          shortScale={this.props.shortScale}
        />
      </div>
    );
  }

  upgradeItem(itemtier, itemtype) {
    let item = items.find(
      (x) =>
        x.tier === itemtier &&
        x.type === itemtype &&
        x.class === this.state.hero.name
    );
    let stockpile = this.props.inventory.find((x) => x.name === item.upcost[0])
      .amount;
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
          () => {
            this.levelup();
            this.props.logLevel(heroc);
          }
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
    clearInterval(this.state.heroatk);
    clearInterval(this.state.monsteratk);
    const heroatk = setInterval(() => {
      let monsterc = this.state.monster;
      monsterc.chp = monsterc.chp - this.state.hero.atk;
      if (monsterc.chp < 1) {
        monsterc.chp = 0;
        clearInterval(this.state.heroatk);
        clearInterval(this.state.monsteratk);
        this.props.monsterDrop(
          this.state.monster
        );
        this.monsterdeath(this.state.monster.xp);
      } else {
        this.setState({
          monster: monsterc,
        });
      }
    }, this.state.hero.aspd);

    const monsteratk = setInterval(() => {
      let hero = this.state.hero;
      hero.chp = hero.chp - this.state.monster.atk;
      if (hero.chp < 1) {
        hero.chp = 0;
        clearInterval(this.state.heroatk);
        clearInterval(this.state.monsteratk);
        let deathMsg =
          recoveringMsgs[Math.floor(Math.random() * recoveringMsgs.length)];
        let monster = this.state.monster;
        this.setState(
          {
            hero: hero,
            monster: monster,
            heroDead: true,
            deathTimer: 10,
            deathMsg: deathMsg,
          },
          () => this.deathTimer()
        );
      } else {
        this.setState({
          hero: hero,
        });
      }
    }, this.state.monster.aspd);
    this.setState({
      heroatk: heroatk,
      monsteratk: monsteratk,
    });
  }

  deathTimer() {
    const timer = setInterval(() => {
      if (this.state.deathTimer <= 0) {
        clearInterval(timer);
        let heroc = this.state.hero;
        heroc.chp = heroc.mhp;
        this.setState({ heroDead: false, hero: heroc }, () => this.fight());
      }
      this.setState({ deathTimer: this.state.deathTimer - 1 });
    }, 1000);
  }

  heroDead() {
    return (
      <Herodead timer={this.state.deathTimer} deathMsg={this.state.deathMsg} />
    );
  }

  equipmentMenu() {
    let hero = this.state.hero;
    let equipbtns = Array(6);
    let equiplist = ["weapon", "gloves", "helmet", "body", "legs", "boots"];
    for (let i = 0; i < 6; i++) {
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
          <li>{"DPS: " + this.props.shortScale(Math.round(hero.atk / ( hero.aspd / 1000)))}</li>
          <li>{"Attack: " + this.props.shortScale(hero.atk) + " dmg"}</li>
          <li>{"Att Speed: " + (hero.aspd / 1000).toFixed(2) + "s"}</li>
          <li>{"HP Bonus: " + this.props.shortScale(hero.mhp - 100)}</li>
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
        name={this.state.hero.name}
      />
    );
  }
}

function Equipment(props) {
  let itemname = items.find(
    (x) =>
      x.type === props.itemtype &&
      x.tier === props.itemtier &&
      x.class === props.name
  ).name;
  return <button onClick={props.onClick}>{itemname}</button>;
}

function EquipTT(props) {
  let item = items.find(
    (x) =>
      x.type === props.itemtype &&
      x.tier === props.itemtier &&
      x.class === props.name
  );
  let newitem = items.find(
    (x) =>
      x.tier === props.itemtier + 1 &&
      x.type === props.itemtype &&
      x.class === props.name
  );
  return (
    <ul className="equipttbtns">
      <div key="0">Current Item:</div>
      <li key="1">{item.name}</li>
      <li key="2">{"Attack bonus: " + item.atk}</li>
      <li key="3">{"HP bonus: " + item.mhp}</li>
      <li key="4">
        {"Attack speed boost: " +
          ((1 / item.aspd) * 100 - 100).toFixed(0) +
          "%"}
      </li>
      <br />
      <div key="5">Next Item:</div>
      <li key="6">{newitem.name}</li>
      <li key="7">{"Attack bonus: " + newitem.atk}</li>
      <li key="8">{"HP bonus: " + newitem.mhp}</li>
      <li key="9">
        {"Attack speed boost: " +
          ((1 / newitem.aspd) * 100 - 100).toFixed(0) +
          "%"}
      </li>

      <button key="10" onClick={props.upgrade}>
        {"Upgrade"}
        <br />
        {"Cost: " + props.shortScale(item.upcost[1]) + " " + item.upcost[0]}
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
  return <div className="herodead">{props.deathMsg + props.timer + "s"}</div>;
}

export default Fight;
