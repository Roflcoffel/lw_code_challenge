
class Turnout {
        constructor(dt, mt) {
                this.dataTable = dt;
                this.metaTable = mt;
        }

        Print() {
                for (let i = 0; i < this.dataTable.size; i++) {
                        $(".left").append(
                                "<p>" + this.metaTable.regions[this.dataTable.region_ids[i]] + "\
                                 : " + this.dataTable.precentages[i] + "%\
                                 : " + this.dataTable.years[i] + "</p>"
                        );

                        /*$(".middle").append(
                                "<p>" + this.dataTable.precentages[i] + "</p>"
                        )

                        $(".right").append(
                                "<p>" + this.dataTable.years[i] + "</p>"
                        );*/
                }
        }
}