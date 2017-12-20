import React from "react";
import classnames from "classnames";
import { connect } from "dva";

 

//引入我们的控件组件
import TabCtrl from "./TabCtrl.js";
import AListCtrl from "./AListCtrl.js";
import RangeCtrl from "./RangeCtrl.js";
import MultipleSelectCtrl from "./MultipleSelectCtrl.js";
import SelectCtrl from "./SelectCtrl.js";
//引入标签组件
import Tags from "./Tags.js";
//引入表格组件
import MyTable from "./MyTable.js";


 
class CarPicker extends React.Component {
    constructor({fetchInit}) {
        super();

        this.state = {
            "brand" : ""
        }

        //拉取默认数据
        fetchInit();
        

        //控件的默认数据
        this.state = {
            carbrands: {
                "A": ["奥迪", "阿尔法·罗密欧", "阿斯顿·马丁", "安驰", "安凯客车"],
                "B": ["别克", "本田", "宝马", "奔驰", "标致"],
                "C": ["长安", "长城", "长安欧尚", "昌河", "成功汽车"],
                "D": ["大众", "东风风行", "东南", "东风风神", "道奇"],
                "F": ["丰田", "福特", "菲亚特", "福田", "法拉利"],
                "G": ["广汽传祺", "广汽吉奥", "观致", "GMC", "光冈"],
                "H": ["哈弗", "海马", "华泰", "黄海", "红旗"],
                "J": ["吉利", "江淮", "Jeep", "捷豹", "金杯"],
                "K": ["凯迪拉克", "克莱斯勒", "开瑞", "凯翼", "卡威"],
                "L": ["路虎", "铃木", "雷克萨斯", "陆风", "猎豹汽车"],
                "M": ["马自达", "MINI", "名爵", "玛莎拉蒂", "迈凯伦"]
            },
            series : {
                "奥迪": {
                    "special": ["Q7（进口）", " A8（进口）", "A3", "Q3", " A7（进口）"],
                    "all": {
                        "一汽-大众奥迪": ["100", "200", "A3", "A4"],
                        "奥迪（进口）": ["A1（进口）", "A3（进口）", "A4（进口）", "A5（进口）", "A6（进口）"],
                        "奥迪RS（进口）": ["RS 3", "RS 5", " RS 6旅行车", " RS 7", "TT RS"]
                    }
                },
                "别克": {
                    "special": ["英朗", "凯越", "君越", "君威", "威朗"],
                    "all": {
                        "上汽通用别克": ["GL8", "VELITE 5", "世纪", "凯越", "君威"],
                        "别克（进口）": ["昂科雷", "荣御（进口）", "马刀"]
                    }
                },
                "吉利": {
                    "special": ["帝豪", "EC7", "博瑞", "远景", "帝豪GS"],
                    "all": {
                        "吉利汽车": ["EC7", "EC8", "GC7", "GX2", "GX7"]
                    }
                }
            },
            price : {
                "example": [
                    {
                        "chinese": "3万以下",
                        "b": 0,
                        "t": 3
                    },
                    {
                        "chinese": "3万到6万",
                        "b": 3,
                        "t": 6
                    },
                    {
                        "chinese": "6万到16万",
                        "b": 6,
                        "t": 16
                    },
                    {
                        "chinese": "16万到26万",
                        "b": 16,
                        "t": 26
                    }
                ]
                ,
                "min": 0,
                "max": 100
            },
            "km" : {
                "example": [
                    {
                        "chinese": "1万公里以内",
                        "b": 0,
                        "t": 1
                    },
                    {
                        "chinese": "3万公里以内",
                        "b": 0,
                        "t": 3
                    },
                    {
                        "chinese": "5万公里以内",
                        "b": 0,
                        "t": 5
                    },
                    {
                        "chinese": "8万公里以内",
                        "b": 0,
                        "t": 8
                    },
                    {
                        "chinese": "8万公里以上",
                        "b": 8,
                        "t": 100
                    }
                ]
                ,
                "min": 0,
                "max": 100
            },
            "type" : {
                "title": "车型",
                "options": ["小型车", "中型车", "豪华车","商务车"]
            },
            "color": {
                "title": "颜色",
                "options": ["白色","红色","棕色","黄色","黑色","金色","绿色","蓝色","其他颜色"]
            },
            "seat": {
                "title": "座位数",
                "options": ["4座", "5座", "7座",]
            },
            "displacement": {
                "title": "排量",
                "options": ["1.0L", "2.0L", "3.0L", "4.0L"]
            },
            "emission": {
                "title": "排放标准",
                "options": ["国三", "国四", "国五"]
            },
            "transmission": {
                "title": "变速箱",
                "options": ["自动", "手动"]
            },
            "country": {
                "title": "国别",
                "options": ["德国", "中国", "美国"]
            }
        }
    }

