import React from "react";
import "../css/clima.css"


function Clear({limpia}){


	return(
		<div onClick={limpia} className="boton-clear">
			<h2>Clear</h2>
		</div>
		)
}

export default Clear;