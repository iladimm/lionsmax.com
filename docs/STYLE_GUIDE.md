# LionsMax Code Style Guide

## General Principles

- Write clean, readable, and maintainable code
- Follow DRY (Don't Repeat Yourself) principle
- Keep functions small and focused
- Write meaningful comments for complex logic

## JavaScript/React Style

### Naming Conventions
- Components: PascalCase (e.g., `ProductCard.jsx`)
- Functions/variables: camelCase (e.g., `handleSubmit`, `productList`)
- Constants: UPPER_SNAKE_CASE (e.g., `API_ENDPOINT`)
- CSS Classes: kebab-case (e.g., `product-card`)

### File Organization
```
frontend/src/
├── components/
│   ├── ProductCard.jsx
│   └── ProductCard.css
├── pages/
├── utils/
├── App.jsx
└── index.js
```

### React Best Practices
- Use functional components with hooks
- Keep components focused on a single responsibility
- Use prop types or TypeScript for type checking
- Avoid direct DOM manipulation

## Backend Node.js Style

### API Endpoints
- Use RESTful conventions
- Consistent URL patterns: `/api/v1/resource`
- Use appropriate HTTP methods (GET, POST, PUT, DELETE)
- Include proper error handling and validation

### Middleware
```javascript
// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
});
```

## Tailwind CSS

- Use utility classes for styling
- Custom config: `tailwind.config.js`
- Follow mobile-first design approach
- Use color palette: primary (#e85b2c), backgrounds (light/dark)

## Documentation

- Add comments for non-obvious code
- Write README for complex features
- Update CONTRIBUTING.md for process changes
- Include examples in API documentation

## Linting & Formatting

- ESLint for JavaScript
- Prettier for code formatting
- Pre-commit hooks for quality checks

For questions, refer to the project's CONTRIBUTING.md guide.
