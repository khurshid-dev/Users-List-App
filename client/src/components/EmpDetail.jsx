import axios from "axios";
import React, { useEffect, useState } from "react";
import { ImExit } from "react-icons/im";
import { useNavigate, useParams } from "react-router-dom";

function EmpDetail() {
  const [empData, setEmpData] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/detail/${id}`)
      .then((res) => {
        setEmpData(res.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="w-[400px] container py-8 border border-gray rounded-lg">
      <div className="card">
        <div className="card-title text-[26px] text-blue-600 font-semibold mb-5">
          <h2>Employe details</h2>
        </div>
        <h1 className="text-[18px] text-left ml-[70px] mb-4">
          <b className="text-purple-700">Name: </b> {empData.name}
        </h1>
        <h1 className="text-[18px] text-left ml-[70px] mb-4">
          <b className="text-purple-700">Email: </b> {empData.email}
        </h1>
        <h1 className="text-[18px] text-left ml-[70px] mb-4">
          <b className="text-purple-700">Phone: </b> {empData.phone}
        </h1>
        <div
          onClick={() => navigate("/")}
          className=" bg-red-700 mx-auto mt-8 hover:bg-white px-4 cursor-pointer py-1 flex items-center gap-3 text-white hover:text-red-600 transition-all border hover:border-red-600 rounded-lg text-[15px] w-min"
        >
          Back <ImExit />
        </div>
      </div>
    </div>
  );
}

export default EmpDetail;
