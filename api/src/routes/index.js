const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const pokemonRoutes= require('./PokemonRouter.js');
const typeRoutes= require('./TypeRouter.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/pokemons", pokemonRoutes);
router.use("/types", typeRoutes);

module.exports = router;
