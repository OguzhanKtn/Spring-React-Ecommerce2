import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ImageAdd() {

    const params = useParams()
    const id = params.id

    const[image,setImage] = useState(null)

    const sendForm = async (evt) => {
      evt.preventDefault();
  
      const formData = new FormData();
      formData.append('image', image);
  
      try {
        const res = await axios.post('http://localhost:8090/image/save/'+id, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        
        console.log(res.data);
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    };

  return (
    <>
      <form enctype="multipart/form-data" onSubmit={sendForm}>
        <div className="container">
          <div class="mb-3">
            <label for="formFile" className="form-label">
              Image
            </label>
            <input name="image" className="form-control" accept="image/png, image/jpeg" type="file" id="formFile" onChange={(evt)=>setImage(evt.target.files[0])} />
            <button className="btn btn-primary btn-sm" type="submit">Save</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default ImageAdd
