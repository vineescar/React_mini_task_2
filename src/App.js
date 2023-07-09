import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Content from './Content';
import { useState, useEffect } from 'react';


function App() {

  const [ requrl, setrequrl] = useState({});
 
  const [item1, setItem1] = useState([]);
  const[isloading,setisloading]=useState(null)

  

  const[fetchError,setfetchError]=useState(null)

  useEffect(()=>{
  const fetchItems1 = async () => {
    try {
      throw Error(requrl)
      const response = await fetch(requrl);
      if (!response.ok) throw Error("Data not received");
     // console.log(response);
      const listItems = await response.json();
     // console.log(listItems);
      setItem1(listItems);
      setfetchError(null);
      
    } catch (err) {
      setfetchError(err.message);
    } finally {
      setisloading(false)
    }
  };

  fetchItems1()

   },[requrl])

  
  const handleClick1 = (e) => {
   // e.preventDefault();
    setisloading(true);
    setrequrl("https://jsonplaceholder.typicode.com/users");
  };
  
  const handleClick2 = (e) => {
   // e.preventDefault();
    setisloading(true);
    setrequrl("https://jsonplaceholder.typicode.com/posts");
  };
  
  const handleClick3 = (e) => {
   // e.preventDefault();
    setisloading(true);
    setrequrl("https://jsonplaceholder.typicode.com/comments");
  };
  


  return (
  <div className="App">
    <Header 
    handleClick1={handleClick1}
    handleClick2={handleClick2}
    handleClick3={handleClick3}    
    />

    <main>
    {isloading && <p>Loading items...</p>}
    {fetchError && <p>{`Error: ${fetchError}`}</p>} 
    {!isloading && !fetchError && <Content
    item1={item1}
    />}
    </main>


    <Footer />
  </div>
  
  );
}

export default App;
