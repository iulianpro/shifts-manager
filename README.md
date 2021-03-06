# Shifts Manager

![Shifts Manager](https://raw.githubusercontent.com/iulianpro/shifts-manager/master/wireframes/multidevices.png)

> ## Table of Contents
* [UX](https://github.com/iulianpro/shifts-manager#ux)
    - [Project goals](https://github.com/iulianpro/shifts-manager#project-goals)
    - [Audience goals](https://github.com/iulianpro/shifts-manager#audience-goals)
    - [Website owner goals](https://github.com/iulianpro/shifts-manager#website-owner-goals)
    - [Strategy](https://github.com/iulianpro/shifts-manager#strategy)
    - [Scope](https://github.com/iulianpro/shifts-manager#scope)
    - [Structure](https://github.com/iulianpro/shifts-manager#structure)
    - [Skeleton](https://github.com/iulianpro/shifts-manager#skeleton)
    - [Surface](https://github.com/iulianpro/shifts-manager#surface)
* [Features](https://github.com/iulianpro/shifts-manager#features)
    - [Existing Features](https://github.com/iulianpro/shifts-manager#existing-features)
    - [Left to Implement](https://github.com/iulianpro/shifts-manager#left-to-implement)
* [Technologies Used](https://github.com/iulianpro/shifts-manager#technologies-used)
* [Testing](https://github.com/iulianpro/shifts-manager#testing)
* [Deployment](https://github.com/iulianpro/shifts-manager#deployment)
* [Credits](https://github.com/iulianpro/shifts-manager#credits)
    - [Content](https://github.com/iulianpro/shifts-manager#content)
    - [Media](https://github.com/iulianpro/shifts-manager#media)
    - [Acknowledgements](https://github.com/iulianpro/shifts-manager#acknowledgements)

> ## UX

### Project goals
The main purpose in the real world for which I designed this application was to provide the employer I currently work with an easy-to-understand and used tool for generating work shifts, thus replacing the use of excel for this.

### Audience goals
* to have at hand a versatile tool for generating working shifts;
* to be able to manipulate the data with which the employer works, the number of working shifts, the number and data of the employees, to edit and delete working shifts and employees;
* to be able to use the application on any device, at the desk of a desktop or laptop and on the move from the tablet or mobile;

### Website owner goals
As I mentioned above the main purpose in the real world for which I designed this application was to provide the employer I currently work with an easy-to-understand and used tool for generating work shifts, thus replacing the use of excel for this. In addition, I intend to develop this application to bring much more functionality, to make it more complex, features that I will detail below. At the same time, this application can be transformed into a product that may in the future be marketed on the profile market.

### Strategy
This project is intended to be an application that facilitates the work of the managers to organize monthly working shifts, an activity that in a company with several hundred employees, can mean an important consumption of time, while it can be used for the main purpose. of the company, that of making a profit. This first version is a primary one that brings only a few functionalities and would be addressed to small companies.

In the future I will add many more features so that the application is an answer to the potential questions of an entrepreneur: how can I not waste time with organizing work shifts?, how can I automatically send to each employee his or her own graph with working shifts? how can I automatically calculate the hours worked by each employee? How can I automatically calculate gross income for each employee?

### Scope
How does this project answer some of the questions above? By implementing several primary functionalities such as employee records and the possibility of editing their data, and most importantly, generating the monthly schedule of working shifts.

### Structure
This first version of the application contains two main functionalities, the first generation and the working shift management and the second one the employee management. In the first part the user can edit a work shift, delete an entire work shift or just one employee from the work shift. In the second functionality, the user can enter a new employee into the database, can edit the employee's data or can even delete it entirely.

### Skeleton
The application was structured in two main components, the first working shifts and the second the management of the employees. There is also a page for editing a working shift that in the future will function as a modal window, without the stand-alone page. Also, adding a new employee as well as editing their data, works as a modal window.

* [Mobile wireframes](https://github.com/iulianpro/shifts-manager/tree/master/wireframes/mobile);
* [Tablet wireframes](https://github.com/iulianpro/shifts-manager/tree/master/wireframes/tablet);
* [Desktop wireframes](https://github.com/iulianpro/shifts-manager/tree/master/wireframes/desktop);

### Surface
The main color used in this project is ```#007bff``` and for the buttons I chose suggestive colors, respectively ```#ffc107``` for editing, and ```#dc3545``` for deletion.

* ![#007bff](https://placehold.it/75x20/007bff/007bff) #007bff
* ![#ffc107](https://placehold.it/75x20/ffc107/ffc107) #ffc107
* ![#dc3545](https://placehold.it/75x20/dc3545/dc3545) #dc3545

### ![#2b4438](https://placehold.it/800x20/ffffff/ffffff) [⬆](https://github.com/iulianpro/shifts-manager#table-of-contents)

> ## Features
This first version of the application contains basic functionalities. In the future, I want to develop this application to bring more functionality, which I have detailed below.

### Existing Features
* **View Calendar or Home** - in this section the user can take several actions, he can identify a working day so as to bring employees for that working day, he can delete all the employees from a certain working day and also he can delete one employee at a time. The delete operation on the backend is actually an update of the database, so that when the user deletes an employee or an entire work shift, an empty string is transmitted to the database. Considering that the application communicates with a database and thus delays in operation may occur, for a better user experience, I used an external jQuery plugin so that during waiting times, the application will display a spinner that suggests the idea of uploading data. The same plugin is used to display a dialog window, in which the user confirms his actions.

* **Add Employee** - this section is a window with a modal bootstrap form in which the user fills in the data of a new employee, which can later be used to update a work shift. As in the previous section, for a better user experience, I used the same jQuery plugin that displays a spinner to suggest uploading data to the database.

* **Manage Employee** - this section displays all employees in the database. The user can edit an employee's data or delete it entirely from the database. Data editing is also done in a modal boostrap form. To prevent an employee from being accidentally deleted, I used the same jQuery external tool that displays a dialog box where the user confirms the previous command. On editing an employee's avatar is automatically updated according to the selection made in the gender field, if "F" is selected the female avatar is displayed, respectively if "M" is selected the male avatar is displayed.

### Left to Implement
As I mentioned above, a later version of this application will have more functionalities such as the possibility of the user, in the manager's responsibility, to send to each employee his own work schedule, the possibility that the manager will see in time. real how many hours of work has at any given time each employee in shifts manager, the possibility for the application to calculate the gross income of each employee based on an hourly wage, the functionality that when removing an employee from the database, it will be erased in a way automatically and from working shifts, the possibility of displaying working shifts from the employee's perspective, respectively to be able to easily visualize on what days he works and on which days he is off or on vacation, as the case may be.

### ![#2b4438](https://placehold.it/800x20/ffffff/ffffff) [⬆](https://github.com/iulianpro/shifts-manager#table-of-contents)

> ## Technologies Used
To create this website, several technologies were used, as well as some frameworks, libraries and tools detailed below:

| A  | B  | C  | D  | E  |
|---|---|---|---|---|
|[HTML](https://www.w3schools.com/html/default.asp) |[Flask](https://flask.palletsprojects.com/en/1.1.x/) |[Jinja](https://jinja.palletsprojects.com/en/2.11.x/) |[CSS validator](https://jigsaw.w3.org/css-validator/) |[Heroku](https://jinja.palletsprojects.com/en/2.11.x/) |
|[CSS](https://www.w3schools.com/css/default.asp) |[MongoDB](https://www.mongodb.com/) |[Google Fonts](https://jigsaw.w3.org/css-validator/) |[CSS Autoprefixer](https://autoprefixer.github.io/) |[Chrome DevTools](https://autoprefixer.github.io/) |
|[Python](https://www.python.org/) |[PyMongo](https://api.mongodb.com/python/current/) |[jQuery Confirm](http://craftpip.github.io/jquery-confirm/) |[VS Code](https://autoprefixer.github.io/) |[Wireframe](https://wireframe.cc/) |
|[Boostrap](https://getbootstrap.com) |[Gunicorn](https://gunicorn.org/) |[Font Awesome](https://fontawesome.com/) |[Git](https://git-scm.com/) |[Hnet](https://hnet.com/png-to-ico/) |
|[jQuery](https://jquery.com/) |[PopperJS](https://popper.js.org/) |[HTML Validator](https://validator.w3.org/) |[GitHub](https://github.com/) | |

### ![#2b4438](https://placehold.it/800x20/ffffff/ffffff) [⬆](https://github.com/iulianpro/shifts-manager#table-of-contents)

> ## Testing
The aplication was tested both during and after the development of each section separately but also after its completion. I tested all the functionality in the main browsers that run on several operating systems: Chrome, Firefox, Opera, Microsoft Edge and Safari, in Windows 10, Mac OSX 10.14, Android and iOS operating systems. For full responsiveness, for the whole site, I used Bootstrap and tested with [responsivetesttool](http://responsivetesttool.com/) and [responsinator](http://www.responsinator.com/?url=https%3A%2F%2Fiulianpro-shifts-manager.herokuapp.com).

Testing during section development was done primarily with Chrome DevTools, making sure each element works correctly and optimally, including responsiveness across devices. For navbar, I tested the functionality of all links, including the site brand. I also tested toggle and collapse functioning in small and medium devices.

The website has been also tested for HTML and CSS checking and code validation with [HTML Validator](https://validator.w3.org/) and [CSS Validator](https://jigsaw.w3.org/css-validator/).

### ![#2b4438](https://placehold.it/800x20/ffffff/ffffff) [⬆](https://github.com/iulianpro/shifts-manager#table-of-contents)

> ## Deployment
For deployment of this project I used Heroku, the following steps were taken:
1. In bash I logged in to Heroku ```heroku login```;
2. In bash I created a new unique heroku application ```heroku create iulianpro-shifts-manager```;
3. I checked new remote created ```git remote -v```;
4. I Installed gunicorn by typing the following in bash ```pip install gunicorn```;
5. I created a file named "Procfile" that hosts the line ```web gunicorn run:APP```;
6. In bash, I created requirements file with ```pip freeze --local>requirements.txt```;
7. Using bash, I commited the files create ```git add requirements.txt Procfile``` and ```git commit -m "<Commit Message>"```;
8. I pushed everything to Heroku ```git push heroku master```;
9. To set a config variable, I used ```heroku config:set MONGO_URI=mongodb+srv://<username>:<password>@<cluster_name>-qtxun.mongodb.net/<database_name>?RetryWrites=true&w=majority```;
10. The APP was successfully deployed and live at ```https://iulianpro-shifts-manager.herokuapp.com/```.

### ![#2b4438](https://placehold.it/800x20/ffffff/ffffff) [⬆](https://github.com/iulianpro/shifts-manager#table-of-contents)

> ## Credits
### Content
Being an application created especially for functionalities and not a website, the project does not contain text. The concept for content creation is a personal one. It was avoided the display of personal data given the GDPR regulations. Possible similarities with real personal data are simply coincidental.

### Media
As for the media section, general avatar images were used to avoid displaying real images that could violate the legal regulations regarding personal data (GDPR). The images are licensed for free from a dedicated website.

### Acknowledgements
To create this website, an inspiration but at the same time a source from which I learned many technical elements, was W3schoolsas well as from several video resources hosted by Youtube. I would like to thank the Code Institute instructors who are doing a great job and from where I learned a lot in just a few months. I would also like to thank the colleagues with whom I had discussions on the Slack channels, from where I also had to learn. And last but not least, I thank my mentor [Simen Daehlin](https://github.com/Eventyret).

### ![#2b4438](https://placehold.it/800x20/ffffff/ffffff) [⬆](https://github.com/iulianpro/shifts-manager#table-of-contents)

*This website was created for educational purposes, April 2020.*