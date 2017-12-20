import React from "react";
import classnames from "classnames";
import { connect } from "dva";
import { Table } from "antd";


class App extends React.Component {
  constructor({ }) {
    super();
  }

  //点击页码条、改变每页多少条都会做的事情
  changeHandler(pagination, filters, sorter) {
    this.props.changepage(pagination.current, pagination.pageSize, sorter.field, sorter.order);
  }

  clickHandler(image_filename, colorEnglish){
    this.props.changeXuanfu(true);
    this.props.changeChexing(image_filename);
    this.props.changeColor(colorEnglish);
  }

  render() {
    
    //定义列名
    const columns = [
      {
        "title": "图片",
        dataIndex: 'image',
        key: 'image',
        "render":  (a, record, c) => {
          return <span onClick={() => { this.clickHandler(record.image_filename , record.colorEnglish)}}>
              <img src={`/carimages/${record.image_filename}/${record.colorEnglish}/view/${record.image}`} width="70"/>
            </span>
        }
      },
      {
        title: '品牌',
        dataIndex: 'brand',
        key: 'brand'
      },
      {
        title: '车系',
        dataIndex: 'series_name',
        key: 'series_name'
      },
      {
        title: '价格（万）',
        dataIndex: 'price',
        key: 'price',
        "sorter": true
      },
      {
        title: '里程（万）',
        dataIndex: 'km',
        key: 'km',
        "sorter": true
      },
      {
        title: '车型',
        dataIndex: 'type',
        key: 'type'
      },
      {
        title: '颜色',
        dataIndex: 'color',
        key: 'color'
      },
      {
        title: '座位数',
        dataIndex: 'seat',
        key: 'seat'
      },
      {
        title: '排量',
        dataIndex: 'displacement',
        key: 'displacement',
        "sorter": true
      },
      {
        title: '排放标准',
        dataIndex: 'emission',
        key: 'emission'
      },
      {
        title: '变速箱',
        dataIndex: 'transmission',
        key: 'transmission'
      },
      {
        title: '国别',
        dataIndex: 'country',
        key: 'country'
      },
      {
        title: '购买日期',
        dataIndex: 'buydate',
        key: 'buydate',
        "sorter": true
      },
      {
        title: '车主',
        dataIndex: 'saler',
        key: 'saler'
      }
    ];
    return <div className="tbtd">
      <h3><b>共{this.props.amount}个车符合要求</b></h3>
      <Table
        rowKey="id"
        dataSource={this.props.results}
        columns={columns}
        pagination={{
          "current": this.props.page,
          "pageSize": this.props.pagesize,
          "total": this.props.amount,
          "pageSizeOptions": ["10", "20", "30", "40", "100"],
          "showSizeChanger": true,
          "loading": true
        }}
        onChange={(pagination, filters, sorter) => { this.changeHandler(pagination, filters, sorter) }}
      />

    </div>
  }
}

export default connect(
  ({ carpicker }) => ({
    "results": carpicker.results,
    "amount": carpicker.amount,
    "page": carpicker.page,
    "pagesize": carpicker.pagesize
  }),
  (dispatch) => ({
    changepage(page, pagesize, field, order) {
      
      dispatch({ "type": "carpicker/changepage", page, pagesize, field, order });
    },
    changeColor(color){
      dispatch({"type" : "carshow/changeColor" , color})
    }
  })
)(App);