import Blog from "./BlogComponent/blog";
import Contact from "./ContactComponent/contact";
import Footer from "./FooterComponent/footer";
import Header from "./HeaderComponent/header";
import Hero from "./HeroComponent/hero";
import Services from "./ServicesComponent/services";
import Team from "./TeamComponent/team";
import "./tailwind.css";
export default function App() {
	return (
		<div className="h-screen">
			<Header />
			<Hero />
			<Services />
			<Contact />
			<Blog />
			<Team />
			<Footer />
		</div>
	);
}
