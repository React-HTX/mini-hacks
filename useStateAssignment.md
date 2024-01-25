## Assignment 1: React State Management with useState Hook

#####`Objective`: Enhance the interactivity of the Home component in a React application by utilizing the useState hook. You will modify the component to change the movie title displayed on the page when a user clicks on a Card component.

##Requirements:

#Setup State for Selected Movie Title:
In the Home component, initialize a state variable using useState to track the currently selected movie title. Name this state variable selectedTitle and its setter function setSelectedTitle.

#Pass a Callback to Card Component:
Modify the Card component to accept a callback function as a prop. This function will be responsible for updating the selectedTitle state in the Home component.
In Home.js, pass a callback function to each Card that sets selectedTitle to the title of the clicked movie.

#Implement Click Handling in Card Component:
In Card.js, add an onClick event listener to the appropriate element (e.g., the card's container div). This event listener should call the passed callback function with the movie's title.

#Display Selected Movie Title:
In the Home component, add a conditional rendering statement to display the selected movie title. This could be a h2 tag below the main heading, which shows "Selected Movie: [Movie Title]" when a movie is clicked.

#Styling (Optional):
Add any additional styling to enhance the user experience, such as highlighting the selected Card or animating the change in the displayed title.

#Deliverables:  
Updated Home.js with state management for the selected movie title and passing callback to Card.
Modified Card.js to accept and use the callback function for click events.
Display of the selected movie title in the Home component.

####This assignment will help you understand how to manage state in React components and handle parent-child component interactions. It's a practical exercise in using the useState hook and event handling in React.

#Have Fun Coding!!!