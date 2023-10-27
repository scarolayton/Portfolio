import toDo from '@/static/todo.png'
import symonSays from '@/static/symon-says.png'
import enginieer from '@/static/enginieer.png'
import klinikaPic from '@/static/klinika.png'
import freelanceJob from '@/static/freelance-job.png'
import lastProyectPic from '@/static/icfes-test.png'
const proyects = [
  {
    name: 'Icfes App',
    description: `The ICFES Trivia App is an engaging and educational web application designed to challenge and test users knowledge on various subjects 
      with questions provided by the ICFES (Instituto Colombiano para la Evaluación de la Educación).
      This dynamic quiz platform was meticulously crafted using Next.js and Tailwind CSS, creating a seamless and responsive user experience. 
      The app offers a wide range of quiz categories, each containing a set of ICFES questions.  Users can create accounts or sign in to the app using their Google accounts. 
      The app leverages the power of Supabase, a secure and scalable database, to store questions and user data.  The app maintains leaderboards that display the top users in 
      terms of points and achievements  Built with Next.js, the app takes advantage of server-side rendering for enhanced performance. Tailwind CSS provides a streamlined and 
      attractive user interface.`,
    link: 'https://icfes-app-sigma.vercel.app/',
    github: 'https://github.com/scarolayton/icfes-app',
    cover: lastProyectPic,
  },
  {
    name: 'Klinika',
    description: `We developed a virtual clinic, specifically, I built features like the Sing Up form, a calendar where the doctors can set their own schedule,
     I built this project with a junior team in a company where we were doing an internship We use: 
      Next 13
     - Material UI
     - Formik
     - Yup. and in the backend nodejs, this project is really special for me becaouse was the first time that a worked with a team, I learned a lot from my coworkers.`,
    link: 'https://mecharcovz-fe.vercel.app/',
    github: 'https://github.com/No-Country/C13-41-FT-NODE-REACT',
    cover: klinikaPic,
  },
  {
    name: 'La casa de la cubierta',
    description: `"La Casa De La Cubierta" is a striking and informative landing page created to enhance the online presence of a roofing company, offering a platform for the company to showcase its expertise, services, and projects. 
    The landing page was meticulously crafted using React and CSS to deliver a professional and user-friendly experience. it has features like 
    An interactive gallery showcases the company's roofing projects. High-quality images offer a visual representation of completed roofing work,
    highlighting the company's craftsmanship and attention to detail. This project demonstrates my proficiency in web development and design, providing the roofing company with a valuable online presence to reach a broader 
    audience and showcase its work effectively. It serves as a powerful tool for attracting potential clients and sharing the company's expertise in the roofing 
    industry.`,
    link: 'https://lacasadelacubierta.com/',
    github: 'https://github.com/scarolayton/jahir',
    cover: freelanceJob,
  },
  {
    name: 'Enginieer Cristian Caro',
    description: `The "Cristian Caro Landing Page" is a sleek and minimalist online presence designed to represent the professional portfolio and services of a talented engineer. This elegant landing page was crafted using 
    vanilla JavaScript and CSS to deliver a straightforward and visually appealing user experience. Developed with vanilla JavaScript and custom CSS, the landing page offers a clean and intuitive user 
    interface. The absence of a JavaScript framework highlights the engineer's technical expertise. This landing page project serves as a powerful testament to 
    the engineer's skills and accomplishments. It offers a clear and concise overview
     of the individual's expertise and achievements, making it an effective tool for attracting potential clients and collaborators within the engineering field.`,
    link: 'https://scarolayton.github.io/Cristian-Caro/',
    github: 'https://github.com/scarolayton/Cristian-Caro',
    cover: enginieer,
  },
  {
    name: 'Todo App',
    description: `I built this App to learn react and practice my Javascript skills.The Todo App is a user-friendly and efficient task management tool designed 
    to help users stay organized and productive. Developed 
    with React and custom CSS, this web application simplifies the process of creating, managing, and tracking tasks in a visually appealing and intuitive manner. 
    This Todo App project showcases your skills in React and CSS, providing users with a valuable tool for managing their tasks and responsibilities. It simplifies 
    the process of staying organized and productive, making it an essential addition to anyone's digital toolbox `,
    link: 'https://scarolayton.github.io/curso-intro-react/',
    github: 'https://github.com/scarolayton/curso-intro-react',
    cover: toDo,
  },
  {
    name: 'Symon Says', 
    description: `The "Symon Says Game" is a classic and entertaining memory and pattern recognition game created using vanilla JavaScript, HTML, and CSS. 
    It offers players a nostalgic and engaging experience while challenging their memory and reflexes. The game logic is responsible for generating and 
    validating patterns, tracking player input, and managing the game's progression.`,
    link: 'https://scarolayton.github.io/Symon-Says/',
    github: 'https://github.com/scarolayton/Symon-Says',
    cover: symonSays
  },
]

export default proyects