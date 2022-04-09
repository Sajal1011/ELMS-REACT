import React, { Component, useState, useEffect } from "react";
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
import { daysToWeeks } from "date-fns";
import { apiUrl } from "../../url/url";
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
    title: "Date",
    dataIndex: "date",
    key: "date",
    width: "32%",
  },
  {
    title: "Day",
    dataIndex: "day",
    key: "day",
  },

  {
    title: "Remarks",
    key: "remarks",
    dataIndex: "remarks",
  },

];

const data = [
  {
    key: "1",
    name: (
      <>
        <Avatar.Group>

          <div className="avatar-info">
            <Title level={5}>02/04/2022</Title>

          </div>
        </Avatar.Group>{" "}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <Title level={5}>Saturday</Title>

        </div>
      </>
    ),

    status: (
      <>

        <div className="author-info">
          <Title level={5}>Hindu New Year</Title>

        </div>
      </>
    ),

  },

  {
    key: "2",
    name: (
      <>
        <Avatar.Group>

          <div className="avatar-info">
            <Title level={5}>10/04/2022</Title>

          </div>
        </Avatar.Group>{" "}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <Title level={5}>Monday</Title>

        </div>
      </>
    ),

    status: (
      <>

        <div className="author-info">
          <Title level={5}>Ram Navmi</Title>

        </div>
      </>
    ),

  },
  {
    key: "3",
    name: (
      <>
        <Avatar.Group>

          <div className="avatar-info">
            <Title level={5}>15/04/2022</Title>

          </div>
        </Avatar.Group>{" "}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <Title level={5}>Friday</Title>

        </div>
      </>
    ),

    status: (
      <>

        <div className="author-info">
          <Title level={5}>Good Friday</Title>

        </div>
      </>
    ),

  },
  {
    key: "3",
    name: (
      <>
        <Avatar.Group>

          <div className="avatar-info">
            <Title level={5}>02/05/2022</Title>

          </div>
        </Avatar.Group>{" "}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <Title level={5}>Monday</Title>

        </div>
      </>
    ),

    status: (
      <>

        <div className="author-info">
          <Title level={5}>Eid-al-Fitr</Title>

        </div>
      </>
    ),

  },




];


function ViewHoliday() {

  const [example, setExample] = useState([]);
  useEffect(() => {
    const fetchEmp = async () => {
      try {
        const res = await axios
          .get(`${apiUrl}/get-holiday`)
          .then((response) => {
            message.success({ content: "List of Holidays" });

            console.log("response get is ", response);
            let result = response.data.map(holiday => ({
              date: holiday.date,
              day: holiday.day,
              remarks: holiday.remarks
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
            },
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
              title="List of Holidays"
            >
              <div className="table-striped">
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

export default ViewHoliday;

