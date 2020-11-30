import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './index.less'

export default class Panel extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    extras: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.func]),
  }

  render() {
    const { className, title, children, extras } = this.props
    return (
      <div
        className={styles.jm_panel_wrapper}
        data-test={`panel-${
          title
            ? title
                .toLowerCase()
                .split(' ')
                .join('-')
            : 'default'
        }`}
      >
        {title && <div className={styles.jm_panel_title}>{title}</div>}
        <div className={classNames(styles.jm_panel_children, className)}>{children}</div>
        {extras}
      </div>
    )
  }
}
