import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Container>
            <a>
                <img src="/images/logo.svg" alt="Tesla" />
            </a>
        </Container>
    )
}

export default Header

const Container = styled.div`

`