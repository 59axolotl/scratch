# scratch

Github Link:

- https://github.com/59axolotl/scratch

-----------------------

Co-authors:

- Irene Wang: https://github.com/irenezw
- Minh Chang: https://github.com/miha-cha
- Danny Murcia: https://github.com/dm2800
- Denton Wong: https://github.com/dentonwong
- David Jones: https://github.com/david-jones-git

-----------------------

v.0.8 features:

- End-to-end (E2E) authentication with password hashing using `bcrypt`
- Login and sessions with JWT
- Hidden section showing creator specific uploads
- Upload form for new video entries (Create)
- Register form for new users (Create)
- View media posted by users (Read)
- Use of modals with integrated forms
- Feed of recent uploaded videos

----------------------
Requirements:

Need to create a file named ".env" in the root directory (same level as package.json)
Bootstrap Library for SCSS
Add the following variables:

mongoURI=
JWT_SECRET=

----------------------

### Motivation and background

The group was looking for an opportunity to solve a real world issue while improving their full stack programming skills as part of the scratch project for the Codesmith Software Engineering Immersive Program (Cohort 59). The goal of the project was to create an application that provides increased visibility for smaller filmmakers, a group that generally does not have much outreach on other larger platforms such as Netflix and Youtube. This project required the group to implement CRUD functionality, login functionality, and route handling, all of which provides the application with basic but usable functionality. 

### Future iterations recommendations:

- Add edit video entry functionality
- Add delete video entry functionality 
- Add search capability
- Add error messages for login/registration on front end 
- Add error messages for video upload form on front end 
- Login confirmation messages
- Registration confirmation messages
- Upload confirmation messages
- Refactor modal infrastructure and implment Redux in the front end to minimize prop drilling
- Give video "cards" a fixed size to avoid resizing based on description length 
- Refactor feed and user upload container to be fixed dimensions 
- Ability to add youtube videos or other site videos directly without having to grab "embed" version of links
- Allow users to upload actual videos/images
- Improve UX of login/sign up and indicate successful login with personalized user icon
- Logout button that deletes cookie