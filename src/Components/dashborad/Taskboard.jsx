// import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthProvider';

const Taskboard = () => {
    const { register, handleSubmit, reset } = useForm();
    const {user}=useContext(AuthContext)
  

    const onSubmit = (data) => {
        const { title, description, deadline, priority } = data;
        const formdata = { title, description, deadline, priority ,email:user.email,};
        console.log(formdata);

        fetch('http://localhost:5000/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formdata),
        })
            .then((res) => res.json())
            .then((value) => {
                console.log(value);
                if (value.insertedId) {
                    // console.log('Task created successfully');
                    if (value.insertedId)
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Task created created successfully",
                            showConfirmButton: false,
                            timer: 1500
                        });

                    reset(); // Reset the form after submission
                } else {
                    console.error('Failed to create task');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <div className="my-10 p-4 w-full  bg-white rounded shadow-lg flex gap-5">
            <div className="w-full">
                <form  onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label htmlFor="title" className="block mb-2 font-semibold">Title:</label>
                        <input
                            type="text"
                            id="title"
                            {...register('title', { required: true })}
                            className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:ring focus:border-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="description" className="block mb-2 font-semibold">Description:</label>
                        <textarea
                            id="description"
                            {...register('description')}
                            className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:ring focus:border-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="deadline" className="block mb-2 font-semibold">Deadline:</label>
                        <input
                            type="date"
                            id="deadline"
                            {...register('deadline')}
                            className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:ring focus:border-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="priority" className="block mb-2 font-semibold">Priority:</label>
                        <select
                            id="priority"
                            {...register('priority')}
                            className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:ring focus:border-blue-500"
                        >
                            <option value="low">Low</option>
                            <option value="moderate">Moderate</option>
                            <option value="high">High</option>
                        </select>
                    </div>

                    <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                        Create Task
                    </button>
                </form>
            </div>
            {/* <div className='flex w-2/3 justify-between'>
                <div>
                    <h2 className="text-lg font-semibold mb-4">ToDo:</h2>
                    {alltasks.map((task, index) => (
                        <div key={index} className="border p-2 mb-2 rounded shadow">
                            <p><strong>Title:</strong> {task.title}</p>
                            <p><strong>Description:</strong> {task.description}</p>
                            <p><strong>Deadline:</strong> {task.deadline}</p>
                            <p><strong>Priority:</strong> {task.priority}</p>
                        </div>
                    ))}
                </div>
                <div>Ongoing</div>
                <div>Completed</div>

            </div> */}
        </div>
    );
};

export default Taskboard;
