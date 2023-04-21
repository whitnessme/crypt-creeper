# crypt-seeker

[CryptSeeker](https://crypt-seeker.onrender.com/) is a React/Redux/Express clone of HipCamp, but for those interested in staying in supernatural places. There are some good ole fashioned Haunted Hotels, Cryptid hideaways, mysterious spaces, and otherwise supernatural places! 

## Technologies
- **Frontend**
    - React
    - Redux
    - Moment.js
- **Backend**
    - Express
    - Sequelize
    - postgres
    - bcrypt
    
## Features & Screenshots
### Landing Page
---------------------------

![landing page](https://user-images.githubusercontent.com/89945390/233702363-b06c7621-480a-4147-bba0-c5f6e4a1f722.png)

---------------------------

### Haunts List
---------------------------

![haunts page](https://user-images.githubusercontent.com/89945390/233703717-67184888-8762-4e14-8b10-b795068b42c1.png)

---------------------------

### Login - Demo User & Demo Host
---------------------------

![login modal](https://user-images.githubusercontent.com/89945390/233703885-7317bb69-35f8-41d6-9092-3cef456a749b.png)

---------------------------

### Signup - Start Hosting
---------------------------

![signup page](https://user-images.githubusercontent.com/89945390/233704089-c7511e42-e9d7-40e8-a461-0c4d54b6366c.png)

----------------------------
### Haunt Page
-------------------------------

![haunt page](https://user-images.githubusercontent.com/89945390/233704352-97a82ca6-603c-4caf-bebb-429a512a3292.png)

--------------------------------
### Regular User
#### Booking Feature/Trips for staying at a Haunt!

--------------------------
![trips page](https://user-images.githubusercontent.com/89945390/233704204-0719e29f-7388-47ae-80c0-647e95fd3e8b.png)

-------------------------

![successfully booked](https://user-images.githubusercontent.com/89945390/233704556-eba0e111-d9b4-4b7c-b52e-200675f92c9f.png)

-----------------------
    
### Host User
#### Listing a Haunt
----------------------

![listings](https://user-images.githubusercontent.com/89945390/233704749-b012fbf5-5529-40a7-9bd9-8183ac798a94.png)

------------------------

![create a haunt](https://user-images.githubusercontent.com/89945390/233704824-bcab6470-e72c-402d-ad18-c74e85114c3d.png)
------------------------

#### Adding features to listing - Area features, Amenities, & Essentials
---------------------

![edit haunt features](https://user-images.githubusercontent.com/89945390/233705507-65bbad5a-f057-479f-a543-c770d0299caf.png)

-------------------------

## Database Schema

![Crypt Seeker Diagram](https://github.com/whitnessme/crypt-seeker/blob/91707decc5bc4c40a18475e904afbdc609a534a5/frontend/public/images/diagram_CS_solo_react.png)

## Run Locally Instructions:

1. Clone this repo
    * `git clone git@github.com:whitnessme/crypt-seeker.git`

2. Install dependencies from the root directory
    * `npm install`

3. Create a POSTGRESQUL user with CREATEDB and PASSWORD in PSQL
    * `CREATE USER <name> WITH CREATEDB PASSWORD '<password>'`

4. Create a `.env` file in the backend directory based on the `.env.example` found within the respective directory

5. Enter your psql user's name and password information into your `.env` file along with your desired database name, a secured combination of characters for your JWT_SECRET, and your desired PORT (preferably 5000)

6. Add the following proxy to your package.json file within your frontend directory, replacing or keeping the 5000 port to match your PORT configuration found in your `.env` file.
    * `"proxy": "http://localhost:5000"`

7. Create database, migrate, and seed models with script:
    * `npm run db:setup`
    
8. Start backend server
    * `npm start`
    
9. Start frontend services, which should open the app in your default browser, if not navigate to http://localhost:3000.
    * `npm start`
    
10. You may use the demo user or create a new regular user account by clicking on "Sign up" button. If you wish to make a host user click on the "Start Hosting" button.
