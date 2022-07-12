todo:

~~01 - Proper error handling when user inputs invalid data during signup (Such as an email address not containing only the values stated in SQL statement)~~
~~02 - Adjust API calls when preparing to host the website (Currently they call off localhost:3000)~~
~~03 - Add emailer for signup/recovery/appointment accepted confirmation~~
~~04 - Create a link between doctor and patient on their landing pages using uber-like system~~
~~05 - Make sure that the login page isn't accessible when a user is logged in already~~
~~06 - Add login/logout dynamic button on navbar~~
~~07 - Add "my account" on navbar for account modifications (email, password, etc.)~~
~~08 - Personalized login for patient/doctor side, with a greeting of first name~~
09 - Doctor: list all pending appointments, and allow user to accept/decline them
10 - Patient: three buttons: 
    * My appointments (list all appointments, both pending and accepted)
    * Request an appointment (Add all constraints + time + cost(?)
    * Track health (Optional bonus, display stats on eating/sleeping habits)
11 - Sanitize doctor account creation (Appointment rate can be a non-numeric value at the moment)
~~12 - Email_address should have been a part of the users table to deny the possibility of duplicate emails in patient and doctor tables.~~\
13 - Daily script that runs once a new day begins. This script needs to check if any appointments have become expired, for example.