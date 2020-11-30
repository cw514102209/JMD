import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './index.less'

export default class DetailLabel extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
  }

  static defaultProps = {
    name: '',
    value: '',
  }

  render() {
    const { className, name, value, ...rest } = this.props

    return (
      <div className={classnames(styles.jm_label_label, className)} {...rest}>
        <span className={styles.jm_label_name}>{name}</span>
        {value}
      </div>
    )
  }
}
