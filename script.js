let mygrade = 59;

if (mygrade >= 90) {
    console.log("A");
}

else if(mygrade < 90 && mygrade > 80) {
    console.log("B");
}

else if(mygrade < 80 && mygrade > 70) {
    console.log("C");
}

else if(mygrade < 70 && mygrade > 60) {
    console.log("D");
}

else {
    console.log("F");
}

const inputVariable = 67;

switch (true) {
    case inputVariable > 90: 
    console.log("A");
    break;
    case inputVariable < 90 && inputVariable > 80:
    console.log("B");
    break;
    case inputVariable < 80 && inputVariable > 70:
    console.log("C");
    break;
    case inputVariable < 70 && inputVariable > 60:
    console.log("D");
    break;
    default:
        console.log("F");
    break;
}
