import { useEffect, useState } from "react";
import TaskEntryDisplay from "../components/task/TaskEntryDisplay";
import TaskForm from "../components/task/TaskForm";
import { addDoc, collection, deleteDoc, getDocs, doc, limit, orderBy, query, where } from "firebase/firestore";
import { db } from "../Firebase";
import { UserAuth } from "../UserContext";

function Tasks() {
    const { user } = UserAuth();
    const [tasksWithId, setTasksWithId] = useState([]);

    

    useEffect(() => {
        if (!user?.email) return; 
    
        const fetchTask = async () => {
            try {
                const taskListRef = collection(db, "taskList");
                const q = query(
                    taskListRef,
                    where("userId", "==", user.email),
                    limit(10)
                );
                const querySnapshot = await getDocs(q);
                const taskList = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    taskName: doc.data().taskName,
                    taskDescription: doc.data().taskDescription,
                    userId: doc.data().userId
                }));
                setTasksWithId(taskList);
            } catch (err) {
                console.log("Error fetching task list: ", err);
            }
        };
    
        fetchTask();
    }, [user]);

    const handleSubmit = async (taskName, taskDescription) => {
        const newTask = {
            taskName,
            taskDescription,
            userId: user.email,
            createdAt: Date.now()
        };

        try {
            const docRef = await addDoc(collection(db, "taskList"), newTask);
            console.log("Document added to db: ", docRef.id);
            setTasksWithId((prev) => [...prev, { ...newTask, id: docRef.id }]);
        } catch (err) {
            console.log(err);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure?")) {
            try {
                const docRef = doc(db, "taskList", id);
                await deleteDoc(docRef);
                
                const newTasks = tasksWithId.filter((task) => task.id !== id);
                setTasksWithId(newTasks);
            } catch (err) {
                console.log("Error: ", err);
            }
        }
    };

    return (
        <div>
            <ul>
                {tasksWithId.map(task => (
                    <TaskEntryDisplay
                        key={task.id}
                        taskName={task.taskName}
                        id={task.id}
                        description={task.taskDescription}
                        handleDelete={handleDelete}
                    />
                ))}
            </ul>
            <hr />
            <TaskForm handleSubmit={handleSubmit} />
            <br />
        </div>
    );
}

export default Tasks;
