import styled from "styled-components";
const Wrapper = styled.header`
	img {
		margin-top: 1rem;
		min-height: fit-content;
		display: block;
	}
	h1 {
		span {
			color: #765eb5;
		}
	}
	@media (max-width: 992px) {
		.tagline {
			font-size: 2 rem;
		}
	}
`;

export default Wrapper;
