import "./Admin.scss";

const Admin = () => {
  return (
    <section id="admin">
      <div className="container">
        <div className="admin">
          <input type="file" className="file"/>
          <div className="admin-inputs">
            <input type="text" placeholder="Product Name" />
            <div className="admin-line">
              <input type="text" placeholder="Category" />
              <input type="text" placeholder="Price" />
            </div>
            <textarea
              placeholder="Product description..."
              name=""
              id=""
            ></textarea>
            <button>SAVE</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admin;
