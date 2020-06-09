import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { ArrowBackOutline } from '@styled-icons/typicons';
import { Person } from '@styled-icons/evaicons-solid';
import { Factory } from '@styled-icons/boxicons-solid';

import CarImg from '../../assets/carbon_img.png';

const CarbonWrapper = styled.div`
	color: black;
	margin-right: 2vw;
	@media (max-width: 1000px) {
		color: black;
		padding-top: 5em;
	}
	@media (max-width: 960px) {
		padding-top: 0;
	}
	@media (max-width: 800px) {
		color: black;
		padding-top: 5em;
	}
	@media (max-width: 700px) {
		color: black;
		padding-top: 3em;
	}
	@media (max-width: 440px) {
		color: black;
		padding-top: 11em;
	}
	@media (max-width: 400px) {
		color: black;
		padding-top: 13em;
	}
	@media (max-width: 330px) {
		padding-top: 14em;
	}
`;

const ArrowIcon = styled(ArrowBackOutline)`
	position: absolute;
	background-color: transparent;
	border: 2px solid #d18226;
	border-radius: 50%;
	padding-bottom: 5px;
	left: 0;
	top: 0;
	color: #d18226;
	&:hover {
		cursor: pointer;
		background-color: #38a66dab;
		color: white;
		border-color: white;
	}
	@media (max-width: 1000px) {
		left: 0;
		top: 0;
	}
	@media (max-width: 800px) {
		left: -1em;
		top: -1em;
	}
	@media (max-width: 630px) {
		left: 1em;
		top: -1em;
	}
	@media (max-width: 500px) {
		left: 1em;
		top: 0em;
	}
	@media (max-width: 440px) {
		left: 0.5em;
		top: 0em;
	}
	@media (max-width: 330px) {
		left: 0.2em;
		top: 0em;
	}
`;

const TitleWrapper = styled.div`
	position: relative;
`;

const TitleCarbon = styled.div`
	position: relative;
	text-transform: uppercase;
	color: black;
	font-family: ${(props) => props.theme.fonts.tittle}, serif;
	font-weight: 700;
	text-align: center;
	font-size: 50px;
	@media (max-width: 1000px) {
		font-size: 45px;
		display: flex;
		padding: 0px 0.45em;
	}
`;
const SubtitleCarbon = styled.div`
	text-transform: uppercase;
	color: black;
	font-family: ${(props) => props.theme.fonts.tittle}, serif;
	text-align: center;
	font-size: 25px;
	@media (max-width: 1000px) {
		display: flex;
		text-align: center;
		justify-content: center;
		font-size: 20px;
		padding: 0px 0.45em;
	}
`;

const BodyCarbon = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	@media (max-width: 1000px) {
		display: grid;
		padding: 0px 0.45em;
	}
`;

const TextCarbon = styled.div`
	padding: 10px;
	text-transform: none;
	text-align: center;
	color: #38a66d;
	font-family: ${(props) => props.theme.fonts.tittle}, serif;
	font-weight: 700;
	font-size: 20px;
	@media (max-width: 1000px) {
		display: flex;
		padding: 0px 0.45em;
	}
`;

const TitleIcon = styled.img``;

const ButtonBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: auto;
	margin-top: 2em;
	@media only screen and (max-width: 1100px) {
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		margin-top: 0;
	}
	@media only screen and (max-width: 1000px) {
		display: grid;
		align-items: center;
		justify-content: center;
		padding-top: 20px;
	}
`;

const Button = styled.button`
	background: transparent;
	backdrop-filter: blur(2px);
	padding: 8px;
	font-size: 25px;
	border-radius: 0.12em;
	font-weight: 800;
	text-transform: uppercase;
	color: cornflowerblue;
	border: 2px solid cornflowerblue;
	&:hover {
		cursor: pointer;
		color: ${(props) => props.theme.colors.ligth};
		background-color: #38a66dab;
	}
	@media only screen and (max-width: 1000px) {
		margin: 0.5em;
	}
	@media only screen and (max-width: 850px) {
		width: 10em;
		margin: 0.8em;
	}
	@media only screen and (max-width: 450px) {
		width: 12em;
		font-size: 20px;
		margin: 0.8em;
	}
`;

const PersonIcon = styled(Person)`
	background-color: transparent;
	font-size: 16px;
	color: black;
`;

const FactoryIcon = styled(Factory)`
	background-color: transparent;
	font-size: 16px;
	color: black;
`;

const CarbonImage = styled.img`
	width: 20em;
	@media only screen and (max-width: 1100px) {
		width: 16em;
	}
	@media (max-width: 1000px) {
		margin: auto;
	}
	@media (max-width: 900px) {
		display: none;
	}
	@media (max-width: 800px) {
		display: block;
		width: 15em;
	}
	@media (max-width: 440px) {
		display: block;
		width: 12em;
		padding-bottom: 1em;
	}
`;

export const Carbon = ({ handleReturn }) => {
	return (
		<CarbonWrapper>
			<TitleWrapper>
				<TitleCarbon>
					<ArrowIcon size='48' onClick={handleReturn} />
					Carbon Footprint
				</TitleCarbon>
				<SubtitleCarbon>Calculate your carbon footprint!</SubtitleCarbon>
				<TitleIcon />
				<BodyCarbon>
					<CarbonImage src={CarImg} alt='image-carbon' />
					<TextCarbon>
						With this calculator you can see
						<br /> whats impact do you or your company <br /> have in the world.
						<br />
						<br />
						Choose what type of carbon footprint
						<br /> do you want to calcualte?
					</TextCarbon>
				</BodyCarbon>
			</TitleWrapper>
			<ButtonBox>
				<Link to='/carbon/quiz/person'>
					<Button>
						<PersonIcon size='30' /> Person
					</Button>
				</Link>
				<Link to='/carbon/quiz/organization'>
					<Button>
						<FactoryIcon size='30' /> Organization
					</Button>
				</Link>
			</ButtonBox>
		</CarbonWrapper>
	);
};