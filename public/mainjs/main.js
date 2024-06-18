/*const cityName=document.getElementById("cityName");
const submitBtn = document.getElementById("submitBtn");
const city_name=document.getElementById("city_name");
const temp=document.getElementById("temp");
const temp_status=document.getElementById("temp_status");
const getInfo=async(event)=>{
   event.preventDefault();
   let cityval=cityName.value;
    if(cityval===""){
        city_name.innerText="plz fill the city name";
    }   
    else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=e67f0c21db99fb971aa6173c542af3cb&units=metric`;
        const response=await fetch(url);
        console.log(response);
        const data=await response.json();
        const arrData=[data];


        temp.innerText=arrData[0].main.temp;
        temp_status.innerText=arrData[0].weather[0].main
       
 

    }
    catch{
        city_name.innerText="plz fill the city name";
    } 
}
}

submitBtn.addEventListener("click",getInfo);

*/
const cityName = document.getElementById("cityName");
const submitBtn = document.getElementById("submitBtn");
const city_name = document.getElementById("city_name");
const temp = document.getElementById("temp");
const temp_status = document.getElementById("temp_status");

const getInfo = async (event) => {
    event.preventDefault();
    let cityval = cityName.value;
    if (cityval === "") {
        city_name.innerText = "Please fill in the city name";
    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=e67f0c21db99fb971aa6173c542af3cb&units=metric`; // added units=metric for temperature in Celsius
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("City not found");
            }
            const data = await response.json();
            
            temp.innerText = `Temp: ${data.main.temp}°C`;

            city_name.innerText = `City: ${data.name}, ${data.sys.country}`;
            const tempMood=data.weather[0].main
            if(tempMood=="clear"){
                temp_status.innerHTML=
                "<i class='fas fa-sun' style='color:#eccc68;' ></i>";

            }
            else if(tempMood=="clouds"){
                temp_status.innerHTML=
                "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";

            }
            else if(tempMood=="Rain"){
                temp_status.innerHTML=
                "<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>";
            }
            else{
                temp_status.innerHTML="<i class='fas fa-sun' style='color: #eccc68;'></i>";
            }
        } catch (error) {
            city_name.innerText = "City not found, please try again";
        }
    }
}

submitBtn.addEventListener("click", getInfo);
