import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { css } from 'react-emotion'
import colors from 'styles/colors'
import BoardsTable from 'components/boards/BoardsTable'

const container = css`
    display: flex;
    flex-direction: column;

    a {
        text-decoration: none;
    }
`

const inner = css`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

const header = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
`

const headerInner = css`
    background: ${ colors.offWhite };
    border: 5px solid ${ colors.black };
    padding: 1rem 2rem;
    border-radius: 2px;
    text-transform: uppercase;
`

class Boards extends Component {
    componentDidMount() {
        this.props.load()
    }

    render() {
        const { boards, onDelete } = this.props
        
        return (
            <div className={ container }>
                <div className={ header }>
                    <h2 className={ headerInner }>All Retro Boards</h2>
                </div>
                <div className={ inner }>
                    <BoardsTable boards={ boards } onDelete={ (id) => onDelete(id) } />
                </div>
            </div>
        )
    }
}

Boards.propTypes = {
    load: PropTypes.func.isRequired,
    boards: PropTypes.array,
    onDelete: PropTypes.func.isRequired
}

Boards.defaultProps = {
    boards: []
}

export default Boards
