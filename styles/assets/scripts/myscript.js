// Pseudocode:
// ----------------------------------------------------------------------------------------------------------------

// This quiz will ask the user to answer 5 personality based questions and click on a submit button when done
// Based on their answers, the user will be matched to the character whose traits they relate to

// The header will contain info on what the purpose of the quiz is and will also contain a link to move onto the first question
// Each section will include a question and 5 options to choose from. It will also have a button that will move the user onto the next question using the GOTQuiz.scrollToSection() function
// The last question will have a button that will trigger the GOTQuiz.submitQuestions() function to calculate the result and append the appropriate info from the object 'characterResult' onto the result section in the HTML
// Lastly there will be a button that shows up in the result section allowing the user to start the quiz again using the GOTQuiz.restartQuiz() function
// All functions mentioned above are explained below

// -----------------------------------------------------------------------------------------------------------------

// Creating a namespace to store code
const GOTQuiz = {};

// Organizing init function to pass to document ready
GOTQuiz.init = () => {
    GOTQuiz.submitQuestions();
    GOTQuiz.scrollToSection();
    GOTQuiz.restartQuiz();
}

//Creating an object to contain the results that will be dynamically added to the HTML when the user completes all the questions and clicks on Final Results button
const characterResult = {
    tyrionLannister: {
        title: "You are Tyrion Lannister",
        characterDescription: "You've learned to enjoy life to the fullest knowing it can end at any time. You've lived a tough life but your strong resilience, vast knowledge and quick wit has earned you respect.",
        characterPicture: "src='./styles/assets/tyrionLannister.jpg' alt='Picture of Tyrion Lannister'"
    },
    daenerysTargaryen: {
        title: "You are Daenerys Targaryen",
        characterDescription: "You are a feared individual and your desire for revenge has led you to make great acheivements in your life. Those close to you, however, trust you implicitly and are aware of your kindness.",
        characterPicture: "src='./styles/assets/daenerys.jpg' alt='Picture of Daenerys Targaryen'"
    },
    jonSnow: {
        title: "You are Jon Snow",
        characterDescription: "Your dedication is your greatest quality. You put others' needs over yours to a fault and go beyond the call of duty. This has gained you the loyalty of those close to you and has allowed you to become an excellent leader.",
        characterPicture: "src='./styles/assets/jonSnow.png' alt='Picture of Jon Snow'"
    },
    robbStark: {
        title: "You are Robb Stark",
        characterDescription: "You will not rest until justice is served. You spend your life making sure those who are too weak to defend themselves against injustice have you as their protector.",
        characterPicture: "src='./styles/assets/robbStark.jpg' alt='Picture of Robb Stark'"
    },
    nedStark: {
        title: "You are Ned Stark",
        characterDescription: "You have lived your life with one aim; to live and die honourably. You are undyingly loyal to your King, your family and those who have placed trust in you.",
        characterPicture: "src='./styles/assets/nedStark.jpg' alt='Picture of Ned Stark'"
    },
    threeEyedRaven: {
        title: "You are the Three Eyed Raven",
        characterDescription: "You are an immensely powerful being with the ability to incorporate all desirable qualities. You keep your talents hidden but this makes you intriguing and mysterious.",
        characterPicture: "src='./styles/assets/threeEyedRaven.jpeg' alt='Picture of the Three Eyed Raven'"
    }
}

// Add smooth scrolling to the next questions by creating a click event on all a tags
GOTQuiz.scrollToSection = () => {
    $("a").on('click', function(event) {
        // Overriding default behavior
        event.preventDefault();
        // Store this.hash in a variable called hash
        // hash is used to reference the anchor part of a URL (the 'id' in this case)
        const hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 900);
    });
};

// A function that will refresh the page and allow the user to restart the quiz 
// The button will be revealed in the results section once the result is calculated and shown to the user
GOTQuiz.restartQuiz = () => {
    $('.refresh').on('click', function() {
        location.reload();
    })
}

