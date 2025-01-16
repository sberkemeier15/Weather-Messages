// Project Description: I want to create a random message generator for an activity based off the weather. this needs three random variables: a weather variable, an activity varible, and a clothes variable. this will then generate a message based on the weather, activity, and clothes.

const data = {
    weather: ["sunny", "cloudy", "rainy"],
    activities: {
        sunnyActivity: ["swimming", "biking", "hiking", "kayaking"],
        cloudyActivity: {
            indoor: ["reading", "watching a movie", "playing video games"],
            outdoor: ["walking", "hiking", "biking"]
        },
        rainyActivity: {
            indoor: ["watching a movie", "playing video games"],
            outdoor: ["walking", "hiking", "biking"]
        }
    },
    clothes: {
        sunnyClothes: ["t-shirt", "shorts", "sunglasses"],
        cloudyClothes: ["t-shirt", "pants", "hat"],
        rainyClothes: {
            indoor: ["pajamas", "socks", "beanie"],
            outdoor: ["raincoat", "pants", "hat"]
        }
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
        const indoorOrOutdoor = generateRand([0, 1]);
        if (indoorOrOutdoor === 0) {
            activity = data.activities.cloudyActivity.indoor[generateRand(data.activities.cloudyActivity.indoor)];
            clothes = data.clothes.cloudyClothes[generateRand(data.clothes.cloudyClothes)];
        } else {
            activity = data.activities.cloudyActivity.outdoor[generateRand(data.activities.cloudyActivity.outdoor)];
            clothes = data.clothes.cloudyClothes[generateRand(data.clothes.cloudyClothes)];
        }
    } else {
        const indoorOrOutdoor = generateRand([0, 1]);
        if (indoorOrOutdoor === 0) {
            activity = data.activities.rainyActivity.indoor[generateRand(data.activities.rainyActivity.indoor)];
            clothes = data.clothes.rainyClothes.indoor[generateRand(data.clothes.rainyClothes.indoor)];
        } else {
            activity = data.activities.rainyActivity.outdoor[generateRand(data.activities.rainyActivity.outdoor)];
            clothes = data.clothes.rainyClothes.outdoor[generateRand(data.clothes.rainyClothes.outdoor)];
        }
    }
    const message = `It's ${weather} today. I recommend ${activity} and don't forget your ${clothes}!`;
    
    return message;
};

console.log(generateMessage());