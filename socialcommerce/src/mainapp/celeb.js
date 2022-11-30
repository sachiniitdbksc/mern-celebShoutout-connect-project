export function Celeb({ id, bio, img, facebook, twitter }) {
	return (
		<div className="celeb" onMouseEnter={() => console.log("hello ", bio)}>
			<img src={img} alt="" />
			<h4>Name:{bio.toUpperCase()}</h4>
			<p>Facebook:{facebook}</p>
			<p>Twitter:{twitter}</p>
		</div>
	);
}
