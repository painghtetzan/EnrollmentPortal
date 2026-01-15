const data = [
  {
    id: "DIT",
    name: "Diploma in Information Technology",
    modules: [
      {
        id: "C346",
        name: "Mobile Application Development",
        description:
          "In this module, students will learn the basics of creating Android applications using React Native.",
        lecturer: "Dereek Lee",
      },
      {
        id: "C218",
        name: "Web Application Development",
        description:
          "In this module, students will learn to build full-stack web applications using React.js.",
        lecturer: "Andy Teo",
      },
      {
        id: "C339",
        name: "Software Testing and Analytics",
        description:
          "In this module, students will learn software testing and debugging in a practical way.",
        lecturer: "Leonard Gan",
      },
    ],
  },

  {
    id: "DCSP",
    name: "Diploma in Cybersecurity",
    modules: [
      {
        id: "C370",
        name: "Cybersecurity Fundamentals",
        description:
          "In this module, students will learn the basics of cybersecurity, threats, vulnerabilities, and protection methods.",
        lecturer: "Kelvin Tan",
      },
      {
        id: "C372",
        name: "Network Security",
        description:
          "In this module, students will learn how to secure computer networks and defend against cyber attacks.",
        lecturer: "Melissa Wong",
      },
      {
        id: "C374",
        name: "Ethical Hacking",
        description:
          "In this module, students will learn penetration testing techniques and ethical hacking principles.",
        lecturer: "Jason Lim",
      },
    ],
  },

  {
    id: "DFT",
    name: "Diploma in Financial Technology",
    modules: [
      {
        id: "C380",
        name: "Introduction to FinTech",
        description:
          "In this module, students will learn how technology is used in modern financial services.",
        lecturer: "Rachel Ng",
      },
      {
        id: "C382",
        name: "Blockchain Technology",
        description:
          "In this module, students will learn the fundamentals of blockchain and cryptocurrency systems.",
        lecturer: "Daniel Koh",
      },
      {
        id: "C384",
        name: "Digital Payments and Security",
        description:
          "In this module, students will learn about online payment systems and financial security practices.",
        lecturer: "Stephanie Chua",
      },
    ],
  },
];


export function getCourses (){
    return data
}


export function getModules(courseid){
    const course = data.find((course)=>course.id ===courseid)
    return course ? course.modules : null
}


export function getModule(courseid,moduleid){
  const c =data.find(c=>c.id===courseid)
  console.log(c)
  const m = c.modules.find(m=>m.id===moduleid)
  return m ? m : null
}