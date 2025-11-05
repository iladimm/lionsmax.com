# LionsMax Deployment Guide

## Overview

This document provides instructions for deploying LionsMax frontend and backend services.

## Frontend Deployment

### Build Process
```bash
cd frontend
npm run build
```

This generates a production-ready build in the `build/` directory.

### Deployment Options

#### Option 1: GitHub Pages
- Push the `build` directory to GitHub
- Enable GitHub Pages in repository settings
- Frontend will be served from: `https://iladimm.github.io/lionsmax.com`

#### Option 2: Vercel
1. Connect GitHub repository to Vercel
2. Set build command: `cd frontend && npm run build`
3. Set output directory: `frontend/build`
4. Deploy automatically on push to main

#### Option 3: AWS S3 + CloudFront
```bash
# Upload to S3
aws s3 sync build/ s3://lionsmax-bucket/

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id DIST_ID --paths "/*"
```

## Backend Deployment

### Environment Variables
Create a `.env` file in the backend directory:
```
PORT=5000
MONGO_URI=mongodb+srv://user:password@cluster.mongodb.net/lionsmax
NODE_ENV=production
```

### Deployment Options

#### Option 1: Heroku
```bash
heroku create lionsmax-api
git push heroku main
```

#### Option 2: AWS EC2
1. Launch Ubuntu EC2 instance
2. Install Node.js and npm
3. Clone repository
4. Install dependencies: `npm install`
5. Start server: `npm start`
6. Configure PM2 for process management

#### Option 3: DigitalOcean App Platform
1. Connect GitHub repository
2. Set build command: `cd backend && npm install`
3. Set run command: `cd backend && npm start`
4. Configure environment variables

## Database Setup

### MongoDB Atlas
1. Create cluster at mongodb.com/cloud/atlas
2. Create database user and network access
3. Get connection string
4. Set MONGO_URI environment variable

## CI/CD Pipeline

A GitHub Actions workflow should be set up to:
1. Run tests on every pull request
2. Build frontend and backend
3. Deploy to staging on PR merge
4. Deploy to production with manual approval

## Monitoring & Logging

- Frontend: Use Sentry for error tracking
- Backend: Use CloudWatch or ELK stack for logs
- Monitor API performance with DataDog

## Rollback Procedure

If deployment issues occur:
1. Revert to previous commit
2. Trigger deployment pipeline
3. Monitor for stability

For issues or questions, contact the DevOps team.
