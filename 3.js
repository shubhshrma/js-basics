//Program to sort an array in ascending order using insertion sort algorithm

function insertionSort(arr) {	//accepts the array as a parameter
	let length = arr.length;	//length of the array
	for(let i=0;i<length;i++)	//for loop through the array and insert each elemnet in it's correct position
	{
		let key = arr[i];	//element stored in key variable
		let j=i-1;

		while(j>=0 && arr[j]>key) {		//find the correct position for the element
			arr[j+1] = arr[j];
			j--;
		}

		arr[j+1] = key;		//insert the element at its correct position

	}
}

function printArray(arr) {		//function to print the array, accepts the array as a parameter
	let length = arr.length;
	console.log("Array: ");
	for(let i=0;i<length;i++)	//for loop to go through the array printing its elements
	{
		console.log(arr[i]);
	}
}

let arr = [5,3,2,1,4];
insertionSort(arr);		//sort the array
printArray(arr);		//print the array
