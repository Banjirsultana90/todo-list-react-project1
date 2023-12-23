import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Update = () => {
    const navigate=useNavigate()
    const updatetask = useLoaderData()
    const { title, description, deadline, priority,_id
    } = updatetask
    console.log(updatetask);
    
    const handleupdate = async (event) => {
        event.preventDefault();
        const form = event.target;

        const updatedtask = {
            title: form.title.value,
            deadline: form.deadline.value,
            description: form.description.value,
            priority: form.priority.value,
           
        };

     
            try {
                const response = await fetch(`https://todo-list-server-five.vercel.app/tasks/${_id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(updatedtask),
                });

                const data = await response.json();
                if (data.modifiedCount > 0) {
                    toast.success('task updated successfully');
                    navigate('/dashboard');
                } else {
                    toast.error('Failed to update the task');
                }
            } catch (error) {
                toast.error('An error occurred while updating the survey');
                console.error(error);
            }
        
        
    };
    return (
        <div className="w-full py-32 px-10">
            <form  onSubmit={handleupdate}>
                <div className="mb-4">
                    <label htmlFor="title" className="block mb-2 font-semibold">Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        defaultValue={title}
                        // {...register('title', { required: true })}
                        className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:ring focus:border-blue-500"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="description" className="block mb-2 font-semibold">Description:</label>
                    <textarea
                        type="text"
                        id="description"
                        name="description"
                        defaultValue={description}
                        // {...register('description')}
                        className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:ring focus:border-blue-500"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="deadline" className="block mb-2 font-semibold">Deadline:</label>
                    <input
                        type="date"
                        id="deadline"
                        name="deadline"
                        defaultValue={deadline}
                        // {...register('deadline')}
                        className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:ring focus:border-blue-500"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="priority" className="block mb-2 font-semibold">Priority:</label>
                    <select
                        id="priority"
                        name="priority"
                        defaultValue={priority}
                        // {...register('priority')}
                        className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:ring focus:border-blue-500"
                    >
                        <option value="low">Low</option>
                        <option value="moderate">Moderate</option>
                        <option value="high">High</option>
                    </select>
                </div>

                <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                    Update Task
                </button>
            </form>
            <Toaster />
        </div>
    );
};

export default Update;