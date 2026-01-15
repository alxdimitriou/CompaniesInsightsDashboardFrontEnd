import { Card, Box,  Button,CardActions,Divider,  List,  ListItem, Typography, useTheme, Fade} from '@mui/material'
import { Banner } from '../../components/Banner';
import "../../components/styles.css";
import BoxHeader from '../../components/BoxHeader';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import type { DailyHourlyDataModel } from '../../api/types/DailyHourlyDataModel';
import { useEffect, useMemo, useState } from 'react';
import * as signalR  from "@microsoft/signalr";
import { useDailyHourlyDataLatest } from '../../hooks/useDailyHourlyDataLatest';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import CreateProductForm from './CreateProductForm';
import ViewEditProductModal from './ViewEditProductModal';

export default function AdminDashboard() {

    const { palette } = useTheme();

    const { data: latestDailyHourlyData} = useDailyHourlyDataLatest();

    const [dailyHourlyData, setDailyHourlyData] = useState<DailyHourlyDataModel[]>([]);

  useEffect(() => {
    if (latestDailyHourlyData?.data) {
    setDailyHourlyData(latestDailyHourlyData.data);
    }
  }, [latestDailyHourlyData]);

    //signalR for hourly profit
      useEffect(() => {
        const connection = new signalR.HubConnectionBuilder()
          .withUrl("http://localhost:7084/dailyHourDataHub")
          .withAutomaticReconnect()
          .build();
    
        connection.on("ReceiveDailyHourlyData", (data) => {
          console.log("Daily Hourly Profit:", data);
          setDailyHourlyData(data);
        });
    
       connection.start().catch(console.error);
    
       //our clean up function
      return () => { 
           const cleanUpFunction = async () => { // Create a new async function: clear
           connection.stop();
      };
    
        cleanUpFunction();
      };
    
      }, []);

      const chartData = useMemo(() => {
      
        return dailyHourlyData &&
          dailyHourlyData.map(({ createdAt, totalProfit }) => ({
              date: new Date(createdAt).toLocaleTimeString('en-US', { 
              hour: '2-digit', 
              minute: '2-digit',
              hour12: false // 24-hour format (15:00 instead of 3:00 PM)
            }),
            totalProfit: totalProfit.toFixed(2),
          }));
      
      }, [dailyHourlyData]);

  //for the modals
  const [createProductOpen, setCreateProductOpen] = useState(false);
  const createProductHandleOpen = () => setCreateProductOpen(true);
  const createProductHandleClose = () => setCreateProductOpen(false);

  const creatProductStyle = {
    position: 'relative',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#2d2d34',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
 };

  return (
    <Box 
      sx={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', 
        gap: 2,
        margin: "80px auto",
        justifyContent: "center",
        maxWidth: { xs: '100%', md: 900 }
      }}

    >

     <Box sx={{ boxShadow: "0.15rem 0.2rem 0.15rem 0.1rem rgba(0, 0, 0, .8)", 
                 borderRadius: "1rem", 
                 bgcolor:"#2d2d34"
              }} >
      <Card
            sx={{ bgcolor:"#2d2d34" , height:"42rem", padding:"1rem", }}
      >
            <Typography variant="h2"  
              sx={{
                 mt:'1rem',
                 color:'white',
                 mb:'1rem',
                 ml:'1rem'
              }}
            >
              User Actions
         </Typography>
        
        <Divider sx={{backgroundColor:"white"}} />
        
        <List  sx={{ mx: 'calc(-1 * var(--ListItem-paddingX))' }}>
          <ListItem sx={{
            margin:"153px auto"
          }}>
            
              <Button  variant="outlined" 
                       size="large"
                      onClick={createProductHandleOpen}
                  sx={{
                      
                      color: palette.tertiary[600],
                      borderColor:palette.tertiary[600],
                      
                      marginRight:"1rem"
                  }}

              >
                    Create Product
              </Button>

              <div >                 
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        open={createProductOpen}
                        onClose={createProductHandleClose}
                        closeAfterTransition
                        slots={{ backdrop: Backdrop }}
                        slotProps={{
                          backdrop: {
                            timeout: 500,                                          
                          },
                        }}                       
                      >
                        <Fade in={createProductOpen}>
                          <Box sx={creatProductStyle}>
                                                    
                              <CreateProductForm />

                          </Box>
                        </Fade>
                      </Modal>
              </div>

              <ViewEditProductModal/>

          </ListItem>
         
          
        </List>
        <Divider sx={{backgroundColor:"white"}} />
        <CardActions>
          {/* <Typography variant="h1" sx={{ mr: 'auto' }}>
            3.990€{' '} / month

          </Typography>
          <Button
            //variant="soft"
           // color="neutral"
           // endDecorator={<KeyboardArrowRight />}
          >
            Start now
          </Button> */}
        </CardActions>
      </Card>
      </Box>
      <Box sx={{ boxShadow: "0.15rem 0.2rem 0.15rem 0.1rem rgba(0, 0, 0, .8)", 
                 borderRadius: "1rem", 
                 bgcolor:"#2d2d34"
              }} >
          <Card
            sx={{ bgcolor:"#2d2d34" , height:"42rem", padding:"1rem", }}
          >
            <Typography variant="h2"  
              sx={{
                 mt:'1rem',
                 color:'white',
                 mb:'1rem',
                 ml:'1rem'
              }}
            >
                Hourly Daily Profit
            </Typography>

            <Divider sx={{backgroundColor:"white"}} />
            <List
              // //size="sm"
              // sx={{
              //   display: 'grid',
              //   gridTemplateColumns: '1fr 1fr',
              //   mx: 'calc(-1 * var(--ListItem-paddingX))',
              //   height:"20rem"
              // }}
            >
              <ListItem  sx={{ height: 400 }}>
                <Box sx={{ width: "100%", height: "100%" }}>


                
                {/* Here is the chart with our daily profits */}
                   <BoxHeader
                      title='Profit and Revenue'
                      subtitle='top line represents revenue, bottom line represents expenses'
                      sideText='+4%' 
                    />
                    
                    <ResponsiveContainer width="100%" height="100%" 
                     
                    >
                        <LineChart
                          width={500}
                          height={400}
                          data={chartData}
                          margin={{
                            top: 15,
                            right: 20,
                            left: -10,
                            bottom: 60,
                          }}
                        >
                          {/* this for the grids that appear */}
                            <CartesianGrid vertical={false} />

                            <XAxis 
                              xAxisId="bottom"
                              dataKey="date"       
                              tickLine={false}
                              style={{ fontSize: "10px" }}
                            />

                            {/* Yaxis on both sides */}

                            <YAxis
                              yAxisId="left"
                              // tickLine={false}
                              // axisLine={false} 
                              style={{ fontSize: "10px" }}
                              //domain={[8000, 23000]} //the range of the Y axis
                              name='profit'    
                            />

                           
                            <Tooltip wrapperStyle={{ backgroundColor: "#2d2d34", 
                              // borderStyle: "ridge", paddingLeft: "10px", paddingRight: "10px"
                               }} />

                            <Line 
                                yAxisId="left"
                                type="monotone" 
                                dataKey="totalProfit" 
                                stroke={palette.primary.main} 
                                dot={true}
                                unit="€"
                            />

                            <Line 
                                xAxisId="bottom"
                                type="monotone" 
                                dataKey="date" 
                                stroke={palette.primary.main} 
                                dot={true}
                                // unit="€"
                            />
                            
                        </LineChart>
                  </ResponsiveContainer>    
                  </Box>
              </ListItem>
              
            </List>
            <Divider sx={{backgroundColor:"white"}} />
            <Typography variant="h2"  
                sx={{ 
                  ml: '0.5rem',
                  color: 'white',
                  mt:'1rem',
                  mb:'1rem'
                }}>
                Daily Transactions
              </Typography>
            <CardActions>
              {/* speed={500000} */}
              <Banner />  
              
            </CardActions>
          </Card>
       </Box>
      
    </Box>
  );
}

// <Button /*endDecorator={<KeyboardArrowRight />}*/>Start now</Button>
