//we split our code to three rows because there so much logic needed for the graphs

import { useMemo } from 'react'
import DashboardGraph from '../../components/DashboardGraph'
import { useKpis } from '../../hooks/useKpis'
//import { useMediaQuery, useTheme } from '@mui/material'
import BoxHeader from '../../components/BoxHeader'
import RevenueMonthByMonthCard from './RevenueMonthByMonthCard'
import PerformanceMetricsCards from './PerformanceMetricsCards'

const Row1 = () => {

  // const isAboveMediumScreens = useMediaQuery("(min-width: 1200px)")

  // const { palette } = useTheme();

  const {data } = useKpis();

  //console.log(data);

//   const revenueExpenses = useMemo(() => {

//   return data &&
//     data.data[0].monthlyData.map(({ month, revenue, expenses }) => ({
//       name: month.substring(0, 3),
//       revenue,
//       expenses
//     }));

// }, [data]);

// const revenueProfit = useMemo(() => {

//   return data &&
//     data.data[0].monthlyData.map(({ month, revenue, expenses }) => ({
//       name: month.substring(0, 3),
//       revenue,
//       profit : (revenue - expenses).toFixed(2)
//     }));

// }, [data]);


//with useMemo we cache our data
//so we do not execute map on every render
//and we transform our data 
//in order to be usable for the chart
const revenues = useMemo(() => {

  return data &&
    data.data[0].monthlyData.map(({id, month, revenue }) => ({
      id,
      monthName: month,
      revenue,
    }));

}, [data]);

  return (
    <>
    {/* how we are able to target gridArea 
       gridArea is a shorthand CSS property that assigns 
       an element to a named area defined in the parent’s 
       grid-template-areas 
       Parent (Box) = defines the map (grid structure + named areas).
      Child (DashboardGraph) = says "I belong in area a (or b / c)."
      is basically telling CSS Grid:
      "Put this child in the slot named a, as defined by the parent’s gridTemplateAreas."
      MUI’s Box passes the prop gridArea down as CSS (style="grid-area: a;")
    */}

      

        <DashboardGraph gridArea="c" >

          <div className='pt-1'>
                 <BoxHeader
                      title='Revenue Month by Month'
                      // subtitle='revenue month by month'
                      // sideText='+4%' 
                  />
          </div>
         

          <div className='flex overflow-x-scroll justify-evenly gap-7'> 
                {
            
                revenues?.map(({id, monthName, revenue}) => (
                  <RevenueMonthByMonthCard key={id}
                                           id={id} 
                                           monthName={monthName} 
                                           revenue={revenue} 
                                           numberOfMonths={revenues.length}
                  />
                )
                  
                )
              }
          </div>
        </DashboardGraph>


        <DashboardGraph className="" gridArea="statistics" >

          <div className='pt-1 mt-8'>
              <BoxHeader
                  title='Performance Metrics'
                  // subtitle='revenue month by month'
                  // sideText='+4%' 
              />
          </div>
          
          <div className='flex overflow-x-scroll justify-evenly gap-7'> 
                <PerformanceMetricsCards />
          </div>
        </DashboardGraph>
    </>
  )
}

export default Row1