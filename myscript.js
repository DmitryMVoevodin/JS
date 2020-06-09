/*Подключить скрипт "script.js" на странице.
После успешного подключения и перезагрузки страницы появится соответствующее сообщение.
Затем слушатель может быть удален.*/
/*Смотреть page.html*/






/*["1", 2, "3", "4", 5, null].forEach(function(param) {your code here})
Используя код выше добавить код для тела цикла. Необходимо создать переменную и присвоить текущее значение param.
Вывести в консоль в виде "значение - тип". Добавить switch от типа значения param.
Если тип "строка", то присвоить любое числовое значение. Если число то любое строковое.
Если неизвестный тип, то присвоить строковое значение "Неизвестный тип".
Вывести в консоль новый тип переменной в виде "значение - тип".
Реализовать в двух вариантах, используя различные области видимости переменных.
В первом значение переменной (объявленной внутри цикла) доступно после его окончания.
Во втором варианте переменная не видна, при попытке обращения к ней в консоли должна появляться ошибка.*/

console.log("***********************************************************************");
function switchFunction(p) {
    switch(typeof(p)) {
        case "number":
            p=String(p);
            break;
        case "string":
            p=Number(p);
            break;
        default:
            p="Неизвестный тип";
    }
    return p;
}
let variableParam1;
["1", 2, "3", "4", 5, null].forEach(function(param) {
    let variableParam = param; variableParam1 = param;
    console.log("Before param=" + variableParam + "-" + typeof(variableParam));
    variableParam = switchFunction(variableParam);
    console.log("After param=" + variableParam + "-" + typeof(variableParam));}); 
console.log(variableParam1);
//console.log(variableParam);
console.log("***********************************************************************");







/* Присвоить значение константной переменной и попробовать переопределить ее.*/
const constA = 10;
//constA = 11; //Нельзя переопределить константу!







/* Написать цикл с 5 итерациями. Внутри цикла инициализировать переменную
типа "объект" с полем "имя" и значением null. Сделать проверку на четность итерации.
Если итерация четная присвоить полю "имя" значение через оператор ".". Иначе через "[]".
Присваивание сделать через "prompt". После конструкции условия вывести объект в консоль.
Должно распечататься 5 объектов с введенными именами.  */
console.log("***********************************************************************");
for(let i = 0; i < 5; i++){
    let User = {name: null};
    if(i % 2 == 0){
        User.name=prompt(name);
    } else {
        User["name"] = prompt(name);
    }
    console.table(User);
}
console.log("***********************************************************************");








/* ["1", "1", 1, 1].forEach(function(param, index) {your code here})
Добавить код сравнения соседних значений массива в цикл (0 стравнивается с 1ым, 1ый со 2ым, 2ой с 3им).
Сравнение проводить сразу двумя операторами "==" и "===". Результат каждого сравнения выводить в консоль
в виде "знач (тип) == знач (тип) ? результат" и "знач (тип) === знач (тип) ? результат". */
console.log("***********************************************************************");
["1", "1", 1, 1].forEach(function(param, index, arr) {
    if(arr.length - 1 > index) {
        let result = (arr[index]==arr[index+1]);
        console.log(index + ": " + arr[index] + "("+ typeof(arr[index]) +")==" + arr[index + 1] + "("+ typeof(arr[index+1]) +")? " + result);
        result = (arr[index]===arr[index+1]);
        console.log(index + ": " + arr[index] + "("+ typeof(arr[index]) +")===" + arr[index + 1] + "("+ typeof(arr[index+1]) +")? " + result);
    }
});
console.log("***********************************************************************");








/*Создать функцию, которая выводит в консоль сообщение.
Объявить новую переменную и присвоить ей ссылку на предыдущую функцию.
Вызвать функцию через вторую переменную.*/
console.log("***********************************************************************");
function someFunction() {
    console.log("Hello, world!");
}
let func = someFunction;
func();
console.log("***********************************************************************");








