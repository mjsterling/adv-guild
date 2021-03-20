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
        { name: "Leather", max : 3 },
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
        { name: "Leather", max : 3 },
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
        { name: "Leather", max : 10 },
        { name: "Leather", max : 10 },
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
        { name: "Leather", max : 3 },
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
      name: "Furious Goat",
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
  //t4 cloth - Apoplectic Alpaca
  export default monsters;