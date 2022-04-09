
// import { useState } from "react";
import React, { Component, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { format } from 'date-fns'
import {
  Layout,
  Menu,
  Button,
  Row,
  Col,
  Typography,
  Form,
  Input, Select,
  Switch,
} from "antd";
import signinbg from "../assets/images/img-signin.jpg";
import {
  DribbbleOutlined,
  TwitterOutlined,
  InstagramOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import axios from "axios";
import { apiUrl } from "../url/url"
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import ReactDOM from "react-dom";
function onChange(checked) {
  console.log(`switch to ${checked}`);
}
const { Option } = Select;
const { Title } = Typography;
const { Header, Footer, Content } = Layout;
const AddHoliday = () => {

  const onFinish = async (values) => {
    console.log(values.date);
    let newdate = new Date(values.date)
    let datech = format(newdate, 'dd/mm/yyyy');
    console.log(datech);
    const payload = {
      date: datech,
      day: values.day,
      remarks: values.remarks,
    }
    await axios.post(`${apiUrl}/holiday`, payload)
  }
  return (
    <>
      <Layout className="layout-default layout-signin">

        <Content className="signin">
          <Title className="mb-15">
            <h2>AddHoliday</h2>
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
              label="Remark"
              name="remarks"
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

export default AddHoliday;
