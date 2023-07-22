import styled from '@emotion/styled'
import { Button } from '@mui/material'
import React from 'react'

const MuiButton = (props) => {
  return (
    <ButtonStyled variant={props.variant} onClick={props.onClick} size='small'>{props.children}</ButtonStyled>
  )
}

export default MuiButton

const ButtonStyled = styled(Button)`
    background-color: #f58735;
    width: 180px;
    &:hover {
        background-color: #fba766
    }
`