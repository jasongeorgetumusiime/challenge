import {
  IMAGES_INIT, IMAGE_ADD, IMAGE_REMOVE, IMAGES_ERROR, IMAGE_RESET_ALERT
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

const applyImageRemove = (state, action) => ({
  ...state,
  isImageAdded: false,
  images: state.images.filter(image => image.id != action.payload)
})

const applyResetAlert = (state, _) => ({ ...state, isImageAdded: false })

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
    case IMAGE_RESET_ALERT: {
      return applyResetAlert(state, action);
    }
    default: return state;
  }
}

export default imagesReducer;