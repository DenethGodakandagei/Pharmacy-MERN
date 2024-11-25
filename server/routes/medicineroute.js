import  express from "express";
import { Medicine } from "../module/medicinemodule.js";

const router = express.Router();

router.post("/", async (request, response) => {
  try {
  
    const newmedicine = {
      name: request.body.name,
      type: request.body.type,
      quantity: request.body.quantity,
      expireDate: request.body.expireDate,
      price: request.body.price,
      manufacture: request.body.manufacture,
      Milligrams: request.body.Milligrams,
      itemImg : request.body.itemImg,
    };

    const medicine = await Medicine.create(newmedicine);

    return response.status(201).send(medicine);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.massage });
  }
  
});
// get all medicines
router.get("/", async (request, response) => {
  try {
    const medicines = await Medicine.find({});
    return response.status(200).json(medicines);
  } catch (error) {
    console.log(error.massage);
    response.status(500).send({ massage: error.massage });
  }
});

// get  medicene from database by id
router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const medicine = await Medicine.findById(id);
    return response.status(200).json(medicine);
  } catch (error) {
    console.log(error.massage);
    response.status(500).send({ massage: error.massage });
  }
});

//route for update medicine
router.put("/:id", async (request, response) => {
  try {     
   
    const { id } = request.params;

    const result = await Medicine.findByIdAndUpdate(id, request.body);
    if (!result) {
      return response.status(404).json({ massage: "this medicine not found" });
    }
    return response.status(200).send({ massage: "medicine Updated successfully" });
  } catch (error) {
    console.log(error.massage);
    response.status(500).send({ massage: error.massage });
  }
});

// Route for delete a medicine
router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Medicine.findByIdAndDelete(id);
    if (!result) {
      return response.status(404).json({ massage: "medicine not found" });
    }
    return response.status(200).send({ massage: "medicine deleted successfully" });
  } catch (error) {
    console.log(error.massage);
    response.status(500).send({ massage: error.massage });
  }
});

  
export default router;