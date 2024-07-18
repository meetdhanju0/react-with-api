import { useEffect, useState } from "react"
import { Link } from "react-router-dom"




const Menu = () => {
  const [data, setData]=useState([])
  const [Activeclass, setActiveClass]=useState("All")
  const [filterdata, setFilterData]=useState([])

  const alldata = [
    {
      id: 1,
      img:"images/f1.png",
      category: "pizza",
      title: "Delicious Pizza",
      discription: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      price: "$20"
    },
    {
      id: 2,
      img:"images/f2.png",
      category: "Burger",
      title: "Delicious Burger",
      discription: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      price: "$15"
    },
    {
      id: 3,
      img:"images/f3.png",
      category: "pizza",
      title: "Delicious Pizza",
      discription: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      price: "$17"
    },
    {
      id: 4,
      img:"images/f4.png",
      category: "Pasta",
      title: "Delicious Pasta",
      discription: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      price: "$18"
    },
    {
      id: 5,
      img:"images/f5.png",
      category: "Fries",
      title: "Delicious Fries",
      discription: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      price: "$10"
    },
    {
      id: 6,
      img:"images/f6.png",
      category: "pizza",
      title: "Delicious Pizza",
      discription: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      price: "$15"
    },
    {
      id: 7,
      img:"images/f7.png",
      category: "Burger",
      title: "Tasty Burger",
      discription: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      price: "$12"
    },
    {
      id: 8,
      img:"images/f8.png",
      category: "Burger",
      title: "Tasty Burger",
      discription: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      price: "$14"
    },
    {
      id: 9,
      img:"images/f9.png",
      category: "Pasta",
      title: "Delicious Pasta",
      discription: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      price: "$10"
    }
  ]
  
  useEffect(()=>{
    setData(alldata)
    setFilterData(alldata)
  },[])

  const handleItems=(item)=>{
    setActiveClass(item)
    if(item==="All"){
      setFilterData(alldata)
      console.log("filterItem1",filterdata);
      return
    }
   const filterItem = data.filter((res,index,arra)=>res.category===item)
   console.log("filterItem",filterItem);
    setFilterData(filterItem)
  }
  console.log("filterItem2",filterdata);


  return (
    <>

      <section className="food_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>
              Our Menu
            </h2>
          </div>

          <ul className="filters_menu">
        <li className={`${Activeclass==="All" ? "active":null}`} onClick={()=>handleItems("All")} data-filter="*">All</li>
        <li className={`${Activeclass==="Burger" ? "active":null}`} onClick={()=>handleItems("Burger")}>Burger</li>
        <li className={`${Activeclass==="pizza" ? "active":null}`} onClick={()=>handleItems("pizza")}>Pizza</li>
        <li className={`${Activeclass==="Pasta" ? "active":null}`} onClick={()=>handleItems("Pasta")}>Pasta</li>
        <li className={`${Activeclass==="Fries" ? "active":null}`} onClick={()=>handleItems("Fries")}>Fries</li>
      </ul>

          <div className="filters-content">
            <div className="row grid">
              {filterdata && filterdata.length>0 && filterdata.map((item)=>{
                return (
                <>
                  <div className="col-sm-6 col-lg-4 all ">
                <div className="box">
                  <div>
                    <div className="img-box">
                      <img src= {item?.img} alt="" />
                    </div>
                    <div className="detail-box">
                      <h5>
                        {item?.title}
                      </h5>
                      <p>
                        {item?.discription}
                      </p>
                      <div className="options">
                        <h6>
                          {item?.price}
                        </h6>
                        <Link to="#">
                        <i className="bi bi-cart-fill"></i>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16">
                          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                        </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                
                </>
                )
              })}
            
  
            </div>
          </div>
          <div className="btn-box">
            <Link to="#">
              View More
            </Link>
          </div>
        </div>
      </section>
    </>



  )
}

export default Menu;