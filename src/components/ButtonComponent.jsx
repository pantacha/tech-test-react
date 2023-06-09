import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { NotifyContext } from '../context/'

export const ButtonComponent = ({ clickToNotify }) => {

  return (

        <button 
            className="btn btn-outline-primary col-md-3 offset-md-6 mt-4"
            onClick={ clickToNotify }
            >
          Click to notify
        </button>

  )

}

ButtonComponent.propTypes = {
  clickToNotify: PropTypes.func.isRequired
}
