const items = [

  {
    //warrior gear
    tier: 0,
    class: "Warrior",
    type: "weapon",
    name: "Fists",
    atk: 0,
    mhp: 0,
    aspd: 1,
    upcost: ["Aluminium", 40],
  },
  {
    tier: 0,
    class: "Warrior",
    type: "gloves",
    name: "No Vambraces",
    atk: 0,
    mhp: 0,
    aspd: 1,
    upcost: ["Aluminium", 20],
  },
  {
    tier: 0,
    class: "Warrior",
    type: "helmet",
    name: "No Helm",
    atk: 0,
    mhp: 0,
    aspd: 1,
    upcost: ["Aluminium", 20],
  },
  {
    tier: 0,
    class: "Warrior",
    type: "body",
    name: "No Armour",
    atk: 0,
    mhp: 0,
    aspd: 1,
    upcost: ["Aluminium", 20],
  },
  {
    tier: 0,
    class: "Warrior",
    type: "legs",
    name: "No Legs",
    atk: 0,
    mhp: 0,
    aspd: 1,
    upcost: ["Aluminium", 20],
  },
  {
    tier: 0,
    class: "Warrior",
    type: "boots",
    name: "No Boots",
    atk: 0,
    mhp: 0,
    aspd: 1,
    upcost: ["Aluminium", 20],
  },
  {
    tier: 1,
    class: "Warrior",
    type: "weapon",
    name: "Aluminium Foil",
    atk: 3,
    mhp: 0,
    aspd: 0.9,
    upcost: ["Bronze", 200],
  },
  {
    tier: 1,
    class: "Warrior",
    type: "gloves",
    name: "Aluminium Vambraces",
    atk: 2,
    mhp: 25,
    aspd: 0.95,
    upcost: ["Bronze", 100],
  },
  {
    tier: 1,
    class: "Warrior",
    type: "helmet",
    name: "Aluminium Helm",
    atk: 1,
    mhp: 25,
    aspd: 0.98,
    upcost: ["Bronze", 100],
  },
  {
    tier: 1,
    class: "Warrior",
    type: "body",
    name: "Aluminium Cuirass",
    atk: 1,
    mhp: 25,
    aspd: 0.98,
    upcost: ["Bronze", 100],
  },
  {
    tier: 1,
    class: "Warrior",
    type: "legs",
    name: "Aluminium Tasset",
    atk: 1,
    mhp: 25,
    aspd: 0.98,
    upcost: ["Bronze", 100],
  },
  {
    tier: 1,
    class: "Warrior",
    type: "boots",
    name: "Aluminium Sabatons",
    atk: 1,
    mhp: 25,
    aspd: 0.98,
    upcost: ["Bronze", 100],
  },
  {
    tier: 2,
    class: "Warrior",
    type: "weapon",
    name: "Bronze Broadsword",
    atk: 10,
    mhp: 25,
    aspd: 0.8,
    upcost: ["Steel", 2000],
  },
  {
    tier: 2,
    class: "Warrior",
    type: "gloves",
    name: "Bronze Vambraces",
    atk: 4,
    mhp: 50,
    aspd: 0.9,
    upcost: ["Steel", 1000],
  },
  {
    tier: 2,
    class: "Warrior",
    type: "helmet",
    name: "Bronze Helm",
    atk: 2,
    mhp: 75,
    aspd: 0.96,
    upcost: ["Steel", 1000],
  },
  {
    tier: 2,
    class: "Warrior",
    type: "body",
    name: "Bronze Cuirass",
    atk: 2,
    mhp: 75,
    aspd: 0.96,
    upcost: ["Steel", 1000],
  },
  {
    tier: 2,
    class: "Warrior",
    type: "legs",
    name: "Bronze Tasset",
    atk: 2,
    mhp: 75,
    aspd: 0.96,
    upcost: ["Steel", 1000],
  },
  {
    tier: 2,
    class: "Warrior",
    type: "boots",
    name: "Bronze Sabatons",
    atk: 2,
    mhp: 75,
    aspd: 0.96,
    upcost: ["Steel", 1000],
  },
  {
    tier: 3,
    class: "Warrior",
    type: "weapon",
    name: "Steel Broadsword",
    atk: 30,
    mhp: 100,
    aspd: 0.7,
    upcost: ["Titanium", 10000],
  },
  {
    tier: 3,
    class: "Warrior",
    type: "gloves",
    name: "Steel Vambraces",
    atk: 10,
    mhp: 150,
    aspd: 0.85,
    upcost: ["Titanium", 5000],
  },
  {
    tier: 3,
    class: "Warrior",
    type: "helmet",
    name: "Steel Helm",
    atk: 5,
    mhp: 300,
    aspd: 0.94,
    upcost: ["Titanium", 5000],
  },
  {
    tier: 3,
    class: "Warrior",
    type: "helmet",
    name: "Steel Helm",
    atk: 5,
    mhp: 300,
    aspd: 0.94,
    upcost: ["Titanium", 5000],
  },
  {
    tier: 3,
    class: "Warrior",
    type: "body",
    name: "Steel Cuirass",
    atk: 5,
    mhp: 300,
    aspd: 0.94,
    upcost: ["Titanium", 5000],
  },
  {
    tier: 3,
    class: "Warrior",
    type: "legs",
    name: "Steel Tasset",
    atk: 5,
    mhp: 300,
    aspd: 0.94,
    upcost: ["Titanium", 5000],
  },
  {
    tier: 3,
    class: "Warrior",
    type: "boots",
    name: "Steel Sabatons",
    atk: 5,
    mhp: 300,
    aspd: 0.94,
    upcost: ["Titanium", 5000],
  },
  {
    tier: 4,
    class: "Warrior",
    type: "weapon",
    name: "Titanium Broadsword",
    atk: 100,
    mhp: 300,
    aspd: 0.6,
    upcost: ["Tungsten", 50000],
  },
  {
    tier: 4,
    class: "Warrior",
    type: "gloves",
    name: "Titanium Vambraces",
    atk: 50,
    mhp: 450,
    aspd: 0.8,
    upcost: ["Tungsten", 25000],
  },
  {
    tier: 4,
    class: "Warrior",
    type: "helmet",
    name: "Titanium Helm",
    atk: 10,
    mhp: 750,
    aspd: 0.92,
    upcost: ["Tungsten", 25000],
  },
  {
    tier: 4,
    class: "Warrior",
    type: "body",
    name: "Titanium Cuirass",
    atk: 10,
    mhp: 750,
    aspd: 0.92,
    upcost: ["Tungsten", 25000],
  },
  {
    tier: 4,
    class: "Warrior",
    type: "legs",
    name: "Titanium Tasset",
    atk: 10,
    mhp: 750,
    aspd: 0.92,
    upcost: ["Tungsten", 25000],
  },
  {
    tier: 4,
    class: "Warrior",
    type: "boots",
    name: "Titanium Sabatons",
    atk: 10,
    mhp: 750,
    aspd: 0.92,
    upcost: ["Tungsten", 25000],
  },

  //hunter gear
  {
    tier: 0,
    class: "Hunter",
    type: "weapon",
    name: "Slingshot",
    atk: 0,
    mhp: 0,
    aspd: 1,
    upcost: ["Balsa", 40],
  },
  {
    tier: 0,
    class: "Hunter",
    type: "gloves",
    name: "No Vambraces",
    atk: 0,
    mhp: 0,
    aspd: 1,
    upcost: ["Leather", 20],
  },
  {
    tier: 0,
    class: "Hunter",
    type: "helmet",
    name: "No Coif",
    atk: 0,
    mhp: 0,
    aspd: 1,
    upcost: ["Leather", 20],
  },
  {
    tier: 0,
    class: "Hunter",
    type: "body",
    name: "No Armour",
    atk: 0,
    mhp: 0,
    aspd: 1,
    upcost: ["Leather", 20],
  },
  {
    tier: 0,
    class: "Hunter",
    type: "legs",
    name: "No Greaves",
    atk: 0,
    mhp: 0,
    aspd: 1,
    upcost: ["Leather", 20],
  },
  {
    tier: 0,
    class: "Hunter",
    type: "boots",
    name: "No Shoes",
    atk: 0,
    mhp: 0,
    aspd: 1,
    upcost: ["Leather", 20],
  },
  {
    tier: 1,
    class: "Hunter",
    type: "weapon",
    name: "Balsa Longbow",
    atk: 3,
    mhp: 0,
    aspd: 0.9,
    upcost: ["Redwood", 200],
  },
  {
    tier: 1,
    class: "Hunter",
    type: "gloves",
    name: "Leather Bracers",
    atk: 2,
    mhp: 25,
    aspd: 0.95,
    upcost: ["Snakehide", 100],
  },
  {
    tier: 1,
    class: "Hunter",
    type: "helmet",
    name: "Leather Coif",
    atk: 1,
    mhp: 25,
    aspd: 0.98,
    upcost: ["Snakehide", 100],
  },
  {
    tier: 1,
    class: "Hunter",
    type: "body",
    name: "Leather Armour",
    atk: 1,
    mhp: 25,
    aspd: 0.98,
    upcost: ["Snakehide", 100],
  },
  {
    tier: 1,
    class: "Hunter",
    type: "legs",
    name: "Leather Greaves",
    atk: 1,
    mhp: 25,
    aspd: 0.98,
    upcost: ["Snakehide", 100],
  },
  {
    tier: 1,
    class: "Hunter",
    type: "boots",
    name: "Leather Sandals",
    atk: 1,
    mhp: 25,
    aspd: 0.98,
    upcost: ["Snakehide", 100],
  },
  {
    tier: 2,
    class: "Hunter",
    type: "weapon",
    name: "Redwood Longbow",
    atk: 10,
    mhp: 25,
    aspd: 0.8,
    upcost: ["Maple", 2000],
  },
  {
    tier: 2,
    class: "Hunter",
    type: "gloves",
    name: "Snakehide Bracers",
    atk: 4,
    mhp: 50,
    aspd: 0.9,
    upcost: ["Crocodile Skin", 1000],
  },
  {
    tier: 2,
    class: "Hunter",
    type: "helmet",
    name: "Snakehide Coif",
    atk: 2,
    mhp: 75,
    aspd: 0.96,
    upcost: ["Crocodile Skin", 1000],
  },
  {
    tier: 2,
    class: "Hunter",
    type: "body",
    name: "Snakehide Armour",
    atk: 2,
    mhp: 75,
    aspd: 0.96,
    upcost: ["Crocodile Skin", 1000],
  },
  {
    tier: 2,
    class: "Hunter",
    type: "legs",
    name: "Snakehide Greaves",
    atk: 2,
    mhp: 75,
    aspd: 0.96,
    upcost: ["Crocodile Skin", 1000],
  },
  {
    tier: 2,
    class: "Hunter",
    type: "boots",
    name: "Snakehide Boots",
    atk: 2,
    mhp: 75,
    aspd: 0.96,
    upcost: ["Crocodile Skin", 1000],
  },
  {
    tier: 3,
    class: "Hunter",
    type: "weapon",
    name: "Maple Longbow",
    atk: 30,
    mhp: 100,
    aspd: 0.7,
    upcost: ["Purpleheart", 5000],
  },
  {
    tier: 3,
    class: "Hunter",
    type: "gloves",
    name: "Crocodile Bracers",
    atk: 10,
    mhp: 150,
    aspd: 0.85,
    upcost: ["Drakeskin", 5000],
  },
  {
    tier: 3,
    class: "Hunter",
    type: "helmet",
    name: "Crocodile Coif",
    atk: 5,
    mhp: 300,
    aspd: 0.94,
    upcost: ["Drakeskin", 5000],
  },
  {
    tier: 3,
    class: "Hunter",
    type: "body",
    name: "Crocodile Armour",
    atk: 5,
    mhp: 300,
    aspd: 0.94,
    upcost: ["Drakeskin", 5000],
  },
  {
    tier: 3,
    class: "Hunter",
    type: "legs",
    name: "Crocodile Greaves",
    atk: 5,
    mhp: 300,
    aspd: 0.94,
    upcost: ["Drakeskin", 5000],
  },
  {
    tier: 3,
    class: "Hunter",
    type: "boots",
    name: "Crocodile Boots",
    atk: 5,
    mhp: 300,
    aspd: 0.94,
    upcost: ["Drakeskin", 5000],
  },
  {
    tier: 4,
    class: "Hunter",
    type: "weapon",
    name: "Purpleheart Longbow",
    atk: 100,
    mhp: 300,
    aspd: 0.6,
    upcost: ["Snakewood", 50000],
  },
  {
    tier: 4,
    class: "Hunter",
    type: "gloves",
    name: "Drakeskin Bracers",
    atk: 50,
    mhp: 450,
    aspd: 0.8,
    upcost: ["Dragonhide", 25000],
  },
  {
    tier: 4,
    class: "Hunter",
    type: "helmet",
    name: "Drakeskin Coif",
    atk: 10,
    mhp: 750,
    aspd: 0.92,
    upcost: ["Dragonhide", 25000],
  },
  {
    tier: 4,
    class: "Hunter",
    type: "body",
    name: "Drakeskin Armour",
    atk: 10,
    mhp: 750,
    aspd: 0.92,
    upcost: ["Dragonhide", 25000],
  },
  {
    tier: 4,
    class: "Hunter",
    type: "legs",
    name: "Drakeskin Greaves",
    atk: 10,
    mhp: 750,
    aspd: 0.92,
    upcost: ["Dragonhide", 25000],
  },
  {
    tier: 4,
    class: "Hunter",
    type: "boots",
    name: "Drakeskin Boots",
    atk: 10,
    mhp: 750,
    aspd: 0.92,
    upcost: ["Dragonhide", 25000],
  },
  // wizard gear
  {
    tier: 0,
    class: "Wizard",
    type: "weapon",
    name: "A Stick",
    atk: 0,
    mhp: 0,
    aspd: 1,
    upcost: ["Balsa", 40],
  },
  {
    tier: 0,
    class: "Wizard",
    type: "gloves",
    name: "No Gloves",
    atk: 0,
    mhp: 0,
    aspd: 1,
    upcost: ["Jute", 20],
  },
  {
    tier: 0,
    class: "Wizard",
    type: "helmet",
    name: "No Hat",
    atk: 0,
    mhp: 0,
    aspd: 1,
    upcost: ["Jute", 20],
  },
  {
    tier: 0,
    class: "Wizard",
    type: "body",
    name: "No Robes",
    atk: 0,
    mhp: 0,
    aspd: 1,
    upcost: ["Jute", 20],
  },
  {
    tier: 0,
    class: "Wizard",
    type: "legs",
    name: "No Skirt",
    atk: 0,
    mhp: 0,
    aspd: 1,
    upcost: ["Jute", 20],
  },
  {
    tier: 0,
    class: "Wizard",
    type: "boots",
    name: "No Shoes",
    atk: 0,
    mhp: 0,
    aspd: 1,
    upcost: ["Leather", 20],
  },
  {
    tier: 1,
    class: "Wizard",
    type: "weapon",
    name: "Balsa Staff",
    atk: 3,
    mhp: 0,
    aspd: 0.9,
    upcost: ["Redwood", 200],
  },
  {
    tier: 1,
    class: "Wizard",
    type: "gloves",
    name: "Jute Gloves",
    atk: 2,
    mhp: 25,
    aspd: 0.95,
    upcost: ["Cotton", 100],
  },
  {
    tier: 1,
    class: "Wizard",
    type: "helmet",
    name: "Jute Hat",
    atk: 1,
    mhp: 25,
    aspd: 0.98,
    upcost: ["Cotton", 100],
  },
  {
    tier: 1,
    class: "Wizard",
    type: "body",
    name: "Jute Robes",
    atk: 1,
    mhp: 25,
    aspd: 0.98,
    upcost: ["Cotton", 100],
  },
  {
    tier: 1,
    class: "Wizard",
    type: "legs",
    name: "Jute Robeskirt",
    atk: 1,
    mhp: 25,
    aspd: 0.98,
    upcost: ["Cotton", 100],
  },
  {
    tier: 1,
    class: "Wizard",
    type: "boots",
    name: "Leather Shoes",
    atk: 1,
    mhp: 25,
    aspd: 0.98,
    upcost: ["Snakehide", 100],
  },
  {
    tier: 2,
    class: "Wizard",
    type: "weapon",
    name: "Redwood Staff",
    atk: 10,
    mhp: 25,
    aspd: 0.8,
    upcost: ["Maple", 2000],
  },
  {
    tier: 2,
    class: "Wizard",
    type: "gloves",
    name: "Cotton Gloves",
    atk: 4,
    mhp: 50,
    aspd: 0.9,
    upcost: ["Cashmere", 1000],
  },
  {
    tier: 2,
    class: "Wizard",
    type: "helmet",
    name: "Cotton Hat",
    atk: 2,
    mhp: 75,
    aspd: 0.96,
    upcost: ["Cashmere", 1000],
  },
  {
    tier: 2,
    class: "Wizard",
    type: "body",
    name: "Cotton Robes",
    atk: 2,
    mhp: 75,
    aspd: 0.96,
    upcost: ["Cashmere", 1000],
  },
  {
    tier: 2,
    class: "Wizard",
    type: "legs",
    name: "Cotton Robeskirt",
    atk: 2,
    mhp: 75,
    aspd: 0.96,
    upcost: ["Cashmere", 1000],
  },
  {
    tier: 2,
    class: "Wizard",
    type: "boots",
    name: "Snakehide Shoes",
    atk: 2,
    mhp: 75,
    aspd: 0.96,
    upcost: ["Crocodile Skin", 1000],
  },
  {
    tier: 3,
    class: "Wizard",
    type: "weapon",
    name: "Maple Staff",
    atk: 30,
    mhp: 100,
    aspd: 0.7,
    upcost: ["Purpleheart", 5000],
  },
  {
    tier: 3,
    class: "Wizard",
    type: "gloves",
    name: "Cashmere Gloves",
    atk: 10,
    mhp: 150,
    aspd: 0.85,
    upcost: ["Silk", 5000],
  },
  {
    tier: 3,
    class: "Wizard",
    type: "helmet",
    name: "Cashmere Hat",
    atk: 5,
    mhp: 300,
    aspd: 0.94,
    upcost: ["Silk", 5000],
  },
  {
    tier: 3,
    class: "Wizard",
    type: "body",
    name: "Cashmere Robes",
    atk: 5,
    mhp: 300,
    aspd: 0.94,
    upcost: ["Silk", 5000],
  },
  {
    tier: 3,
    class: "Wizard",
    type: "legs",
    name: "Cashmere Robeskirt",
    atk: 5,
    mhp: 300,
    aspd: 0.94,
    upcost: ["Silk", 5000],
  },
  {
    tier: 3,
    class: "Wizard",
    type: "boots",
    name: "Crocodile Shoes",
    atk: 5,
    mhp: 300,
    aspd: 0.94,
    upcost: ["Drakeskin", 5000],
  },
  {
    tier: 4,
    class: "Wizard",
    type: "weapon",
    name: "Purpleheart Staff",
    atk: 100,
    mhp: 300,
    aspd: 0.6,
    upcost: ["Snakewood", 50000],
  },
  {
    tier: 4,
    class: "Wizard",
    type: "gloves",
    name: "Silk Gloves",
    atk: 50,
    mhp: 450,
    aspd: 0.8,
    upcost: ["Vicu\xF1a", 25000],
  },
  {
    tier: 4,
    class: "Wizard",
    type: "helmet",
    name: "Silk Hat",
    atk: 10,
    mhp: 750,
    aspd: 0.92,
    upcost: ["Vicu\xF1a", 25000],
  },
  {
    tier: 4,
    class: "Wizard",
    type: "body",
    name: "Silk Robe",
    atk: 10,
    mhp: 750,
    aspd: 0.92,
    upcost: ["Vicu\xF1a", 25000],
  },
  {
    tier: 4,
    class: "Wizard",
    type: "legs",
    name: "Silk Robeskirt",
    atk: 10,
    mhp: 750,
    aspd: 0.92,
    upcost: ["Vicu\xF1a", 25000],
  },
  {
    tier: 4,
    class: "Wizard",
    type: "boots",
    name: "Drakeskin Shoes",
    atk: 10,
    mhp: 750,
    aspd: 0.92,
    upcost: ["Dragonhide", 25000],
  },
];

export default items;