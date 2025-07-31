document.getElementsByTagName("h1")[0].style.fontSize = "3vw";

// let text = '';
let studentLists = [
  {
    name:"Timilehin",
    scores:[54,82,39]
  },
  {
    name:"Johnson",
    scores:[60,56,90]
  },
  {
    name:"Bolarinwa",
    scores:[53,73,63]
  }
];
// studentLists.forEach(myFunction)
// document.getElementById("demo").innerHTML = text;

// function myFunction(student, index) {
//   text += index + ":" + student.name + "<br>";
// }
// studentLists.forEach(myFunction)
// document.getElementById("demo").innerHTML = text;

// function myFunction(student, index) {
//   text += index + ":" + student.scores + "<br>";
// }
// let demo = document.getElementById("demo");
// studentLists.forEach((student) => {
//     demo.innerHTML += `Name: ${student.name} <br> Scores: ${student.scores.join(",")}<br>\n`;
// });

const deleteStudent = (name) => {
  console.log(name)
  studentLists = studentLists.filter(student => student.name !== name);
  renderTable(); // Re-render the table after deletion
}

const table = document.getElementById("studentTable");
function renderTable() {
  let tableHTML = `
    <tr>
      <th>S/N</th>
      <th>NAME</th>
      <th>ENGLISH</th>
      <th>BIOLOGY</th>
      <th>PHYSICS</th>
      <th>ACTION</th>
    </tr>
  `;

  studentLists.forEach((student, index) => {
    tableHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${student.name}</td>
        <td>${student.scores[0]}</td>
        <td>${student.scores[1]}</td>
        <td>${student.scores[2]}</td>
        <td><button onclick="deleteStudent('${student.name}')">Delete</button></td>
      </tr>
    `;
  });

  table.innerHTML = tableHTML;
}

function addStudent() {
  try {
    const input = document.getElementById("fname")
  console.log(input.value)
 
  const inputScore1 = document.getElementById("score-1").value
  const inputScore2 = document.getElementById("score-2").value
  const inputScore3= document.getElementById("score-3").value

  table.style.width = "100%";
  table.style.borderCollapse = "collapse";

  

   studentLists = [...studentLists , {
     name:input.value,
    scores:[inputScore1,inputScore2,inputScore3]
  }]
  renderTable();
  } catch (error) {
    console.log(error)
    alert("Something went wrong")
  }
  
}

// Initial render
renderTable();



let studentPortal = [
  {
    Registration_Number:"Mcb/2024/054",
    password:"yoyolam98"
  },
  {
    Registration_Number:"Csc/2025/067",
    password:" folahanmi34"
  },
  {
    Registration_Number:"phy/2023/030",
    password:"blackwoman43"
  },

];

function myFunction(){
  document.getElementsByClassName("email-portal").submit();
}

function goToPage() {
    window.location.href = "index.html";
  }