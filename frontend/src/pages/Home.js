import React, { useEffect, useState } from "react";
import EduService from "../repositories/edu.repository";
import EduComponent from "../components/Educations";

export default function Home() {
  const [educations, setEducations] = useState([]);
  const fetchData = async () => {
    const eduData = await EduService.getAllEdu();
    if (eduData.success) {
      setEducations(eduData.data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <EduComponent educations={educations} />
    </div>
  );
}
