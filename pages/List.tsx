import React from 'react';
import { IState as IProps } from './_app'




const List: React.FC<IProps> = ({ people }) => {
	const renderList = (): JSX.Element[] => {
		return people.map((person) => {
			return (
				<li className='flex m-2 flex-row w-1/2 justify-around mx-auto '>
					<div className='flex-row flex'>
						<img className='p-2' src={person.url} />
						<h2 className='p-2 text-center font-bold '>{person.name}</h2>
					</div>
					<p className='p-2'>{person.age} years old </p>
					<p className='p-2'>{person.notes}</p>
				</li>
			);
		});
	};

	return <ul className='flex w-1/2 content-center justify-around border flex-col mb-8 mx-auto' >{renderList()}</ul>;
};

export default List;
