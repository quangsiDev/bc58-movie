import moment from "moment";
import React from "react";

export default function List({ dsPhim }) {
  console.log("😀 - List - dsPhim", dsPhim);
  //   moment
  return (
    <div className=" space-y-5">
      {dsPhim.map((phim, index) => {
        return (
          <div className="flex space-x-5">
            <img className="w-40 h-48 object-cover" src={phim.hinhAnh} alt="" />
            <div>
              <h2 className="text-medium">{phim.tenPhim}</h2>
              <div className="grid grid-cols-5 gap-5">
                {phim.lstLichChieuTheoPhim.map((item) => {
                  return <span>{moment(item.ngayChieuGioChieu).format("DD/mm/yyyy")}</span>;
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
