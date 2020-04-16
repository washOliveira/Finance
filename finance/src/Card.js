import React, {Fragment} from 'react';

const Card = ({id, nome, saldo}) => {
	return(
		<Fragment>
			<div className='tc bg-white dib br3 pa3 ma2 grow bw2 shadow-3'>
				<img alt='iconRobot' src={`https://robohash.org/${id}?200x200`}/>
				<div className='tl dib pa3 ma2'>
					<h3 className='dib pa3 ma2'>{nome}</h3>
					<p className='dib pa3 ma2'>{saldo}</p>
				</div>
			</div>
		</Fragment>
	);
}

export default Card;