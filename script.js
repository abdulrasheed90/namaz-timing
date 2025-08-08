function getData() {
  let input = document.getElementById('city').value;

  if (!input) {
    alert("Please enter a city name");
    return;
  }

  axios
    .get(`https://api.aladhan.com/v1/timingsByCity?city=${input}&country=pakistan&method=1`)
    .then(function (response) {
      const timings = response.data.data.timings;
      const date = response.data.data.date.readable;

      document.getElementById("fajr-time").innerText = timings.Fajr;
      document.getElementById("sunrise-time").innerText = timings.Sunrise;
      document.getElementById("zuhr-time").innerText = timings.Dhuhr;
      document.getElementById("asr-time").innerText = timings.Asr;
      document.getElementById("maghrib-time").innerText = timings.Maghrib;
      document.getElementById("isha-time").innerText = timings.Isha;
      document.getElementById("imsak-time").innerText = timings.Imsak;
      document.getElementById("sunset-time").innerText = timings.Sunset;
      document.getElementById("date").innerText = `Date : ${date}`;
    })
    .catch(function (error) {
      alert("Error fetching data. Please try again or check the city name.");
      console.error(error);
    });
}
