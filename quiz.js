const question = [
    {
        question: "What is the full form of HTTP?",
        answer: [
            { text: "Hyper text tranction protocol", current: "false" },
            { text: "Hyper test tranction protocol", current: "false" },
            { text: "Hyper text transform protocol", current: "true" },
            { text: "Hyper text tranction profile", current: "false" },
        ]
    },
    {
        question: "What is the full form of CSS?",
        answer: [
            { text: "Case casding style sheet", current: "true" },
            { text: "Copper casding style sheet", current: "false" },
            { text: "Case call style sheet", current: "false" },
            { text: "Case casding styleing sheet", current: "false" },
        ]
    },
    {
        question: "Which property is used to change text color?",
        answer: [
            { text: "Font-Color", current: "false" },
            { text: "Text-color", current: "false" },
            { text: "color", current: "true" },
            { text: "color_font", current: "false" },
        ]
    },
    {
        question: "Which property is used to change background-color?",
        answer: [
            { text: "Font-Color", current: "false" },
            { text: "Text-color", current: "false" },
            { text: "color", current: "false" },
            { text: "background-color", current: "true" },
        ]
    },
    {
        question: "Which tag is used to show image in body?",
        answer: [
            { text: "image", current: "false" },
            { text: "img", current: "true" },
            { text: "img-body", current: "false" },
            { text: "images", current: "false" },
        ]
    },
    {
        question: "Is JavaScript a server-side scripting language?",
        answer: [
            { text: "true", current: "true" },
            { text: "false", current: "false" },
            { text: "none", current: "false" },
            { text: "all above", current: "false" },
        ]
    },
    {
        question: "Which extension is used in JavaScript?",
        answer: [
            { text: ".css", current: "false" },
            { text: ".py", current: "false" },
            { text: ".java", current: "false" },
            { text: ".js", current: "true" },
        ]
    },
    {
        question: "Which extension is used in HTML?",
        answer: [
            { text: ".css", current: "false" },
            { text: ".py", current: "false" },
            { text: ".html", current: "true" },
            { text: ".js", current: "false" },
        ]
    },
    {
        question: "Which extension is used in Python?",
        answer: [
            { text: ".css", current: "false" },
            { text: ".py", current: "true" },
            { text: ".java", current: "false" },
            { text: ".js", current: "false" },
        ]
    },
    {
        question: "Which property is used to change the font-size?",
        answer: [
            { text: "font", current: "false" },
            { text: "font-family", current: "false" },
            { text: ".font-size", current: "true" },
            { text: "size", current: "false" },
        ]
    }
];

let que = document.getElementById("que");
let ansbtn = document.getElementById("ans-btn");
let nextbtn = document.getElementById("btn1");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextbtn.innerHTML = "NEXT";
    showQuestion();
}

function showQuestion() {
    reset();
    let currentQuestion = question[currentQuestionIndex];
    que.innerHTML = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add('btn');
        ansbtn.appendChild(button);

        if (answer.current === "true") {
            button.dataset.current = answer.current;
        }

        button.addEventListener('click', selectAnswer);
    });
}

function reset() {
    nextbtn.style.display = "none";
    while (ansbtn.firstChild) {
        ansbtn.removeChild(ansbtn.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCurrent = selectedBtn.dataset.current === "true";

    if (isCurrent) {
        selectedBtn.classList.add("current");
        score++;
    } else {
        selectedBtn.classList.add("notcurrent");
    }

    Array.from(ansbtn.children).forEach(button => {
        if (button.dataset.current === "true") {
            button.classList.add("current");
        }
        button.disabled = true;
    });

    nextbtn.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < question.length) {
        showQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    reset();
    que.innerHTML = `You scored ${score} out of ${question.length}`;
    nextbtn.innerHTML = "Play Again";
    nextbtn.style.display = "block";
}

nextbtn.addEventListener('click', () => {
    if (currentQuestionIndex < question.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();