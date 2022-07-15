import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const List = ({ tasklist, deleteTask }) => {
	return (
		<>
			{tasklist.map(({ id, title }) => (
				<div className="task-item" key={id}>
					<h4 className="task-title">{title}</h4>

					<div className="task-btn">
						<button type="submit">
							<FaEdit />
						</button>
						<button type="submit" onClick={() => deleteTask(id)}>
							<FaTrash />
						</button>
					</div>
				</div>
			))}
		</>
	);
};

export default List;
