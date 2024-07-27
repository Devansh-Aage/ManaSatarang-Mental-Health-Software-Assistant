export const formatTime=(timestamp)=>{
    const date = new Date(timestamp);

// Extract the hours and minutes
const hours = date.getHours();
const minutes = date.getMinutes();

// Format the hours and minutes as needed (e.g., adding leading zeroes)
const formattedHours = String(hours).padStart(2, '0');
const formattedMinutes = String(minutes).padStart(2, '0');

// Combine the hours and minutes
const time = `${formattedHours}:${formattedMinutes}`;
return time;
}

export const activityList = [
    "Go to a trivia night",
    "Play bingo",
    "Paint",
    "Draw or sketch",
    "Use a coloring book",
    "Read a book",
    "Listen to an audio book",
    "Listen to a podcast",
    "Watch a documentary",
    "Listen to music",
    "Make a playlist for yourself or someone else",
    "Sing",
    "Play an instrument",
    "Go for a walk",
    "Visit a public park",
    "Go to a dog park",
    "Bake",
    "Cook a meal",
    "Make an old family recipe",
    "Freeze or can food for later",
    "Bring a meal or baked goods to a neighbor",
    "Go fishing or hunting",
    "Dance",
    "Practice yoga",
    "Workout at a gym or in your home",
    "Visit a climbing gym (or go mountain climbing)",
    "Go on a run",
    "Take a long bath or shower",
    "Stretch",
    "Ride a bicycle",
    "Rollerblade or skate",
    "Visit a beach, lake, river, or swimming hole",
    "Go hiking or camping",
    "Visit a farmer’s market",
    "Go to a restaurant or cafe",
    "Try a new cuisine",
    "Visit a bakery",
    "Do a jigsaw puzzle",
    "Do a crossword, sudoku, or word search",
    "Plan a trip",
    "Take a free online course",
    "Visit the library",
    "Visit a museum",
    "Play a video, computer, or phone game",
    "Go on a picnic",
    "Get a massage",
    "Host a clothing swap",
    "Join a “Buy Nothing” group on Facebook and give something away",
    "Read or watch old cartoons",
    "Volunteer for a cause or political campaign that you care about",
    "Sew, knit, crochet, or embroider",
    "Learn a new craft",
    "Meet a friend for coffee or tea",
    "People watch",
    "Sit by a fountain, pool, or natural body of water",
    "Write a letter, card, or postcard",
    "Journal",
    "Make a fire in an indoor or outdoor fireplace",
    "Get a haircut or style your hair",
    "Paint your nails",
    "Give yourself a facial",
    "Visit a salon or spa",
    "Play ping pong, pool, or darts",
    "Watch a sunrise or sunset",
    "Stargaze",
    "Call a friend or family member",
    "Eat a popsicle or ice cream cone",
    "Dress up in an outfit that makes you feel confident",
    "Write a poem, story, essay, or song",
    "Go on a date",
    "Visit a zoo or aquarium",
    "Play a board game, chess, or checkers",
    "Play a card game",
    "Visit a place of worship",
    "Pray or meditate",
    "Visit a yard sale, thrift store, or flea market",
    "Go antiquing",
    "Go for a drive or take a road trip",
    "Go to the movies",
    "Go bowling",
    "Listen to live music",
    "Go to an open mic night",
    "Watch standup comedy",
    "Go to the theater",
    "Attend a sporting event",
    "Watch sports on TV",
    "Play a sport",
    "Go kayaking, canoeing, paddle boarding, or tubing",
    "Start or tend to an herb, vegetable, or flower garden",
    "Landscape or mow the lawn",
    "Go foraging for edible plants",
    "Take care of houseplants",
    "Volunteer for a community organization",
    "Wash or detail your car",
    "Learn or practice a new language",
    "Go bird watching or set up a bird feeder",
    "Cut (or buy) and arrange flowers",
    "Make a photo album",
    "Print and hang photos in your home",
    "Go on a walking or bus tour in your own city, town, or region",
    "Play with a pet",
  ];


  export const users = [
    { name: "Priya Sharma", points: 300 },
    { name: "Suresh Kumar", points: 295 },
    { name: "Anita Verma", points: 290 },
    { name: "Vikram Singh", points: 285 },
    { name: "Meera Patel", points: 280 },
    { name: "Krishna Iyer", points: 275 },
    { name: "Sita Joshi", points: 270 },
    { name: "Ravi Desai", points: 265 },
    { name: "Lakshmi Nair", points: 260 },
    { name: "Arjun Reddy", points: 250 }
  ];
  

  export function chatHrefConstructor(id1, id2){
    const sortedIds = [id1, id2].sort();
    return `${sortedIds[0]}--${sortedIds[1]}`
  }