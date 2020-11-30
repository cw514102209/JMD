import React from 'react'
import classNames from 'classnames'
import { Icon } from 'antd'
import Button from '../Button'
import Indicator from '../Indicator'

import styles from './index.less'

export default class Item extends React.Component {
  renderDetail(details) {
    return details.map((detail, index) => (
      <div key={index} className={styles.jm_list_text}>
        <div className={styles.jm_list_title}>{detail.title}</div>
        {detail.description && (
          <div className={styles.jm_list_description}>{detail.description}</div>
        )}
      </div>
    ))
  }

  render() {
    const {
      icon,
      image,
      title,
      status,
      description,
      extras,
      details,
      operations,
      onDelete,
      onEdit,
      onClick,
      className,
      titleClass,
    } = this.props

    return (
      <div
        className={classNames(
          styles.jm_list_item,
          {
            [styles['jm_list_withIcon']]: icon || image,
          },
          className,
        )}
        onClick={onClick}
      >
        <div className={styles.jm_list_icon}>
          {image ? (
            <img src={image} alt="" />
          ) : (
            icon && <Icon type={icon} style={{ fontSize: 40 }} />
          )}
          {status ? (
            <Indicator className={styles.jm_list_indicator} type={status} />
          ) : null}
        </div>
        <div className={styles.jm_list_texts}>
          <div className={classNames(styles.jm_list_text, titleClass)}>
            <div className={styles.jm_list_title}>{title}</div>
            <div className={styles.jm_list_description}>{description}</div>
          </div>
          {details && this.renderDetail(details)}
        </div>
        {extras}
        {operations || (
          <div className={styles.jm_list_btns}>
            {onDelete && <Button type="flat" icon="delete" onClick={onDelete} />}
            {onEdit && <Button type="flat" icon="edit" onClick={onEdit} />}
          </div>
        )}
      </div>
    )
  }
}
