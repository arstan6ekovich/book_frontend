import { useState } from "react";
import "./Admin.scss";
import axios from "axios";

const Admin = () => {
  const [name, setName] = useState("");
  const [categori, setCategori] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState(null);

  const addBook = async () => {
    try {
      if (
        name.trim() === "" ||
        categori.trim() === "" ||
        price.trim() === "" ||
        description.trim() === ""
      ) {
        alert("Заполните пол");
      } else {
        const formData = new FormData();
        formData.append("file", photo);
        const res = await axios.post(
          "https://api-crud.elcho.dev/api/v1/upload/file",
          formData
        );
        const uploadedUrl = res.data.url;
        const newData = {
          id: Date.now(),
          book_name: name,
          book_description: description,
          book_price: price,
          book_photo: uploadedUrl,
          book_categori: categori,
          create_book: new Date().toISOString(),
          update_book: new Date().toISOString(),
        };

        await axios.post(
          "https://api-crud.elcho.dev/api/v1/9ab31-01c61-cc880/book",
          newData
        );

        alert("Книга успешно добавлена!");
        setName("");
        setCategori("");
        setDescription("");
        setPhoto(null);
        setPrice("");
      }
    } catch (e) {
      console.error(e);
      alert("Ошибка при добавлении книги");
    }
  };

  return (
    <section id="admin">
      <div className="container">
        <div className="admin">
          <input
            type="file"
            className="file"
            onChange={(e) => setPhoto(e.target.files?.[0] || null)}
          />
          <div className="admin-inputs">
            <input
              type="text"
              placeholder="Product Name"
              onChange={(e) => setName(e.target.value)}
            />
            <div className="admin-line">
              <input
                type="text"
                placeholder="Category"
                onChange={(e) => setCategori(e.target.value)}
              />
              <input
                type="text"
                placeholder="Price"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Product description..."
            ></textarea>
            <button onClick={() => addBook()}>SAVE</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admin;
