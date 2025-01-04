# Amazon Seller Dashboard

A streamlined dashboard for Amazon sellers using the SP-API.

## Local Development Setup

1. Prerequisites:
   - Node.js v18 or newer
   - npm (comes with Node.js)
2. Installation:
   ```bash
   # Clone the repository
   git clone <your-repo-url>
   cd amazon-seller-dashboard
   # Install dependencies
   npm install
   # Start the development server
   npm run dev
   ```
3. The application will be available at `http://localhost:5000`

## Environment Variables

Before starting the application, you'll need to set up your Amazon SP-API credentials. Create a `.env` file in the root directory with the following variables:

```env
SP_API_CLIENT_ID=your_client_id
SP_API_CLIENT_SECRET=your_client_secret
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
SP_API_REFRESH_TOKEN=your_refresh_token
```

## Features

- Real-time inventory management
- Order tracking and management
- Sales analytics dashboard
- Dark/light mode support
- Responsive design for all devices

## Tech Stack

- Next.js frontend
- Express backend
- Amazon SP-API integration
- Tailwind CSS for styling
- shadcn/ui components
