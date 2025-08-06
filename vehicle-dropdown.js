document.addEventListener("DOMContentLoaded", () => {
  const makeSelect = document.getElementById("vehicle-make");
  const modelSelect = document.getElementById("vehicle-model");
  const yearSelect = document.getElementById("vehicle-year");

  const vehicleData = {
    Audi: {
      "A3": [2020, 2021, 2022],
      "A4": [2019, 2020, 2021],
      "Q5": [2021, 2022],
    },
    BMW: {
      "3 Series": [2018, 2019, 2020],
      "5 Series": [2020, 2021, 2022],
      "X5": [2021, 2022],
    },
    "Mercedes Benz": {
      "C-Class": [2019, 2020, 2021],
      "E-Class": [2020, 2021],
      "GLA": [2021],
    },
    Mini: {
      "Cooper": [2018, 2019, 2020],
      "Countryman": [2020, 2021],
    },
    Porsche: {
      "Cayenne": [2019, 2020],
      "911": [2021, 2022],
    },
    Volkswagen: {
      "Golf": [2019, 2020, 2021],
      "Polo": [2020, 2021],
      "Tiguan": [2021],
    }
  };

  makeSelect.addEventListener("change", () => {
    const models = vehicleData[makeSelect.value] || {};
    modelSelect.innerHTML = "<option>Select model</option>";
    yearSelect.innerHTML = "<option>Select year</option>";
    Object.keys(models).forEach(model => {
      modelSelect.add(new Option(model, model));
    });
  });

  modelSelect.addEventListener("change", () => {
    const years = vehicleData[makeSelect.value][modelSelect.value] || [];
    yearSelect.innerHTML = "<option>Select year</option>";
    years.forEach(y => yearSelect.add(new Option(y, y)));
  });
});
