//take  user from input 
let todo = [];
let Request = prompt("what action do you want to perform ?");
// console.log(Request);
    while(true){
        if(Request == "quit"){
            console.log("you quit the app");
            break;
        }
        if(Request == "list"){
            console.log("-----------");
            for(let i=0; i<todo.length; i++){
                console.log(i , todo[i]);
            }
            console.log("-----------");
        }else if(Request=="add"){
            let task = prompt("Which task you want to add in the to do list ?");
            todo.push(task); 
            console.log("task added");
        }
        else if (Request =="delete"){
            let idx = prompt ("please enter the element index you want to delete ")
            todo.splice(idx, 1);
            console.log("task deleted");
        }else{
            console.log("wrong request");
        }
        Request = prompt("what action do you want to perform ?");
    }
    //     req  = prompt("what action do you want to perform ?");
    // }



