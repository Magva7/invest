function testToConsole(){
    var polzunok1Var = document.getElementById("polzun1").value; //сохраняем в переменную значение первого ползунка
    polzunok1Var = polzunok1Var*20;
    document.getElementById('outputSpan').innerHTML = polzunok1Var; //выводим в элементке с id outputSpan переменную polzunok1Var
    // console.log("Значение ползунка: "+polzunok1Var); //тестовый вывод в консоль

    

}