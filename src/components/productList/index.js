import React from 'react';
import { ProductListWrap, Scrollable } from './style';
import Product from 'components/product/';
export default props => {
	return (
		<ProductListWrap>
			<Scrollable>
				{props.products.map((item, index) => (
					<Product
						product={item}
						key={index}
						checkedHandler={props.updateCount}
					></Product>
				))}
			</Scrollable>
		</ProductListWrap>
	);
};
