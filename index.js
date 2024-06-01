// На странице есть кнопка - переменная button(указывается как и название тега) = это тег("button").
// Есть место-output(указывается как и название тега) у которого класс (".output")
const button = document.querySelector("button");
const output = document.querySelector(".output");

// Кнопка button, если произойдет событие.addEventListener,
// что пользователь нажал на тебя ("click",
// то выполни инструкцию  function () {
// чтобы у элемента  output, внутри .innerHTML =, (т.е.внутри div у меня),
// поменялось то, что внутри( в моем случае div с классом .output) на "Я невъебенный программист";});

/// P.s. на ссылках "a" тоже работает, но если она ОДНА на странице, либо какое-то правило должно использоваться, чтобы несколько можно было использовать по этому правилу, скорее всего также с тегом button.
//// P.s.s работает с любыми тегами))
button.addEventListener("click", function () {
  output.innerHTML = "Я невъебенный программист";
});

// Тестово попробовал с рандомным тегом, получилось))
const h2 = document.querySelector("h2");
const taina = document.querySelector(".taina");

h2.addEventListener("click", function () {
  taina.innerHTML = "У тебя всё получится";
});
