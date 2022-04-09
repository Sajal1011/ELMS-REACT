import React, { Component, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  Layout,
  Menu,
  Button,
  Row,
  Col,
  Typography,
  Form,
  Input,
  Switch,
} from "antd";
import signinbg from "../assets/images/img-signin.jpg";
import {
  DribbbleOutlined,
  TwitterOutlined,
  InstagramOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import { setUserInStore } from "../redux/features/user/userSlice";
import axios from "axios";
function onChange(checked) {
  console.log(`switch to ${checked}`);
}
const { Title } = Typography;
const { Header, Footer, Content } = Layout;

export const SignIn = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function onChangeEmail(e) {
    setEmail(e.target.value);
  }

  function onChangePassword(e) {
    setPassword(e.target.value);
  }

  const dispatch = useDispatch();
  const history = useHistory();
  const onFinish = (values) => {
    console.log("Success:", values);
    console.log('Email: ' + email + " Password: " + password);

    axios({
      method: 'post',
      url: 'http://localhost:8080/login',
      /*  headers: {}, */
      data: {
        email, password
      }

    }).then(
      (response) => {
        console.log(response.data.role);
        const data = response.data.role;
        var path = '';
        if (data === 'admin') {
          path = '/admin-dashboard'
        } else if (data === 'manager') {
          path = '/manager'

        } else if (data === 'employee') {
          path = '/emp'

        } else {
          alert('invalid login credentials');
        }
        localStorage.setItem("user", JSON.stringify(response.data));
        dispatch(setUserInStore(response.data));
        history.push({
          pathname: path,
        });
      },
      (error) => {
        console.log(error);
      }
    )


  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <Layout className="layout-default layout-signin">

        <Content className="signin">
          <Row gutter={[24, 0]} justify="space-around">
            <Col
              xs={{ span: 24, offset: 0 }}
              lg={{ span: 6, offset: 2 }}
              md={{ span: 12 }}
            >
              <Title className="mb-15">
                <h2>Login
                </h2></Title>
              {/* <Title className="font-regular text-muted" level={5}>
                   Enter your ID and password to sign in
                 </Title> */}
              <Form
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                layout="vertical"
                className="row-col"
              >
                <Form.Item
                  className="username"
                  label="USER ID"
                  name="text"
                  rules={[
                    {
                      required: true,
                      message: "Please input your ID!",
                    },
                  ]}
                >
                  <Input placeholder="USER ID" onChange={onChangeEmail} />
                </Form.Item>

                <Form.Item
                  className="username"
                  label="Password"
                  name="Password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input type="password" placeholder="Password" onChange={onChangePassword} />
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    style={{ width: "100%" }}
                  >
                    LOG IN
                  </Button>
                </Form.Item>

                <p className="font-semibold text-muted text-center">
                  Forgot Password?{" "}
                  <Link to="/forgot" className="font-bold text-dark">
                    Click Here
                  </Link>
                </p>
              </Form>
            </Col>
            <Col
              className="sign-img"
              style={{ padding: 12 }}
              xs={{ span: 24 }}
              lg={{ span: 12 }}
              md={{ span: 12 }}
            >
              <img src={signinbg} alt="" />
            </Col>
          </Row>
        </Content>
        <Footer>

        </Footer>
      </Layout>
    </>
  );
}
