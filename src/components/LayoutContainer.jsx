import { useState } from 'react';
import {
    CalendarOutlined,
    HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SettingOutlined,
  SunOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu } from 'antd';
import Logo from '../assets/Logo smartfarm.png'
// import SmartIrrigationPage from '../views/SmartIrrigationPage';
import Overview from '../views/Overview';

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

const LayoutContainer = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout hasSider>
      <Sider style={siderStyle} theme='light' trigger={null} collapsible collapsed={collapsed}>
        <div style={{height:'80px',display:'flex' , justifyContent:'center',alignItems:'center'}}>
            <img width='74%' src={Logo} alt="test" />
        </div>
        <Menu
          theme="light"
          style={{backgroundColor:'#FDFDFD'}}
          mode="inline"
        //   defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <HomeOutlined />,
              label: 'Home',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'SmartIrrigation',
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

          <Overview />
        </Content>
      </Layout>
    </Layout>
  );
};
export default LayoutContainer;