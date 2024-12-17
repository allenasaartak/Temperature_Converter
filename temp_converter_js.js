
function convert(){
    const ctf = document.getElementById("ctf");
    const ftc = document.getElementById("ftc");
    const myT = document.getElementById("myT");
    const myP = document.getElementById("myP");
    let ans;
    if(document.getElementById("mySub").checked){
        myP.textContent = "";
    }
    if(ctf.checked){
        ans = (Number(myT.value)*1.8)+32;
        myP.textContent = ans+"°F";
    }
    else{
        ans = (Number(myT.value)-32)*(5/9);
        myP.textContent = ans+"°C";
    }
}