// A function to record the user's answers to the 5 questions
GOTQuiz.submitQuestions = () => {
    $('.calculateResults').on('click', function(event) {
        // Prevent default when submitting the answer
        event.preventDefault();
        // Store the user's checked choices in an object named 'choices'
        const choices = {
            tyrion: $('input[value=tyrion]:checked'),
            daenerys: $('input[value=daenerys]:checked'),
            jon: $('input[value=jon]:checked'),
            robb: $('input[value=robb]:checked'),
            ned: $('input[value=ned]:checked'),
        };

        // Storing the lengths of each property / character from the object 'choices' in new variables
        const tyrionChoice = choices.tyrion.length;
        const daenerysChoice = choices.daenerys.length;
        const jonChoice = choices.jon.length;
        const robbChoice = choices.robb.length;
        const nedChoice = choices.ned.length;

        // If else statements to compare the lengths of each property after all 5 questions have been answered
        // If the length of any one of the properties is greater than or equal to 3, that property's matching character result will be appended to the .result section in the HTML
        // Some CSS styling is also added and the button that was hidden is revealed
        if (tyrionChoice >= 3) {
            $(".result").css({
                "padding": "50px 0"
            });
            $(".refresh, .buttonContainer").css({
            "display": "block"
            });
            $('.result').append(`
            <div class="wrapper">
                <h3>${characterResult.tyrionLannister.title}</h3>
                <img src="./styles/assets/tyrionLannister.jpg" alt="Picture of Tyrion Lannister">
                <p>${characterResult.tyrionLannister.characterDescription}</p>
            </div>
            `);
        } else if (daenerysChoice >= 3) {
            $(".result").css({
                "padding": "50px 0"
            });
            $(".refresh, .buttonContainer").css({
                "display": "block"
                });
            $('.result').append(`
            <div class="wrapper">
                <h3>${characterResult.daenerysTargaryen.title}</h3>
                <img src="./styles/assets/daenerys.jpg" alt="Picture of Daenerys Targaryen">
                <p>${characterResult.daenerysTargaryen.characterDescription}</p>        
            </div>
            `);
        } else if (jonChoice >= 3) {
            $(".result").css({
                "padding": "50px 0"
            });
            $(".refresh, .buttonContainer").css({
                "display": "block"
                });
            $('.result').append(`
            <div class="wrapper">
                <h3>${characterResult.jonSnow.title}</h3>
                <img src="./styles/assets/jonSnow.png" alt="Picture of Jon Snow">
                <p>${characterResult.jonSnow.characterDescription}</p>
            </div>
            `);
        } else if (robbChoice >= 3) {
            $(".result").css({
                "padding": "50px 0"
            });
            $(".refresh, .buttonContainer").css({
                "display": "block"
                });
            $('.result').append(`
            <div class="wrapper">
                <h3>${characterResult.robbStark.title}</h3>
                <img src="./styles/assets/robbStark.jpg" alt="Picture of Robb Stark">
                <p>${characterResult.robbStark.characterDescription}</p>
            </div>
            `);
        } else if (nedChoice >= 3) {
            $(".result").css({
                "padding": "50px 0"
            });
            $(".refresh, .buttonContainer").css({
                "display": "block"
                });
            $('.result').append(`
            <div class="wrapper">
                <h3>${characterResult.nedStark.title}</h3>
                <img src="./styles/assets/nedStark.jpg" alt="Picture of Ned Stark">
                <p>${characterResult.nedStark.characterDescription}</p>
            </div>
            `);
        // A special circumstances result where the length of each property is 1
        } else if (tyrionChoice && daenerysChoice && jonChoice && robbChoice && nedChoice === 1) {
            $(".result").css({
                "padding": "50px 0"
            });
            $(".refresh, .buttonContainer").css({
                "display": "block"
                });
            $('.result').append(`
            <div class="wrapper">
                <h3>${characterResult.threeEyedRaven.title}</h3>
                <img src="./styles/assets/threeEyedRaven.jpeg" alt="Picture of Three Eyed Raven">
                <p>${characterResult.threeEyedRaven.characterDescription}</p>
            </div>
            `);
        } else if (tyrionChoice + daenerysChoice + jonChoice + robbChoice + nedChoice !== 5) {
            alert("Please fill out all the questions")
        } else { // Below code was created referencing example from following website https://stackoverflow.com/questions/45580928/using-jquery-and-math-random-to-select-nested-objects-properties
            // Credits go to user adeneo
            // This code will run when user selection results in two characters having an equal length of 2
            // In this case a random character will be chosen from the object 'characterResult'
            let keys = Object.keys(characterResult);
            let randomCharacter = keys[Math.floor(Math.random() * keys.length)];
            $(".result").css({
                "padding": "50px 0"
            });
            $(".refresh, .buttonContainer").css({
                "display": "block"
                });
            $('.result').append(`
            <div class="wrapper">
                <h3>${characterResult[randomCharacter].title}</h3>
                <img ${characterResult[randomCharacter].characterPicture}>
                <p>${characterResult[randomCharacter].characterDescription}</p>
            </div>
        `);
        }
    });
}

// Document ready function
$(function () {
    GOTQuiz.init();
});

