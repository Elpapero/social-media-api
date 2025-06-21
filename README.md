# Social Media API 🌐

![Social Media API](https://img.shields.io/badge/Version-1.0.0-brightgreen.svg)
![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Node.js](https://img.shields.io/badge/Node.js-v14.17.0-green.svg)

Welcome to the **Social Media API** repository! This project serves as the backend API for a social media platform, built with a focus on clean architecture using an N-Layer approach. The API is developed with **TypeScript**, **Express**, and **Prisma**, utilizing **PostgreSQL** and **Docker** to create a scalable and maintainable environment.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Docker Setup](#docker-setup)
- [Contributing](#contributing)
- [License](#license)
- [Releases](#releases)

## Features

- **Clean Architecture**: The project follows a structured approach to ensure maintainability and scalability.
- **TypeScript Support**: Enjoy the benefits of static typing for better code quality.
- **RESTful API**: The API adheres to REST principles, making it easy to interact with.
- **Database Integration**: Utilizes PostgreSQL for robust data management.
- **Docker Compatibility**: Easily deploy and manage the application using Docker.

## Technologies Used

- **TypeScript**: A superset of JavaScript that compiles to plain JavaScript.
- **Express**: A fast, unopinionated, minimalist web framework for Node.js.
- **Prisma**: A modern database toolkit that simplifies database access.
- **PostgreSQL**: A powerful, open-source object-relational database system.
- **Docker**: A platform for developing, shipping, and running applications in containers.

## Getting Started

To get started with the Social Media API, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Elpapero/social-media-api.git
   cd social-media-api
   ```

2. **Install dependencies**:

   Ensure you have Node.js installed, then run:

   ```bash
   npm install
   ```

3. **Set up the database**:

   Create a PostgreSQL database and configure the connection in your `.env` file.

4. **Run the application**:

   Start the server using:

   ```bash
   npm run start
   ```

5. **Access the API**:

   The API will be available at `http://localhost:3000`.

## API Endpoints

The API provides several endpoints for managing user data, posts, and interactions. Here are some key endpoints:

### User Endpoints

- **Create User**: `POST /api/users`
- **Get User**: `GET /api/users/:id`
- **Update User**: `PUT /api/users/:id`
- **Delete User**: `DELETE /api/users/:id`

### Post Endpoints

- **Create Post**: `POST /api/posts`
- **Get Post**: `GET /api/posts/:id`
- **Update Post**: `PUT /api/posts/:id`
- **Delete Post**: `DELETE /api/posts/:id`

### Interaction Endpoints

- **Like Post**: `POST /api/posts/:id/like`
- **Comment on Post**: `POST /api/posts/:id/comments`

## Docker Setup

To run the application in a Docker container, follow these steps:

1. **Build the Docker image**:

   ```bash
   docker build -t social-media-api .
   ```

2. **Run the Docker container**:

   ```bash
   docker run -p 3000:3000 social-media-api
   ```

3. **Access the API**:

   The API will be available at `http://localhost:3000`.

For a more detailed setup, check the [Docker documentation](https://docs.docker.com/get-started/).

## Contributing

We welcome contributions! If you want to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Releases

For the latest updates and versions, visit the [Releases section](https://github.com/Elpapero/social-media-api/releases). Here, you can download the latest files and execute them as needed.

If you encounter any issues or have suggestions, please check the "Releases" section for more information. 

## Acknowledgments

- Thanks to the contributors who have helped make this project better.
- Special thanks to the communities that support open-source projects.

## Contact

For questions or feedback, please reach out via the issues section of the repository or directly through my GitHub profile.

---

This README provides a comprehensive overview of the Social Media API project, ensuring that users can easily understand and contribute to the project. Enjoy building!