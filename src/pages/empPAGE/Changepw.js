import React from "react";
import { Layout, Form, Typography, Input, Select, Checkbox, Button, message, Upload } from "antd";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import ReactDOM from "react-dom";
import axios from "axios";
import { apiUrl } from "../../url/url";
import { selectUser } from "../../redux/features/user/userSlice";
import { useSelector } from "react-redux";


const PASSWORD_REGEX =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
const { Option } = Select;
const { Title } = Typography;
const { Header, Footer, Content } = Layout;


const Changepw = () => {
  const user = useSelector(selectUser);
  const onFinish = async (values) => {

    console.log(user.id.sno);
    const payload = {
      password: values.confirm
    }
    await axios.post(`${apiUrl}/update-password/${user.id.sno}`, payload)
  }
  return (

    <>
      <Layout className="layout-default layout-signin">

        <Content className="signin">
          <Title className="mb-15">
            <h2>Change Password</h2>
          </Title>
          <Form
            onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            layout="vertical"
            className="row-col"
          >
            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
                {
                  pattern: PASSWORD_REGEX,
                  message:
                    "Password must contain minimum eight characters, at least one letter, one number and one special character",
                },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="confirm"
              label="Confirm Password"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }

                    return Promise.reject(
                      new Error("The two passwords that you entered do not match!")
                    );
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "100%" }}
              >
                Save
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
export default Changepw;
