package repository

import (
	"FiberCRUDwithGorm/database"
	"FiberCRUDwithGorm/models"
	"github.com/gofiber/fiber/v2"
)

func GoPost(ctx *fiber.Ctx) error {
	cust := new(models.Customer)
	if err := ctx.BodyParser(cust); err != nil {
		return err
	}
	database.DBConn.Create(&cust)
	return ctx.Status(fiber.StatusCreated).JSON(cust)
}

func GoGetAll(ctx *fiber.Ctx) error {
	var customers []models.Customer
	database.DBConn.Find(&customers)
	//ctx.JSON(token)
	return ctx.Status(fiber.StatusOK).JSON(customers)
}

func GoDelete(ctx *fiber.Ctx) error {
	id := ctx.Params("id")
	var cust models.Customer
	database.DBConn.Where("id=?", id).Find(&cust)
	if cust.Name == "" {
		return ctx.Status(500).SendString("No Customer Found with ID")
	}
	database.DBConn.Delete(&cust)
	return ctx.Status(fiber.StatusOK).JSON(nil)
}

func GoGet(ctx *fiber.Ctx) error {
	var cust models.Customer
	id := ctx.Params("id")
	database.DBConn.Where("id=?", id).Find(&cust)
	return ctx.Status(fiber.StatusOK).JSON(cust)
}

func GoLogin(ctx *fiber.Ctx) error {
	var cust models.Customer
	name := ctx.Params("name")
	password := ctx.Params("password")
	database.DBConn.Where("name=? && password=?", name, password).Find(&cust)
	return ctx.Status(fiber.StatusOK).JSON(cust)
}

func GoPut(ctx *fiber.Ctx) error {
	id := ctx.Params("id")
	cust := new(models.Customer)
	if err := ctx.BodyParser(cust); err != nil {
		return err
	}
	database.DBConn.Model(&cust).Where("id=?", id).Updates(&cust)
	return ctx.Status(fiber.StatusOK).JSON(cust)
}

