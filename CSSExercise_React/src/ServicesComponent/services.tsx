export default function Services() {
	return (
		<div className=" bg-slate-300 pt-24 w-screen mb-10  overflow-x-hidden">
			<h1 className="text-center text-2xl md:text-5xl font-bold">
				Here are the services we provide
			</h1>
			<p className="text-center text-base text-gray-700">
				The point of using Lorem Ipsum is that it has
			</p>
			<div className="container">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 mb-10 pb-10 w-screen place-items-center">
					{cardsInfo.map((cardI) => (
						<div className="bg-white rounded-3xl h-auto w-[80px] md:w-80 p-5 shadow-lg">
							<div className={cardI.iconContainer}>
								<i className={cardI.icon}></i>
							</div>
							<h1 className=" text-xl mt-8 font-bold">{cardI.title}</h1>
							<p className="mt-3 text-base text-gray-700">
								It is a long established fact that a reader will be <br />{" "}
								distracted by the readable content
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
//create the card data
const cardsInfo = [
	{
		iconContainer: "h-20 w-20 bg-pink-300 rounded-full grid place-items-center",
		icon: "fa-regular fa-window-restore text-white text-3xl",
		title: "Software Development",
		description:
			"It is a long established fact that a reader will be distracted by the readable content",
	},
	{
		iconContainer:
			"h-20 w-20 bg-orange-300 rounded-full grid place-items-center",
		icon: "fa-solid fa-microchip text-white text-3xl",
		title: "System Application",
		description:
			"It is a long established fact that a reader will be distracted by the readable content",
	},
	{
		iconContainer: "h-20 w-20 bg-blue-300 rounded-full grid place-items-center",
		icon: "fa-solid fa-cloud text-white text-3xl",
		title: "Network Solutions",
		description:
			"It is a long established fact that a reader will be distracted by the readable content",
	},
	{
		iconContainer:
			"h-20 w-20 bg-purple-400 rounded-full grid place-items-center",
		icon: "fa-solid fa-brain text-white text-3xl",
		title: "A.I. System",
		description:
			"It is a long established fact that a reader will be distracted by the readable content",
	},
	{
		iconContainer: "h-20 w-20 bg-red-500 rounded-full grid place-items-center",
		icon: "fa-solid fa-code text-white text-3xl",
		title: "Web & App Development",
		description:
			"It is a long established fact that a reader will be distracted by the readable content",
	},
	{
		iconContainer:
			"h-20 w-20 bg-green-400 rounded-full grid place-items-center",
		icon: "fa-regular fa-comments text-white text-3xl",
		title: "IT Consultation",
		description:
			"It is a long established fact that a reader will be distracted by the readable content",
	},
];
