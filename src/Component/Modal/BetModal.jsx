import React from "react";

function BetMoney({ betModal, setBetModal }) {
  // console.log(betModal);
  return (
    <div>
      {betModal ? (
        <div class="modal show" style={{ display: "block" }} id="myModal">
          <div class="modal-dialog ">
            <div class="modal-content">
              <div class="modal-header">
                <h3 class="modal-title">Save IP Address</h3>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  onClick={() => {
                    setBetModal(!betModal);
                  }}
                >
                  ×
                </button>
              </div>
              <div class="modal-body">
                <div class="container">
                  <div class="">
                    <form>
                      <h class="heading mt-3">IP</h>
                      <input
                        type="text"
                        id=""
                        name="IP"
                        placeholder="xxx.xxx.xxx.xxx"
                        className="form-control"
                      />
                      <h6 class="detail mt-3">Select IP Type</h6>
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
                      <button type="button" class="btn btn-outline-dark m-3">
                        Save
                      </button>

                      <button
                        type="button"
                        class="btn btn-dark"
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
