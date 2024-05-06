import React from "react";
import HProduct from "./HProduct";
import Turnip from "../assets/images/turnip.png";
import Celery from "../assets/images/Celery.png";
import Amaranth from "../assets/images/Amaranth.png";
import Veg1 from "../assets/images/veg1_new.jpg";
import Veg2 from "../assets/images/veg2_new.jpg";
import Veg3 from "../assets/images/veg3_new.jpg";

const Healthy = () => {
    return (
        <div className="container-fluid px-4 py-5 healthy">
            <h2 className="text-center display-4 mt-4 fw-bold">
                It's Healthy Eating Made Easy
            </h2>
            <div className="container mt-5">
            <div className="row row-cols-1 row-cols-sm-5 row-cols-md-3 g-3 ">
                <HProduct
                    Image={Veg1}
                    Image2={Turnip}
                    Title="Delicious"
                    Description="Indulge in the exquisite flavors of our farm-fresh produce, guaranteed to elevate your culinary experience to new heights!"
                />

                <HProduct
                    Image={Veg2}
                    Image2={Amaranth}
                    Title="Nutritious"
                    Description="Fuel your body with our wholesome selection of fresh produce, packed with essential vitamins and minerals for optimal health and vitality."
                />

                <HProduct
                    Image={Veg3}
                    Image2={Celery}
                    Title="Sustainable"
                    Description="Join us in our commitment to the planet by choosing from our eco-friendly selection, promoting a greener future with every purchase."
                />
            </div>
        </div>
        </div>
    );
};

export default Healthy;
