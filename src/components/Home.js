import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import bgTree from '../assets/bg_home.svg';

import { HomeNavBar } from './HomeNavBar';
import { BackgroundAnimation } from './BackgroundAnimation';
import { Carbon } from './Carbon';
import { Hidric } from './Hidric';

const HomeWrapper = styled.div`
	height: 100vh;
	width: 100vw;
	color: black;
	padding-left: 32vw;
	display: flex;
	justify-content: center;
	align-items: center;
	@media (max-width: 1198px) {
		width: 100vw;
		padding-left: 35vw;
	}
	@media (max-width: 960px) {
		width: 100vw;
		padding-left: 50vw;
		padding-right: 5vw;
		padding-top: 5em;
	}
	@media (max-width: 800px) {
		width: 100vw;
		padding: 0;
	}
	@media (max-width: 600px) {
		padding: 0;
	}
	@media (max-width: 330px) {
		padding-top: 6em;
	}
`;

const HomeNavBarWrapper = styled.div`
	position: absolute;
	height: 2em;
	width: 100vw;
	top: 0;
	left: 0;
`;

const BackgroundAnimationWrapper = styled.div`
	position: absolute;
	height: 500px;
	width: 100vw;
	top: 5em;
	left: 0;
	padding-left: 16vw;
	z-index: -99999999;
	@media (max-width: 550px) {
		padding-left: 0;
	}
`;

const HomeBox = styled.div``;

const TitleHome = styled.div`
	text-transform: uppercase;
	color: #38a66d;
	font-family: ${(props) => props.theme.fonts.tittle}, serif;
	font-weight: 700;
	text-align: center;
	font-size: 50px;
`;

const TextHome = styled.div`
	padding: 1em;
	text-transform: uppercase;
	text-align: center;
	color: #38a66d;
	font-family: ${(props) => props.theme.fonts.tittle}, serif;
	font-weight: 700;
	font-size: 20px;
`;

const BackgroundTree = styled.img`
	position: absolute;
	bottom: 1em;
	left: -1em;
	width: 35em;
	z-index: -9999;
	@media (max-width: 1200px) {
		width: 30em;
	}
	@media (max-width: 800px) {
		display: none;
	}
`;

const ButtonBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: auto;
	padding-top: 2em;
	@media only screen and (max-width: 1180px) {
		justify-content: space-around;
	}
	@media only screen and (max-width: 950px) {
		display: grid;
		align-items: center;
		justify-content: center;
		padding-top: 0;
	}
`;

const Button = styled.button`
	background: transparent;
	backdrop-filter: blur(2px);
	padding: 8px;
	font-size: 25px;
	border: 2px solid;
	border-radius: 0.12em;
	font-weight: 500;
	text-transform: uppercase;
	transition: background-color 1s ease;
	color: ${(props) =>
		props.black ? 'black' : props.blue ? 'cornflowerblue' : '#a67171'};
	border-color: ${(props) =>
		props.black ? 'black' : props.blue ? 'cornflowerblue' : '#a67171'};
	&:hover {
		cursor: pointer;
		color: ${(props) => props.theme.colors.ligth};
		background-color: #38a66dab;
		font-weight: 500;
	}
	@media only screen and (max-width: 950px) {
		width: 10em;
		margin: 0.3em;
	}
`;

const HomeMenuWraper = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 10em;
	height: 100vh;
	z-index: 999;
	background-color: gray;
`;

const MenuNavBar = styled.div`
	padding-top: 5em;
	display: flow-root;
	justify-content: center;
	text-align: center;
	a {
		color: #000;
		text-decoration: none;
		padding: 1em;
	}
	div {
		font-weight: 500;
		font-size: 20px;
		color: white;
		border-bottom: 1px solid black;
		&:hover {
			cursor: pointer;
		}
	}
`;

export const Home = () => {
	const [homeContent, setHomeContent] = useState(0);
	const [homeMenuState, setHomeMenuState] = useState(false);

	const handleClick = (e) => {
		console.log(e.target.id);
		if (e.target.id === 'Carbon') {
			setHomeContent(1);
		} else if (e.target.id === 'Hidric') {
			setHomeContent(2);
		}
		if (e.target.id === 'Ecological') {
			setHomeContent(3);
		}
	};

	const handleReturn = () => {
		setHomeContent(0);
	};

	const handleMenu = () => {
		console.log('click');
		setHomeMenuState(!homeMenuState);
	};

	const HomeContent = () => {
		if (homeContent === 0) {
			return <Intro />;
		} else if (homeContent === 1) {
			return <Carbon handleReturn={handleReturn} />;
		} else if (homeContent === 2) {
			return <Hidric handleReturn={handleReturn} />;
		} else if (homeContent === 3) {
			return <Hidric handleReturn={handleReturn} />;
		}
	};

	const Intro = () => {
		return (
			<>
				<TitleHome>Calculate Your Footprint</TitleHome>
				<TextHome>Are you being all the green that you can be?</TextHome>
				<ButtonBox>
					<Button black id='Carbon' onClick={handleClick}>
						Carbon
					</Button>
					<Button blue id='Hidric' onClick={handleClick}>
						Water
					</Button>
					<Button id='Ecological' onClick={handleClick}>
						Ecological
					</Button>
				</ButtonBox>
			</>
		);
	};

	const Background = () => {
		return (
			<>
				<BackgroundTree src={bgTree} alt='TreeBackground' />
				<BackgroundAnimationWrapper>
					<BackgroundAnimation />
				</BackgroundAnimationWrapper>
			</>
		);
	};

	const HomeMenu = () => {
		if (homeMenuState) {
			return (
				<HomeMenuWraper>
					<MenuNavBar>
						<Link to='/'>
							<div className='fill'>Home</div>
						</Link>
						<Link to='/'>
							<div className='fill'>Information</div>
						</Link>
						<Link to='/'>
							<div className='fill'>Others</div>
						</Link>
						<Link to='/'>
							<div className='fill'>About</div>
						</Link>
						<Link to='/'>
							<div className='fill'>Contribute</div>
						</Link>
					</MenuNavBar>
				</HomeMenuWraper>
			);
		} else {
			return null;
		}
	};

	return (
		<HomeWrapper>
			<HomeNavBarWrapper>
				<HomeNavBar handleMenu={handleMenu} />
			</HomeNavBarWrapper>
			<HomeMenu />
			<HomeBox>
				<HomeContent />
			</HomeBox>
			<Background />
		</HomeWrapper>
	);
};
