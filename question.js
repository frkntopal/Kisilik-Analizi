class Soru {
    constructor(text, options, points) {
        this.text = text;
        this.options = options;
        this.points = points;
    }
}


let questions = [
    new Soru("1.Kendinizi ne zaman en iyi hissedersiniz?", { a: "Sabahları", b: "Öğlenden sonra ve akşama doğru", c: "Gecenin ilerleyen saatlerinde", }, { a: 4, b: 6, c: 8 }),
    new Soru("2-Nasıl yürürsünüz?", { a: "Hızlı ve uzun adımlarla", b: "Hızlı ve kısa adımlarla", c: "Normalden yavaş ve etrafa bakınarak", d: "Yavaş ve başı eğik", e: "Çok yavaş" }, { a: 4, b: 6, c: 8, d: 5, e: 2 }),
    new Soru("3-İnsanlarla konuşurken", { a: "Kollarımı göğsümde katlamış olarak dururum", b: "Ellerimi sıkarım", c: "Bir veya iki elimi belime koyarım", d: "Konuştuğum insanlara dokunur veya ittiririm", e: "Kulağımla oynar, çeneme dokunur veya saçımı düzeltirim" }, { a: 4, b: 6, c: 8, d: 3, e: 2 }),
    new Soru("4-Dinlenirken nasıl oturursunuz?", { a: "Dizler katlanmış ve bacaklar birbirine bitişik olarak", b: "Bacaklar çaprazlanmış olarak", c: "Bacaklarımı uzatarak", d: "Bir bacağımı altıma katlayarak" }, { a: 4, b: 6, c: 8, d: 1 }),
    new Soru("5-Çok hoşunuza giden bir şey olduğunda ne yaparsınız?", { a: "Büyük bir kahkaha atarım", b: " Gülerim ama fazla sesli değil", c: "Bir kerelik gülerim", d: "Sessizce gülümserim" }, { a: 4, b: 6, c: 8, d: 3 }),
    new Soru("6-Bir partiye veya sosyal etkinliğe katıldığınızda", { a: "Herkes sizi fark edecek şekilde gürültülü bir giriş mi yaparsınız?", b: "Sessiz bir giriş yapıp etrafınızda tanıdığınız birilerine mi bakınırsınız?", c: "Çok sessizce girip kimsenin sizi fark etmemesine mi gayret edersiniz?" }, { a: 4, b: 6, c: 8 }),
    new Soru("7-Çok zor bir işe dikkatinizi vermişken rahatsız ediliyorsunuz. Ne yaparsınız?", { a: "Bölünmeyi memnuniyetle karşılarım", b: "Aşırı derecede rahatsız olurum", c: "Güzel bir dille uyarırım" }, { a: 4, b: 6, c: 8 }),
    new Soru("8-En çok hangi rengi seversiniz?", { a: "Kırmızı veya portakal rengi", b: "Siyah", c: "Sarı veya mavi", d: "Yeşil", e: "Koyu mavi veya mor", f: "Beyaz", g: "Kahverengi veya gri" }, { a: 4, b: 6, c: 8, d: 1, e: 2, f: 3, g: 5 }),
    new Soru("9-Yatakta uyumadan önceki birkaç dakikada", { a: "Sırt üstü yatıp uzanırsınız", b: " Karnınızın üstüne yatıp uzanırsınız", c: "Hafif kıvrılmış olarak yan tarafınıza yatarsınız", d: "Başınızı bir kolunuzun üzerine koyarsınız", e: "Başınızı yorganın altına kapatırsınız" }, { a: 4, b: 6, c: 8, d: 2, e: 6 }),
    new Soru("10- Rüyanızda genellikle", { a: "Düşersiniz", b: "Kavga eder veya tartışırsınız", c: "Birilerini veya bir şeyler ararsınız", d: "Uçar veya yüzersiniz", e: "Genelde rüya görmezsiniz", f: "Rüyalarınız daima hoştur" }, { a: 4, b: 6, c: 8, d: 3, e: 4, f: 4 }),
];


function Quiz(questions) {
    this.questions = questions;
    this.questionIndex = 0;
    this.totalScore = 0;

}

Quiz.prototype.getQuestion = function() {
    return this.questions[this.questionIndex];
}