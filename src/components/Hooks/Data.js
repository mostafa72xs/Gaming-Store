
const Data ={
    products:[
    {
        product: "Console",
        category: "products",
        id:1,
        Name:"Play Station 5",
        price:579.99,
        image:"https://www.gamespot.com/a/uploads/original/1551/15511094/3752256-mvi_0283.00_00_00_00.still012.jpg"
    },
    {
        product: "Console",
        category: "products",
        id:2,
        Name:"Xbox One",
        price:399.99,
        image:"https://media.wired.com/photos/5fa5dc3dba670daaf8e97a8d/master/w_2560%2Cc_limit/games_gear_series-x.jpg"
    }
    ,{
        product:'Mouse',
        category: "products",
        id:3,
        Name:"X-2 WIRELESS Mouse",
        price:19.99,
        image:"https://static.wixstatic.com/media/c837a6_0067919b3086427cad03a54e61452958~mv2.jpg/v1/fill/w_255,h_255,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_0067919b3086427cad03a54e61452958~mv2.jpg"
    },
    {
        product:'Keyboard',
        category: "products",
        id:4,
        Name:"Gaming Keyboard",
        price:19.99,
        image:"https://static.wixstatic.com/media/c837a6_7c11d47692f04c1f92a024ad095274ae~mv2.jpg/v1/fill/w_255,h_255,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_7c11d47692f04c1f92a024ad095274ae~mv2.jpg"
    },
    {
        product: "Headset",
        category: "products",
        id:5,
        Name:"Gaming Headset",
        price:19.99,
        image:"https://static.wixstatic.com/media/c837a6_9a2583f0a17e48efb075913d90da0dbf~mv2.jpg/v1/fill/w_255,h_255,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_9a2583f0a17e48efb075913d90da0dbf~mv2.jpg"
    },
    {
        product: "chair",
        category: "products",
        id:6,
        Name:"Gaming Chair",
        price:30.99,
        image:"https://static.wixstatic.com/media/c837a6_85410586580e46ce94659e34046a48c8~mv2.jpg/v1/fill/w_255,h_255,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_85410586580e46ce94659e34046a48c8~mv2.jpg"
    },
    {
        product: "Controller",
        category: "products",
        id:7,
        Name:"Dualshock PS4",
        price:30.99,
        image:"https://static.wixstatic.com/media/c837a6_58812d9bb7ba47638549b64970fe3bbe~mv2.jpg/v1/fill/w_255,h_255,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_58812d9bb7ba47638549b64970fe3bbe~mv2.jpg"
    },
    {
        product: "game",
        category: "products",
        id:8,
        Name:"chronospilit",
        price:30.99,
        image:"https://static.wixstatic.com/media/c837a6_261f4ef2535f451faedabc197c6e4a71~mv2.jpg/v1/fill/w_255,h_255,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_261f4ef2535f451faedabc197c6e4a71~mv2.jpg"
    }
    ],


    gear:[{
        product:'Keyboard',
        category: "gear",
        id:1,
        Name:"Gaming Keyboard",
        price:19.99,
        image:"https://static.wixstatic.com/media/c837a6_7c11d47692f04c1f92a024ad095274ae~mv2.jpg/v1/fill/w_255,h_255,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_7c11d47692f04c1f92a024ad095274ae~mv2.jpg",
    },
    {
        product:'Chair',
        category: "gear",
        id:2,
        Name:"Gaming Chair",
        price:30.99,
        image:"https://static.wixstatic.com/media/c837a6_85410586580e46ce94659e34046a48c8~mv2.jpg/v1/fill/w_255,h_255,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_85410586580e46ce94659e34046a48c8~mv2.jpg",
    },
    {
        product:'Headset',
        category: "gear",
        id:3,
        Name:"Gaming Headset",
        price:19.99,
        image:"https://static.wixstatic.com/media/c837a6_9a2583f0a17e48efb075913d90da0dbf~mv2.jpg/v1/fill/w_255,h_255,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_9a2583f0a17e48efb075913d90da0dbf~mv2.jpg",
    },
    {
        product:'Mouse',
        category: "gear",
        id:4,
        Name:"X-2 WIRELESS Mouse",
        price:19.99,
        image:"https://static.wixstatic.com/media/c837a6_0067919b3086427cad03a54e61452958~mv2.jpg/v1/fill/w_255,h_255,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_0067919b3086427cad03a54e61452958~mv2.jpg"
    },
    {
        product: "Controller",
        category: "gear",
        id:5,
        Name:"Dualshock PS4",
        price:30.99,
        image:"https://static.wixstatic.com/media/c837a6_58812d9bb7ba47638549b64970fe3bbe~mv2.jpg/v1/fill/w_255,h_255,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_58812d9bb7ba47638549b64970fe3bbe~mv2.jpg"
    },
    {
        product: "Chair",
        category: "gear",
        id:6,
        Name:"gaming chair V2",
        price:29.99,
        image:'https://assets3.razerzone.com/hCH_A3C1S76-9j4QAo63MSx8gEI=/767x511/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh45%2Fh7a%2F9198275526686%2Fiskurblack-gallery-1500x1000-rsl5-1.jpg',
    },
    {
        product:"Mouse",
        category: "gear",
        id:7,
        Name:"Razor Basilik V3",
        price:30.99,
        image:"https://cdn.mos.cms.futurecdn.net/BsWjPoBkqF8tGqvSapDjwV-480-80.jpg",
    },
    {
        product: "Keyboard",
        category: "gear",
        id:8,
        Name:"Gameing Keyboard V2",
        price:24.99,
        image:"https://images.unsplash.com/photo-1538481199705-c710c4e965fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z2FtaW5nJTIwa2V5Ym9hcmR8ZW58MHx8MHx8&w=1000&q=80",
    }
],
    games:[
        {
            product:"game",
            category: "games",
            id:1,
            Name:"chronospilit",
            price:30.99,
            image:"https://static.wixstatic.com/media/c837a6_261f4ef2535f451faedabc197c6e4a71~mv2.jpg/v1/fill/w_255,h_255,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_261f4ef2535f451faedabc197c6e4a71~mv2.jpg",    
        },
        {
            product:"game",
            category: "games",
            id:2,
            Name:"ghost runner",
            price:30.99,
            image:"https://upload.wikimedia.org/wikipedia/en/2/2c/Ghostrunner_cover_art.jpg",    
        },
        {
            product:"game",
            category: "games",
            id:3,
            Name:"Sekiro: shadow die twice ",
            price:30.99,
            image:"https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/Sekiro_art.jpg/220px-Sekiro_art.jpg",    
        },
        {
            product:"game",
            category: "games",
            id:4,
            Name:"ghost of tsushima",
            price:30.99,
            image:"https://upload.wikimedia.org/wikipedia/en/b/b6/Ghost_of_Tsushima.jpg",
        },
        {
            product:"game",
            category: "games",
            id:5,
            Name:"For Honor",
            price:30.99,
            image:"https://upload.wikimedia.org/wikipedia/en/d/d5/For_Honor_cover_art.jpg",
        },
        {
            product:"game",
            category: "games",
            id:6,
            Name:"Resident evil 7",
            price:30.99,
            image:"https://upload.wikimedia.org/wikipedia/en/f/fd/Resident_Evil_7_cover_art.jpg",    
        },
        {
            product:"game",
            category: "games",
            id:7,
            Name:"Dark Souls 3",
            price:30.99,
            image:"https://image.api.playstation.com/cdn/UP0700/CUSA03388_00/v8JlD8KcQUtTqaLBmpFnj1ESRR5zMkLk.png",    
        },
        {
            product:"game",
            category: "games",
            id:8,
            Name:"Elden Ring",
            price:30.99,
            image:"https://static.bandainamcoent.eu/high/elden-ring/elden-ring/00-page-setup/elden-ring-new-header-mobile.jpg",    
        },

    ],}




export default Data











