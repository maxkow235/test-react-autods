import React, { useState } from 'react';
import Flex, { FlexItem } from 'styled-flex-component';
import { Product } from './style';
import { Checkbox, Input, Select } from 'antd';

export default props => {
	const { product } = props;
	const [checked, setChecked] = useState(false);

	return (
		<Product key={product.id} active={checked}>
			<Flex justifyBetween alignCenter contentCenter full>
				<Flex alignCenter>
					<Checkbox
						checked={checked}
						onChange={e => {
							props.checkedHandler(product.id, e.target.checked);
							setChecked(e.target.checked);
						}}
					></Checkbox>
					<Product.Thumbnail
						className='thumbnail'
						src={product.thumbnail}
						alt='Thumbnail'
					/>
					<Product.Description className='description'>
						<h4>{product.name}</h4>
						<span>Sell ID: {product.sell_id} </span>
						<span style={{ marginLeft: 16 }}>SKU: {product.sku}</span>
					</Product.Description>
				</Flex>

				<FlexItem basis='340px'>
					<Flex alignCenter justifyBetween>
						<Input
							placeholder='Enter Sell ID'
							name={`input${product.id}`}
							style={{ width: 160 }}
							onChange={e => console.log(e.target.value)}
						/>
						<Select
							name={`select${product.id}`}
							placeholder='Select source site'
							style={{ width: 160 }}
							onChange={val => console.log(val)}
						>
							<Select.Option value='Amazon'>Amazon</Select.Option>
							<Select.Option value='eBay'>eBay</Select.Option>
						</Select>
					</Flex>
				</FlexItem>
			</Flex>
		</Product>
	);
};
