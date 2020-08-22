// Import MySQL connection
var connection = require("../config/connection.js");

// Helper function for SQL syntax
function printQuestionMarks(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];
  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add single 'quotations'
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = `'${value}'`;
      }
      // changes {burger_name: 'value'} to ["burger_name='value'"]
      // change {devoured: true} to ["devoured=true"]
      arr.push(`${key}=${value}`);
    }
  }
  // translate array of strings to a single comma-separated string
  return arr.toString();
}

// Object for all our SQL statement functions
var orm = {
  all: function(tableInput, cb) {
    var queryString = `SELECT * FROM ${tableInput};`;
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  create: function(table, cols, vals, cb) {
    var queryString = `INSERT INTO ${table} (
                            ${cols.toString()}
                        )
                       VALUES (
                            ${printQuestionMarks(vals.length)}
                       );`;
    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  // An example of objColVals would be {burger_name: Cheeseburger, devoured: false}
  update: function(table, objColVals, condition, cb) {
    var queryString = `UPDATE   ${table}
                        SET     ${objToSql(objColVals)}
                        WHERE   ${condition};`;
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  delete: function(table, condition, cb) {
    var queryString = `DELETE FROM  ${table}
                       WHERE        ${condition};`;
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};

// Export the orm object for the model (burger.js).
module.exports = orm;
