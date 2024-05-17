# JavaScript-Learn

```HTML
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>CRUD APP</title>
  <link rel="stylesheet" href="CSS/index.css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
  <!-- === CDN Link=== -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
    integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />
  <!-- == custom JAVASCRIPT LINK == -->
  <script src="JS/index.js"></script>
</head>

<body>
  <div id="container">
    <h1 id="title">Marksheet Creator</h1>
    <div id="form-card" class="animate__animated animate__slideInLeft">
      <form id="marksheet-form">
        <div id="horizontal">
          <div id="form-group">
            <label>School Logo</label>
            <input type="file" name="schoolLogo" id="school-logo-input" accept="Image/*" />
          </div>
          <div id="form-group">
            <label>School Name </label>
            <input type="text" name="schoolName"  placeholder="School  Name" id="school-name-input"/>
          </div>
          <div id="form-group">
            <label>Tagline</label>
            <input type="text" name="tagLine"  placeholder="A Creative School"  id="tagline-input"/>
          </div>
        </div>
        <div id="horizontal">
          <div id="form-group">
            <label>Canidate's Image</label>
            <input type="file" name="canidateImage" id="studentPicInput" accept="Image/*" />
          </div>
          <div id="form-group">
            <label>Canidate's Name</label>
            <input type="text" name="canidateName" id="student-name-input" placeholder="Canidate`s Name" />
          </div>
          <div id="form-group">
            <label>Father's Name</label>
            <input type="text" name="canidateName" id="father-name-input" placeholder="Father`s Name" />
          </div>
        </div>
        <div id="horizontal">
          <div id="form-group">
            <label>DOB</label>
            <input type="date" name="dob" id="dob-input" />
          </div>
          <div id="form-group">
            <label>Class</label>
            <input type="number" name="class" id="class-input" placeholder="VI" />
          </div>
          <div id="form-group">
            <label>Roll </label>
            <input type="number" name="roll"  placeholder="8" id="roll-input"/>
          </div>
          <div id="form-group">
            <label>Gender</label>
           <select name="gender" id="choose-gender">
            <option value="male">Male</option>
            <option value="femal">female</option>
            <option value="other">Other</option>
           </select>
          </div>
        </div>
        <button id="add-subject" type="button">
          <i class="fa-solid fa-plus"></i>
          Add subject
        </button>
        <!-- ================================== -->
        <div id="dynamic-area"></div>
        <!-- ===================================================== -->
        <button id="generate">
          <i class="fa-solid fa-download"></i> &nbspGenerate
        </button>
      </form>
    </div>
    <!-- ============ -->
    <div id="form-card" class="animate__animated animate__slideInLeft">
      <table width="100%">
        <tr>
          <th width="150">
            <img src="" alt="School Logo" width="100%" id="schoolLogoPic" />
          </th>
          <td align="center">
            <h1 id="school-name">Polytechub</h1>
            <span id="tagline">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui,
              doloremque.</span>
          </td>
        </tr>
      </table>
      <table width="100%">
        <tr>
          <th width="150" rowspan="4">
            <img src="" alt="Student Pic" width="100%" id="student-pic" />
          </th>
        </tr>
        <tr>
          <th width="200">Student's Name:</th>
          <td id="student-name">Lorem, ipsum.</td>
          <th width="200">Father's Name:</th>
          <td id="father-name-input">Lorem, ipsum.</td>
        </tr>
        <tr>
          <th width="200">DOB</th>
          <td id="dob">00/00/0000</td>
          <th width="200">Gender</th>
          <td id="gender">Male</td>
        </tr>
        <tr>
          <th width="200">Class</th>
          <td id="className">VI</td>
          <th width="200">Roll No.</th>
          <td id="roll">12</td>
        </tr>
      </table>
      <!-- ============================== -->
      <table width="100%">
        <tr>
          <th colspan="3">Subjects</th>
          <th>Fullmarks</th>
          <th colspan="2">Obtained Marks</th>
        </tr>
       <tbody id="subject-body">

       </tbody>
        <tr>
          <th colspan="5" align="right">Total Marks</th>
          <td align="center" id="total-marks">000</td>
        </tr>
        <tr>
          <th colspan="2" align="right">Grade</th>
          <td align="center" id="grade"></td>
          <th colspan="2" align="right">Precentage</th>
          <td align="center" id="percentage">00%</td>
        </tr>
      </table>
      <!-- ==================== -->
      <p id="copyright">
        <i class="fa fa-copyright"></i> CodingOtt | This App is Only For Learning Purpose
      </p>
      <small id="warning">
        Commercial Porpose is Prohibited | All right are Reserverd
      </small>
    </div>
  </div>
