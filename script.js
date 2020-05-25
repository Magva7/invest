function calcAndOutput(){
    var startMoneyVar = document.getElementById("startMoney").value; //сохраняем в переменную значение первого ползунка
    var addMoneyVar = document.getElementById("addMoney").value;
    var yearsVar = document.getElementById("years").value;
    var percentVar = document.getElementById("percent").value;
    
    // Смотрим, что в переменных до цикла
    console.log ("В startMoneyVar до цикла: "+startMoneyVar);

    var outputVar = startMoneyVar;

    for (var i=0; i<5; i++){
        console.log(outputVar);
        outputVar += outputVar*percentVar/12+addMoneyVar;
        console.log ("В startMoneyVar в цикле: "+startMoneyVar);
    }


    // document.getElementById('outputAllMoney').innerHTML = outputVar; //выводим в элементке с id outputSpan переменную polzunok1Var
    // console.log("Значение ползунка: "+polzunok1Var); //тестовый вывод в консоль

    

}