document.addEventListener("DOMContentLoaded", function () {
  fetch('./Cities.json')
      .then(function (response) {
          return response.json();
      })
      .then(function (data) {
          appendData(data);
      })
      .catch(function (err) {
          console.log('Error:', err);
      });
});

function appendData(data) {
  let mainContainer = document.getElementById('myData');
  
  data.forEach((result) => {
      const card = document.createElement('div');
      card.classList = 'col';
      const content =
          `<div class="card shadow-sm">
              <img src="${result.imageURL}" alt="${result.cityName}" />
              <div class="card-body">
                  <h4>${result.cityName}</h4>
                  <p class="card-text">${result.description}</p>
                  <p class="card-text">${result.averageCostPerDay}</p>
                  <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                          <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                      </div>
                  </div>
              </div>
          </div>`;
      
      mainContainer.innerHTML += content;
  });
}
