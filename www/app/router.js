import React from "react";
import { Router, Route } from 'dva/router';

import Index from "./columns/index/Index";
import SaleCharts from "./columns/index/SaleCharts";
import Evaluation from "./columns/index/Evaluation";

import SaleIndex from "./columns/sale/SaleIndex";
import Details from "./columns/sale/Details";
import Purchasing  from "./columns/sale/Purchasing";
import Insurance  from "./columns/sale/Insurance";

import OrderIndex from "./columns/order/OrderIndex";
import OrderList from "./columns/order/OrderList";
import Customer from "./columns/order/Customer";

import PeopleIndex from "./columns/people/PeopleIndex";
import Department from "./columns/people/Department";

export default ({history}) => {
    return <Router history={history}>
       <div>
            <Route path="/" exact component={Index} />
            <Route path="/salecharts" component={SaleCharts} />
            <Route path="/evaluation" component={Evaluation} />

            <Route path="/sale" exact component={SaleIndex} />
            <Route path="/sale/details" component={Details} />
            <Route path="/sale/purchasing" component={Purchasing} />
            <Route path="/sale/insurance" component={Insurance} />

            <Route path="/order" exact component={OrderIndex} />
            <Route path="/order/orderList" component={OrderList} />
            <Route path="/order/customer" component={Customer} />

            <Route path="/people" exact component={PeopleIndex} />
            <Route path="/people/department" component={Department} />
       </div>
    </Router>
}