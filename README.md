# Shifts Manager

![Shifts Manager](https://raw.githubusercontent.com/iulianpro/shifts-manager/master/wireframes/multidevices.png)

> ## Table of Contents

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

> ## Features
This first version of the application contains basic functionalities. In the future, I want to develop this application to bring more functionality, which I have detailed below.

### Existing Features
* **View Calendar or Home** - in this section the user can take several actions, he can identify a working day so as to bring employees for that working day, he can delete all the employees from a certain working day and also he can delete one employee at a time. The delete operation on the backend is actually an update of the database, so that when the user deletes an employee or an entire work shift, an empty string is transmitted to the database. Considering that the application communicates with a database and thus delays in operation may occur, for a better user experience, I used an external jQuery plugin so that during waiting times, the application will display a spinner that suggests the idea of uploading data. The same plugin is used to display a dialog window, in which the user confirms his actions.

* **Add Employee** - this section is a window with a modal bootstrap form in which the user fills in the data of a new employee, which can later be used to update a work shift. As in the previous section, for a better user experience, I used the same jQuery plugin that displays a spinner to suggest uploading data to the database.

* **Manage Employee** - this section displays all employees in the database. The user can edit an employee's data or delete it entirely from the database. Data editing is also done in a modal boostrap form. To prevent an employee from being accidentally deleted, I used the same jQuery external tool that displays a dialog box where the user confirms the previous command. On editing an employee's avatar is automatically updated according to the selection made in the gender field, if "F" is selected the female avatar is displayed, respectively if "M" is selected the male avatar is displayed.

### Left to Implement
As I mentioned above, a later version of this application will have more functionalities such as the possibility of the user, in the manager's responsibility, to send to each employee his own work schedule, the possibility that the manager will see in time. real how many hours of work has at any given time each employee in shifts manager, the possibility for the application to calculate the gross income of each employee based on an hourly wage, the functionality that when removing an employee from the database, it will be erased in a way automatically and from working shifts, the possibility of displaying working shifts from the employee's perspective, respectively to be able to easily visualize on what days he works and on which days he is off or on vacation, as the case may be.

> ## Technologies Used
To create this website, several technologies were used, as well as some frameworks, libraries and tools detailed below:

| A  | B  | C  | D  | E  |
|---|---|---|---|---|
|[HTML](https://www.w3schools.com/html/default.asp) |[Flask](https://flask.palletsprojects.com/en/1.1.x/) |[Jinja](https://jinja.palletsprojects.com/en/2.11.x/) |[CSS validator](https://jigsaw.w3.org/css-validator/) |[Heroku](https://jinja.palletsprojects.com/en/2.11.x/) |
|[CSS](https://www.w3schools.com/css/default.asp) |[MongoDB](https://www.mongodb.com/) |[Google Fonts](https://jigsaw.w3.org/css-validator/) |[CSS Autoprefixer](https://autoprefixer.github.io/) |[Chrome DevTools](https://autoprefixer.github.io/) |
|[Python](https://www.python.org/) |[PyMongo](https://api.mongodb.com/python/current/) |[jQuery Confirm](http://craftpip.github.io/jquery-confirm/) |[VS Code](https://autoprefixer.github.io/) |[Wireframe](https://wireframe.cc/) |
|[Boostrap](https://getbootstrap.com) |[Gunicorn](https://gunicorn.org/) |[Font Awesome](https://fontawesome.com/) |[Git](https://git-scm.com/) |[Hnet](https://hnet.com/png-to-ico/) |
|[jQuery](https://jquery.com/) |[PopperJS](https://popper.js.org/) |[HTML Validator](https://validator.w3.org/) |[GitHub](https://github.com/) | |

> ## Testing

> ## Deployment

> ## Credits
### Content
### Media
### Acknowledgements

*This website was created for educational purposes, April 2020.*