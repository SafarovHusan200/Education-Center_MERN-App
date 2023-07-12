import React from "react";

import EduService from "../repositories/edu.repository";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form";
import { toast } from "react-toastify";

export default function CreateEdu() {
  const navigate = useNavigate();

  const onSubmit = async (created) => {
    const result = await EduService.createEdu(created);

    if (result.success) {
      toast.success(result.message, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
        hideProgressBar: false,
      });
      navigate("/");
    } else {
      toast.error(result?.response?.data?.message, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
        hideProgressBar: false,
      });
    }
  };
  return (
    <>
      <Form onSubmit={onSubmit} sectionTitle={"Create"} />
    </>
  );
}
