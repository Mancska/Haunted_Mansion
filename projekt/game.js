const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const descriptionElement = document.getElementById("description");
const userInputElement = document.getElementById("userInput");
const submitButton = document.getElementById("submitButton");

// Define rooms and their descriptions
const rooms = {
    entranceHall: {
        description: "You stand in the grand entrance hall. Cobwebs hang from the chandeliers, and the air is thick with dust.",
        actions: {
            lookAround: "You see several doors leading to different parts of the mansion. Which door will you choose?",
            leave: "You decide to leave the mansion."
        },
    },
    library: {
        description: "You enter a dimly lit library. Books line the shelves, and an eerie silence fills the room.",
        actions: {
            readBook: "You pick up an old, dusty book and begin to read. It contains cryptic symbols and arcane rituals.",
            leave: "You decide to leave the library."
        },
    },
    diningRoom: {
        description: "You find yourself in the dining room. The table is set for a long-forgotten feast.",
        actions: {
            investigateTable: "You notice a peculiar arrangement of dishes and utensils on the table.",
            leave: "You decide to leave the dining room."
        },
    },
    // Add more rooms and actions as needed
};

// Initialize game state
let currentRoom = rooms.entranceHall;

// Display game text on the canvas
function displayText(text) {
    descriptionElement.textContent = text;
}

// Handle user input
function processInput() {
    const input = userInputElement.value.toLowerCase();
    userInputElement.value = "";

    if (currentRoom.actions[input]) {
        const actionResult = currentRoom.actions[input];
        displayText(actionResult);

        if (actionResult === "leave") {
            // Handle leaving the current room or ending the game
            // For example, you can change the current room here
            if (currentRoom === rooms.entranceHall) {
                currentRoom = rooms.library;
            } else if (currentRoom === rooms.library) {
                // Transition to another room or end the game
            }
        }
    } else {
        displayText("That action is not possible here.");
    }
}

// Listen for the "Submit" button click
submitButton.addEventListener("click", processInput);

// Initial game text
displayText(currentRoom.description);
