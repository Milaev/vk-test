import React, { useState } from 'react'
import './button.styl'
import Counter from '../counter/counter';
import Loader from '../loader/loader';

const MAX_TEXT_LENGTH = 20

interface ButtonProps {
	text: string;
	isLoading: boolean;
}

const Button = ({ text, isLoading }: ButtonProps): JSX.Element => {
	const [count, setCount] = useState<number>(0);
	const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  }

	return (
		<div>
			{isLoading 
				? <Loader />
			 :
				<button className="button" onClick={handleClick}>
					<span className="button-text">{text.length > MAX_TEXT_LENGTH ? text.slice(0, 17) + '...' : text}</span>
					<Counter count={count} />
				</button>
			}
		</div>
	)
}

export default Button
