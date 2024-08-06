const addMemberBtn = document.getElementById('add-member-btn');
const membershipCardsContainer = document.getElementById('membership-cards');
const membershipCardTemplate = document.getElementById('membership-card-template');

addMemberBtn.addEventListener('click', () => {
  const newMembershipCard = membershipCardTemplate.content.cloneNode(true);
  membershipCardsContainer.appendChild(newMembershipCard);
  alert('New member added successfully!');
});
