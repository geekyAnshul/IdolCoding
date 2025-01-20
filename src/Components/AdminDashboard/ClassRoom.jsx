import React from "react";
import LineGraph from "./ClassRoom/LineGraph";
import AssignmentsTable from "./ClassRoom/AssignmentsTable";
import UpcommingClasses from "./ClassRoom/UpcommingClasses";
import StatisticsPortion from "./ClassRoom/StatisticsPortion";
import CompletedCourse from "./ClassRoom/CompletedCourse";

const ClassRoom = () => {
  return (
    <div className="lg:pl-64">
      <div className="flex gap-10">
        <div className="w-[60%]">
          <LineGraph />
        </div>
        <div className="w-[40%]">
          <UpcommingClasses />
        </div>
      </div>



    <div className="flex justify-between ">
    <div className="flex w-[100%]">
      <div className="w-[50%]">
      <AssignmentsTable />
      </div>
      <div className="w-[50%]">
      <StatisticsPortion />
      </div>
      
     </div>
     <div>
      <CompletedCourse />
      </div>
    </div>
    </div>
  );
};

export default ClassRoom;
