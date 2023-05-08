# Assignment #7 - Final

I was hoping to be able to add some cool CSS to this application since it is the final project, but I got a bit confused with the deployment process and it took a really long time. I think I had some projects deployed using nginx and some with pm2 so I had to track down which was which and kill everything and start over.

Additionally, I had forgotten to start with the GitClassroom clone but I feel like I re-created everything, so hopefully that is OK.

Things to note:

Project has Title (text) and description, and description is displayed on the details page. Clicking on the tasks short description takes you to the details page (which I realize now doesn't have a cursor to indicate this, but I may try to add that later).
There is a "done" toggle which is done through the "put" API command. It is also stored server side like an update command.
I also added a delete, but then the page didn't refresh when I deleted (because I'm doing it on the front page unlike the professor's example), so I had to implement a refresh after the delete button.

I have to travel for work tomorrow (have to leave for the airport in 2 hours!) but I may try to add some CSS. Otherwise, here ya go!

Thank you so much for your help this semester! This has been a verrrry difficult class for me, but really really educational. I'm going to actually take a step back and try to take CS-50 next semester with the hopes of getting back up to speed on GitHub and deploying to servers and so forth, which was the most difficult thing with this class.
