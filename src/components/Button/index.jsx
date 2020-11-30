import React, {PureComponent} from 'react'
import { Icon } from 'antd'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './index.less'

export default class Button extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    block: PropTypes.bool,
    disabled: PropTypes.bool,
    htmlType: PropTypes.oneOf(['submit', 'button', 'reset']),
    icon: PropTypes.string,
    iconSize: PropTypes.number,
    loading: PropTypes.bool,
    noShadow: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'normal', 'large']),
    type: PropTypes.string,
    onClick: PropTypes.func,
    
  }

  static defaultProps = {
    block: false,
    disabled: false,
    htmlType: 'button',
    loading: false,
    noShadow: false,
    size: 'normal',
    type: 'default',
    onClick() {},
  }

  render() {
    const {
      children,
      className,
      type,
      htmlType,
      size,
      icon,
      iconSize,
      loading,
      noShadow,
      block,
      ...rest
    } = this.props
    return (
      <button
        className={classnames(
          styles.jm_btn_wrapper,
          styles[`jm_btn_${type}`],
          styles[`jm_btn_${size}`],
          {
            [styles['jm_btn_hasIcon']]: icon,
            [styles['jm_btn_loading']]: loading,
            [styles['jm_btn_noShadow']]: noShadow,
            [styles['jm_btn_block']]: block,
          },
          className,
        )}
        type={htmlType}
        data-test="button"
        {...rest}
      >
        {icon && <Icon type={icon} style={{ fontSize: iconSize }} />}
        {children && <div className={styles.jm_btn_content}>{children}</div>}
        {loading && <Icon type="loading" />}
      </button>
    )
  }
}