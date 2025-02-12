# 🚀 **Basu's Portfolio Website**

Welcome to the source code for my personal portfolio website, built with **React**, **TypeScript**, and deployed using **AWS CloudFront** & **S3** with a seamless **CI/CD pipeline** using **GitHub Actions**. The website is designed to give an overview of my professional journey, projects, and experience in a sleek and dynamic manner.

---

## 🛠️ **Technologies Used**

- **Frontend**:

  - **React**: For building interactive and dynamic user interfaces.
  - **TypeScript**: Adds static typing to JavaScript, improving code quality and maintainability.
  - **Tailwind CSS**: A utility-first CSS framework for rapid styling and modern UI design.
  - **Framer Motion**: For smooth, high-performance animations to enhance the user experience.

- **Development Tools**:

  - **Husky**: For enforcing pre-commit hooks and ensuring code quality with each commit.
  - **ESLint**: To maintain a consistent coding style and prevent bugs by identifying potential issues in JavaScript/TypeScript.
  - **Prettier**: For automatic code formatting to ensure clean and consistent code across the project.
  - **Jest**: For testing the application to ensure functionality and reliability of components.

- **Deployment**:
  - **AWS S3**: For hosting the static website.
  - **AWS CloudFront**: For serving the content with low latency and high performance.
  - **GitHub Actions**: To automate the CI/CD pipeline for seamless deployment with every push to the repository.

---

## 💻 **Features**

- **Homepage**: Showcase of my skills and an overview of who I am, with smooth transitions and animations.
- **About Me**: A detailed section highlighting my background, values, and career objectives.
- **Projects**: A display of key projects with detailed descriptions and links to live demos or GitHub repos.
- **Experience**: A timeline of my professional experience, including roles, responsibilities, and key achievements.
- **Contact**: A contact form integrated with professional channels.

---

## 🌐 **View the Live Portfolio**

Check out the live version of my portfolio: [basuojha.dev](https://basuojha.dev)

---

## ⚙️ **CI/CD Pipeline with GitHub Actions**

This project uses **GitHub Actions** to automate the build, test, and deployment processes. Every change to the repository triggers a pipeline that:

- Runs linting and formatting checks.
- Builds the React app.
- Deploys the app to AWS S3, with CloudFront for global delivery.

---

## 🔧 **Getting Started**

To run this project locally:

1.  Clone the repo:

    ```bash
    git clone https://github.com/your-username/portfolio.git

    ```

2.  Install dependencies:

    ```bash
    cd portfolio
    yarn install

    ```

3.  Run the development server:

    ```bash
    yarn start

    ```

4.  Open the app in your browser at http://localhost:3000

## 🧹 **Code Quality Tools**

This repository ensures high code quality using the following tools:
• Husky: Automatically runs checks before commits.
• ESLint: Identifies and fixes JavaScript/TypeScript issues.
• Prettier: Formats the code consistently.
• Jest: Used for writing and running unit tests to ensure correctness.

## 🔒 **Security**

This repository follows industry-standard security practices by using:
• AWS S3 with restricted bucket permissions.
• CloudFront with HTTPS to ensure encrypted communication.

## 📂 **Folder Structure**

Here is the structure of the project:

    /portfolio
    |-- /assets             # Images, icons, and logos
    |-- /components         # React components (structured by individual component folders)
    |   |-- /ComponentName  # Example folder for a component
    |       |-- index.tsx   # Main component file
    |-- /constants          # Constants files
    |-- /contexts           # Context files for state management
    |-- /tests              # Test files (using Jest)
    |-- /public             # Public static files like index.html
    |-- /src                # Source code for components, hooks, utils, etc.
    |-- /tailwind.config.js # Tailwind CSS configuration
    |-- /tsconfig.json      # TypeScript configuration

## 📧 **Contact Me**

Feel free to reach out if you have any questions:

• **Email**: basuojha25@gmail.com

• **LinkedIn**: linkedin.com/in/basu-ojha

• **GitHub**: github.com/basuojha
