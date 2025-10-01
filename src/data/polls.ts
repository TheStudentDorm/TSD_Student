export interface Poll { 
  question: string;
  options: string[];
}

export const polls: Record<string, Poll> = {
  "10-01": { question: "Would you rather have no homework ever again OR no exams ever again?", options: ["No homework", "No exams"] },
  "10-02": { question: "Do you prefer group projects or individual assignments?", options: ["Group projects", "Individual assignments"] },
  "10-03": { question: "Should attendance be mandatory in university lectures?", options: ["Yes", "No"] },
  "10-04": { question: "Would you rather get extra sleep or extra time to hang out with friends?", options: ["Extra sleep", "Extra time with friends"] },
  "10-05": { question: "Coffee vs Tea – which fuels your study sessions better?", options: ["Coffee", "Tea"] },
  "10-06": { question: "Do you prefer studying at night or studying in the morning?", options: ["Night", "Morning"] },
  "10-07": { question: "Would you rather have free WiFi everywhere or free food in the cafeteria?", options: ["Free WiFi", "Free food"] },
  "10-08": { question: "Do you usually study with music or in silence?", options: ["Music", "Silence"] },
  "10-09": { question: "Do you prefer digital notes (laptop/tablet) or handwritten notes?", options: ["Digital notes", "Handwritten notes"] },
  "10-10": { question: "Would you rather have shorter semesters with intense classes or longer semesters with lighter workload?", options: ["Shorter & intense", "Longer & lighter"] },
  "10-11": { question: "Do you prefer to present in front of class or submit written reports?", options: ["Present", "Written reports"] },
  "10-12": { question: "Would you rather have a 4-day school week or longer summer break?", options: ["4-day week", "Longer summer break"] },
  "10-13": { question: "Would you rather live on campus dorms or off-campus apartments?", options: ["Campus dorms", "Off-campus apartments"] },
  "10-14": { question: "Would you rather have unlimited travel vouchers or unlimited free food vouchers?", options: ["Travel vouchers", "Food vouchers"] },
  "10-15": { question: "Would you rather have early morning classes or late evening classes?", options: ["Morning", "Evening"] },
  "10-16": { question: "Do you prefer studying at home or at the library/café?", options: ["Home", "Library/Café"] },
  "10-17": { question: "Would you rather have a surprise quiz or a surprise presentation?", options: ["Quiz", "Presentation"] },
  "10-18": { question: "Would you rather take an online exam or a written paper exam?", options: ["Online exam", "Paper exam"] },
  "10-19": { question: "Do you prefer short-answer tests or multiple-choice tests?", options: ["Short-answer", "Multiple-choice"] },
  "10-20": { question: "Would you rather have no deadlines or no lectures?", options: ["No deadlines", "No lectures"] },
  "10-21": { question: "Would you rather have a 10-minute break every hour or a 1-hour break in the middle of the school day?", options: ["10-min breaks", "1-hour break"] },
  "10-22": { question: "Would you rather have free textbooks or free transport?", options: ["Free textbooks", "Free transport"] },
  "10-23": { question: "Do you prefer open-book exams or closed-book exams?", options: ["Open-book", "Closed-book"] },
  "10-24": { question: "Would you rather pull an all-nighter or wake up super early to finish work?", options: ["All-nighter", "Wake up early"] },
  "10-25": { question: "Would you rather have more holidays during the semester or a longer winter break?", options: ["More holidays", "Longer winter break"] },
  "10-26": { question: "Would you rather take a course that’s easy but boring or hard but interesting?", options: ["Easy but boring", "Hard but interesting"] },
  "10-27": { question: "Would you rather have longer class breaks or shorter overall school hours?", options: ["Longer breaks", "Shorter hours"] },
  "10-28": { question: "Would you rather have more practical labs or more theory lectures?", options: ["Practical labs", "Theory lectures"] },
  "10-29": { question: "Would you rather have a part-time campus job or extra free time?", options: ["Campus job", "Free time"] },
  "10-30": { question: "Do you prefer Halloween parties or quiet movie nights?", options: ["Halloween parties", "Movie nights"] },
  "10-31": { question: "Would you rather go trick-or-treating or hand out candy?", options: ["Trick-or-treating", "Hand out candy"] }
};
