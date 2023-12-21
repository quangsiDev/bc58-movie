import React, { useEffect, useState } from "react";
import { https } from "../../../service/api";
import { Tabs } from "antd";
import List from "./List";

export default function TabMovie() {
  const [dsHeThongRap, setDsHeThongRap] = useState([]);
  useEffect(() => {
    https
      .get(`/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01`)
      .then((res) => {
        setDsHeThongRap(res.data.content);
        console.log(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const onChange = (key) => {
    console.log(key);
  };
  // start
  const items = dsHeThongRap.map((heThongRap) => {
    return {
      key: heThongRap.tenHeThongRap,
      label: <img className="w-16" src={heThongRap.logo} />,
      children: (
        <Tabs
          style={{ height: 600 }}
          tabPosition="left"
          items={heThongRap.lstCumRap.map((cumRap) => {
            return {
              key: cumRap.tenCumRap,
              label: (
                <div className="text-left w-64 truncate">
                  <h2 className="font-medium">{cumRap.tenCumRap}</h2>
                  <p>{cumRap.diaChi}</p>
                </div>
              ),
              children: <List dsPhim={cumRap.danhSachPhim} />,
            };
          })}
        />
      ),
    };
  });
  // end
  return (
    <div>
      <Tabs
        style={{ height: 600 }}
        tabPosition="left"
        defaultActiveKey="1"
        items={items}
        onChange={onChange}
      />
    </div>
  );
}
