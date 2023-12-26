import moment from "moment";
import React from "react";

export default function List({ dsPhim }) {
  //   moment
  return (
    <div style={{ height: 600 }} className=" space-y-5 overflow-y-scroll">
      {dsPhim.map((phim, index) => {
        return (
          <div className="flex space-x-5">
            <img className="w-40 h-48 object-cover" src={phim.hinhAnh} alt="" />
            <div>
              <h2 className="text-medium">{phim.tenPhim}</h2>
              <div className="grid grid-cols-3 gap-5">
                {phim.lstLichChieuTheoPhim.map((item) => {
                  return (
                    <span className="bg-red-500 px-5 py-2 rounded text-white">
                      {moment(item.ngayChieuGioChieu).format("DD/mm/yyyy  hh:mm")}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
