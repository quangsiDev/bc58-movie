import React, { useEffect, useState } from "react";
import { https } from "../../service/api";
import { Space, Table, Tag } from "antd";
const columns = [
  {
    title: "Account",
    dataIndex: "taiKhoan",
    key: "taiKhoan",
  },
  {
    title: "Name",
    dataIndex: "hoTen",
    key: "hoTen",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
];

export default function AdminUserPage() {
  const [listUser, setListUser] = useState([]);
  useEffect(() => {
    https
      .get("/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01")
      .then((res) => {
        console.log(res);
        setListUser(res.data.content); // table antd
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <Table columns={columns} dataSource={listUser} />
    </div>
  );
}
