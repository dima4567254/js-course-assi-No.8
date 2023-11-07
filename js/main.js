// урок 0,18

//подумать возможно сделать что бы кнопки становились актиыными только после того как пользователь что то написал
// --------------------------------------------
// оптимизировать
// ошибка с подчетам процента должно сразу считаитть на не по клику

// Реализовать функционал: при расчете дневного бюджета учитывать сумму обязательных трат
// (т.e.от бюджета на месяц отнимаем общую сумму всех обяз.трат и ее делим на 30 дней)
// 1начать расчет
// 2расчитать
// 3 обязательные расходы


let startBtn = document.getElementById('start'),
    budgetValue = document.querySelector('.budget-value'),// [0]
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],//Обязательные расходы
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],
    expensesItem = document.querySelectorAll('.expenses-item'),//поля инпутов

    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],

    countBtn = document.getElementsByTagName('button')[2],//count-budget-btn

    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');
let maney, time;

// count-budget-btn

disablet()
function disablet() {
    countBtn.style.background = 'silver';
    countBtn.style.cursor = 'inherit';
    countBtn.setAttribute('disabled', '');

    expensesBtn.style.background = 'silver';
    expensesBtn.style.cursor = 'inherit';
    expensesBtn.setAttribute('disabled', '');

    // expensesBtn.disabled = !expensesValue.value;

    optionalExpensesBtn.style.background = 'silver';
    optionalExpensesBtn.style.cursor = 'inherit';
    optionalExpensesBtn.setAttribute('disabled', '');
}

// input.addEventListener("input", () => {
//     button.disabled = !input.value;
// });

// Получаем все поля ввода текста и пароля в форме.
// const expensesItem = document.querySelectorAll("#forma input[type='text'], input[type='password']");

// Добавляем обработчик событий `keyup` для всех полей ввода.
expensesItem.forEach(input => input.addEventListener('keyup', params));
optionalExpensesItem.forEach(input => input.addEventListener('keyup', params1));

// Функция `params()` проверяет, заполнены ли все поля ввода, и в зависимости от этого устанавливает или снимает атрибут `disabled` кнопки отправки формы, а также меняет ее цвет.
function params() {
    // Флаг, показывающий, заполнены ли все поля ввода.
    let isFilled = true;

    // Цикл по всем полям ввода.
    for (const optionalExpensesItem of expensesItem) {
        // Если поле ввода пустое, устанавливаем флаг `isFilled` в `false` и прерываем цикл.
        if (!optionalExpensesItem.value.length) {
            isFilled = false;
            break;
        }
    }

    // Если все поля ввода заполнены, снимаем атрибут `disabled` кнопки отправки формы и устанавливаем ее цвет в зеленый.
    if (isFilled) {
        expensesBtn.disabled = false;
        expensesBtn.style.background = 'revert-layer';
        expensesBtn.style.cursor = 'pointer';
    }
    // else {
    //     // Если не все поля ввода заполнены, устанавливаем атрибут `disabled` кнопки отправки формы и устанавливаем ее цвет в серебристый.
    //     expensesBtn.style.background = 'silver';
    //     expensesBtn.style.cursor = 'inherit';
    // }
}
function params1() {
    // Флаг, показывающий, заполнены ли все поля ввода.
    let isFilled = true;

    // Цикл по всем полям ввода.
    for (const optionalExpensesItem of expensesItem) {
        // Если поле ввода пустое, устанавливаем флаг `isFilled` в `false` и прерываем цикл.
        if (!optionalExpensesItem.value.length) {
            isFilled = false;
            break;
        }
    }

    // Если все поля ввода заполнены, снимаем атрибут `disabled` кнопки отправки формы и устанавливаем ее цвет в зеленый.
    if (isFilled) {
        optionalExpensesBtn.disabled = false;
        optionalExpensesBtn.style.background = 'revert-layer';
        optionalExpensesBtn.style.cursor = 'pointer';
    }
    // else {
    //     // Если не все поля ввода заполнены, устанавливаем атрибут `disabled` кнопки отправки формы и устанавливаем ее цвет в серебристый.
    //     expensesBtn.style.background = 'silver';
    //     expensesBtn.style.cursor = 'inherit';
    // }
}

function active() {
    countBtn.style.background = 'revert-layer';
    countBtn.style.cursor = 'pointer';
    countBtn.disabled = false;
}

// function active2() {

//     // expensesBtn.disabled = !optionalExpensesItem.value;
//     // expensesBtn.disabled = !expensesItem.value;
//     expensesBtn.style.background = 'revert-layer';
//     expensesBtn.style.cursor = 'pointer';
//     expensesBtn.disabled = false;

// }

// function active3() {
//     optionalExpensesBtn.style.background = 'revert-layer';
//     optionalExpensesBtn.style.cursor = 'pointer';
//     optionalExpensesBtn.disabled = false;
// }

