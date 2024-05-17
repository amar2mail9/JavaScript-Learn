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
  