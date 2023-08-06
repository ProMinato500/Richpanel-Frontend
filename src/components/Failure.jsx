import React from "react";

function Failure() {
  return (
    <div className="bg-white rounded-lg flex flex-col p-6 gap-4">
      <div className="flex gap-2">
        <h1 className="text-lg font-medium">Current Plan Details</h1>
        <div className="bg-[#FCF2F2] text-[#E57976] px-[5px] py-[2px] h-fit rounded text-[10px] font-medium flex items-center justify-center">
          <p>Cancelled</p>
        </div>
      </div>
      <div>
        <div>
          <div>
            <p>Basic</p>
          </div>
          <div className="text-gray-400 text-sm">
            <p>Phone+Tablet</p>
          </div>
        </div>
        <div className="text-3xl font-bold my-2">
          <p>$ 200/yr</p>
        </div>
        <div>
          <a href="monthly">
            <button className="border-solid border-2 border-[#376BB2] text-[#376BB2] px-4 py-2 rounded mt-2 font-medium">
              Choose Plan
            </button>
          </a>
        </div>
      </div>
      <div className="bg-[#F5F6F7] p-3 rounded-lg">
        <p>
          Your subscription was cancelled and you will loose access to services
          on <span className="font-medium">Jul 11th, 2023</span>.
        </p>
      </div>
    </div>
  );
}

export default Failure;
