const employeeList = [{
  name: 'Jan',
  officeNum: 1,
  phoneNum: '222-222-2222'
},
{
  name: 'Juan',
  officeNum: 304,
  phoneNum: '489-789-8789'
},
{
  name: 'Margie',
  officeNum: 789,
  phoneNum: '789-789-7897'
},
{
  name: 'Sara',
  officeNum: 32,
  phoneNum: '222-789-4654'
},
{
  name: 'Tyrell',
  officeNum: 3,
  phoneNum: '566-621-0452'
},
{
  name: 'Tasha',
  officeNum: 213,
  phoneNum: '789-766-5675'
},
{
  name: 'Ty',
  officeNum: 211,
  phoneNum: '789-766-7865'
},
{
  name: 'Sarah',
  officeNum: 345,
  phoneNum: '222-789-5231'
}
];

// When user clicks View, render all of the names in `employeeList` individually in paragraph tags to the div with the class `content`.
const render = function() {
  $('.content').empty();

  for( let i = 0; i < employeeList.length; i++ ) {
    $('.content').append(`<p>**********************************************</p>`);
    $('.content').append(`<p>Name   : ${employeeList[i].name}</p>`);
    $('.content').append(`<p>Office :${employeeList[i].officeNum}</p>`);
    $('.content').append(`<p>Phone  : ${employeeList[i].phoneNum}</p>`);
  }
  $('.content').append(`<p>**********************************************</p>`);
}

$('#view').on('click', render);
//-----------------------------------------------------------------

// search for entered username and validate
const validateAndDisplay = function()
{
  const nameVal = $('#name').val();
    let nameFound = false;
    if (nameVal == null)
      alert ('Please enter a name before hitting search');
    else
    {
      console.log(nameVal);
      // If our employeeList includes the input value, xxxxx
      for (let i=0; i< employeeList.length; i++)
      {
        if(employeeList[i].name === nameVal) 
        {
          nameFound = true;
        }
      }
      if (nameFound)
      {
        $('.content').empty();
        $('.content').append("Yes");
        console.log("Match found");
        nameFound = false;
      }
      else
      {
        $('.content').empty();
        $('.content').append("No");
        console.log("Match NOT found");
      }
      // After performing our actions, clear the name input
      $('#name').val('');
    }
}


const setUpSearchAndValidate = function() {
  //Display search for validate and remove all other search's
  console.log('setup search');
  $('.content').empty();
  $('.delete1').addClass("display-none");
  $('.add1').addClass("display-none");
  $('.update1').addClass("display-none");
  $('.verify1').removeClass("display-none");
  
}

$('#verify').on('click', setUpSearchAndValidate);
$('#verifyEmployee').on('click', validateAndDisplay);


//---------------------------------------

// search for entered employee, delete from employeeList and render
const validateAndDelete = function()
{
  const nameVal = $('#dname').val();
  console.log('Delete ' + nameVal);
    let nameFound = false;
    if (nameVal == null)
      alert ('Please enter a name before hitting Delete button');
    else
    {
      console.log(nameVal);
      // If our employeeList includes the input value, xxxxx
      for (let i=0; i< employeeList.length; i++)
      {
        if(employeeList[i].name === nameVal) 
        {
          nameFound = true;
          console.log("Match found");
          employeeList.splice(i, 1);
          render();
          nameFound = false;
        }
      }
      // After performing our actions, clear the name input
      $('#dname').val('');
    }
}


const setUpSearchAndDelete = function() {
  //Display search for delete and remove all other search's
  console.log('setup delete');
  $('.content').empty();
  $('.verify1').addClass("display-none");
  $('.add1').addClass("display-none");
  $('.update1').addClass("display-none");
  $('.delete1').removeClass("display-none");
}

$('#delete').on('click', setUpSearchAndDelete);
$('#deleteEmployee').on('click', validateAndDelete);


//---------------------------------------
// search for entered employee, if not found, add to employeeList and render
const validateAndAdd = function()
{
  const nameVal = $('#aname').val();
  const onumVal = $('#onum').val();
  const pnumVal = $('#pnum').val();
  console.log('Add ' + nameVal);
    let nameFound = false;
    if (!nameVal || !onumVal || !pnumVal)
      alert ('Please enter information regarding employee to be added before hitting Add button');
    else
    {
      console.log(nameVal);
      // If our employeeList includes the input value, xxxxx
      for (let i=0; i< employeeList.length; i++)
      {
        if(employeeList[i].name === nameVal) 
        {
          nameFound = true;
          alert("Employee " + nameVal + " is already on the list. Please try again.");
        }
      }
      // Add name to employee List if not found and render
      if (!nameFound)
      {
        console.log(`${nameVal}`);
        // employeeList[length-1].name = nameVal;
        // employeeList[length-1].officeNum = onumVal;
        // employeeList[length-1].phoneNum = pnumVal;
        employeeList.push({name: nameVal, officeNum: onumVal, phoneNum: pnumVal});
        render();
      }
      // After performing our actions, clear all inputs
      $('#aname').val('');
      $('#onum').val('');
      $('#pnum').val('');
    }
}


const setUpSearchAndAdd = function() {
  //Display search for add function and remove all other search's
  console.log('setup delete');
  $('.content').empty();
  $('.verify1').addClass("display-none");
  $('.delete1').addClass("display-none");
  $('.update1').addClass("display-none");
  $('.add1').removeClass("display-none");
}

$('#add').on('click', setUpSearchAndAdd);
$('#addEmployee').on('click', validateAndAdd);

//------------------------------------------------------
// search for entered employee, and update employeeList with new office/phone info and render
const validateAndUpdate = function()
{
  const nameVal = $('#uname').val();
  const onumVal = $('#ounum').val();
  const pnumVal = $('#punum').val();
  console.log('Add ' + nameVal);
    let nameFound = false;
    if (!nameVal || !onumVal || !pnumVal)
      alert ('Please enter information regarding employee to be updated before hitting Add button');
    else
    {
      console.log(nameVal);
      // If our employeeList includes the input value, xxxxx
      for (let i=0; i< employeeList.length; i++)
      {
        if(employeeList[i].name === nameVal) 
        {
          nameFound = true;
          employeeList.splice(i, 1, {name: nameVal, officeNum: onumVal, phoneNum: pnumVal});
          render();  
        }
      }
      // Add name to employee List if not found and render
      if (!nameFound)
      {
        alert("Employee " + nameVal + " is Not on the list. Please try again."); 
      }
      // After performing our actions, clear all inputs
      $('#uname').val('');
      $('#ounum').val('');
      $('#punum').val('');
    }
}


const setUpSearchAndUpdate = function() {
  //Display search for update function and remove all other search's
  console.log('setup Update');
  $('.content').empty();
  $('.verify1').addClass("display-none");
  $('.delete1').addClass("display-none");
  $('.add1').addClass("display-none");
  $('.update1').removeClass("display-none");
}

$('#update').on('click', setUpSearchAndUpdate);
$('#updateEmployee').on('click', validateAndUpdate);

//------------------------------------------------------
