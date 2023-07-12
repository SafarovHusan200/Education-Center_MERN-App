import client, { baseDomain } from "./client";

class EduService {
  getAllEdu() {
    const endPoint = "/edu";
    const educations = client
      .get(baseDomain + endPoint)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err;
      });

    return educations;
  }

  getEduById(id) {
    const endPoint = `/edu/${id}`;
    const education = client
      .get(baseDomain + endPoint)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err;
      });

    return education;
  }
  createEdu(edu) {
    const endPoint = `/edu`;
    const education = client
      .post(baseDomain + endPoint, edu)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err;
      });

    return education;
  }

  updateEdu(id, edu) {
    const endPoint = `/edu/${id}`;
    const education = client
      .put(baseDomain + endPoint, edu)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err;
      });

    return education;
  }

  deleteEdu(id) {
    const endPoint = `/edu/${id}`;
    const education = client
      .delete(baseDomain + endPoint)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err;
      });

    return education;
  }
}

export default new EduService();
