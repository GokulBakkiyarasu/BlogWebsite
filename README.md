---

# Blog Website 📝

A personal blog website that allows users to create, edit, and delete blog posts. The application dynamically fetches location-based weather data and displays it on the homepage using the OpenWeatherMap API. Built using Node.js, Express, and EJS templating for rendering dynamic HTML, this project provides a complete CRUD (Create, Read, Update, Delete) experience for blog management.

![Screenshot 2024-09-09 110224](https://github.com/user-attachments/assets/786cd95e-00c0-4e74-8141-eec02e895253)

## Overview

This blog application enables users to create blog posts with titles, descriptions, images, and detailed content. The website also integrates weather data based on the user's current location using an IP-based location service and OpenWeatherMap API. Users can browse posts, edit them, and delete entries as needed.

## File Structure

    BlogWebsite/
    │
    ├── public/                # Public folder containing static assets
    │   ├── css/               # CSS stylesheets for the application
    │   │   └── styles.css     # General styles for the blog
    │   ├── images/            # Image assets for blog posts and website
    │   └── js/                # JavaScript files for client-side logic
    │
    ├── views/                 # EJS templates for rendering HTML
    │   ├── partials/          # Reusable partial EJS templates (header, footer, etc.)
    │   │   ├── footer.ejs     # Footer template
    │   │   └── header.ejs     # Header template
    │   ├── about.ejs          # About page template
    │   ├── blogpost.ejs       # Individual blog post template
    │   ├── contact.ejs        # Contact page template
    │   ├── createpost.ejs     # Create a new post template
    │   ├── edit.ejs           # Edit post template
    │   ├── index.ejs          # Homepage template
    │   └── error404.ejs       # Template for 404 errors
    │
    ├── .gitignore             # Files and directories to ignore in version control
    ├── index.js               # Main server file for Node.js backend
    ├── package.json           # Project metadata and dependencies
    └── package-lock.json      # Exact dependency versions
    
## Getting Started

To use this project locally, follow the steps below:

### Prerequisites

- Node.js and npm installed on your system.
- Basic knowledge of MySQL and an API key for OpenWeatherMap.

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/GokulBakkiyarasu/BlogWebsite.git
    ```

2. Navigate to the project directory:

    ```bash
    cd BlogWebsite
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Set up your environment variables for OpenWeatherMap:

    - Get an API key from [OpenWeatherMap](https://openweathermap.org/api).
    - Replace the API key in the code under the `axios.get()` function for weather data retrieval.

5. Run the Node.js server:

    ```bash
    npm start
    ```

6. Open your web browser and navigate to `http://localhost:3000`.

## Usage

- Browse the homepage to view all blog posts and weather data.
- Create new posts by navigating to `/create`.
- Edit or delete any post by navigating to the individual blog post pages.
- Weather data is dynamically fetched and displayed based on your IP location.

## Contributing

Contributions are welcome! Follow these steps to contribute:

1. Fork the repository on GitHub.
2. Create a new branch.
3. Make your changes.
4. Test your changes thoroughly.
5. Submit a pull request with a clear description of the changes.

## Find Me On

[![LinkedIn Badge](https://img.shields.io/badge/LinkedIn-Profile-informational?style=flat&logo=linkedin&logoColor=white&color=0D76A8)](https://www.linkedin.com/in/gokul-bakkiyarasu-531535251)

## Acknowledgments

- OpenWeatherMap API for providing real-time weather data.
- Node.js and Express for the backend framework.
- EJS for rendering dynamic HTML pages.
- IPinfo.io for providing IP-based location data.

---

You can adjust the links and any additional information based on your needs. Let me know if you'd like further customization!
