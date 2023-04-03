import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { ImExit } from "react-icons/im";

function EmpEdit() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [is_active, setActive] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/detail/${id}`)
      .then((res) => {
        setName(res.data[0].name);
        setEmail(res.data[0].email);
        setPhone(res.data[0].phone);
        setActive(res.data[0].is_active);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const empData = { name, email, phone, is_active };
    axios
      .put(`http://localhost:8000/edit/${id}`, empData)
      .then((response) => {
        console.log(response);
        alert("Edit successfully!");
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div className="w-[500px] rounded-[10px] container py-3 px-5 border border-gray">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handleSubmit}>
            <div className="card">
              <div className="card-title text-[24px] font-semibold mb-5 relative">
                <h2>Employe Edit</h2>
                <div
                  onClick={() => navigate("/")}
                  className="absolute -right-5 top-1 bg-red-700 hover:bg-white px-4 cursor-pointer py-1 flex items-center gap-3 text-white hover:text-red-600 transition-all border hover:border-red-600 rounded-lg text-[15px] w-min"
                >
                  Back <ImExit />
                </div>
              </div>
              <div className="card-body">
                <div className="flex flex-col justify-center items-center gap-5">
                  <div className="basis-full">
                    <div className="form-group flex items-center gap-x-3">
                      <label className="font-bold pr-1">Name: </label>
                      <input
                        type="text"
                        value={name || ""}
                        required
                        onChange={(e) => setName(e.target.value)}
                        className="form-control py-[3px] pr-11 pl-3 border-blue-300 rounded-[10px] border focus:outline-none"
                      />
                    </div>
                  </div>
                  <div className="basis-full">
                    <div className="form-group flex items-center gap-x-3">
                      <label className="font-bold pr-2">Email: </label>
                      <input
                        type="text"
                        value={email || ""}
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control py-[3px] pr-11 pl-3 border-blue-300 rounded-[10px] border focus:outline-none"
                      />
                    </div>
                  </div>
                  <div className="basis-full">
                    <div className="form-group flex items-center gap-x-3">
                      <label className="font-bold">Phone: </label>
                      <input
                        type="text"
                        value={phone || ""}
                        required
                        onChange={(e) => setPhone(e.target.value)}
                        className="form-control py-[3px] pr-11 pl-3 border-blue-300 rounded-[10px] border focus:outline-none"
                      />
                    </div>
                  </div>
                  <div className="basis-full ">
                    <div className="form-check flex items-center gap-x-3">
                      <div className="flex items-center gap-x-3 -ml-[42px] mr-5">
                        <label className="form-check-label font-bold">Is Active</label>
                        <input
                          type="checkbox"
                          value={is_active}
                          onChange={() => setActive((prev) => !prev)}
                          className="form-check-input"
                        />
                      </div>
                      <div className="form-check">
                        <button
                          type="submit"
                          className="form-check-label font-bold bg-blue-500 hover:bg-white text-white hover:text-blue-600 py-1 px-10 transition-all text-[15px] focus:outline-none"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="basis-full"></div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default EmpEdit;
