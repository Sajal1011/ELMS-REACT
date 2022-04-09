import React, { Component, useState, useEffect } from "react";
import {
  Row,
  Col,
  Card,
  Table,
  message,
  Avatar,
  Typography,
} from "antd";
import axios from "axios";
import { apiUrl } from "../../url/url";
import { selectUser } from "../../redux/features/user/userSlice";
import { useSelector } from "react-redux";

function onChange(checked) {
  console.log(`switch to ${checked}`);
}

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
    title: "CASUAL",
    dataIndex: "casualLeaves",
    key: "casualLeaves",
    width: "30%",
  },
  // {
  //   title: "TO",
  //   dataIndex: "function",
  //   key: "function",
  // },

  {
    title: "EARNED",
    key: "compoffLeaves",
    dataIndex: "compoffLeaves",
  },
  {
    title: "COMPOFF",
    key: "earnedLeaves",
    dataIndex: "earnedLeaves",
  },
];

const data = [
  {
    key: "1",
    casual: (
      <>
        <Avatar.Group>

          <div className="avatar-info">
            <Title level={5}>21</Title>

          </div>
        </Avatar.Group>{" "}
      </>
    ),
    // function: (
    //   <>
    //     {/* <div className="author-info">
    //       <Title level={5}>3/03/2022</Title>

    //     </div> */}
    //   </>
    // ),

    earned: (
      <>

        <div className="author-info">
          <Title level={5}>7</Title>

        </div>
      </>
    ),
    comp: (
      <>

        <div className="author-info">
          <Title level={5}>4</Title>

        </div>
      </>
    ),
  },

];



function MangLeaveStatus() {
  const user = useSelector(selectUser);
  const [example, setExample] = useState([]);
  useEffect(() => {
    const fetchEmp = async () => {
      try {
        const res = await axios
          .get(`${apiUrl}/get-holiday/${user.id.sno}`)
          .then((response) => {
            message.success({ content: "List of Holidays" });
            console.log("response get is ", response);
            let result = response.data.map(leave => ({
              casualLeaves: leave.casualLeaves,
              compoffLeaves: leave.compoffLeaves,
              earnedLeaves: leave.earnedLeaves
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
              title="Leave Balance"
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

export default MangLeaveStatus;
