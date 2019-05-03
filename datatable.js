//scb structure for datatables
//code, text, type, unit, data
//                          |
//                          -> key, value
class DataTable {
        constructor(scbDatatable) {
                this.raw = scbDatatable;
                this.data = [];
                
                scbDatatable.data.forEach(obj => {
                        this.data.push({
                                "region_id":[obj.key[0]], 
                                "year":obj.key[1], 
                                "percentage":obj.values[0]
                        });
                });
        }

        Print() {
                console.log(this);
        }
}
