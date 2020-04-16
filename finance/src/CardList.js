import React, {Fragment} from 'react';
import Card from './Card';
    
const CardList = ({contas}) => {
	return(
		<Fragment>
			{
				contas.map((user, i)=>{
					return (
						<Card
							key={i}
							id={contas[i].id}
							nome={contas[i].nome}
							saldo={contas[i].saldo}
						/>
					)
				})
			}
    	</Fragment>
    )
}

export default CardList;