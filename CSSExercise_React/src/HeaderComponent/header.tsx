import "../tailwind.css";
let burgerOpen = true;
const burgerOneClass = "flex w-7 h-0.5 bg-black";
export default function Header() {
	return (
		<nav className="bg-TheGray w-full">
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
				</div>
			</div>
			{/* Mobile */}
			<div className="px-6 grid md:hidden place-items-center">
				<img className="h-20 w-20" src="src/assets/images/TheLogo.png" />
				<div className="flex">
					<a href="#" className="mr-10 text-blue-500">
						<i className="fa-solid fa-house text-xl"></i>
					</a>
					<a href="#" className="mr-10">
						<i className="fa-solid fa-circle-info text-xl"></i>
					</a>
					<a href="#" className="mr-10">
						<i className="fa-solid fa-screwdriver-wrench text-xl"></i>
					</a>
					<a href="#" className="mr-10">
						<i className="fa-solid fa-user-group text-xl"></i>
					</a>
				</div>
			</div>
		</nav>
	);
}

function burgerClicked() {
	if (burgerOpen) {
		burgerOpen = false;
		console.log("Closing Buger");
	} else {
		burgerOpen = true;
		console.log("Opening burger");
	}
}
