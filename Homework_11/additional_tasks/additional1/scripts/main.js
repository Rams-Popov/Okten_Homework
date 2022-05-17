
// // let arrayCardId = [];
// //
// // const cheker = (number) =>{
// //     if (arrayCardId.find(value => value === number)){
// //        return "The number is busy";
// //     } else {
// //         arrayCardId.push(number);
// //     }
// // }
//
// function userCard(number){
//     // const check = cheker(number);
//     // if (check !== undefined){
//     //     return console.log("The number is busy, choose another number");
//     // }
//
//     const dataCards = {
//         balance: 100,
//         transactionLimit: 100,
//         historyLogs : [],
//         key: number
//     }
//
//
//     this.writeLog = true;
//     this.getCardOptions = () => dataCards;
//
//     this.putCredits = (money) => {
//         dataCards.balance += money;
//         this.writeLogs("Received credits", money);
//     }
//
//     this.takeCredits = (money) =>{
//         if (money <= dataCards.transactionLimit && money <= dataCards.balance){
//             dataCards.balance -= money;
//         } else if(money > dataCards.transactionLimit) {
//             return console.error("You have exceeded the transaction limit")
//         } else {
//             return console.error("You don't have enough money")
//         }
//         this.writeLogs("Withdrawal of credits", money);
//     }
//
//     this.setTransactionLimit = (money) => {
//         dataCards.transactionLimit = money;
//         this.writeLogs("Transaction limit change", money);
//     }
//
//     this.transferCredits = function (money, card){
//         [this.writeLog, card.writeLog]  = [false, false];
//         this.takeCredits((Math.round((money * 1.005) * 100 ))/100);
//         card.putCredits(money);
//         [this.writeLog, card.writeLog]  = [true, true];
//     }
//
//
//     this.writeLogs = function (operationType, credits){
//         if (this.writeLog){
//             dataCards.historyLogs.push(
//                 {
//                     operationType: operationType,
//                     credits: credits,
//                     operationTime: this.getTime()
//                 }
//             )
//         }
//     }
//
//     this.getTime = () =>{
//         let date = new Date();
//
//         let hour = date.getHours();
//         hour = (hour < 10 ? "0" : "") + hour;
//
//         let min  = date.getMinutes();
//         min = (min < 10 ? "0" : "") + min;
//
//         let sec  = date.getSeconds();
//         sec = (sec < 10 ? "0" : "") + sec;
//
//         let year = date.getFullYear();
//
//         let month = date.getMonth() + 1;
//         month = (month < 10 ? "0" : "") + month;
//
//         let day  = date.getDate();
//         day = (day < 10 ? "0" : "") + day;
//
//         return `${day}/${month}/${year}, ${hour}:${min}:${sec}`
//     }
//
//     this.arrayMethods = ['getCardOptions', 'putCredits', 'takeCredits', 'setTransactionLimit', 'transferCredits'];
//     console.log(this.arrayMethods);
// }
//
// // const card1 = new userCard(1);
// //
// // card1.putCredits(200);
// // card1.setTransactionLimit(150);
// // card1.takeCredits(150);
// //
// // const card2 = new userCard(2);
// //
// // card1.transferCredits(100,card2);
// //
// // console.log(card2.getCardOptions());
// //
// // const card3 = new userCard(3);
// // card3.setTransactionLimit(500);
// // card3.putCredits(1000);
// // card3.transferCredits(500,card1)
// // console.log(card3.getCardOptions());
// //
// // console.log(card1.getCardOptions());
// //
// // console.log(arrayCardId);
//
//
//
//
//
// class UserAcaunt {
//     constructor(name) {
//         this.name = name;
//         this.cards = [];
//         this.cardId = [];
//     }
//
//     addCard = () => {
//         if (this.cards.length < 3) {
//             this.cards.push(new userCard(this.cardId.length + 1));
//             this.cardId.push(this.cardId.length + 1);
//         } else {
//             console.log('You already have three cards');
//         }
//     }
//
//     getCardByKey = (idCard) => this.cards[idCard - 1];
// }



// const user1 = new UserAcaunt("Sasha");
//
// user1.addCard();
// user1.addCard();
//
// // console.log(user1.getCardByKey(1));
//
// const user1card1 = user1.getCardByKey(1);
// const user1card2 = user1.getCardByKey(2);
// user1card1.putCredits(500);
// user1card1.setTransactionLimit(800);
// user1card1.transferCredits(300, user1card2);
// user1card2.takeCredits(50);
//
// console.log(user1card1.getCardOptions());
// console.log(user1card2.getCardOptions());
//
//
// const user2 = new UserAcaunt("Misha");
//
// user2.addCard();
// user2.addCard();
//
// const user2card1 = user2.getCardByKey(1);
// const user2card2 = user2.getCardByKey(2);
//
// console.log(user2card1.getCardOptions());
// console.log(user2card2.getCardOptions());
//
// user1.addCard();
//
// const user1card3 = user1.getCardByKey(3);
// console.log(user1card3.getCardOptions());


const userCard = (id) => {
    let balance = 100;
    let transactionLimit = 100;
    const historyLog = [];
    const key = id;

    const createLogMsg = (operationType, credits) => ({operationType, credits, operationTime: new Date()})

    const putCredits = (money) => {
        balance += money
        historyLog.push(createLogMsg('putCredits', money))
    }

    const takeCredits = (money) => {
        if (balance - money >= 0) {
            balance -= money
            historyLog.push(createLogMsg('takeCreditsError', money))
        } else {
            historyLog.push(createLogMsg('takeCredits', money))
            console.error('not enough money')
        }
    }

    const setTransactionLimit = (newLimit) => {
        transactionLimit = newLimit
        historyLog.push(createLogMsg('setTransactionLimit', newLimit))
    }

    const transferCredits = (money, toCard) => {
        const fee = money * 0.005
        if (money + fee > balance && transactionLimit < money) {
            historyLog.push(createLogMsg('transferCreditsError', money))
            console.error('not enough money')
        } else {
            toCard.putCredits(money)
            balance-=fee+money
            historyLog.push(createLogMsg('transferCredits', money))
        }
    }

    const getCardOptions = () => ({balance, historyLog, key, transactionLimit})

    return {
        putCredits,
        takeCredits,
        setTransactionLimit,
        transferCredits,
        getCardOptions
    }
}


class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = []
    }

    addCard() {
        if (this.cards.length === 3) {
            console.error('card count limit error')
            return
        }
        this.cards.push(userCard(this.cards.length + 1))
    }

    getCardById(id) {
        const card = this.cards[id - 1];
        if (!card) {
            console.error('not present with this id')
            return;
        }
        return card
    }
}

const user = new UserAccount('Max');

user.addCard()
user.addCard()
const card1 = user.getCardById(1);
const card2 = user.getCardById(2);

card1.putCredits(500)
card1.setTransactionLimit(800)
card1.transferCredits(300, card2)
card2.takeCredits(50)
console.log(card1.getCardOptions());
console.log('____________________________________________________________');
console.log(card2.getCardOptions());

