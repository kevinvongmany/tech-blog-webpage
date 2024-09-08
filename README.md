# Tech Blog
A CMS-style blog where developers can publish blog posts and comment on other posts. Uses NodeJS, PostgreSQL and various npm libraries such as ExpressJS, Sequelize and various others.

Deployed web page can be accessed [here](https://tech-blog-webpage.onrender.com/dashboard)

## Table of Contents
- [Resources](#resources)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribution](#contribution)
- [Questions](#questions)

## Resources

Outlined below are external and open source resources used to develop this application.

| Resource | Description |
| -------- | ----------- |
| [NodeJS](https://nodejs.org/en) | Cross-platform JavaScript runtime environment |
| [bun](https://bun.sh/) | Faster JavaScript runtime environment (npm/yarn alternative) |
| [PostgreSQL](https://www.postgresql.org/) | Open source relational database application |
| [node-postgres](https://www.npmjs.com/package/pg) | PostgreSQL client module for NodeJS |
| [dotenv](https://www.npmjs.com/package/dotenv) | Environment variable loader package using .env files for NodeJS |
| [sequelize](https://www.npmjs.com/package/sequelize) | NodeJS ORM tool used to connect to various database applications such as PostgreSQL, MySQL & MSSQL |
| [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize) | Sequelize extension that handles SQL session storing |
| [express-handlebars](https://www.npmjs.com/package/express-handlebars) | ExpressJS templating language to handle views components | 
| [express-session](https://www.npmjs.com/package/express-session) | ExpressJS middleware used to manage sessions within the browser |
| [bcrypt](https://www.npmjs.com/package/bcrypt) | NodeJS library used to hash passwords and authentication |

## Installation
Install `NodeJS` v20.x, PostgreSQL 16 and follow these steps to create a local development environment:

```shell
# Clone repository locally
git clone https://github.com/kevinvongmany/tech-blog-webpage

# Navigate to project directory:
cd tech-blog-webpage

# Install npm dependencies
npm install

# Set up environment variables by creating the `.env` file and populating each field.
DB_NAME='blog_db'
DB_USER='' # your postgres username
DB_PASSWORD='' # your postgres password

# Create PostgreSQL table
psql -U <your_postgres_user> -f db/schema.sql

# Seed data (Optional)
npm run seed
```
  

## Usage
To run a development environment after installing the project and seeding the data, follow these steps:

```shell
# Run the application
npm start
```

To use this application, access your newly started server (http://localhost:3001/) or access the live deployed application:

https://tech-blog-webpage.onrender.com/dashboard

- View existing blog posts on the homepage
- Register for an account
- Login to your account
- Create, update or delete your own blog posts
- Leave comments on other blog posts

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This project is licensed under the [MIT](https://opensource.org/licenses/MIT) license.

## Contribution

Guidelines for contributing to the project.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## Questions

If you have any questions you can find me on GitHub here: [kevinvongmany](https://github.com/kevinvongmany)
  
You can also contact me via email here: [kevin.vongmany@gmail.com](kevin.vongmany@gmail.com)
