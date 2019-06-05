export class Quizz {

    private question: string;
    private answer: string;
    category: string;
   


    constructor(question: string, answer: string, category: string) {
       
        this.question = question;
        this.answer = answer;
        this.category = category;
    }

    setQuestion(question) {
        this.question = question;
    }

    getQuestion(question): string {
        return this.question;
    }

    setAnswer(answer) {
        this.answer = answer;
    }

    getAnswer(answer) {
        return this.answer;
    }

}