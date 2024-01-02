import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function Header() {
  let { user } = useSelector((state) => state.userSlice);
  let handleLogout = () => {
    //xoá localStorage
    localStorage.removeItem("USER_INFOR");
    window.location.reload();
  };
  let renderMenu = () => {
    let cssBtn = "rounded px-5 py-2 border-2 border-black";
    if (user) {
      // đã đăng nhập
      return (
        <>
          <span>{user.hoTen}</span>
          <button className={cssBtn} onClick={handleLogout}>
            Đăng xuất
          </button>
        </>
      );
    } else {
      return (
        <>
          <button
            onClick={() => {
              window.location.href = "/login";
            }}
            className={cssBtn}
          >
            Đăng nhập
          </button>
          <button className={cssBtn}>Đăng ký</button>
        </>
      );
    }
  };
  return (
    <div className="h-24">
      <div className="shadow-lg shadow-black fixed w-full top-0 left-0 z-50 bg-white">
        <div className="h-20 flex justify-between items-center container ">
          <NavLink to="/">
            <span className="text-2xl font-medium text-red-400">CyberFlix</span>
          </NavLink>
          <div className="space-x-5">{renderMenu()}</div>
        </div>
      </div>
    </div>
  );
}