/*Объявить функцию с одним параметром. Функция должна возвращать функцию без входных параметров,
которая печатает в консоль параметр внешней функции с сообщением "Internal function is called. External param: {значение параметра}".
Присвоить результат вызова внешней функции с параметром переменной. Вызвать функцию, лежащую в переменной.
(Прим.: let intFunc = extFunc("Param"); intFunc();)
После вызова функции второй переменной в консоли должно распечататься сообщение и значение параметра, переданного в первую функцию.*/
console.log("***********************************************************************");
function extFunc(param){
    let x = function() {
        console.log(`Internal function is called. External param: ${param}`)
    };
    return x;
}
let intFunc = extFunc("Param");
intFunc();
console.log("***********************************************************************");








/*Проитерировать по всем дочерним узлам, внутри div с классом "container".
Вывести название узла, тип и значение(при наличии). */
console.log("***********************************************************************");
let parent1 = document.body.getElementsByClassName("container")[0];
let chldrn1 = parent1.childNodes;
for(let i = 0; i < chldrn1.length; i++){
    console.log("type=" + chldrn1[i].nodeType + "; name=" + chldrn1[i].nodeName + "; value=" + chldrn1[i].nodeValue);
}
console.log("***********************************************************************");







/*Проитерировать по всем элементам, внутри div с классом "container".
Вывести название узла и тип. В этом случае количество узлов должно быть меньше чем в первом случае.*/
console.log("***********************************************************************");
let parent2 = document.body.getElementsByClassName("container")[0];
let chldrn2 = parent2.children;
for(let i = 0; i < chldrn2.length; i++){
    console.log("type=" + chldrn2[i].nodeType + "; name=" + chldrn2[i].nodeName + "; value=" + chldrn2[i].nodeValue);
}
console.log("***********************************************************************");






/*Найти каждый из узлов имеющий идентификатор (с помощью поиска по идентификаторам).*/
console.log("***********************************************************************");
let elemPageContainer = document.getElementById("pageContainer");
let elemPageHeader = document.getElementById("pageHeader");
let elemTargetNode = document.getElementById("targetNode");
let elemBtnContainer = document.getElementById("btnContainer");
console.log(elemPageContainer);
console.log(elemPageHeader);
console.log(elemTargetNode);
console.log(elemBtnContainer);
console.log("***********************************************************************");







/*Найти каждый из узлов имеющий стилевой класс (Первый вариант - с помощью поиска по классам.
Второй вариант - поиск по css селекторам(В качестве селектора также выступает класс)).*/
console.log("***********************************************************************");
let elemContainer = document.getElementsByClassName("container")[0];
let elemHeader = document.getElementsByClassName("header")[0];
let elemPageTitle = document.getElementsByClassName("pageTitle")[0];
let elemContent = document.getElementsByClassName("content")[0];
let elemUsersTable = document.getElementsByClassName("usersTable")[0];
let elemFooter = document.getElementsByClassName("footer")[0];
console.log(elemContainer);
console.log(elemHeader);
console.log(elemPageTitle);
console.log(elemContent);
console.log(elemUsersTable);
console.log(elemFooter);
console.log("***********************************************************************");
let elemContainer2 = document.querySelectorAll(".container")[0];
let elemHeader2 = document.querySelectorAll(".header")[0];
let elemPageTitle2 = document.querySelectorAll(".pageTitle")[0];
let elemContent2 = document.querySelectorAll(".content")[0];
let elemUsersTable2 = document.querySelectorAll(".usersTable")[0];
let elemFooter2 = document.querySelectorAll(".footer")[0];
console.log(elemContainer2);
console.log(elemHeader2);
console.log(elemPageTitle2);
console.log(elemContent2);
console.log(elemUsersTable2);
console.log(elemFooter2);
console.log("***********************************************************************");






/*Найти узлы с комбинацией из определенного идентификатора и класса.*/
console.log("***********************************************************************");
let elementPageContainer = document.querySelectorAll("#pageContainer.container")[0];
let elementPageHeader = document.querySelector("#pageHeader.header");
console.log(elementPageContainer);
console.log(elementPageHeader);
console.log("***********************************************************************");





/*С помощью горизонтального и вертикального передвижения по узлам,
дойти от узла <html> до узла с идентификатором "targetNode",
используя перемещение либо по узлам либо по элементам (прим.: т.е. firstChild и firstElementChild).*/
console.log("***********************************************************************");
let elemTN = document.body.firstElementChild.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.lastElementChild.lastElementChild.previousElementSibling.lastElementChild;
console.log(elemTN);
console.log("***********************************************************************");







