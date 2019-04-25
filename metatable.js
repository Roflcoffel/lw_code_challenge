//scb structure for metatables
//title, variables
//           |
//           -> code, text, elimination, time, valuues, valueTexts

class MetaTable {
        constructor(scbMetatable) {
                this.title = scbMetatable.title;
                this.regions = {};
                
                //key       : value
                //region_id : region_name
                for (let i = 0; i < scbMetatable.variables[0].values.length; i++) {
                        this.regions[scbMetatable.variables[0].values[i]] = scbMetatable.variables[0].valueTexts[i];
                }

                this.years = scbMetatable.variables[2].values;
        }

        Print() {
              
        }

}
