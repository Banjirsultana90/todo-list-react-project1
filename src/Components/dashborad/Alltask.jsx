import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import useAxiosSecure from '../../hook/useAxiosSecure';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';

const Alltask = () => {
    const { user } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure();

    const { data: tasks = [], refetch } = useQuery({
        queryKey: ['tasks', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/tasks/user/${user.email}`);
            return res.data;
        }
    });

    const handleDelete = async (id) => {
        // Confirm deletion using SweetAlert
        await Swal.fire({
            title: 'Are you sure you want to delete?',
            text: 'This action cannot be undone.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it',
            cancelButtonText: 'Cancel',
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await axiosSecure.delete(`/tasks/${id}`);
                    // Upon successful deletion, refetch the data to update the task list
                    refetch();
                    await Swal.fire('Deleted!', 'Your task has been deleted.', 'success');
                } catch (error) {
                    console.error('Error deleting task:', error);
                    await Swal.fire('Error', 'An error occurred while deleting the task.', 'error');
                }
            }
        });
    };

    return (
        <div className=''>
            <div className='grid md:grid-cols-3 gap-3'>
                <div className=''>
                    <h2 className="text-lg font-semibold mb-4">ToDo:</h2>
                    {tasks.map((task, index) => (
                        <div key={index} className="border p-2 mb-2 rounded shadow">
                            <p><strong>Title:</strong> {task.title}</p>
                            <p><strong>Description:</strong> {task.description}</p>
                            <p><strong>Deadline:</strong> {task.deadline}</p>
                            <p><strong>Priority:</strong> {task.priority}</p>
                            <div className='flex justify-between'>
                                <Link to={`/update/${task._id}`}><button className="btn">Edit</button></Link>
                                <button onClick={() => handleDelete(task._id)}>Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
                <div>Ongoing</div>
                <div>Completed</div>
            </div>
        </div>
    );
};
export default Alltask;
// export default Alltasimport React, { useContext } from 'react';
// import { AuthContext } from '../provider/AuthProvider';
// import useAxiosSecure from '../../hook/useAxiosSecure';
// import Swal from 'sweetalert2';
// import { useQuery } from '@tanstack/react-query';
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
// import { Link } from 'react-router-dom';

// const Alltask = () => {
//     const { user } = useContext(AuthContext);
//     const axiosSecure = useAxiosSecure();

//     const { data: tasks = [], refetch } = useQuery({
//         queryKey: ['tasks', user?.email],
//         queryFn: async () => {
//             const res = await axiosSecure.get(`/tasks/user/${user?.email}`);
//             return res.data;
//         }
//     });

//     const handleDelete = async (id) => {
//         // Confirm deletion using SweetAlert
//         // ... (existing code)
//     };

//     const handleDragEnd = async (result) => {
//         if (!result.destination) {
//             return;
//         }
//         const sourceIndex = result.source.index;
//         const destinationIndex = result.destination.index;
//         const draggedTask = tasks[sourceIndex];

//         // Make necessary changes to update task status
//         // For example, move the task to the new position/status
//         // ...

//         // Refetch the data after updating the task status
//         refetch();
//     };

//     return (
//         <div className=''>
//             <DragDropContext onDragEnd={handleDragEnd}>
//                 <div className='grid md:grid-cols-3 gap-3'>
//                     <Droppable droppableId="tasks">
//                         {(provided) => (
//                             <div {...provided.droppableProps} ref={provided.innerRef}>
//                                 <h2 className="text-lg font-semibold mb-4">ToDo:</h2>
//                                 {tasks.map((task, index) => (
//                                     <Draggable key={task._id} draggableId={task._id} index={index}>
//                                         {(provided) => (
//                                             <div
//                                                 ref={provided.innerRef}
//                                                 {...provided.draggableProps}
//                                                 {...provided.dragHandleProps}
//                                                 className="border p-2 mb-2 rounded shadow"
//                                             >
//                                                 {/* Render task details here */}
//                                                 {/* ... (existing task display code) */}
//                                                 <p><strong>Title:</strong> {task.title}</p>
//                             <p><strong>Description:</strong> {task.description}</p>
//                             <p><strong>Deadline:</strong> {task.deadline}</p>
//                            <p><strong>Priority:</strong> {task.priority}</p>
//                            <div className='flex justify-between'>
//                                <Link to={`/update/${task._id}`}><button className="btn">Edit</button></Link>
//                                <button onClick={() => handleDelete(task._id)}>Delete</button>
//                             </div>
                                                
//                                             </div>
//                                         )}
//                                     </Draggable>
//                                 ))}
//                                 {provided.placeholder}
//                             </div>
//                         )}
//                     </Droppable>
//                     <div>Ongoing</div>
//                     <div>Completed</div>
//                 </div>
//             </DragDropContext>
//         </div>
//     );
// };

// export default Alltask;

