import './App.css';
import Header from './Components/Header/Header'
import Title from './Components/Title/Title'
import AnnualPlan from './Components/AnnualPlan/AnnualPlan';
import Buttons from'./Components/Buttons/Buttons';

function App() {

  return (
    
    <div className='wrapperDiv'>
      <Header />
      <div className='secondDiv'>
        <Title />
        <AnnualPlan />
        <Buttons />
      </div>
    </div>
  )
}

export default App
