import React, { useState } from 'react';
import { IState as Props } from './_app';

interface IProps {
	people: Props['people'];
	setPeople: React.Dispatch<
		React.SetStateAction<
			{
				name: string;
				age: number;
				url: string;
				notes?: string;
			}[]
		>
	>;
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
	const [input, setInput] = useState({
		name: '',
		age: '',
		note: '',
		img: '',
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
		setInput({
			...input,
			[e.target.name]: e.target.value,
		});
	};

 const handleClick = () => {
		if (!input.name || !input.age) return;

		setPeople([
			...people,
			{
				name: input.name,
				age: parseInt(input.age),
				url: input.img,
				notes: input.note,
			},
		]);

		setInput({
			name: '',
			age: '',
			img: '',
			note: '',
		});
 };

	return (
		<div className='w-screen flex justify-center content-center flex-col p-2'>
			<input className='border w-1/3 self-center mb-2' type='text' placeholder='Name' value={input.name} onChange={handleChange} name='name' />
			<input className='border w-1/3 self-center mb-2' type='text' placeholder='Age' value={input.age} onChange={handleChange} name='age' />
			<input className='border w-1/3 self-center mb-2' type='text' placeholder='Image Url' value={input.img} onChange={handleChange} name='img' />
			<textarea className='border w-1/3 mb-5 self-center' placeholder='Notes' value={input.note} onChange={handleChange} name='note' />

			<button className='border w-1/3 self-center bg-gray-50' onClick={handleClick}>
				Add To List
			</button>
		</div>
	);
};

export default AddToList;
