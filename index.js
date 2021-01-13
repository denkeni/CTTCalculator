var cttCalculator = (function () {
  "use strict";

  var calculateOne = function() {
    var grainType = document.getElementById("grain-type-1").value;
    var x = parseFloat(document.getElementById("x").value);
    if (isNaN(x)) {
      alert("x 數值錯誤");
      return;
    }
    var a = 0;
    var b = 0;
    var yLimUp = 0;
    var yLimDown = 0;
    var y = 0;
    switch (grainType) {
      case "1":
        a = -0.0092;
        b = 29.893;
        yLimUp = 30;
        yLimDown = 9;
        break;
      case "2":
        a = -0.081;
        b = 169.96;
        yLimUp = 30;
        yLimDown = 9;
        break;
    }
    y = a * x + b;
    if (y > yLimDown && y < yLimUp) {
      alert("y 為 " + y.toFixed(2) + " wb.%");
    } else {
      alert("超過量測範圍 (y 為" + y.toFixed(2) + ", 上限為" + yLimUp + ", 下限為" + yLimDown + ")");
    }
  }

  var calculateTwo = function() {
    var w = parseFloat(document.getElementById("w").value);
    if (isNaN(w)) {
     alert("初始量重 數值錯誤");
     return;
    }
    var xx = parseFloat(document.getElementById("xx").value);
    if (isNaN(xx) || xx >= 100) {
     alert("初始含水率 數值錯誤");
     return;
    }
    var yy = parseFloat(document.getElementById("yy").value);
    if (isNaN(yy) || yy >= 100) {
     alert("最終含水率 數值錯誤");
     return;
    }
    var productRatio = ((100 - xx) / 100 ) / ((100 - yy) / 100 );
    var finalWeight = w * productRatio;
    var lossWeight = w * (1 - productRatio);
    var unit = document.getElementById("unit").value;
    alert("乾燥後重量：" + finalWeight.toFixed(2) + " " + unit + "\n"
        + "損失重量：" + lossWeight.toFixed(2) + " " + unit + "\n"
        + "成品率：" + productRatio.toFixed(2) + " " + "%");
  }

  var calculateThree = function() {
    alert("價錢(NT$/kg)？小馬還沒給我表");
  }

  return {
    calculateOne: calculateOne,
    calculateTwo: calculateTwo,
    calculateThree: calculateThree
  }
})()
