
import React, { Component, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { format } from 'date-fns'
import {
  Layout,
  Button,
  Typography,
  Form,
  Input, Select,
} from "antd";

import axios from "axios";
import { apiUrl } from "../../url/url";
import { selectUser } from "../../redux/features/user/userSlice";
import { useSelector } from "react-redux";
import ReactDOM from "react-dom";

function onChange(checked) {
  console.log(`switch to ${checked}`);
}
const { Option } = Select;
const { Title } = Typography;
const { Header, Footer, Content } = Layout;

const MangApplyLeave = () => {
  const user = useSelector(selectUser);

  const onFinish = async (values) => {
    console.log(values.fromdate);
    let fromdate = new Date(values.fromdate);
    let todate = new Date(values.todate);
    let startdate = format(fromdate, 'dd/mm/yyyy');
    let enddate = format(todate, 'dd/mm/yyyy');
    console.log(startdate);
    const payload = {
      startDate: startdate,
      endDate: enddate,
      noOfDays: values.noofdays,
      remarks: values.leave,
    }
    await axios.post(`${apiUrl}/applyLeave`, payload)
  }


  return (

    <>
      <Layout className="layout-default layout-signin">

        <Content className="signin">
          <Title className="mb-15">
            <h2>Apply Leave</h2>
          </Title>
          <Form
            onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            layout="vertical"
            className="row-col"
          >
            <Form.Item
              className="username"
              label="From Date"
              name="fromdate"
            >
              <Input type="date" placeholder="Date" />
            </Form.Item>

            <Form.Item
              className="username"
              label="To Date"
              name="todate"
            >
              <Input type="date" placeholder="Date" />
            </Form.Item>

            <Form.Item
              className="username"
              label="Leave"
              name="leave"
            >
              <Select placeholder="Select Leave">
                <Option value="casual">Casual</Option>
                <Option value="earned">Earned</Option>
                <Option value="compoff">Compoff</Option>
              </Select>
            </Form.Item>
            <Form.Item
              className="username"
              label="No of Days"
              name="noofdays"
            >
              <Input type="number" placeholder="Remark" />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "100%" }}
              >
                AddHoliday
              </Button>
            </Form.Item>
          </Form>
        </Content>
        <Footer>

        </Footer>
      </Layout>
    </>

  );
};

export default MangApplyLeave;
