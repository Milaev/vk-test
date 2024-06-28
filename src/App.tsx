import React, { useEffect, useState } from 'react';
import Button from './components/button/button';
import './styles/app.styl'

const FREQ_NETWORK_ERROR = 0.3;
const TIME_TO_CHECK_NETWORK = 5000;

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  //Имитируем проверку статуса сети каждые 5 сек с вероятностью дисконнекта 30%
  useEffect(() => {
    const checkNetwork = () => {
      const networkStatus = Math.random() < FREQ_NETWORK_ERROR;
      setIsLoading(networkStatus);
    };

    const intervalId = setInterval(checkNetwork, TIME_TO_CHECK_NETWORK);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="App">
      <Button 
        text={"Накликай лайков"}
        isLoading={isLoading}  
      />
    </div>
  );
}

export default App;
