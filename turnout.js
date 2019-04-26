
class Turnout {
        constructor(dt, mt) {
                this.dataTable = dt;
                this.metaTable = mt;
        }

        Print() {
                this.dataTable.data.forEach(data => {
                        if(data["region_id_extra"] != null) {
                                $(".left").append(
                                        "<p>" + data["year"] + "\
                                        : " + this.metaTable.regions[data["region_id"]] + ",\
                                        " + this.metaTable.regions[data["region_id_extra"]] + "\
                                        : " + data["percentage"] + "%</p>"
                                );
                        }
                        else {
                                $(".left").append(
                                        "<p>" + data["year"] + "\
                                        : " + this.metaTable.regions[data["region_id"]] + "\
                                        : " + data["percentage"] + "%</p>"
                                );
                        }
                       
                })
        }

        //Highest percent turnout per year
        //returns new array
        Highest_Per_Year() {
                var highest = [];
                this.metaTable.years.forEach(year => {
                        var perYear = this.dataTable.data.filter(obj => obj["year"] == year);

                        var curLargest = perYear[0];
                        perYear.forEach((obj) => {
                                if(obj["percentage"] > curLargest["percentage"]) {
                                        curLargest = obj;

                                } else if(obj["percentage"] == curLargest["percentage"] 
                                        && obj["region_id"] != curLargest["region_id"]) {
                                                curLargest["region_id_extra"] = obj["region_id"]
                                }
                        })

                        highest.push(curLargest);
                });
                return highest;
        }
}