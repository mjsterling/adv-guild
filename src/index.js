import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

//0 item id, 1 item name, 2 attack boost (additive), 3 dmgreduction boost (multiplicative), 4 aspd boost (multiplicative)
const items = [
  ["weapon0", "Fists", 1, 1, 1],
  ["gloves0", "No Gloves", 0, 1, 1],
  ["helmet0", "No Helmet", 0, 1, 1],
  ["body0", "No Armour", 0, 1, 1],
  ["legs0", "No Legs", 0, 1, 1],
  ["weapon1", "Aluminium Sword", 5, 1, 0.9][
    ("gloves1", "Foil Gloves", 2, 0.95, 0.95)
  ],
  ["helmet1", "Foil Helmet", 1, 0.95, 0.95],
  ["body1", "Foil Chestplate", 1, 0.95, 0.95],
  ["legs1", "Foil Platelegs", 1, 0.95, 0.95],
];
//0 set id, 1 attack boost (additive), 2 dmgreduction boost (multiplicative), 3 aspd boost (multiplicative)
const setbonuses = [["set1", "Full Aluminium", 10, 0.9, 0.9]];
//const arr
//list of items and their stat bonuses
//const arr
//list of monsters and their stats and loot tables
//const arr
//list of classes and their stats

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // hero name, current hp, max hp, weapon, gloves, helmet, body, legs, current enemy selection, monster current hp, monster max hp
      heroes: [
        [
          "Warrior",
          100,
          100,
          "weapon0",
          "gloves0",
          "helmet0",
          "body0",
          "legs0",
          "Aluminium Golem",
          30,
          30,
        ],
      ],
      //resource name, resource amount
      inventory: [
        ["Aluminium", 0],
        ["Balsa Wood", 0],
        ["Hessian Cloth", 0],
      ],
    };
  }

  render() {
    return (
      <div>
        <div className="container">
          <Fight classname="hero1" hero={this.state.heroes[0]} />
          {/* <Fight className={hero2} />
        <Fight className={hero3} />
        <Fight className={hero4} />
        <Fight className={hero5} /> */}
          <Menubar />
        </div>
      </div>
    );
  }
}

class Fight extends React.Component {
  render() {
    const hero = this.props.hero;
    const herohppc = Math.trunc((hero[1] / hero[2]) * 100);
    const monsterhppc = Math.trunc((hero[9] / hero[10]) * 100);
    return (
      <div>
        <div className="heroname">{hero[0]}</div>
        <div className="hpcontainer">
          <div className="herohpbar" width={herohppc + "%"}></div>
          <div className="herohp">{hero[1] + " / " + hero[2]}</div>
        </div>
        <button className="herobtn">{hero[0]}</button>

        <div className="monster">
          <div className="monstername">{hero[8]}</div>
          <div className="hpcontainer">
            <div className="monsterhpbar" width={monsterhppc + "%"}></div>
            <div className="monsterhp">{hero[9] + " / " + hero[10]}</div>
          </div>
          <button className="monsterbtn">{hero[8]}</button>
        </div>
      </div>
    );
  }
}

class Menubar extends React.Component {
  render() {
    return (
      <div>
        {/* <button className="settingsbtn" onClick={this.settings()}>Settings</button>
<button className="inventorybtn" onClick={this.inventory()}>Settings</button> */}
      </div>
    );
  }
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
ReactDOM.render(<Game />, document.getElementById("root"));
