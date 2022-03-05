export default function Contact() {
	return (
		<div className="flex justify-around md:px-64 w-screen">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-5 place-items-center md:px-24 px-16">
				{/* So i want the image to be at the top on mobile and right on desktop, grid makes it a hustle to do that, so i create to simalar divs but one displays on mobile
                and the other on desktop, like how i did the header*/}

				{/*Desktop*/}
				<div className="hidden md:block">
					<h1 className="md:text-5xl text-3xl font-bold">Get handling now</h1>
					<p className=" text-gray-800 mt-5 text-base">
						It is a long established fact that a reader will be distracted by
						<br />
						the readable content of page when looking at these layout. The
						<br /> point of using Lorem Ipsum is that it has a more-or-less
						normal distribution
					</p>
					<button className="bg-blue-500 text-white rounded-lg h-12 px-5 shadow-2xl hover:bg-blue-800 mt-10">
						Let's Contact
					</button>
				</div>
				<div className="hidden md:block">
					<img
						className="mt-5 rounded-lg h-52 w-52"
						src="./src/assets/images/woman_holding_tablet.jpg"
					/>
				</div>
				{/*Mobile*/}
				<div className="md:hidden block">
					<div className="md:hidden block mb-10">
						<img
							className="mt-5 rounded-lg h-52 w-52"
							src="./src/assets/images/woman_holding_tablet.jpg"
						/>
					</div>
					<h1 className="md:text-5xl text-3xl font-bold">Get handling now</h1>
					<p className=" text-gray-800 mt-5 text-base">
						It is a long established fact that a reader will be distracted by
						<br />
						the readable content of page when looking at these layout. The
						<br /> point of using Lorem Ipsum is that it has a more-or-less
						normal distribution
					</p>
					<button className="bg-blue-500 text-white rounded-lg h-12 px-5 shadow-2xl hover:bg-blue-800 mt-10">
						Let's Contact
					</button>
				</div>
			</div>
		</div>
	);
}
