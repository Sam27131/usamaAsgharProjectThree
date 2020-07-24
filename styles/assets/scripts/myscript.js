// Empty object to store code
const GOTQuiz = {};

// Organizing init function to pass to document ready
GOTQuiz.init = function() {
    GOTQuiz.submitQuestions();
    // GOTQuiz.finalResult();
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
    }
}

// A function to record the user's choices to the 5 questions
GOTQuiz.submitQuestions = function() {
    $('form').on('submit', function(event) {
        // Prevent default when submitting the answer
        event.preventDefault();
        // Store the user's choice
        const choices = {
            tyrion: $('input[value=tyrion]:checked'),
            daenerys: $('input[value=daenerys]:checked'),
            jon: $('input[value=jon]:checked'),
            robb: $('input[value=robb]:checked'),
            ned: $('input[value=ned]:checked'),
        };
        if (choices.tyrion.length >= 3) {
            $('.result').append(`
            <h3>${characterResult.tyrionLannister.title}</h3>
            <p>${characterResult.tyrionLannister.characterDescription}</p>
        `);
        } else if (choices.daenerys.length >= 3) {
            $('.result').append(`
            <h3>${characterResult.daenerysTargaryen.title}</h3>
            <p>${characterResult.daenerysTargaryen.characterDescription}</p>
        `);
        } else if (choices.jon.length >= 3) {
            $('.result').append(`
            <h3>${characterResult.jonSnow.title}</h3>
            <p>${characterResult.jonSnow.characterDescription}</p>
        `);
        } else if (choices.robb.length >= 3) {
            $('.result').append(`
            <h3>${characterResult.robbStark.title}</h3>
            <p>${characterResult.robbStark.characterDescription}</p>
        `);
        } else if (choices.ned.length >= 3) {
            $('.result').append(`
            <h3>${characterResult.nedStark.title}</h3>
            <p>${characterResult.nedStark.characterDescription}</p>
        `);
        }
        console.log(choices);
    });
}

// GOTQuiz.finalResult = function() {
//     if (tyrion.length >= 3) {
//         $('.result').append(`
//         <h3>${characterResult.tyrionLannister.title}</h3>
//         <p>${characterResult.tyrionLannister.characterDescription}</p>
//     `);
//     }
// }

$(function () {
    GOTQuiz.init();
});

