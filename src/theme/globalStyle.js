import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
import { Tabs, Button } from 'antd';

export const defaultTheme = {
	primaryDark: '#E49E4C',
	primaryLight: '#EA8C1F',
	fontColor: '#5A5859'
};

export const GlobalStyle = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css?family=Rubik:500&display=swap');
	@import url('https://rsms.me/inter/inter.css');
	body {
		font-family: 'Inter';
		color: ${props => props.theme.fontColor};
		max-height: 100vh;
		font-weight:500;
	}
	h1 {
		font-family: 'Rubik';font-weight: 500;
	}

	h1,
	h2,
	h3,
	h4 {
		color: ${props => props.theme.fontColor};	
	}
`;

export const FullHeightTabs = styled(Tabs)`
	&,
	.ant-tabs-top-content > .ant-tabs-tabpane.ant-tabs-tabpane-active,
	.ant-tabs-top-content {
		display: flex;
		flex-flow: column nowrap;
		flex-grow: 1;
	}

	.ant-tabs-nav .ant-tabs-tab:hover {
		animation: 0s !important;
	}

	.ant-tabs-nav .ant-tabs-tab {
		padding: 14px 9px;
	}

	.ant-tabs-ink-bar {
		background-color: ${props => props.theme.primaryDark};
		height: 4px;
	}
`;

export const Footer = styled(Flex).attrs(() => ({
	column: true,
	alignEnd: true,
	justifyCenter: true
}))`
	border-top: 1px solid #f2f2f2;
	height: 100px;
`;

export const FlexWrapper = styled(Flex).attrs(() => ({
	column: true
}))`
	padding: 40px;
	height: 100vh;
	@media (max-width: 768px) {
		padding: 18px;
	}
`;
export const StyledButton = styled(Button)`
	&.ant-btn {
		font-size: 15px;
		width: 143px;
	}
`;
