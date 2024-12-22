var interpret = function(command) {
    let correctForm = command.split("");
    let newCommand = "";

    for ( let i = 0; i < correctForm.length; i++){
        if(correctForm[i] === "(" && correctForm[i+1] === ")") { 
            newCommand += "o";
            continue;
        }


        if( correctForm[i] === "(" ||  correctForm[i] === ")"){
            continue;
        } 


        newCommand += correctForm[i]
    }

    
    return newCommand

};


interpret("(al)G(al)()()G");
