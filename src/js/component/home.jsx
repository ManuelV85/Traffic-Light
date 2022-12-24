import React, {useState} from "react";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [ color, setColor] = useState("red");
	if(color=="red"){
		return (
			<div className="trafficLight">
				<div className="red selected" onClick={()=> setColor("")}></div>
				<div className="yellow" onClick={()=> setColor("yellow")}></div>
				<div className="green" onClick={()=> setColor("green")}></div>
				
			</div>
		);
	} if(color=="yellow"){
		return (
			<div className="trafficLight">
				<div className="red " onClick={()=> setColor("red")}></div>
				<div className="yellow selected" onClick={()=> setColor("")}></div>
				<div className="green" onClick={()=> setColor("green")}></div>
				
			</div>
		);

	} if(color=="green"){
		return (
			<div className="trafficLight">
				<div className="red" onClick={()=> setColor("red")}></div>
				<div className="yellow" onClick={()=> setColor("yellow")}></div>
				<div className="green selected" onClick={()=> setColor("")}></div>
				
			</div>
		);
	} if(color!=""){
		return(
			
			<h1>Red Light Broken</h1>
		)
	}
	
	return (
		<div className="trafficLight">
			<div className="red" onClick={()=> setColor("black")}></div>
			<div className="yellow" onClick={()=> setColor("yellow")}></div>
			<div className="green" onClick={()=> setColor("green")}></div>
			
		</div>
	);
};

export default Home;