import React, { useEffect } from "react";

const Alert = ({ msg, type, removeAlert }) => {
	// UseEffect to manage removeAlert Props
	useEffect(() => {
		const timeout = setTimeout(() => {
			removeAlert();
		}, 3000);

		return () => clearTimeout();
	}, []);

	return (
		<>
			<p className={`alert alert-${type}`}>{msg}</p>
		</>
	);
};

export default Alert;
