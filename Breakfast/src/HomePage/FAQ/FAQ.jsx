import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { 
  FaChevronDown, 
  FaChevronUp,
  FaUserPlus,
  FaMapMarkerAlt,
  FaUsers,
  FaRandom,
  FaCalendarDay,
  FaClock,
  FaUserCog,
  FaLightbulb,
  FaCoffee
} from "react-icons/fa";

const FAQ = () => {
  const getIconForQuestion = (index) => {
    const icons = [
      <FaUserPlus className="question-icon" />,
      <FaMapMarkerAlt className="question-icon" />,
      <FaUsers className="question-icon" />,
      <FaRandom className="question-icon" />,
      <FaCalendarDay className="question-icon" />,
      <FaClock className="question-icon" />,
      <FaUserCog className="question-icon" />,
      <FaLightbulb className="question-icon" />,
      <FaCoffee className="question-icon" />
    ];
    return icons[index];
  };

  return (
    <div id="Faq" className="faq-container">
      <div className="faq-header">
        <h1>Frequently Asked Questions</h1>
        <p className="subtitle">Find answers to common questions about The Breakfast experience</p>
      </div>
      
      <div className="faq-content">
        <Accordion>
          {faqItems.map((item, index) => (
            <Accordion.Item 
              key={index} 
              eventKey={index.toString()} 
              className="faq-item"
            >
              <Accordion.Header className="faq-question">
                <div className="question-content">
                  {getIconForQuestion(index)}
                  <span>{item.question}</span>
                </div>
                <span className="accordion-icon">
                  <FaChevronDown className="icon-down" />
                  <FaChevronUp className="icon-up" />
                </span>
              </Accordion.Header>
              <Accordion.Body className="faq-answer">
                <div className="answer-content">
                  {item.answer}
                </div>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>

      <style jsx>{`
        .faq-container {
          position: relative;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: #f9f9f9;
          padding: 4rem 2rem;
        }
        
        .faq-header {
          text-align: center;
          margin-bottom: 3rem;
          animation: fadeIn 0.8s ease-out;
        }
        
        .faq-header h1 {
          color: #333;
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        
        .subtitle {
          color: #666;
          font-size: 1.1rem;
          max-width: 600px;
          margin: 0 auto;
        }
        
        .faq-content {
          width: 100%;
          max-width: 800px;
        }
        
        .faq-item {
          margin-bottom: 1.5rem;
          border-radius: 16px !important;
          overflow: hidden;
          border: none !important;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          background: white;
        }
        
        .faq-item:hover {
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
          transform: translateY(-3px);
        }
        
        .faq-question {
          background-color: white !important;
          color: #333;
          font-size: 1.2rem;
          font-weight: 600;
          padding: 1.5rem;
          border: none !important;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        
        .question-content {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        
        .question-icon {
          color: orange;
          font-size: 1.4rem;
          min-width: 30px;
        }
        
        .faq-question:hover {
          color: orange;
        }
        
        .faq-question:not(.collapsed) {
          color: orange;
        }
        
        .faq-answer {
          background-color: #fafafa;
          color: #666;
          line-height: 1.7;
          padding: 1.5rem !important;
          animation: fadeIn 0.4s ease-out;
          border-top: 1px solid #eee;
        }
        
        .answer-content {
          padding-left: 2.8rem;
        }
        
        .accordion-icon {
          margin-left: 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          color: #999;
          transition: all 0.3s ease;
        }
        
        .icon-down {
          display: block;
        }
        
        .icon-up {
          display: none;
        }
        
        .accordion-button:not(.collapsed) .accordion-icon {
          color: orange;
        }
        
        .accordion-button:not(.collapsed) .icon-down {
          display: none;
        }
        
        .accordion-button:not(.collapsed) .icon-up {
          display: block;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @media (max-width: 768px) {
          .faq-container {
            padding: 3rem 1.5rem;
          }
          
          .faq-header h1 {
            font-size: 2rem;
          }
          
          .faq-question {
            font-size: 1.1rem;
            padding: 1.2rem;
          }
          
          .answer-content {
            padding-left: 0;
          }
          
          .question-icon {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

const faqItems = [
  {
    question: "How do I join?",
    answer: "To become a member, download the app and fill out your profile following all the steps. We review applications daily and follow up if more info is needed. We want to make sure each profile is personal, thorough, and informative. That way, every chance is a meaningful introduction."
  },
  {
    question: "Is it available in my city?",
    answer: "We launch new cities once they reach 100 members. You can track your city's progress after creating your profile and becoming a member. Today, you can meet new interesting people in 32 cities: Almaty, Amsterdam, Barcelona, Belgrade, Berlin, Boston, Chicago, Dubai, Hamburg, Istanbul, Krakow, Kyiv, Lisbon, London, Los Angeles, Lviv, Madrid, Miami, Milan, Munich, New York, Paris, Prague, Rotterdam, San Francisco Bay Area, Tbilisi, Tel Aviv, Toronto, Valencia, Vienna, Warsaw, and Washington DC"
  },
  {
    question: "Who is on The Breakfast?",
    answer: "There's a simple description for our community: modern creatives. We are open-minded and driven individuals with various backgrounds: tech, entrepreneurship, art, design, film, food, architecture, writing, science, journalism, wellness, you name it. But being a modern creative is not just about your profession — it's about your passion, your process and your openness to possibility. To us, creativity is a way of being. And that's something we can all connect around."
  },
  {
    question: "How do chances work?",
    answer: "We developed an algorithm called BRIOCHE (Breakfast Integrated Ongoing Chances Estimation) to find chances tailored to your profile. Each chance is an opportunity to meet a new person in your city and have breakfast together. You choose whether to prioritize diversity or similarity of interests and personality, and BRIOCHE does the rest. That way, you have the opportunity to interact with all types of people and expand your world."
  },
  {
    question: "Why one chance per day?",
    answer: "The Breakfast is all about quality interaction with real people: we believe in showing up, not swiping. That's why every day you get the opportunity to take a chance on someone new. Take it or pass it on — no pressure!"
  },
  {
    question: "Who chooses the place and time for breakfast?",
    answer: "You're in control. Once we connect you with another member, you'll have 24 hours to start the chat and make plans. It doesn't have to be the next day — just share which days and places work best for you, and the other person will respond. Plus, thanks to our members, we know the best breakfast spots in the city. You can check our recommendations in the app and choose from there."
  },
  {
    question: "Who makes The Breakfast?",
    answer: "The Breakfast was conceptualized in 2018 by us, Eteri and Lisa. We wanted to create a social app that wasn't about dating or networking, but instead was about people and conversations. Today, our small and passionate team is redesigning how people meet and connect in the modern world. We're headquartered in Lisbon, Portugal, but our team is spread across the world."
  },
  {
    question: "What's the philosophy?",
    answer: "The best things in life start with a conversation. We built The Breakfast to connect people through real conversations, in real life, over breakfast. Free from the pressures of dating or networking. No pitches, no forced small talk. Just effortless, flowing conversations. Because the real magic happens when no one expects anything from each other"
  },
  {
    question: "Why breakfast specifically?",
    answer: "Because dinner sounds like a date, and lunch sounds like a work meeting. Breakfast is usually just that — breakfast. Coffee and a pastry counts, too :-)"
  }
];

export default FAQ;