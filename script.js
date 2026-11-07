// QUIZMASTER JAVASCRIPT

// Subject Search
const searchBox = document.getElementById("subjectSearch");
const subjectCards = document.querySelectorAll(".subject-card");

searchBox.addEventListener("input", function () {
    const value = this.value.toLowerCase();

    subjectCards.forEach(card => {
        card.style.display = card.innerText.toLowerCase().includes(value)
            ? ""
            : "none";
    });
});

// Dark Mode
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    themeBtn.textContent =
        document.body.classList.contains("dark-mode") ? "☀️" : "🌙";

    localStorage.setItem(
        "quizTheme",
        document.body.classList.contains("dark-mode") ? "dark" : "light"
    );
});

if (localStorage.getItem("quizTheme") === "dark") {
    document.body.classList.add("dark-mode");
    themeBtn.textContent = "☀️";
}

// Question Bank
const questions = [
    {
        subject: "GK",
        difficulty: "Easy",
        q: ["What is the capital of India?", "भारत की राजधानी क्या है?"],
        options: [
            ["Mumbai", "Delhi", "Kolkata", "Chennai"],
            ["मुंबई", "दिल्ली", "कोलकाता", "चेन्नई"]
        ],
        answer: 1
    },
    {
        subject: "GK",
        difficulty: "Medium",
        q: ["Who wrote the Indian National Anthem?", "भारत का राष्ट्रगान किसने लिखा?"],
        options: [
            ["Mahatma Gandhi", "Rabindranath Tagore", "Nehru", "Subhash Bose"],
            ["महात्मा गांधी", "रवींद्रनाथ टैगोर", "नेहरू", "सुभाष बोस"]
        ],
        answer: 1
    },
    {
        subject: "GK",
        difficulty: "Hard",
        q: ["When did the Indian Constitution come into force?", "भारतीय संविधान कब लागू हुआ?"],
        options: [
            ["1947", "1949", "1950", "1952"],
            ["1947", "1949", "1950", "1952"]
        ],
        answer: 2
    },
    {
        subject: "Computer",
        difficulty: "Easy",
        q: ["What is the brain of a computer?", "कंप्यूटर का मस्तिष्क किसे कहते हैं?"],
        options: [
            ["Mouse", "CPU", "Keyboard", "Monitor"],
            ["माउस", "CPU", "कीबोर्ड", "मॉनिटर"]
        ],
        answer: 1
    },
    {
        subject: "Computer",
        difficulty: "Medium",
        q: ["What does HTML stand for?", "HTML का पूरा नाम क्या है?"],
        options: [
            ["Hyper Text Markup Language", "High Text Machine Language", "Hyper Tool Markup Language", "Home Text Language"],
            ["हाइपर टेक्स्ट मार्कअप लैंग्वेज", "हाई टेक्स्ट मशीन लैंग्वेज", "हाइपर टूल मार्कअप लैंग्वेज", "होम टेक्स्ट लैंग्वेज"]
        ],
        answer: 0
    },
    {
        subject: "Computer",
        difficulty: "Hard",
        q: ["Which memory is volatile?", "कौन-सी मेमोरी अस्थायी होती है?"],
        options: [
            ["ROM", "Hard Disk", "RAM", "DVD"],
            ["ROM", "हार्ड डिस्क", "RAM", "DVD"]
        ],
        answer: 2
    },
    {
        subject: "Science",
        difficulty: "Easy",
        q: ["Which planet is known as the Red Planet?", "लाल ग्रह किसे कहा जाता है?"],
        options: [
            ["Earth", "Mars", "Venus", "Jupiter"],
            ["पृथ्वी", "मंगल", "शुक्र", "बृहस्पति"]
        ],
        answer: 1
    },
    {
        subject: "Science",
        difficulty: "Medium",
        q: ["What is the chemical formula of water?", "पानी का रासायनिक सूत्र क्या है?"],
        options: [
            ["CO2", "O2", "H2O", "NaCl"],
            ["CO2", "O2", "H2O", "NaCl"]
        ],
        answer: 2
    },
    {
        subject: "Science",
        difficulty: "Hard",
        q: ["Which gas do plants absorb during photosynthesis?", "प्रकाश संश्लेषण में पौधे कौन-सी गैस लेते हैं?"],
        options: [
            ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
            ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"]
        ],
        answer: 2
    },
    {
        subject: "Mathematics",
        difficulty: "Easy",
        q: ["What is 12 × 5?", "12 × 5 कितना होता है?"],
        options: [
            ["50", "55", "60", "65"],
            ["50", "55", "60", "65"]
        ],
        answer: 2
    },
    {
        subject: "Mathematics",
        difficulty: "Medium",
        q: ["What is the square of 15?", "15 का वर्ग कितना है?"],
        options: [
            ["125", "200", "225", "250"],
            ["125", "200", "225", "250"]
        ],
        answer: 2
    },
    {
        subject: "Mathematics",
        difficulty: "Hard",
        q: ["What is 25% of 400?", "400 का 25% कितना है?"],
        options: [
            ["50", "75", "100", "125"],
            ["50", "75", "100", "125"]
        ],
        answer: 2
    },
    {
        subject: "History",
        difficulty: "Easy",
        q: ["Who was the first Mughal emperor of India?", "भारत का पहला मुगल सम्राट कौन था?"],
        options: [
            ["Akbar", "Babur", "Shah Jahan", "Aurangzeb"],
            ["अकबर", "बाबर", "शाहजहाँ", "औरंगजेब"]
        ],
        answer: 1
    },
    {
        subject: "History",
        difficulty: "Medium",
        q: ["In which year did the Quit India Movement begin?", "भारत छोड़ो आंदोलन किस वर्ष शुरू हुआ?"],
        options: [
            ["1930", "1942", "1945", "1947"],
            ["1930", "1942", "1945", "1947"]
        ],
        answer: 1
    },
    {
        subject: "History",
        difficulty: "Hard",
        q: ["Who founded the Maurya Empire?", "मौर्य साम्राज्य की स्थापना किसने की?"],
        options: [
            ["Ashoka", "Bindusara", "Chandragupta Maurya", "Harsha"],
            ["अशोक", "बिंदुसार", "चंद्रगुप्त मौर्य", "हर्ष"]
        ],
        answer: 2
    },
    {
        subject: "English",
        difficulty: "Easy",
        q: ["What is the plural of 'Child'?", "'Child' का बहुवचन क्या है?"],
        options: [
            ["Childs", "Children", "Childes", "Childrens"],
            ["Childs", "Children", "Childes", "Childrens"]
        ],
        answer: 1
    },
    {
        subject: "English",
        difficulty: "Medium",
        q: ["Choose the correct spelling.", "सही वर्तनी चुनें।"],
        options: [
            ["Beautifull", "Beautiful", "Beutiful", "Butiful"],
            ["Beautifull", "Beautiful", "Beutiful", "Butiful"]
        ],
        answer: 1
    },
    {
        subject: "English",
        difficulty: "Hard",
        q: ["What is the past tense of 'Go'?", "'Go' का भूतकाल क्या है?"],
        options: [
            ["Goed", "Gone", "Went", "Going"],
            ["Goed", "Gone", "Went", "Going"]
        ],
        answer: 2
    }
];

