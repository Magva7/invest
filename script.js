function calcAndOutput(){
    var polzunok1Var = document.getElementById("polzun1").value; //сохраняем в переменную значение первого ползунка
    var polzunok2Var = document.getElementById("polzun2").value;
    var outputVar = polzunok1Var*polzunok2Var;
    document.getElementById('outputAllMoney').innerHTML = outputVar; //выводим в элементке с id outputSpan переменную polzunok1Var
    // console.log("Значение ползунка: "+polzunok1Var); //тестовый вывод в консоль

    

}