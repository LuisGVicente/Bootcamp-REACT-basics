import HelloWorld from './componentes/HelloWorld';
import './App.css';
import Card from './componentes/Card';
import HelloVar from './componentes/HelloVar';
import HelloUser from './componentes/HelloUser';
import HelloProps from './componentes/HelloProps';
import ButtonProps from './componentes/ButtonProps';
import List from './componentes/List';
import Navbar from './componentes/Navbar';
import Counter from './componentes/Counter';
import User from './componentes/User';
import CounterContext from './componentes/context/CounterContext';
import CounterContextComp from './componentes/CounterContextComp';
import CounterUserReducer from './componentes/CounterUserReducer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HelloWorld></HelloWorld>
        <Card></Card>
        <HelloVar></HelloVar>
        <HelloUser></HelloUser>
        <HelloProps name={'Abel Cabeza'}></HelloProps>
        <ButtonProps text = {'Enviar'}></ButtonProps>
        <ButtonProps text = {'Cancelar'}></ButtonProps>
        <List list = {['aceitunas', 'jamon','levadura']}></List>
        <Navbar></Navbar>
        <Counter></Counter>
        <User></User> 
        <CounterContext.Provider value={5}>
          <CounterContextComp></CounterContextComp>
        </CounterContext.Provider>
        <CounterUserReducer></CounterUserReducer>
  
      </header>
    </div>
  );
}

export default App;
