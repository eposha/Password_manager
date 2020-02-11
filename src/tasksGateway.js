const baseUrl =
    "https://crudcrud.com/api/fd0836da72c74fc295dda4d22005db40/tasks";

export const createTask = taskData => {
    return fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json; utc-8"
        },
        body: JSON.stringify(taskData)
    }).then(response => {
        if (!response.ok) {
            throw new Error("Failed to create task");
        }
    });
}

export const fetchTasksList = () => {
    return fetch(baseUrl)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        })
        .then(tasksList => tasksList.map(({ _id, ...task }) => ({
            id: _id,
            ...task
        })));

}

export const updateTask = (taskId, taskData) => {
    return fetch(`${baseUrl}/${taskId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json; utc-8"
        },
        body: JSON.stringify(taskData)
    }).then(response => {
        if (!response.ok) {
            throw new Error("Failed to create task");
        }
    });
}

export const deleteTask = (taskId) => {
    return fetch(`${baseUrl}/${taskId}`, {
        method: "DELETE"
    }).then(response => {
        if (!response.ok) {
            throw new Error("Failed to delete task");
        }
    });
}