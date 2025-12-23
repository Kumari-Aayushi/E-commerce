import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box fade">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>An e-commerce website is like an online store 
               where you can buy and sell things without going
               to a physical store. It's a website where you              
               can shop for products and make  purchases over 
               the internet. E-commerce websites have gained
                immense popularity due to their convenient              
               accessibility. and the goal reach they offer.</p>

               <p>E-commerce sites now use data analytics and 
                artificial intelligence to tailor product 
                recommendations and offers based on individual 
                preferences and browsing history. This
                 personalization aims to enhance customer
                  satisfaction and increase sales by providing
                   a more customized shopping journey.</p>
        </div>
    </div>
  )
}

export default DescriptionBox
