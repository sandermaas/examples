import mongoose, { Document, Schema } from 'mongoose'

export interface MovieDoc extends Document {
  actors: Array<string>
  director: string
  duration: number
  genre: string
  releaseDate: Date
  title: string
}

const MovieSchema = new Schema({
  actors: {
    type: [Schema.Types.String],
    required: true
  },
  director: {
    type: Schema.Types.String,
    required: true
  },
  duration: {
    type: Schema.Types.Number,
    required: true
  },
  genre: {
    type: Schema.Types.String,
    enum: ['Drama']
  },
  releaseDate: {
    type: Schema.Types.Date,
    required: true
  },
  title: {
    type: Schema.Types.String,
    required: true
  }
})

const Movie = mongoose.model<MovieDoc>('Movie', MovieSchema)

export default Movie
