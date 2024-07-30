import styled from 'styled-components';
import { SpinnerContainer } from './spinner.styles';

export const BaseButton = styled.button`
	min-width: 175px;
	width: auto;
	height: auto;
	letter-spacing: 0.5px;
	line-height: 30px;
	padding: 10px 35px 10px 35px;
	font-size: 12px;
	background-color: black;
	color: white;
	text-transform: uppercase;
	font-family: 'Open Sans Condensed';
	font-weight: bolder;
	border: none;
	cursor: pointer;
	display: flex;
	justify-content: center
	margin-right: 10px;
	align-items: center;


	&:hover {
		background-color: white;
		color: black;
		border: 1px solid black;
	}
`;

export const GoogleSignInButton = styled(BaseButton)`
	background-color: #4285f4;
	color: white;

	&:hover {
		background-color: #357ae8;
		border: none;
	}
`;

export const InvertedButton = styled(BaseButton)`
	background-color: white;
	color: black;
	border: 1px solid black;

	&:hover {
		background-color: black;
		color: white;
		border: none;
	}
`;

export const ButtonSpinner = styled(SpinnerContainer)`
	width: 30px;
	height: 30px;
`;
