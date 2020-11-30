import React from 'react'
import { Icon } from 'antd'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './index.less'

export default class Add extends React.Component {
  static propTypes = {
    icon: PropTypes.string,
  }

  static defaultProps = {
    icon: 'plus',
  }
  
  render() {
    const { icon, image, title, description, onClick, type } = this.props

    return (
      <div
        className={classNames(
          styles.jm_list_add,
          { [styles['jm_list_withIcon']]: icon || image },
          styles[`jm_list_${type}`],
        )}
        onClick={onClick}
      >
        <div className={styles.jm_list_icon}>
          {image ? (
            <img src={image} alt="" />
          ) : (
            icon && <Icon type={icon} style={{ fontSize: 40 }} />
          )}
        </div>
        <div className={styles.jm_list_text}>
          <div className={styles.jm_list_title}>{title}</div>
          <div className={styles.jm_list_description}>{description}</div>
        </div>
      </div>
    )
  }
}
