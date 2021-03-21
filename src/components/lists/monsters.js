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
      { name: "Leather", max: 3 },
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
      { name: "Leather", max: 3 },
      { name: "Jute", max: 3 },
    ],
  },
  {
    tier: 0,
    name: "Homicidal Cow",
    atk: 1,
    aspd: 1000,
    chp: 20,
    mhp: 20,
    xp: 20,

    loot: [
      { name: "Aluminium", max: 3 },
      { name: "Balsa", max: 3 },
      { name: "Leather", max: 10 },
      { name: "Leather", max: 10 },
      { name: "Jute", max: 3 },
    ],
  },
  {
    tier: 0,
    name: "Annoyed Jute",
    atk: 1,
    aspd: 1000,
    chp: 20,
    mhp: 20,
    xp: 20,

    loot: [
      { name: "Aluminium", max: 3 },
      { name: "Balsa", max: 3 },
      { name: "Leather", max: 3 },
      { name: "Jute", max: 10 },
      { name: "Jute", max: 10 },
    ],
  },
  {
    tier: 0,
    name: "The Inamicable",
    atk: 5,
    aspd: 750,
    chp: 400,
    mhp: 400,
    xp: 120,
    loot: [
      { name: "Aluminium", max: 30 },
      { name: "Balsa", max: 30 },
      { name: "Leather", max: 30 },
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
      { name: "Snakehide", max: 10 },
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
      { name: "Snakehide", max: 10 },
      { name: "Cotton", max: 10 },
    ],
  },
  {
    tier: 1,
    name: "Gargantuan Snake",
    atk: 5,
    aspd: 1000,
    chp: 200,
    mhp: 200,
    xp: 60,
    loot: [
      { name: "Bronze", max: 10 },
      { name: "Redwood", max: 10 },
      { name: "Snakehide", max: 30 },
      { name: "Snakehide", max: 30 },
      { name: "Cotton", max: 10 },
    ],
  },
  {
    tier: 1,
    name: "Enraged Cotton",
    atk: 5,
    aspd: 1000,
    chp: 200,
    mhp: 200,
    xp: 60,
    loot: [
      { name: "Bronze", max: 10 },
      { name: "Redwood", max: 10 },
      { name: "Snakehide", max: 10 },
      { name: "Cotton", max: 30 },
      { name: "Cotton", max: 30 },
    ],
  },
  {
    tier: 1,
    name: "The Indomitable",
    atk: 10,
    aspd: 500,
    chp: 1000,
    mhp: 1000,
    xp: 300,
    loot: [
      { name: "Bronze", max: 100 },
      { name: "Redwood", max: 100 },
      { name: "Snakehide", max: 100 },
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
      { name: "Croc Skin", max: 30 },
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
      { name: "Croc Skin", max: 30 },
      { name: "Cashmere", max: 30 },
    ],
  },
  {
    tier: 2,
    name: "A Pair of Crocs",
    atk: 15,
    aspd: 1000,
    chp: 600,
    mhp: 600,
    xp: 120,
    loot: [
      { name: "Steel", max: 30 },
      { name: "Maple", max: 30 },
      { name: "Croc Skin", max: 100 },
      { name: "Croc Skin", max: 100 },
      { name: "Cashmere", max: 30 },
    ],
  },
  {
    tier: 2,
    name: "Furious Goat",
    atk: 15,
    aspd: 1000,
    chp: 600,
    mhp: 600,
    xp: 120,
    loot: [
      { name: "Steel", max: 30 },
      { name: "Maple", max: 30 },
      { name: "Croc Skin", max: 30 },
      { name: "Cashmere", max: 100 },
      { name: "Cashmere", max: 100 },
    ],
  },
  {
    tier: 2,
    name: "The Insurmountable",
    atk: 50,
    aspd: 500,
    chp: 3000,
    mhp: 3000,
    xp: 1200,
    loot: [
      { name: "Steel", max: 300 },
      { name: "Maple", max: 300 },
      { name: "Croc Skin", max: 300 },
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
      { name: "Drakeskin", max: 100},
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
      { name: "Drakeskin", max: 100},
      { name: "Silk", max: 100 },
    ],
  },
  {
    tier: 3,
    name: "Cacophonous Drake",
    atk: 50,
    aspd: 1000,
    chp: 3000,
    mhp: 3000,
    xp: 600,
    loot: [
      { name: "Titanium", max: 100 },
      { name: "Purpleheart", max: 100 },
      { name: "Drakeskin", max: 300},
      { name: "Drakeskin", max: 300},
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
      { name: "Drakeskin", max: 100},
      { name: "Silk", max: 300 },
      { name: "Silk", max: 300 },
    ],
  },
  {
    tier: 3,
    name: "The Inconceivable",
    atk: 200,
    aspd: 500,
    chp: 10000,
    mhp: 10000,
    xp: 6000,
    loot: [
      { name: "Titanium", max: 1000 },
      { name: "Purpleheart", max: 1000 },
      { name: "Dragonhide", max: 1000 },
      { name: "Silk", max: 1000 },
    ],
  },
  {
    tier: 4,
    name: "Tungsten Golem",
    atk: 100,
    aspd: 1000,
    chp: 10000,
    mhp: 10000,
    xp: 3000,
    loot: [
      { name: "Tungsten", max: 1500 },
      { name: "Tungsten", max: 1500 },
      { name: "Snakewood", max: 500 },
      { name: "Dragonhide", max: 500},
      { name: "Vicu\xF1a", max: 500 },
    ],
  },
  {
    tier: 4,
    name: "Snakewood Treant",
    atk: 100,
    aspd: 1000,
    chp: 10000,
    mhp: 10000,
    xp: 3000,
    loot: [
      { name: "Tungsten", max: 500 },
      { name: "Purpleheart", max: 1500 },
      { name: "Purpleheart", max: 1500 },
      { name: "Dragonhide", max: 500},
      { name: "Vicu\xF1a", max: 500 },
    ],
  },
  {
    tier: 4,
    name: "Roaring Dragon",
    atk: 100,
    aspd: 1000,
    chp: 10000,
    mhp: 10000,
    xp: 3000,
    loot: [
      { name: "Tungsten", max: 500 },
      { name: "Purpleheart", max: 500 },
      { name: "Dragonhide", max: 1500},
      { name: "Dragonhide", max: 1500},
      { name: "Vicu\xF1a", max: 500 },
    ],
  },
  {
    tier: 4,
    name: "Apoplectic Alpaca",
    atk: 100,
    aspd: 1000,
    chp: 10000,
    mhp: 10000,
    xp: 3000,
    loot: [
      { name: "Tungsten", max: 500 },
      { name: "Purpleheart", max: 500 },
      { name: "Dragonhide", max: 500},
      { name: "Vicu\xF1a", max: 1500 },
      { name: "Vicu\xF1a", max: 1500 },
    ],
  },
  {
    tier: 4,
    name: "The Invulnerable",
    atk: 500,
    aspd: 1000,
    chp: 30000,
    mhp: 30000,
    xp: 30000,
    loot: [
      { name: "Tungsten", max: 5000 },
      { name: "Purpleheart", max: 5000 },
      { name: "Dragonhide", max: 5000},
      { name: "Vicu\xF1a", max: 5000 },
    ],
  },
  {
    tier: 5,
    name: "Diamond Titan",
    atk: 1000,
    aspd: 1000,
    chp: 100000,
    mhp: 100000,
    xp: 100000,
    loot: [
      { name: "Diamond Weapon", max: 1 },
      { name: "Diamond Gloves", max: 1 },
      { name: "Diamond Helmet", max: 1 },
      { name: "Diamond Chestpiece", max: 1 },
      { name: "Diamond Legpiece", max: 1 },
      { name: "Diamond Boots", max: 1 },
    ],
  },
  {
    tier: 6,
    name: "Prismatic Titan",
    atk: 10000,
    aspd: 1000,
    chp: 1000000,
    mhp: 1000000,
    xp: 1000000,
    loot: [
      { name: "Prismatic Weapon", max: 1 },
      { name: "Prismatic Gloves", max: 1 },
      { name: "Prismatic Helmet", max: 1 },
      { name: "Prismatic Chestpiece", max: 1 },
      { name: "Prismatic Legpiece", max: 1 },
      { name: "Prismatic Boots", max: 1 },
    ],
  },
  {
    tier: 7,
    name: "Olympian Titan",
    atk: 100000,
    aspd: 1000,
    chp: 10000000,
    mhp: 10000000,
    xp: 10000000,
    loot: [
      { name: "Olympian Weapon", max: 1 },
      { name: "Olympian Gloves", max: 1 },
      { name: "Olympian Helmet", max: 1 },
      { name: "Olympian Chestpiece", max: 1 },
      { name: "Olympian Legpiece", max: 1 },
      { name: "Olympian Boots", max: 1 },
    ],

  },
  {
    tier: 8,
    name: "Starforged Titan",
    atk: 1000000,
    aspd: 1000,
    chp: 100000000,
    mhp: 100000000,
    xp: 100000000,
    loot: [
      { name: "Starforged Weapon", max: 1 },
      { name: "Starforged Gloves", max: 1 },
      { name: "Starforged Helmet", max: 1 },
      { name: "Starforged Chestpiece", max: 1 },
      { name: "Starforged Legpiece", max: 1 },
      { name: "Starforged Boots", max: 1 },
    ],
  },
  {
    tier: 9,
    name: "Time Himself",
    atk: 10000000,
    aspd: 1000,
    chp: 1000000000,
    mhp: 1000000000,
    xp: 1000000000,
    loot: [
      { name: "Mantle of the Universe", max: 1 }
    ],
  },
];
//t4 cloth - Apoplectic Alpaca
export default monsters;