/*Добавить 3 кнопки под таблицей в файле page.html. Выровнять по центру таблицы в один ряд.
У каждой кнопки свой уникальный id и у каждой одинаковый класс стиля "btn".
Объявить 3 функции различными способами, каждая должна выводить значение в alert отличное от двух других.
Каждую функцию зарегистрировать как обработчик для одной из трех кнопок (1 кнопка - 1 обработчик).
При нажатии на каждую кнопку должно выводиться соответствующее значение.
Регистрацию выполнить 3 путями. Первый - поиск кнопки по id.
Второй, как будто идентификаторов нет, но все три можно найти по классу стилей "btn".
Третий - нет ни идентификаторов, ни стилевых классов.*/
console.log("***********************************************************************");
function btnAlertFunction1(){
    alert("Это кнопка 1 сработала");
}
let btnAlertFunction2 = function() {
    alert("Это кнопка 2 сработала");
}
function btnAlertFunction3(){
    alert("Это кнопка 3 сработала");
}
const btn1 = document.createElement('button');
const btn2 = document.createElement('button');
const btn3 = document.createElement('button');
btn1.textContent = "Button-1";
btn2.textContent = "Button-2";
btn3.textContent = "Button-3";
btn1.id = "buttonId1";
btn2.id = "buttonId2";
btn3.id = "buttonId3";
btn1.className = "btn";
btn2.className = "btn";
btn3.className = "btn";
const btnC = document.getElementById("btnContainer");
btnC.appendChild(btn1);
btnC.appendChild(btn2);
btnC.appendChild(btn3);

document.getElementById("buttonId1").addEventListener("click",btnAlertFunction1);
document.getElementsByClassName("btn")[1].addEventListener("click", btnAlertFunction2);
btnC.lastElementChild.addEventListener("click", btnAlertFunction3);
console.log("***********************************************************************");






/*Добавить еще три кнопки в файл page.html. Объявить функцию печатающую сообщение. 
Вторая кнопка должна добавлять слушателя для первой кнопки, используя данную функцию.
Третья кнопка должна удалять слушателя для первой кнопки.
При нажатии на первую кнопку вызывается функция описанная в первом шаге и распечатывает сообщение.
(Сценарий: при клике на первую кнопку ничего не происходит. Нажимается вторая кнопка.
Нажимается певая кнопка, должно распечататься сообщение. Нажимается третья кнопка.
Снова нажимается первая кнопка, сообщение не появляется.
Т.е. при нажатии на 2ую и затем первую печатается сообщение.
На 3ю и потом первую слушатель удаляется и ничего не печатается.)
Для регистрации слушателей для кнопок использовать идентификаторы.
*/
console.log("***********************************************************************");
function messageFunction() {
    alert('Hello, world!');
}
function add(){
    document.getElementById("buttonId4").addEventListener("click",messageFunction);
}
function remove(){
    document.getElementById("buttonId4").removeEventListener("click",messageFunction);
}
const btn4 = document.createElement('button');
const btn5 = document.createElement('button');
const btn6 = document.createElement('button');
btn4.textContent = "Button-4";
btn5.textContent = "Button-5";
btn6.textContent = "Button-6";
btn4.id = "buttonId4";
btn5.id = "buttonId5";
btn6.id = "buttonId6";
btn4.className = "btn";
btn5.className = "btn";
btn6.className = "btn";
const btnCon = document.getElementById("btnContainer");
btnCon.appendChild(btn4);
btnCon.appendChild(btn5);
btnCon.appendChild(btn6);
document.getElementById("buttonId5").addEventListener("click",add);
document.getElementById("buttonId6").addEventListener("click",remove);
console.log("***********************************************************************");



/*Вывести в консоль протокол и путь текущей страницы, название браузера, размер экрана.*/
console.log("протокол:" + document.location.protocol + "; адрес:" + window.location.href + "; браузер:" + navigator.userAgent + "; размер экрана:" + screen.height + "x" +screen.width);