</body>

</html>
```

```CSS
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

*
{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Roboto", sans-serif;
}

body
{
    background-color: #ddd;
}

#container
{
    width: 75%;
    background-color: #fff;
    min-height: 100vh;
    margin: 0 auto;
    /* display: flex; */
    border-left:10px groove blue ;
    border-right:10px groove blue ;
    padding: 32px 24px;
    overflow-x: hidden;
}

#title
{
    text-align: center;
}

#form-card
{
    width: 100%;
    
    box-shadow: 0 0 10px 0 #0f0e0e6e;
    margin: 24px 0;
    border-radius: 4px;
    border: 1px solid #ddd;
    padding: 24px;
}

#marksheet-form
{
    display: flex;
    flex-direction: column;
    gap: 24px;
}

#form-group
{
    display: flex;
    flex-direction: column;
   
    flex-direction: column;
    flex-grow: 1;
    gap: 6px;
   
}

#marksheet-form label
{
    font-size: 18px;
    font-weight: bold;
}

#marksheet-form input, #choose-gender
{
    border: 1px solid #ccc;
    padding: 14px;
}


#horizontal
{
display: flex;
gap: 24px;

}


#add-subject
{
    border: none;
    background-color: dodgerblue;
    color: #fff;
    font-size: 1rem;
    width: fit-content;
    padding: 16px 24px;
    border-radius: 4px;
}


#add-subject i
{
    font-size: 20px;
    font-weight: 900;
}


#horizontal input
{
    flex-grow: 1;
    outline: none;
    border: none;
    box-shadow:  0 0 5px 0 rgba(67, 66, 66, 0.593) ;
}


table{
   margin-top: 32px;
   box-shadow: 0 0 10px 0 #ddd;
}

th, tr ,td{
    border: 1px solid #ccc;
    padding: 8px;
    margin: 10px;

}

#generate
{
    border: none;
    background-color:darkmagenta;
    color: #fff;
    font-size: 1rem;
    width: fit-content;
    padding: 16px 24px;
    border-radius: 4px;
    margin-left: auto;

}

#dynamic-area{
  display: flex;
  flex-direction: column;
  gap: 24px;  
}


#copyright
{
    text-align: center;
    margin-top: 24px;
    margin-bottom: 16px;
    font-size: 24px;
}

#warning
{
    display: block;
    text-align: center;
}

/*  Delete button */
.delete-button{
    background-color: deeppink;
    border: none;
    color: white;
    width: 48px;
    height: 48px;
    border-radius: 50%;

}

