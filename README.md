# Workout-Tracker

As a user, I want to be able to view create and track daily workouts. I want to be able to log multiple exercises in a workout on a given day. I should also be able to track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, I should be able to track my distance traveled.

For this assignment, I will create a workout tracker. I have already been provided with the front end code in the Develop folder. This assignment will require me to create Mongo database with a Mongoose schema and handle routes with Express.


## App Requirements
Add exercises to a previous workout plan.
Add new exercises to a new workout plan.
View the combined weight of multiple exercises on the stats page.

## Depolyment Requirements
Set Up MongoDB Atlas
Deploy with Heroku and MongoDB Atlas


## Deployment URL
https://arcane-ridge-76824.herokuapp.com



## Issue

### Resolution to this issue was the account I created in Atlas Cloud DB did not have the correct permissions. The database user privelages were "Atlas Admin", and I fixed the issue by changing that to "Read and write to any database"

Here is the documented issue history:

Once I deployed the app to heroku using AtlasDB, it stopped working.
I started getting the following error
```
441cd0d5f fwd="73.184.135.116" dyno=web.1 connect=0ms service=7ms status=304 bytes=238 protocol=https
2021-02-02T22:58:30.041279+00:00 app[web.1]: In route POST /api/workouts/
2021-02-02T22:58:30.046282+00:00 app[web.1]: { date: 1612306710041 }
2021-02-02T22:58:40.071223+00:00 app[web.1]: Workout add FAILED via POST /api/workouts
2021-02-02T22:58:40.078775+00:00 heroku[router]: at=info method=POST path="/api/workouts" host=arcane-ridge-76824.herokuapp.com request_id=4eabb3dc-7f64-4932-a723-7d6c95f0009a fwd="73.184.135.116" dyno=web.1 connect=1ms service=10060ms status=400 bytes=216 protocol=https
2021-02-02T22:58:40.082301+00:00 app[web.1]: MongooseError: Operation `workouts.insertOne()` buffering timed out after 10000ms
2021-02-02T22:58:40.082303+00:00 app[web.1]: at Timeout.<anonymous> (/app/node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:185:20)
2021-02-02T22:58:40.082304+00:00 app[web.1]: at listOnTimeout (internal/timers.js:554:17)
2021-02-02T22:58:40.082305+00:00 app[web.1]: at processTimers (internal/timers.js:497:7)
2021-02-02T22:58:40.148567+00:00 heroku[router]: at=info method=GET path="/exercise?id=undefined" host=arcane-ridge-76824.herokuapp.com request_id=90b5c77f-ed93-44ed-8503-ed90f0839d98 fwd="73.184.135.116" dyno=web.1 connect=0ms service=15ms status=304 bytes=237 protocol=https
2021-02-02T22:58:40.206699+00:00 heroku[router]: at=info method=GET path="/style.css" host=arcane-ridge-76824.herokuapp.com request_id=98b30b15-fd99-4b2c-95f0-47d89204de7e fwd="73.184.135.116" dyno=web.1 connect=0ms service=11ms status=304 bytes=238 protocol=https
2021-02-02T22:58:40.206920+00:00 heroku[router]: at=info method=GET path="/exercise.js" host=arcane-ridge-76824.herokuapp.com request_id=47f83198-fc62-44f5-ae48-f98ca5d05b21 fwd="73.184.135.116" dyno=web.1 connect=1ms service=6ms status=304 bytes=238 protocol=https
2021-02-02T22:58:40.208001+00:00 heroku[router]: at=info method=GET path="/api.js" host=arcane-ridge-76824.herokuapp.com request_id=6cae697e-1918-4a90-b2f3-574908a68d42 fwd="73.184.135.116" dyno=web.1 connect=0ms service=5ms status=304 bytes=237 protocol=https
2021-02-02T22:58:58.641833+00:00 app[web.1]: (node:21) UnhandledPromiseRejectionWarning: MongooseServerSelectionError: Could not connect to any servers in your MongoDB Atlas cluster. One common reason is that you're trying to access the database from an IP that isn't whitelisted. Make sure your current IP address is on your Atlas cluster's IP whitelist: https://docs.atlas.mongodb.com/security-whitelist/
```


It was as if the DB connection was being blocked, but I can see the connection coming from the Atlas DB console
<img src="https://github.com/sstephensMCSE/Workout-Tracker/blob/main/public/screenshots/Atlas_Mongodb.jpg?raw=true" width="1000" title="deployed">


On the Local deployment everything is working. I can add workouts and exercises to the collection, and the ID's are generated automatically.
<img src="https://github.com/sstephensMCSE/Workout-Tracker/blob/main/public/screenshots/local_db.jpg?raw=true" width="1000" title="deployed">


And I can see the last workout on the homepage.
<img src="https://github.com/sstephensMCSE/Workout-Tracker/blob/main/public/screenshots/local_workout.jpg?raw=true" width="1000" title="deployed">

And the dashboard is working correctly. 
<img src="https://github.com/sstephensMCSE/Workout-Tracker/blob/main/public/screenshots/Local_dashboard.jpg?raw=true" width="1000" title="deployed">

I am still getting this problem in the URL from the deployed app. "Undefined"
```
https://arcane-ridge-76824.herokuapp.com/exercise?id=undefined
```
