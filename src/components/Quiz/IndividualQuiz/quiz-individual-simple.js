import React from 'react';
import styled from 'styled-components';

// START SLIDER -------------------------------------------------------------------------------------------------------------------
const height = '16px';
const thumbHeight = 36;
const trackHeight = '16px';
// colours
const upperColor = '#888E92';
const thumbColor = 'white';
const thumbHoverColor = 'white';
const upperBackground = `linear-gradient(to bottom, ${upperColor}, ${upperColor}) 100% 50% / 100% ${trackHeight} no-repeat transparent`;
const lowerBackground = `linear-gradient(to right, #00f260, #0575e6)`;
// Webkit cannot style progress so we fake it with a long shadow on the thumb element
const makeLongShadow = (color, size) => {
	let i = 18;
	let shadow = `${i}px 0 0 ${size} ${color}`;
	for (; i < 706; i++) {
		shadow = `${shadow}, ${i}px 0 0 ${size} ${color}`;
	}
	return shadow;
};
const SliderInput = styled.input`
	overflow: hidden;
	display: block;
	appearance: none;
	max-width: 700px;
	border: 1px solid black;
	width: 100%;
	border-radius: 10px;
	height: ${height};
	cursor: pointer;
	&:focus {
		outline: none;
	}
	&::-webkit-slider-runnable-track {
		width: 100%;
		height: ${height};
		background: ${lowerBackground};
	}
	&::-webkit-slider-thumb {
		position: relative;
		appearance: none;
		height: ${thumbHeight}px;
		width: ${thumbHeight}px;
		background: ${thumbColor};
		border-radius: 100%;
		border: 1px solid black;
		border: 0;
		top: 50%;
		transform: translateY(-50%);
		box-shadow: ${makeLongShadow(upperColor, '-10px')};
		transition: background-color 150ms;
	}
	&::-moz-range-track,
	&::-moz-range-progress {
		width: 100%;
		height: ${height};
		background: ${upperBackground};
	}
	&::-moz-range-progress {
		background: ${lowerBackground};
	}
	&::-moz-range-thumb {
		appearance: none;
		margin: 0;
		height: ${thumbHeight};
		width: ${thumbHeight};
		background: ${thumbColor};
		border-radius: 100%;
		border: 1px solid black;
		border: 0;
		transition: background-color 150ms;
	}
	&::-ms-track {
		width: 100%;
		height: ${height};
		border: 0;
		/* color needed to hide track marks */
		color: transparent;
		background: transparent;
	}
	&::-ms-fill-lower {
		background: ${lowerBackground};
	}
	&::-ms-fill-upper {
		background: ${upperBackground};
	}
	&::-ms-thumb {
		appearance: none;
		height: ${thumbHeight};
		width: ${thumbHeight};
		background: ${thumbColor};
		border-radius: 100%;
		border: 1px solid black;
		transition: background-color 150ms;
		/* IE Edge thinks it can support -webkit prefixes */
		top: 0;
		margin: 0;
		box-shadow: none;
	}
	&:hover,
	&:focus {
		&::-webkit-slider-thumb {
			background-color: ${thumbHoverColor};
		}
		&::-moz-range-thumb {
			background-color: ${thumbHoverColor};
		}
		&::-ms-thumb {
			background-color: ${thumbHoverColor};
		}
	}
`;
// END SLIDER -----------------------------------------------------------------------------------------------------------------
const QuestionQuiz = styled.div`
	font-size: 25px;
	padding-top: 0.5em;
	padding-bottom: 0.5em;
	display: flex;
	justify-content: center;
	${({ theme }) =>
		theme.query.bigMobile({
			'font-size': '20px',
		})}
`;

const SubQuestionQuiz = styled.div`
	font-size: 15px;
	padding-bottom: 1.5em;
	display: flex;
	justify-content: center;
`;
const SliderBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 80%;
	${({ theme }) =>
		theme.query.bigMobile({
			width: '100%',
		})}
`;

const LeftText = styled.div`
	padding-right: 0.5em;
	font-family: 'Heebo', sans-serif;
`;

const RightText = styled.div`
	font-family: 'Heebo', sans-serif;
	padding-left: 0.5em;
`;

const SliderTextStyle = styled.div`
	font-family: 'Heebo', sans-serif;
	font-size: 20px;
	font-weight: 600;
`;

const SliderSubTextStyle = styled.div`
	font-family: 'Heebo', sans-serif;
	font-size: 15px;
`;

const QuizIndividualSimple = ({ state, handleSlider }) => {
	const { quizData, questionIndex } = state;

	// const SliderText = () => {
	// 	if (slider < 1) {
	// 		return (
	// 			<>
	// 				<SliderTextStyle>Nunca</SliderTextStyle>
	// 				<SliderSubTextStyle>{'( x0 )'}</SliderSubTextStyle>
	// 			</>
	// 		);
	// 	} else if (slider < 3) {
	// 		return (
	// 			<>
	// 				<SliderTextStyle>Ocasionalmente</SliderTextStyle>
	// 				<SliderSubTextStyle>{'( x1/3 )'}</SliderSubTextStyle>
	// 			</>
	// 		);
	// 	} else if (slider < 5) {
	// 		return (
	// 			<>
	// 				<SliderTextStyle>Normal</SliderTextStyle>
	// 				<SliderSubTextStyle>{'( x1 )'}</SliderSubTextStyle>
	// 			</>
	// 		);
	// 	} else if (slider < 7) {
	// 		return (
	// 			<>
	// 				<SliderTextStyle>Frecuentemente</SliderTextStyle>
	// 				<SliderSubTextStyle>{'( x1,5 )'}</SliderSubTextStyle>
	// 			</>
	// 		);
	// 	} else if (slider < 9) {
	// 		return (
	// 			<>
	// 				<SliderTextStyle>Muy Frecuentemente</SliderTextStyle>
	// 				<SliderSubTextStyle>{'( x3 )'}</SliderSubTextStyle>
	// 			</>
	// 		);
	// 	} else if (slider <= 10) {
	// 		return (
	// 			<>
	// 				<SliderTextStyle>Siempre</SliderTextStyle>
	// 				<SliderSubTextStyle>{'( x5 )'}</SliderSubTextStyle>
	// 			</>
	// 		);
	// 	}
	// };

	return (
		<>
			<QuestionQuiz>{quizData[questionIndex].title2}</QuestionQuiz>
			<>
				<SliderBox>
					<LeftText>Never</LeftText>
					<SliderInput
						type='range'
						name='slider'
						min='0'
						max='10'
						step='2'
						value={quizData[questionIndex].simpleState.slider}
						onChange={(e) => handleSlider(e, 'slider')}
					/>
					<RightText>Always</RightText>
				</SliderBox>
				{/* <SliderText /> */}
			</>
		</>
	);
};

export default QuizIndividualSimple;
