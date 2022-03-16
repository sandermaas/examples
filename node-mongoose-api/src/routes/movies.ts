import { Router } from 'express'

import { moviesController} from '../controllers'

const moviesRouter = Router()

moviesRouter.delete('/:movieId', moviesController.deleteMovie)
moviesRouter.get('/', moviesController.getMovies)
moviesRouter.get('/:movieId', moviesController.getMovie)
moviesRouter.post('/', moviesController.createMovie)
moviesRouter.put('/:movieId', moviesController.updateMovie)

export default moviesRouter
