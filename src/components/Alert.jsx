import React, { useEffect } from "react";

const Alert = ({ msg, type, removeAlert, list }) => {
	// UseEffect to manage removeAlert Props
	useEffect(() => {
		const timeout = setTimeout(() => {
			removeAlert();
		}, 1500);

		return () => clearTimeout(timeout);
	}, [list]);

	return (
		<>
			<p className={`alert alert-${type}`}>{msg}</p>
		</>
	);
};

export default Alert;
