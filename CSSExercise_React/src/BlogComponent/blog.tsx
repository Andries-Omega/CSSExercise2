export default function Blog() {
	return (
		<div className=" py-56">
			<h3 className="text-base text-center text-blue-600">FROM THE BLOCK</h3>
			<h1 className="text-5xl text-center font-bold">
				Recent news from the blog
			</h1>
			<p className=" text-gray-800 text-center">
				The point of using Lorem Ipsum is that it has.
			</p>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 px-10 md:px-32 gap-16">
				<div className="bg-white rounded-2xl shadow-2xl h-80">
					<div className="bg-blog-news bg-no-repeat bg-cover h-64 pt-3 pr-3 rounded-t-2xl">
						<div className="bg-white opacity-75 w-32 float-right rounded-l-full rounded-r-full">
							<h3 className="text-base text-center">News</h3>
						</div>
					</div>
					<h3 className=" font-bold text-lg ml-10 mt-10">
						Lorem ipsum dolor sit amet lur
					</h3>
					<p className=" text-gray-800 mt-5 ml-10 mb-20">
						It is a long established fact that a<br /> reader will be
						disctracted by the
						<br /> readable content of a page when
						<br /> looking at its layout ...
					</p>
					<p className=" float-right bottom-0 mb-5 mr-5">Read more</p>
				</div>
				<div className="bg-white rounded-2xl shadow-2xl h-80">
					<div className="bg-blog-technology bg-no-repeat bg-cover h-64 pt-3 pr-3 rounded-t-2xl">
						<div className="bg-white opacity-75 w-32 float-right rounded-l-full rounded-r-full">
							<h3 className="text-base text-center">Technology</h3>
						</div>
					</div>
					<h3 className=" font-bold text-lg ml-10 mt-10">
						Lorem ipsum dolor sit amet lur
					</h3>
					<p className=" text-gray-800 mt-5 ml-10 mb-20">
						It is a long established fact that a<br /> reader will be
						disctracted by the
						<br /> readable content of a page when
						<br /> looking at its layout ...
					</p>
					<p className=" float-right bottom-0 mb-5 mr-5 text-blue-500">
						Read more
					</p>
				</div>
				<div className="bg-white rounded-2xl shadow-2xl h-80">
					<div className="bg-blog-business bg-no-repeat bg-cover h-64 pt-3 pr-3 rounded-t-2xl">
						<div className="bg-white opacity-75 w-32 float-right rounded-l-full rounded-r-full">
							<h3 className="text-base text-center">Business</h3>
						</div>
					</div>
					<h3 className=" font-bold text-lg ml-10 mt-10">
						Lorem ipsum dolor sit amet lur
					</h3>
					<p className=" text-gray-800 mt-5 ml-10 mb-20">
						It is a long established fact that a<br /> reader will be
						disctracted by the
						<br /> readable content of a page when
						<br /> looking at its layout ...
					</p>
					<p className=" float-right bottom-0 mb-5 mr-5">Read more</p>
				</div>
			</div>
		</div>
	);
}
