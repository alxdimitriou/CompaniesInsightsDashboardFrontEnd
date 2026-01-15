import Row1 from './Row1';
import Row2 from './Row2';
import Row3 from './Row3';
//import { useKpis } from '../../hooks/useKpis';

//we are setting 10 different layout for
//each display graph card
//source https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas
//each letter represents the differnet type of graph
//and the repetition of each letter gives the size of the graph

// const gridTemplateLargeScreen = `
//     "statistics statistics"
//     "statistics statistics"
//     "c  c"
//     "c  c"
//     "d  a"
//     "d  a"
//     "d  a"
//     "lowStockNotification lowStockNotification"
//     "lowStockNotification lowStockNotification"
// `;
// //so in small screens it will be one column
// const gridTemplateSmallScreen = `
//     "statistics"
//     "statistics"
//     "statistics"
//     "c"
//     "c"
//     "c"
//     "d"
//     "d"
//     "d"
//     "a"
//     "a"
//     "a"
//     "lowStockNotification"
//     "lowStockNotification"
//     "lowStockNotification"
// `;

// //     "a"
//     "a"
//     "a"
//     "a"
//     "b"
//     "b"
//     "b"
//     "b"   
//     "d"
//     "d"
//     "d"
//     "e"
//     "e"
//     "f"
//     "f"
//     "f"
//     "g"
//     "g"
//     "g"
//     "h"
//     "h"
//     "h"
//     "h"

//source for gridTemplateColumns : https://grid.malven.co/

const Dashboard = () => {

    // const isAboveMediumScreens = useMediaQuery("(min-width: 1200px)")

    return (
    <div className="min-h-screen grid gap-7 md:grid-cols-2 overflow-x-auto">
  
            <div className="md:col-span-2">
                <Row1/>
            </div>
            
            {/* bg-amber-900 add color on divs for
                visualing where they take place */}
            <div className="md:col-span-2">
                <Row2/>
            </div>

            <div className="md:col-span-2">
                <Row3/>
            </div>
</div>

  )
}

export default Dashboard