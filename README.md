# GitHub Repositories Explorer

A React application that integrates with the [GitHub REST API v3](https://developer.github.com/v3/) to allow users to search for GitHub usernames (up to 5 results) and explore their public repositories.

Live Demo: [https://fahmialis.github.io/github-repositories-explorer/](https://fahmialis.github.io/github-repositories-explorer/)  
Repository: [https://github.com/fahmialis/github-repositories-explorer](https://github.com/fahmialis/github-repositories-explorer)

## ✨ Features

- 🔍 Search GitHub users by username (max 5 results)
- 📂 Display public repositories of selected user
- ⚡ Fast, responsive UI built with React + TypeScript
- 🎨 Clean UI using Ant Design and Tailwind CSS
- 🔄 State management and data fetching via TanStack Query
- ✅ Robust validation using Zod + Zodios
- 📱 Fully responsive & mobile-friendly
- 🧪 Unit testing with Vitest and Testing Library
- 🚀 Hosted on GitHub Pages

## 📸 Screenshots

<details>
  <summary>🖥️ Web View</summary>
  <p>
    <img src="assets/image.png" alt="Web View" />
  </p>
</details>

<details>
  <summary>🔍 Expanded Web View</summary>
  <p>
    <img src="assets/image-3.png" alt="Expanded Web View" />
  </p>
</details>

<details>
  <summary>📱 Mobile View</summary>
  <p>
    <img src="assets/image-1.png" alt="Mobile View" />
  </p>
</details>

<details>
  <summary>🔍 Expanded Mobile View</summary>
  <p>
    <img src="assets/image-2.png" alt="Expanded Mobile View" />
  </p>
</details>

## 🛠️ Tech Stack

- **Framework:** [React](https://reactjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/), [Ant Design](https://ant.design/)
- **Routing:** [React Router v7](https://reactrouter.com/)
- **API Client:** [Axios](https://axios-http.com/), [Zodios](https://zodios.dev/)
- **Validation:** [Zod](https://zod.dev/)
- **State Management & Fetching:** [@tanstack/react-query](https://tanstack.com/query)
- **Testing:** [Vitest](https://vitest.dev/), [Testing Library](https://testing-library.com/)
- **Mocking:** [MSW (Mock Service Worker)](https://mswjs.io/)
- **Build Tool:** [Vite](https://vitejs.dev/)

## 🚀 Getting Started

### Prerequisites

- Node.js (v20 or newer)
- pnpm (used as package manager)

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

### Build

```bash
pnpm build
```

### Testing

This project uses **Vitest** and **Testing Library** for unit and integration tests.

```bash
pnpm test          # Run tests
pnpm coverage      # Run tests with coverage
```

<details>
  <summary>Test Coverage</summary>
  <p>
    <img src="assets/coverage.png" alt="Test Coverage" />
  </p>
</details>

## 📁 Project Structure

```bash
src/
├── app/
│   ├── mocks/                    # Mock handlers for MSW
│   ├── router/                   # React Router configuration
│   ├── test/                     # Test utilities and setup
│   └── ui/                       # Shared layout components
│
├── lib/
│   ├── axios.ts                  # Axios instance setup
│   └── react-query.ts            # React Query config
│
├── pages/                        # Page-level folders (feature-based structure)
│   └── main/
│       ├── index.tsx             # Page component
│       └── api/
│           ├── schema/           # Zod schemas (request/response)
│           └── endpoints.ts      # Zodios endpoint definitions

```
