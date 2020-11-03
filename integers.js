

for(var i = 0; i < 100000000; i++){

    if (isJohnnyBeGood(i)) {
        console.log("Találtunk ! : " + i + " \n\r");
    }

};
console.log("Nem találtunk ! : " + i + " \n\r");


function isJohnnyBeGood(x) {

    var b1 = ((((14 * x) + 5) % 9) == 0);
    var b2 = ((((17 * x) - 5) % 12) == 0);

    return b1 && b2;
}

