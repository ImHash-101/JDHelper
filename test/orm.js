var orm = require("orm");
const { DB_URL } = require("../config/default")
orm.connect(DB_URL, function (err, db) {
  if (err) throw err;

  var Person = db.define("person", {
    name      : {type:'text',mapsTo:'fullname'},
    surname   : String,
    age       : Number, // FLOAT
    male      : Boolean,
    continent : [ "Europe", "America", "Asia", "Africa", "Australia", "Antarctica" ], // ENUM type
    photo     : Buffer, // BLOB/BINARY
    data      : Object // JSON encoded
  }, {
    methods: {
      fullName: function () {
        return this.name + ' ' + this.surname;
      }
    },
    validations: {
      age: orm.enforce.ranges.number(18, undefined, "under-age")
    }
  });

  // add the table to the database
  db.sync(function(err) {
    if (err) throw err;

    // add a row to the person table
    Person.create({ name: "Hasks", age: 27 },()=>{})



  });

  Person.findAll()
});
