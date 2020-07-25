// Empty object to store code
const GOTQuiz = {};

// Organizing init function to pass to document ready
GOTQuiz.init = function() {
    GOTQuiz.submitQuestions();
    GOTQuiz.scrollToSection();
    GOTQuiz.scrollToResult();
}

//Creating an object to contain the results that will be dynamically added to the HTML when the user completes all the questions and clicks on Final Results button
const characterResult = {
    tyrionLannister: {
        title: "You are Tyrion Lannister",
        characterDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi blanditiis sunt libero hic dicta est facere iste assumenda eveniet at veritatis ex dolores repudiandae aliquam asperiores mollitia sequi autem fugit fuga, quisquam tenetur ad aliquid esse. Eum repellendus ad qui aliquid et id reiciendis beatae? Deleniti odit tempore omnis. Fuga!"
    },
    daenerysTargaryen: {
        title: "You are Daenerys Targaryen",
        characterDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi blanditiis sunt libero hic dicta est facere iste assumenda eveniet at veritatis ex dolores repudiandae aliquam asperiores mollitia sequi autem fugit fuga, quisquam tenetur ad aliquid esse. Eum repellendus ad qui aliquid et id reiciendis beatae? Deleniti odit tempore omnis. Fuga!"
    },
    jonSnow: {
        title: "You are Jon Snow",
        characterDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi blanditiis sunt libero hic dicta est facere iste assumenda eveniet at veritatis ex dolores repudiandae aliquam asperiores mollitia sequi autem fugit fuga, quisquam tenetur ad aliquid esse. Eum repellendus ad qui aliquid et id reiciendis beatae? Deleniti odit tempore omnis. Fuga!"
    },
    robbStark: {
        title: "You are Robb Stark",
        characterDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi blanditiis sunt libero hic dicta est facere iste assumenda eveniet at veritatis ex dolores repudiandae aliquam asperiores mollitia sequi autem fugit fuga, quisquam tenetur ad aliquid esse. Eum repellendus ad qui aliquid et id reiciendis beatae? Deleniti odit tempore omnis. Fuga!"
    },
    nedStark: {
        title: "You are Ned Stark",
        characterDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi blanditiis sunt libero hic dicta est facere iste assumenda eveniet at veritatis ex dolores repudiandae aliquam asperiores mollitia sequi autem fugit fuga, quisquam tenetur ad aliquid esse. Eum repellendus ad qui aliquid et id reiciendis beatae? Deleniti odit tempore omnis. Fuga!"
    },
    oneEyedRaven: {
        title: "You are the One Eyed Raven",
        characterDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi blanditiis sunt libero hic dicta est facere iste assumenda eveniet at veritatis ex dolores repudiandae aliquam asperiores mollitia sequi autem fugit fuga, quisquam tenetur ad aliquid esse. Eum repellendus ad qui aliquid et id reiciendis beatae? Deleniti odit tempore omnis. Fuga!"
    }
}

GOTQuiz.scrollToSection = function() {
    // Add smooth scrolling to the next questions by creating a click event on all a tags
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

GOTQuiz.scrollToResult = function() {
    // Add smooth scrolling to the next questions by creating a click event on all a tags
    $('button').on('click', function(event) {
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
GOTQuiz.submitQuestions = function() {
    $('button').on('click', function(event) {
        // Prevent default when submitting the answer
        event.preventDefault();
        // Store the user's choices in an object named 'choices'
        const choices = {
            tyrion: $('input[value=tyrion]:checked'),
            daenerys: $('input[value=daenerys]:checked'),
            jon: $('input[value=jon]:checked'),
            robb: $('input[value=robb]:checked'),
            ned: $('input[value=ned]:checked'),
        };
        // If else statements to compare the lengths of each property after all 5 questions have been answered
        // If the length of any one of the properties is greater than or equal to 3, that property's matching character result will be appended to the .result section in the HTML
        // If the length of any 2 options is 2
        const tyrionChoice = choices.tyrion.length;
        const daenerysChoice = choices.daenerys.length;
        const jonChoice = choices.jon.length;
        const robbChoice = choices.robb.length;
        const nedChoice = choices.ned.length;

        if (tyrionChoice >= 3) {
            $('.result').append(`
            <h3>${characterResult.tyrionLannister.title}</h3>
            <p>${characterResult.tyrionLannister.characterDescription}</p>
        `);
        } else if (daenerysChoice >= 3) {
            $('.result').append(`
            <h3>${characterResult.daenerysTargaryen.title}</h3>
            <p>${characterResult.daenerysTargaryen.characterDescription}</p>
        `);
        } else if (jonChoice >= 3) {
            $('.result').append(`
            <h3>${characterResult.jonSnow.title}</h3>
            <p>${characterResult.jonSnow.characterDescription}</p>
        `);
        } else if (robbChoice >= 3) {
            $('.result').append(`
            <h3>${characterResult.robbStark.title}</h3>
            <p>${characterResult.robbStark.characterDescription}</p>
        `);
        } else if (nedChoice >= 3) {
            $('.result').append(`
            <h3>${characterResult.nedStark.title}</h3>
            <p>${characterResult.nedStark.characterDescription}</p>
        `);
        } else if (tyrionChoice && daenerysChoice && jonChoice && robbChoice && nedChoice === 1) {
            $('.result').append(`
            <h3>${characterResult.oneEyedRaven.title}</h3>
            <p>${characterResult.oneEyedRaven.characterDescription}</p>
        `);
        }
        console.log(choices);
    });
}

$(function () {
    GOTQuiz.init();
});

