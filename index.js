// Good luck! 

const express = require('express')
const app = express()
const games = [
    {
      game_id: 1,
      name: "The Witcher 3: Wild Hunt",
      release_date: "2015-05-19",
      rating: 9.8,
      genre: "Action RPG",
      platforms: ["PC", "PS4", "Xbox One", "Switch"],
      developer: "CD Projekt Red",
      price: 39.99,
      description: "A story-driven, open world RPG set in a dark fantasy universe.",
      image: "https://assets.nintendo.coddm/image/upload/q_auto/f_auto/ncom/software/switch/70010000033071/3f7ee6aa3482b514bd443e116022b038a9728f017916ed37da3f09f731a7d5f2"
    },
    {
      game_id: 2,
      name: "Minecraft",
      release_date: "2011-11-18",
      rating: 9.5,
      genre: "Sandbox, Survival",
      platforms: ["PC", "PS4", "Xbox One", "Switch", "Mobile"],
      developer: "Mojang",
      price: 26.95,
      description: "A sandbox game where players build and survive in a blocky, procedurally generated world.",
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b6/Minecraft_2024_cover_art.png/220px-Minecraft_2024_cover_art.png"
    },
    {
      game_id: 3,
      name: "The Legend of Zelda: Breath of the Wild",
      release_date: "2017-03-03",
      rating: 10,
      genre: "Action-Adventure",
      platforms: ["Switch", "Wii U"],
      developer: "Nintendo",
      price: 59.99,
      description: "An open-world action-adventure game with puzzle solving, exploration, and combat elements.",
      image: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch/70010000000025/7137262b5a64d921e193653f8aa0b722925abc5680380ca0e18a5cfd91697f58"
    },
    {
        game_id: 4,
        name: "Red Dead Redemption 2",
        release_date: "2018-10-26",
        rating: 9.7,
        genre: "Action-Adventure",
        platforms: ["PC", "PS4", "Xbox One"],
        developer: "Rockstar Games",
        price: 59.99,
        description: "A western-themed action-adventure game following the life of an outlaw in the late 1800s.",
        image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1174180/header.jpg?t=1720558643"
      },
      {
        game_id: 5,
        name: "Fortnite",
        release_date: "2017-07-25",
        rating: 8.7,
        genre: "Battle Royale",
        platforms: ["PC", "PS4", "Xbox One", "Switch", "Mobile"],
        developer: "Epic Games",
        price: 0.00,
        description: "A free-to-play battle royale game where players fight to be the last one standing.",
        image: "https://assets.xboxservices.com/assets/20/38/203850f5-1bed-4912-b25f-193ee890c97f.jpg?n=Fortnite_GLP-Page-Hero-1084_876951_1920x1080.jpg"
      },
      {
        game_id: 6,
        name: "Overwatch",
        release_date: "2016-05-24",
        rating: 9.2,
        genre: "First-Person Shooter",
        platforms: ["PC", "PS4", "Xbox One"],
        developer: "Blizzard Entertainment",
        price: 39.99,
        description: "A team-based first-person shooter that focuses on teamwork and using heroes with unique abilities.",
        image: "https://upload.wikimedia.org/wikipedia/en/5/51/Overwatch_cover_art.jpg"
      },
      {
        game_id: 7,
        name: "Among Us",
        release_date: "2018-06-15",
        rating: 8.9,
        genre: "Party, Social Deduction",
        platforms: ["PC", "Mobile", "Switch"],
        developer: "Innersloth",
        price: 5.00,
        description: "A multiplayer game where players work together to identify the imposter in the group.",
        image: "https://cdn2.unrealengine.com/egs-amongus-innersloth-g1a-00-1920x1080-3c552a5212ff.jpg?resize=1&w=480&h=270&quality=medium"
      },
      {
        game_id: 8,
        name: "Apex Legends",
        release_date: "2019-02-04",
        rating: 9.0,
        genre: "Battle Royale, FPS",
        platforms: ["PC", "PS4", "Xbox One", "Switch"],
        developer: "Respawn Entertainment",
        price: 0.00,
        description: "A free-to-play battle royale with unique characters, each possessing distinct abilities.",
        image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1172470/ffbb3e6e82ceb4b3fa219d2e207c98b566a0a33e/capsule_616x353.jpg?t=1734541502"
      },
      {
        game_id: 9,
        name: "Assassin's Creed Valhalla",
        release_date: "2020-11-10",
        rating: 8.8,
        genre: "Action RPG",
        platforms: ["PC", "PS4", "PS5", "Xbox One", "Xbox Series X/S"],
        developer: "Ubisoft",
        price: 59.99,
        description: "An action RPG that takes place in the Viking era, focusing on exploration and combat.",
        image: "https://cdn1.epicgames.com/400347196e674de89c23cc2a7f2121db/offer/AC%20KINGDOM%20PREORDER_STANDARD%20EDITION_EPIC_Key_Art_Wide_3840x2160-3840x2160-485fe17203671386c71bde8110886c7d.jpg"
      },
      {
        game_id: 10,
        name: "Animal Crossing: New Horizons",
        release_date: "2020-03-20",
        rating: 9.3,
        genre: "Simulation",
        platforms: ["Switch"],
        developer: "Nintendo",
        price: 59.99,
        description: "A life simulation game where players can design their island and interact with anthropomorphic animals.",
        image: "https://assets.nintendo.com/image/upload/q_auto/f_auto/ncom/software/switch/70010000027619/9989957eae3a6b545194c42fec2071675c34aadacd65e6b33fdfe7b3b6a86c3a"
      }
  ];

  
  app.use((req, res, next) =>{
    console.log(req.method + " " + req.url)
    next()
})
  
  app.get("/" , (req, res) => {
    res.send("<h1> Welcome to the game Api</h1>")
  })



  });
  
  app.use((req, res) => {
    res.status(404).send("<h1>404 Page Not Found</h1>");
  });
  
  app.listen(3000, () => {
    console.log("Server running..")
})