.delete-button:hover{
    cursor: pointer;
    background-color: red;
}
```

```javascript
window.onload = function () {
    // addding subject
    var addSubjectButton = document.getElementById("add-subject");
    addSubjectButton.onclick = () => {
      var div = document.createElement("div");
      div.id = "horizontal";
  
      // subject
      var subject = document.createElement("input");
      subject.name = "subject";
      subject.placeholder = "Subject Nam";
      subject.type = "text";
  
      // fullmarks
      var fullmarks = document.createElement("input");
      fullmarks.name = "fullmarks";
      fullmarks.placeholder = "Full Marks";
      fullmarks.type = "number";
      fullmarks.value = 100;
      fullmarks.className = "total-full-marks";
  
      // obtainedMarks
      var obtainedMarks = document.createElement("input");
      obtainedMarks.name = "obtainedMarks";
      obtainedMarks.placeholder = "Obtained Marks ";
      obtainedMarks.type = "number";
      obtainedMarks.className = "obtained-marks";
  
      // Delete Button
      var deleteButton = document.createElement("button");
      deleteButton.innerHTML = "<i class= 'fa fa-trash'></i>";
      deleteButton.className = "delete-button";
      deleteButton.type = "button";
  
      // adding input inside in div tag
      div.append(subject);
      div.append(fullmarks);
      div.append(obtainedMarks);
      div.append(deleteButton);
  
      // Adding div tag to form
      var dynamicArea = document.getElementById("dynamic-area");
      dynamicArea.append(div);
  
      // Adding Subject tr
      var subjectTr = document.createElement("tr");
      subjectTr.style.textAlign = "center";
  
      var subjectTd = document.createElement("td");
      subjectTd.setAttribute("colspan", "3");
  
      var fullmarksTd = document.createElement("td");
      fullmarksTd.innerHTML = 100;
  
      var obtainedMarkstd = document.createElement("td");
      obtainedMarkstd.setAttribute("colspan", "2");
  
      subjectTr.append(subjectTd);
      subjectTr.append(fullmarksTd);
      subjectTr.append(obtainedMarkstd);
      var subjectBody = document.getElementById("subject-body");
      subjectBody.append(subjectTr);
  
      // live preview subject and marks
      subject.oninput = function () {
        subjectTd.innerHTML = this.value;
      };
  
      fullmarks.oninput = function () {
        fullmarksTd.innerHTML = this.value;
      };
  
      // total botained marks
      obtainedMarks.oninput = function () {
        obtainedMarkstd.innerHTML = this.value;
        // Calculate total marks
        var obm = document.getElementsByClassName("obtained-marks");
        var totalMarksTd = document.getElementById("total-marks");
        var totalMarks = 0;
  
        for (i = 0; i < obm.length; i++) {
          var num = Number(obm[i].value);
          totalMarks = totalMarks + num;
        }
        totalMarksTd.innerHTML = totalMarks;
  
        // Tolat full marks calculate
        var totalFullmarks = 0;
        var tfm = document.getElementsByClassName("total-full-marks");
        for (var i = 0; i < tfm.length; i++) {
          var num = Number(tfm[i].value);
          totalFullmarks = totalFullmarks + num;
        }
        console.log(totalFullmarks);
        // calculate Percentage
        var percentageTd = document.getElementById("percentage");
        var calculatePercentage = ((totalMarks / totalFullmarks) * 100).toFixed(
          2
        );
        percentageTd.innerText = calculatePercentage + "%";
  
        // grade check
        var grade = document.getElementById("grade");
  
        if (calculatePercentage > 101) {
          grade.innerHTML = "Marks Error";
        } else if (calculatePercentage > 90) {
          grade.innerHTML = "A+";
        }else if (calculatePercentage > 80) {
          grade.innerHTML = "A";
        } else if (calculatePercentage > 70) {
          grade.innerHTML = "b+";
        } else if (calculatePercentage > 60) {
          grade.innerHTML = "b";
        } else if (calculatePercentage > 50) {
          grade.innerHTML = "c";
        } else if (calculatePercentage > 40) {
          grade.innerHTML = "d";
        } 
        else {
          grade.innerHTML = "Fail";
        }
      };
  
      //deleting subject
      deleteButton.onclick = function () {
        div.remove();
        subjectTr.remove();
      };
    };
  
    //previe image
  
    // Students Image
    var studentPicInput = document.getElementById("studentPicInput");
    studentPicInput.onchange = function () {
      var file = this.files[0];
      var url = URL.createObjectURL(file);
      var studentPic = document.getElementById("student-pic");
      studentPic.src = url;
    };
  
    // School Logo
    var schoolLogoInput = document.getElementById("school-logo-input");
    schoolLogoInput.onchange = function () {
      var file = this.files[0];
      var url = URL.createObjectURL(file);
      var schoolLogoPic = document.getElementById("schoolLogoPic");
      schoolLogoPic.src = url;
    };
  
    // School Name chage on input type
    var schoolNameInput = document.getElementById("school-name-input");
    schoolNameInput.oninput = function () {
      var schoolName = document.getElementById("school-name");
      schoolName.innerHTML = this.value;
    };
  
    // School tgline
    var taglineInput = document.getElementById("tagline-input");
    taglineInput.oninput = function () {
      var tagline = document.getElementById("tagline");
      tagline.innerHTML = this.value;
    };
  
    // student-name-input
    var studentNameInput = document.getElementById("student-name-input");
    studentNameInput.oninput = function () {
      var studentName = document.getElementById("student-name");
      studentName.innerHTML = this.value;
    };
  
    // father name
    var fatherNameInput = document.getElementById("father-name-input");
    fatherNameInput.oninput = function () {
      var fatherName = document.getElementById("father-name");
      fatherName.innerHTML = this.value;
    };
  
    // Date of birth
    var dobInput = document.getElementById("dob-input");
    dobInput.onchange = function () {
      var dob = document.getElementById("dob");
      dob.innerHTML = this.value;
    };
  
    //  GEnder live preview
    var chooseGender = document.getElementById("choose-gender");
    chooseGender.onchange = function () {
      var gender = document.getElementById("gender");
      gender.innerHTML = this.value;
    };
  
    // Class live preview
    var classInput = document.getElementById("class-input");
    classInput.oninput = function () {
      var className = document.getElementById("className");
      className.innerHTML = this.value;
    };
  
    // roll live preview
    var rollInput = document.getElementById("roll-input");
    rollInput.oninput = () => {
      var roll = document.getElementById("roll");
      roll.innerHTML = rollInput.value;
    };
  };
  
```