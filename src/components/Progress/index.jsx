import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './index.less'

export default class Progress extends React.Component {
  static propTypes = {
    value: PropTypes.number.isRequired,
    text: PropTypes.string,
    rightText: PropTypes.string,
  }

  static defaultProps = {
    value: 0,
  }

  render() {
    const { className, value, text, rightText } = this.props

    const style = {
      width: `${value * 100}%`,
    }

    let type = 'default'
    if (value >= 0.8) {
      type = 'warning'
    }
    if (value >= 0.95) {
      type = 'danger'
    }

    const textStyle = {
      left: value > 0.35 ? `${(value / 2) * 100}%` : `${(value + 0.01) * 100}%`,
      transform: value > 0.35 ? 'translateX(-50%)' : '',
      color: value > 0.35 ? '#fff' : '#79879c',
    }

    return (
      <div className={classnames(styles.jm_progress_wrapper, { [styles['jm_progress_large']]: text }, className)}>
        <div className={classnames(styles.jm_progress_use, styles[`jm_progress_${type}`])} style={style} />
        {text && !!value && (
          <span className={styles.jm_progress_text} style={textStyle}>
            {text}
          </span>
        )}
        <span className={styles.jm_progress_rightText}>{rightText || (text && '无限制')}</span>
      </div>
    )
  }
}
