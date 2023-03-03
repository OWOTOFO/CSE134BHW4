let isAdd = false;
let uid = 0;
let ei;
var db = [
    // ["Title1", " 2012-12-21","Some Summary", "1" ],
    // ["Title2", " 2013-12-21","Summary", "2"]
];


function addBlog(){
    document.querySelector("#titl").value = "";
    document.querySelector("#dat").value = "";
    document.querySelector("#summ").value = "";
    document.getElementById("windbox").show();
    isAdd = true;
}
function loadlist(){
    db = JSON.parse(localStorage.getItem("database"));
    let list = document.querySelector("#blogList");
    while(list.childElementCount > 1){
        list.removeChild(list.lastChild);
    }

    for(let i = 0; i < db.length; i++){
        let title = db[i][0];
        let date = db[i][1];
        let sum = db[i][2];
        let uid = db[i][3];
        var li = document.createElement("li");
        li.setAttribute("id",uid);
        li.innerHTML = "Title: " + title + "<br>" + " Date: " + date + "<br>" +
            "Summary: <br>" + sum + "<br>" + '<span  onclick="edit(this.parentElement)">Edit</span> | <span onclick="del(this.parentElement)">Delete</span></li>';
        list.appendChild(li);
    }
    if(list.childElementCount == 1){
        document.getElementById("noB").innerHTML = "No blog at this time";
    }
}
function addBl(){
    let title = document.querySelector("#titl").value;
    let date = document.querySelector("#dat").value;
    let sum = document.querySelector("#summ").value;
    let list = document.querySelector("#blogList");
    let uid = Date.now();
    var li = document.createElement("li");
    li.setAttribute("id",uid);
    li.innerHTML = "Title: " + title + "<br>" + " Date: " + date + "<br>" +
        "Summary: <br>" + sum + "<br>" + '<span  onclick="edit(this.parentElement)">Edit</span> | <span onclick="del(this.parentElement)">Delete</span></li>';
    list.appendChild(li);
    isAdd = false;
    var arr = [title,date,sum,uid];
    db.push(arr);
    localStorage.setItem("database", JSON.stringify(db));
    if(db.length != 0){
        document.getElementById("noB").innerHTML = "";
    }
}
function cancel(){
    document.getElementById("windbox").close();
}
function edit(e){
    var thisli = e.id;
    let i = 0;
    for(let x =0; x<db.length;x++){
        if(thisli == db[x][3]){
            i = x;
        }
    }
    console.log(i);
    ei = i;
    document.querySelector("#titl").value = db[i][0];
    document.querySelector("#dat").value = db[i][1];
    document.querySelector("#summ").value = db[i][2];
    document.getElementById("windbox").show();
}
function del(e){
    var thisli = e.id;
    let i = 0;
    for(let x =0; x<db.length;x++){
        if(thisli == db[x][3]){
            i = x;
        }
    }
    db.splice(i,1);
    let list = document.querySelector("#blogList");
    list.removeChild(e);
    localStorage.setItem("database", JSON.stringify(db));
    
    if(list.childElementCount == 1){
        document.getElementById("noB").innerHTML = "No blog at this time";
    }
}
function sve(e){
    if(isAdd){
        addBl();
        cancel();
    }
    else{
        let title = document.querySelector("#titl").value;
        let date = document.querySelector("#dat").value;
        let sum = document.querySelector("#summ").value;
        let list = document.querySelector("#blogList");
        db[ei][0]=title;
        db[ei][1]=date;
        db[ei][2]=sum;
        localStorage.setItem("database", JSON.stringify(db));
        cancel();
        loadlist();
    }
}
