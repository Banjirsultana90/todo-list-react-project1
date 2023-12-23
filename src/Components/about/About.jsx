import React from 'react';

const About = () => {
    return (
        <div className='min-h-screen py-20'>
            <div className='mx-5'>
                <h2 className='text-5xl text-center my-5'> About Todo App</h2>
                <p className='mx-5'> Welcome to our Todo App! This simple yet powerful application helps you stay organized and manage your tasks efficiently.</p>

                <h3 className='text-center font-bold text-xl'>  Features:</h3>
                <p> Task Management: Create, organize, and prioritize tasks to stay on top of your daily activities.
                    Drag and Drop: Effortlessly rearrange tasks by dragging and dropping them into different categories.
                    Deadline Tracking: Set deadlines for tasks to ensure everything gets done on time.
                    Priority Setting: Assign priority levels to tasks for better focus on what matters most.
                    User Authentication: Securely access your tasks by logging in with your account.</p>
                <p> How to Use:
                    Create Tasks: Click on the "Create Task" button and enter task details, including title, description, deadline, and priority.
                    Manage Tasks: View your tasks categorized as "ToDo," "Ongoing," and "Completed." Drag tasks between categories to update their status.
                    Stay Organized: Prioritize tasks, set deadlines, and keep track of what needs to be done.
                    About the Development:
                    This Todo App was developed with love using React and leverages the powerful react-beautiful-dnd library for seamless drag-and-drop functionality. It also utilizes Firebase for user authentication and Axios for secure data fetching.</p>

            </div>
            <div className='mx-5'>
                Credits:
                Developed by Banjir Sultana
                Feel free to reach out to us for any feedback or suggestions!
            </div>
        </div>
    );
};

export default About;