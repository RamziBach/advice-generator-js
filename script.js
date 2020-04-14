const advice = document.querySelector('.advice');
const btn = document.querySelector('.btn');

// Fetch API

//fetch('https://api.adviceslip.com/advice')
//	.then(res => {
//		if (!res.ok) throw new Error('Error');
//		return res.json();
//	})
//	.then(data => advice.innerHTML = data.slip.advice)
//	.catch(err => console.error(err));

// async/await

//async function getAdvice() {
//	const response = await fetch('https://api.adviceslip.com/advice');
//	const data = await response.json();
//	advice.innerHTML = `"${data.slip.advice}"`;
//}
//
//btn.addEventListener('click', () => {
//	getAdvice()
//		.catch(err => console.error('Error'));
//});

const getAdvice = async () => {
	try {
		const response = await fetch('https://api.adviceslip.com/advice');
		if (response.ok) {
			const jsonResponse = await response.json();
			advice.innerHTML = `"${jsonResponse.slip.advice}"`;
		}
	} catch (error) {
		console.error(error);
	}
};

btn.addEventListener('click', () => {
	getAdvice();
});