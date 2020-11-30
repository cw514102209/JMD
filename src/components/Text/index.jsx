import React from 'react'
import { Icon } from 'antd'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './index.less'

export default class Text extends React.PureComponent {
  static propTypes = {
    icon: PropTypes.string,
    theme: PropTypes.string,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.func]),
    description: PropTypes.string
  }

  static defaultProps = {
    theme: 'outlined'
  }

  render() {
    const { icon, theme, title, description, className } = this.props

    return (
      <div className={classnames(styles.jm_text_wrapper, className)}>
        {icon && <Icon className={styles.jm_text_icon} type={icon} theme={theme} style={{ fontSize: 40 }} />}
        <div className={styles.jm_text_content}>
          <div>{!title ? '-' : title}</div>
          <p>{description}</p>
        </div>
      </div>
    )
  }
}
