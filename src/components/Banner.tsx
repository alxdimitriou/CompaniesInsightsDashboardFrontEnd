import { Card, Typography, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import * as signalR  from "@microsoft/signalr";
import type { TransactionsModel } from "../api/types/TransactionsModel";
import { useLatestDailyTransactions } from "../hooks/useLatestDailyTransactions";
import './styles.css';

const Banner = () => {

  const { palette } = useTheme();

  //used for first render because we have an empty list
  //untill signalR receives a message
  const { data: latestNoSignalRTranasctions } = useLatestDailyTransactions();

  const [transactions, setTransactions] = useState<TransactionsModel[]>([]);

  //set transaction banner for first render
  //ensures we only set when data actually changes
  useEffect(() => {
    if (latestNoSignalRTranasctions?.data) {
    setTransactions(latestNoSignalRTranasctions.data);
    }
  }, [latestNoSignalRTranasctions]);

  useEffect(() => {
    const connection = new signalR.HubConnectionBuilder() 
      .withUrl("http://localhost:7084/transactionsHub")
      .withAutomaticReconnect()
      .build();

    connection.on("ReceiveDailyTransactionsList", (data) => {
      console.log("Profit updated:", data);
      setTransactions(data);
    });

   connection.start().catch(console.error);

  //our clean up function
  return () => { 
       const cleanUpFunction = async () => { 
       connection.stop();
  };

    cleanUpFunction();
  };

  }, []);

  return (
    <div className="inner">
      <div className="wrapper">
        <section className="swipe-section">
          {transactions?.map(({ id, buyer, amount }) => (
            <div className="image" key={id}>   
              <Card
                  sx={{ 
                       bgcolor: "#323336ff"
                       , height:'6rem',
                        padding:"0.5rem",                                          
                      }}
                >
                  <Typography variant="h4" 
                    color={palette.tertiary[600]}>
                    Transaction: {id}
                  </Typography> 

                  <Typography variant="h4" 
                    color={palette.tertiary[600]}>
                      Name: {buyer}
                  </Typography>
                  
                  <Typography variant="h4" 
                        color={palette.tertiary[600]}>
                      Amount: {amount.toFixed(2)}€
                  </Typography>

                </Card>
            </div>
          ))}
        </section>
        
      </div>
    </div>
  );
};

export { Banner };
