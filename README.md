
To get started, navigate to the root directory

    Install the NPM packages npm install
    Make sure to update the config/config.json file with your database information
    Setup the database clean and seed it with data npx sequelize db:drop && npx sequelize db:create && npx sequelize db:migrate && npx sequelize db:seed:all
    Start the app nodemon


User Stories

User / Sign Up Screen 
1)	Sign in:  You will need to Sign into the Card Collector Site, if you are a current member 
2)	Log In:  If you are a new member, you can create a log-in Username and Password
3)  EDIT Profile:  If you need to edit your existing profile (username or Password), you may change this information and then your profile will be updated with your changes
4) DELETE Profile:  if you no longer need a Profile, then you may delete your profile (username, and password)

Baseball Card Collector Site
5)	Create: Select a Baseball card Player that you want for your Card Collector Site and then type the following
    a)  Create: Input the Baseball player name of the card that you have 
    b)  Create: Input the Team that the Baseball player plays
    b)  Create: Input the Year of the Card for the player that you want
6) Create: Input your current User ID  

pgAdmin Site 
7) Read: Cards will be placed in pgAdmin
    a) Suits table will store the Baseball Players
    b) Users Table will store the Users 

Baseball Card Collector Site  - Update or Edits
8)	Update:  if you want to add Cards to your Card Collector Site
9)  EDIT:  if you want to edit the Baseball Card such as changing the Players name or team or year

Baseball Card Collector Site  - Delete 
10)	Delete: if you want to Delete Cards from your Card Collector Site
11) Select DELETE button and the player will remove from your Card Collection 

Wireframe - Set up Process 

1) Table: Cards - name,team, year , userID (FK) 
2) Table: User - name, username, password, userId (PK)
3) Migration -  Added UserID to Suits  (linked foreign Key to Primary Key)

Test to Heroku 
1) log into Heroku 
2) Link to Baseball Card Collection Site:  https://greggproject2.herokuapp.com/suits
3) Link to User/Sign Up Page: https://greggproject2.herokuapp.com/users
