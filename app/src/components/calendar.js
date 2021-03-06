import React, { useState } from "react";

export function Calendar({ bookPrice, success, cancle }) {
    let today1 = new Date();
    var dd = String(today1.getDate()).padStart(2, '0');
    var mm = String(today1.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today1.getFullYear();
    let today = `${yyyy}-${mm}-${dd}`;
    const [returnDate, setReturnDate] = useState(`${yyyy}-${mm}-${dd}`)
    const [days, setDays] = useState(0);

    const dateSelected = (e, getData) => {
        let newE = new Date(e);
        let newToday = new Date(today);
        setReturnDate(e);
        setDays(Math.abs(Math.ceil(newE - newToday) / (1000 * 60 * 60 * 24)));
    }

    return (<>

        <div className="row">
            <div className="col-lg-5 col-md-5 col-12 mb-3">
                <input type="date" className="form-control" value={today} disabled />
                <h5 className="text text-center mt-2">To</h5>
                <input type="date" className="form-control" value={returnDate} min={today} onChange={(e) => dateSelected(e.target.value)} />
            </div>
            <div className="col-lg-6 col-md-6 col-12 p-8">
                <h4>Pricing</h4>
                <p>For {days} days <br />
                    <span className="text text-primary">{days} * {bookPrice * 0.001}$ = {Number(days) * bookPrice * 0.001}$ </span></p>
                <div className="h4 border bordered rounded border-warning bg-dark text-white text-center m-0 p-0">
                    <p className="align-bottom">{Number(days) * bookPrice * 0.001}$</p>
                </div>
            </div>
            <hr />
            <div className="text text-center">
                <button type="button" className="btn btn-danger m-2 col-4 " data-bs-dismiss="modal" onClick={() => { cancle() }}>Cancle</button>
                <button type="button" className="btn btn-warning m-2 col-5" data-bs-dismiss="modal" onClick={() => success(days, (Number(days) * bookPrice * 0.001), today)}>Borrow</button>
            </div>
        </div>
    </>)
}