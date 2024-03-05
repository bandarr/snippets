package main

import "fmt"

func main() {
	var x uint8 = 0xAC
	fmt.Println(x)
	var y uint8 = 0xF0
	fmt.Println(y)
	x = x & y
	fmt.Println(x)
}
