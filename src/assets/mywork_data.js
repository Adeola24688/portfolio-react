import screenshot_student from "../assets/screenshot_student.png";
import screenshot_freelancer from "../assets/screenshot_freelancer.png";
import screenshot_portfolio_old from "../assets/screenshot_portfolio_old.png";
import screenshot_crypto from "../assets/screenshot_crypto.png";
import screenshot_youtube from "../assets/screenshot_youtube.png";
import screenshot_netflix from "../assets/screenshot_netflix.png";

const mywork_data = [
  {
    w_no: 1,
    w_name: "Student Registry System",
    w_desc: "A full-stack student management application with CRUD operations, search functionality, and a clean dashboard interface.",
    w_img: screenshot_student,
    w_url: "https://student-app-beige-eight.vercel.app/",
    w_tags: ["Angular", "ASP.NET Core", "PostgreSQL", "TypeScript"],
  },
  {
    w_no: 2,
    w_name: "Freelancer Website",
    w_desc: "A responsive freelancer portfolio and services website featuring modern animations and a polished user experience.",
    w_img: screenshot_freelancer,
    w_url: "https://freelancer-mocha-beta.vercel.app/",
    w_tags: ["React", "CSS", "JavaScript"],
  },
  {
    w_no: 3,
    w_name: "Portfolio Website",
    w_desc: "A personal portfolio showcasing projects and skills, built with clean HTML/CSS and deployed to a live server.",
    w_img: screenshot_portfolio_old,
    w_url: "https://abdullahi.infinityfree.me/",
    w_tags: ["HTML", "CSS", "JavaScript", "PHP"],
  },
  {
    w_no: 4,
    w_name: "Crypto Place",
    w_desc: "A cryptocurrency tracking dashboard displaying real-time prices, market data, and interactive charts.",
    w_img: screenshot_crypto,
    w_url: "https://abdullahcryptoplace.vercel.app/",
    w_tags: ["React", "API", "CSS", "JavaScript"],
  },
  {
    w_no: 5,
    w_name: "YouTube Clone",
    w_desc: "A YouTube-inspired video browsing app with search, categories, and responsive video player using the YouTube Data API.",
    w_img: screenshot_youtube,
    w_url: "https://abdullah-youtube-clone.vercel.app/",
    w_tags: ["React", "YouTube API", "CSS"],
  },
  {
    w_no: 6,
    w_name: "Netflix Clone",
    w_desc: "A Netflix-style streaming interface with movie categories, trailers, and a sleek dark UI powered by TMDB API.",
    w_img: screenshot_netflix,
    w_url: "https://abdullah-netflix-clone.vercel.app/",
    w_tags: ["React", "Firebase", "TMDB API", "CSS"],
  },
];

export default mywork_data;
