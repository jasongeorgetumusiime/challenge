import {
  IMAGES_INIT, 
  IMAGE_ADD, 
  IMAGE_REMOVE, 
  IMAGES_ERROR, 
  IMAGE_RESET_ALERT,
  IMAGE_RESET_ERROR
} from '../../actionTypes'

const initialState = {
  error: false,
  isImageAdded: false,
  images: []
}

const applyImagesFetch = (state, action) => ({
  ...state,
  isImageAdded: false,
  images: [...state.images, ...action.payload]
})

const applyImageAdd = (state, action) => ({
  ...state,
  isImageAdded: true,
  images: [...state.images, action.payload]
})

const applyInvokeError = (state, action) => ({
  ...state,
  error: action.payload
})

const applyImageRemove = (state, action) => ({
  ...state,
  isImageAdded: false,
  images: state.images.filter(image => image.id != action.payload)
})

const applyResetAlert = (state, _) => ({ ...state, isImageAdded: false })
const applyResetError = (state, _) => ({ ...state, error: false })

const imagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case IMAGES_INIT: {
      return applyImagesFetch(state, action)
    }
    case IMAGE_ADD: {
      return applyImageAdd(state, action)
    }
    case IMAGE_REMOVE: {
      return applyImageRemove(state, action);
    }
    case IMAGES_ERROR: {
      return applyInvokeError(state, action);
    }
    case IMAGE_RESET_ALERT: {
      return applyResetAlert(state, action);
    }
    case IMAGE_RESET_ERROR: {
      return applyResetError(state, action);
    }
    default: return state;
  }
}

export default imagesReducer;