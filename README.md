# **Main Feature** 

A trip booking app where users can book flights and tours all in one place.  
It offers the convenience of enabling users to find the best deals and options across various providers.  
Additionally, the app typically includes user-friendly features such as personalized recommendations, and mobile check-ins, making it an indispensable tool for both casual tourists and frequent travelers.

# **Participants**
Chen and Joseph have come together to create this application, both taking parst in the front end and back end components.


# **Technology Stack**
  
|   Technologies  | Why its used  |
| :-:  | :-----  |
| MongoDB  | Chosen for its flexibility with schemaless data, making it ideal for projects where data structures can evolve.  |
| Express.js  | A minimal and flexible Node.js web application framework that provides robust features for building single-page, multi-page, and hybrid web applications. |
|React.js| Used for building the user interface, particularly because of its component-based architecture which makes the development of dynamic web pages efficient.|
|Node.js|This is the runtime environment for running JavaScript on the server side, providing the capability to handle multiple requests simultaneously. Additional Libraries/APIs: Mention any other specific libraries (like Axios, Redux) or APIs (like Google Maps, Stripe) that are integral to the project.|




# **Setup and Installation**

>## Prerequisites:  
>>Install Node.js and npm (Node package manager).
>>Install MongoDB and ensure it is running on the default port.  
>## Installing Dependencies:
>>Navigate to the project directory and run npm install to install all required dependencies.  
>## Running the Server  
>>npm start to run the Node.js server.
>## Launching the Application
>>Open a web browser and visit http://localhost:3000 to view the application.
>## Backend Configuration
>>Environment Files:  
>>>Navigate to the backend folder and create a file:  
**.env**  
>>> Add the following contents to the file:  
>>>>MONGODB_CONNECTION_STRING=  
JWT_SECRET_KEY=
>## MongoDB Setup
>>Sign up for an account at MongoDB Atlas.  
Create a new cluster and follow the instructions to set up a new database.  
 Once set up, obtain your MongoDB connection string and add it to the **MONGODB_CONNECTION_STRING=** variable in your .env files.


# **Jwt Secret Key**
JWT_SECRET_KEY= You can search "secret key generator" on Google, and use it to generate a random key for you.


# **Database Schema**

>## User Collection
>>The user collection stores user information, including their username, email, and password.
>## Tour Collection
>>The tour collection stores tour information, including the tour name, location, room type, price, and availability.
>## Booking Collection
>>The booking collection stores information about bookings, including the user who made the booking, the tour they booked, the date of the booking, and the number of rooms booked.  



# **Running the Application**

Frontend:
Open a new terminal and navigate to the frontend directory: **cd frontend**

Install dependencies: **npm install**.

Start the frontend application: **npm start**.

Backend:
Navigate to the backend directory: **cd backend**.

Install dependencies: **npm install**.

Start the server: **npm start**.



# **API Endpoints**

>## User Endpoints
>>**POST /auth/register**: Create a new user in database.  
>>**POST /auth/login**: Authenticate a user and return a JWT token.  
>>**POST /review/:id**: Create a new review for a tour.  
>## Tour Endpoints 
>>**POST /tours/:id**: Create a new tour.  
>>**PUT /tours/:id**: Update information about a specific tour.  
>>**DELETE /tours/:id**: Delete a specific tour.  
>## Booking Endpoints
>>**GET /booking**: Get a list of all bookings.  
>>**GET /booking/:id**: Get information about a specific booking.  
>>**POST /booking**: Create a new booking.   
>## Search Endpoints
>>**GET /tours**: Get a list of all tours.  
>>**GET /tours/:id**: Get information about a specific tour.  
>>**GET /tours/search/getFeaturedTours**: Get a list of featured tours.  
>>**GET /tours/search/getTourCounts**: Get the tour counts.  
>>**GET /tours?page=0**: Get a list of tours with pagination.  
>>**GET /tours/search/getTourBySearch?city=london&distance=0&maxGroupSize=0**: Search tour by city, distance, and max group size.  
