import React,{useState} from "react";

function Register() {

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

  return (
    <>
      <div className="register-page" id="register">
        <div className="row">
          <div className="col-sm-4"></div>
          <form onSubmit="" id="registerShadow">
            <h2 className="h3 mb-3 font-weight-normal"><strong>KAYIT</strong></h2>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                required
                type="text"
                className="form-control"
                onChange={(evt) => setName(evt.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Surname</label>
              <input
                required
                type="text"
                className="form-control"
                onChange={(evt) => setSurname(evt.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                required
                type="email"
                className="form-control"
                aria-describedby="emailHelp"
                onChange={(evt) => setEmail(evt.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                required
                type="password"
                className="form-control"
                onChange={(evt) => setPassword(evt.target.value)}
              />
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary" id="submit">
                Kayıt ol
              </button>
            </div>
          </form>

          <div className="col-sm-4"></div>
        </div>
      </div>
    </>
  );
}

export default Register;
