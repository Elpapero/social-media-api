# 🌐 Social Media API

[![Node.js](https://img.shields.io/badge/Node.js-18.x-green)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://www.typescriptlang.org/)
[![Docker](https://img.shields.io/badge/Docker-Containerized-blue)](https://www.docker.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15.x-blue)](https://www.postgresql.org/)
[![Prisma](https://img.shields.io/badge/ORM-Prisma-44cc11)](https://www.prisma.io/)
[![Swagger](https://img.shields.io/badge/API%20Docs-Swagger-yellowgreen)](http://localhost:3000/api-docs)

A scalable and modular RESTful API for a social media platform, built using **Node.js**, **TypeScript**, **Express**, **Prisma ORM**, and **PostgreSQL**. The project follows the **N-Layers architecture** and is fully containerized with **Docker**.

---

## 📁 Project Structure (N-Layers)

```bash
src/
├── config/         # Environment configuration (env.ts)
├── controllers/    # Handle HTTP requests and responses
├── models/         # Model of entities
├── services/       # Business logic
├── repositories/   # Data access layer using Prisma
├── routes/         # Express routers
├── generated/      # Prisma schema and migrations
├── utils/          # Helpers (e.g. HTTP responses)
├── server.ts       # App initialization
└── app.ts          # Express config and routes mounting
```

---

## 🚀 Features Implemented

- ✅ User creation endpoint (`POST /api/users`)
- ✅ List all users (`GET /api/users`)
- ✅ Prisma ORM integration
- ✅ PostgreSQL with Docker container
- ✅ Environment variables managed via `.env`
- ✅ Separation of concerns with N-Layers architecture

---

## 🐳 Dockerized Setup

The entire application runs inside Docker containers (Node.js + PostgreSQL).

### 🛠 How to Run

#### 1. Clone the repository

```bash
git clone https://github.com/Gustavo-Zamai/social-media-api.git
cd social-media-api
```

#### 2. Configure your `.env` file

Example:

```ini
PORT=3000
DATABASE_URL=postgresql://postgres:postgres@db:5432/socialdb?schema=public
```

#### 3. Run with Docker Compose

```bash
docker-compose up --build
```

#### 4. Access the API

```bash
http://localhost:3000/api/users
```

## 🔌 Example Endpoints

| Method | Endpoint     | Description       |
| ------ | ------------ | ----------------- |
| POST   | `/api/users` | Create a new user |
| GET    | `/api/users` | List all users    |

## 🧪 Tech Stack

- Node.js

- TypeScript

- Express

- Prisma ORM

- PostgreSQL

- Docker

- REST API

- N-Layers Architecture

## 📦 Future Improvements

- User authentication (JWT)
- Update and delete users
- Add posts, comments, and likes models
- Integration tests
- Swagger/OpenAPI complete docs
- CI/CD pipeline


## 👨‍💻 Author
#### Gustavo Zamai

[LinkedIn](https://www.linkedin.com/in/gustavo-sim%C3%A3o-zamai-664a5521a/) • 
[GitHub](https://github.com/Gustavo-Zamai)

