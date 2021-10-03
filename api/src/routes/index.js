const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countriesRoutes=require("./Countries.js")
const activitiesRoutes=require("./Activities.js")

const router = Router();

//MODULARIZACION
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/countries", countriesRoutes)
router.use("/activities", activitiesRoutes)

router.use(function (err, req, res, next) {             
    console.error(err);
    res.status(err.status || 500).send(err.message);
});




module.exports = router;
