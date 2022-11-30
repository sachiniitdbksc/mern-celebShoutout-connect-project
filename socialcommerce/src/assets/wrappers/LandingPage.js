import styled from "styled-components";

const Wrapper = styled.main`
	.main {
		display: none;
		float: left;
		text-align: justify;
		span {
			color: #765eb5;
			font-weight: 700;
		}
	}
	h1 {
		font-size: 4rem;
	}
	div {
		align-items: flex-start;
	}
	div {
		button {
			margin: 4rem;
		}
	}
	@media (min-width: 992px) {
		.page {
			display: grid;
			grid-template-columns: 1fr 1fr;
			column-gap: 3rem;
			min-height: 90vh;
			align-items: flex-start;
		}
		.main {
			display: block;
			float: left;
		}
	}
`;

export default Wrapper;
