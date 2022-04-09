
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

// import { ToTopOutlined } from "@ant-design/icons";
// import { Link } from "react-router-dom";

// // Images
// import ava1 from "../assets/images/logo-shopify.svg";
// import ava2 from "../assets/images/logo-atlassian.svg";
// import ava3 from "../assets/images/logo-slack.svg";
// import ava5 from "../assets/images/logo-jira.svg";
// import ava6 from "../assets/images/logo-invision.svg";
// import pencil from "../assets/images/pencil.svg";

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
    title: "FROM",
    dataIndex: "name",
    key: "name",
    width: "15%",
  },
  {
    title: "TO",
    dataIndex: "function",
    key: "function",
  },

  {
    title: "REMARKS",
    key: "status",
    dataIndex: "status",
  },
  {
    title: "STATUS",
    key: "status",
    dataIndex: "status",
  },
];

const data = [
  {
    key: "1",
    name: (
      <>
        <Avatar.Group>

          <div className="avatar-info">
            <Title level={5}>2/03/2022</Title>

          </div>
        </Avatar.Group>{" "}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <Title level={5}>3/03/2022</Title>

        </div>
      </>
    ),

    status: (
      <>

        <div className="author-info">
          <Title level={5}> TO MY FRNDS Birthday</Title>

        </div>
      </>
    ),
    status: (
      <>

        <div className="author-info">
          <Title level={5}> Pending</Title>

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
            <Title level={5}>1/05/2019</Title>

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
          <Title level={5}>Pongal</Title>

        </div>
      </>
    ),
    status: (
      <>

        <div className="author-info">
          <Title level={5}> TO MY FRNDS Birthday</Title>

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
            <Title level={5}>01/04/2020</Title>

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
          <Title level={5}>April Fool's Day</Title>

        </div>
      </>
    ),
    status: (
      <>

        <div className="author-info">
          <Title level={5}> TO MY FRNDS Birthday</Title>

        </div>
      </>
    ),
  },




];



function CompStatus() {
  const onChange = (e) => console.log(`radio checked:${e.target.value}`);

  return (
    <>
      <div className="tabled">
        <Row gutter={[24, 0]}>
          <Col xs="24" xl={24}>
            <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              title="Applied Comp Offs"

            >
              <div className="table-responsive">
                <Table
                  columns={columns}
                  dataSource={data}
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

export default CompStatus;
