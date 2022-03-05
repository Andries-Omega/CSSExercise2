export default function Footer() {
	return (
		<div className="bg-gray-900 hidden lg:block">
			<div className="pt-40 px-32">
				<div className="flex mx-auto ml-32">
					<div className="container mr-5">
						<img
							className="h-20 w-20"
							src="src/assets/images/TheLogo_Footer.png"
						/>
						<p className="text-white text-base">
							Since 1987 established fact that a reader
							<br /> will be distracted by readeable
							<br /> content of the page.
						</p>
						<div className="flex justify-around mt-8">
							<div className=" bg-blue-500 rounded-full h-16 w-16 grid place-items-center ">
								<i className="fa-brands fa-facebook-f text-white text-2xl"></i>
							</div>
							<div className=" bg-white rounded-full h-16 w-16 grid place-items-center ">
								<i className="fa-brands fa-twitter text-blue-500 text-2xl"></i>
							</div>
							<div className=" bg-blue-500 rounded-full h-16 w-16 grid place-items-center ">
								<i className="fa-brands fa-linkedin-in text-white text-2xl"></i>
							</div>
							<div className=" bg-blue-500 rounded-full h-16 w-16 grid place-items-center ">
								<i className="fa-brands fa-instagram text-white text-2xl"></i>
							</div>
						</div>
					</div>
					<div className="container">
						<h1 className="text-xl text-white font-bold mb-8">Company</h1>
						<p className="text-base text-blue-500 mb-8 hover: cursor-pointer hover:text-blue-800">
							Home
						</p>
						<p className="text-base text-white mb-8 hover: cursor-pointer hover:text-blue-500">
							About
						</p>
						<p className="text-base text-white mb-8 hover: cursor-pointer hover:text-blue-500">
							Services
						</p>
						<p className="text-base text-white mb-8 hover: cursor-pointer hover:text-blue-500">
							Team
						</p>
						<p className="text-base text-white mb-8 hover: cursor-pointer hover:text-blue-500">
							Careers
						</p>
					</div>
					<div className="container">
						<h1 className="text-xl text-white font-bold mb-8">Others</h1>
						<p className="text-base text-white mb-8 hover: cursor-pointer hover:text-blue-500">
							Contact Us
						</p>
						<p className="text-base text-white mb-8 hover: cursor-pointer hover:text-blue-500">
							Blog
						</p>
						<p className="text-base text-white mb-8 hover: cursor-pointer hover:text-blue-500">
							Pricing
						</p>
						<p className="text-base text-white mb-8 hover: cursor-pointer hover:text-blue-500">
							Live Support
						</p>
					</div>
					<div>
						<h1 className="text-xl text-white font-bold mb-8">Request Call</h1>
						<input
							className=" h-10 rounded-lg px-4 italic focus:ring-0 border-white border-4 focus:outline-none"
							placeholder="Enter phone number"
						/>
						<button className=" bg-blue-500 text-white rounded-lg h-12 px-5 shadow-2xl hover:bg-blue-800 mt-10">
							Free Consult
						</button>
					</div>
				</div>
				<button className=" bg-blue-500 fixed text-white rounded-lg h-12 px-5 shadow-2xl hover:bg-blue-800 bottom-0 w-12 right-0 mr-6 mb-10">
					<i className="fa-solid fa-arrow-up"></i>
				</button>
			</div>
		</div>
	);
}
