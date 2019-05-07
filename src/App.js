 import React from "react";
 import Info from "./components/info";
 import Weather from "./components/weather";
 import Form from "./components/form";

 const API_KEY = "d5048c35f5324f7cb92220217190902";

 class App extends React.Component {
   state = {
     temp: undefined,
     city: undefined,
     country: undefined,
     localtime: undefined,
     error: undefined
   }

gettingWeather = async (e) => {
  e.preventDefault();
  const city = e.target.elements.city.value;
  const api_url = await
  fetch(`http://api.apixu.com/v1/current.json?key=${API_KEY}&q=${city}`);
  const data = await api_url.json();

   if(city){

    this.setState({
    temp: data.current.temp_c,
    city: data.location.name,
    country: data.location.country,
    localtime: data.location.localtime,
    error: undefined
  });
} else {
  this.setState({
  temp: undefined,
  city: undefined,
  country: undefined,
  localtime: undefined,
  error: "Please, input cityname"

});
}
}

   render() {
     return (
       <div className = "wrapper">
       <div className = "main">
        <div className= "container">
         <div className="row">
           <div className="col-xs-5 info">
           <Info />
           </div>
              <div className="cols-sm-7 form">
             <Form weatherMethod={this.gettingWeather}/>
             <Weather
             temp={this.state.temp}
             city={this.state.city}
             country={this.state.country}
             localtime={this.state.localtime}
             error={this.state.error}
             />
             </div>
            </div>
         </div>
       </div>
     </div>
     );
   }
 }

 export default App;
