export default function Hero() {
	const textStroke = { WebkitTextStroke: "1px #4299e1" };
	return (
		<div className=" bg-TheGray pt-7 px-10">
			{/* Mobile*/}
			<div className="grid grid-cols-1 place-items-center">
				<h2 className="text-xl font-bold text-center">
					Simplify your company systems with our IT solutions
				</h2>
				<img
					className="mt-5 rounded-lg h-52 w-52"
					src="./src/assets/images/lightbulb.jpg"
				/>
			</div>
			<div className="flex mx-auto items-center">
				{/* One */}
				<h1
					className=" text-15xl stroke-blue-500 stroke-5 text-TheGray"
					style={textStroke}
				>
					1
				</h1>
				<p className="ml-2">
					It is a long established fact that a reader will be distracted by a
					readable content
				</p>
			</div>
			<div className="flex mx-auto items-center">
				{/* Two */}
				<h1
					className=" text-15xl stroke-blue-500 stroke-5 text-TheGray"
					style={textStroke}
				>
					2
				</h1>
				<p className="ml-2">
					It is a long established fact that a reader will be distracted by a
					readable content
				</p>
			</div>
			<div className="flex mx-auto items-center">
				{/* Three */}
				<h1
					className=" text-15xl stroke-blue-500 stroke-5 text-TheGray"
					style={textStroke}
				>
					3
				</h1>
				<p className="ml-2">
					It is a long established fact that a reader will be distracted by a
					readable content
				</p>
			</div>
		</div>
	);
}
