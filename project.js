let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn");
                                                //------------------------------------------------------------------
let btn0 = document.querySelector("#btn0");
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let btn4 = document.querySelector("#btn4");
let btn5 = document.querySelector("#btn5");
let btn6 = document.querySelector("#btn6");
let btn7 = document.querySelector("#btn7");
let btn8 = document.querySelector("#btn8");

let p = document.querySelector(".hidden");
                                               //----------------------------------------------------------------
let turn0 = true;                              //playerx , player O




                                              //.............1......................
                                              //boxes = [2,3,4];
                                              //boxes.forEach((box) => { console.log(box) });
                                              //in the console page 2 3 4 wil appear
 
                                              //.............2......................
                                              //boxes.forEach((box) => { console.dir(box); });



let counter = 0;
let turnO = "true";
let flag = true;




boxes.forEach                                //this code will be in the memory and will work after the clicking and this is 9 parts of code
    (
        (box) => {
            box.addEventListener
                (                           //when we click on the button we depend on the code of the addeventlistener which is related to the button which is written already 
                    "click",                //an ar guemnt
                    () =>{ 
                                            //console.log("buttton was clicked");
                        if (turnO == "true") {
                            box.innerText = "O";
                            turnO = "flase";
                        }
                        else {
                            box.innerText = "X";
                            turnO ="true";   
                        }
                        box.disabled = true;//after clicking on the button it is converted to disapled 



                                            //counter++;
                                            //console.log(counter); local variable the fun can see him and is stored in the memory
                                            //-----------------------------------------------------------------------------------------
                                            //the importance of this flah is that the winner is player O wil not be repeated and the winner is player X will not repeated if one
                                            //of the 2 persons won



                                            //-----------------------------------------------------------------------------------------
                        checkWinner();

                        
                    }                       //an argument
                     
                );                          //since it is a call of a fn in a fn body so we put;
        }                                   //an argument


);                                          //since it is a call of a fn
                                            //console.log(counter);//this work after the page loads directly before the box.addEventListener


                                            //we called foreach to use it
                                            //the two fns was called and was executed
                        const checkWinner = ()=>
                        {
                            if (btn0.innerText == "O" & btn1.innerText == "O" & btn2.innerText == "O" & flag == true)

                            {
                                console.log("the winner is player O");
                                flag = false;
                                p.style.fontSize = "50px";
                                p.style.color = "red";
                                p.innerText = "player O is the winner";
                                disableBoxes();

                            }

                            if (btn0.innerText == "X" & btn1.innerText == "X" & btn2.innerText == "X" & flag == true)

                            {
                                console.log("the winner is player X"); flag = false;
                                p.style.fontSize = "50px";
                                p.style.color = "red";
                                p.innerText = "player X is the winner";
                                disableBoxes();

                            }

                            if (btn0.innerText == "O" & btn3.innerText == "O" & btn6.innerText == "O" & flag == true)

                            {
                                console.log("the winner is player O"); flag = false;
                                p.style.fontSize = "50px";
                                p.style.color = "red";
                                p.innerText = "player O is the winner";
                                disableBoxes();

                            }
                            if (btn0.innerText == "X" & btn3.innerText == "X" & btn6.innerText == "X" & flag == true)

                            {
                                console.log("the winner is player X"); flag = false;
                                p.style.fontSize = "50px";
                                p.style.color = "red";
                                p.innerText = "player X is the winner";
                                disableBoxes();

                            }

                            if (btn0.innerText == "O" & btn4.innerText == "O" & btn8.innerText == "O" & flag == true)

                            {
                                console.log("the winner is player O"); flag = false;
                                p.style.fontSize = "50px";
                                p.style.color = "red";
                                p.innerText = "player O is the winner";
                                disableBoxes();

                            }

                            if (btn0.innerText == "X" & btn4.innerText == "X" & btn8.innerText == "X" & flag == true)

                            {
                                console.log("the winner is player X"); flag = false;
                                p.style.fontSize = "50px";
                                p.style.color = "red";
                                p.innerText = "player X is the winner";
                                disableBoxes();

                            }

                            if (btn1.innerText == "O" & btn4.innerText == "O" & btn7.innerText == "O" & flag == true)

                            {
                                console.log("the winner is player O"); flag = false;
                                p.style.fontSize = "50px";
                                p.style.color = "red";
                                p.innerText = "player O is the winner";
                                disableBoxes();

                            }

                            if (btn1.innerText == "X" & btn4.innerText == "X" & btn7.innerText == "X" & flag == true)

                            {
                                console.log("the winner is player X"); flag = false;
                                p.style.fontSize = "50px";
                                p.style.color = "red";
                                p.innerText = "player X is the winner";
                                disableBoxes();

                            }

                            if (btn2.innerText == "O" & btn5.innerText == "O" & btn8.innerText == "O" & flag == true)

                            {
                                console.log("the winner is player O"); flag = false;
                                p.style.fontSize = "50px";
                                p.style.color = "red";
                                p.innerText = "player O is the winner";
                                disableBoxes();

                            }

                            if (btn2.innerText == "X" & btn5.innerText == "X" & btn8.innerText == "X" & flag == true)

                            {
                                console.log("the winner is player X"); flag = false;
                                p.style.fontSize = "50px";
                                p.style.color = "red";
                                p.innerText = "player X is the winner";
                                disableBoxes();

                            }

                            if (btn2.innerText == "O" & btn4.innerText == "O" & btn6.innerText == "O" & flag == true)

                            {
                                console.log("the winner is player O"); flag = false;
                                p.style.fontSize = "50px";
                                p.style.color = "red";
                                p.innerText = "player O is the winner";
                                disableBoxes();

                            }

                            if (btn2.innerText == "X" & btn4.innerText == "X" & btn6.innerText == "X" & flag == true)

                            {
                                console.log("the winner is player X"); flag = false;
                                p.style.fontSize = "50px";
                                p.style.color = "red";
                                p.innerText = "player X is the winner";
                                disableBoxes();

                            }

                            if (btn3.innerText == "O" & btn4.innerText == "O" & btn5.innerText == "O" & flag == true)

                            {
                                console.log("the winner is player O"); flag = false;
                                p.style.fontSize = "50px";
                                p.style.color = "red";
                                p.innerText = "player O is the winner";
                                disableBoxes();

                            }

                            if (btn3.innerText == "X" & btn4.innerText == "X" & btn5.innerText == "X" & flag == true)

                            {
                                console.log("the winner is player X"); flag = false;
                                p.style.fontSize = "50px";
                                p.style.color = "red";
                                p.innerText = "player X is the winner";
                                disableBoxes();

                            }
                            if (btn6.innerText == "O" & btn7.innerText == "O" & btn8.innerText == "O" & flag == true)

                            {
                                console.log("the winner is player O"); flag = false;
                                p.style.fontSize = "50px";
                                p.style.color = "red";
                                p.innerText = "player O is the winner";
                                disableBoxes();
                                
                            }

                            if (btn6.innerText == "X" & btn7.innerText == "X" & btn8.innerText == "X" & flag == true)

                            {
                                console.log("the winner is player X"); flag = false;
                                p.style.fontSize = "50px";
                                p.style.color = "red";
                                p.innerText = "player X is the winner";
                                disableBoxes();

                            }
}
                                            //const showWinner = () =>
                                            //{
                                            //   disableBoxes();
                                            //}

                          resetBtn.addEventListener("click", () => 
                          {
                              btn0.innerText = "";
                              btn1.innerText = "";
                              btn2.innerText = "";
                              btn3.innerText = "";
                              btn4.innerText = "";
                              btn5.innerText = "";
                              btn6.innerText = "";
                              btn7.innerText = "";
                              btn8.innerText = "";
                              enableBoxes();
                              p.innerText = "";

                          }
                          );

                           const disableBoxes = () =>
                          {   
                                btn0.disabled = true;
                                btn1.disabled = true;
                                btn2.disabled = true;
                                btn3.disabled = true;
                                btn4.disabled = true;
                                btn5.disabled = true;
                                btn6.disabled = true;
                                btn7.disabled = true;
                                btn8.disabled = true;

                          
                          }
                          const enableBoxes= ()=>
                          {
                            btn0.disabled = false;
                            btn1.disabled = false;
                            btn2.disabled = false;
                            btn3.disabled = false;
                            btn4.disabled = false;
                            btn5.disabled = false;
                            btn6.disabled = false;
                            btn7.disabled = false;
                            btn8.disabled = false;
                          }