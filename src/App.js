
import React, { useState } from "react";
import styles  from "./Header/Header.module.css"
import Content from './Content/Content';
import Center from './Center/Center';
import Footer from './Footer/Footer';
import list from "./list.json"
// import Product from "./product/Product"



let App = () => {


  const [isopen, setopen] = useState(false);

  const [addcount, setaddcount] = useState(0)

  const incount = () => {
      setaddcount(addcount + 1)
  }
  const decount = () => {
      setaddcount(addcount - 1)
  }


  return (
    <div className="App">
         <header>
            <div className={styles.logo}>
            <li><button>Start Boostrap</button></li>
            </div>
            <nav className={styles.navitem}>
             <ul>  
                <li><button>Home</button></li>
                <li><button>About</button></li>
                <li className={styles.main}><button onClick={() => setopen((prev) => !prev)}>Shop <i className="fa-solid fa-caret-down"></i>
                {isopen && <div className={styles.items}>
                    {list.map((item,i) => (
                         <div className={styles.main}>
                          <p>{item.products}</p>
                          <p>{item.items}</p>
                          <p>{item.arrival}</p>
                         </div>
                    ))}
                    </div>}
                    
                
                </button></li>
                <button className={styles.buttoncart}><i className="fa-solid fa-cart-shopping"></i> Cart <span className="badge bg-dark text-white ms-1 rounded-pill">{addcount}</span></button>
                
                
                </ul>
                
                
            </nav>
            
        </header>
      
      <Content />

      <Center clickhandle={incount} handleclick={decount}/>
     

      <Footer />

    </div>
      
  );
}

export default App;
