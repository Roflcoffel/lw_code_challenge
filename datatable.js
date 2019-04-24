//scb structure for datatables
//code, text, type, unit, data
//                          |
//                          -> key, value

class DataTable {
        constructor(scbDatatable) {
                this.size = scbDatatable.data.length;
                this.region_ids = [];
                this.years = []; //connect the year and precentage, same as in metatables.
                this.precentages = [];

                scbDatatable.data.forEach(obj => {
                        this.region_ids.push(obj.key[0])
                        this.years.push(obj.key[1])
                        this.precentages.push(obj.values[0]);
                });
        }

        Print() {
                console.log(this.size);
                console.log(this.region_ids);
                console.log(this.years);
                console.log(this.precentages);
        }


}
