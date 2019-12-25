import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import 'antd/dist/antd.less';
import { Spin } from 'antd';

import ProductList from './components/productList';
import FileUploader from './components/fileUploader';

import {
	StyledButton,
	defaultTheme,
	FlexWrapper,
	GlobalStyle,
	Footer,
	FullHeightTabs
} from './theme/globalStyle';

import axios from 'axios';

const { TabPane } = FullHeightTabs;

export default function App() {
	const [isLoading, setIsLoading] = useState(false);

	const [state, setState] = useState({
		products: []
	});

	useEffect(() => {
		async function fetchProducts() {
			const url = 'https://autodsmock.herokuapp.com/products';
			setIsLoading(true);
			const response = await axios.get(url);
			setState(prevState => ({ ...prevState, products: response.data }));
			setIsLoading(false);
		}

		fetchProducts();
	}, []);

	const updateCount = (id, isChecked) => {
		setState(prevState => ({
			products: prevState.products.map(item =>
				item.id === id ? { ...item, checked: isChecked } : item
			)
		}));
	};

	const infoLink = <a href='/'>How do i get the source products ID</a>;

	const selectedProducts = state.products.filter(item => item.checked);
	return (
		<ThemeProvider theme={defaultTheme}>
			<Spin tip='Loading...' spinning={isLoading}>
				<FlexWrapper>
					<h1>{state.products.length} Untracked products in my store</h1>
					<FullHeightTabs
						defaultActiveKey='1'
						animated={false}
						tabBarExtraContent={infoLink}
						style={{
							display: 'flex',
							flexFlow: 'column nowrap',
							flexGrow: 1
						}}
					>
						<TabPane tab='Manual Add' key='1'>
							<ProductList
								products={state.products}
								updateCount={updateCount}
							/>
							<Footer>
								<StyledButton
									type='primary'
									onClick={() => console.log(selectedProducts)}
								>
									Add
									{selectedProducts.length
										? `(${selectedProducts.length})`
										: ''}
								</StyledButton>
							</Footer>
						</TabPane>
						<TabPane tab='Add From CSV' key='2'>
							<FileUploader />
							<Footer>
								<StyledButton type='primary'>Next</StyledButton>
							</Footer>
						</TabPane>
					</FullHeightTabs>
				</FlexWrapper>
			</Spin>
			<GlobalStyle />
		</ThemeProvider>
	);
}
