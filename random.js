
function getRandomNumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
    return result;
}

function createArrayOfNumbers(start, end) {
    let myArray = [];
    for (let i = start; i <= end; i++) {
        myArray.push(i);
    }
    return myArray;
}

function runRandom() {
    let randomIndex = getRandomNumber(0, numbersArray.length - 1);
    let randomNumber = numbersArray[randomIndex];
    numbersArray.splice(randomIndex, 1)
    return randomNumber;
}

function showNums() {
    btn.disabled = true;
    let a = runRandom();
    let num = [];
    let numrd = [];
    num.push(a);
    while (a != 0) {
        let num = Math.floor(a % 10);
        a = Math.floor(a / 10);
        numrd.push(num);
    }
    numrd.sort(() => -1);

    console.log(num);
    console.log(numrd);
    
    if (numrd.length === 4) {
        setTimeout(function () {
            output1.innerHTML = numrd[0];
        }, 2100);
        setTimeout(function () {
            output2.innerHTML = numrd[1];
        }, 4100);
        setTimeout(function () {
            output3.innerHTML = numrd[2];
        }, 6100);
        setTimeout(function () {
            output4.innerHTML = numrd[3];
        }, 7100);
    }
    if (numrd.length === 3) {
        setTimeout(function () {
            output1.innerHTML = 0;
        }, 2100);
        setTimeout(function () {
            output2.innerHTML = numrd[0];
        }, 4100);
        setTimeout(function () {
            output3.innerHTML = numrd[1];
        }, 6100);
        setTimeout(function () {
            output4.innerHTML = numrd[2];
        }, 7100);
    }
    if (numrd.length === 2) {
        setTimeout(function () {
            output1.innerHTML = 0;
        }, 2100);
        setTimeout(function () {
            output2.innerHTML = 0;
        }, 4100);
        setTimeout(function () {
            output3.innerHTML = numrd[0];
        }, 6100);
        setTimeout(function () {
            output4.innerHTML = numrd[1];
        }, 7100);
    }
    if (numrd.length === 1) {
        setTimeout(function () {
            output1.innerHTML = 0;
        }, 2100);
        setTimeout(function () {
            output2.innerHTML = 0;
        }, 4100);
        setTimeout(function () {
            output3.innerHTML = 0;
        }, 6100);
        setTimeout(function () {
            output4.innerHTML = numrd[0];
        }, 7100);
    }

    // start loading
    let i = 0, j = 0, k = 0; h = 0
    let action = setInterval(function () {
        output1.innerHTML = i++;
        output2.innerHTML = j++;
        output3.innerHTML = k++;
        output4.innerHTML = h++;
    }, 100);
    
    setTimeout(function () {
        clearInterval(action);
        let i = 9, j = 9, k = 9; h = 9;
        let action1 = setInterval(function () {
            output1.innerHTML = i--;
            output2.innerHTML = j--;
            output3.innerHTML = k--;
            output4.innerHTML = h--;

        }, 100);

        setTimeout(function () {
            clearInterval(action1);
            let j = 0, k = 0; h = 0;
            let action2 = setInterval(function () {
                output2.innerHTML = j++;
                output3.innerHTML = k++;
                output4.innerHTML = h++;
            }, 100);

            setTimeout(function () {
                clearInterval(action2);
                let j = 9, k = 9; h= 9;
                let action3 = setInterval(function () {
                    output2.innerHTML = j--;
                    output3.innerHTML = k--;
                    output4.innerHTML = h--;
                }, 100);

                setTimeout(function () {
                    clearInterval(action3);
                    let k = 0; h = 0;
                    let action4 = setInterval(function () {
                        output3.innerHTML = k++;
                        output4.innerHTML = h++;

                    }, 100);

                    setTimeout(function () {
                        clearInterval(action4);
                        let k = 9; h = 9;
                        let action5 = setInterval(function () {
                            output3.innerHTML = k--;
                            output4.innerHTML = h--;
                        }, 100);
                        setTimeout(function () {
                            clearInterval(action5);
                            let  h = 0;
                            let action6 = setInterval(function () {
                                output4.innerHTML = h++;
                            }, 100);
                            setTimeout(function () {
                                clearInterval(action6);
                       
    
                            }, 1000);

                        }, 1000);

                    }, 1000);

                }, 1000);

            }, 1000)

        }, 1000);

    }, 1000);
    //end loading
    
    function sss() {
        count += 1;
        console.log(count);
        const popup = document.querySelector(".popup");
        const showLucky = document.querySelector(".showLucky");
        showLucky.style.visibility = 'visible';
        popup.style.visibility = 'hidden';
        document.getElementById("showNum").innerHTML = num;

        if (numrd.length === 1) {
            document.querySelector("#showNum").innerHTML = "0" + numrd[0];
        }

        back.addEventListener("click", function () {
            if (count === 20) {     // Thiet lap so lan quay
                location.reload();
            }
            if (count < 20) {
                showLucky.style.visibility = 'hidden';
                popup.style.visibility = 'visible';
                btn.focus();
            }
        });
        output1.innerHTML = 0;
        output2.innerHTML = 0;
        output3.innerHTML = 0;
        output4.innerHTML = 0;
    }

    setTimeout(sss, 8500);  // Thiet lap thoi gian hien thi giai
    setTimeout(function(){
        btn.disabled = false;
    }, 8510);
}

document.addEventListener('keydown', (e) => {
    e = e || window.event;
    if(e.keyCode == 116){
        e.preventDefault();
    }
});

let output1 = document.getElementById("num-1");
let output2 = document.getElementById("num-2");
let output3 = document.getElementById("num-3");
let output4 = document.getElementById("num-4");

let btn = document.querySelector(".bt-play");
let back = document.querySelector(".body");
let count = 0;
let numbersArray = createArrayOfNumbers(1, 1200); // Thiet lap so luong random
btn.addEventListener("click", showNums);





