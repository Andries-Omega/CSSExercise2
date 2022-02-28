export default function Hero() {
	const textStroke = { WebkitTextStroke: "1px #4299e1" };
	return (
		<div className=" bg-TheGray pt-32 ">
			{/* Mobile*/}
			<div className="md:hidden px-16">
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
						className="-mt-24 text-15xl stroke-blue-500 stroke-5 text-TheGray"
						style={textStroke}
					>
						<i>1</i>
					</h1>
					<div className="mt-10 ml-10">
						<h1 className=" text-3xl text-black">Project Discussion</h1>
						<p className=" text-gray-800">
							It is a long established fact that a reader will be distracted by
							a readable content
						</p>
					</div>
				</div>
				<div className="flex mx-auto items-center">
					{/* Two */}
					<h1
						className="-mt-24 text-15xl stroke-blue-500 stroke-5 text-TheGray"
						style={textStroke}
					>
						<i>2</i>
					</h1>
					<div className="mt-10 ml-10">
						<h1 className=" text-3xl text-black">Case Study</h1>
						<p className=" text-gray-800">
							It is a long established fact that a reader will be distracted by
							a readable content
						</p>
					</div>
				</div>
				<div className="flex mx-auto items-center">
					{/* Three */}
					<h1
						className="-mt-24 text-15xl stroke-blue-500 stroke-5 text-TheGray"
						style={textStroke}
					>
						<i>3</i>
					</h1>
					<div className="mt-10 ml-10">
						<h1 className=" text-3xl text-black">Execute Project</h1>
						<p className=" text-gray-800">
							It is a long established fact that a reader will be
							<br /> distracted by a readable content
						</p>
					</div>
				</div>
			</div>

			{/* Desktop*/}
			<div className="hidden md:block ml-24">
				<div className="grid grid-cols-2 gap-10 px-24 ml-32">
					<h1 className=" text-5xl font-bold col-start-1 col-end-1">
						Simplify your company systems with our IT Solutions
					</h1>
					<img
						className="mt-5 rounded-lg min-h-fit row-start-2"
						src="./src/assets/images/lightbulb.jpg"
					/>
					<div className="row-start-2">
						<div className="flex mx-auto items-center mb-10">
							{/* One */}
							<h1
								className="-mt-10 text-20xl stroke-blue-500 stroke-5 text-TheGray"
								style={textStroke}
							>
								<i>1</i>
							</h1>
							<div className="mt-10 ml-10 mb-10">
								<h1 className=" text-3xl text-black">Project Discussion</h1>
								<p className="ml-2 mt-5 text-base text-gray-800">
									It is a long established fact that a reader will be
									<br /> distracted by a readable content
								</p>
							</div>
						</div>
						<div className="flex mx-auto items-center mb-10">
							{/* Two */}
							<h1
								className="-mt-10 text-20xl stroke-blue-500 stroke-5 text-TheGray"
								style={textStroke}
							>
								<i>2</i>
							</h1>
							<div className="mt-10 ml-10">
								<h1 className=" text-3xl text-black">Case Study</h1>
								<p className="ml-2 mt-5 text-base text-gray-800">
									It is a long established fact that a reader will be
									<br /> distracted by a readable content
								</p>
							</div>
						</div>
						<div className="flex mx-auto items-center mb-10">
							{/* Three */}
							<h1
								className="-mt-10 text-20xl stroke-blue-500 stroke-5 text-TheGray"
								style={textStroke}
							>
								<i>3</i>
							</h1>
							<div className="mt-10 ml-10">
								<h1 className=" text-3xl text-black">Execute Project</h1>
								<p className="ml-2 mt-5 text-base text-gray-800">
									It is a long established fact that a reader will be
									<br /> distracted by a readable content
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
