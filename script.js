const fetchData = async () => {
  const options = {
    method: 'GET',
    url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather',
    params: { city: 'Delhi' },
    headers: {
      'X-RapidAPI-Key': 'e51d33be17msh2e38d6eff4060a8p1b0c03jsn02f0048a486b',
      'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    const data = response.data;

    // Update temperature-related placeholders with fetched data
    document.getElementById('temp').textContent = data.temp;
    document.getElementById('min_temp').textContent = data.min_temp;
    document.getElementById('max_temp').textContent = data.max_temp;

  } catch (error) {
    console.error(error);
  }
};

fetchData();
