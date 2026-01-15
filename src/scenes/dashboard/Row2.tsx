import { useMemo } from 'react'
import DashboardGraph from '../../components/DashboardGraph';
import BoxHeader from '../../components/BoxHeader';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { useKpis } from '../../hooks/useKpis';
import CompaniesRevenueMap from './CompaniesRevenueMap';
import { useTheme } from '@mui/material';

const Row2 = () => {
  // isLoading, error
  const { data: kpiData,  }  = useKpis();

  const { palette } = useTheme();

  //the pieColors
  // const pieColors = [palette.primary[800], palette.primary[300]];

  // const productDataResult = useMemo(() =>
  // {
  //   return productData &&
  //     productData.data.map(({ price, expense }) =>
  //       ({
  //           //name: month.substring(0, 3),
  //           price,
  //           expense
  //       }));   
  // }, [productData]);

  // const isAboveMediumScreens = useMediaQuery("(min-width: 1200px)")

    const revenueExpenses = useMemo(() => {
  
    return kpiData &&
      kpiData.data[0].monthlyData.map(({ month, revenue, expenses }) => ({
        name: month.substring(0, 3),
        revenue,
        expenses
      }));
  
  }, [kpiData]);

  return (

  <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>

    {/* our map in the dashboard */}
    <div>
        <DashboardGraph className='h-200'>
            
             <div className='pt-1'>
                 <BoxHeader
                   title='Companies Revenue Map'
                   subtitle='Displaying annual revenue of our companies globally'
                 />
             </div>

            <div className='p-10'>
                <CompaniesRevenueMap/> 
            </div>             

        </DashboardGraph>
    </div>

    {/* our graph in the dashboard */}
    <div>
        <DashboardGraph className='h-200'>
            <ResponsiveContainer  width="100%" height="100%">
                 <AreaChart
                  width={500}
                  height={400}
                  data={revenueExpenses}
                  margin={{
                    top: 15,
                    right: 20,
                    left: -10,
                    bottom: 60,
                  }}
                >
                  {/* this for the grids that appear */}
                    <CartesianGrid strokeDasharray="3 3" />

                     {/* the colorReveunue matches the fill bellow which is the first line */}
                     <defs>
                       {/* This means: Start point: (0,0) = Top-left corner
                           End point: (0,1) = Bottom-left corner
                           Result: Vertical gradient from top to bottom 
                       */}

                       <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      
                           {/* we use two stop so we can achieve the fade
                               we can multiple colours */}

                           <stop offset="30%" stopColor= {palette.tertiary[300]} stopOpacity={1} />
                           <stop offset="95%" stopColor={palette.tertiary[300]} stopOpacity={0.1} /> 

                       </linearGradient>

                       <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                      
                           <stop offset="30%" stopColor={palette.tertiary[300]} stopOpacity={1} />
                           <stop offset="95%" stopColor={palette.tertiary[300]} stopOpacity={0.1} /> 

                     </linearGradient>

                   </defs>

                  <XAxis dataKey="name" 
                           tickLine={false}
                           style={{ fontSize: "10px" }}
                    />
                    <YAxis
                      tickLine={false}
                      axisLine={{ strokeWidth: "0"}} 
                      style={{ fontSize: "10px" }}
                      domain={[8000, 23000]} //the range of the Y axis
                    />
                    <Tooltip />
                    <Area 
                        type="monotone" 
                        dataKey="revenue" //=> this is from revenueExpenses
                        stroke={palette.primary.main} 
                        fillOpacity={1}
                        dot={true}
                        fill="url(#colorRevenue)" 
                    />
                    <Area 
                        type="monotone" 
                        dataKey="expenses" //=> this is from revenueExpenses 
                        dot = {true}
                        stroke= "#db4dff"
                        fillOpacity={1}
                        fill="url(#colorExpenses)" 
                    />
                </AreaChart>
          </ResponsiveContainer>
        </DashboardGraph>
    </div>
    
    
  </div>
  )
}

export default Row2

// 