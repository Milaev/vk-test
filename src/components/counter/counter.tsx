import React from "react";
import './counter.styl'

const MAX_COUNTER_SIZE = 99;

interface CounterProps {
  count: number;
}

const Counter = ({count}: CounterProps): JSX.Element => {
	const displayCount = count > MAX_COUNTER_SIZE ? '99+' : count;
	const fontSize = count > MAX_COUNTER_SIZE ? '12px' : '14px';

  return (
    <div className="counter" style={{ fontSize }}>
			<h1>{displayCount}</h1>
		</div>
  );
}

export default Counter;