//Program to find all the primes between two numbers

function findPrime(lower, upper) {
	console.log("The primes between " + lower + " and " + upper + " are:");
	
	for(let i=lower;i<=upper;i++)	//Go from lower to upper and check which elements are prime
	{
		let flag=0;
		for(let j=2;j<=Math.sqrt(i);j++)
		{
			if(i%j==0) {  	//If divisible then it is not prime
				flag=1;
			}
		}
		if(flag==0) {		//If flag is zero, it is prime, output it 
			console.log(i);
		}
	}
}

findPrime(6,190); //call the function and pass the lower and upper for prime