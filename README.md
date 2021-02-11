
To get started, navigate to the root directory

    Install the NPM packages npm install
    Make sure to update the config/config.json file with your database information
    Setup the database clean and seed it with data npx sequelize db:drop && npx sequelize db:create && npx sequelize db:migrate && npx sequelize db:seed:all
    Start the app nodemon


User Stories

1)	Sign in:  You will need to Sign into the Card Collector Site, if you are a member
2)	Log In:  If you are a new member, you can create a log-in
3)	Create: Select a Baseball card Player that you want for your Card Collector Site 
4) Create: Input the Team that the Baseball player plays
5)Create: Input the Year of the Card for the player that you want
6) Create: Input a User ID  (use 1,2,3)
7) Read: Cards will be placed in pgAdmin
    a) Suits table will store the Baseball Players
    b) Users Table will store the Users 
8)	Update:  if you want to add Cards to your Card Collector Site
9) Select EDIT and then change the Players name or team or year

9)	Delete: if you want to Delete Cards from your Card Collector Site
10) Select DELETE button and the player will remove from your Card Collection 

Wireframe - Set up Process 

1) Table: Cards - name,team, year , userID (FK) 
2) Table: User - name, username, password, userId (PK)

Test to Heroku 
1) log into Heroku 