import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from './Thumb.styles';
//types
type Props = {
	image: string;
	movieId?: number;
	clickable: boolean;
};

const Thumb: React.FC<Props> = ({ image, movieId, clickable }) => (
	<div>
		{clickable ? (
			<Link to={`/${movieId}`}>
				<Image src={image} alt="Movie Thumb" />
			</Link>
		) : (
			<Image src={image} alt="Movie Thumb" />
		)}
	</div>
);
export default Thumb;
