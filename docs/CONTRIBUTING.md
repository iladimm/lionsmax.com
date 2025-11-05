# Contributing to LionsMax

Thank you for your interest in contributing to LionsMax! This document provides guidelines and instructions for contributing to the project.

## Getting Started

### Prerequisites
- Node.js (v16 or later)
- npm or yarn
- Git

### Setup Development Environment

1. Clone the repository:
   ```bash
   git clone https://github.com/iladimm/lionsmax.com.git
   cd lionsmax.com
   ```

2. Install dependencies for frontend:
   ```bash
   cd frontend
   npm install
   ```

3. Install dependencies for backend:
   ```bash
   cd ../backend
   npm install
   ```

## Development Workflow

### Creating a Feature Branch
```bash
git checkout -b feature/your-feature-name
```

### Committing Changes
- Write clear, descriptive commit messages
- Use present tense ("Add feature" not "Added feature")
- Keep commits atomic and logical

### Running Tests
```bash
# Frontend
cd frontend && npm test

# Backend
cd backend && npm test
```

### Submitting a Pull Request
1. Push your branch to GitHub
2. Create a Pull Request with a clear description
3. Reference any related issues
4. Ensure all tests pass

## Code Style Guidelines

See [STYLE_GUIDE.md](./STYLE_GUIDE.md) for detailed style conventions.

## Reporting Issues

- Use GitHub Issues to report bugs
- Include steps to reproduce
- Provide expected vs actual behavior

Thank you for contributing!
