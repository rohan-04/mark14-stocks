const initialPrice = document.querySelector('#initial-price');
const stocksQuantity = document.querySelector('#stocks-quantity');
const currentPrice = document.querySelector('#current-price');
const submitButton = document.querySelector('#submit-btn');
const outputBox = document.querySelector('#output');

function submitHandler() {
	let initialCost = Number(initialPrice.value);
	let quantity = Number(stocksQuantity.value);
	let currPrice = Number(currentPrice.value);
	calculateProfitAndLoss(initialCost, quantity, currPrice);
}

function calculateProfitAndLoss(initial, quantity, current) {
	if (initial < current) {
		// profit
		let profit = (current - initial) * quantity;
		let profitPercentage = (profit / initial) * 100;
		profitPercentage = profitPercentage.toFixed(4);
		outputBox.style.color = '#34D399';
		outputBox.innerText = `Hey the profit is ${profit} and the percent is ${profitPercentage}% 💸🚀`;
	} else if (initial > current) {
		// loss
		let loss = (initial - current) * quantity;
		let lossPercentage = (loss / initial) * 100;
		lossPercentage = lossPercentage.toFixed(4);
		outputBox.style.color = '#F87171';
		outputBox.innerText = `Hey the loss is ${loss} and the percent is ${lossPercentage}% 😯`;
	} else {
		outputBox.style.color = '#FCD34D';
		outputBox.innerText = 'No gain No loss, be happy 😎';
	}
}

submitButton.addEventListener('click', submitHandler);
