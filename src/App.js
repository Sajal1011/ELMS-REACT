
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import MgHome from "./pages/mang/MgHome";
import EmpHome from "./pages/empPAGE/EmpHome";
import Tables from "./pages/Tables";
import AddEmp from "./pages/AddEmp";
import AddHoliday from "./pages/AddHoliday";
import { SignIn } from "./pages/SignIn";
import Main from "./components/layout/Main";
import Forgot from "./pages/forgot";
import ForgotChange from "./pages/ForgotChange";
//manager
import ViewHoliday from "./pages/mang/ViewHoliday";
import ApplyLeave from "./pages/mang/ApplyLeave";
import ApplyComp from "./pages/mang/ApplyComp";
import EmployeeDetails from "./pages/mang/EmployeeDetails";

import Changepw from "./pages/mang/Changepw";
import EmpMain from "./components/layout/EmpMain";

import LeaveStatus from "./pages/mang/LeaveStatus";
import MangMain from "./components/layout/MangMain";
import MangApplyComp from "./pages/mang/ApplyComp";
import MangApplyLeave from "./pages/mang/ApplyLeave";
import MangEmployeeDetails from "./pages/mang/EmployeeDetails";
import MangChangepw from "./pages/mang/Changepw";
import MangLeaveStatus from "./pages/mang/LeaveStatus";
import MangViewHoliday from "./pages/mang/ViewHoliday";
import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";
import EmployeSidenav from "./components/layout/EmployeSidenav";



function App() {
  return (
    <div className="App">
      <Switch>

        <Route exact path="/" component={SignIn} />
        <Route path="/sign-in" exact component={SignIn} />
        <Route path="/ForgotChange" exact component={ForgotChange} />
        <Route path="/forgot" exact component={Forgot}></Route>
        {/* <EmpMain>
          
        </EmpMain> */}
        <Route path="/emp">
          <EmpMain>
            <Route exact path="/emp" component={EmpHome} />
            <Route exact path="/emp/ApplyComp" component={ApplyComp} />
            <Route exact path="/emp/ViewHoliday" component={ViewHoliday} />
            <Route exact path="/emp/ApplyLeave" component={ApplyLeave} />
            <Route exact path="/emp/LeaveStatus" component={LeaveStatus} />
            <Route exact path="/emp/Changepw" component={Changepw} />
          </EmpMain>

          {/* manager */}
        </Route>
        <Route path="/manager">
          <MangMain>
            <Route exact path="/manager" component={MgHome} />
            <Route exact path="/manager/EmployeeDetails" component={MangEmployeeDetails} />
            <Route exact path="/manager/ViewHoliday" component={MangViewHoliday} />
            <Route exact path="/manager/ApplyLeave" component={MangApplyLeave} />
            <Route exact path="/manager/LeaveStatus" component={MangLeaveStatus} />
            <Route exact path="/manager/ApplyComp" component={MangApplyComp} />
            <Route exact path="/manager/Changepw" component={MangChangepw} />

          </MangMain>
        </Route>
        <Main>

          <Route exact path="/sidenav" component={EmployeSidenav} />


          <Route exact path="/EmployeeDetails" component={EmployeeDetails} />

          <Route exact path="/admin-dashboard" component={Home} />

          <Route exact path="/tables" component={Tables} />
          <Route exact path="/AddEmp" component={AddEmp} />

          <Route exact path="/AddHoliday" component={AddHoliday} />
          {/* <Redirect from="*" to="/Tables" /> */}
        </Main>
      </Switch>
    </div>
  );
}

export default App; 
