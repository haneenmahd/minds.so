import React from 'react'
import ReactDOM from 'react-dom'
import Style from './styles'

export default function PreviewExport({
    active,
    children
}) {
  return (
    ReactDOM.createPortal(
        <Style active={active}>
            {children}
        </Style>,
        document.getElementById("modal-root")
    )
  )
}
