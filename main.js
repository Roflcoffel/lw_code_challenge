//main.js
const url = "https://api.scb.se/OV0104/v1/doris/sv/ssd/ME/ME0104/ME0104D/ME0104T4"

$(document).ready(function() {
        var scb = new Scb(url);

        var query = {
                "query": [{"code":"Region", "selection":{"filter":"all", "values":["*"]}},
                          {"code":"ContentsCode", "selection":{"filter":"item", "values":["ME0104B8"]}}],
                "response": {"format":"json"}
        }

        var meta = scb.GetMetaTable().promise();
        var data = scb.Post(query).promise();
        
        //Combine Data;
        Promise.all([meta, data])
        .then(values => {
                var turnout = new Turnout(values[1], values[0]);
                turnout.dataTable.data = turnout.Highest_Per_Year();
                turnout.Print();
        })
        .catch((error) => {
                console.log("Error: when checking promise");
                console.log(error);
        })
})