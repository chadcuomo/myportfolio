const projects = {
    p1: {
      name: "League Universe",
      image: "/images/leagueuniverse.jpg",
      tools: "React",
      website: `https://leagueuniverse.netlify.app/`,
      github: `https://github.com/chadcuomo/leagueuniverse`,
      desc:
        `Using data pulled from Riot's League of Legends API, an App created to 
        display champions. Clicking on a champion will pull up a full champion card 
        with biographies and champion abilities. Also contains a search function to 
        filter through champions`,
    },
    p2: {
        name: "Ghost Store",
        image: "/images/ghoststore.jpg",
        tools: "React",
        website: `https://ghoststore.netlify.app/`,
        github: `https://github.com/chadcuomo/ghoststore`,
        desc:
          `An e-commerce store build with React. View products, with the ability to 
          display more information using modals. Add, edit, and delete products 
          with a fully functional inventory tab persisted with firebase. Add items 
          to a fully functional cart persisted with localStorage`,
      },
    p3: {
        name: "Weatherly",
        image: "/images/weatherapp.jpg",
        tools: "JavaScript",
        website: `https://chadcuomo.github.io/weatherapp/`,
        github: `https://github.com/chadcuomo/weatherapp`,
        desc:
            `Uses Weatherbit.io API to pull weather data. Also uses an API to locate 
            the user's IP address to display the current weather and seven day forecast in their 
            current location. Also has the functionality to change locations based on user input`,
    },
    p4: {
        name: "Todo App",
        image: "/images/todoapp.jpg",
        tools: "JavaScript",
        website: `https://chadcuomo.github.io/todoapp/`,
        github: `https://github.com/chadcuomo/todoapp`,
        desc:
          `An app created to keep track of your personal Todo List. Has functionality to add 
          todos, mark todos that are finished, as well as delete todos. Todo list is persisted with 
          localStorage so users can leave and come back later to their existing todo list.`,
      },
  };
  
  export default projects;