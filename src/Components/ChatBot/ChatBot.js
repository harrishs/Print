import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

function CustomChatbot(props) {
  const theme = {
    background: "white",
    fontFamily: "Arial, Helvetica, sans-serif",
    headerBgColor: "#00B2B2",
    headerFontColor: "#fff",
    headerFontSize: "25px",
    botBubbleColor: "#00B2B2",
    botFontColor: "#fff",
    userBubbleColor: "#fff",
    userFontColor: "#4c4c4c"
  };

  let options = [
    {
      value: "why",
      label: "My Why",
      trigger: () => {
        for (let i = 0; i < options.length; i++) {
          if (options[i].value === "why") {
            options.splice(i, 1);
          }
        }
        return "why";
      }
    },
    {
      value: "opencare",
      label: "Why I Want to Join Opencare",
      trigger: () => {
        for (let i = 0; i < options.length; i++) {
          if (options[i].value === "opencare") {
            options.splice(i, 1);
          }
        }
        return "opencare";
      }
    },
    {
      value: "what",
      label: "What Makes Me the Perfect Fit",
      trigger: () => {
        for (let i = 0; i < options.length; i++) {
          if (options[i].value === "what") {
            options.splice(i, 1);
          }
        }
        return "what";
      }
    }
  ];

  const steps = [
    {
      id: "Greet",
      message: "Hi, it’s Harrish 👋",
      trigger: "second"
    },
    {
      id: "second",
      message: "May I ask your name?",
      trigger: "third"
    },
    {
      id: "third",
      user: true,
      trigger: "fourth"
    },
    {
      id: "fourth",
      message:
        "Oh, {previousValue} from Opencare! I’m glad you made it to my conversational cover letter :)",
      trigger: "allOpt"
    },
    {
      id: "allOpt",
      message: "What would you like to learn about me?",
      trigger: "giveOpt"
    },
    {
      id: "giveOpt",
      options: options
    },
    {
      id: "why",
      message:
        "One of my favorite books is “Start With Why”, so I’ll start there. I pursued an education in Life Sciences, completed it 🎓, and was suddenly lost in ambition.",
      trigger: "whyCont"
    },
    {
      id: "whyCont",
      message:
        "I knew I was passionate about healthcare and changing the way we experience it, but I didn’t know where to start … until LightHouse Labs.",
      trigger: "moreWhy"
    },
    {
      id: "moreWhy",
      message:
        "I jumped right into a Full-Stack Web Development program because I loved building, and delivering beautiful web experiences.",
      trigger: "finalWhy"
    },
    {
      id: "finalWhy",
      message:
        "I found my purpose again: building a better way to experience healthcare",
      trigger: () => {
        if (options.length < 1) {
          return "finished";
        } else {
          return "allOpt";
        }
      }
    },
    {
      id: "opencare",
      message:
        "I believe in applying only for the companies I’m truly excited about, and that’s why I built this entire conversational cover letter just for you, Opencare.",
      trigger: "moreOpen"
    },
    {
      id: "moreOpen",
      message:
        "I want to change the way we interact with our healthcare providers—and that is exactly what Opencare is doing!",
      trigger: "openCont"
    },
    {
      id: "openCont",
      message:
        "This couldn’t be an even more perfect combination of what I want to do, and who I want to do it for.",
      trigger: "finalOpen"
    },
    {
      id: "finalOpen",
      message:
        "BONUS: I’ve got all my friends and family using Opencare too and loving it!",
      trigger: () => {
        if (options.length < 1) {
          return "finished";
        } else {
          return "allOpt";
        }
      }
    },
    {
      id: "what",
      message:
        "I am extremely user-focused with a product-mindset, and resonate so closely with all 8 of your company values.",
      trigger: "whatCont"
    },
    {
      id: "whatCont",
      message:
        "Not only do I have the technical skills you’re looking for (React, Node.js), I have not stopped investing in my growth. I’m currently enrolled at Ryerson’s Chang School to get better at Computer Science Theory and am also strengthening my React and Node skills through the use of Udemy courses.",
      trigger: "finalWhy"
    },
    {
      id: "finalWhat",
      message:
        "I also know how to thrive in team environments that move fast and strike goals together, especially from my time at Wendys and Statistics Canada.",
      trigger: () => {
        if (options.length < 1) {
          return "finished";
        } else {
          return "allOpt";
        }
      }
    },
    {
      id: "finished",
      message:
        "Woo, thanks for getting to know me! I can build you more experiences like this. Call me, maybe?",
      end: true
    }
  ];
  return (
    <ThemeProvider theme={theme}>
      <ChatBot
        steps={steps}
        botAvatar="https://media-exp1.licdn.com/dms/image/C5603AQG8dr4YQIjo6g/profile-displayphoto-shrink_200_200/0?e=1585180800&v=beta&t=RubJTXIfSbV7s4WaTqbhrXg50AdGhQlZpTExqpQEg3c"
        botDelay={1500}
        headerTitle="Harrish Suhumar Cover Letter to Opencare"
        width="700px"
        height="70vh"
      />
    </ThemeProvider>
  );
}
export default CustomChatbot;
