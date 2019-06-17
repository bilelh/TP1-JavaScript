function multiply(p1, p2) {
    console.log('Nb d arg de multiply: ' + arguments.length);
    return p1 * p2;
    }

var a;
a = multiply(10 , 3);
console.log('multiply (10 , 3) : ' ,a);
/*
function throwError () {
    throw new Error('Message');
    }

    try {
        var b;
        b = multiply(2 , 'formation' , 5);
        console.log('multiply (2 , formation , 5) : ' ,b);
        throwError();
    } catch (e) {
        console.log(e);
    }
*/
/******************Auto invoquée *********************** */

(function autoInvoquee() {
    console.log('Auto-invoquée');
    })();

/****** Fonction en parametre d'une fonctgion ********* */

console.log('Fonction en parametre d une fonction :');

var logger = function (a) {
    console.log('1er argument :', a);
    };
    function firstCallBack(callback) {
    if (callback && typeof callback === 'function') {
    callback('mom premier callback');
    }
    }
    firstCallBack(logger);



var hello = function (name) {
    return 'Hello ' + name;
    };

// Pour déclencher un traitement, dans un temps donné, nous pouvons utiliser la méthode setTimeout
// qui prend en argumant un callback et un temps en milliseconde ainsi que le paramètre que l'on
// souhaite translettre au callback
setTimeout(function () {
        // la fonction sera exécutée dans 5000 millisecondes
}, 5000)
function asyncSayHello (name, callback) {
    if (callback && typeof callback === 'function') {
        setTimeout(callback, 5000, name);
    }
}

asyncSayHello('Niko', hello);