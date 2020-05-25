function calcAndOutput(){
    var startMoneyVar = document.getElementById("startMoney").value; //сохраняем в переменную значение первого ползунка
    var addMoneyVar = document.getElementById("addMoney").value;
    var srokVar = document.getElementById("srok").value;
    var percentVar = document.getElementById("percent").value;
    
    // Смотрим, что в переменных до цикла
    console.log ("В startMoneyVar до цикла: "+startMoneyVar);
    console.log ("В addMoneyVar до цикла: "+addMoneyVar);
    console.log ("В srokVar до цикла: "+srokVar);
    console.log ("В percentVar до цикла: "+percentVar);

    var outputVar = startMoneyVar*1000;
    // outputVar = outputVar*1000 + outputVar*(percentVar/100)/12+addMoneyVar*1000;
    // outputVar = Math.round(outputVar);
    // console.log ("В outputVar до цикла: "+outputVar);
    

    for (var i=0; i<srokVar*12; i++){
        console.log(outputVar);
        outputVar = outputVar + outputVar*(percentVar/100)/12+addMoneyVar*1000;
        outputVar = Math.round(outputVar);
        // console.log ("В startMoneyVar в цикле: "+startMoneyVar);
        console.log("Итерация: "+i)
    }
    outputVar = Math.round(outputVar);

    document.getElementById('outputAllMoney').innerHTML = outputVar; //выводим в элементке с id outputSpan переменную outputAllMoney
    // // console.log("Значение ползунка: "+polzunok1Var); //тестовый вывод в консоль

    

    
}

// Тестовые переменные
// var iznachalnyeBabki = 80000;
//     var plusVMesyac = 10000;
//     var procent = 0.05;
//     var srok = 24;

//     var itogo = iznachalnyeBabki;
//     // console.log(itogo);

//     for (var i=0; i<srok;i++){
//         itogo = itogo + itogo*procent/12+plusVMesyac;
//         // itogo = Math.round(itogo);
//         // console.log(itogo);
//     }
//     itogo = Math.round(itogo);
//     console.log(itogo);