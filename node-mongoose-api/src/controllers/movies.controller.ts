import { NextFunction, Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'

import { Movie, MovieDoc } from '../models'

abstract class MoviesController {
  public static createMovie(req: Request, res: Response, next: NextFunction) {
    Movie.create(req.body).then((data: MovieDoc) => {
      res.status(StatusCodes.CREATED).send(data)
    }).catch((err: Error) => {
      next(err)
    })
  }

  public static deleteMovie(req: Request, res: Response, next: NextFunction) {
    Movie.findByIdAndDelete(req.params.movieId).then((data: MovieDoc | null) => {
      res.status(data ? StatusCodes.OK : StatusCodes.NOT_FOUND).send(data)
    }).catch((err: Error) => {
      next(err)
    })
  }

  public static getMovie(req: Request, res: Response, next: NextFunction) {
    Movie.findById(req.params.movieId).then((data: MovieDoc | null) => {
      res.status(data ? StatusCodes.OK : StatusCodes.NOT_FOUND).send(data)
    }).catch((err: Error) => {
      next(err)
    })
  }

  public static getMovies(req: Request, res: Response, next: NextFunction) {
    Movie.find({}).then((data: Array<MovieDoc>) => {
      res.status(StatusCodes.OK).send(data)
    }).catch((err: Error) => {
      next(err)
    })
  }

  public static updateMovie(req: Request, res: Response, next: NextFunction) {
    Movie.findByIdAndUpdate(req.params.movieId, req.body, { returnDocument: 'after' }).then((data: MovieDoc | null) => {
      res.status(data ? StatusCodes.OK : StatusCodes.NOT_FOUND).send(data)
    }).catch((err: Error) => {
      next(err)
    })
  }
}

export default MoviesController
