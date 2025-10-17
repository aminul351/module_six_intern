const fetchBtn = document.getElementById('fetchBtn');
const userCard = document.getElementById('userCard');

fetchBtn.addEventListener('click', async () => {
  userCard.innerHTML = `<p>Loading...</p>`; 

  try {
    const response = await fetch('https://randomuser.me/api/');
    if (!response.ok) throw new Error('Network response was not ok');

    const data = await response.json();
    const user = data.results[0];

    userCard.innerHTML = `
      <img src="${user.picture.large}" alt="User Picture">
      <h2>${user.name.title} ${user.name.first} ${user.name.last}</h2>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Location:</strong> ${user.location.city}, ${user.location.country}</p>
    `;
  } catch (error) {
    userCard.innerHTML = `<p>Error fetching user. Try again later.</p>`;
    console.error('Fetch error:', error);
  }
});
