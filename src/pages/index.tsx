import HomePage from "./Homepage/index";
import ModalLogin from '../components/Modals/modalLogin/index';
import ModalRegister from '../components/Modals/modalRegister/index';
import ModalAnnouncement from '../components/Modals/modalAnnouncement/index';
import ModalSucess from '../components/Modals/modalSucess/index';
import ProfilePage from './ProfilePage/index';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Pages = () => {
  return (
    <>
    <Switch>
      <Route path="/home">
        <HomePage/>
      </Route>
      <Route path="/profile">
        <ProfilePage/>
      </Route>


    </Switch>

      <ModalLogin />
      <ModalRegister />
      <ModalSucess />
      <ModalAnnouncement />
    </>
  );
};

export default Pages;
