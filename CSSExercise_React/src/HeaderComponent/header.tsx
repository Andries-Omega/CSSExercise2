import "../tailwind.css";
import GetStarted_Button from "./GetStarted";
let burgerOpen = true;
const burgerOneClass = "flex w-7 h-0.5 bg-black";
export default function Header() {
	return (
		<nav className="bg-TheGray w-screen md:fixed">
			{/* Desktop*/}
			<div className="px-44 hidden md:flex justify-around">
				<div>
					<img className=" h-20 w-20" src="src/assets/images/TheLogo.png" />
				</div>
				<div className="flex items-center">
					<a href="#" className="mr-10 text-blue-500 hover:text-blue-800">
						Home
					</a>
					<a href="#" className="mr-10 hover:text-blue-500">
						About
					</a>
					<a href="#" className="mr-10 hover:text-blue-500">
						Services
					</a>
					<a href="#" className="mr-10 hover:text-blue-500">
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
				<div className="fixed bottom-0 inset-x-0 flex justify-around items-center bg-gray-700 rounded-t-xl h-12">
					<a href="#" className=" text-blue-500">
						<i className="fa-solid fa-house text-xl"></i>
					</a>
					<a href="#" className="text-white">
						<i className="fa-solid fa-circle-info text-xl "></i>
					</a>
					<a href="#" className=" text-white">
						<i className="fa-solid fa-screwdriver-wrench text-xl "></i>
					</a>
					<a href="#" className="text-white">
						<i className="fa-solid fa-user-group text-xl "></i>
					</a>
				</div>
			</div>
		</nav>
	);
}
