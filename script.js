const quiz = new Quiz(questions);
const ui = new UI();


ui.next_btn.addEventListener("click", function() {
    if (quiz.questions.length != quiz.questionIndex + 1) {
        quiz.questionIndex += 1;
        showQuestion(quiz.getQuestion());
        showQuestionNumber(quiz.questionIndex + 1, quiz.questions.length);
        ui.next_btn.classList.remove("show");
    } else {
        console.log("quiz bitti");
        ui.quiz_box.classList.remove("active");
        ui.score_box.classList.add("active");
        ui.showScore(selectedScore, message)
    }
});

ui.btn_start.addEventListener("click", function() {
    if (quiz.questions.length != quiz.questionIndex) {

        showQuestion(quiz.getQuestion());
        showQuestionNumber(quiz.questionIndex + 1, quiz.questions.length);
        ui.quiz_box.classList.add("active");

    } else {
        console.log("quiz bitti");
    }
})

ui.btn_quit.addEventListener("click", function() {
    window.location.reload();
});



function showQuestion(soru) {
    let question = `<span>${soru.text}</span>`;
    let answer = '';

    for (let cevap in soru.options) {
        answer += `
        <div class = "option">
            <span onclick="selectOption('${cevap}', ${soru.points[cevap]})">
                <b>${cevap}</b>: ${soru.options[cevap]}
            </span>
        </div>
        `
    }
    ui.question_text.innerHTML = question;
    ui.option_list.innerHTML = answer;

}

let selectedScore = 0;
let currentQuestion = 0;

function selectOption(option, score) {
    quiz.totalScore += selectedScore;
    selectedScore += score;
    currentQuestion++;
    ui.selected_score.innerHTML = "Toplam puanın: " + selectedScore;
    console.log("Seçilen cevabın puanı:", selectedScore);

}

const option_list = ui.option_list;
option_list.addEventListener("click", function() {
    for (let i = 0; i < option_list.children.length; i++) {
        option_list.children[i].classList.add("disabled");
    }
});

function message(selectedScore) {
    if (selectedScore >= 60) {
        return 'İnsanlar sana kırılgan bir eşya muamelesi yapıyorlar. Kibirli, bencil ve aşırı baskın birisi olarak görülüyorsun. İnsanlar size hayranlık duyup sizin gibi olmak isteyebilirler ama size her zaman güvenmezler ve sizinle çok yakın ilişkide olmaktan kaçınırlar.'
    } else if (selectedScore > 50 && selectedScore <= 60) {
        return 'insanlar sizi heyecan verici, havai, düşüncesiz yapıda, doğal liderlik özellikleri olan, her zaman doğru olmasa da hızlı karar veren birisi olarak tanırlar. Seni cesur, maceraperest birisi olarak tanırlar; her şeyi bir kez denemek isteyen, macera yaşamak için fırsatları kaçırmayan birisi.. Yaydığınız heyecandan dolayı insanlar sizinle aynı iş yerinde yaşamaktan zevk alırlar.'
    } else if (selectedScore > 40 && selectedScore <= 50) {
        return 'İnsanlar sizi taze, canlı, çekici, eğlendirici, pratik ve daima ilginç birisi olarak görürler; her zaman ilgi odağı olan ama çok aşırıya kaçmayacak kadar da dengeli birisi.. İnsanlar sizi ayrıca iyiliksever, düşünceli, anlayışlı ve kendilerini neşelendiren ve rahatlatan birisi olarak tanırlar.'
    } else if (selectedScore > 30 && selectedScore <= 40) {
        return 'İnsanlar sizi mantıklı, ihtiyatlı, dikkatli ve pratik birisi olarak görürler. Sizi zeki, yetenekli ve hünerli ama alçak gönüllü olarak tanırlar. Çok hızlı arkadaşlık kurmayan, ama arkadaşlarına karşı çok sadık olan ve onlardan da aynı şeyi bekleyen birisiniz.'
    } else {
        return '30 puanın altını tanımlayan bir kişilik yoktur.'
    }
}

function showQuestionNumber(soruSirasi, toplamSoru) {
    let tag = `<span class="badge bg-dark">${soruSirasi} / ${toplamSoru}</span>`;
    ui.question_index.innerHTML = tag;
}