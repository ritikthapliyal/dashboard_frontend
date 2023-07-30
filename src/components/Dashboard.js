import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Make sure to use React Router v6 or later
import { useDashboardMutation } from '../store/apis/userApis';

function Dashboard() {
  const navigate = useNavigate();
  const [dashboard, { data, isLoading, isError, error }] = useDashboardMutation()

  console.log(error);

  const fetchDashboardData = async () => {
    try {
      await dashboard()
      if (error.status === 401) {
        navigate('/login');
      }
    } catch (err) {
      console.error('Dashboard data fetch error:', err)
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  useEffect(() => {
    if (!!isError && error && error.status === 401) {
      navigate('/');
    }
  }, [isError, error]);

  return (
    <div>
      <div>
        {isLoading && <p>Loading...</p>}
        {!isLoading && !isError && <h1>Dashboard</h1>}
      </div>
    </div>
  );
}

export default Dashboard;
