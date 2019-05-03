
class Turnout {
        constructor(dt, mt) {
                this.dataTable = dt;
                this.metaTable = mt;
        }

        Print() {
                this.dataTable.data.forEach(data => {
                        var year_string = "<p>" + data["year"] + " : ";
                        var ids_string = "";
                        data.region_id.forEach(id => {
                                ids_string = ids_string + this.metaTable.regions[id] + ", "
                        })
                        var data_string = " : " + data["percentage"] + "%</p>";
                        
                        $(".left").append(
                                year_string + ids_string.slice(0, -2) + data_string
                        );
                })
        }

        
        //Highest percent turnout per year
        //Modifies datatables.data
        SortHighest() {
                var highest = [];
                this.metaTable.years.forEach(year => {
                        var perYear = this.dataTable.data.filter(obj => obj["year"] == year);

                        //Sort
                        var curHighest = perYear[perYear.length-1];
                        var sortedHighest = [];
                        perYear.forEach((obj) => {
                                if(obj["percentage"] >= curHighest["percentage"]) {
                                        curHighest = obj;
                                        sortedHighest.push(obj);
                                }
                        })

                        //Find Duplicates
                        var curYearHighest = sortedHighest[sortedHighest.length-1];
                        highest.push(curYearHighest);
                        for (let i = sortedHighest.length-2; i >= 0; i--) {
                                if(curYearHighest["percentage"] != sortedHighest[i]["percentage"]) {
                                        break;
                                }
                                highest[highest.length-1]["region_id"].push(sortedHighest[i]["region_id"][0])
                        }
                });
                this.dataTable.data = highest;
        }
}