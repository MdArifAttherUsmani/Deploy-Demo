import React from 'react'
import "./Navbar.css"

const Navbar = () => {
    return (
        <>
            {/* NAVBAR --------------------------------------------------------------------------*/}
            <div className='navy'>
                <nav className='main-nav'>
                    <div className='logo'>
                        <h2>Medical Darpan</h2>
                    </div>

                    <div className='menu-link'>
                        <ul>
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">Products</a>
                            </li>
                            <li>
                                <a href="#">Distributors</a>
                            </li>
                            <li>
                                <a href="#">Manufacturers</a>
                            </li>
                            <li>
                                <a href="#">About Us</a>
                            </li>
                            <li>
                                <a href="#">Blog</a>
                            </li>
                        </ul>
                    </div>

                    {/* login account -----------------------------------------------------*/}
                    <div className='social'>
                        <ul>
                            <li><a href="#">Login</a></li>
                        </ul>
                        <div className='account-logo'>
                            <img src="./images/male.png" alt="" />
                        </div>
                    </div>


                </nav>
            </div>


            {/* side heading -----------------------------------------------------------------*/}
            <div className='heading'>
                <h3> Medical Darpan {'>'} Search {'>'}
                    <span> FabiFlu Tablet</span></h3>
            </div>

            {/* search bar ---------------------------------------------------------------------*/}

            <div className="search">
                <i class="fas fa-search"></i>
                <input type="text" placeholder='                PARACETAMOL' />
                <button type='submit'><span>Search</span></button>
            </div>

            {/* side heading 2 */}

            <div className="heading2">
                <h3>Paracetamol (128 products)</h3>
                <button type='text'>Aceclofenac </button>
                <button type='text'>500 mg</button>
                <h6>Remove All</h6>
            </div>

            {/* side bar left ------------------------------------------------------------*/}

            <div class="container">

                <div class="card-wrapper">
                    <div class="card1">
                        <div className="h3">
                            <h3>Related Category</h3>
                        </div>
                        <h4>Paracetamol Tablets</h4>
                        <h4>Paracetamol Syrup</h4>
                        <h4>Paracetamol Powder</h4>
                        <button type='text'><h4>Acelofenac</h4></button>
                        <h4>Magaladrtae Simethicone <br /> Oral Suspemsion</h4>
                        <h4>Mefenamic Paracetamol <br /> Syrup</h4>
                    </div>

                    <div class="card2">
                        <div className="h3">
                            <h3>Related Brands</h3>
                        </div>

                        <h4>Cipmol Paracetamol</h4>
                        <h4>Pandal Paracetamol</h4>
                        <h4>Combiflam</h4>
                        <h4>Calpol Paracetamol Tablets</h4>
                        <h4>Sumo Tablets</h4>
                    </div>

                    
                    <div class="card3">
                        <div className="h3">
                            <h3>Business Type </h3>
                        </div>

                        <h4>Wholesaler </h4>
                        <h4>Manufacture</h4>
                        <h4>Retailer</h4>
                        <h4>Exporter</h4>
                    </div>


                    <div class="card4">
                        <div className="h3">
                            <h3>Strenght </h3>
                        </div>

                        <button type='text'>500MG</button>
                        <h4>600MG</h4>
                    </div>

                    
                    <div class="card5">
                        <div className="h3">
                            <h3>Manufacturer </h3>
                        </div>

                        <h4>Intas Pharmaceutical Ltd</h4>
                        <h4>Alkem Laboratories Ltd</h4>
                    </div>

                    <div class="card6">
                        <div className="h3">
                            <h3>Prescription/Non prescription </h3>
                        </div>

                        <h4>Intas Pharmaceutical Ltd</h4>
                        <h4>Alkem Laboratories Ltd</h4>
                    </div>

                </div>
            </div>

            {/* right side cards ------------------------------------------------------------ */}
            <section>
               <div className="row">
                <div className="column">
                    <div className="card-1">
                        <img src="./images/medi.jpeg" alt="" />
                        <h4>Favipiravir 400mg (Fabiflu) Tablets</h4>
                        <h3>Rs 1,775 / <span>stripe</span></h3>
                        <h5>Glenmark Pharmaceutical Limited </h5>
                        <h6>PARVAT PATIYA, SURAT, GUJRAT</h6>
                        
                        <button type='text'><img src="./images/tele.png" alt="" /> <span>Contact Suplier</span></button>
                    </div>
                </div>
               </div>

               <div className="row">
                <div className="column">
                    <div className="card-2">
                        <img src="./images/medi.jpeg" alt="" />
                        <h4>Favipiravir 400mg (Fabiflu) Tablets</h4>
                        <h3>Rs 1,775 / <span>stripe</span></h3>
                        <h5>Glenmark Pharmaceutical Limited </h5>
                        <h6>PARVAT PATIYA, SURAT, GUJRAT</h6>
                        <button type='text'><img src="./images/tele.png" alt="" /> <span>Contact Suplier</span></button>
                    </div>
                </div>
               </div>

               <div className="row">
                <div className="column">
                    <div className="card-3">
                        <img src="./images/medi.jpeg" alt="" />
                        <h4>Favipiravir 400mg (Fabiflu) Tablets</h4>
                        <h3>Rs 1,775 / <span>stripe</span></h3>
                        <h5>Glenmark Pharmaceutical Limited </h5>
                        <h6>PARVAT PATIYA, SURAT, GUJRAT</h6>
                        <button type='text'><img src="./images/tele.png" alt="" /> <span>Contact Suplier</span></button>
                    </div>
                </div>
               </div>

               <div className="row">
                <div className="column">
                    <div className="card-4">
                        <img src="./images/medi.jpeg" alt="" />
                        <h4>Favipiravir 400mg (Fabiflu) Tablets</h4>
                        <h3>Rs 1,775 / <span>stripe</span></h3>
                        <h5>Glenmark Pharmaceutical Limited </h5>
                        <h6>PARVAT PATIYA, SURAT, GUJRAT</h6>

                        <button type='text'><img src="./images/tele.png" alt="" /> <span>Contact Suplier</span></button>
                    </div>
                </div>
               </div>

               <div className="row">
                <div className="column">
                    <div className="card-5"> 
                        <img src="./images/medi.jpeg" alt="" />
                        <h4>Favipiravir 400mg (Fabiflu) Tablets</h4>
                        <h3>Rs 1,775 / <span>stripe</span></h3>
                        <h5>Glenmark Pharmaceutical Limited </h5>
                        <h6>PARVAT PATIYA, SURAT, GUJRAT</h6>

                        <button type='text'><img src="./images/tele.png" alt="" /> <span>Contact Suplier</span></button>
                    </div>
                </div>
               </div>

               <div className="row">
                <div className="column">
                    <div className="card-6">
                        <img src="./images/medi.jpeg" alt="" />
                        <h4>Favipiravir 400mg (Fabiflu) Tablets</h4>
                        <h3>Rs 1,775 / <span>stripe</span></h3>
                        <h5>Glenmark Pharmaceutical Limited </h5>
                        <h6>PARVAT PATIYA, SURAT, GUJRAT</h6>

                        <button type='text'><img src="./images/tele.png" alt="" /> <span>Contact Suplier</span></button>
                    </div>
                </div>
               </div>

            </section>

        </>
    );
};

export default Navbar;
