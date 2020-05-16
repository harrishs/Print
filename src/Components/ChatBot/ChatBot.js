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
    userFontColor: "#4c4c4c",
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
      },
    },
    {
      value: "zensurance",
      label: "Why I Want to Join Zensurance?",
      trigger: () => {
        for (let i = 0; i < options.length; i++) {
          if (options[i].value === "zensurance") {
            options.splice(i, 1);
          }
        }
        return "zensurance";
      },
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
      },
    },
  ];

  const steps = [
    {
      id: "Greet",
      message: "Hi, my name is Harrish Suhumar👋",
      trigger: "second",
    },
    {
      id: "second",
      message:
        "You must be from Zensurance! I’m glad you made it to my conversational cover letter :)",
      trigger: "allOpt",
    },
    {
      id: "allOpt",
      message: () => {
        if (options.length === 3) {
          return "What would you like to learn about me?";
        } else if (options.length === 2) {
          return "Next Up:";
        } else {
          return "Finally:";
        }
      },
      trigger: "giveOpt",
    },
    {
      id: "giveOpt",
      options: options,
    },
    {
      id: "why",
      message:
        "A few years ago I was a fresh graduate with an Hons. BSc. in Life Sciences, but was looking for a career path that was hands-on.",
      trigger: "whyCont",
    },
    {
      id: "whyCont",
      message:
        "I knew I was passionate about technology and its applications towards simplifying tasks, but I didn’t know where to start … until I attended a Full Stack Web Dev course at Lighthouse Labs.",
      trigger: "moreWhy",
    },
    {
      id: "moreWhy",
      message:
        "I enjoyed every part of the journey, and learning about different web technologies. I have found my main interest lying in the front and backend development of user interactions.",
      trigger: "finalWhy",
    },
    {
      id: "finalWhy",
      message:
        "I have recently found myself being drawn towards disruptive technologies in FinTech, and am looking to expose myself to more of the world of FinTech.",
      trigger: () => {
        if (options.length < 1) {
          return "finished";
        } else {
          return "allOpt";
        }
      },
    },
    {
      id: "zensurance",
      message:
        "I believe in applying to companies that I am truly excited about, and hope to show why I would be a great addition to the Zensurance team.",
      trigger: "moreOpen",
    },
    {
      id: "moreOpen",
      message:
        "I have a strong interest in working on products that empowers small business owners through technology — and that is exactly what Zensurance is doing!",
      trigger: "openCont",
    },
    {
      id: "openCont",
      message:
        "This couldn’t be an even more perfect combination of what I want to do, and who I want to do it for.",
      trigger: "finalOpen",
    },
    {
      id: "finalOpen",
      message:
        "Finally, I would love to join Zensurance as a Junior Software Developer, and believe I can exceed expectations of this role.",
      trigger: () => {
        if (options.length < 1) {
          return "finished";
        } else {
          return "allOpt";
        }
      },
    },
    {
      id: "what",
      message:
        "I am extremely user-focused with a product-mindset, and resonate so closely with all of your company values.",
      trigger: "whatCont",
    },
    {
      id: "whatCont",
      message:
        "Not only do I have the technical skills you’re looking for (Javascript, NodeJS, MongoDB), I have not stopped investing in my growth. I’m currently enrolled at Ryerson’s Chang School to get better at Computer Science Theory and am also strengthening my Javascript framework skills through the use of Udemy courses.",
      trigger: "finalWhat",
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
      },
    },
    {
      id: "finished",
      message:
        "Woo, thanks for getting to know me! Feel free to check out my resume or github to see what I have been working or to reach out.",
      end: true,
    },
  ];
  return (
    <ThemeProvider theme={theme}>
      <ChatBot
        steps={steps}
        botAvatar="https://media-exp1.licdn.com/dms/image/C5603AQG8dr4YQIjo6g/profile-displayphoto-shrink_200_200/0?e=1594857600&v=beta&t=_ZuF8IPkBNMrn3gtGLEOX-5iKDTYMojXugdDRJ8F1iw"
        botDelay={2500}
        headerTitle="Harrish Suhumar Conversational Cover Letter"
        width="700px"
        height="70vh"
      />
    </ThemeProvider>
  );
}
export default CustomChatbot;
