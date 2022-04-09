
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
import ReactDOM from "react-dom";
import axios from "axios";
import { apiUrl } from "../../url/url";
import { selectUser } from "../../redux/features/user/userSlice";
import { useSelector } from "react-redux";

function onChange(checked) {
  console.log(`switch to ${checked}`);
}
const { Option } = Select;
const { Title } = Typography;
const { Header, Footer, Content } = Layout;

const MangApplyComp = () => {
  const user = useSelector(selectUser);

  const onFinish = async (values) => {
    console.log(values.date);
    let newdate = new Date(values.date)
    let datech = format(newdate, 'dd/mm/yyyy');
    console.log(datech);
    const payload = {
      workedDate: datech,
      dayType: values.day,
      reason: values.remarks,
    }
    await axios.post(`${apiUrl}/compoff/${user.id.sno}`, payload)
  }

  return (

    <>
      <Layout className="layout-default layout-signin">

        <Content className="signin">
          <Title className="mb-15">
            <h2>Apply CompOFF</h2>
          </Title>
          <Form
            onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            layout="vertical"
            className="row-col"
          >
            <Form.Item
              className="username"
              label="Date"
              name="date"
            >
              <Input type="date" placeholder="Date" />
            </Form.Item>

            <Form.Item
              className="username"
              label="Day"
              name="day"
            >
              <Select placeholder="Select  Day">
                <Option value="Monday">Monday</Option>
                <Option value="Tuesday">Tuesday</Option>
                <Option value="Wednesday">Wednesday</Option>
                <Option value="Thursday">Thursday</Option>
                <Option value="Friday">Friday</Option>
                <Option value="Saturday">Saturday</Option>
              </Select>
            </Form.Item>
            <Form.Item
              className="username"
              label="Reason"
              name="reason"
            >
              <Input type="text" placeholder="Remark" />
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

export default MangApplyComp;
