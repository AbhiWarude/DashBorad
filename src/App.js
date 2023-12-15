import React from 'react'
import Header from './Header'
import CustomizedTables  from './dashborad'
import PieCenterLabel from './piechart'


const App = () => {
  return (
    <div>
      <Header/>
      <CustomizedTables/>  
      <PieCenterLabel/>
    </div>
  )
}

export default App