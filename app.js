function register(){      
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
       
    if(name.value === "")   
    {  
        alert("Name is required..")   
    }      

    else if(email.value === "")
    {   
        alert("email is required..")      
    }   

    else if(password.value === "")   
    {   
        alert("password is required..")      
    }   
    else{
        alert(`${name.value} Register SuccessFully..`)   

        var storageData = localStorage.getItem("userData");
   
        storageData = JSON.parse(storageData);


        if(!storageData)
        {
            storageData = []
        }

        var userData = {
            name : name.value,
            email: email.value,
            password: password.value,
        }
    
        storageData.push(userData)
    
        localStorage.setItem("userData",JSON.stringify(storageData));

        setTimeout(function(){
            window.location.href = './Dashboard.html'
        }, 1000);
    }
    
}

function getData()
{
    var data = document.getElementById("getData");
    var getDataFromLocalStorage = JSON.parse(localStorage.getItem("userData"));
    console.log(getDataFromLocalStorage)
    data.innerHTML = `<ul>
        <li>Name: ${getDataFromLocalStorage[0].name}</li>
        <li>Email: ${getDataFromLocalStorage[0].email}</li>
    </ul>`
}

getData()

function logout(){
    setTimeout(function()
    {
        window.location.href = './signUp.html'
    },1000)
}


function login(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var getData = JSON.parse(localStorage.getItem("userData"))

    if(!getData)
    {
        alert("User not found..")
    }
    else if(getData[0].email !== email.value){
        alert("Invalid Email...")
    }
    else if(getData[0].password !== password.value)
    {
        alert("Invalid password...")
    }

    else{
        alert(`Login SuccessFully..`)

        setTimeout(function(){
            window.location.href = './Dashboard.html'
        }, 2000);
    }
}

