import TextField from "@material-ui/core/TextField"
import React, { useEffect, useRef, useState } from "react"
import io from "socket.io-client"
import "./App.css"
import Chat from './componants/Chat';
import NameForm from './componants/NameForm';

const App = () => {
	const [name] = useState("asd")
	return (
		<div>
		<Chat name={name}/>
		</div>
	);
};

export default App;
