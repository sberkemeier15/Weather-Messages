// Project Description: I want to create a random message generator for an activity based off the weather. this needs three random variables: a weather variable, an activity varible, and a clothes variable. this will then generate a message based on the weather, activity, and clothes.

const data = {
    weather: ["sunny", "cloudy", "rainy"],
    activities: {
        sunnyActivity: ["swimming", "biking", "hiking"],
        cloudyActivity: ["reading", "walking", "garden"],
        rainyActivity: ["painting", "biking", "walking"]
    },
    clothes: {
        sunnyClothes: ["t-shirt", "shorts", "sunglasses"],
        cloudyClothes: ["jacket", "pants", "hat"],
        rainyClothes: ["raincoat", "umbrella", "hat"]
    }
};

function generateRand(array) {
    return Math.floor(Math.random() * array.length);
};

function generateMessage() {
    const weather = data.weather[generateRand(data.weather)];
    let activity;
    let clothes;
    if (weather === "sunny") {
        activity = data.activities.sunnyActivity[generateRand(data.activities.sunnyActivity)];
        clothes = data.clothes.sunnyClothes[generateRand(data.clothes.sunnyClothes)];
    } else if (weather === "cloudy") {
        activity = data.activities.cloudyActivity[generateRand(data.activities.cloudyActivity)];
        clothes = data.clothes.cloudyClothes[generateRand(data.clothes.cloudyClothes)];
    } else if (weather === "rainy") {
        activity = data.activities.rainyActivity[generateRand(data.activities.rainyActivity)];
        clothes = data.clothes.rainyClothes[generateRand(data.clothes.rainyClothes)];
    }
    const message = `It's ${weather} today. I recommend ${activity} and you should bring your ${clothes}.`;
    
    return message;
};

console.log(generateMessage());