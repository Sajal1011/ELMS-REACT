import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  Card,
  Radio,
  Table,
  Upload,
  message,
  Progress,
  Button,
  Avatar,
  Typography,
} from "antd";


import { apiUrl } from "../../url/url";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import axios from "axios";

const { Title } = Typography;

const formProps = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};
// table code start
const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    width: "20%",
  },

  {
    title: "First Name",
    dataIndex: "fisrtName",
    key: "fisrtName",
    width: "20%",
  },

  {
    title: "Last Name",
    dataIndex: "lastName",
    key: "lastName",
    width: "20%",
  },

  {
    title: "Designation ",
    dataIndex: "designation",
    key: "designation",
    width: "20%",
  },

  {
    title: "Email ",
    dataIndex: "email",
    key: "email",
    width: "20%",
  },

  {
    title: "Role",
    key: "role",
    dataIndex: "role",
    width: "20%",
  },

  {
    title: "ACTION",
    key: "action",
    width: "25%",
    render: (record) => {
      return (
        <>
          <EditOutlined
          // onClick={() => {

          //   onEditStudent(record);
          // }}
          />
          <DeleteOutlined
            // onClick={() => {
            //   onDeleteStudent(record);
            // }}
            style={{ color: "red", marginLeft: 12 }}
          />
        </>
      );
    },
  }

];

const data = [
  {
    key: "1",
    name: (
      <>
        <Avatar.Group>

          <div className="avatar-info">
            <Title level={5}>101</Title>

          </div>
        </Avatar.Group>{" "}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <Title level={5}>Ram Sharma</Title>

        </div>
      </>
    ),

    status: (
      <>

        <div className="author-info">
          <Title level={5}>Junior Engineer</Title>

        </div>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <span>Pune</span>
        </div>
      </>
    ),
    action: (
      <>
        <table><tr>
          <td><button type="button" class="btn btn-info">VIEW</button></td></tr></table>
      </>
    ),

  },

  {
    key: "2",
    name: (
      <>
        <Avatar.Group>

          <div className="avatar-info">
            <Title level={5}>102</Title>

          </div>
        </Avatar.Group>{" "}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <Title level={5}>Tara Bose</Title>

        </div>
      </>
    ),

    status: (
      <>

        <div className="author-info">
          <Title level={5}>Senior Developer</Title>

        </div>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <span>Orissa</span>
        </div>
      </>
    ),
    action: (
      <>
        <table> <tr>
          <td><button type="button" class="btn btn-info">VIEW</button></td> </tr></table>
      </>
    ),
  },
  {
    key: "3",
    name: (
      <>
        <Avatar.Group>

          <div className="avatar-info">
            <Title level={5}>103</Title>

          </div>
        </Avatar.Group>{" "}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <Title level={5}>Ankit Choudhary</Title>

        </div>
      </>
    ),

    status: (
      <>

        <div className="author-info">
          <Title level={5}>Tester</Title>

        </div>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <span>Kanpur</span>
        </div>
      </>
    ),
    action: (
      <>
        <table>  <tr>
          <td><button type="button" class="btn btn-info">VIEW</button></td></tr></table>
      </>
    ),
  },

];


function MangEmployeeDetails() {

  const [example, setExample] = useState([]);
  const [datasrc, setDatasrc] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);

  useEffect(() => {
    const fetchEmp = async () => {
      try {
        const res = await axios
          .get(`${apiUrl}/get-employees`)
          .then((response) => {
            message.success({ content: "List of Employee" });
            // setSpin(false);
            // setDatasrc(response.data)
            console.log("response get is ", response);
            let result = response.data.map(empobj => ({
              id: empobj.id,
              fisrtName: empobj.fisrtName,
              lastName: empobj.lastName,
              role: empobj.role,
              city: empobj.city,
              email: empobj.email,
              pin: empobj.pin,
              country: empobj.country,
              address: empobj.address,
              email: empobj.email,
              mobile: empobj.mobile,
              designation: empobj.designation,
            }))
            setExample(result)
            return response.data;
          });

        console.log("we get empl", res);
      } catch (error) {
        if (error.response) {
          message.error(
            {
              content: `Unauthorized User`,
              // key,
            },
            // history.push({
            //   pathname: "/sign-in",
            // })
          );
        } else {
          alert("Error!");
        }
      }
    };
    fetchEmp();
  }, []);

  const onChange = (e) => console.log(`radio checked:${e.target.value}`);

  return (
    <>
      <div className="tabled">
        <Row gutter={[24, 0]}>
          <Col xs="24" xl={24}>
            <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              title="Employee List"

            >
              <div className="table-responsive">
                <Table
                  columns={columns}
                  dataSource={example}
                  pagination={false}
                  className="ant-border-space"
                />
              </div>
            </Card>

          </Col>
        </Row>
      </div>
    </>
  );
}

export default MangEmployeeDetails;
