
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
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import ReactDOM from "react-dom";
import { apiUrl } from "../url/url";
import axios from "axios";
const { Option } = Select;
const { Title } = Typography;
const { Header, Footer, Content } = Layout;
const AddEmp = () => {

  const onFinish = async (values) => {
    console.log(values);
    let newdatejoin = new Date(values.dateofjoin);
    let datech = format(newdatejoin, 'dd/mm/yyyy');
    let newdatebrth = new Date(values.dateofbirth)
    let datechbrth = format(newdatebrth, 'dd/mm/yyyy');
    console.log(datech);
    const payload = {
      fisrtName: values.firstName,
      lastName: values.lastName,
      gender: values.gender,
      dob: datechbrth,
      doj: datech,
      aadharNumber: values.aadharnumber,
      designation: values.designation,
      role: values.role,
      mobileNumber: values.mobilenumber,
      email: values.email,
      city: values.city,
      country: values.country,
      pincode: values.pincode,
      address: values.address
    }
    await axios.post(`${apiUrl}/add-employee`, payload)
  }


  return (


    <Layout className="layout-default layout-signin">

      <Content className="signin">
        <Title className="mb-15">
          <h2>Add Employee</h2>
        </Title>
        <Form
          onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
          layout="vertical"
          className="row-col"
        >
          <Row gutter={[24, 0]} justify="space-around">
            <Col
              className="sign-img"
              style={{ padding: 12 }}
              xs={{ span: 24 }}
              lg={{ span: 12 }}
              md={{ span: 12 }}
            >
              <Form.Item
                className="username"

                name="firstName"
              >
                <Input type="text" placeholder="FirstName" />
              </Form.Item>
            </Col>
            <Col
              className="sign-img"
              style={{ padding: 12 }}
              xs={{ span: 24 }}
              lg={{ span: 12 }}
              md={{ span: 12 }}
            >
              <Form.Item
                className="username"

                name="lastName"
              >
                <Input type="text" placeholder="LastName" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[24, 0]} justify="space-around">
            <Col
              className="sign-img"
              style={{ padding: 12 }}
              xs={{ span: 24 }}
              lg={{ span: 12 }}
              md={{ span: 12 }}
            >
              <Form.Item
                className="username"
                name="gender"
              >
                <Select placeholder="select your gender">
                  <Option value="male">Male</Option>
                  <Option value="female">Female</Option>
                  <Option value="other">Other</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col
              className="sign-img"
              style={{ padding: 12 }}
              xs={{ span: 24 }}
              lg={{ span: 12 }}
              md={{ span: 12 }}
            >
              <Form.Item
                className="username"
                name="role"
              >
                <Select placeholder="Role">
                  <Option value="manager">Manager</Option>
                  <Option value="employee">Employee</Option>

                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[24, 0]} justify="space-around">
            <Col
              className="sign-img"
              style={{ padding: 12 }}
              xs={{ span: 24 }}
              lg={{ span: 12 }}
              md={{ span: 12 }}
            >
              <Form.Item
                className="username"
                label="Date of Birth"
                name="dateofbirth"
              >
                <Input type="date" placeholder="Date" />
              </Form.Item>
            </Col>
            <Col
              className="sign-img"
              style={{ padding: 12 }}
              xs={{ span: 24 }}
              lg={{ span: 12 }}
              md={{ span: 12 }}
            >
              <Form.Item
                className="username"
                label="Date of Joining"
                name="dateofjoin"
              >
                <Input type="date" placeholder="Date" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[24, 0]} justify="space-around">
            <Col
              className="sign-img"
              style={{ padding: 12 }}
              xs={{ span: 24 }}
              lg={{ span: 12 }}
              md={{ span: 12 }}
            >
              <Form.Item
                className="username"
                name="designation"
              >
                <Input type="text" placeholder="designation" />
              </Form.Item>
            </Col>
            <Col
              className="sign-img"
              style={{ padding: 12 }}
              xs={{ span: 24 }}
              lg={{ span: 12 }}
              md={{ span: 12 }}
            >
              <Form.Item
                className="username"
                name="pincode"
              >
                <Input type="number" placeholder="pincode" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[24, 0]} justify="space-around">
            <Col
              className="sign-img"
              style={{ padding: 12 }}
              xs={{ span: 24 }}
              lg={{ span: 12 }}
              md={{ span: 12 }}
            >
              <Form.Item
                className="username"
                name="mobilenumber"
              >
                <Input type="number" placeholder="Mobile Number" />
              </Form.Item>
            </Col>
            <Col
              className="sign-img"
              style={{ padding: 12 }}
              xs={{ span: 24 }}
              lg={{ span: 12 }}
              md={{ span: 12 }}
            >
              <Form.Item
                className="username"
                name="aadharnumber"
              >
                <Input type="number" placeholder="Aadhar Number" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[24, 0]} justify="space-around">
            <Col
              className="sign-img"
              style={{ padding: 12 }}
              xs={{ span: 24 }}
              lg={{ span: 12 }}
              md={{ span: 12 }}
            >
              <Form.Item
                className="username"
                name="address"
              >
                <Input type="text" placeholder="Address" />
              </Form.Item>
            </Col>
            <Col
              className="sign-img"
              style={{ padding: 12 }}
              xs={{ span: 24 }}
              lg={{ span: 12 }}
              md={{ span: 12 }}
            >
              <Form.Item
                className="username"
                name="city"
              >
                <Input type="text" placeholder="City" />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            className="username"
            name="country"
          >
            <Input type="text" placeholder="Country" />
          </Form.Item>


          <Form.Item
            className="username"
            name="email"
          >
            <Input type="email" placeholder="Email" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{ width: "100%" }}
            >
              Add Employee
            </Button>
          </Form.Item>
        </Form>
      </Content>
      <Footer>

      </Footer>
    </Layout>

  );
};

export default AddEmp;
