document.getElementById('individual-tab').addEventListener('click', loadIndividualExpenses);
document.getElementById('group-tab').addEventListener('click', loadGroupExpenses);

const expenseList = document.getElementById('expenses');

function loadIndividualExpenses() {
  document.getElementById('individual-tab').classList.add('active');
  document.getElementById('group-tab').classList.remove('active');

  expenseList.innerHTML = `
    <div class="expense-item">
      <div class="expense-info">
        <img src="https://via.placeholder.com/50" alt="User Avatar">
        <p>You owe Rajesh</p>
      </div>
      <p class="amount">- ₹25.00</p>
    </div>
    <div class="expense-item">
      <div class="expense-info">
        <img src="https://via.placeholder.com/50" alt="User Avatar">
        <p>You owe Sam</p>
      </div>
      <p class="amount">- ₹15.00</p>
    </div>`;
}

function loadGroupExpenses() {
  document.getElementById('group-tab').classList.add('active');
  document.getElementById('individual-tab').classList.remove('active');

  expenseList.innerHTML = `
    <div class="expense-item">
      <div class="expense-info">
        <img src="https://via.placeholder.com/50" alt="Group Avatar">
        <p>You owe Group Dinner</p>
      </div>
      <p class="amount">- ₹45.00</p>
    </div>`;
}

// Initially load individual expenses
loadIndividualExpenses();
