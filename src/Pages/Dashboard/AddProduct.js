import React, { useEffect, useRef, useState } from "react";
import { Axios } from "../../Api/axios";
import Loading from "../../components/Loading/Loading";
import { Button, Card, Form } from "react-bootstrap";
import { CAT, Pro, baseUrl, cat } from "../../Api/Api";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddProduct() {
  const [categories, setCatategories] = useState([]);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [id, setId] = useState();
  const [upLoading, setUpLoading] = useState(0);
  const nav = useNavigate();

  // console.log(upLoading)

  //Ref
  const focus = useRef(null);
  useEffect(() => {
    focus.current.focus();
  }, []);

  const progress = useRef([]);
  console.log(progress);
  const uploadImage = useRef(null);
  function handleUploadImage() {
    uploadImage.current.click();
  }

  const ids = useRef([]);

  const [form, setForm] = useState({
    category: "",
    title: "",
    description: "",
    price: "",
    discount: "",
    About: "",
  });

  const dummyForm = {
    category: null,
    title: "Dummy",
    description: "Dummy",
    price: "200",
    discount: "0",
    About: "Dummy",
  };

  useEffect(() => {
    Axios.get(`/${CAT}`)
      .then((data) => setCatategories(data.data))
      .catch((err) => console.log(err));
  }, []);

  //handleEditProdcut
  async function handleEditProdcut() {
    setLoading(true);
    e.preventDefault();
    try {
      const res = await Axios.post(`${Pro}/edit/${id}`, form);
      nav("/dashboard/products");
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  }
  //handleSubmitForm
  async function handleSubmitForm() {
    try {
      const res = await Axios.post(`${Pro}/add`, dummyForm);
      console.log(res.data.id);
      setId(res.data.id);
    } catch (err) {
      console.log(err);
    }
  }

  const j = useRef(-1);
  //handleChangesImage
  async function handleChangesImage(e) {
    setImages((prev) => [...prev, ...e.target.files]);
    const imagesAsFiles = e.target.files;
    const data = new FormData();
    for (let index = 0; index < imagesAsFiles.length; index++) {
      j.current++;
      data.append("image", imagesAsFiles[index]);
      data.append("product_id", id);
      try {
        const res = await Axios.post("/product-img/add", data, {
          onUploadProgress: (ProgressEvent) => {
            const { loaded, total } = ProgressEvent;
            // console.log(loaded);
            // console.log(total);
            const percent = Math.floor((loaded * 100) / total);
            if (percent % 10 === 0) {
              progress.current[j.current].style.width = `${percent}%`;
              progress.current[j.current].setAttribute(
                `percent`,
                `${percent}%`
              );
            }
          },
        });
        // console.log(res);
        ids.current[j.current] = res.data.id;
        // console.log(ids)
      } catch (err) {
        console.log(err);
      }
    }
  }
  //handleChange
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSent(true);
    if (!sent) {
      handleSubmitForm();
    }
  };
  // handleSubmit
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const data = new FormData();
      data.append("category", form.category);
      data.append("title", form.title);
      data.append("description", form.description);
      data.append("About", form.About);
      data.append("price", form.price);
      data.append("discount", form.discount);
      for (let i = 0; i < images.length; i++) {
        data.append("images[]", images[i]);
      }
      const res = await Axios.post(`${Pro}/add`, data);
      console.log(res);
      setLoading(false);
      nav("/dashboard/products");
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  }

  // Handle Delete
  async function handleDelete(id, img) {
    const findId = ids.current[id];
    try{
      const res = await Axios.delete(`/product-img/${findId}`);
      setImages((prev) => prev.filter((image) => image !== img))
      ids.current = ids.current.filter((i) => i !== findId);
      --j.current;
      console.log(res)
    }catch(err){
      console.log(err)
    }
  }
  //Mapping:
  const showCategories = categories.map((item, index) => (
    <option key={index} value={item.id}>
      {item.title}
    </option>
  ));

  const showImages = images.map((img, index) => (
    <div className=" border p-2 w-100">
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex aling-items-center justify-content-start gap-2">
          <img width="80px" src={URL.createObjectURL(img)} />
          <div>
            <p className="mb-1">{img.name}</p>
            <span>
              {(img.size / 1024).toFixed(2) < 900
                ? (img.size / 1024).toFixed(2) + " KB"
                : (img.size / (1024 * 1024)).toFixed(2) + " MB"}
            </span>
          </div>
        </div>
        <Button variant="danger" onClick={() => handleDelete(index, img)}>
          delete
        </Button>
      </div>
      <div className="custom-progress">
        <span
          ref={(e) => {
            progress.current[index] = e;
          }}
          // percent = {`${upLoading}%`}
          // style = {{width: `${upLoading}%`}}
          className="inner-progress"
        ></span>
      </div>
    </div>
  ));

  return (
    <>
      {loading && <Loading />}
      <Form className="bg-white w-100 p-5" onSubmit={handleEditProdcut}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
          <Form.Label>Category:</Form.Label>
          <Form.Select
            onChange={handleChange}
            value={form.category}
            name="category"
            ref={focus}
          >
            <option disabled value="">
              Select Category
            </option>
            {showCategories}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Title: </Form.Label>
          <Form.Control
            type="text"
            placeholder="Your Title..."
            onChange={handleChange}
            value={form.title}
            name="title"
            disabled={!sent}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Label>Description:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Description..."
            onChange={handleChange}
            value={form.description}
            name="description"
            disabled={!sent}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
          <Form.Label>Price:</Form.Label>
          <Form.Control
            type="number"
            placeholder="Price..."
            onChange={handleChange}
            value={form.price}
            name="price"
            disabled={!sent}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
          <Form.Label>Discount:</Form.Label>
          <Form.Control
            type="number"
            placeholder="Discount..."
            onChange={handleChange}
            value={form.discount}
            name="discount"
            disabled={!sent}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
          <Form.Label>About:</Form.Label>
          <Form.Control
            type="text"
            placeholder="About..."
            onChange={handleChange}
            value={form.About}
            name="About"
            disabled={!sent}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput7">
          <Form.Label>Image:</Form.Label>
          <Form.Control
            type="file"
            placeholder="Image..."
            ref={uploadImage}
            hidden
            disabled={!sent}
            multiple
            onChange={handleChangesImage}
          />
          <div className="mt-4"></div>
          {showImages}
        </Form.Group>
        <div
          className="d-flex align-items-center justify-content-center w-100 pt-4 mb-3 rounded gap-2 flex-column"
          style={{
            border: sent ? "3px dashed #538bb5" : "3px dashed gray",
            cursor: sent ? "pointer" : "none",
          }}
          onClick={handleUploadImage}
        >
          <img
            src="https://www.dygiphy.com.au/wp-content/uploads/increase-in-hosting-plan-cloud-storage-space-1024x683.png"
            width="150px"
            style={{ filter: !sent && "grayscale(1)" }}
          />
          <p style={{ color: sent ? "#538bb5" : "gray" }}>Upload Images: </p>
        </div>
        <button
          disabled={form.category === "" ? true : false}
          className="button button-primary"
        >
          Save
        </button>
      </Form>
    </>
  );
}

export default AddProduct;
