Написати конструктор обєкта Account який буде описувати рахунок користувача.
Обєкт має мати такі унікальні ключі:
1) Імя юзера
2) id юзера
3) ключ balance
4) ключ credits // список кредитів
5) ключ deposits // список депозитів
6) ключ depositIncome // загальний прибуток від депозитів
7) ключ creditCosts // загальні затрати по кредитах
8) ключ charity // сума яку виділили на благодійність

Також мають бути такі методи
1) countDepositsIncome // метод що приймає суму депозита і та збільшує поле depositIncome в задежності від типу і ставки і періоду депозиту.
2) openDeposit // метод що додає депозит в список deposits і запускає метод countDepositsIncome
3) countCreditCost  // метод що приймає суму кредиту і його тип та збільшує поле creditCosts
4) openCredit // метод що додає кредит в список credits і запускає метод countCreditCost
5) showIncome // метод що показує загальний дохід від депозитів
6) showCost // метод що показує загальні затрати на кредити
7) showProfit //метод що показує прибуток (різниця доходів і витрат)
8) getCash //метод що приймає число і зменьшує баланс юзера так як він знімає готівку з рахкнку
9) addition // метод що приймає число і збільшує баланс юзера (поповнення через термінал)
10) closeCredit // метод що закриває кредит в банку і видаляє його з поля credits та забирає суму з creditCosts
11) closeDeposit //  метод що закриває депозит в банку і видаляє його з поля deposits та забирає суму з depositIncome



// Зразок обєкта депозита
const deposit = {
    amount: 5000,
    type: '', // типи депозиту 'simple', 'compound'
    percent: '10%',
    period: 1 // період вказуємо в місяцях
}

// зразок обєкта кредиту
const credit = {
    amount: 500000,
    type: '', // типи кредиту 'annuity', 'simple'
    percent: '5%',
    period: 15 // період вказуємо в роках
}



simple deposit formula https://www.rapidtables.com/calc/finance/simple-interest-calculation.html 

compound deposit formula https://www.rapidtables.com/calc/finance/compound-interest-formula.html

annuity credit formula
Дивитися Приклад 4.
https://uk.wikibooks.org/wiki/%D0%A4%D1%96%D0%BD%D0%B0%D0%BD%D1%81%D0%B8/%D0%9E%D0%B1%D1%87%D0%B8%D1%81%D0%BB%D0%B5%D0%BD%D0%BD%D1%8F_%D0%B2%D1%96%D0%B4%D1%81%D0%BE%D1%82%D0%BA%D1%96%D0%B2_%D0%B7%D0%B0_%D0%BA%D1%80%D0%B5%D0%B4%D0%B8%D1%82%D0%BE%D0%BC_%D0%B0%D0%B1%D0%BE_%D0%B4%D0%B5%D0%BF%D0%BE%D0%B7%D0%B8%D1%82%D0%BE%D0%BC

simple credit formula
Дивитися Приклад 3.
https://uk.wikibooks.org/wiki/%D0%A4%D1%96%D0%BD%D0%B0%D0%BD%D1%81%D0%B8/%D0%9E%D0%B1%D1%87%D0%B8%D1%81%D0%BB%D0%B5%D0%BD%D0%BD%D1%8F_%D0%B2%D1%96%D0%B4%D1%81%D0%BE%D1%82%D0%BA%D1%96%D0%B2_%D0%B7%D0%B0_%D0%BA%D1%80%D0%B5%D0%B4%D0%B8%D1%82%D0%BE%D0%BC_%D0%B0%D0%B1%D0%BE_%D0%B4%D0%B5%D0%BF%D0%BE%D0%B7%D0%B8%D1%82%D0%BE%D0%BC


//=======================================================================