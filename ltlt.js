function generateLotteryNumbers() {
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function generateUniqueNumbers(count, min, max) {
        let numbers = new Set();
        while (numbers.size < count) {
            numbers.add(getRandomInt(min, max));
        }
        return Array.from(numbers).sort((a, b) => a - b);
    }

    let tickets = [];
    for (let i = 0; i < 5; i++) {
        let redNumbers = generateUniqueNumbers(5, 1, 35);
        let blueNumbers = generateUniqueNumbers(2, 1, 12);
        tickets.push({ red: redNumbers, blue: blueNumbers });
    }

    return tickets;
}

// 生成五注大乐透号码
let tickets = generateLotteryNumbers();

// 输出结果
console.log(tickets);