    //换品牌
    changebrand(brand){
        this.setState({
            brand
        })
    }

    //增加tag
    addtag(tagname,value,words) {
        this.props.addtag(tagname, value, words);
    }

    render() {
        return <div>
            <div className="ant-table">
                <div className="ant-table-body">
                    <table>
                        <tbody className="ant-table-tbody">
                            <tr className="ant-table-row">
                                <td className="td_h">
                                    品牌
                                </td>
                                <td>
                                    <TabCtrl 
                                        data={this.state.carbrands} 
                                        tagname="品牌" 
                                        addtag={this.addtag.bind(this)}
                                        changebrand={this.changebrand.bind(this)}
                                    ></TabCtrl>
                                </td>
                            </tr>
                            <tr className="ant-table-row">
                                <td className="td_h">
                                    车系
                                </td>
                                <td>
                                    <AListCtrl data={this.state.series[this.state.brand]} tagname="车系" addtag={this.addtag.bind(this)}></AListCtrl>
                                </td>
                            </tr>
                            <tr className="ant-table-row">
                                <td className="td_h">
                                    价格
                                </td>
                                <td>
                                    <RangeCtrl data={this.state.price} tagname="价格" addtag={this.addtag.bind(this)}></RangeCtrl>
                                </td>
                            </tr>
                            <tr className="ant-table-row">
                                <td className="td_h">
                                里程
                                </td>
                                <td>
                                    <RangeCtrl data={this.state.km} tagname="里程" addtag={this.addtag.bind(this)}></RangeCtrl>
                                </td>
                            </tr>
                            <tr className="ant-table-row">
                                <td className="td_h">
                                    其他
                                </td>
                                <td>
                                    <MultipleSelectCtrl 
                                        data={this.state.type} 
                                        tagname="车型" 
                                        addtag={this.addtag.bind(this)}
                                    ></MultipleSelectCtrl>
                                    {" "}
                                    <SelectCtrl
                                        data={this.state.color}
                                        tagname="颜色"
                                        addtag={this.addtag.bind(this)}
                                    ></SelectCtrl>
                                    {" "}
                                    <MultipleSelectCtrl 
                                        data={this.state.seat} 
                                        tagname="座位数"
                                        addtag={this.addtag.bind(this)}
                                     ></MultipleSelectCtrl>
                                    {" "}
                                    <SelectCtrl
                                        data={this.state.displacement}
                                        tagname="排量"
                                        addtag={this.addtag.bind(this)}
                                    ></SelectCtrl>
                                    {" "}
                                    <SelectCtrl
                                        data={this.state.emission}
                                        tagname="排放标准"
                                        addtag={this.addtag.bind(this)}
                                    ></SelectCtrl>
                                      {" "}
                                     <SelectCtrl
                                        data={this.state.transmission}
                                        tagname="变速箱"
                                        addtag={this.addtag.bind(this)}
                                    ></SelectCtrl>
                                    {" "}
                                    <SelectCtrl
                                        data={this.state.country}
                                        tagname="国别"
                                        addtag={this.addtag.bind(this)}
                                    ></SelectCtrl>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <br/>
                    <br/>
                    
                    <Tags></Tags>

                    <br />
                    <br />
                </div>
            </div>

            <div className="cl"></div>

            <MyTable 
                changeXuanfu={this.props.changeXuanfu}
                changeChexing={this.props.changeChexing}
            ></MyTable>
        </div>
    }
}

export default connect(
    null ,
    (dispatch)=>({
        addtag(tagname,value, words){
            dispatch({ "type": "carpicker/addtag", value, tagname, words })
        },
        fetchInit(){
            dispatch({ "type": "carpicker/fetchInit"})
        }
    })
)(CarPicker);