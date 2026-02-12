import { Layout, Menu } from 'antd';
import { HomeOutlined, FileTextOutlined, ProjectOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';

const { Header } = Layout;

function Navigation() {
  const location = useLocation();

  const menuItems = [
    {
      key: '/',
      icon: <HomeOutlined />,
      label: <Link to="/">Chat</Link>,
    },
    {
      key: '/resume',
      icon: <FileTextOutlined />,
      label: <Link to="/resume">Resume</Link>,
    },
    {
      key: '/projects',
      icon: <ProjectOutlined />,
      label: <Link to="/projects">Projects</Link>,
    },
  ];

  return (
    <Header style={{ 
      position: 'sticky', 
      top: 0, 
      zIndex: 1, 
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#001529'
    }}>
      <div style={{ 
        color: 'white', 
        fontSize: '1.5rem', 
        fontWeight: 'bold',
        marginRight: '50px'
      }}>
        David Hays
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={[location.pathname]}
        items={menuItems}
        style={{ flex: 1, minWidth: 0 }}
      />
    </Header>
  );
}

export default Navigation;
