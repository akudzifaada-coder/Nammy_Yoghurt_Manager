# Nammy Yoghurt Order & Inventory Manager

Nammy Yoghurt Order & Inventory Manager is a web application I’m building to help manage the day-to-day activities of Nammy Yoghurt, a small yoghurt business that sells banana, vanilla, and strawberry flavoured yoghurt, as well as yoghurt parfait and Greek yoghurt.

The main idea behind this project is to create a simple digital system that can make it easier to keep track of customer orders, stock levels, and customer information instead of relying mainly on manual records.

## What This Project Entails

I’m building this project in stages as part of my bootcamp coursework. At the current stage, I have worked on the basic structure of the application, including the different pages, navigation, reusable components, and a signup form with real-time validation and user feedback.

As I continue working on the project, I plan to add features that will make the application more useful for the actual day-to-day running of Nammy Yoghurt. These will include managing customer orders, keeping track of yoghurt stock, and having a dashboard where important information can be viewed easily.

## Features (Current)

* Multi-page navigation using React Router
* Home, Login, Signup, About, and Contact pages
* Reusable Navbar and Footer components
* Signup form with controlled inputs and real-time validation
* Success message after a user submits the signup form
* Responsive styling using Tailwind CSS

## Features (Planned)

-**Real backend authentication** — the current login flow is a frontend-only mock 
  for testing protected routes and layouts. It does not verify credentials. A real 
  implementation would require a backend (e.g. Node/Express) with a database to 
  store user accounts, passwords hashed with a library like bcrypt, and 
  token-based sessions (e.g. JWT) to securely track logged-in users.
- Product/inventory listing (per flavour, with stock counts)
- Order creation and tracking (pending/fulfilled)
- Dashboard showing sales summaries and low-stock alerts
- Backend API and database integration for persistent data
## Tech Stack

* **React** — used to build the user interface and organise the application into reusable components
* **Vite** — used as the development server and build tool
* **Tailwind CSS** — used for styling the application
* **react-router-dom** — used to handle navigation between the different pages

## How React Router Is Used
I used `react-router-dom` to handle navigation between the pages in the application. This allows users to move between pages without the whole browser page having to reload.

In this project, React Router is used to create routes for the Home, Login, Signup, About, and Contact pages. I used `BrowserRouter`, `Routes`, `Route`, and `Link` to set this up and make navigation easier.

## How Components Behave: State, Mounting, and Re-renders
While working on this project, I learned three related ideas about how React 
components behave over time.

### 1. How a component's state changes
A component's state changes when its `useState` setter function is called. 
React then re-renders that component with the new value.

**Example from this project:** In `Login.jsx`, typing into the email field 
calls `setEmail(...)` on every keystroke, updating the `email` state with 
the latest value typed.

### 2. Mounting and unmounting5
A component "mounts" when it first appears on the screen, and "unmounts" 
when it's removed from the screen entirely (not just hidden — actually 
destroyed and recreated).

**Example from this project:** When navigating from `/login` to `/dashboard` 
using React Router, the `Login` component unmounts completely and the 
`Dashboard` component mounts fresh. This is different from just toggling 
something visually with CSS — the component itself is destroyed and a new 
one is created.

### 3. What triggers a re-render
A component re-renders when:
- Its own state changes (via a `useState` setter)
- Its props change (data passed in from a parent changes)
- A parent component re-renders (which can cause children to re-render too)
- Context it's subscribed to changes (e.g. `AuthContext`)

**Example from this project:** When `login()` is called in `AuthContext`, 
`isAuthenticated` changes from `false` to `true`. Because `AppRoutes` reads 
`isAuthenticated` from context, it re-renders — which allows the 
`/dashboard` route to stop redirecting to `/login` and show the actual 
Dashboard page.

### Passing data with useNavigate

`useNavigate` can also carry data to the page being navigated to, using its 
`state` option:

\`\`\`jsx
navigate('/dashboard', { state: { email } })
\`\`\`

The receiving page reads it back using the `useLocation` hook:

\`\`\`jsx
const location = useLocation()
const email = location.state?.email
\`\`\`


**Example from this project:** After logging in, the email typed into the 
Login form is passed to the Dashboard page and displayed in a welcome 
message.

### Is this different from what we've done so far?

Not entirely new — I had already been using `useState` (in the Signup form) 
and route-based navigation (via React Router) without necessarily naming 
these underlying behaviours. This section is really about understanding 
**why** those things worked the way they did: state updates causing 
re-renders, and page navigation causing components to mount and unmount.

## Getting Started

To run the project on your computer:

```bash
git clone https://github.com/akudzifaada-coder/Nammy_Yoghurt_Manager
cd Nammy_Yoghurt_Manager
npm install
npm run dev
```

Then open the local development link shown in your terminal, usually:

`http://localhost:5173`

## Folder Structure

```text
src/
  components/     # Reusable components such as Navbar and Footer
  pages/          # Pages such as Home, Login, Signup, About and Contact
  App.jsx         # Main application component and routing setup
  main.jsx        # Entry point of the application
  index.css       # Main CSS and Tailwind setup
```

## Author

Built by **Dzifa** as part of my Tech4Dev bootcamp coursework.
