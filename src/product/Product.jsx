import React, { useState } from "react";
import styles from "./Product.modual.css"
import image from "./image.jpg"




let Product = ({ productdetails, price, link, clickhandle, handleclick }) => {

  const [Handleclick, setHandleclick] = useState(false)

  const weclick = () => {
    if (Handleclick) {
      setHandleclick(false)
      handleclick()

    } else {
      setHandleclick(true)
      clickhandle()
    }
  }

  return (
   
      <div 
      
      style={{
        
        justifyItems:"center",
        height:"380px",
        width:"250px",
        margin:"10px",
        borderRadius:"10px",
        boxShadow:"0px 0px 10px 0px rgba(0, 0, 0, 0.75)",
        overflow:"hidden",
        textAlign:"center",
        marginTop:"20px",
        
        
       
      }}
      
      >


        <img

          style={{
            width: "250px",
            height: "170px",
            borderTopRightRadius:"10px",
            borderTopLeftRadius:"10px"
          }}

          src={image} alt={productdetails} />
        
        <h4 
        style={{marginTop:"5px"}}
        
        >
          {productdetails}</h4>
        <p>{link}</p>
        <p>{price}</p>
        <button
          style={{
            height: "45px",
            width: "110px",
            borderRadius: "10px",
            margin: "10px",
          }}

          className={styles.btn} onClick={weclick}>
          {Handleclick ? "View option" : " Add to cart"}

        </button>



      </div>
   

  )
}

export default Product;