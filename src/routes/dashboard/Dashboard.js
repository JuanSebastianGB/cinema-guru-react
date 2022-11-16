import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Header from '../../components/navigation/Header';
import SideBar from '../../components/navigation/SideBar';
import { getDataWithCustomFilter } from '../../services/filter.service';
import './dashboard.css';
import Favorites from './Favorites';
import HomePage from './HomePage';
import WatchLater from './WatchLater';

const Dashboard = (props) => {
  return (
    <div className="Dashboard">
      <Header {...props} />

      <div className="dashboard-content">
        <BrowserRouter>
          <SideBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/watchlater" element={<WatchLater />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  setIsLoggedIn: PropTypes.func,
  userUsername: PropTypes.string,
};

export default Dashboard;
