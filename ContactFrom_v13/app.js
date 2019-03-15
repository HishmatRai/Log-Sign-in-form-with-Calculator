var logout = localStorage.getItem("user1");
logout = JSON.parse(logout);
logout = logout.email.slice(0, logout.email.length-16);
document.getElementById("getNameFromUser").innerHTML = logout;
function buttonForLogOur(){
    window.location.href = "../index.html";
    localStorage.removeIteme("user1");
}
function SaveInOnePlace(name,id,english,maths,javascript,html5,css){
this.name1 = name;
this.id1 = id;
this.english1 = english;
this.maths1 = maths;
this.javascript1 = javascript;
this.html51 = html5;
this.css1 = css;  
};

var arryForGetData = [];
var arryForOnlyId = [];
// var getFirstId = document.getElementById("input1").value;
// console.log(getFirstId);

function buttonForSubmit(){
// alert("path is cor")
  var getFirstId = document.getElementById("input1").value;
   var  getSecondId = document.getElementById("inputBox2ForRollNo").value;
//    getSecondId = Number(getSecondId);
    var  getThirdId = document.getElementById("inputBox3ForEnglish").value;
    getThirdId = Number(getThirdId);
    var geFourthId = document.getElementById("inputBox4ForMaths").value;
    geFourthId = Number(geFourthId);
     var getFifthId = document.getElementById("inputBox5ForJavaScript").value;
     getFifthId = Number(getFifthId);
    var getSixthId = document.getElementById("inputBox6ForHTML5").value;
    getSixthId = Number(getSixthId);
    var getSventhId = document.getElementById("inputBox7ForCSS").value;
    getSventhId = Number(getSventhId);
    
// console.log(getSventhId); 

var deta1 = new SaveInOnePlace(getFirstId,getSecondId,getThirdId,geFourthId,getFifthId,getSixthId,getSventhId);
arryForGetData.push(deta1);
console.log(arryForGetData);

arryForOnlyId.push(getSecondId);
console.log(arryForOnlyId)
document.getElementById("reseatData").reset();
}




function buttonForSearch(){
    var searchID = document.getElementById("searchBox").value;
    console.log(searchID);
    var flag = "No";
    console.log(arryForOnlyId);

    for (var i =0; i < arryForOnlyId.length; i++){

        if (searchID === arryForOnlyId[i]) {
         console.log(arryForOnlyId[i])
     
          flag = "yes"
          var array1 = (arryForGetData[i]);
          console.log(array1);
              var calAllMarks = ((array1.english1 + array1.maths1 + array1.javascript1 + array1.html51 + array1.css1)*100/500)
 document.getElementById("saveData1").innerHTML = array1.name1;
 document.getElementById("saveData2").innerHTML = array1.id1;
 document.getElementById("saveData3").innerHTML = array1.english1;
 document.getElementById("saveData4").innerHTML = array1.maths1;
 document.getElementById("saveData5").innerHTML = array1.javascript1;
 document.getElementById("saveData6").innerHTML = array1.html51;
 document.getElementById("saveData7").innerHTML = array1.css1;
 document.getElementById("saveData8").innerHTML = calAllMarks + "%";
 break;
 
        }
    }
    if(flag === "No"){
        alert("Your Roll No is not Correct,Please Try Again..")
    }
    
}