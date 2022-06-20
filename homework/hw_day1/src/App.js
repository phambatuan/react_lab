import React from 'react';
import Button from './components/Button';
import Title from './components/title/Title';

const App = () => {

  return (
    <div>
    <Button title={'Save'}/>
     <Button title={'Cancel'}/>
     <Button title={'renting'}/>
     <Button title={'Buy'}/>

     <Title name={'this is 1'}/>
     <Title name={'this is 2'}/>
     <Title name={'this is 3'}/>
     <Title name={'this is 4'}/>
     <Title name={'this is 5'}/>
    </div>
  )
}

export default App