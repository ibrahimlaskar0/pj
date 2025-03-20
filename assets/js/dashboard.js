import { getFirestore, collection, addDoc, onSnapshot } from "firebase/firestore";

const db = getFirestore();
const donationsRef = collection(db, 'donations');

document.getElementById('donationForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const foodName = document.getElementById('foodName').value;
  const quantity = document.getElementById('quantity').value;
  const location = document.getElementById('location').value;

  try {
    await addDoc(donationsRef, {
      foodName,
      quantity,
      location,
      timestamp: new Date(),
      status: 'available'
    });
    console.log('Donation added');
  } catch (error) {
    console.error('Error adding donation:', error);
  }
});

onSnapshot(donationsRef, (snapshot) => {
  const donationsList = document.getElementById('donationsList');
  donationsList.innerHTML = '';
  snapshot.forEach((doc) => {
    const donation = doc.data();
    const listItem = document.createElement('li');
    listItem.textContent = `${donation.foodName} - ${donation.quantity} portions - ${donation.location}`;
    donationsList.appendChild(listItem);
  });
});
