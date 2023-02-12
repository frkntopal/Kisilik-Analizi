const quiz = new Quiz(sorular);
const ui = new UI();


document.querySelector(".next_btn").addEventListener("click", function() {
    if (quiz.questions.length != quiz.questionIndex + 1) {
        quiz.questionIndex += 1;
        soruGoster(quiz.soruGetir());
        document.querySelector(".next_btn").classList.remove("show");
    } else {
        console.log("quiz bitti");
    }
});

document.querySelector(".btn_start").addEventListener("click", function() {
    if (quiz.questions.length != quiz.questionIndex) {
        document.querySelector(".quiz_box").classList.add("active");
        soruGoster(quiz.soruGetir());
        quiz.questionIndex += 1;

    } else {
        console.log("quiz bitti");
    }
})

function soruGoster(ask) {
    let question = `<span>${ask.text}</span>`;
    let answer = '';

    for (let cevap in ask.options) {
        answer += `
        <div class = "option">
            <span onclick="selectOption('${cevap}', ${ask.points[cevap]})">
                <b>${cevap}</b>: ${ask.options[cevap]}
            </span>
        </div>
        `
    }
    ui.question_text.innerHTML = question;
    document.querySelector(".option_list").innerHTML = answer;

}

let selectedScore = 0;
let currentQuestion = 0;

function selectOption(option, score) {
    selectedScore += score;
    currentQuestion++;
    document.querySelector(".selected_score").innerHTML = "Toplam puanın: " + selectedScore;
    console.log("Seçilen cevabın puanı:", selectedScore);
    if (currentQuestion === 9) {
        if (selectedScore >= 60) {
            alert('İnsanlar sana kırılgan bir eşya muamelesi yapıyorlar. Kibirli, bencil ve aşırı baskın birisi olarak görülüyorsun. İnsanlar size hayranlık duyup sizin gibi olmak isteyebilirler ama size her zaman güvenmezler ve sizinle çok yakın ilişkide olmaktan kaçınırlar.')
        } else if (selectedScore > 50 && selectedScore <= 60) {
            alert('insanlar sizi heyecan verici, havai, düşüncesiz yapıda, doğal liderlik özellikleri olan, her zaman doğru olmasa da hızlı karar veren birisi olarak tanırlar. Seni cesur, maceraperest birisi olarak tanırlar; her şeyi bir kez denemek isteyen, macera yaşamak için fırsatları kaçırmayan birisi.. Yaydığınız heyecandan dolayı insanlar sizinle aynı iş yerinde yaşamaktan zevk alırlar.')
        } else if (selectedScore > 40 && selectedScore <= 50) {
            alert('İnsanlar sizi taze, canlı, çekici, eğlendirici, pratik ve daima ilginç birisi olarak görürler; her zaman ilgi odağı olan ama çok aşırıya kaçmayacak kadar da dengeli birisi.. İnsanlar sizi ayrıca iyiliksever, düşünceli, anlayışlı ve kendilerini neşelendiren ve rahatlatan birisi olarak tanırlar.')
        } else if (selectedScore > 30 && selectedScore <= 40) {
            alert('İnsanlar sizi mantıklı, ihtiyatlı, dikkatli ve pratik birisi olarak görürler. Sizi zeki, yetenekli ve hünerli ama alçak gönüllü olarak tanırlar. Çok hızlı arkadaşlık kurmayan, ama arkadaşlarına karşı çok sadık olan ve onlardan da aynı şeyi bekleyen birisiniz.')
        } else {
            alert('30 puanın altını tanımlayan bir kişilik yoktur.')
        }
    }
}

const option_list = document.querySelector(".option_list");
option_list.addEventListener("click", function() {
    for (let i = 0; i < option_list.children.length; i++) {
        option_list.children[i].classList.add("disabled");
    }
});