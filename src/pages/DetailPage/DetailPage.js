import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { https } from "../../service/api";
import { Rate } from "antd";
import Spinner from "../../component/Spinner/Spinner";

export default function DetailPage() {
  const [detail, setDetail] = useState();
  const [isLoading, setIsLoading] = useState(false);

  let { maPhim } = useParams();
  useEffect(() => {
    setIsLoading(true);
    https
      .get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`)
      .then((res) => {
        setIsLoading(false);
        console.log(res);
        setDetail(res.data.content);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  }, []);
  return (
    <div className="container flex items-center space-x-5">
      {/* {isLoading && <Spinner />} */}
      <img className="w-64 h-96 rounded shadow-lg shadow-red-600" src={detail?.hinhAnh} alt="" />
      <div className="space-y-5">
        <h1 className="text-3xl font-medium">{detail?.tenPhim}</h1>
        <p>{detail?.moTa}</p>
        {/* rating antd */}
        <Rate allowHalf value={detail?.danhGia / 2} style={{ color: "green" }} />
      </div>
    </div>
  );
}