// Quiz Variables
let quizQuestions = [];
let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;
let timerInterval;
let timeLeft = 300;
let language = "en";

// Elements
const quizArea = document.getElementById("quizArea");
const questionBox = document.getElementById("questionBox");
const answerOptions = document.getElementById("answerOptions");
const timerDisplay = document.getElementById("timer");
const questionCount = document.getElementById("questionCount");

// Subject Card Click
subjectCards.forEach(card => {
    card.addEventListener("click", () => {
        document.getElementById("subjectSelect").value =
            card.dataset.subject;

        document.getElementById("quizSetup").scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Daily Quiz
document.getElementById("dailyQuizBtn").addEventListener("click", () => {
    document.getElementById("difficulty").value = "Mixed";
    document.getElementById("quizSetup").scrollIntoView({
        behavior: "smooth"
    });
});

// Start Quiz
document.getElementById("startQuizBtn").addEventListener("click", startQuiz);

function startQuiz() {
    const subject = document.getElementById("subjectSelect").value;
    const difficulty = document.getElementById("difficulty").value;

    language = document.getElementById("language").value;

    timeLeft = Number(document.getElementById("quizTime").value) * 60;

    quizQuestions = questions.filter(q =>
        q.subject === subject &&
        (difficulty === "Mixed" || q.difficulty === difficulty)
    );

    if (quizQuestions.length === 0) {
        alert("No questions available for this selection.");
        return;
    }

    quizQuestions.sort(() => Math.random() - 0.5);

    currentQuestion = 0;
    score = 0;

    quizArea.hidden = false;
    quizArea.scrollIntoView({ behavior: "smooth" });

    showQuestion();
    startTimer();
}

// Show Question
function showQuestion() {
    selectedAnswer = null;

    const q = quizQuestions[currentQuestion];

    questionCount.textContent =
        `Question ${currentQuestion + 1} / ${quizQuestions.length}`;

    questionBox.textContent = q.q[language === "hi" ? 1 : 0];

    answerOptions.innerHTML = "";

    q.options[language === "hi" ? 1 : 0].forEach((option, index) => {
        const button = document.createElement("button");

        button.textContent = option;

        button.addEventListener("click", () => {
            if (selectedAnswer !== null) return;

            selectedAnswer = index;

            if (index === q.answer) {
                score++;
                button.style.background = "#b9f6ca";
            } else {
                button.style.background = "#ffcdd2";
            }

            answerOptions.querySelectorAll("button").forEach((btn, i) => {
                btn.disabled = true;

                if (i === q.answer) {
                    btn.style.border = "2px solid green";
                }
            });
        });

        answerOptions.appendChild(button);
    });

    document.getElementById("nextQuestionBtn").textContent =
        currentQuestion === quizQuestions.length - 1
            ? "Finish Quiz"
            : "Next Question →";
}

// Next Question
document.getElementById("nextQuestionBtn").addEventListener("click", () => {
    if (selectedAnswer === null) {
        alert(language === "hi"
            ? "पहले एक उत्तर चुनें।"
            : "Please select an answer first.");
        return;
    }

    currentQuestion++;

    if (currentQuestion < quizQuestions.length) {
        showQuestion();
    } else {
        finishQuiz();
    }
});

// Timer
function startTimer() {
    clearInterval(timerInterval);
    updateTimer();

    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimer();

        if (timeLeft <= 0) {
            finishQuiz();
        }
    }, 1000);
}

function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    timerDisplay.textContent =
        `Time: ${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

// Finish Quiz
function finishQuiz() {
    clearInterval(timerInterval);

    const total = quizQuestions.length;
    const percentage = Math.round((score / total) * 100);

    alert(
        language === "hi"
            ? `क्विज पूरा हुआ!\nसही उत्तर: ${score}/${total}\nस्कोर: ${percentage}%`
            : `Quiz Completed!\nCorrect Answers: ${score}/${total}\nScore: ${percentage}%`
    );

    saveResult(percentage);

    quizArea.hidden = true;

    document.getElementById("progress").scrollIntoView({
        behavior: "smooth"
    });
}

// Save Progress
function saveResult(percentage) {
    let history = JSON.parse(
        localStorage.getItem("quizHistory") || "[]"
    );

    history.push({
        score: percentage,
        date: new Date().toLocaleDateString()
    });

    localStorage.setItem("quizHistory", JSON.stringify(history));

    updateProgress();
}

// Update Progress
function updateProgress() {
    const history = JSON.parse(
        localStorage.getItem("quizHistory") || "[]"
    );

    const total = history.length;

    const best = total
        ? Math.max(...history.map(item => item.score))
        : 0;

    const average = total
        ? Math.round(history.reduce((sum, item) => sum + item.score, 0) / total)
        : 0;

    document.getElementById("totalQuizzes").textContent = total;
    document.getElementById("bestScore").textContent = best + "%";
    document.getElementById("averageScore").textContent = average + "%";
}

updateProgress();