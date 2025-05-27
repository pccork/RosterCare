# RosterCare Web Application

RosterCare is a web application designed to manage and log roster hours for healthcare professionals, specifically doctors and nurses, across various locations in Ireland.  It is part of the assignment for Computer Science Higher Diploma, SETU, Ireland. 

## Project Structure

- **Backend**: `RosterCare` — Hosted on Render
- **Frontend**: `RosterSvelteShell` — Built with Svelte and TypeScript, hosted on Netlify
- **Frontend-SSR**: `roster-seelte-ssr` — Built with Svelte and TypeScript and serverside rendering hosted on Netlify


---

## Security

- **Authentication**: JWT (JSON Web Token)
- **Login Credentials**: Email and password
- **Access Control**: All protected routes require a valid token in the `Authorization` header

---

## Roster Features

Users can:

- Log work hours
- Tag entries by:
  - Location
  - Hour
  - Agency Code
  - Profession (Doctor or Nurse)

All roster data is stored securely in the database via the server API.

---

##Technologies Used

| Layer      | Stack                      |
|------------|----------------------------|
| Frontend   | Svelte, TypeScript, Netlify|
| Backend    | Node.js, Express, Glitch   |
| Auth       | JWT                        |
| Database   |https://cloud.mongodb.com   |

---

## Getting Started

### Backend: RosterCare 

1. Go to [Render](https://rostercare-4.onrender.com) and remix the API server.
2. Set environment variables:
   - `cookie_name`
   - `cookie_password`
   - `db`
   - `ROOT`

### Frontend: RosterSvelteShell (https://github.com/pccork/roster-svelte-shell)

1. Go to [GitHub](https://github.com/pccork/roster-svelte-shell) 
1. Clone the repo:
   ```bash
   git clone 
2. Go to [Netify](https://rostersvelteshell.netlify.app/)
3. Go to (SSR) [Netify](https://app.netlify.com/projects/rostersveltessr)

   
   
### Further work
1. Setting an admin credential and change the API to only allow administrator to has access to the summary tables and chats with all users
2. Users could only see their own information
3. Fix iisue in Server Side Rendering version and develop full stack version based on Sevlte kit only

### Acknowledgment
This project is based on the repositories of my lecture Eamonn de Leaster
1. [GitHub]([GitHub](https://github.com/wit-hdip-comp-sci-2024/donation-hapi-04-api)
2. [GitHub]([GitHub](https://github.com/wit-hdip-comp-sci-2024/donation-svelte-07-maps)