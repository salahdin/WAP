class Student {
    constructor(studentId) {
        this.studentId = studentId;
        this.answers = [];
    }

    addAnswer(question) {
        this.answers.push({ id: question.qid, answer: question.answer });
    }
}

class Question {
    constructor(qid, answer) {
        this.qid = qid;
        this.answer = answer;
    }

    checkAnswer(studentAnswer) {
        return this.answer === studentAnswer;
    }
}

class Quiz {
    constructor(questions, students) {
        this.questions = new Map(questions.map((q) => [q.qid, q.answer]));
        this.students = students;
    }

    scoreStudentBySid(sid) {
        const student = this.students.find((s) => s.studentId === sid);

        if (!student) {
            return 0;
        }

        return student.answers.reduce((score, ans) => {
            const correctAnswer = this.questions.get(ans.id);
            return ans.answer === correctAnswer ? score + 1 : score;
        }, 0);
    }

    getAverageScore() {
        const totalScore = this.students.reduce(
            (total, student) => total + this.scoreStudentBySid(student.studentId),
            0
        );
        return totalScore / this.students.length;
    }

}

// test

const student1 = new Student(10);
student1.addAnswer(new Question(1, "b"));
student1.addAnswer(new Question(2, "a"));
student1.addAnswer(new Question(3, "b"));


const student2 = new Student(11);
student2.addAnswer(new Question(1, "c"));
student2.addAnswer(new Question(2, "a"));
student2.addAnswer(new Question(3, "a"));


const students = [student1, student2];
const questions = [
    new Question(1, "b"),
    new Question(2, "a"),
    new Question(3, "b"),
];

const quiz = new Quiz(questions, students);

let scoreforStudent10 = quiz.scoreStudentBySid(10);
console.log(scoreforStudent10);

let scoreforStudent11 = quiz.scoreStudentBySid(11);
console.log(scoreforStudent11);

let average = quiz.getAverageScore();
console.log(average);
