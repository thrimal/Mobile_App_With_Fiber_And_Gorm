package main

import (
	"FiberCRUDwithGorm/database"
	"FiberCRUDwithGorm/repository"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"log"
)

func main() {
	app := fiber.New()

	database.InitDatabase()
	app.Use(cors.New())
	app.Post("/api/v1/fiber", repository.GoPost)
	app.Get("/api/v1/fiber", repository.GoGetAll)
	app.Get("/api/v1/fiber/:id", repository.GoGet)
	app.Get("/api/v1/fiber/login/:name/:password", repository.GoLogin)
	app.Delete("/api/v1/fiber/:id", repository.GoDelete)
	app.Put("/api/v1/fiber/:id", repository.GoPut)
	defer database.DBConn.Close()

	log.Fatal(app.Listen(":3500"))
}
