import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EduService from "../repositories/edu.repository";
import Form from "../components/Form";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

export default function EditEdu() {
  const id = useParams().id;
  const navigate = useNavigate();
  const [data, setData] = useState();

  const handleData = async () => {
    const result = await EduService.getEduById(id);
    if (result.success) {
      setData(result.data);
    }
  };

  const onSubmit = async (editData) => {
    const result = await EduService.updateEdu(id, editData);
    if (result.success) {
      toast.success(result.message, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
        hideProgressBar: false,
      });
      console.log(result);
      navigate("/");
    }
  };

  useEffect(() => {
    handleData();
  }, []);
  return (
    <>
      <Form onSubmit={onSubmit} sectionTitle={"Update"} values={data} />;
    </>
  );
}
