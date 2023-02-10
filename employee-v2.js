let array = [];
const employees = document.getElementById("employees");

function selected() {
    let fName = document.getElementById("fName").value;
    document.getElementById("fName").value = "";
    console.log(fName);
    let lName = document.getElementById("lName").value;
    document.getElementById("lName").value = "";
    console.log(lName)
    let age = document.getElementById("age").value;
    document.getElementById("age").value = "";
    console.log(age)
    let address = document.getElementById("address").value;
    document.getElementById("address").value = "";
    console.log(address)
    let city = document.getElementById("city").value;
    document.getElementById("city").value = "";
    console.log(city)
    let zip = document.getElementById("zip").value;
    document.getElementById("zip").value = "";
    console.log(zip)
    let state = document.getElementById("state").value;
    document.getElementById("state").value = "";
    console.log(state)
    let country = document.getElementById("country").value;
    document.getElementById("country").value = "";
    console.log(country)

    let job = document.getElementById("job").value;
    document.getElementById("job").value = "";
    console.log(job)
    let dept = document.getElementById("dept").value;
    document.getElementById("dept").value = "";
    console.log(dept)
    let salary = document.getElementById("salary").value;
    document.getElementById("salary").value = "";
    console.log(salary)
    let years = document.getElementById("years").value;
    document.getElementById("years").value = "";
    console.log(years)



    class employee {
        constructor(fName, lName, age, address, city, zip, state, country) {
            this.fName = fName;
            this.lName = lName;
            this.age = age;
            this.address = address;
            this.city = city;
            this.zip = zip;
            this.state = state;
            this.country = country;
        }

        createEmployee() {
            console.log("Employee info:", $(this.fName));
        }
    }


    class details extends employee {
        constructor(fName, lName, age, address, city, zip, state, country, job, dept, salary, years) {
            super(fName, lName, age, address, city, zip, state, country);
            this.job = job;
            this.dept = dept;
            this.salary = salary;
            this.years = years;
        }
    }


    let newEmployee = new details(fName, lName, age, address, city, zip, state, country, job, dept, salary, years)
    array.push(newEmployee)
    console.log(array)

    addEmployee(newEmployee);

//need to display in html

function addEmployee(emp) {
    let div = document.createElement("div");
    div.innerHTML = `<h1>${emp.fName}  ${emp.lName}</h1>
    <h3>Information</h3>
    <p>${emp.age} years old</p>

   <h3>Address</h3>
   <p>${emp.address}</p>
   <p>${emp.city}, ${emp.state} ${emp.zip}</p>
   <p>${emp.country}</p>
   
   <h3>Details</h3>
   <p>Job Title: ${emp.job}</p>
   <p>Department: ${emp.dept}</p>
   <p>Salary: $${emp.salary}</p>
   <p>Years of Service: ${emp.years}</p>
   `;
  
    employees.append(div);
  }
  

}