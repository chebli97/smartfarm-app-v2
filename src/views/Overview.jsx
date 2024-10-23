import { PlusOutlined } from '@ant-design/icons'
import {Row , Col , Card, Divider , Space , Button , Flex ,Input , Select} from 'antd'


const { Search } = Input

const fieldStats = [
    {
        state : 'Critical' , color : '#FD6347' , value : 0
        },
    {
    state : 'Opitmal' , color : '#3CB371' , value : 0
    },
        {
            state : 'Full' , color : '#1E90FF' , value : 0
            },
    ]

    const sensorStats = [
        {
            state : 'Online' , color : '#FD6347' , value : 0
            },
        {
        state : 'Low battery' , color : '#3CB371' , value : 0
        },
            {
                state : 'Offline' , color : '#1E90FF' , value : 0
                },
        ]
const Overview = () => {



  return (
    <>
    <Row >
        <Col style={{display:'flex' , justifyContent:'space-evenly' , alignItems:'center'}} span={24}>
            <Space split={<Divider type="vertical" style={{height:100}} />}>
            <Flex gap="middle" vertical>
                <h4>Add new farm configuration</h4>
                <Button type='default' icon={<PlusOutlined style={{fontSize:16}} />}>New Farm</Button>

            </Flex>
            <Flex gap="middle" vertical>
                <h4>Add new sensor configuration</h4>
                <Button type='default' icon={<PlusOutlined  style={{fontSize:16}}/>}>New SmartSensor</Button>

            </Flex>
            

            </Space>
           
        </Col>
    </Row>
    <Divider plain />
             
    
        <Row gutter={[16,16]}>
            <Col span={8}>
                <Card title='Field Stats' style={{padding:26}}>
                        <Flex gap='middle' justify='space-between'> 
                            {
                        fieldStats.map((item,indx) => {
                                return(
                                <Flex key={indx} vertical align='center' >
                                   <span style={{fontSize:40}}>{item.value}</span> 
                                   <span>{item.state}</span> 

                                </Flex>
                            )
                            
                        })
                            }
                        </Flex>
                </Card>
            </Col>
            <Col span={8 }>
                <Card title='Sensor Stats' style={{padding:26}}>
                <Flex gap='middle' justify='space-between'> 
                            {
                        sensorStats.map((item,indx) => {
                                return(
                                <Flex key={indx} vertical align='center' >
                                   <span style={{fontSize:40}}>{item.value}</span> 
                                   <span>{item.state}</span> 

                                </Flex>
                            )
                            
                        })
                            }
                        </Flex>
                </Card>
            </Col>
        </Row>
        <Divider    style={{
        color: '#bbb',
      }} orientation="right" orientationMargin={0} plain>
        <Flex gap='middle'>
              <Search
                placeholder="Field Name ... "
                //   onSearch={onSearch}
                style={{
                    width: '100%',
                }}
                />
                 <Select
                        style={{width:'40%'}}
                        defaultValue="All Fields"
                        // loading
                        options={[
                        {
                            value: 'field1',
                            label: 'Critical',
                        },
                        {
                            value: 'field2',
                            label: 'Optimal',
                        },
                        {
                            value: 'field3',
                            label: 'Full',
                        },
                        ]}
                    />
        </Flex>
    </Divider>
        <Row>
        </Row>
    </>
  )
}

export default Overview