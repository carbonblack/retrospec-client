import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import Home from 'components/Home'
import BoardsContainer from 'containers/BoardsContainer'
import BoardContainer from 'containers/BoardContainer'
import BoardFormContainer from 'containers/NewBoardContainer'
import TopNavigation from 'components/TopNavigation'

const Routes = ({ location }) => (
    <Fragment>
        <TopNavigation shouldShow={ location.pathname !== '/' } />
        <div>
            <Switch>
                <Route exact path="/" component={ Home } />
                <Route path="/board/new" component={ BoardFormContainer } />
                <Route path="/board/:id" component={ BoardContainer } />
                <Route path="/boards" component={ BoardsContainer } />
            </Switch>
        </div>
    </Fragment>
)

Routes.propTypes = {
    location: PropTypes.object.isRequired
}

export default Routes
