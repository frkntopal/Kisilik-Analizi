function UI() {
    this.question_text = document.querySelector(".question_text"),
        this.next_btn = document.querySelector(".next_btn"),
        this.btn_start = document.querySelector(".btn_start"),
        this.question_index = document.querySelector(".question_index"),
        this.btn_quit = document.querySelector(".btn_quit"),
        this.quiz_box = document.querySelector(".quiz_box"),
        this.option_list = document.querySelector(".option_list"),
        this.selected_score = document.querySelector(".selected_score"),
        this.score_box = document.querySelector(".score_box")
}

UI.prototype.showScore = function(selectedScore, message) {
    let tag = `Puanınız ${selectedScore} : ${message(selectedScore)}`;
    document.querySelector(".score_box .score_text").innerHTML = tag;
}