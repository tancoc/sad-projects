import styled, { keyframes } from 'styled-components'

const Spin = keyframes`
	from {
		transform: rotate(0deg);
	}

	to {
		transform: rotate(360deg);
	}
`

const Container = styled.div`
	background-color: hsla(230, 100%, 90%, .5);
	place-items: center;
	position: absolute;
	display: grid;
	height: 100vh;
	width: 100%;
	z-index: 999999;

	svg {
		animation: ${ Spin } 3s infinite;
		color: hsl(260, 100%, 50%);
		height: 75px;
		width: 75px;
	}
`

const Spinner = () => {
	return (
		<Container>
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>
		</Container>
	)
}

export default Spinner