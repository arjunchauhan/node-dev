var mongoose = require('mongoose'),
    assert = require('assert');

var Dishes = require('./models/leaders');

// Connection URL
var url = 'mongodb://localhost:27017/conFusion';
mongoose.connect(url);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log("Connected correctly to server");

    // create a new dish
    Dishes.create({
        "name": "Peter Pan",
      "image": "images/alberto.png",
      "designation": "Chief Epicurious Officer",
      "abbr": "CEO",
      "description": "Our CEO, Peter, . . ."
    }, function (err, dish) {
        if (err) throw err;
        console.log('Dish created!');
        console.log(dish);
        
        db.collection('dishes').drop(function () {
                            db.close();
                        });
                    });
                });