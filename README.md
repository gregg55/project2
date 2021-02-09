
To get started, navigate to the root directory

    Install the NPM packages npm install
    Make sure to update the config/config.json file with your database information
    Setup the database clean and seed it with data npx sequelize db:drop && npx sequelize db:create && npx sequelize db:migrate && npx sequelize db:seed:all
    Start the app nodemon


User Stories

1)	Sign in:  You will need to Sign into the Card Collector Site, if you are a member
2)	Log In:  If you are a new member, you can create a log-in
3)	Create: Select a card that you want for your Card Collector Site  
4)	Read: Cards will be placed in pgAdmin
5)	Update:  if you want to add Cards to your Card Collector Site
6)	Delete: if you want to Delete Cards from your Card Collector Site

Wireframe

Cards - name,team, year , userID (FK) 
User - name, username, password, userId (PK)