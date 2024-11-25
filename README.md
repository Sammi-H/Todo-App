Todo-list App

This is a Todo-list App, a school project I am working on as part of my studies at KYH Stockholm. As I work towards becoming a frontend developer, this project helps me develop my skills in web development, including working with APIs, DOM manipulation, event handling, and building interactive user interfaces.

About the App

The Todo-list App is designed to help users manage their daily tasks efficiently. It allows users to create, update, and delete tasks while ensuring data is stored on a backend server for persistence.

Features

Add New Tasks
Users can add tasks by entering text in the input field and clicking the "Add Task" button or pressing the Enter key.
The new task is sent to the backend server using a POST request and then displayed in the task list.
Mark Tasks as Completed or Uncompleted
Tasks can be marked as completed by clicking on them. This action sends a PUT request to update the task’s status on the backend.
Completed tasks are styled with a strikethrough and a checked icon for clear visual distinction.
Users can also revert a task’s status back to "uncompleted" by clicking on it again.
Prevent Deletion of Uncompleted Tasks
Users cannot delete a task unless it is marked as completed.
If a user tries to delete an uncompleted task, a modal popup explains why the action is not allowed.
Delete Completed Tasks
Completed tasks can be deleted by clicking the delete icon. A DELETE request is sent to the backend server, and the task is removed from the list.
How the App Works

The app interacts with a backend API to manage tasks. Here is a summary of how it works:

When the app loads, it fetches tasks from the API using a GET request and displays them on the screen.
Each task is dynamically created and displayed in the task list using JavaScript.
Task completion or deletion sends PUT or DELETE requests to update the server accordingly.
The app ensures a seamless user experience by providing real-time feedback, such as updating the UI immediately after any action.
This project is helping me improve my understanding of how frontend and backend systems work together to create functional web applications. It also gives me the opportunity to practice building user-friendly features with proper error handling and a responsive design.
