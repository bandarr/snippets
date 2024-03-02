package main

import "fmt"

func main() {

	for i := 1; i < 101; i++ {

		var output string

		if i%3 == 0 {
			output = "fizz"
		}

		if i%5 == 0 {
			output += "buzz"
		}

		if len(output) == 0 {
			fmt.Println(i)
		} else {
			fmt.Println(output)
		}
	}
}
