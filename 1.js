//Program to find the number of elements divisible by 3 and 5 in an array

function solve(arr) {

	let length = arr.length;
	let three_five=0,  //variable to store count of numbers divisible by 3 and 5 both
	three=0, 		//variable to store count of numbers divisible by only 3 
	five=0, 		//variable to store count of numbers divisible by only 5
	other=0;		//variable to store the count of other numbers
	for(let i=0;i<length;i++)
	{
		if(arr[i]%3==0 && arr[i]%5==0)		
		{
			three_five++;
		}
		else if(arr[i]%3==0)
		{
			three++;
		}
		else if(arr[i]%5==0)
		{
			five++;
		}
		else
		{
			other++;
		}
	}

	console.log("Three and five: ", three_five);
	console.log("Three: ", three);
	console.log("Five: ", five);
	console.log("Others: ", other);

}

let arr = [1,2,3,4,5,6,7,8,9,15]; //input array
solve(arr);		// call the function and pass the array