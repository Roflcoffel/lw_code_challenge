
class Turnout {
        constructor(dt, mt) {
                this.dataTable = dt;
                this.metaTable = mt;
        }

        Print() {
                this.dataTable.data.forEach(data => {
                        $(".left").append(
                                "<p>" + data["year"] + "\
                                : " + this.metaTable.regions[data["region_id"]] + "\
                                : " + data["percentage"] + "%</p>"
                        );
                })
        }

        //Highest percent turnout per year
        //returns new array
        Highest_Per_Year() {
                var highest = [];
                this.metaTable.years.forEach(year => {
                        var perYear = this.dataTable.data.filter(obj => obj["year"] == year);

                        var largest = perYear[0];
                        perYear.forEach((obj) => {
                                if(obj["percentage"] > largest["percentage"]) {
                                        largest = obj;
                                }
                        })

                        highest.push(largest);
                });
                return highest;
        }
}