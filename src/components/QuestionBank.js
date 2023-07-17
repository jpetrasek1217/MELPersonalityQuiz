const QuizBank = [
    {
        question: "You arrive at McMaster Extra Life's General Meeting! What are you doing as soon as the doors open?",
        id: 0,
        answerA: "Join a group playing my favourite board game",
        extravertAdderA: 1,
        idNextQuestionA: 1,
        answerB: "Quietly stand and watch people play smash",
        introvertAdderB: 1,
        idNextQuestionB: 2
    },
    {
        question: "The board game is going well, you’re winning! What are you thinking inside?",
        id: 1,
        answerA: "Wow these guys are complete suckers XD",
        competitiveAdderA: 1,
        toxicAdderA: 1,
        idNextQuestionA: 3,
        answerB: "I’ll throw a bit so they have some fun too",
        casualAdderB: 1,
        nutricAdderB: 1,
        idNextQuestionB: 3
    },
    {
        question: "You are invited to play after a players leaves to get food. What do you do?",
        id: 2,
        answerA: "Insist on watching",
        casualAdderA: 1,
        nutricAdderA: 1,
        idNextQuestionA: 3,
        answerB: "Join in the closest seat",
        competitiveAdderB:1,
        toxicAdderB:1,
        idNextQuestionB: 3
    },
    {
        question: "The game is over and you get hungry, time for some food! The line is really long, do you...",
        id: 3,
        answerA: "Cut in front of someone not paying attention",
        toxicAdderA: 2,
        idNextQuestionA: 4,
        answerB: "Patiently go to the back of the line",
        nutricAdderB: 2,
        idNextQuestionB: 5,
    },
    {
        question: "The person you cut in front of notices you and says a corny pickup line. How do you respond?",
        id: 4,
        answerA: "Ask if they’re a parking ticket",
        extravertAdderA: 2,
        idNextQuestionA: 6,
        answerB: "Awkwardly smile and say nothing",
        introvertAdderB: 2,
        idNextQuestionB: 8,
    },
    {
        question: "A cute person shamelessly cuts in front of you as you’re texting someone. What do you say?",
        id: 5,
        answerA: "You just look at them, too nervous to say anything",
        introvertAdderA: 2,
        idNextQuestionA: 8,
        answerB: "Hey beautiful are you from Tennessee?",
        extravertAdderB: 2,
        idNextQuestionB: 7
    },
    {
        question: "They laugh a little, and respond with an even cornier line. Response?",
        id: 6,
        answerA: "Laugh at their comeback & say it was really funny",
        casualAdderA: 2,
        idNextQuestionA: 9,
        answerB: "Keep firing corny pickup lines at each other until you both run out",
        competitiveAdderB: 2,
        idNextQuestionB: 9
    },
    {
        question: "They laugh a little, and ask if you’re a parking ticket. Response?",
        id: 7,
        answerA: "Laugh at their comeback & say it was really funny",
        casualAdderA: 2,
        idNextQuestionA: 9,
        answerB: "Keep firing corny pickup lines at each other until you both run out",
        competitiveAdderB: 2,
        idNextQuestionB: 9
    },
    {
        question: "As you vibe, a minievent starts! What do you do?",
        id: 8,
        answerA: "Run out of line to join the fun!",
        idNextQuestionA: 12,
        answerB: "Stay in the line & daydream about your food",
        idNextQuestionB: 13
    },
    {
        question: "As you vibe, a minievent starts! What do you do?",
        id: 9,
        answerA: "Run out of line to join the fun!",
        introvertAdderA: -2,
        extravertAdderA: 2,
        casualAdderA: -1,
        competitiveAdderA: 1,
        idNextQuestionA: 10,
        answerB: "stay in the line & daydream about your food",
        introvertAdderB: 2,
        extravertAdderB: -2,
        casualAdderB: 1,
        competitiveAdderB: -1,
        idNextQuestionB: 11
    },
    {
        question: "The minievent is to cut a piece of chocolate out of hundreds of layers of newspaper wrapped around it. Your groupmate has a swiss army knife you can use instead of the butterknife given. What do you do?",
        id: 10,
        answerA: "Use swiss army knife",
        toxicAdderA: 2,
        idNextQuestionA: 15,
        answerB: "Use butterknife",
        nutricAdderB: 2,
        idNextQuestionB: 15
    },
    {
        question: "You finally get to the start of the line, what are you ordering?",
        id: 11,
        answerA: "SPiCY RAMEN!!",
        toxicAdderA: 2,
        idNextQuestionA: 15,
        answerB: "Rolled ice cream from Diced Ice!",
        nutricAdderB: 2,
        idNextQuestionB: 15
    },
    {
        question: "The minievent is to cut a piece of chocolate out of hundreds of layers of newspaper wrapped around it. Your groupmate has a swiss army knife you can use instead of the butterknife given. What do you do?",
        id: 12,
        answerA: "Use swiss army knife",
        toxicAdderA: 2,
        idNextQuestionA: 14,
        answerB: "Use butterknife",
        nutricAdderB: 2,
        idNextQuestionB: 14
    },
    {
        question: "You finally get to the start of the line, what are you ordering?",
        id: 13,
        answerA: "SPiCY RAMEN!!",
        toxicAdderA: 2,
        idNextQuestionA: 14,
        answerB: "Rolled ice cream from Diced Ice!",
        nutricAdderB: 2,
        idNextQuestionB: 14
    },
    {
        question: "The minievent ends there’s a few minutes left of General Meeting. What do you do?",
        id: 14,
        answerA: "Capture the memory at the photobooth",
        casualAdderA: 2,
        idNextQuestionA: 15,
        answerB: "play one last game of Mario-Kart",
        competitiveAdderB: 2,
        idNextQuestionB: 15
    },
    {
        question: "N/A",
        id: 15
    }
]

export default QuizBank;