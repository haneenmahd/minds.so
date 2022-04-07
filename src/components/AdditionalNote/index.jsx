import React from 'react'
import { Info as InfoIcon } from 'react-feather'
import Style from './styles'

export default function AdditionalNote({
    note = "Your note component!"
}) {
  return (
    <Style>
        <InfoIcon />
        {note}
    </Style>
  )
}
