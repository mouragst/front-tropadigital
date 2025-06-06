import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { FadeRouteTransition } from './components/FadeRouteTransition';
import Login from './pages/Login'
import Events from './pages/Events';
import NotFound from './pages/NotFound';

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();
  return (
    <FadeRouteTransition>
      <Routes location={location}>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/menu/events" element={<Events />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </FadeRouteTransition>
  );
};

const AppRoutes: React.FC = () => (
  <Router>
    <AnimatedRoutes />
  </Router>
);

export default AppRoutes;