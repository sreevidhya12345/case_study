// const form=document.getElementById("formvalidate");
// form.addEventListener('submit',function(event){
//     if(!validate())
//     event.preventDefault();
// })

const username=document.getElementById('username');
const password=document.getElementById('password');
function validate(username,password,callback)
{
    if(username.value.trim() !='admin'||password.value.trim() !='12345')
        {
            alert("Incorrect username or password")
            return false;

        }
        callback();
}



function redirect() {
         window.open("./home.html")
     
}
// 
// 
function logout()
{
    window.location.href="./index.html";
}

// dispaly function
// 
function displaylist()
{
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange=function(){
        try{
            if(httpRequest.readyState===XMLHttpRequest.DONE){
                if(httpRequest.status ===200){
                    console.log(httpRequest.responseText);
                    display(httpRequest.responseText);
                }
                else{
                    alert("error from API");
                }
            }
        }
        catch(e){
            // alert(e.description);
            alert("error1");
            }
    };
    try{
        httpRequest.open('GET','https://jsonplaceholder.typicode.com/todos',true);
        httpRequest.send();
    }
    catch(e){
        // alert(e.description);
        alert("error")
    }
    
}
// 
// 
function display(data){
    let list=JSON.parse(data);
    let table=document.getElementById('todotable');

    for(var i=0;i<list.length;i++){
        let rowcount=table.rows.length;
        var row=table.insertRow(rowcount);
        var cell1=row.insertCell(0);
        cell1.innerHTML=list[i].id;

        var cell2=row.insertCell(1);
        cell2.innerHTML=list[i].title;

        var cell3 = row.insertCell(2);
        var element=document.createElement("input");
        element.type="checkbox";

        if(list[i].completed==true){
            element.setAttribute("checked","true");
            element.setAttribute("disabled","true");
        }
        element.addEventListener('change',(event)=>{
            if(event.currentTarget.checked){
                count++;
                checkcounter();
            }
            else{
                count--;
            }
        })
        cell3.appendChild(element);

        }
    }
// }
var count=0;
function checkcounter(){
    let promise =new Promise(function(resolve,reject){
        if (count==5) {
            resolve("Congrats. 5 Tasks have been Successfully Completed.");
            }
    })
    promise.then(function(s){
        alert(s);
    })
}
