import React, { useState, useEffect } from "react";
import { Carousel } from "antd";
import axios from "axios";
import { host } from "../conf";
export default function Carouselcom() {
  const [imgData, setImgData] = useState([]);
  useEffect(() => {
    const getImgInfo = async () => {
      const res = await axios.get(`${host}searchBannerInfo`);
      let data = res.data;
      setImgData(data);
    };
    getImgInfo();
  }, []);
  return (
    <div style={{ width: "100%" }}>
      <Carousel effect="fade" autoplay>
        {imgData.map((item) => (
          <div>
            <div style={{height:300}}>
              <img
                style={{
                  width: "100%",
                  height: 500,
                  backgroundImage: `url(${host + item.image_url_info})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  position:'absolute',
                  top:'-150px'
                }}
              />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
