const QuizBank = [
    {
        question: "You have just arrived at McMaster Extra Life's general meeting! What will be the first thing you do as soon as the doors open?",
        id: 0,
        answerA: "Join a group playing your favourite board game",
        extravertAdderA: 1,
        idNextQuestionA: 1,
        answerB: "Quietly stand and watch people play Smash",
        introvertAdderB: 1,
        idNextQuestionB: 2,
        answerC: "",
        answerD: ""
    },
    {
        question: "The board game is going well, you’re winning! What are you thinking inside?",
        id: 1,
        answerA: "What's the coolest combo I can pull off to win?",
        competitiveAdderA: 1,
        answerB: "Wow these guys are complete suckers XD",
        toxicAdderB: 1,
        answerC: "I hope everyone else is having fun",
        nutricAdderC: 1,
        answerD: "Time for the biggest, most worthless throw of my career",
        casualAdderD: 1,
        idNextQuestionA: 3,
        idNextQuestionB: 3,
        idNextQuestionC: 3,
        idNextQuestionD: 3,
    },
    {
        question: "You are invited to play after a players leaves to get food. What do you do?",
        id: 2,
        answerA: "Insist on watching",
        nutricAdderA: 1,

        answerB: "Get food with the others",
        casualAdderB: 1,

        answerC: "Take their spot after asking",
        competitiveAdderC: 1,

        answerD: "Take their spot without asking",
        toxicAdderD: 1,
        
        idNextQuestionA: 4,
        idNextQuestionB: 4,
        idNextQuestionC: 4,
        idNextQuestionD: 4
    },
    {
        question: "I forgot to ask, what board game are you playing?",
        id: 3,
        answerA: "Something chill and friendly for beginners",
        casualAdderA: 1,
        idNextQuestionA: 5,
        answerB: "Something competitive with a steep learning curve",
        competitiveAdderB: 1,
        idNextQuestionB: 5,
        answerC: "",
        answerD: ""
    },
    {
        question: "One of the players who died first every round hits his controller really hard against the table. What are your thoughts?",
        id: 4,
        answerA: "Call out his toxicity and offer support",
        nutricAdderA: 1,
        idNextQuestionA: 5,
        answerB: "Do your best to hold in your laughter",
        toxicAdderB: 1,
        idNextQuestionB: 5,
        answerC: "",
        answerD: ""
    },
    {
        question: "The game is over and you get hungry, time for some food! The line is really long, do you...",
        id: 5,
        answerA: "I’m not dealing with this right now",
        toxicAdderA: 2,
        idNextQuestionA: 6,
        answerB: "Patiently go to the back of the line",
        nutricAdderB: 2,
        idNextQuestionB: 7,
        answerC: "",
        answerD: ""
    },
    {
        question: "You run into someone while looking around for something else to do and they start flirting with you! What do you do?",
        id: 6,
        answerA: "Flirt back",
        extravertAdderA: 2,
        
        answerB: "Laugh a bit and make some small talk",
        nutricAdderB: 2,

        answerC: "Ignore/pretend you didn't hear it",
        introvertAdderC: 2,

        answerD: "Shut it down immediately",
        toxicAdderD: 2,
                
        idNextQuestionA: 10,
        idNextQuestionB: 10,
        idNextQuestionC: 11,
        idNextQuestionD: 11
    },
    {
        question: "Someone shamelessly cuts in front of you in line as you’re texting someone. What do you say?",
        id: 7,
        answerA: "Bombastic sideye",
        introvertAdderA: 2,
        
        answerB: "Get ready to swing",
        toxicAdderA: 2,

        answerC: "Remind them  there’s a line, but assume they didnt do it on purpose",
        nutricAdderC: 2,

        answerD: "Start making small talk with them",
        extravertAdderD: 2,
        
        idNextQuestionA: 11,
        idNextQuestionB: 11,
        idNextQuestionC: 10,
        idNextQuestionD: 10,
    },
    {
        question: "As you wait, a minievent starts! What do you do?",
        id: 10,
        answerA: "Join the minievent",
        competitiveAdderA: 2,
        idNextQuestionA: 12,
        answerB: "Stay away and daydream about food",
        casualAdderA: 2,
        idNextQuestionB: 13,
        answerC: "",
        answerD: ""
    },
    {
        question: "As you wait, a minievent starts! What do you do?",
        id: 11,
        answerA: "Join the minievent",
        competitiveAdderA: 2,
        idNextQuestionA: 14,
        answerB: "Stay away and daydream about food",
        casualAdderA: 2,
        idNextQuestionB: 15,
        answerC: "",
        answerD: ""
    },
    {
        question: "The minievent is to cut a piece of chocolate out of hundreds of layers of newspaper wrapped around it. Your groupmate has a swiss army knife you can use instead of the butterknife given. What do you do?",
        id: 12,

        answerA: "Give the chocolate to someone else",
        casualAdderA: 2,
        
        answerB: "Use swiss army knife",
        toxicAdderB: 2,

        answerC: "Use butterknife the ol' fashion way",
        nutricAdderC: 2,
        
        answerD: "Stick to the butterknife given, but find other sneakier ways of gaming the system.",
        competitiveAdderD: 2,

        idNextQuestionA: 16,
        idNextQuestionB: 16,
        idNextQuestionC: 16,
        idNextQuestionD: 16
    },
    {
        question: "You finally get around to getting food. What are you ordering?",
        id: 13,
        answerA: "Spicy ramen with all toppings + egg!",
        toxicAdderA: 2,
        idNextQuestionA: 16,
        answerB: "Rolled ice cream from Diced Ice!",
        nutricAdderB: 2,
        idNextQuestionB: 16,
        answerC: "",
        answerD: ""
    },
    {
        question: "the minievent is to cut a piece of chocolate out of hundreds of layers of newspaper wrapped around it. Your groupmate has a swiss army knife you can use instead of the butterknife given. What do you do?",
        id: 14,
        answerA: "Give the chocolate to someone else",
        casualAdderA: 2,
        
        answerB: "Use swiss army knife",
        toxicAdderB: 2,

        answerC: "Use butterknife",
        nutricAdderC: 2,
        
        answerD: "Stick to the butterknife given, but find other sneakier ways of gaming the system.",
        competitiveAdderD: 2,

        idNextQuestionA: 16,
        idNextQuestionB: 16,
        idNextQuestionC: 16,
        idNextQuestionD: 16
    },
    {
        question: "You finally get to the start of the line, what are you ordering?",
        id: 15,
        answerA: "Spicy ramen with all toppings + egg!",
        toxicAdderA: 2,
        idNextQuestionA: 16,
        answerB: "Rolled ice cream from Diced Ice!",
        nutricAdderB: 2,
        idNextQuestionB: 16,
        answerC: "",
        answerD: ""
    },

    {
        question: "The minievent ends, there’s a few minutes left of General Meeting. What do you do?",
        id: 16,

        answerA: "Capture the memory at the photobooth",
        casualAdderA: 2,
        
        answerB: "Leave without saying goodbye",
        toxicAdderB: 2,

        answerC: "Play one last game of switch games",
        competitiveAdderC: 2,
        
        answerD: "Help cleanup",
        nutricAdderC: 2,

        idNextQuestionA: 17,
        idNextQuestionB: 17,
        idNextQuestionC: 17,
        idNextQuestionD: 17
    },

    {
        question: "Thanks for doing our Personality Quiz! Be sure to check us out at Clubfest and General Meeting in September!",
        id: 17,

        answerA: "See my MEL Exec",
        answerB: "",
        answerC: "",
        answerD: "",

        idNextQuestionA: 18
    },

    {
        question: "N/A",
        id: 18
    }
]

export default QuizBank;