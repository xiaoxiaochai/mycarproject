var express = require("express");
var fs = require("fs");
var mongoose = require("mongoose");
var url = require("url");
var app = express();

//静态化
app.use(express.static("www"));

//数据库
mongoose.connect("mongodb://localhost/carsystem");
var Car = require("./models/Car");

app.get("/api" , function(req,res){
    //GET请求
   var id = url.parse(req.url, true).query.id;
    var brand = url.parse(req.url, true).query.brand;
    var series_name = url.parse(req.url, true).query.series_name;
    var price = url.parse(req.url, true).query.price;
    var km = url.parse(req.url, true).query.km;
    var type = url.parse(req.url, true).query.type;
    var color = url.parse(req.url, true).query.color;
    var seat = url.parse(req.url, true).query.seat;
    var displacement = url.parse(req.url, true).query.displacement;
    var emission = url.parse(req.url, true).query.emission;
    var transmission = url.parse(req.url, true).query.transmission;
    var country = url.parse(req.url, true).query.country;

    var buydate = url.parse(req.url, true).query.buydate;
    var saler = url.parse(req.url, true).query.saler;
    var detail = url.parse(req.url, true).query.detail;

    var page = url.parse(req.url, true).query.page;
    var pagesize = url.parse(req.url, true).query.pagesize;
    var sortby = url.parse(req.url, true).query.sortby || "id";
    var sortDirec = url.parse(req.url, true).query.sortDirec || 1;

    
    //最终要在数据中查找的条件
    var searchJSON = {}

    //这个查找条件存在了，我们就加上这个条件。
    if (id) {
        searchJSON["id"] = id;
    }
    if (brand) {
        searchJSON["brand"] = brand;
    }
    if (series_name) {
        searchJSON["series_name"] = series_name;
    }
    if (price) {
        price = JSON.parse(price);
        searchJSON["price"] = { "$gte": price[0], "$lte": price[1] };
    }
    if (km) {
        km = JSON.parse(km);
        searchJSON["km"] = { "$gte": km[0], "$lte": km[1] };
    }
    if (type) {
        type = JSON.parse(type);
        searchJSON["type"] = { $in: type };
    }
    if (color) {
        searchJSON["color"] = color;
    }
    if (seat) {
        searchJSON["seat"] = seat;
    }
    if (displacement) {
        searchJSON["displacement"] = displacement;
    }
    if (emission) {
        searchJSON["emission"] = emission;
    }
    if (transmission) {
        searchJSON["transmission"] = transmission;
    }
    if (country) {
        searchJSON["country"] = country;
    }

    Car.count(searchJSON,function(err,amount){
        Car.find(searchJSON).sort({ [sortby]: sortDirec}).skip((page - 1) * pagesize).limit(pagesize).lean().exec((err,results)=>{
            res.json({"amount" : amount ,  "results" : results});
        });
    });    
});

app.get("/carimages/:chexing", function (req, res) {
    
    var dajson = {};

    var chexing = req.params.chexing;

    fs.readdir("./www/carimages/" + chexing, function (err, data) {
        data.forEach((color) => {
            dajson[color] = {};

            var data2 = fs.readdirSync("./www/carimages/" + chexing + "/" + color);

            data2.forEach((album) => {
                var data3 = fs.readdirSync("./www/carimages/" + chexing + "/" + color + "/" + album);
                dajson[color][album] = data3;
            });
        });
        res.json({ "results": dajson });
    });
});

app.listen(3000);
console.log("3000端口已经监听");
 