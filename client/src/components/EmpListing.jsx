import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function EmpListing() {
  const [empData, setEmpData] = useState(null);
  const navigate = useNavigate();

  const detailFunc = (id) => {
    navigate("/detail/" + id);
  };
  const editFunc = (id) => {
    navigate("/edit/" + id);
  };
  const removeFunc = (id) => {
    axios
      .delete(`http://localhost:8000/remove/${id}`)
      .then((response) => {
        console.log(response);
        alert("Delete successfully!");
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetch("http://localhost:8000/")
      .then((response) => {
        return response.json();
      })
      .then((resp) => {
        setEmpData(resp);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="w-[1000px] container py-3 px-5 border border-gray">
      <div className="card">
        <div className="card-title text-[24px] font-semibold mb-5">
          <h2>Employee Listing</h2>
        </div>
        <div className="card-body  text-white transition-all">
          <div>
            <Link
              to="/create"
              className="flex w-fit mb-[14px] transition-all text-white bg-blue-500 hover:bg-white border hover:border-blue-500 hover:text-blue-600 px-3 py-1 rounded-[8px] text-lg"
            >
              Add New (+)
            </Link>
          </div>
          <table className="w-full flex flex-col">
            <thead>
              <tr className="flex justify-between mb-4">
                <td className="basis-[8%] border-r-[2px] transition-all rounded-[6px] hover:text-black cursor-pointer py-1 bg-gray-800 hover:bg-white border hover:border-black">
                  ID
                </td>
                <td className="basis-[20%] border-r-[2px] transition-all rounded-[6px] hover:text-black cursor-pointer py-1 bg-gray-800 hover:bg-white border hover:border-black">
                  Name
                </td>
                <td className="basis-[28%] border-r-[2px] transition-all rounded-[6px] hover:text-black cursor-pointer py-1 bg-gray-800 hover:bg-white border hover:border-black">
                  Email
                </td>
                <td className="basis-[20%] border-r-[2px] transition-all rounded-[6px] hover:text-black cursor-pointer py-1 bg-gray-800 hover:bg-white border hover:border-black">
                  Phone
                </td>
                <td className="basis-[30%] transition-all rounded-[6px] hover:text-black cursor-pointer py-1 bg-gray-800 hover:bg-white border hover:border-black">
                  Action
                </td>
              </tr>
            </thead>
            <tbody className="w-full">
              {empData?.map((item, idx) => (
                <tr key={item.id} className="flex justify-between items-center border-b-[1px] py-1">
                  <td className="text-black basis-[8%] border-r-[1px]">{idx + 1}</td>
                  <td className="text-black basis-[20%] border-r-[1px]">{item.name}</td>
                  <td className="text-black basis-[28%] border-r-[1px]">{item.email}</td>
                  <td className="text-black basis-[20%] border-r-[1px]">{item.phone}</td>
                  <td className="text-black basis-[30%] flex justify-center gap-2">
                    <a
                      onClick={() => {
                        editFunc(item.id);
                      }}
                      className="bg-green-500 text-white px-3 py-1 block hover:bg-white transition-all cursor-pointer rounded-[5px] hover:text-green-500 border hover:border-green-500"
                    >
                      Edit
                    </a>
                    <a
                      onClick={() => {
                        removeFunc(item.id);
                      }}
                      className="bg-red-500 text-white px-3 py-1 block hover:bg-white transition-all cursor-pointer rounded-[5px] hover:text-red-500 border hover:border-red-500"
                    >
                      Remove
                    </a>
                    <a
                      onClick={() => {
                        detailFunc(item.id);
                      }}
                      className="bg-purple-500 text-white px-3 py-1 block hover:bg-white transition-all cursor-pointer rounded-[5px] hover:text-purple-500 border hover:border-purple-500"
                    >
                      Details
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default EmpListing;
