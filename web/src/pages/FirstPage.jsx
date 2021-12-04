import React, {useState} from "react";  
import {Typography, Button} from "@mui/material"; 
import {Box} from "@mui/system"; 
import gags from "../data/gags"; 

const FirstPage = () => {
	const [numList, setNumList] = useState(0); 
	const generatedGag = () => setNumList(() => Math.floor(Math.random() * gags.length));  
	return (
		<div> 
			<Box>
				<Typography variant="h3"> 
					Buffalo Gags Generator  
				</Typography>
			</Box>
			<Box mt={7}>
				<Typography variant="h5"> 
					{gags[numList].content}    
				</Typography>
			</Box>
			<Box mt={3}> 
				<Typography variant="h6">
					From: {gags[numList].resource} 
				</Typography>
			</Box>
			<Box mt={10}> 
				<Button variant="contained" onClick={generatedGag}>  
					Generated 
				</Button>
			</Box>
		</div>
	)
}

export default FirstPage; 