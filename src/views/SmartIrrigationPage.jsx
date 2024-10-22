import { Card, Row, Col, Progress, Button, Divider , Select} from "antd";
import rainIcon from "../assets/icons/rain.png";
import humidityIcon from "../assets/icons/humidity.png";
import pressureIcon from "../assets/icons/pressure-gauge.png";
import sunIcon from "../assets/icons/sun.png";
import windIcon from "../assets/icons/wind.png";
import CalendarComponent from "../components/Calendar";
import LineChart from "../components/LineChart";

const SmartIrrigationPage = () => {
  const weatherData = [
    {
      item: "Temperature",
      icon: sunIcon,
      value: "24",
      unit: "C",
    },
    {
      item: "Humidity",
      icon: humidityIcon,
      value: "70",
      unit: "%",
    },
    {
      item: "Rain",
      icon: rainIcon,
      value: "0",
      unit: "mm",
    },
    {
      item: "Wind",
      icon: windIcon,
      value: "2.3",
      unit: "km/h",
    },
    {
      item: "Pression",
      icon: pressureIcon,
      value: "104",
      unit: "Kpa",
    },
  ];

  // const { useBreakpoint } = Grid;
  // const screens = useBreakpoint();

  return (
    <>
    <Row style={{display:'flex' , justifyContent:'flex-end'}}>
      <Col span={5}>
      
      <Select
        style={{width:'100%'}}
        defaultValue="field1"
        // loading
        options={[
          {
            value: 'field1',
            label: 'Field 1',
          },
        ]}
      />
      </Col>
    </Row>
          <Divider    style={{
        color: '#bbb',
      }} orientation="left" plain>
              Current weather
    </Divider>
      <Row style={{ paddingBottom: "26px" }}>
        <Col span={24}>
          <Card>
            <Row
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
              }}
              gutter={[16, 16]} // Add gutter for better spacing
            >
              {weatherData.map((data, indx) => {
                return (
                  <Col
                    key={indx}
                    xs={12}  // 2 items per row on extra small screens
                    sm={8}   // 3 items per row on small screens
                    md={6}   // 4 items per row on medium screens
                    lg={4}   // 6 items per row on large screens
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexWrap: "wrap",
                      }}
                    >
                      <img width={24} src={data.icon} alt={data.item} />
                      <span style={{ color: "#bbb" , margin:'0px 5px' }}>{data.item}</span>
                      <span>{data.value} </span>
                      <span style={{  margin:'0px 5px' }}>{data.unit}</span>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Card>
        </Col>
      </Row>
      <Divider    style={{
        color: '#bbb',
      }} orientation="left" plain>
              Fields List
    </Divider>

      <Row gutter={[16, 16]} style={{ paddingBottom: "26px" }}>
        <Col
          xs={24}  // Full width on extra small screens
          sm={12}  // Half width on small screens
          md={8}   // One-third width on medium screens
          lg={6}   // One-fourth width on large screens
        >
          <Card title='Field 1' style={{ padding: '8px' }}>
            <div 
             style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}>
              <h3>Olive</h3>
              <h5 style={{ backgroundColor: '#eee', padding: '6px 12px', borderRadius: 25 }}>Stable</h5>
            </div>
            <div style={{ marginTop: 16 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}>
                <h6>Growth</h6>
                <h6 style={{ color: '#bbb' }}>day/day</h6>
              </div>
              <Progress percent={60} size="small" />
              <div style={{ marginTop: 16 }}>
                <Button variant="outlined" block>More details</Button> {/* Block makes the button full width */}
              </div>
            </div>
          </Card>
        </Col>
      </Row>
      <Divider    style={{
        color: '#bbb',
      }} orientation="left" plain >
              Charts
    </Divider>
      <Row gutter={[16, 16]} style={{ paddingBottom: "26px" }}>
            <Col span={12}>
                <LineChart />
            </Col>    
      </Row>          

      <Divider    style={{
        color: '#bbb',
      }} orientation="left" plain >
              Irrigation planning
    </Divider>
      <Row gutter={[16, 16]}>
                <Col span={24}> 
                  <CalendarComponent />
                </Col>
      </Row>
    </>
  );
};

export default SmartIrrigationPage;
