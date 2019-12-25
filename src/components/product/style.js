import styled from 'styled-components';

export const Product = styled.div`
	display: flex;
	user-select: none;
	flex-flow: row wrap;
	align-items: center;
	justify-content: space-between;
	padding: 16px;
	border-bottom: 1px solid #e5e5e5;
	background-color: ${({ active }) => (active ? '#f2f2f2' : '')};
`;

const Thumbnail = styled.img`
	height: 60px;
	width: 60px;
	margin: 16px;
`;

const Description = styled.div`
	text-align: left;
	h4 {
		font-size: 15px;
		margin-bottom: 0;
	}
	span {
		color: #b7b7b7;
		&:nth-child(1) {
			margin-left: 20px;
		}
	}
`;

Product.Description = Description;
Product.Thumbnail = Thumbnail;

export default Product;
