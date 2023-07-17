import React from "react";

import Product from "../product/Product"



let Center = ({ clickhandle, handleclick }) => {



  let Linkdetails = [
    {

      productdetails: "Fancy Product",
      price: "$40.00 - $80.00",
      Image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",

    },
    {

      productdetails: "Special Item",
      Image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      link: <i
        style={{ color: "#ffd500" }}
        className="fa-solid fa-star" ><i class="fa-solid fa-star"><i class="fa-solid fa-star" ></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star" ></i></i></i>,
      price: "$20.00 $18.00",

    },
    {

      productdetails: "Sale Item",
      Image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      price: "$50.00 $25.00",

    },
    {

      productdetails: "Popular Item",
      Image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      link: <i
        style={{ color: "#ffd500" }}
        className="fa-solid fa-star" ><i class="fa-solid fa-star"><i class="fa-solid fa-star" ></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star" ></i></i></i>,
      price: "$40.00",

    },
    {

      productdetails: "Sale Item",
      Image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      price: "$50.00 $25.00",


    },
    {

      productdetails: "Fancy Product",
      Image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      price: "$$120.00 - $280.00",
    },
    {
      productdetails: "Special Item",
      Image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      link: <i
        style={{ color: "#ffd500" }}
        className="fa-solid fa-star" ><i class="fa-solid fa-star"><i class="fa-solid fa-star" ></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star" ></i></i></i>,
      price: "$$20.00 $18.00",

    },
    {

      productdetails: "Popular Itemt",
      Image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      link: <i
        style={{ color: "#ffd500" }}
        className="fa-solid fa-star" ><i class="fa-solid fa-star"><i class="fa-solid fa-star" ></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star" ></i></i></i>,
      price: "$40.00",
    },

  ]




  return (

    
    <div
   
    >
       {Linkdetails.map(items => (

        <Product
          
          key={items.id}
          image={items.Image}
          productdetails={items.productdetails}
          link={items.link}
          price={items.price}
          clickhandle={clickhandle}
          handleclick={handleclick}
          
        />
          
      ))}


    </div>


  )
}


export default Center;