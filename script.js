function calcAndOutput(){
    var startMoneyVar = document.getElementById("startMoney").value; //сохраняем в переменную значение первого ползунка
    var addMoneyVar = document.getElementById("addMoney").value;
    var srokVar = document.getElementById("srok").value;
    var percentVar = document.getElementById("percent").value;
    
    var outputVar = startMoneyVar*1000;

    

    for (var i=0; i<srokVar*12; i++){
        console.log(outputVar);
        outputVar = outputVar + outputVar*(percentVar/100)/12+addMoneyVar*1000;
        outputVar = Math.round(outputVar);

    }
    outputVar = Math.round(outputVar);

    document.getElementById('outputAllMoney').innerHTML = outputVar; //выводим в элементке с id outputSpan переменную outputAllMoney

    var rentaInMounthVar = outputVar*(percentVar/100)/12;
    rentaInMounthVar = Math.round(rentaInMounthVar);
    document.getElementById('rentaInMounth').innerHTML = rentaInMounthVar;
   
}
