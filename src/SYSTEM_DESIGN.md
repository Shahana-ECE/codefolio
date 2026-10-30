
# CodeFolio – System Design Document

## 1. Project Overview
CodeFolio is a React-based web application that helps users create their own developer portfolios easily. Users can enter their personal details, skills, and project information and view the portfolio through a live preview.

## 2. Project Objective
The main objective of CodeFolio is to provide a simple and user-friendly platform for developers to showcase their skills, projects, and professional information.

## 3. Technologies Used
- React.js
- JavaScript
- HTML
- CSS
- Vite
- Git and GitHub
- Vercel

## 4. System Architecture
CodeFolio currently follows a frontend-based architecture.

The React application contains:
- App component – displays the home page and opens the builder.
- Builder component – collects user details and project information.
- Live Preview – displays the portfolio using the entered information.
- Download Feature – generates a downloadable HTML portfolio.

## 5. Working Process
1. The user opens the CodeFolio website.
2. The user clicks the Build My Portfolio button.
3. The builder page opens.
4. The user enters personal details, skills, and project information.
5. The live preview updates based on the entered details.
6. The user selects a portfolio template.
7. The user downloads the generated portfolio as an HTML file.

## 6. Data Flow
User Input → React State → Live Preview → HTML Generation → Portfolio Download

## 7. Deployment
The project source code is maintained in GitHub. The application is deployed using Vercel and can be accessed through the live demo link.

## 8. Current Limitations
- User authentication is not implemented.
- Database integration is not implemented.
- Custom username-based portfolio URLs are not implemented.
- Contact form functionality is not implemented.
- Portfolio information is not permanently stored in a database.

## 9. Future Enhancements
- User registration and login.
- Database integration.
- More portfolio templates.
- Custom portfolio URLs.
- Contact form functionality.
- Resume upload option.

## 10. Conclusion
CodeFolio provides a simple way for developers to create and download their own portfolios. The project demonstrates the use of React, component-based development, state management, live preview, and deployment.
