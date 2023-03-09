import { Router } from "express";
import { getEmployees, getEmployee,  createEmployees, updateEmployees, deleteEmployees } from "../controllers/employees.controller.js";

const router = Router()

//Route to Controller 
router.get('/employees', getEmployees)                      //Obtener empleados
router.get('/employees/:id', getEmployee)                   //Obtener empleado por id
router.post('/employees', createEmployees)                  //Crear empleados
router.patch('/employees/:id', updateEmployees)             //Actualizar una porte de los empleados
router.delete('/employees/:id', deleteEmployees)            //Eliminar empleados



export default router;