import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from  './components/Card'

function App() {
	const [count, setCount] = useState(0);

  let myObj = {
    age: 21,
    Name: "Aditya"
  }
	return (
		<>
			<h1 className="bg-green-400 text-3xl underline font-bold text-center mt-10 p-5 rounded-xl">
				Tailwind Test
			</h1>
      <Card channel = "code with Aditya" someObj={myObj}/>
      <Card/>
		</>
	);
}

export default App;
