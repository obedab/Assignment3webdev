import React, { useState } from "react";
import WelcomeMessage from "./components/1.Welcome";
import CurrentDate from "./components/1.CurrentDate";
import HobbyList from "./components/2.HobbyList";
import ReusableButton from "./components/buttons/3.ReusableButton";
import ProfileCard from "./components/4.ProfileCard";
import ItemList from "./components/5.ItemList";
import ToggleButton from "./components/buttons/6.ToggleButton";
import Counter from "./components/7.Counter";
import HoverDiv from "./components/8.HoverDiv";
import LogForm from "./forms/9.LogForm";
import DropdownMenu from "./components/10.DropdownMenu";
import LoginForm from "./forms/11.LoginForm";
import ControlledForm from "./forms/12.ControlledForm";
import ValidatedForm from "./forms/13.ValidatedForm";
import MultiStepForm from "./forms/14.MultiStepForm";
import CheckboxForm from "./forms/15.CheckboxForm";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from "./components/NotFound";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BlogPost from "./pages/BlogPost";
import ProductDetails from "./pages/ProductDetails";
import NavBar from "./components/18.NavBar";
import ParentWithMemo from "./components/21.ParentWithMemo";
import CounterWithMemo from "./components/22.CounterWithMemo";
import HeavyCalculation from "./components/23.HeavyCalculation";
import TodoListWithMemo from "./components/24.TodoListWithMemo";
import LiveTimeUpdates from "./components/25.LiveTimeUpdates";

import LecturerForm from "./forms/LecturerForm";
import StudentForm from "./forms/StudentForm";
import DriverForm from "./forms/DriverForm";
import BookForm from "./forms/BookForm";
import ModuleForm from "./forms/ModuleForm";
import "./App.css"

const App = () => {
  const [hobbies, setHobbies] = useState(["Singing", "Walking", "Reading","Listening to inspiring  stories"]);
  const [items, setItems] = useState(["Mango", "Apple", "Orange","Guava", "Avocado"]);

  return (
    <div>
    <router>
    <NavBar />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/blog/:postId" element={<BlogPost />} />
    <Route path="/Product/:productId" element={<ProductDetails />} />

    <Route path="/contact" element={<Contact />} />
    <Route path="*" element={<NotFound />} />
    </Routes>
    
    </router>
      
      
      
      <div className="content-container">
        <div className="main-container">
          <WelcomeMessage />
          <CurrentDate />
          <HobbyList hobbies={hobbies} />
          <ReusableButton
            text="Click Me!"
            onClick={() => alert("Button Clicked!")}
          />
          <ProfileCard
            name="ABIRAGIYE Obed"
            age={22}
            email="obedabiragiye@gmail.com"
          />
          <ItemList items={items} />
          <ToggleButton />
          <Counter />
          <HoverDiv />
          <LogForm />
          <DropdownMenu />
          <LoginForm />
          <ControlledForm />
          <ValidatedForm />
          <MultiStepForm />
          <CheckboxForm />
          <h1>React.memo Examples</h1>
          <ParentWithMemo />
          <CounterWithMemo />
          <HeavyCalculation />
          <TodoListWithMemo />
          <LiveTimeUpdates />
          <h1>Registration Forms</h1>
          <LecturerForm />
          <StudentForm />
          <DriverForm />
          <BookForm />
          <ModuleForm />
        </div>
      </div>
    </div>
  );
};

export default App;