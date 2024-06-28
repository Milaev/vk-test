import React, { useState } from 'react'
import './button.styl'
import Counter from '../counter/counter';

const MAX_TEXT_LENGTH = 20

interface ButtonProps {
	text: string;
}

const Button = ({ text }: ButtonProps): JSX.Element => {
	const [count, setCount] = useState<number>(0);
	const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  }

	return (
		<button className="button" onClick={handleClick}>
      <span className="button-text">{text.length > MAX_TEXT_LENGTH ? text.slice(0, 17) + '...' : text}</span>
      <Counter count={count} />
    </button>
	)
}

export default Button
