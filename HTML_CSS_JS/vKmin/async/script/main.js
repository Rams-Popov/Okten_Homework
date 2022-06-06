

const wakeUp = (state) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state) {
                resolve("Good Morning");
            } else {
                reject('Time to wake up!')
            }
        }, 500)
    });
}

const breakfast = (state) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state){
                resolve('Bon appetit');
            } else {
                reject('You be hungry');
            }
        }, 400)
    });
}

const goWork = (state) => {
    return new  Promise((resolve, reject) => {
        setTimeout(() => {
            if (state) {
                resolve('You start work');
            } else {
                reject('You have no money!');
            }
        }, 200)
    });
}

const howManyTimeWork = (hour) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (hour === 0){
                reject('You have no money!');
            } else {
                resolve(15 * hour);
            }
        }, 300)
    });
}

const buyProducts = (moneyForProducts) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (moneyForProducts < 20){
                reject("You don't have enough money for products");
            } else {
                resolve(moneyForProducts - 20);
            }
        })
    });
}

const goPub = (moneyForPub) => {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
           if (moneyForPub < 50){
               reject("You don't have enough money for pub")
           } else {
               resolve(moneyForPub - 50);
           }
       }, 50)
    });
}

const goClub = (moneyForClub) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (moneyForClub < 40){
                reject("You don't have enough money for club");
            } else {
                resolve(moneyForClub - 40);
            }
        }, 250)
    });
}

// wakeUp(true)
//     .then((state) => {
//         console.log(state);
//         return breakfast(true);
//     })
//     .then((state) => {
//         console.log(state);
//         return goWork(true);
//     })
//     .then((state) => {
//         console.log(state);
//         return howManyTimeWork(8);
//     })
//     .then((money) => {
//         console.log(`You earned ${money}$`);
//         return buyProducts(money);
//     })
//     .then((moneyAfterProducts) => {
//         console.log(`You bought products! You have ${moneyAfterProducts}$ left`);
//         return goPub(moneyAfterProducts);
//     })
//     .then((moneyAfterPub) => {
//         console.log(`You rested in a pub! You have ${moneyAfterPub}$ left`)
//         return goClub(moneyAfterPub);
//     })
//     .then((moneyAfterClub) => {
//         console.log(`You rested in a club! You have ${moneyAfterClub}$ left for tomorrow`);
//     })
//     .catch(reason => {
//         console.warn(reason);
//     })
//     .finally(() =>{
//         console.log('Enough for today!');
//     })

// async function routine(){
//     try {
//         const wakeUpStatus = await wakeUp(true);
//         console.log(wakeUpStatus);
//
//         const breakfastStatus = await breakfast(true);
//         console.log(breakfastStatus);
//
//         const goWorkStatus = await goWork(true);
//         console.log(goWorkStatus);
//
//         const money = await howManyTimeWork(8);
//         console.log(`You earned ${money}$`);
//
//         const moneyAfterProducts = await buyProducts(money);
//         console.log(`You bought products! You have ${moneyAfterProducts}$ left`);
//
//         const moneyAfterPub = await goPub(moneyAfterProducts);
//         console.log(`You rested in a pub! You have ${moneyAfterPub}$ left`);
//
//         const moneyAfterClub = await goClub(moneyAfterPub);
//         console.log(`You rested in a club! You have ${moneyAfterClub}$ left for tomorrow`);
//
//     } catch (e) {
//         console.warn(e);
//     } finally {
//         console.log('Enough for today!');
//     }
//
// }
//
// routine();

// let en = 100;
//
// function wakeup(en, cb) {  //cb (Перше значення ерор, ... ,останнє дані)
//     setTimeout(() => {
//         en -= 200;
//         if (en <= 0){
//             cb('dont wakeup', null);
//             return;
//         }
//         console.log('wakeup');
//         cb(null, en);
//     }, 2000)
// }
//
// function eat(en, cb) {
//     setTimeout(() => {
//         en += 300;
//         console.log('njam');
//         cb(null, en);
//     }, 1000)
// }
//
// function goWorks(en, cb) {
//     setTimeout(() => {
//         en -= 400;
//         if (en <= 0){
//             cb('dont work', null);
//             return;
//         }
//         console.log('work');
//         cb(null, en);
//     }, 500)
// }
//
// wakeup(en, (err, data) =>{
//     if(err){
//         console.log(err);
//         return
//     }
//     console.log(`${data}`)
//     eat(en, (err, data) =>{
//         if(err){
//             console.log(err);
//             return;
//         }
//         console.log(`${data}`);
//         goWorks(en, (err, data) => {
//             if(err){
//                 console.log(err);
//                 return;
//             }
//             console.log(`${data}`);
//         })
//     })
// })