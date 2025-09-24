🎧 Podcast App

A Netflix-style app where users can explore and organize podcast episodes grouped by categories.

📖 Description

This application allows you to browse podcast episodes by category, filter them by name, and access episode details such as cover image and links.

🌐 Domain

Podcasts in Video Format

✨ Features

Display podcast episodes grouped by categories

Categories examples: Health, Bodybuilding, Mindset, Humor

Filter episodes by podcast name

REST API to retrieve episodes

🔧 How It Works
Endpoints
GET /episodes

Returns a list of podcast episodes grouped into category sessions.

Response (JSON):

[
  {
    "podcastName": "Health Talks",
    "episode": "Episode 12 - Healthy Habits",
    "coverImage": "https://example.com/image.jpg",
    "link": "https://example.com/episode/12",
    "category": "Health"
  }
]

🚀 Installation & Usage

Clone the repository:

git clone https://github.com/your-username/podcast-app.git
cd podcast-app


Install dependencies:

npm install


Start the development server:

npm run start:dev


Access the app in your browser:

http://localhost:3000

📌 Roadmap

 Add user authentication

 Add favorites list

 Add episode recommendations

📜 License

This project is licensed under the MIT License.


