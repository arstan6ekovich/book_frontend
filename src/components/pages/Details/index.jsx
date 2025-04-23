import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const [details, setDetails] = useState("");

  const getDetails = async () => {
    try {
      const { data } = await axios.get(
        `https://api-crud.elcho.dev/api/v1/9ab31-01c61-cc880/book/${id}`
      );
      setDetails(data);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getDetails();
  }, []);
  return (
    <section>
      <img src={details.book_photo} width={400} alt="" />
    </section>
  );
};

export default Details;
