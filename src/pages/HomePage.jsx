

import { Button } from "@/components/ui/button";
import { Toaster } from "react-hot-toast";

function Home() {

	return (
		<>
		

			<div className="min-h-screen">
				<div className="flex justify-center items-center h-screen">
					<div className="text-center">
						<h1 className="text-4xl font-bold">Welcome to the React Starter</h1>
						<p className="text-lg mt-4">This is a React Starter Template with Tailwind CSS</p>
						<Button variant="secondary" className="mt-8">Button From Shadcn</Button>
					</div>
				</div>
			</div>

			<Toaster />
			
		</>
	);
}

export default Home;
