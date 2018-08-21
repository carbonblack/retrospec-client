import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { css } from 'react-emotion'
import { Link } from 'react-router-dom'
import colors from 'styles/colors'

const styles = {
    container: css`
        margin-right: 5rem;
    `,
    headerText: css`
        color: ${ colors.logoOrange };
        font-size: 3rem;
        margin-bottom: 1rem;
    `,
    groupsContainer: css`
        list-style-type: none;
        padding: 0;
        color: ${ colors.white };

        li {
            margin-bottom: 0.5rem;
            font-size: 1.2rem;
        }
    `,
    link: css`
        color: ${ colors.white };

        :hover, :visited, :active, :focus {
            color: ${ colors.white };
        } 
    `
}

class Groups extends Component {
    componentDidMount() {
        this.props.load()
    }

    render() {
        const { groups } = this.props

        return(
            <div className={ styles.container }>
                <h1 className={ styles.headerText }>Workspaces</h1>
                <ul className={ styles.groupsContainer }>
                    <Link className={ styles.link } to='/boards/0'><li>My Boards</li></Link>
                    { groups.map(group => (
                        <li key={ `group-${ group.id }` }><Link className={ styles.link } to={ `/boards/${ group.id }` }>{ group.content.name }</Link></li>
                    )) }
                </ul>
            </div>
        )
    }
}

Groups.propTypes = {
    groups: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    fetchingErrors: PropTypes.string,
    load: PropTypes.func.isRequired
}

export default Groups
