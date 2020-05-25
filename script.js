function calcAndOutput(){
    // var startMoneyVar = document.getElementById("startMoney").value; //сохраняем в переменную значение первого ползунка
    // var addMoneyVar = document.getElementById("addMoney").value;
    // var yearsVar = document.getElementById("years").value;
    // var percentVar = document.getElementById("percent").value;
    
    // // Смотрим, что в переменных до цикла
    // console.log ("В startMoneyVar до цикла: "+startMoneyVar);

    // var outputVar = startMoneyVar;

    // for (var i=0; i<5; i++){
    //     console.log(outputVar);
    //     outputVar += outputVar*percentVar/12+addMoneyVar;
    //     console.log ("В startMoneyVar в цикле: "+startMoneyVar);
    // }


    // document.getElementById('outputAllMoney').innerHTML = outputVar; //выводим в элементке с id outputSpan переменную polzunok1Var
    // console.log("Значение ползунка: "+polzunok1Var); //тестовый вывод в консоль

    // Тестовые переменные

    
}

var iznachalnyeBabki = 80000;
    var plusVMesyac = 10000;
    var procent = 0.05;
    var srok = 24;

    var itogo = iznachalnyeBabki;
    // console.log(itogo);

    for (var i=0; i<srok;i++){
        itogo = itogo + itogo*procent/12+plusVMesyac;
        // itogo = Math.round(itogo);
        // console.log(itogo);
    }
    itogo = Math.round(itogo);
    console.log(itogo);