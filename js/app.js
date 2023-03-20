document.getElementById('btn-calculate').addEventListener('click', function(){
    const food = document.getElementById('food-field').value;
    const rent = document.getElementById('rent-field').value;
    const clothes = document.getElementById('clothes-field').value;
    const totalExpense = parseFloat(food) + parseFloat(rent) + parseFloat(clothes);
    document.getElementById('total-expense').value = totalExpense;

    const income = document.getElementById('income-field').value;
    const lastBalance = income - totalExpense;
    document.getElementById('balance-field').value = lastBalance;

    document.getElementById('btn-save').addEventListener('click', function(){
        const total = document.getElementById('balance-field').value;
        const remainingAmount = total - (total * 0.2);
        document.getElementById('remaining-balance').value = remainingAmount;

        const saveAmount = total - remainingAmount;
        document.getElementById('saving-amount').value = saveAmount;

        
    });


});