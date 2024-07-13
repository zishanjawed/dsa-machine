export default function bubble_sort(arr: number[]): void {

    // take two pointers i and j = i + 1, where j < number.lenght 
    // if i > j, swap the value
    // after every interation reduce the pointer for lenght of array by 1
    // do this untill pointer for lenght of array is 1

    let length_of_unsorted_array = arr.length;

    while(length_of_unsorted_array > 1){

        let i = 0;
        let j = i+1;

        for (; i < length_of_unsorted_array-1 && j < length_of_unsorted_array; i++,j++ ){
            if ( arr[i] > arr[j]){
                let temp_container = arr[j];
                arr[j] = arr[i];
                arr[i] = temp_container;
            }
        }
        length_of_unsorted_array -= 1;
    }


}