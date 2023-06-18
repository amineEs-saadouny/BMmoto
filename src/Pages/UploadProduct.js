import React, { useEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../Style/UploadProduct.css";

function MianImgUploalContainer(props) {
  let inputFile = document.querySelector("#main-img-upload-input");
  let imgArea = document.querySelector("#main-img-erea");
  function getMainImg(event) {
    const formData = new FormData();
    formData.append("file", event.target.files[0]);
    fetch("http://localhost:5000/getfile", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    const image = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const imgUrl = reader.result;
      props.setImgName((prev) => {
        return { ...prev, MainImg: image.name };
      });

      const img = document.createElement("img");
      img.src = imgUrl;
      if (document.querySelector("#main-img-erea img")) {
        imgArea.removeChild(document.querySelector("#main-img-erea img"));
      }
      imgArea.appendChild(img);
    };
    reader.readAsDataURL(image);
  }
  return (
    <>
      <div
        className="img-upload-container main"
        onClick={() => {
          inputFile.click();
        }}
      >
        <input
          type="file"
          accept="image/*"
          hidden
          id="main-img-upload-input"
          className="upload-file-input"
          onChange={getMainImg}
        />
        <div className="img-erea" id="main-img-erea">
          <i className="fa fa-cloud-upload upload-icon"></i>
          <h4>Upload Main Image</h4>
        </div>
      </div>
    </>
  );
}
function Img1UploalContainer(props) {
  let inputFile = document.querySelector("#img1-upload-input");
  let imgArea = document.querySelector("#img1-erea");
  function getImg1(event) {
    const formData = new FormData();
    formData.append("file", event.target.files[0]);
    fetch("http://localhost:5000/getfile", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    const image = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const imgUrl = reader.result;
      props.setImgName((prev) => {
        return { ...prev, Img1: image.name };
      });
      const img = document.createElement("img");
      img.src = imgUrl;
      if (document.querySelector("#img1-erea img")) {
        imgArea.removeChild(document.querySelector("#img1-erea img"));
      }
      imgArea.appendChild(img);
    };
    reader.readAsDataURL(image);
  }
  return (
    <>
      <div
        className="img-upload-container"
        onClick={() => {
          inputFile.click();
        }}
      >
        <input
          type="file"
          accept="image/*"
          hidden
          id="img1-upload-input"
          className="upload-file-input"
          onChange={getImg1}
        />
        <div className="img-erea" id="img1-erea">
          <i className="fa fa-cloud-upload upload-icon"></i>
          <h4>Upload Gallery Image</h4>
        </div>
      </div>
    </>
  );
}
function Img2UploalContainer(props) {
  let inputFile = document.querySelector("#img2-upload-input");
  let imgArea = document.querySelector("#img2-erea");
  function getImg1(event) {
    const formData = new FormData();
    formData.append("file", event.target.files[0]);
    fetch("http://localhost:5000/getfile", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    const image = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const imgUrl = reader.result;
      props.setImgName((prev) => {
        return { ...prev, Img2: image.name };
      });
      const img = document.createElement("img");
      img.src = imgUrl;
      if (document.querySelector("#img2-erea img")) {
        imgArea.removeChild(document.querySelector("#img2-erea img"));
      }
      imgArea.appendChild(img);
    };
    reader.readAsDataURL(image);
  }
  return (
    <>
      <div
        className="img-upload-container"
        onClick={() => {
          inputFile.click();
        }}
      >
        <input
          type="file"
          accept="image/*"
          hidden
          id="img2-upload-input"
          className="upload-file-input"
          onChange={getImg1}
        />
        <div className="img-erea" id="img2-erea">
          <i className="fa fa-cloud-upload upload-icon"></i>
          <h4>Upload Gallery Image</h4>
        </div>
      </div>
    </>
  );
}
function Img3UploalContainer(props) {
  let inputFile = document.querySelector("#img3-upload-input");
  let imgArea = document.querySelector("#img3-erea");
  function getImg1(event) {
    const formData = new FormData();
    formData.append("file", event.target.files[0]);
    fetch("http://localhost:5000/getfile", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    const image = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const imgUrl = reader.result;
      props.setImgName((prev) => {
        return { ...prev, Img3: image.name };
      });
      const img = document.createElement("img");
      img.src = imgUrl;
      if (document.querySelector("#img3-erea img")) {
        imgArea.removeChild(document.querySelector("#img3-erea img"));
      }
      imgArea.appendChild(img);
    };
    reader.readAsDataURL(image);
  }
  return (
    <>
      <div
        className="img-upload-container"
        onClick={() => {
          inputFile.click();
        }}
      >
        <input
          type="file"
          accept="image/*"
          hidden
          id="img3-upload-input"
          className="upload-file-input"
          onChange={getImg1}
        />
        <div className="img-erea" id="img3-erea">
          <i className="fa fa-cloud-upload upload-icon"></i>
          <h4>Upload Gallery Image</h4>
        </div>
      </div>
    </>
  );
}
function Img4UploalContainer(props) {
  let inputFile = document.querySelector("#img4-upload-input");
  let imgArea = document.querySelector("#img4-erea");
  function getImg1(event) {
    const formData = new FormData();
    formData.append("file", event.target.files[0]);
    fetch("http://localhost:5000/getfile", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    const image = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const imgUrl = reader.result;
      props.setImgName((prev) => {
        return { ...prev, Img4: image.name };
      });
      const img = document.createElement("img");
      img.src = imgUrl;
      if (document.querySelector("#img4-erea img")) {
        imgArea.removeChild(document.querySelector("#img4-erea img"));
      }
      imgArea.appendChild(img);
    };
    reader.readAsDataURL(image);
  }
  return (
    <>
      <div
        className="img-upload-container"
        onClick={() => {
          inputFile.click();
        }}
      >
        <input
          type="file"
          accept="image/*"
          hidden
          id="img4-upload-input"
          className="upload-file-input"
          onChange={getImg1}
        />
        <div className="img-erea" id="img4-erea">
          <i className="fa fa-cloud-upload upload-icon"></i>
          <h4>Upload Gallery Image</h4>
        </div>
      </div>
    </>
  );
}
function Img5UploalContainer(props) {
  let inputFile = document.querySelector("#img5-upload-input");
  let imgArea = document.querySelector("#img5-erea");
  function getImg1(event) {
    const formData = new FormData();
    formData.append("file", event.target.files[0]);
    fetch("http://localhost:5000/getfile", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    const image = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const imgUrl = reader.result;
      props.setImgName((prev) => {
        return { ...prev, Img5: image.name };
      });
      const img = document.createElement("img");
      img.src = imgUrl;
      if (document.querySelector("#img5-erea img")) {
        imgArea.removeChild(document.querySelector("#img5-erea img"));
      }
      imgArea.appendChild(img);
    };
    reader.readAsDataURL(image);
  }
  return (
    <>
      <div
        className="img-upload-container"
        onClick={() => {
          inputFile.click();
        }}
      >
        <input
          type="file"
          accept="image/*"
          hidden
          id="img5-upload-input"
          className="upload-file-input"
          onChange={getImg1}
        />
        <div className="img-erea" id="img5-erea">
          <i className="fa fa-cloud-upload upload-icon"></i>
          <h4>Upload Gallery Image</h4>
        </div>
      </div>
    </>
  );
}

function UploadProduct() {
  const [productToUpload, setProductToUpload] = React.useState({
    Name: "",
    Brand: "",
    Displacement: "",
    Description: "",
    Engine: "",
    DimensionsAndWeight: "",
    Video: "",
    MainImg: "",
    Img1: "",
    Img2: "",
    Img3: "",
    Img4: "",
    Img5: "",
  });
  console.log(productToUpload);

  function addProduct() {
    fetch("http://localhost:5000/insert", {
      headers: {
        "Content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(productToUpload),
    }).then((response) => response.json());
  }
  const [brands, setBrands] = React.useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/getBrands")
      .then((response) => response.json())
      .then((data) => setBrands(data.data));
  }, []);
  const brandsOptions = brands.map((item) => {
    return (
      <option key={item.id} value={item.id}>
        {item.name}
      </option>
    );
  });
  return (
    <>
      <Header />
      <div className="aad-product-form">
        <div className="upload-container">
          <section className="left-section">
            <label>Name: </label>
            <input
              type="text"
              placeholder="Enter Name"
              value={productToUpload.Name}
              onChange={(event) => {
                setProductToUpload((prev) => {
                  return { ...prev, Name: event.target.value };
                });
              }}
            />
            <label>Brand: </label>
            <select
              id="brands"
              className="brands-select"
              onChange={() => {
                const brandsSelect = document.querySelector("#brands");
                const selectedBrand =
                  brandsSelect.options[brandsSelect.selectedIndex].value;
                setProductToUpload((prev) => {
                  return { ...prev, Brand: selectedBrand };
                });
              }}
            >
              <option selected disabled>
                Select Brand
              </option>
              {brandsOptions}
            </select>
            <label>Displacement: </label>
            <input
              type="text"
              placeholder="Enter Displacement"
              value={productToUpload.Displacement}
              onChange={(event) => {
                setProductToUpload((prev) => {
                  return { ...prev, Displacement: event.target.value };
                });
              }}
            />
            <label>Description: </label>
            <textarea
              placeholder="Enter Description"
              value={productToUpload.Description}
              onChange={(event) => {
                setProductToUpload((prev) => {
                  return { ...prev, Description: event.target.value };
                });
              }}
            />
            <label>Video: </label>
            <input
              type="text"
              placeholder="Enter Video"
              value={productToUpload.Video}
              onChange={(event) => {
                setProductToUpload((prev) => {
                  return { ...prev, Video: event.target.value };
                });
              }}
            />
          </section>
          <section className="right-section">
            <label>Engine: </label>
            <textarea
              placeholder="Enter Engine"
              value={productToUpload.Engine}
              onChange={(event) => {
                setProductToUpload((prev) => {
                  return { ...prev, Engine: event.target.value };
                });
              }}
            />
            <label>Dimensions and Weight: </label>
            <textarea
              placeholder="Enter Dimensions and Weight"
              value={productToUpload.DimensionsAndWeight}
              onChange={(event) => {
                setProductToUpload((prev) => {
                  return { ...prev, DimensionsAndWeight: event.target.value };
                });
              }}
            />
          </section>
        </div>
        <section className="img-section">
          <MianImgUploalContainer setImgName={setProductToUpload} />
          <Img1UploalContainer setImgName={setProductToUpload} />
          <Img2UploalContainer setImgName={setProductToUpload} />
          <Img3UploalContainer setImgName={setProductToUpload} />
          <Img4UploalContainer setImgName={setProductToUpload} />
          <Img5UploalContainer setImgName={setProductToUpload} />
        </section>
        <input
          type="submit"
          id="upload-btn"
          value="Add Product"
          onClick={() => {
            if (
              productToUpload.Name === "" ||
              productToUpload.Brand === "" ||
              productToUpload.Description === "" ||
              productToUpload.DimensionsAndWeight === "" ||
              productToUpload.Displacement === "" ||
              productToUpload.Engine === "" ||
              productToUpload.Img1 === "" ||
              productToUpload.Img2 === "" ||
              productToUpload.Img3 === "" ||
              productToUpload.Img4 === "" ||
              productToUpload.Img5 === "" ||
              productToUpload.MainImg === "" ||
              productToUpload.Video === ""
            ) {
              alert("Please fill in all inputs!");
            } else {
              addProduct();
              window.location.reload();
            }
          }}
        />
      </div>

      <Footer />
    </>
  );
}

export default UploadProduct;
