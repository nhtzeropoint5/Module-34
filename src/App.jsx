
import { Suspense } from 'react'
import './App.css'
import DaisyNav from './assets/components/daisyNav'
import Navbar from './assets/components/Navbar/Navbar'
import Pricing from './assets/components/pricingOpt/Pricing'
import ResultsCharts from './assets/components/ResultsCharts'
import axios from 'axios'
import MarksChart from './assets/components/markschart/MarksChart.'


function App() {
 
const pkk = fetch('./src/assets/components/pricingOpt/PricingData.json').then(res => res.json());

const marksPromise = axios.get('./src/assets/components/marks.json')


  return (
    <>
    <Navbar></Navbar>
      {/* <DaisyNav></DaisyNav> */}
      {/* <h3 className='text-7xl'>Bubby Dilo Chete</h3> */}
    <Suspense fallback ={<span class="loading loading-spinner loading-xl"></span>}>
      <Pricing pkk ={pkk}></Pricing>
    </Suspense>
    <ResultsCharts></ResultsCharts>

    <Suspense>
      <MarksChart data={marksPromise}></MarksChart>
    </Suspense>
    
    </>
  )
}

export default App


/*





export default navLinks;


*/