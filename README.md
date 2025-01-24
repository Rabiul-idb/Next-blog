# Next_Blog

## Description
Next_Blog is my first project built using Next.js 15. It is a simple blog site that fetches fake blog data from [JSONPlaceholder](https://jsonplaceholder.typicode.com/). The application incorporates user authentication using Kinde and is styled with the Tailwind CSS framework.

The profile page is a protected route, meaning that only authenticated and logged-in users can access it.

## Features
- Blog listing with data fetched from JSONPlaceholder.
- User authentication implemented using Kinde.
- Protected routes for logged-in users (e.g., Profile page).
- Styled using Tailwind CSS for a clean and responsive UI.

## Live Demo
Check out the live project here: [Next_Blog](https://next-blog-woad-phi.vercel.app/)

## Technologies Used
- **Next.js 15**: For building the frontend and handling server-side rendering.
- **JSONPlaceholder**: As the source of fake blog data.
- **Kinde**: For user authentication.
- **Tailwind CSS**: For responsive and utility-first styling.

## Setup and Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Rabiul-idb/Next-blog.git
   ```
2. Navigate to the project directory:
   ```bash
   cd next-blog
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file in the root of the project and add your Kinde credentials:
   ```env
   NEXT_PUBLIC_KINDE_ISSUER_URL=https://your-kinde-issuer.kinde.com
   NEXT_PUBLIC_KINDE_CLIENT_ID=your_client_id
   KINDE_CLIENT_SECRET=your_client_secret
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:3000`.

## Usage
- **Home Page**: Displays a list of blogs fetched from JSONPlaceholder.
- **Profile Page**: Accessible only to authenticated users. Requires logging in.

## Authentication
- Users can log in or register using the "Login / Register" button provided in the navigation bar.
- Upon successful login, authenticated users can view their profile information on the Profile page.

## Deployment
This project is deployed on Vercel. The following steps were used for deployment:
1. Pushed the project to a GitHub repository.
2. Linked the repository to Vercel.
3. Configured the environment variables in the Vercel dashboard.
4. Vercel handles the build and deployment automatically.

## Future Enhancements
- Add a comment section for blogs.
- Implement CRUD functionality for blogs.
- Add user roles and permissions.

---

Thank you for checking out Next_Blog! If you have any feedback or suggestions, feel free to reach out.

