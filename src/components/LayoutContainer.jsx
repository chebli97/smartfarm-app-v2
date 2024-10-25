import { useState } from 'react';
import {
    CalendarOutlined,
    DownOutlined,
    HomeOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SettingOutlined,
  SunOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Dropdown, Flex, Layout, Menu, Space } from 'antd';
import Logo from '../assets/Logo smartfarm.png'
import SmartIrrigationPage from '../views/SmartIrrigationPage';
// import Overview from '../views/Overview';
import userDefault from '../assets/user-default-avatar.png';
import { Link } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

const siderStyle = {
  overflow: 'auto',
  height: '100vh',
  position: 'fixed',
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: 'thin',
  scrollbarGutter: 'stable',
  backgroundColor:'#FDFDFD',
  // overflow:"hidden"
};

const items = [

  {
    key: '1',
    label: 'Profile',
    icon: <UserOutlined />,
    
  },
  {
    type: 'divider',
  },
  {
    key: '2',
    label: 'Log out',
    icon : <LogoutOutlined />
  },
];

const LayoutContainer = ({children}) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout hasSider>
      <Sider style={siderStyle} theme='light' trigger={null} collapsible collapsed={collapsed}>
        <div style={{height:'80px',display:'flex' , justifyContent:'center',alignItems:'center'}}>
            <img width='74%' src={Logo} alt="test" />
        </div>
        <Menu
          theme="light"
          style={{backgroundColor:'#FDFDFD' ,borderInlineEnd:'none'}}
          mode="inline"
        //   defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <HomeOutlined />,
              label: <Link to='/'>Home</Link>,
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label:<Link to='/smart-irrigation'>SmartIrrigation</Link>,
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'SmartSensor',
            },
            {
                key: '4',
                icon: <UserOutlined />,
                label: 'Images',
              },
              {
                key: '5',
                icon: <SunOutlined />,
                label: 'Weather',
              },
              {
                key: '6',
                icon: <CalendarOutlined />,
                label: 'Calendar',
              },
              {
                key: '7',
                icon: <SettingOutlined />,
                label: 'Settings',
              },
          ]}
        />
    {/* <div style={{width:'50px' ,opacity:'0.4',right:0, height:'100%',filter:"blur(50px)" , backgroundColor:'#bbb' , position:'absolute',top:'0',zIndex:555}}/> */}

      </Sider>
      <Layout         style={{marginInlineStart: collapsed ? 80 : 200}}>
        <Header
          style={{
            // paddingLeft:32 ,
            background: "#F6F6F6",
            // borderBottom:'1px solid #eee'
          }}
        >
          <Flex justify='space-between' align='center'>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />
            <Dropdown
            menu={{
              items,
            }}
            trigger={['click']}
          >
            {/* <a onClick={(e) => e.preventDefault()}> */}
              <Space style={{display:'flex' , alignItems:'center' , justifyContent :'space-between'}}>
                <img style={{display:'flex' , alignItems:'center' , justifyContent :'center'}} width={50} src={userDefault} alt="" />
                <h4>Saif Chebli</h4> 
                <DownOutlined />
              </Space>
            {/* </a> */}
          </Dropdown>
          </Flex>
          {/* <h3>Welcome , Ahmed </h3> */}
        </Header>
        <Content
        
          style={{
            // margin: '24px 16px',
            padding: 32,
            minHeight: 600,
            background: "#F6F6F6",
            // borderRadius: borderRadiusLG,
          }}
        >
          {/* <SmartIrrigationPage /> */}
          {children}
          {/* <Overview /> */}
        </Content>
      </Layout>
    </Layout>
  );
};
export default LayoutContainer;