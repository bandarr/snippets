package main

import "fmt"

func BubbleSort(numbers []int) []int {
	for i := len(numbers); i > 0; i-- {
		for j := 1; j < i; j++ {
			if numbers[j-1] > numbers[j] {
				intermediate := numbers[j]
				numbers[j] = numbers[j-1]
				numbers[j-1] = intermediate
			}
		}
	}
	return numbers
}

func main() {
	numbers := []int{11, 14, 3, 8, 18, 17, 43}
	fmt.Println(BubbleSort(numbers))
}
