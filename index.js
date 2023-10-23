fetch('./data.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error:' + err);
    });

function appendData(data) {
    let mainContainer = document.getElementById('myData');

    data.forEach((result) => {
        const card = document.createElement('div');
        card.classList = "row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3";
        const content = 
        `
            <div class="col">
              <div class="card shadow-sm">
                <img
                  src="${result.url}"
                  alt="${result.productName}"
                />
                <div class="card-body">
                  <h4>${result.productName}</h4>
                  <p class="card-text">
                    ${result.productDesc}
                  </p>
                  <p class="card-text">
                    ${result.priceList}
                  </p>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        onclick=""
                      >
                        View
                      </button>
                    </div>
                    <small class="text-muted"></small>
                  </div>
                </div>
              </div>
            </div>
        `;
        mainContainer.innerHTML += content;
    })
}