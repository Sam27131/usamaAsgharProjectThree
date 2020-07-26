// Empty object to store code
const GOTQuiz = {};

// Organizing init function to pass to document ready
GOTQuiz.init = () => {
    GOTQuiz.submitQuestions();
    GOTQuiz.scrollToSection();
}

//Creating an object to contain the results that will be dynamically added to the HTML when the user completes all the questions and clicks on Final Results button
const characterResult = {
    tyrionLannister: {
        title: "You are Tyrion Lannister",
        characterDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi blanditiis sunt libero hic dicta est facere iste assumenda eveniet at veritatis ex dolores repudiandae aliquam asperiores mollitia sequi autem fugit fuga, quisquam tenetur ad aliquid esse. Eum repellendus ad qui aliquid et id reiciendis beatae? Deleniti odit tempore omnis. Fuga!1"
    },
    daenerysTargaryen: {
        title: "You are Daenerys Targaryen",
        characterDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi blanditiis sunt libero hic dicta est facere iste assumenda eveniet at veritatis ex dolores repudiandae aliquam asperiores mollitia sequi autem fugit fuga, quisquam tenetur ad aliquid esse. Eum repellendus ad qui aliquid et id reiciendis beatae? Deleniti odit tempore omnis. Fuga!2"
    },
    jonSnow: {
        title: "You are Jon Snow",
        characterDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi blanditiis sunt libero hic dicta est facere iste assumenda eveniet at veritatis ex dolores repudiandae aliquam asperiores mollitia sequi autem fugit fuga, quisquam tenetur ad aliquid esse. Eum repellendus ad qui aliquid et id reiciendis beatae? Deleniti odit tempore omnis. Fuga!3"
    },
    robbStark: {
        title: "You are Robb Stark",
        characterDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi blanditiis sunt libero hic dicta est facere iste assumenda eveniet at veritatis ex dolores repudiandae aliquam asperiores mollitia sequi autem fugit fuga, quisquam tenetur ad aliquid esse. Eum repellendus ad qui aliquid et id reiciendis beatae? Deleniti odit tempore omnis. Fuga!4"
    },
    nedStark: {
        title: "You are Ned Stark",
        characterDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi blanditiis sunt libero hic dicta est facere iste assumenda eveniet at veritatis ex dolores repudiandae aliquam asperiores mollitia sequi autem fugit fuga, quisquam tenetur ad aliquid esse. Eum repellendus ad qui aliquid et id reiciendis beatae? Deleniti odit tempore omnis. Fuga!5"
    },
    threeEyedRaven: {
        title: "You are the Three Eyed Raven",
        characterDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi blanditiis sunt libero hic dicta est facere iste assumenda eveniet at veritatis ex dolores repudiandae aliquam asperiores mollitia sequi autem fugit fuga, quisquam tenetur ad aliquid esse. Eum repellendus ad qui aliquid et id reiciendis beatae? Deleniti odit tempore omnis. Fuga!6"
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

// A function to record the user's answers to the 5 questions
GOTQuiz.submitQuestions = () => {
    $('button').one('click', function(event) {
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

        // Creating an array of the lengths defined above
        // Will use .filter() function to produce a special circumstances result where 2 characters have equal lengths
        const choicesArray = [tyrionChoice, daenerysChoice, jonChoice, robbChoice, nedChoice];
        [0, 2, 2, 1, 0]

        // If else statements to compare the lengths of each property after all 5 questions have been answered
        // If the length of any one of the properties is greater than or equal to 3, that property's matching character result will be appended to the .result section in the HTML
        if (tyrionChoice >= 3) {
            const tyrionResult = $('.result').append(`
            <h3>${characterResult.tyrionLannister.title}</h3>
            <p>${characterResult.tyrionLannister.characterDescription}</p>
        `);
        } else if (daenerysChoice >= 3) {
            const daenerysResult = $('.result').append(`
            <h3>${characterResult.daenerysTargaryen.title}</h3>
            <p>${characterResult.daenerysTargaryen.characterDescription}</p>
        `);
        } else if (jonChoice >= 3) {
            const jonResult = $('.result').append(`
            <h3>${characterResult.jonSnow.title}</h3>
            <p>${characterResult.jonSnow.characterDescription}</p>
        `);
        } else if (robbChoice >= 3) {
            const robbResult = $('.result').append(`
            <h3>${characterResult.robbStark.title}</h3>
            <p>${characterResult.robbStark.characterDescription}</p>
        `);
        } else if (nedChoice >= 3) {
            const nedResult = $('.result').append(`
            <h3>${characterResult.nedStark.title}</h3>
            <p>${characterResult.nedStark.characterDescription}</p>
        `);
        } else if (tyrionChoice && daenerysChoice && jonChoice && robbChoice && nedChoice === 1) {
            const oneEyedRavenResult = $('.result').append(`
            <h3>${characterResult.oneEyedRaven.title}</h3>
            <p>${characterResult.oneEyedRaven.characterDescription}</p>
        `);
        } else { // Below code was created referencing example from following website https://stackoverflow.com/questions/45580928/using-jquery-and-math-random-to-select-nested-objects-properties
            // Credits go to user adeneo
            // This code will run when user selection results in two characters having a length of 2 each
            // In this case a random character will be chosen from object characterResult
            let keys = Object.keys(characterResult);
            let randomCharacter = keys[Math.floor(Math.random() * keys.length)];
            $('.result').append(`
            <h3>${characterResult[randomCharacter].title}</h3>
            <p>${characterResult[randomCharacter].characterDescription}</p>
        `);
        }
        console.log(choices);
    });
}

$(function () {
    GOTQuiz.init();
});

