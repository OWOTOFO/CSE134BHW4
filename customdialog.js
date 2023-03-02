
let boolF = false;
let prm;
function showall(dia) {
    document.getElementById("txt").innerHTML = "";
    document.getElementById(dia).show();
}
function OkClicked(dia) {
    document.getElementById("txt").innerHTML = "";
    boolF = true;
    performClose(dia);
    if(dia == "prom"){
        prm = document.getElementById("name").value;;
    }
    updatetxt(dia, boolF);
}
function CanclClicked(dia) {
    document.getElementById("txt").innerHTML = "";
    boolF = false;
    performClose(dia);
    updatetxt(dia, boolF);
}
function updatetxt(dia,text){
    if(dia == "conf"){
        document.getElementById("txt").innerHTML = "Confirm result : " + text;
    }
    if(dia == "prom"){
        if(!boolF){
            document.getElementById("txt").innerHTML = "User didn't enter anything";
        }
        else{
            let cleanprm = DOMPurify.sanitize(prm);
            document.getElementById("txt").innerHTML = "Prompt result : " + cleanprm;
        }
    }
}

function performClose(dia) {
    document.getElementById(dia).close();
}
