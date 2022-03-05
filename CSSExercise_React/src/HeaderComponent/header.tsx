import "../tailwind.css";
let burgerOpen = true;
const burgerOneClass = "flex w-7 h-0.5 bg-black";
export default function Header() {
	return (
		<nav className="bg-TheGray w-screen">
			{/* Desktop*/}
			<div className="px-44 hidden md:flex justify-around">
				<div>
					<img className=" h-20 w-20" src="src/assets/images/TheLogo.png" />
				</div>
				<div className="flex items-center">
					<a href="#" className="mr-10 text-blue-500">
						Home
					</a>
					<a href="#" className="mr-10">
						About
					</a>
					<a href="#" className="mr-10">
						Services
					</a>
					<a href="#" className="mr-10">
						Team
					</a>
					<GetStarted_Button />
				</div>
			</div>
			{/* Mobile */}
			<div className="md:hidden">
				<div className="px-6 grid place-items-center">
					<img className="h-20 w-20" src="src/assets/images/TheLogo.png" />
				</div>
				<div className="flex justify-center pb-6">
					<GetStarted_Button />
				</div>
				<div className="fixed flex h-screen items-center">
					<div className="py-10 align-middle absolute grid grid-cols-1 md:hidden place-items-center w-12 bg-gray-700 rounded-r-xl ">
						<a href="#" className="mb-8 text-blue-500">
							<i className="fa-solid fa-house text-xl"></i>
						</a>
						<a href="#" className="mb-8 text-white">
							<i className="fa-solid fa-circle-info text-lg "></i>
						</a>
						<a href="#" className="mb-8 text-white">
							<i className="fa-solid fa-screwdriver-wrench text-lg "></i>
						</a>
						<a href="#" className="text-white">
							<i className="fa-solid fa-user-group text-lg "></i>
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
}

function GetStarted_Button() {
	return (
		<button className=" bg-blue-500 text-white rounded-lg h-12 px-5 shadow-2xl hover:bg-blue-800">
			Get Started
		</button>
	);
}
