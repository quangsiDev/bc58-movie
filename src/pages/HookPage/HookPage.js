import React, { useCallback, useEffect, useMemo, useState } from "react";
import Footer from "./Footer";
import { Button } from "antd";

export default function HookPage() {
  const [number, setnumber] = useState(1);
  const [like, setLike] = useState(1);
  const scoreArr = [2, 5, 9, 8];
  useEffect(() => {}, []);
  console.log("cha render");
  const handlePlus = () => {
    setnumber(number + 1);
  };
  const handlePlusLike = useCallback(() => {
    setLike(like + 1);
  }, [like]);
  //   useCallback => xử lý function
  //   useMemo => lưu kết quả tính toán
  let total = useMemo(() => {
    return scoreArr.reduce((sum, num) => {
      console.log("tính nè");
      return (sum = sum + num);
    });
  }, []);
  return (
    <div>
      <h1>total :{total}</h1>
      <strong>number {number}</strong>
      <Button type="primary" className="bg-blue-500" onClick={handlePlus}>
        Plus number
      </Button>
      <br />
      <strong>like {like}</strong>
      <Button type="primary" className="bg-red-500" onClick={handlePlusLike}>
        Plus like
      </Button>
      <Footer handlePlusLike={handlePlusLike} like={like} />
    </div>
  );
}
