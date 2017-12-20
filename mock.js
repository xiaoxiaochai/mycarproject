
var fs = require("fs");
var _ = require("underscore");

var mock = require("mockjs");
var Random = mock.Random;

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/carsystem");
var Car = require("./models/Car");

var carbrand_series = {
    "奥迪": {
        "pinyin": "A",
        "country": "德国",
        "series": [
            {
                "series_name": "A3",
                "type": "豪华车",
                "seat": 4,
                "colors" : {
                    "green": "1024x0_1_q87_autohomecar__wKgFW1kTN5CATWdjAAbf14rrsS4853.jpg",
                    "orange": "1024x0_1_q87_autohomecar__wKgHy1kAA1OAWoJPAAjVdNuUIFg722.jpg",
                    "red": "1024x0_1_q87_autohomecar__wKgH0lj-w7aAKfuDAAY63i-YfBQ123.jpg",
                    "white": "1024x0_1_q87_autohomecar__wKgH5FkxLziARXeFAAqDQ2azoi0704.jpg"   
                },
                "image_filename": "Audi_A3"
            }
        ]
    },
    "别克": {
        "pinyin": "B",
        "country": "美国",
        "series": [
            {
                "series_name": "威朗",
                "type": "中型车",
                "seat": 7,
                "colors" : {
                    "blue": "1024x0_1_q87_autohomecar__wKgH2VaBLE-APqCLAAmyAl5SEQc320.jpg",
                    "brown" : "1024x0_1_q87_autohomecar__wKjBy1j55sCAMmc3AAh-lJSzVKQ772.jpg",
                    "gray": "1024x0_1_q87_autohomecar__wKgH11ZtUJ2AUnB_AAhDClgXmKE827.jpg",
                    "white": "1024x0_1_q87_autohomecar__wKgFWFf8vAyAY2J0AAsG8fyGdZ0869.jpg"
                },
                "image_filename": "Buick_verano"
            }
        ]
    },
    "吉利": {
        "pinyin": "J",
        "country": "中国",
        "series": [
            {
                "series_name": "帝豪",
                "type": "小型车",
                "seat": 5,
                "colors": {
                    "gold": "1024x0_1_q87_autohomecar__wKjBwVeEn9-AW9o2AAz-avleNks563.jpg",
                    "white": "1024x0_1_q87_autohomecar__wKjBzlfP_EaAeAmLAAfTxiCbp1M465.jpg"
                },
                "image_filename": "geely_dihaoGL"
            },
            {
                "series_name": "远景",
                "type": "商务车",
                "seat": 5,
                "colors": {
                    "black": "1024x0_1_q87_autohomecar__wKjBxlglq2GASkeWAAXldqX4O3Y638.jpg",
                    "red": "1024x0_1_q87_autohomecar__wKgH0lj4SmuAUij5AAw_PmxBg1c240.jpg",
                    "white": "1024x0_1_q87_autohomecar__wKjBwlgoJqCACGPcAAvqyPoku-U870.jpg"
                },
                "image_filename": "geely_yuanjing"
            }
        ]
    }
};

var arr = [];

for(var i = 0 ; i < 5000 ; i++){
    let brand = _.sample(Object.keys(carbrand_series), 1)[0];
    let series = _.sample(carbrand_series[brand].series , 1)[0];
    let color = _.sample(Object.keys(series.colors),1)[0];
    let colorChineseEnglish = {
        "white" : "白色",
        "orange" : "橙色",
        "yellow" : "黄色",
        "black" : "黑色",
        "red" : "红色",
        "silver" : "银色",
        "green" : "绿色",
        "blue" : "蓝色",
        "brown" : "棕色",
        "gold" : "金色"
    };

    let d = new Date(Random.integer(2013, 2017), Random.integer(0, 11), Random.integer(1, 31));
    arr.push({
        "id" : 1000 + i ,
        "image": series.colors[color] ,
        "image_filename": series.image_filename,
        "brand": brand,
        "series_name": series.series_name,
        "price" : _.random(0.2,100),
        "km" : _.random(0,100),
        "type": series.type,
        "color": colorChineseEnglish[color] || "其他颜色",
        "colorEnglish" : color ,
        "seat": series.seat, 
        "displacement" : _.sample(["1.0L", "2.0L", "3.0L", "4.0L"],1)[0],
        "emission" : _.sample(["国三","国四","国五"],1)[0],
        "transmission" : _.sample(["自动","手动"],1)[0],
        "country" : carbrand_series[brand].country,

        "buydate": d.getFullYear() + "-" + d.getMonth() + "-" + d.getDate(),
        "saler": Random.cname(),
        "detail": Random.cparagraph()
    });
}

Car.remove({},function(err,data){
    console.log("【删除了" + data.result.n + "数据】");
    Car.insertMany(arr , function(err , data){
        console.log("【添加了" + data.length + "条数据】");
    })
});