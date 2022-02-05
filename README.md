# crypt-seeker

This is my clone of HipCamp, but for those interested in staying in supernatural places. There are some good ole fashioned Haunted Hotels, Cryptid hideaways, mysterious spaces, and otherwise supernatural places!

### To use this repo:

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
    * `npm db:setup`
    
8. Start backend server
    * `npm start`
    
9. Start frontend services, which should open the app in your default browser, if not navigate to http://localhost:3000.
    * `npm start`
    
10. You may use the demo user or create a new regular user account by clicking on "Sign up" button. If you wish to make a host user click on the "Start Hosting" button.

### Database Schema

![Crypt Seeker Diagram](https://github.com/whitnessme/crypt-seeker/blob/8165e1a4586eea112e5940e6f242fa23e1320bd6/frontend/public/images/diagram_CS_solo_react.png)
