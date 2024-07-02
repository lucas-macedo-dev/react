import "./App.css";
import City from "./assets/city.jpg";
import ManageData from "../components/ManageData";
import ListRender from "../components/ListRender";
import ConditionalRender from "../components/ConditionalRender";
import ShowUserName from "../components/ShowUserName";
import CarDetails from "../components/CarDetails";
import Fragments from "../components/Fragments.jsx";

import React, {useState} from "react";

function App() {
    const name       = "Lucas";
    const [userName] = useState("Maria");

    const cars = [
        {id: 1, brand: "FERRARI", newCar: true, color: "amarelo", km: 0},
        {id: 2, brand: "Ford", newCar: false, color: "azul", km: 1230},
        {id: 3, brand: "Fiat", newCar: true, color: "preto", km: 432},
    ];


    return (
        <div>
            <h1>Avançando em React</h1>
            {/* Imagem da public */}
            <div>
                <img src="/img1.jpg" alt="Paisagem"/>
            </div>
            <hr/>
            {/* Imagem em asset */}
            <div>
                <img src={City} alt="Cidade"/>
            </div>
            <hr/>
            <ManageData></ManageData>
            <hr/>
            <ListRender></ListRender>
            <hr/>
            <ConditionalRender></ConditionalRender>
            <hr/>
            <ShowUserName name={userName}></ShowUserName>
            <hr/>
            <h2>Destructuring Pros</h2>
            <CarDetails brand="VW" km={10000} color="azul" newCar={false}></CarDetails>
            <hr/>
            <h2> Reaproveitamento / Reuse</h2>
            <CarDetails
                brand="Ford"
                color={"Vermelho"}
                km={0}
                newCar={true}
            ></CarDetails>
            {/*  LOOP EM ARRAY OBJETOS */}
            {
                cars.map((car) => (
                    <CarDetails brand={car.brand} color={car.color} km={car.km} newCar={car.newCar}/>
                ))
            }
            {/*   Fragments */}
            <Fragments></Fragments>
        </div>

    );
}

export default App;