startBtn.addEventListener('click', function () {
    active();
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    maney = +prompt('Ваш бюджет на месяц?', '');
    while (isNaN(maney) || maney == "" || maney == null) { //|| или если хоть 1 вариант выполнется то уикл продолжется
        maney = +prompt('Ваш бюджет на месяц?', ''); //если условие выполнилось то спрашивает еще раз
    }
    appData.budget = maney;// записываем данные в аппдата
    appData.timeData = time;
    budgetValue.textContent = maney.toFixed(); // записываем данные в мани
    // если есть инпут то записываем данные в велью
    // вводить через тире
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;//месяци начинаются с нуля и заканчиваются 11
    dayValue.value = new Date(Date.parse(time)).getDate();//месяци начинаются с нуля и заканчиваются 11
});

expensesBtn.addEventListener('click', function () {
    // active3();
    let sum = 0;
    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;//следующий элемент i
        if ((typeof (a)) != null && (typeof (b)) != null
            && a != '' && b != '' && a.length < 50) {
            console.log('все верно');
            appData.expenses[a] = b;
            sum += +b;//собирает все значения и складывает
        } else {
            i = i - 1;
        };
    }
    expensesValue.textContent = sum; //выводит сумму
    // var tottal = appData.budget - appData.optionalExpenses;!!!

    // console.log(sum );//обязательные расходы
    // console.log(appData.optionalExpenses);//бюджет на день
    // console.log(appData.budget);//доход
    // Реализовать функционал: при расчете дневного бюджета учитывать сумму обязательных трат
    // (т.e.от бюджета на месяц отнимаем общую сумму всех обяз.трат и ее делим на 30 дней)
});

optionalExpensesBtn.addEventListener('click', function () {
    // console.log(optionalExpensesItem);
    for (let i = 0; i < optionalExpensesItem.length; i++) {
        let opt = optionalExpensesItem[i].value// ' 1 вопрос' ' 1 вопрос'
        appData.optionalExpenses[i] = opt;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
        // console.log(opt);
        // console.log(optionalExpensesValue);
        // console.log(appData.optionalExpenses[i]);
    }
});

countBtn.addEventListener('click', function () {
    // moneyPerDay деньги в день
    // Реализовать функционал: при расчете дневного бюджета учитывать сумму обязательных трат
    // (т.e.от бюджета на месяц отнимаем общую сумму всех обяз.трат и ее делим на 30 дней)
    // active2();
    if (appData.budget != undefined) {//если не равно undefined
        // let a = '';
        // appData.a = (appData.budget / 30).toFixed();
        // budget
        // moneyPerDay
        // let sums = '';
        // var tottal = appData.budget - sum;
        // var tottal = names - 30 (price * (discont / 100));
        // console.log(tottal);

        // appData.optionalExpenses - moneyPerDay = sums;
        appData.moneyPerDay = (appData.budget / 30).toFixed();//расчет на день
        dayBudgetValue.textContent = appData.moneyPerDay;
        // console.log(dayBudgetValue);
        // console.log(moneyPerDay);
        if (appData.moneyPerDay < 100) {
            // console.log('3');
            levelValue.textContent = 'минимальный уровень достатка';
            // console.log('4');
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = 'средний уровень достатка';
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = 'высокий уровень достатка';
        } else {
            levelValue.textContent = 'ошибка';
        }
    } else {
        dayBudgetValue.textContent = 'ошибка';
    }
    // var tottal = appData.optionalExpenses - appData.moneyPerDay;
    // console.log(appData.optionalExpenses);//бюджет на день
    // console.log(appData.moneyPerDay);
    // console.log(appData.budget);//доход
    // console.log(expensesValue);
    // console.log(optionalExpensesValue);
    // console.log(optionalExpenses);
    // console.log(appData.expenses+ '1');
    // console.log(appData.income + '2');
    // alert(tottal);
    // console.log(tottal + 'work');
});

incomeItem.addEventListener('input', function () {
    let items = incomeItem.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function () {
    if (appData.savings == true) {//если равно тру
        appData.savings = false;//то переключаем на фолс
    } else {//если не равно то тру
        appData.savings = true;
    }
});

sumValue.addEventListener('click', function () {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            persent = +percentValue.value;
        appData.monthIncome = sum / 100 / 12 * persent;// /100/12месяцев
        appData.yearIncome = sum / 100 * persent;// /100/12месяцев
        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener('click', function () {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            persent = +percentValue.value;
        appData.monthIncome = sum / 100 / 12 * persent;// /100/12месяцев
        appData.yearIncome = sum / 100 * persent;// /100/12месяцев
        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

var appData = {
    budget: maney,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeDate: time,
    savings: false,
};