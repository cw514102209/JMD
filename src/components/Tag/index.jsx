import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './index.less'

export default class Tag extends React.Component {
  static propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
  }

  static defaultProps = {
    type: 'default',
  }

  render() {
    const { type, children, className } = this.props
    return (
      <span className={classNames(styles.jm_tag_wrapper, styles[`jm_tag_${type}`], className)}>
        {children}
      </span>
    )
  }
}
