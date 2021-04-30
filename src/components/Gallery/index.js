import { data } from 'autoprefixer';
import React, { useState, useEffect } from 'react';
import '../../App.css';
import img1 from '../../assets/1.jpg';
import img2 from '../../assets/2.jpg';
// import icon_black from "../../assets/logos/icon_black.png"
// import icon_white from "../../assets/logos/icon_white.png"
import logo_black from '../../assets/logos/logo_black.png';
import logo_white from '../../assets/logos/logo_white.png';

export const dataToMap = [
	{
		image: img2,
		imageTitle: 'siegmattel',
		source: img2, // could be a  path to another subpage or external
		imageName: 'Shloopy',
		target: '__blank',
		href: '../../2.jpg',
		buttonLabel: 'bid',
		buttonHref: '#'
	},
	{
		image: img2,
		imageTitle: 'siegmattel',
		source: img2,
		imageName: 'Shloopy',
		target: '__blank',
		href: '../../2.jpg',
		buttonLabel: 'bid',
		buttonHref: '#'
	},
	{
		image: img2,
		imageTitle: 'siegmattel',
		source: img2,
		imageName: 'Shloopy',
		target: '__blank',
		href: '../../2.jpg',
		buttonLabel: 'bid',
		buttonHref: '#'
	},
	{
		image: img2,
		imageTitle: 'siegmattel',
		source: img2,
		imageName: 'Shloopy',
		target: '__blank',
		href: '../../2.jpg',
		buttonLabel: 'bid',
		buttonHref: '#'
	},
	{
		image: img2,
		imageTitle: 'siegmattel',
		source: img2,
		imageName: 'Shloopy',
		target: '__blank',
		href: '../../2.jpg',
		buttonLabel: 'bid',
		buttonHref: '#'
	},
	{
		image: img2,
		imageTitle: 'siegmattel',
		source: img2,
		imageName: 'Shloopy',
		target: '__blank',
		href: '../../2.jpg',
		buttonLabel: 'bid',
		buttonHref: '#'
	}
];

function Gallery(props) {
	const backgroundColor = props.backgroundColor;
	const setBackgroundColor = props.setBackgroundColor;
	const textColor = props.textColor;
	const setTextColor = props.setTextColor;
	const [logoSource, setLogoSource] = useState(logo_black);
	const handleChangeColor = () => {
		setTextColor(textColor === 'black' ? 'black' : 'white');
		setBackgroundColor(backgroundColor === 'white' ? 'black' : 'white');
		setLogoSource(logoSource === logo_black ? logo_black : logo_white);
	};
	const [darkTheme, setDarkTheme] = useState(handleChangeColor);
	useEffect(() => {
		localStorage.setItem('dark', JSON.stringify(darkTheme));
		handleChangeColor();
	}, [darkTheme]);

	// const getDefaultTheme = () => {
	// 	const selectedTheme = JSON.parse(localStorage.getItem('dark'));
	// 	return selectedTheme ?? false;
	// };

	return (
		<section className='font-sans'>
			<div className='fit'>
				<header className='inline-flex'>
					<div className='mx-auto mb-2 float-left w-64 h-64 p-4 -my-5'>
						<img src={`${logoSource}`} className='my-auto '></img>
					</div>
					<>
						<div className='dark-mode-switch'>
							<label
								for='switch'
								onClick={handleChangeColor}
								className='switch transition-all duration-300s ease-in-out transform-gpu'
							>
								<input type='checkbox' id='switch' />
								<span className='slider round' />
							</label>

							<small
								style={{ color: textColor }}
								className='switch-container_text'
							>
								Dark mode
							</small>
						</div>
					</>
				</header>
				<div className='container grid grid-cols-1 sm:grid-cols-2 space-x-2 mx-auto lg:grid-cols-3 max-w-7xl '>
					{dataToMap.map((prop, i) => {
						return (
							<div className='' key={i++}>
								<div className='aspect-w-10 aspect-h-7 mb-2'>
									<a target={`${prop.target}`} href={`${prop.image}`}>
										<img src={`${prop.image}`} className='shadow-cardHover' alt='alt message' />
									</a>
								</div>
								<div className='pt-24'>
									<h2
										style={{ color: textColor }}
										className='img-title font-semibold'
									>
										{prop.imageTitle}
									</h2>
									<h3
										style={{ color: textColor }}
										className='img-name font-medium'
									>
										"{prop.imageName}"
									</h3>
									<div className='bid-button-div'>
										<a className='bid-button uppercase font-medium ring-white ring-2 ring-inset' href={`${prop.buttonHref}`}>
											{prop.buttonLabel}
										</a>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}

export default Gallery;
