//scb.js

class Scb {
        constructor(url) {
                this.url = encodeURI(url);
        }

        GetMetaTable() {
                return $.getJSON(this.url).then(function(data) {
                        return new MetaTable(data);
                });
        }
        
        Post(query) {
                return $.post(this.url, JSON.stringify(query)).then(function(data) {
                        return new DataTable(data);
                })
        }
}