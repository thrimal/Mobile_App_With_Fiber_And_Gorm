package models

type Customer struct {
	Id       string `json:"id"`
	Name     string `json:"name"`
	Address  string `json:"address"`
	Contact  string `json:"contact"`
	Password string `json:"password"`
}
