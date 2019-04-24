//scb structure for metatables
//title, variables
//           |
//           -> code, text, elimination, time, valuues, valueTexts

//scb structure for datatables
//code, text, type, unit

class MetaTable {
        constructor(scbMetatable) {
                this.title = scbMetatable.title;
                this.regions = {};
                //this.regions = {"key":scbMetatable.variables[0].values, "value":scbMetatable.variables[0].valueTexts };
                for (let i = 0; i < scbMetatable.variables[0].values.length; i++) {
                        this.regions[scbMetatable.variables[0].values[i]] = scbMetatable.variables[0].valueTexts[i];
                }
        }

        Print() {
                //for (const region in this.regions) {
                //        $(".left").append(
                //               "<p>" + region.value + " : " + region.key + "</p>"
                //        );
                //}
              
        }


}
