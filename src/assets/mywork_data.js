import screenshot_salt_and_suya from "../assets/screenshot_salt_and_suya.svg";
import screenshot_freelancer from "../assets/screenshot_freelancer.png";
import screenshot_polytechnic_portal from "../assets/screenshot_polytechnic_portal.svg";
import screenshot_crypto from "../assets/screenshot_crypto.png";
import screenshot_youtube from "../assets/screenshot_youtube.png";
import screenshot_movie_app from "../assets/screenshot_movie_app.svg";

const mywork_data = [
  {
    w_no: 1,
    w_name: "Salt & Suya",
    w_desc:
      "Restaurant website showcasing menu, story, and contact information.",
    w_img: screenshot_salt_and_suya,
    w_url: "https://salt-and-suya-ten.vercel.app/",
    w_tags: ["React", "HTML", "CSS", "JavaScript", "Vercel"],
  },
  {
    w_no: 2,
    w_name: "Freelancer Website",
    w_desc:
      "A responsive freelancer portfolio and services website featuring modern animations and a polished user experience.",
    w_img: screenshot_freelancer,
    w_url: "https://freelancer-mocha-beta.vercel.app/",
    w_tags: ["HTML", "CSS", "JavaScript", "Vercel"],
  },
  {
    w_no: 3,
    w_name: "Polytechnic Portal",
    w_desc:
      "A student portal with sign-in and registration flows, built with Angular and Bootstrap and connected to an ASP.NET Core REST API.",
    w_img: screenshot_polytechnic_portal,
    w_url: "https://polytechnicport.netlify.app/",
    w_tags: [
      "Angular",
      "TypeScript",
      "Bootstrap",
      "CSS",
      "ASP.NET Core",
      "REST API",
      "Netlify",
      "Render",
    ],
  },
  {
    w_no: 4,
    w_name: "Crypto Place",
    w_desc:
      "A cryptocurrency dashboard for exploring live prices and market data from the CoinGecko API.",
    w_img: screenshot_crypto,
    w_url: "https://abdullahcryptoplace.vercel.app/",
    w_tags: ["React", "CoinGecko API", "CSS", "JavaScript", "Vercel"],
  },
  {
    w_no: 5,
    w_name: "YouTube Clone",
    w_desc:
      "A YouTube-inspired video browsing app with search, categories, and responsive video player using the YouTube Data API.",
    w_img: screenshot_youtube,
    w_url: "https://abdullah-youtube-clone.vercel.app/",
    w_tags: ["React", "YouTube Data API", "CSS", "Vercel"],
  },
  {
    w_no: 6,
    w_name: "Movie App",
    w_desc:
      "A movie discovery app with categories and trailers, using TMDB for movie data and Firebase services.",
    w_img: screenshot_movie_app,
    w_url: "https://movie-theta-jade.vercel.app/login",
    w_tags: ["React", "TMDB API", "Firebase", "CSS", "Vercel"],
  },
];

export default mywork_data;
