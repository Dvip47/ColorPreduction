import React from "react";

function BetMoney({ betModal, setBetModal }) {
  // console.log(betModal);
  return (
    <div>
      {betModal ? (
        <div className="modal show" style={{ display: "block" }} id="myModal">
          <div className="modal-dialog ">
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title">Save IP Address</h3>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  onClick={() => {
                    setBetModal(!betModal);
                  }}
                >
                  ×
                </button>
              </div>
              <div className="modal-body">
                <div className="container">
                  <div className="">
                    <form>
                      <h className="heading mt-3">IP</h>
                      <input
                        type="text"
                        id=""
                        name="IP"
                        placeholder="xxx.xxx.xxx.xxx"
                        classNameName="form-control"
                      />
                      <h6 className="detail mt-3">Select IP Type</h6>
                      <select name="IPType" id="cars" className="form-control">
                        <option value="volvo">API IP</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                        <option value="volvo">API IP</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                      </select>
                      <button
                        type="button"
                        className="btn btn-outline-dark m-3"
                      >
                        Save
                      </button>

                      <button
                        type="button"
                        className="btn btn-dark"
                        onClick={() => {
                          setBetModal(!betModal);
                        }}
                      >
                        Cancel
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default BetMoney;
