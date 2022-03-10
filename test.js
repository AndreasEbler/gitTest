/*

Example for inputData

inputData.rules ..
    rules is optional - if doesn't exist call all the functions defined in the rulesset
inputData.fields ..

{
        "ruleset" : [
            "process1"
        ],

        "rules" : {
            "paycompvalue" : "computeComp"
        },

        "fields":[
            {
                "userId" : "CTFC-T250-DEV625",
                "paycompvalue" : "600", 
                "startDate" : "15/01/2017"     
            },
            {
                "userId" : "CTFC-T250-DEV626",
                "paycompvalue" : "700", 
                "startDate" : "15/01/2018"     
            }
       ]
}



*/

function computeComp () {
    // loop over inputData and change the value

    for (let i=0; i< inputData.fields.length; i++) {
        let inputField = inputData.fields [i];

        if (inputField.paycompvalue > 600) {
            outputData.fields [i].paycompvalue = 100;
        }
    }
}

function addUserPostfix () { 

    // add Postfix to user field
    for (let i=0; i< inputData.fields.length; i++) {
        let inputField = inputData.fields [i];

        outputData.fields [i].userId = inputField.userId.concat("_", i.toString());
    }
}



