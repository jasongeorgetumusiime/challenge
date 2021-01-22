import { fetchImages, deleteImage, postImage } from '../../api'
import {
  IMAGES_INIT, 
  IMAGE_ADD, 
  IMAGE_REMOVE, 
  IMAGES_ERROR, 
  IMAGE_RESET_ALERT,
  IMAGE_RESET_ERROR
} from '../actionTypes'


const doImagesError = (error) => ({
  type: IMAGES_ERROR,
  payload: error
})
const doImagesInit = (images) => ({
  type: IMAGES_INIT,
  payload: images
})
const doImageAdd = (image) => ({
  type: IMAGE_ADD,
  payload: image
})
const doImageRemove = (id) => ({
  type: IMAGE_REMOVE,
  payload: id
})

export const doResetAlert = () => ({
  type: IMAGE_RESET_ALERT
})

export const doResetError = () => ({
  type: IMAGE_RESET_ERROR
})


export const doImagesFetch = () => dispatch => {
  fetchImages()
    .then(result => dispatch(doImagesInit(result.data)))
    .catch(error => dispatch(doImagesError({ error: error })))

}
export const doImageDelete = id => dispatch => {
  deleteImage(id)
    .then(result => dispatch(doImageRemove(id)))
    .catch(error => dispatch(doImagesError({ error: error })))
}
export const doImagePost = image => dispatch => {
  postImage(image)
    .then(result => dispatch(doImageAdd(result.data)))
    .catch(error => dispatch(doImagesError({ error: error })))
}