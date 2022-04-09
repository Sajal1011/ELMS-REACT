
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
  
  import { ToTopOutlined } from "@ant-design/icons";
  import { Link } from "react-router-dom";

  
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
      title: "Earned",
      dataIndex: "name",
      key: "name",
      width: "32%",
    },
    {
      title: "CompOff",
      dataIndex: "function",
      key: "function",
    },
  
    {
      title: "Casual",
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
              <Title level={5}>7</Title>
              
            </div>
          </Avatar.Group>{" "}
        </>
      ),
      function: (
        <>
          <div className="author-info">
            <Title level={5}>5</Title>
            
          </div>
        </>
      ),
  
      status: (
        <>
          
          <div className="author-info">
            <Title level={5}>14</Title>
            
          </div>
        </>
      ),
     
    },
    
    
  ];
  function LeaveBalance() {
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
                <div className="table-primary">
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
  
  export default LeaveBalance;
  